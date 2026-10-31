#!/usr/bin/env node
// Imports the Verso tutorial vaults into a committed snapshot the site builds.
//
//   node scripts/wiki-import.mjs [--verso ../verso]
//
// Reads (never writes) the product repository's demo-vault/ (pt-BR) and
// demo-vault-en/ (English), paired by scripts/demo-vault/names.mjs, and writes:
//   src/content/wiki/<pt|en>/<slug>.md   one page per lesson, clean Markdown
//   src/content/wiki/_meta.json          product version + source commit
//   public/wiki-assets/*                 the images the lessons use
// The product repository is private, so the site build never reads it: it
// reads this snapshot. Run the script, review the diff, commit.
//
// Only the numbered lessons ("NN - Title.md") are pages. The rest of a vault
// (boards, bases, templates, sample notes, the Fractal campaign, daily notes)
// is data for the lessons' demos, not documentation.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const vi = argv.indexOf("--verso");
const verso = path.resolve(vi >= 0 ? argv[vi + 1] : path.join(root, "../verso"));

const LANGS = {
  pt: { dir: "demo-vault", prefix: "/wiki/" },
  en: { dir: "demo-vault-en", prefix: "/en/wiki/" },
};

// Reader-facing groups, by lesson number (the vault's lessons are one flat
// folder, so the grouping is the site's).
const GROUPS = {
  start: [0, 1, 2, 3, 11, 12, 14, 15],
  organize: [4, 5, 6, 7, 8, 19, 20, 21, 28, 30],
  boards: [9, 10],
  tools: [13, 16, 17, 18, 22, 33],
  server: [23, 24, 34, 29],
  rpg: [25, 26, 27, 31, 32],
};
const groupOf = (n) => Object.keys(GROUPS).find((g) => GROUPS[g].includes(n)) ?? "start";

const LABELS = {
  pt: { note: "Nota", tip: "Dica", warning: "Aviso", important: "Importante", info: "Informação", example: "Exemplo", oracle: "Oráculo", secret: "Segredo" },
  en: { note: "Note", tip: "Tip", warning: "Warning", important: "Important", info: "Info", example: "Example", oracle: "Oracle", secret: "Secret" },
};

const ASSET_EXT = /\.(png|jpe?g|gif|webp|svg)$/i;
const report = { skipped: [], unresolved: [], missingAssets: [], assets: new Set() };

const slugify = (s) =>
  s.normalize("NFD").replace(/\p{M}+/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
// Emoji the vault puts at the start of a heading ("## 🛡️ O que é…"): the
// site drops them from headings (and from links to a heading), so titles,
// outlines and anchors read as words. Emoji inside body text stay.
const LEAD_EMOJI = /^(?:[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}][\u{FE0F}\u{20E3}\u{200D}\u{1F3FB}-\u{1F3FF}\p{Extended_Pictographic}]*\s*)+/u;
const stripLeadEmoji = (s) => s.replace(LEAD_EMOJI, "");
// Same rule as the heading ids Astro (github-slugger) gives.
const headingId = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}\p{M}\s_-]/gu, "").replace(/ /g, "-");

