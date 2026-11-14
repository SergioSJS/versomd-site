// The download page's data, read once per build: the releases from the
// GitHub API, or, when that fails (offline, rate limit, GitHub down), the
// committed copy in src/data/releases.json — the build never fails because
// GitHub is unreachable. `npm run releases:refresh` updates the copy.
//
// Environment, all optional:
//   GITHUB_TOKEN             sent with the request (the anonymous limit is
//                            60 an hour per address; build machines share theirs)
//   VERSO_RELEASES_OFFLINE=1 skip the fetch, use the copy
//   VERSO_RELEASES_URL       another address to fetch (a test of the fallback)
import fallback from "../data/releases.json";
import { API_URL, fetchReleases, type Asset, type Release, type Releases } from "./releases-data.mjs";

export type { Asset, Release, Releases };

// The build runs on Node; the site has no @types/node, so this is the one
// piece of it used here.
declare const process: { env: Record<string, string | undefined> };

export interface LoadedReleases {
  data: Releases;
  /** Where the data came from in this build. */
  source: "github" | "fallback";
}

let loading: Promise<LoadedReleases> | undefined;

export function loadReleases(): Promise<LoadedReleases> {
  loading ??= (async () => {
    const env = process.env;
    if (env.VERSO_RELEASES_OFFLINE === "1") {
      console.log("[releases] VERSO_RELEASES_OFFLINE=1: using src/data/releases.json");
      return { data: fallback as unknown as Releases, source: "fallback" };
    }
    try {
      const data = await fetchReleases({ url: env.VERSO_RELEASES_URL || API_URL, token: env.GITHUB_TOKEN });
      console.log(`[releases] from the GitHub API: production ${data.stable?.tag ?? "none"}, test ${data.test?.tag ?? "none"}`);
      return { data, source: "github" };
    } catch (err) {
      const why = err instanceof Error ? err.message : String(err);
      console.warn(`[releases] GitHub API unreachable (${why}); using src/data/releases.json (checked ${fallback.checkedAt})`);
      return { data: fallback as unknown as Releases, source: "fallback" };
    }
  })();
  return loading;
}

/** What a release's file is for, by its name as the product's release
 *  workflow writes it (scripts/release-page.mjs `releaseFiles` there):
 *  `Verso-<v>-…` or, for a test release, `Verso-Beta-<v>-…`. */
export const APP_KINDS = ["mac", "windows", "appImage", "deb", "rpm", "android", "ios"] as const;
export const CLI_KINDS = ["cliMac", "cliWindows", "cliLinux"] as const;
export const SERVER_KINDS = ["serverDebX64", "serverDebArm", "serverRpmX64", "serverRpmArm", "serverTarX64", "serverTarArm"] as const;
export type AppKind = (typeof APP_KINDS)[number];
export type CliKind = (typeof CLI_KINDS)[number];
export type ServerKind = (typeof SERVER_KINDS)[number];
export type FileKind = AppKind | CliKind | ServerKind;

const PATTERNS: [FileKind, RegExp][] = [
  ["mac", /^Verso(-Beta)?-.+-macos-arm64\.zip$/],
  ["windows", /^Verso(-Beta)?-.+-windows-x64-setup\.exe$/],
  ["appImage", /^Verso(-Beta)?-.+-linux-x86_64\.AppImage$/],
  ["deb", /^Verso(-Beta)?-.+-linux-amd64\.deb$/],
  ["rpm", /^Verso(-Beta)?-.+-linux-x86_64\.rpm$/],
  ["android", /^Verso(-Beta)?-.+-android-arm64\.apk$/],
  ["ios", /^Verso(-Beta)?-.+-ios\.ipa$/],
  ["cliMac", /^verso-cli-.+-macos-arm64\.tar\.gz$/],
  ["cliWindows", /^verso-cli-.+-windows-x64\.zip$/],
  ["cliLinux", /^verso-cli-.+-linux-x86_64\.tar\.gz$/],
  ["serverDebX64", /^universo-.+-amd64\.deb$/],
  ["serverDebArm", /^universo-.+-arm64\.deb$/],
  ["serverRpmX64", /^universo-.+-x86_64\.rpm$/],
  ["serverRpmArm", /^universo-.+-aarch64\.rpm$/],
  ["serverTarX64", /^universo-.+-x86_64\.tar\.gz$/],
  ["serverTarArm", /^universo-.+-aarch64\.tar\.gz$/],
];

export interface Classified {
  files: Partial<Record<FileKind, Asset>>;
  /** The signed checksums list (`verso-<v>-SHA256SUMS`) and its signature. */
  sums?: Asset;
  sumsSig?: Asset;
  /** Each file's own `.sig` (releases up to the bridge carry them). */
  sigs: Asset[];
  /** Anything the patterns above do not name: listed, never dropped. */
  other: Asset[];
}

export function classify(release: Release): Classified {
  const out: Classified = { files: {}, sigs: [], other: [] };
  for (const a of release.assets) {
    if (/-SHA256SUMS$/.test(a.name)) out.sums = a;
    else if (/-SHA256SUMS\.sig$/.test(a.name)) out.sumsSig = a;
    else if (/\.sig$/.test(a.name)) out.sigs.push(a);
    else {
      const kind = PATTERNS.find(([, re]) => re.test(a.name))?.[0];
      if (kind && !out.files[kind]) out.files[kind] = a;
      else out.other.push(a);
    }
  }
  return out;
}

/** A file's size as GitHub shows it (1 MB = 1024 × 1024 bytes). */
export function formatSize(bytes: number, locale: string): string {
  const units = ["B", "KB", "MB", "GB"];
  let n = bytes;
  let i = 0;
  while (n >= 1024 && i < units.length - 1) {
    n /= 1024;
    i++;
  }
  const digits = i >= 2 && n < 100 ? 1 : 0;
  return `${new Intl.NumberFormat(locale, { maximumFractionDigits: digits, minimumFractionDigits: digits }).format(n)} ${units[i]}`;
}

export function formatDate(iso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(iso));
}
