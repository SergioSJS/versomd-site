// The shape of the page's words. pt-BR is written first; en mirrors it
// field for field. Strings named *Html carry inline markup (links, <code>,
// <strong>) and are written by us, never by a visitor.

import type { FileKind } from "../lib/releases";

export type Lang = "pt-BR" | "en";

/** The systems the download page recognises in the visitor's browser. */
export type DownloadOs = "macos" | "windows" | "linux" | "android" | "ios";

export interface Figure {
  /** File stem under /media: <stem>.gif (or .png), <stem>.png poster. */
  stem: string;
  /** gif: a recording; still: a screenshot (PNG + WebP); poster: the first
   *  frame of a recording, shown as a still (<stem>.png only, no WebP);
   *  shot: a screenshot of the app (<stem>.webp only). */
  kind: "gif" | "still" | "poster" | "shot";
  /** An animated WebP exists beside the GIF (smaller); only when it helps. */
  webp?: boolean;
  width: number;
  height: number;
  alt: string;
  captionHtml: string;
}

/** A cell of the comparison: ✓, partial or ✗, and a few words; "info" is
 *  words alone (the licence, the cost model, what a site does not say).
 *  Never a price. */
export type Mark = "yes" | "partial" | "no" | "info";
export interface CompareCell {
  mark: Mark;
  text: string;
}

/** The drawings of "How will you use Verso?" (ScenarioMap.astro). */
export type ScenarioMap = "local" | "home" | "cloud" | "universo" | "table" | "team";

export interface Copy {
  lang: Lang;
  htmlLang: string;
  ogLocale: string;
  meta: { title: string; description: string };
  skip: string;
  /** The header's pages, in order; the waitlist is a call to action, not a page. */
  nav: { label: string; home: string; features: string; server: string; compare: string; wiki: string; download: string };
  /** The control that goes back to the top of a long page. */
  /** The GitHub releases page and the repository (the download page, routes.download, links the first). */
  links: { releases: string; repo: string };
  toTop: string;
  switchTo: { label: string; name: string; href: string; hreflang: string };
  hero: {
    /** Alt text of the app icon shown above the title. */
    iconAlt: string;
    eyebrow: string;
    title: string;
    ledeHtml: string;
    propsLabel: string;
    props: { key: string; valueHtml: string }[];
    cta: string;
    ctaWaitlist: string;
    ctaSecondary: string;
    figure: Figure;
  };
  /** The three value cards after the hero: a small mark, a title, and the
   *  "who it is for" sentence that goes with it. */
  who: { title: string; items: { kicker: string; title: string; text: string }[] };
  /** "How will you use Verso?": the ways to set it up, each with a small
   *  drawing of where the files live, the install order and a link to its
   *  section of the wiki lesson (wiki: the lesson's path; anchor: the
   *  section's heading id there, checked at build time). */
  scenarios: {
    title: string;
    intro: string;
    /** The drawings' key: the seal dot, the brass dashes. */
    legend: { files: string; sync: string; reach: string };
    /** The words before the steps and before what works offline. */
    stepsLabel: string;
    offlineLabel: string;
    items: {
      map: ScenarioMap;
      title: string;
      who: string;
      stepsHtml: string[];
      offline: string;
      anchor: string;
      link: string;
      /** The drawing's name and description for assistive technology, and
       *  its labels, in the order ScenarioMap.astro places them. */
      figure: { title: string; desc: string; labels: string[] };
    }[];
    obsidianHtml: string;
    obsidianAnchor: string;
    obsidianLink: string;
    wiki: string;
    all: string;
  };
  /** "Read on": the other pages, one card each, on the home page. */
  more: { title: string; items: { page: "features" | "server" | "compare"; title: string; text: string; link: string }[] };
  /** What used to be "how it works": the files on the features page, the
   *  server on UniVerso's page. */
  how: {
    files: { title: string; paragraphsHtml: string[] };
    server: { items: { term: string; textHtml: string }[] };
    /** "Step", before each step's number. */
    stepLabel: string;
    /** Three steps, each with its picture beside it. */
    steps: { title: string; textHtml: string; figure: Figure }[];
    vps: {
      title: string;
      introHtml: string;
      /** The four highlights shown as a row; the table has every number. */
      stats: { value: string; label: string }[];
      /** The disclosure that holds the full table. */
      allNumbers: string;
      tableCaption: string;
      head: [string, string];
      rows: [string, string][];
      afterHtml: string[];
    };
  };
  motion: {
    title: string;
    intro: string;
    /** The tab list's accessible name, and one short label per recording. */
    tabsLabel: string;
    tabs: string[];
    /** With reduced motion, the posters show; this button plays one. */
    play: string;
    figures: Figure[];
  };
  notYet: { title: string; intro: string; items: { lead: string; textHtml: string }[] };
  /** Verso beside the tools people compare it with: a short honest intro,
   *  the pains Verso answers (only those), then one table, Verso first. */
  compare: {
    title: string;
    introHtml: string[];
    pains: { title: string; items: { lead: string; textHtml: string }[] };
    tableCaption: string;
    /** Shown above the table: it scrolls sideways. */
    scrollHint: string;
    /** The visible mark of each kind, and the word a screen reader hears. */
    marks: Record<Mark, { symbol: string; word: string }>;
    /** The first column's header. */
    capability: string;
    /** The groups of columns after Verso's, in order; spans add up to
     *  tools.length - 1. The id names the "only these" shortcut. */
    groups: { id: "notes" | "rpg"; label: string; span: number }[];
    /** tools[0] is Verso; every other one links to its official site. The id
     *  is the same in both languages: it is what a shared link names. */
    tools: { id: string; name: string; href?: string; note: string }[];
    /** The capability groups, in the table's order; ids shared by both
     *  languages (a link names them). */
    rowGroups: { id: string; label: string }[];
    /** One cell per tool, in the order of `tools`; rows sit in their group's order. */
    rows: { group: string; label: string; cells: CompareCell[] }[];
    /** The controls above the table, shown only with JavaScript. */
    controls: {
      label: string;
      presetsLabel: string;
      presets: { id: "notes" | "rpg" | "all" | "versus"; label: string }[];
      toolsLabel: string;
      capsLabel: string;
      diff: string;
      diffHint: string;
      reset: string;
      /** With {tools}, {toolsTotal}, {rows} and {rowsTotal}. */
      count: string;
    };
    legendHtml: string;
    verified: string;
  };
  faq: { title: string; items: { q: string; aHtml: string[] }[] };
  /** The pages besides the home page: their head, and what only they say. */
  pages: {
    features: PageHead & {
      today: { title: string; introHtml: string; groups: { title: string; itemsHtml: string[] }[] };
      /** Screenshots of the app (English interface in both languages). */
      gallery: { title: string; introHtml: string; figures: Figure[] };
      roadmap: Roadmap;
    };
    server: PageHead & {
      stepsTitle: string;
      featuresTitle: string;
      /** Screenshots of the app (English interface in both languages). */
      gallery: { title: string; figures: Figure[] };
      /** What keeps edits from being lost, in plain words. */
      safety: { title: string; paragraphsHtml: string[] };
    };
    /** The page's title is the comparison's own (compare.title). */
    compare: Pick<PageHead, "meta" | "eyebrow"> & { roadmapHtml: string };
    download: DownloadPage;
  };
  waitlist: {
    title: string;
    intro: string;
    label: string;
    placeholder: string;
    button: string;
    sending: string;
    honeypot: string;
    privacyHtml: string;
    ok: string;
    invalid: string;
    limited: string;
    failed: string;
  };
  thanks: { metaTitle: string; title: string; bodyHtml: string; back: string };
  failed: { metaTitle: string; title: string; body: string; back: string };
  /** The social-sharing image (Open Graph). */
  og: { imageAlt: string };
  footer: { lineHtml: string; fontsHtml: string; noTracking: string };
  figLabel: string;
  routes: { home: string; features: string; server: string; compare: string; wiki: string; download: string; thanks: string; failed: string };
  /** Section anchors, in the page's language. */
  ids: {
    content: string;
    scenarios: string;
    notYet: string;
    compare: string;
    faq: string;
    waitlist: string;
    files: string;
    today: string;
    gallery: string;
    roadmap: string;
    steps: string;
    serverFeatures: string;
  };
}

