import type { APIRoute } from "astro";

// The pages worth indexing, each with its other language.
const pairs: [string, string][] = [
  ["/", "/en/"],
  ["/recursos/", "/en/features/"],
  ["/universo/", "/en/universo/"],
  ["/comparativo/", "/en/compare/"],
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://versomd.com");
  const url = (path: string) => new URL(path, base).href;
  const entries = pairs.flatMap(([pt, en]) =>
    [pt, en].map(
      (loc) => `  <url>
    <loc>${url(loc)}</loc>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${url(pt)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${url(en)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${url(pt)}"/>
  </url>`,
    ),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
