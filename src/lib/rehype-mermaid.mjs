// @ts-check
// Mermaid diagrams in the wiki, drawn at build time.
//
// The vault's lessons write diagrams as ```mermaid blocks, which Verso and
// Obsidian draw. Here each block becomes an inline SVG while the site is
// built, by beautiful-mermaid (MIT; pure JavaScript, no browser, its layout
// from elkjs): no script reaches the visitor, and nothing changes in the
// Content-Security-Policy (public/_headers). The SVG the library writes
// carries a <style> element (with a Google Fonts @import) and a style
// attribute, which that policy refuses and the site would not load anyway;
// both are dropped, and the custom properties they defined live in
// wiki.css, built from the site's tokens, so the diagram follows light and
// dark like the rest of the page.
//
// Kept as the code it was:
// - a diagram type the library does not draw (gitGraph, pie, gantt,
//   mindmap…), with a line saying Verso draws it;
// - a block the library fails on (the build says which, and goes on).
// Every drawn diagram keeps its source in a closed <details> under it, and
// the .md twin of the page (for AI assistants) keeps the plain block.
//
// Accessibility: Mermaid's own `accTitle:` and `accDescr:` lines (Verso
// draws them as the SVG's title and description) name the picture; they
// are taken out before the library sees them.

import { renderMermaidSVG } from "beautiful-mermaid";

/** Types the library draws (its README, 1.1.3). */
const DRAWN = /^(flowchart|graph|sequenceDiagram|classDiagram|erDiagram|stateDiagram(-v2)?|xychart(-beta)?)\b/;

const WORDS = {
  pt: {
    source: "Código do diagrama",
    notDrawn: "Este tipo de diagrama aparece desenhado no Verso e no Obsidian; aqui fica o código dele.",
    label: "Diagrama",
  },
  en: {
    source: "Diagram source",
    notDrawn: "Verso and Obsidian draw this kind of diagram; here is its code.",
    label: "Diagram",
  },
};

/** @param {any} n @returns {string} */
const text = (n) => (n.type === "text" ? n.value : (n.children ?? []).map(text).join(""));
/** @param {string} s */
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Pull `accTitle: …` and `accDescr: …` (one line, or `accDescr { … }`) out.
 * @param {string} code
 */
function accessibility(code) {
  let title = "";
  let desc = "";
  const rest = [];
  const lines = code.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const t = line.match(/^\s*accTitle\s*:\s*(.*)$/);
    const d = line.match(/^\s*accDescr\s*:\s*(.*)$/);
    const block = line.match(/^\s*accDescr\s*\{\s*(.*)$/);
    if (t) title = t[1].trim();
    else if (d) desc = d[1].trim();
    else if (block) {
      const parts = [block[1]];
      while (i + 1 < lines.length && !parts[parts.length - 1].includes("}")) parts.push(lines[++i]);
      desc = parts.join(" ").replace(/\}\s*$/, "").replace(/\s+/g, " ").trim();
    } else rest.push(line);
  }
  return { title, desc, code: rest.join("\n") };
}

/**
 * The library's SVG, made fit for the page: no <style>, no style attribute,
 * no fixed size (the viewBox stays, and the width as the most it grows to),
 * ids unique on the page, and a name for assistive technology.
 * @param {string} svg @param {string} prefix @param {string} title @param {string} desc
 */
function clean(svg, prefix, title, desc) {
  let out = svg
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/\sstyle="[^"]*"/g, "")
    .replace(/\sid="([^"]+)"/g, ` id="${prefix}-$1"`)
    .replace(/url\(#([^)]+)\)/g, `url(#${prefix}-$1)`);
  const tId = `${prefix}-title`;
  const dId = `${prefix}-desc`;
  const labelled = desc ? `${tId} ${dId}` : tId;
  // The narrowest it may shrink to: three quarters of its width, in the
  // 40 px steps wiki.css has classes for (mm-min-320 … mm-min-800).
  const width = Number(out.match(/^<svg\b[^>]*\swidth="([\d.]+)"/)?.[1] ?? 0);
  const floor = Math.min(800, Math.round((width * 0.75) / 40) * 40);
  const cls = floor >= 320 ? `mermaid-svg mm-min-${floor}` : "mermaid-svg";
  out = out.replace(
    /^<svg\b([^>]*?)\sheight="[^"]*"([^>]*)>/,
    (_, a, b) => `<svg${a}${b} class="${cls}" role="img" aria-labelledby="${labelled}" focusable="false">` +
      `<title id="${tId}">${esc(title)}</title>` + (desc ? `<desc id="${dId}">${esc(desc)}</desc>` : ""),
  );
  return out;
}

export function rehypeMermaid() {
  let count = 0;
  return (/** @type {any} */ tree, /** @type {any} */ file) => {
    const where = String(file?.path ?? file?.history?.[0] ?? "");
    const lang = /[\\/]en[\\/]/.test(where) ? "en" : "pt";
    const w = WORDS[lang];
    /** @param {any} node */
    const walk = (node) => {
      const kids = node.children ?? [];
      for (let i = 0; i < kids.length; i++) {
        const c = kids[i];
        const code = c.type === "element" && c.tagName === "pre" ? c.children?.find((/** @type {any} */ x) => x.tagName === "code") : null;
        const classes = code?.properties?.className ?? [];
        if (!code || !classes.includes("language-mermaid")) { walk(c); continue; }
        const source = text(code).replace(/\n$/, "");
        const acc = accessibility(source);
        const kind = acc.code.trim().split(/\s/)[0] ?? "";
        let svg = "";
        if (DRAWN.test(kind)) {
          try {
            svg = renderMermaidSVG(acc.code, { bg: "var(--bg)", fg: "var(--fg)", transparent: true });
          } catch (e) {
            console.warn(`[mermaid] ${where}: not drawn (${e instanceof Error ? e.message : e}); the code stays`);
          }
        }
        if (!svg) {
          kids[i] = {
            type: "element", tagName: "figure", properties: { className: ["diagram", "diagram-code"] },
            children: [c, { type: "element", tagName: "figcaption", properties: {}, children: [{ type: "text", value: w.notDrawn }] }],
          };
          continue;
        }
        const prefix = `mmd${++count}`;
        const title = acc.title || w.label;
        kids[i] = {
          type: "element", tagName: "figure", properties: { className: ["diagram"] },
          children: [
            { type: "element", tagName: "div", properties: { className: ["diagram-svg"] }, children: [{ type: "raw", value: clean(svg, prefix, title, acc.desc) }] },
            {
              type: "element", tagName: "details", properties: { className: ["diagram-source"] },
              children: [{ type: "element", tagName: "summary", properties: {}, children: [{ type: "text", value: w.source }] }, c],
            },
          ],
        };
      }
    };
    walk(tree);
  };
}
