import type { APIRoute, GetStaticPaths } from "astro";
import { fullParts } from "../lib/wiki";
export const getStaticPaths: GetStaticPaths = async () =>
  (await fullParts("pt")).map((p, i) => ({ params: { n: String(i + 1) }, props: { text: p.text } }));
export const GET: APIRoute = ({ props }) => new Response(props.text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
