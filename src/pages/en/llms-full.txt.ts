import type { APIRoute } from "astro";
import { fullText } from "../../lib/wiki";
export const GET: APIRoute = async () => new Response(await fullText("en"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
