import type { APIRoute } from "astro";
import { fullIndex } from "../lib/wiki";
export const GET: APIRoute = async () => new Response(await fullIndex("pt"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
