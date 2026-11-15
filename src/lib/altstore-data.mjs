// The AltStore source (https://faq.altstore.io/developers/make-a-source) for
// Verso's iPad and iPhone app (ADR 0119 in the Verso repository), built from
// the same releases the download page lists, so it never drifts from them:
// the newest release (test or production) that carries an `-ios.ipa`.
// Shared by the page that serves /altstore/source.json
// (src/pages/altstore/source.json.ts) and by scripts/check-altstore.mjs.
//
// Plain JavaScript with JSDoc, so the check runs on Node with no build step.

const SITE = "https://versomd.com";

/** `0.9.0-beta.3` -> `{ short: "0.9.0", build: "90003" }`. A copy of
 *  `iosVersion` in Verso's scripts/release.mjs, the rule that writes
 *  CFBundleShortVersionString and CFBundleVersion: a test release -beta.N is
 *  N, the production release 99. AltStore refuses an .ipa whose Info.plist
 *  differs from the source's version and buildVersion. */
export function iosVersion(/** @type {string} */ v) {
  const m = /^(\d+)\.(\d+)\.(\d+)(?:-beta\.(\d+))?$/.exec(v);
  if (!m) throw new Error(`${v}: not a version iOS can be given`);
  const [maj, min, pat] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const beta = m[4] === undefined ? 99 : Number(m[4]);
  return { short: `${maj}.${min}.${pat}`, build: String(((maj * 100 + min) * 100 + pat) * 100 + beta) };
}

/** The `-ios.ipa` of a release, or undefined. */
const ipaOf = (/** @type {any} */ r) => r?.assets?.find((/** @type {any} */ a) => /^Verso(-Beta)?-.+-ios\.ipa$/.test(a.name));

/**
 * @param {{ stable: any; test: any }} releases  the data of src/lib/releases-data.mjs
 * @returns {any} the source, ready for JSON.stringify
 */
export function altstoreSource(releases) {
  const candidates = [releases.stable, releases.test]
    .filter((r) => ipaOf(r))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const release = candidates[0];
  if (!release) throw new Error("no release carries an iOS .ipa: the AltStore source cannot be made");
  const ipa = ipaOf(release);
  const ios = iosVersion(release.version);
  const date = release.publishedAt.slice(0, 10);
  const icon = `${SITE}/altstore/icon.png`;
  return {
    name: "Verso",
    subtitle: "Markdown notes, boards and the table",
    description:
      "Verso's own source for AltStore Classic: Markdown notes in Obsidian-compatible folders, local-first, with boards, bases and a self-hosted server named UniVerso. Test versions of the iPad and iPhone app.",
    iconURL: icon,
    headerURL: icon,
    website: SITE,
    tintColor: "#7a5c2e",
    featuredApps: ["com.versomd.app"],
    apps: [
      {
        name: "Verso",
        bundleIdentifier: "com.versomd.app",
        developerName: "Sérgio J. Sousa",
        subtitle: "Markdown notes, boards and the table",
        localizedDescription:
          "Verso keeps your notes as plain Markdown files in folders you choose, compatible with Obsidian, and works without an account or a connection. It adds boards, bases (tables, kanban, cards, maps), a dice and oracle table for solo and group role-playing, and can sync with UniVerso, Verso's self-hosted server, WebDAV or S3.\n\nThis is a test version, signed by AltStore with your own Apple ID: it expires every 7 days and AltStore renews it while your computer and device are on the same network.",
        iconURL: icon,
        tintColor: "#7a5c2e",
        category: "utilities",
        versions: [
          {
            version: ios.short,
            buildVersion: ios.build,
            marketingVersion: release.version,
            date,
            localizedDescription: `Verso ${release.version}. All changes: ${release.url}`,
            downloadURL: ipa.url,
            size: ipa.size,
            minOSVersion: "16.0",
          },
        ],
        // Read from the built .ipa's Info.plist (ADR 0119 item 5): AltStore
        // refuses an install whose lists differ. No entitlements: it is
        // built unsigned.
        appPermissions: {
          entitlements: [],
          privacy: {
            NSAudioCaptureUsageDescription:
              "Verso records the sound of the app or the Mac that you choose to share, only while Share audio is on, and sends it to the people at your table. Verso saves nothing.",
            NSLocalNetworkUsageDescription:
              'Verso lets a phone on this network open the folders you choose, only while "Turn into a server" is on, and looks for Verso servers on this network while Settings > Servers is open.',
          },
        },
      },
    ],
    news: [],
  };
}

