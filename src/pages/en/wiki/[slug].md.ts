import type { APIRoute, GetStaticPaths } from "astro";
import { wikiPages, pageMarkdown } from "../../../lib/wiki";

export const getStaticPaths = (async () => {
  const pages = await wikiPages("en");
  return pages.map((entry) => ({ params: { slug: entry.data.slug }, props: { entry } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) =>
  new Response(pageMarkdown("en", props.entry), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
