// /altstore/source.json: the AltStore source for the iPad and iPhone app,
// made at build time from the same releases the download page lists
// (src/lib/altstore-data.mjs), so it is as fresh as the build.
import type { APIRoute } from "astro";
import { altstoreSource } from "../../lib/altstore-data.mjs";
import { loadReleases } from "../../lib/releases";

export const GET: APIRoute = async () => {
  const { data } = await loadReleases();
  return new Response(`${JSON.stringify(altstoreSource(data), null, 2)}\n`, { headers: { "Content-Type": "application/json; charset=utf-8" } });
};