/**
 * The fields AltStore needs, from its "Make a Source" page; returns the
 * list of problems (empty when the source is valid).
 * @param {any} s
 * @returns {string[]}
 */
export function validateAltstoreSource(s) {
  /** @type {string[]} */
  const bad = [];
  const str = (/** @type {unknown} */ v) => typeof v === "string" && v.length > 0;
  const url = (/** @type {unknown} */ v) => str(v) && /^https:\/\/[^\s]+$/.test(/** @type {string} */ (v));
  if (!str(s?.name)) bad.push("name");
  if (!Array.isArray(s?.apps) || s.apps.length === 0) bad.push("apps (a non-empty array)");
  for (const k of ["iconURL", "headerURL", "website"]) if (s?.[k] !== undefined && !url(s[k])) bad.push(k);
  if (typeof s?.nsfw !== "undefined" && typeof s.nsfw !== "boolean") bad.push("nsfw");
  const ids = new Set();
  for (const [i, a] of (s?.apps ?? []).entries()) {
    const p = `apps[${i}].`;
    for (const k of ["name", "bundleIdentifier", "developerName", "localizedDescription"]) if (!str(a[k])) bad.push(p + k);
    if (!url(a.iconURL)) bad.push(`${p}iconURL (https)`);
    if (ids.has(a.bundleIdentifier)) bad.push(`${p}bundleIdentifier (duplicate)`);
    ids.add(a.bundleIdentifier);
    if (a.category !== undefined && !["developer", "entertainment", "games", "lifestyle", "other", "photo-video", "social", "utilities"].includes(a.category)) bad.push(`${p}category`);
    if (a.tintColor !== undefined && !/^#?[0-9a-fA-F]{6}$/.test(a.tintColor)) bad.push(`${p}tintColor`);
    if (!Array.isArray(a.appPermissions?.entitlements)) bad.push(`${p}appPermissions.entitlements (an array)`);
    const priv = a.appPermissions?.privacy;
    if (!priv || typeof priv !== "object" || Array.isArray(priv)) bad.push(`${p}appPermissions.privacy (an object)`);
    else for (const [k, v] of Object.entries(priv)) if (!/UsageDescription$/.test(k) || !str(v)) bad.push(`${p}appPermissions.privacy.${k}`);
    if (!Array.isArray(a.versions) || a.versions.length === 0) bad.push(`${p}versions (a non-empty array)`);
    for (const [j, v] of (a.versions ?? []).entries()) {
      const q = `${p}versions[${j}].`;
      if (!/^\d+\.\d+\.\d+$/.test(v.version ?? "")) bad.push(`${q}version (CFBundleShortVersionString)`);
      if (!/^\d+$/.test(v.buildVersion ?? "")) bad.push(`${q}buildVersion (CFBundleVersion)`);
      if (!/^\d{4}-\d{2}-\d{2}/.test(v.date ?? "") || Number.isNaN(Date.parse(v.date))) bad.push(`${q}date (ISO 8601)`);
      if (!url(v.downloadURL)) bad.push(`${q}downloadURL (https)`);
      if (!Number.isInteger(v.size) || v.size <= 0) bad.push(`${q}size (bytes)`);
    }
    // The build number is the rule of Verso's release.mjs: the version must agree with it.
    const top = a.versions?.[0];
    if (top?.marketingVersion) {
      try {
        const want = iosVersion(top.marketingVersion);
        if (want.short !== top.version || want.build !== top.buildVersion) bad.push(`${p}versions[0] disagrees with the iOS version rule (${want.short} / ${want.build})`);
      } catch (e) {
        bad.push(String(e));
      }
    }
  }
  const newsIds = new Set();
  for (const [i, n] of (s?.news ?? []).entries()) {
    for (const k of ["title", "identifier", "caption"]) if (!str(n[k])) bad.push(`news[${i}].${k}`);
    if (!/^\d{4}-\d{2}-\d{2}/.test(n.date ?? "")) bad.push(`news[${i}].date`);
    if (newsIds.has(n.identifier)) bad.push(`news[${i}].identifier (duplicate)`);
    newsIds.add(n.identifier);
  }
  return bad;
}
