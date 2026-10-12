// @ts-check
import { defineConfig } from "astro/config";

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
  devToolbar: { enabled: false },
});
