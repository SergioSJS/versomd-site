// The releases of Verso as the download page needs them, from the GitHub
// API's answer (GET /repos/SergioSJS/verso/releases). Shared by the build
// (src/lib/releases.ts) and by `npm run releases:refresh`
// (scripts/releases-refresh.mjs), which writes the result to
// src/data/releases.json, the copy the build falls back on.
//
// Plain JavaScript with JSDoc, so the refresh script runs on Node with no
// build step; Astro reads the types from the JSDoc.

export const REPO = "SergioSJS/verso";
export const API_URL = `https://api.github.com/repos/${REPO}/releases?per_page=100`;

/**
 * @typedef {{ name: string; size: number; url: string }} Asset
 * @typedef {{ tag: string; version: string; prerelease: boolean; publishedAt: string; url: string; assets: Asset[] }} Release
 * @typedef {{ checkedAt: string; stable: Release | null; test: Release | null }} Releases
 */

/**
 * One release of the API, kept to what the page shows: its files that
 * finished uploading, with their size and download address.
 * @param {any} r
 * @returns {Release}
 */
function trim(r) {
  const tag = String(r.tag_name);
  return {
    tag,
    version: tag.replace(/^v/, ""),
    prerelease: Boolean(r.prerelease),
    publishedAt: String(r.published_at),
    url: String(r.html_url),
    assets: (Array.isArray(r.assets) ? r.assets : [])
      .filter((/** @type {any} */ a) => a && a.state === "uploaded")
      .map((/** @type {any} */ a) => ({ name: String(a.name), size: Number(a.size), url: String(a.browser_download_url) }))
      .sort((/** @type {Asset} */ a, /** @type {Asset} */ b) => a.name.localeCompare(b.name)),
  };
}

/**
 * The newest production release (GitHub's "Latest": not a prerelease) and
 * the newest test release (a prerelease), from the API's list; drafts and
 * releases with no files are left out. Either may be null.
 * @param {unknown} list
 * @param {string} checkedAt
 * @returns {Releases}
 */
export function pickReleases(list, checkedAt) {
  if (!Array.isArray(list)) throw new Error("the GitHub API did not answer with a list of releases");
  const published = list
    .filter((r) => r && !r.draft && r.published_at && Array.isArray(r.assets) && r.assets.length > 0)
    .map(trim)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return {
    checkedAt,
    stable: published.find((r) => !r.prerelease) ?? null,
    test: published.find((r) => r.prerelease) ?? null,
  };
}

/**
 * Fetches the releases from the GitHub API; throws on any failure (network,
 * time-out, rate limit, an answer that is not a list).
 * @param {{ url?: string; token?: string; timeoutMs?: number }} [options]
 * @returns {Promise<Releases>}
 */
export async function fetchReleases({ url = API_URL, token, timeoutMs = 10000 } = {}) {
  /** @type {Record<string, string>} */
  const headers = { Accept: "application/vnd.github+json", "User-Agent": "versomd-site-build", "X-GitHub-Api-Version": "2022-11-28" };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(timeoutMs) });
  if (!res.ok) throw new Error(`GitHub answered ${res.status} ${res.statusText}`);
  return pickReleases(await res.json(), new Date().toISOString());
}
