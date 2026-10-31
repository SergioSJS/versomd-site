// @ts-check
import { defineConfig } from "astro/config";

// Callouts: the wiki's Markdown keeps them as a plain blockquote whose first
// line is a bold label ("**Tip: Title**", written by scripts/wiki-import.mjs,
// in the page's language). Here that label gives the blockquote a class, so
// the page styles it and the .md stays plain.
/** @type {Record<string, string[]>} */
const CALLOUTS = {
  note: ["Note", "Nota"], tip: ["Tip", "Dica"], warning: ["Warning", "Aviso"], important: ["Important", "Importante"],
  info: ["Info", "Informação"], example: ["Example", "Exemplo"], oracle: ["Oracle", "Oráculo"], secret: ["Secret", "Segredo"],
};
/** @param {any} n @returns {string} */
const text = (n) => (n.type === "text" ? n.value : (n.children ?? []).map(text).join(""));
function rehypeCallouts() {
  /** @param {any} node */
  const walk = (node) => {
    for (const c of node.children ?? []) {
      if (c.type === "element" && c.tagName === "blockquote") {
        const p = c.children.find((/** @type {any} */ x) => x.type === "element");
        const first = p?.tagName === "p" ? p.children[0] : undefined;
        if (first?.type === "element" && first.tagName === "strong") {
          const label = text(first).split(":")[0].trim();
          const type = Object.keys(CALLOUTS).find((k) => CALLOUTS[k].includes(label));
          if (type) {
            c.properties = { ...c.properties, className: ["callout", `callout-${type}`] };
            first.properties = { ...first.properties, className: ["callout-title"] };
          }
        }
      }
      walk(c);
    }
  };
  return (/** @type {any} */ tree) => walk(tree);
}

// Tables: each in its own box that scrolls sideways, so a wide table never
// widens the page on a phone (the page's script makes the box focusable when
// it does scroll).
function rehypeTableScroll() {
  /** @param {any} node */
  const walk = (node) => {
    node.children = (node.children ?? []).map((/** @type {any} */ c) => {
      if (c.type === "element" && c.tagName === "table") {
        return { type: "element", tagName: "div", properties: { className: ["table-scroll"] }, children: [c] };
      }
      walk(c);
      return c;
    });
  };
  return (/** @type {any} */ tree) => walk(tree);
}

// Static output for Cloudflare Pages; the waitlist's endpoint is a Pages
// Function in functions/, outside Astro's build.
export default defineConfig({
  site: "https://versomd.com",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
    // Every stylesheet as a file, so the Content-Security-Policy in
    // public/_headers can say style-src 'self' with no inline exception.
    inlineStylesheets: "never",
  },
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en"],
    routing: { prefixDefaultLocale: false },
  },
  // No syntax colouring: Shiki writes inline style attributes, which the
  // Content-Security-Policy (style-src 'self') refuses; code blocks are
  // plain, styled by wiki.css.
  markdown: { syntaxHighlight: false, rehypePlugins: [rehypeCallouts, rehypeTableScroll] },
  devToolbar: { enabled: false },
  // Astro inlines a small processed <script>; the policy's script-src 'self'
  // forbids inline code, so every script is emitted as a file in /_astro/.
  vite: { build: { assetsInlineLimit: 0 } },
});
