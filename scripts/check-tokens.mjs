#!/usr/bin/env node
// Compares the design tokens copied into src/styles/tokens.css with the
// Verso window's own, and the fonts in public/fonts with the window's files.
// Exits 1 when they drift, 2 when the product's files cannot be found.
//
// Where the product is: --product <path>, or VERSO_REPO, or ../verso beside
// this repository. --allow-missing turns "cannot find it" into a warning and
// exit 0 (CI without read access to the private product repository).
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(dirname(fileURLToPath(import.meta.url)));
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};

const product = resolve(option("--product") ?? process.env.VERSO_REPO ?? join(here, "..", "verso"));
const productCss = join(product, "app/ui/css/base.css");
const productFonts = join(product, "app/ui/fonts");
const siteCss = join(here, "src/styles/tokens.css");
const siteFonts = join(here, "public/fonts");

// The window's layout, not the brand: not copied, not compared.
const IGNORED = new Set(["--side-w", "--ribbon-w", "--rail-w"]);

const stripComments = (css) => css.replace(/\/\*[\s\S]*?\*\//g, "");
const norm = (v) => v.replace(/\s+/g, " ").trim();

function declarations(block) {
  const out = new Map();
  for (const m of stripComments(block).matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
    out.set(m[1], norm(m[2]));
  }
  return out;
}

function productTokens(css) {
  // The first top-level `:root {` block: the window's defaults.
  const start = css.search(/^:root\s*\{/m);
  if (start < 0) throw new Error(`no :root block in ${productCss}`);
  const end = css.indexOf("\n}", start);
  return declarations(css.slice(css.indexOf("{", start) + 1, end));
}

function siteTokens(css) {
  const m = css.match(/\/\* BEGIN copied from verso app\/ui\/css\/base\.css @ (\w+) \*\/([\s\S]*?)\/\* END copied \*\//);
  if (!m) throw new Error(`no BEGIN/END copied block in ${siteCss}`);
  return { commit: m[1], tokens: declarations(m[2]) };
}

const sha = (path) => createHash("sha256").update(readFileSync(path)).digest("hex");

if (!existsSync(productCss)) {
  const msg = `cannot find the product's ${productCss} (pass --product <path to the verso repository> or set VERSO_REPO)`;
  if (flag("--allow-missing")) {
    console.log(process.env.GITHUB_ACTIONS ? `::warning::tokens not compared: ${msg}` : `warning: tokens not compared: ${msg}`);
    process.exit(0);
  }
  console.error(`error: ${msg}`);
  process.exit(2);
}

const problems = [];
const prod = productTokens(readFileSync(productCss, "utf8"));
const { commit, tokens: site } = siteTokens(readFileSync(siteCss, "utf8"));

for (const [name, value] of site) {
  if (!prod.has(name)) problems.push(`${name}: in the site, gone from the product`);
  else if (prod.get(name) !== value) problems.push(`${name}: site  ${value}\n${" ".repeat(name.length + 2)}product ${prod.get(name)}`);
}
for (const name of prod.keys()) {
  if (!IGNORED.has(name) && !site.has(name)) problems.push(`${name}: new in the product, not copied to the site`);
}

const fonts = readdirSync(productFonts).filter((f) => f.endsWith(".woff2"));
for (const f of fonts) {
  const mine = join(siteFonts, f);
  if (!existsSync(mine)) problems.push(`font ${f}: in the product, missing from public/fonts`);
  else if (sha(mine) !== sha(join(productFonts, f))) problems.push(`font ${f}: differs from the product's file`);
}
for (const f of readdirSync(siteFonts).filter((f) => f.endsWith(".woff2"))) {
  if (!fonts.includes(f)) problems.push(`font ${f}: in the site, gone from the product`);
}

let head = "";
try {
  head = execFileSync("git", ["-C", product, "rev-parse", "--short", "HEAD"], { encoding: "utf8" }).trim();
} catch {
  head = "(not a git checkout)";
}

if (problems.length) {
  console.error(`tokens drifted: copied at ${commit}, the product is at ${head}\n`);
  for (const p of problems) console.error(`  ${p}`);
  console.error(`\nCopy the values again from app/ui/css/base.css and update the commit in the BEGIN line of src/styles/tokens.css.`);
  process.exit(1);
}
console.log(`tokens in step: ${site.size} tokens and ${fonts.length} fonts match the product at ${head} (copied at ${commit})`);
