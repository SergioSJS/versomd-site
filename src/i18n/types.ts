// The shape of the page's words. pt-BR is written first; en mirrors it
// field for field. Strings named *Html carry inline markup (links, <code>,
// <strong>) and are written by us, never by a visitor.

export type Lang = "pt-BR" | "en";

export interface Figure {
  /** File stem under /media: <stem>.gif (or .png), <stem>.png poster. */
  stem: string;
  /** gif: a recording; still: a screenshot (PNG + WebP); poster: the first
   *  frame of a recording, shown as a still (<stem>.png only, no WebP). */
  kind: "gif" | "still" | "poster";
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

export interface Copy {
  lang: Lang;
  htmlLang: string;
  ogLocale: string;
  meta: { title: string; description: string };
  skip: string;
  /** The header's pages, in order; the waitlist is a call to action, not a page. */
  nav: { label: string; home: string; features: string; server: string; compare: string; waitlist: string };
  /** The control that goes back to the top of a long page. */
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
    ctaSecondary: string;
    figure: Figure;
  };
  /** The three value cards after the hero: a small mark, a title, and the
   *  "who it is for" sentence that goes with it. */
  who: { title: string; items: { kicker: string; title: string; text: string }[] };
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
      roadmap: Roadmap;
    };
    server: PageHead & { stepsTitle: string; featuresTitle: string };
    /** The page's title is the comparison's own (compare.title). */
    compare: Pick<PageHead, "meta" | "eyebrow"> & { roadmapHtml: string };
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
  routes: { home: string; features: string; server: string; compare: string; thanks: string; failed: string };
  /** Section anchors, in the page's language. */
  ids: {
    content: string;
    notYet: string;
    compare: string;
    faq: string;
    waitlist: string;
    files: string;
    today: string;
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

/** What comes next: groups in order, each with its state, each item one
 *  short line a reader cares about. A plan, never a date. */
export interface Roadmap {
  title: string;
  introHtml: string[];
  /** The words of each state, shown beside a group's title. */
  states: Record<RoadmapState, string>;
  groups: { title: string; state: RoadmapState; items: { lead: string; textHtml?: string }[] }[];
}
export type RoadmapState = "ready" | "building" | "planned" | "later";