function parseNote(file) {
  const raw = fs.readFileSync(file, "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const fm = {};
  if (m) for (const line of m[1].split("\n")) {
    const k = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (k) fm[k[1]] = k[2].replace(/^["']|["']$/g, "");
  }
  return { fm, body: m ? raw.slice(m[0].length) : raw };
}

// Split a line into [text, isCode] runs on inline code spans.
function runs(line) {
  const out = [];
  const re = /(`+)(?:(?!\1)[\s\S])*?\1/g;
  let last = 0, m;
  while ((m = re.exec(line))) {
    if (m.index > last) out.push([line.slice(last, m.index), false]);
    out.push([m[0], true]);
    last = m.index + m[0].length;
  }
  if (last < line.length) out.push([line.slice(last), false]);
  return out;
}

const { NAMES } = await import(pathToFileURL(path.join(verso, "scripts/demo-vault/names.mjs")).href);
const lessonRe = /^(\d\d) - .+\.md$/;
const pairs = Object.entries(NAMES).filter(([pt]) => lessonRe.test(pt));
for (const [pt] of Object.entries(NAMES)) if (!lessonRe.test(pt)) report.skipped.push(pt);

// Pass 1: slugs, titles, link index.
const pages = { pt: [], en: [] };
for (const [ptName, enName] of pairs) {
  for (const [lang, rel] of [["pt", ptName], ["en", enName]]) {
    const file = path.join(verso, LANGS[lang].dir, rel);
    const { fm, body } = parseNote(file);
    const n = Number(rel.slice(0, 2));
    const stem = rel.replace(/\.md$/, "");
    const title = fm.title || stem.replace(/^\d\d - /, "");
    pages[lang].push({ lang, n, rel, stem, title, slug: slugify(stem.replace(/^\d\d - /, "")), fm, body, date: fm.date ?? "" });
  }
}
const pairSlug = {}; // pt slug -> en slug
pages.pt.forEach((p, i) => (pairSlug[p.slug] = pages.en[i].slug));

const index = { pt: new Map(), en: new Map() };
for (const lang of ["pt", "en"]) for (const p of pages[lang]) {
  index[lang].set(p.stem.toLowerCase(), p);
  index[lang].set(p.stem.replace(/^\d\d - /, "").toLowerCase(), p);
}

// Descriptions come from the welcome note's "map": `N. [[Note]] — what it covers`.
function descriptions(lang) {
  const map = new Map();
  const welcome = pages[lang].find((p) => p.n === 0);
  for (const line of welcome.body.split("\n")) {
    const m = line.match(/^\d+\.\s+\[\[([^\]|]+)(?:\|[^\]]*)?\]\]\s+[—-]\s+(.*)$/);
    if (m) map.set(m[1].trim().toLowerCase(), m[2].replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, "$1").trim());
  }
  return map;
}

function convert(page) {
  const { lang } = page;
  const prefix = LANGS[lang].prefix;
  const idx = index[lang];
  const resolve = (target) => idx.get(target.replace(/\.md$/, "").toLowerCase()) ?? idx.get(path.basename(target).replace(/\.md$/, "").toLowerCase());
  const label = (t) => (t.includes("/") ? t.split("/").pop() : t).replace(/\.(md|canvas|base|excalidraw)$/i, "").replace(/^\d\d - /, "");

  function asset(name) {
    const base = path.basename(name);
    const src = path.join(verso, "demo-vault/assets", base);
    if (!fs.existsSync(src)) { report.missingAssets.push(`${page.rel}: ${name}`); return null; }
    report.assets.add(base);
    return `/wiki-assets/${base}`;
  }

  function wikilink(raw, embed) {
    let [target, alias] = raw.split("|");
    target = target.replace(/\\$/, "").trim();
    alias = alias?.replace(/\\$/, "").trim();
    if (embed) {
      if (ASSET_EXT.test(target.split("#")[0])) {
        const url = asset(target);
        const alt = alias && !/^\d+(x\d+)?$/.test(alias) ? alias : path.basename(target).replace(/\.[^.]+$/, "");
        return url ? `![${alt}](${url})` : `*${alt}*`;
      }
      if (/\.pdf/i.test(target)) {
        const url = asset(target.split("#")[0]);
        const nm = path.basename(target.split("#")[0]);
        return url ? `[${nm}](${url})` : `*${nm}*`;
      }
      const nt = target.split("#")[0];
      const p = nt && resolve(nt);
      if (p) return `[${p.title}](${prefix}${p.slug}/)`;
      return `*${label(nt)}*`;
    }
    let [nt, frag = ""] = target.split("#");
    frag = stripLeadEmoji(frag);
    if (!nt) return `[${alias ?? frag}](#${headingId(frag)})`;
    const p = resolve(nt);
    if (!p) {
      if (!/\.(canvas|base|excalidraw)/.test(nt)) report.unresolved.push(`${page.rel}: [[${target}]]`);
      return alias ?? label(nt);
    }
    const hash = frag && !frag.startsWith("^") ? `#${headingId(frag)}` : "";
    return `[${alias ?? p.title}](${prefix}${p.slug}/${hash})`;
  }

  const out = [];
  let fence = null;
  let droppedH1 = false;
  for (let line of page.body.split("\n")) {
    const f = line.match(/^\s*(```+|~~~+)/);
    if (f) {
      if (!fence) fence = f[1][0];
      else if (f[1][0] === fence) fence = null;
      out.push(line);
      continue;
    }
    if (fence) { out.push(line); continue; }
    if (!droppedH1 && /^# /.test(line)) { droppedH1 = true; continue; }
    const h = line.match(/^(#{1,6}\s+)(.*)$/);
    if (h) line = h[1] + stripLeadEmoji(h[2]);
    // Callout header -> bold label inside a plain blockquote.
    const c = line.match(/^(\s*>\s?)\[!([A-Za-z]+)\][-+]?\s*(.*)$/);
    if (c) {
      const type = c[2].toLowerCase();
      const lab = LABELS[lang][type] ?? c[2];
      const title = c[3].trim();
      const pre = c[1].replace(/\s*$/, "");
      out.push(`${pre} **${title ? `${lab}: ${title}` : lab}**`, pre);
      continue;
    }
    line = runs(line)
      .map(([t, code]) => {
        if (code) return t;
        t = t.replace(/(!?)\[\[([^\]]+)\]\]/g, (_, bang, raw) => wikilink(raw, !!bang));
        // Standard images: ![alt|320](assets/x.png)
        t = t.replace(/!\[([^\]]*)\]\((?!https?:)([^)]+)\)/g, (m, alt, src) => {
          const url = asset(src);
          return url ? `![${alt.replace(/\|\d+$/, "")}](${url})` : `*${alt}*`;
        });
        return t;
      })
      .join("");
    out.push(line);
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

// Write.
const outRoot = path.join(root, "src/content/wiki");
fs.rmSync(outRoot, { recursive: true, force: true });
fs.rmSync(path.join(root, "public/wiki-assets"), { recursive: true, force: true });
const sha = (cwd) => execFileSync("git", ["-C", cwd, "rev-parse", "--short", "HEAD"], { encoding: "utf8" }).trim();
const cargo = fs.readFileSync(path.join(verso, "Cargo.toml"), "utf8");
const version = cargo.match(/\[workspace\.package\][\s\S]*?\nversion\s*=\s*"([^"]+)"/)[1];
const counts = {};
for (const lang of ["pt", "en"]) {
  const descs = descriptions(lang);
  fs.mkdirSync(path.join(outRoot, lang), { recursive: true });
  for (const p of pages[lang]) {
    const body = convert(p);
    const desc = descs.get(p.stem.toLowerCase()) ??
      (lang === "pt"
        ? "Por onde começar: o que é o Verso e um mapa de todas as lições."
        : "Where to start: what Verso is and a map of every lesson.");
    const q = (s) => JSON.stringify(s);
    const fm = [
      "---",
      `title: ${q(p.title)}`,
      `description: ${q(desc)}`,
      `order: ${p.n}`,
      `group: ${groupOf(p.n)}`,
      `slug: ${q(p.slug)}`,
      `twin: ${q(lang === "pt" ? pairSlug[p.slug] : pages.pt.find((x) => pairSlug[x.slug] === p.slug).slug)}`,
      `source: ${q(`${LANGS[lang].dir}/${p.rel}`)}`,
      `updated: ${q(p.date)}`,
      "---",
      "",
    ].join("\n");
    fs.writeFileSync(path.join(outRoot, lang, `${p.slug}.md`), fm + body);
  }
  counts[lang] = pages[lang].length;
}
fs.writeFileSync(
  path.join(outRoot, "_meta.json"),
  JSON.stringify({ version, commit: sha(verso), pages: counts }, null, 2) + "\n",
);
fs.mkdirSync(path.join(root, "public/wiki-assets"), { recursive: true });
for (const a of report.assets) fs.copyFileSync(path.join(verso, "demo-vault/assets", a), path.join(root, "public/wiki-assets", a));

console.log(`wiki-import: ${counts.pt} pt + ${counts.en} en pages, ${report.assets.size} assets, Verso ${version} @ ${sha(verso)}`);
console.log(`skipped (not lessons): ${report.skipped.length} files`);
if (report.unresolved.length) console.log("unresolved links (left as plain text):\n  " + [...new Set(report.unresolved)].join("\n  "));
if (report.missingAssets.length) console.log("missing assets:\n  " + report.missingAssets.join("\n  "));
