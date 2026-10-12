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

export interface Copy {
  lang: Lang;
  htmlLang: string;
  ogLocale: string;
  meta: { title: string; description: string };
  skip: string;
  nav: { label: string; how: string; notYet: string; faq: string; waitlist: string };
  switchTo: { label: string; name: string; href: string; hreflang: string };
  hero: {
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
  how: {
    title: string;
    files: { title: string; paragraphsHtml: string[] };
    server: { title: string; introHtml: string; items: { term: string; textHtml: string }[] };
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
  faq: { title: string; items: { q: string; aHtml: string[] }[] };
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
  footer: { lineHtml: string; fontsHtml: string; noTracking: string };
  figLabel: string;
  routes: { home: string; thanks: string; failed: string };
  /** Section anchors, in the page's language. */
  ids: { content: string; how: string; notYet: string; faq: string; waitlist: string };
}
