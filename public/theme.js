// The site's theme as the reader chose it (the switch in the masthead and in
// the footer, src/layouts/Base.astro): "light" or "dark" on <html>, read
// before the page paints so it never flashes the other one. Nothing kept,
// or storage refused: the system's (prefers-color-scheme), as before.
try {
  var t = localStorage.getItem("versomd-theme");
  if (t === "light" || t === "dark") document.documentElement.dataset.theme = t;
} catch (e) {}
