// The shape of the page's words. pt-BR is written first; en mirrors it
// field for field. Strings named *Html carry inline markup (links, <code>,
// <strong>) and are written by us, never by a visitor.

export type Lang = "pt-BR" | "en";

export interface Figure {
  /** File stem under /media: <stem>.gif (or .png), <stem>.png poster. */
  stem: string;
  kind: "gif" | "still";
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
  who: { title: string; items: string[] };
  how: {
    title: string;
    files: { title: string; paragraphsHtml: string[] };
    server: { title: string; introHtml: string; items: { term: string; textHtml: string }[] };
    vps: {
      title: string;
      introHtml: string;
      tableCaption: string;
      head: [string, string];
      rows: [string, string][];
      afterHtml: string[];
    };
    figures: Figure[];
  };
  motion: { title: string; intro: string; figures: Figure[] };
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
    privacy: string;
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