/** The head of a page other than the home page. */
export interface PageHead {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  ledeHtml: string;
}

/** What comes next, drawn as a rail with two stops: the stretches in the
 *  order of `RoadmapState` (ready, building, planned, later), each with its
 *  count of items (computed); "you are here" at the end of the ready
 *  stretch, the V1 flag before the later one. A plan, never a date. */
export interface Roadmap {
  title: string;
  /** One sentence: what V1 is, and that this is a plan that may change. */
  introHtml: string;
  /** When the roadmap was last checked against the product; typed, not computed. */
  updated: { text: string; dateTime: string };
  /** The name of each stretch, which is also its state in words. */
  states: Record<RoadmapState, string>;
  /** The count beside a stretch's name; `{n}` is the number of items. */
  count: { one: string; other: string };
  /** The two stops on the rail. */
  stops: { here: string; v1: string; v1Note: string };
  /** Groups in order. A stretch with more than one group shows each
   *  group's title as a quiet sub-heading; a group alone in its stretch
   *  needs none. */
  groups: { title?: string; state: RoadmapState; items: { lead: string; textHtml?: string }[] }[];
}
export type RoadmapState = "ready" | "building" | "planned" | "later";

/** Baixar / Download: every file of the newest production release and of
 *  the newest test release, read from GitHub at build time, and the one for
 *  the visitor's system at the top (the page's script; without it, the
 *  lists alone). Placeholders in braces are filled by the page: {os},
 *  {version}, {date}, {file}. */
export interface DownloadPage extends PageHead {
  recommend: {
    /** The box's heading and its id. */
    title: string;
    id: string;
    /** "Your system looks like {os}." */
    detected: string;
    /** The button: "Download for {os}". */
    button: string;
    /** Linux: the packages after the AppImage. */
    linuxAlso: string;
    /** The release shown first has no file for this system: {version}, {os}. */
    missing: string;
    /** The other channel's file for this system: {channel} {version}. */
    alsoOther: string;
    /** No system recognised (or one Verso has no app for). */
    unknown: string;
    /** Beside the file in the lists, for the screen reader too. */
    badge: string;
  };
  os: Record<DownloadOs, string>;
  /** The two channels: their name, an id for the section, one line. */
  channels: Record<"stable" | "test", { name: string; id: string; intro: string }>;
  /** When there is no production release yet. */
  noStableHtml: string;
  /** When GitHub gave no release at all (never expected). */
  noneHtml: string;
  /** "Published {date}", and the link to the release's own page. */
  published: string;
  releasePage: string;
  fields: { version: string; size: string };
  groups: {
    app: string;
    cli: string;
    cliIntroHtml: string;
    server: string;
    /** With {version} where the installer's command is shown after it. */
    serverIntroHtml: string;
    serverAfterHtml: string;
    verify: string;
    verifyIntroHtml: string;
    sigs: string;
    other: string;
  };
  /** Each file: who it is for, and one line on installing it ({file}). */
  kinds: Record<FileKind, { platform: string; noteHtml: string }>;
  /** Where this list came from: {date}. */
  source: { github: string; fallback: string };
  allReleasesHtml: string;
}
