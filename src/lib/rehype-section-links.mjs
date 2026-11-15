// A wiki page's h2 and h3, each with a small "#" after its words that links
// to it: a tap copies the section's address (the script in Base.astro, which
// also gives the link its name in the page's language); without the script
// it is a plain link to the section. Runs after Astro's own heading ids
// (rehypeHeadingIds, placed before it in astro.config.mjs).

/** @param {any} node */
function walk(node) {
  for (const c of node.children ?? []) {
    if (c.type === "element" && (c.tagName === "h2" || c.tagName === "h3") && c.properties?.id) {
      c.children.push({
        type: "element",
        tagName: "a",
        properties: { className: ["h-link"], href: `#${c.properties.id}`, dataSectionLink: "" },
        children: [{ type: "text", value: "#" }],
      });
    }
    walk(c);
  }
}

export function rehypeSectionLinks() {
  return (/** @type {any} */ tree) => walk(tree);
}
