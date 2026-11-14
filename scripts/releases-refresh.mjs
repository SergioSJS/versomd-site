// Refreshes src/data/releases.json, the copy of Verso's releases the
// download page falls back on when the build cannot reach the GitHub API
// (offline, rate limit, GitHub down). Run after a release, review the diff,
// commit:
//
//   npm run releases:refresh
//
// GITHUB_TOKEN, when set, is sent with the request (the anonymous limit is
// 60 requests an hour per address); the repository is public, so none is
// needed. On any failure the file is left as it was and the exit is 1.

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { fetchReleases } from "../src/lib/releases-data.mjs";

const out = fileURLToPath(new URL("../src/data/releases.json", import.meta.url));

try {
  const data = await fetchReleases({ token: process.env.GITHUB_TOKEN });
  await writeFile(out, `${JSON.stringify(data, null, 2)}\n`);
  const line = (label, r) => `${label}: ${r ? `${r.tag} (${r.assets.length} files, ${r.publishedAt})` : "none"}`;
  console.log(`Wrote ${out}\n  ${line("production", data.stable)}\n  ${line("test", data.test)}`);
} catch (err) {
  console.error(`Could not refresh the releases: ${err instanceof Error ? err.message : err}. ${out} is unchanged.`);
  process.exit(1);
}
