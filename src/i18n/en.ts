import type { Copy } from "./types";

// The English mirror of pt-BR.ts, field for field. The screenshots are of the
// app in Portuguese; the alt texts say what they show.

export const en: Copy = {
  lang: "en",
  htmlLang: "en",
  ogLocale: "en_US",
  meta: {
    title: "Verso — Markdown notes, your own server",
    description:
      "A Markdown note app that opens any folder, compatible with Obsidian. With Universo, a server you run yourself, the folder syncs between computers, opens in a browser and on a phone, and is shared with whoever you choose.",
  },
  skip: "Skip to the content",
  nav: {
    label: "Sections",
    how: "How it works",
    notYet: "What it does not do yet",
    faq: "Questions",
    waitlist: "Waitlist",
  },
  switchTo: { label: "Ler em português", name: "Português", href: "/", hreflang: "pt-BR" },
  hero: {
    eyebrow: "Markdown notes · local-first · your own server",
    title: "Your notes are files. The server is yours.",
    ledeHtml:
      "Verso is a note app that opens any folder of Markdown files — an Obsidian vault too — and never rewrites a file by opening it. With <strong>Universo</strong>, Verso’s server that you install yourself, the same folder stays in step across your computers, opens in a browser and on a phone, and can be shared with other people.",
    propsLabel: "In short",
    props: [
      { key: "status", valueHtml: "in testing; no public download yet" },
      { key: "runs on", valueHtml: "macOS, Windows and Linux; in a browser and on a phone, through a Universo" },
      { key: "server", valueHtml: "Universo, on a machine of yours: a mini PC, a NAS, the smallest VPS" },
      { key: "licence", valueHtml: "MPL-2.0" },
      { key: "costs", valueHtml: "nothing beyond the machine it runs on" },
    ],
    cta: "Join the waitlist",
    ctaSecondary: "Read what it does not do yet",
    figure: {
      stem: "janela-no-navegador",
      kind: "still",
      width: 1280,
      height: 820,
      alt: "The Verso window open in a browser, in Portuguese. On the left, the file tree of a folder named Exemplo, with subfolders for a journal, characters, projects and templates. On the right, the note “Bem-vindo ao Verso” (Welcome to Verso), with properties (title, date, tags, status, author) and two callouts.",
      captionHtml:
        "The Verso window in a browser, served by a Universo: the example folder that comes with the app, with properties and callouts as in Obsidian.",
    },
  },
  who: {
    title: "Who it is for",
    items: [
      "For people who already keep notes in Markdown — in Obsidian or in any folder — and want the same notes on the computer, in the browser and on the phone without a third-party service in between.",
      "For a household, a tabletop RPG group or a small team that wants to share folders on a server someone they trust runs.",
      "For people who want an AI agent to read the notes: Verso has an MCP server that searches and reads the folder, tied to no model provider.",
    ],
  },
  how: {
    title: "How it works",
    files: {
      title: "The files are the truth",
      paragraphsHtml: [
        "Every note is a <code>.md</code> file in an ordinary folder on your disk. Verso opens the folder the way a code editor does: nothing imported, no database in place of the files. The search index is a cache; deleting it loses nothing.",
        "Opening a file never rewrites it — not the frontmatter, not the line endings, not the spacing. Converting anything is your action, with the difference shown. Every write is atomic and first checks whether the file changed on disk since it was read; if it did, Verso shows the difference instead of writing over it.",
      ],
    },
    server: {
      title: "The server is yours",
      introHtml:
        "Universo is Verso as a server: one program, installed as a Docker image (amd64 and arm64), as a <code>.deb</code> or <code>.rpm</code> package with systemd, or from an archive. It holds the accounts and the folders — ordinary folders of Markdown on the server’s disk. Nobody signs themselves up: the admin invites. Each folder has an owner, editors and readers.",
      items: [
        {
          term: "Sync",
          textHtml:
            "A folder of this computer stays in step with a folder of the Universo. A change crosses when saved. A file changed on both sides becomes a copy beside it, never a loss; the first sync deletes nothing.",
        },
        {
          term: "Share",
          textHtml:
            "The owner gives another account of the same Universo read or write access to a folder, and can take it back.",
        },
        {
          term: "Edit together",
          textHtml:
            "While sync is connected, a note two people have open receives the other’s edits letter by letter, with each one’s cursor and name.",
        },
        {
          term: "Trash",
          textHtml:
            "What is deleted is kept for 30 days by default, with who deleted it and when, and goes back to its place with “Restore”.",
        },
        {
          term: "Console",
          textHtml:
            "The admin sees accounts, folders, invitations, quotas and the audit log at <code>/admin</code>.",
        },
        {
          term: "Browser and phone",
          textHtml:
            "Universo serves the app’s own window; on a phone and a tablet it installs on the home screen.",
        },
      ],
    },
    vps: {
      title: "A 1 GB VPS is enough",
      introHtml:
        "We measured on a virtual machine sized like the smallest VPS: 1 core, 1 GB of memory, a 10 GB virtual disk, Ubuntu with no desktop, and Universo installed from the <code>.deb</code>. Four computers — two Macs, one Windows, one Linux — synced a folder of 133 files and 62 MB with it.",
      tableCaption: "What the 1-core, 1 GB machine showed",
      head: ["Situation", "Measured"],
      rows: [
        ["The program just started", "about 18 MB of memory"],
        ["20 minutes of the four editing", "CPU under 2 %; the five copies byte-equal at every checkpoint"],
        ["First sync of the 62 MB to the four at once", "69 s"],
        ["One device writing alone", "about 100 ms per write — the disk’s time"],
        ["50 devices writing at once for 60 s", "1001 operations; half waited up to 4.5 s in the disk’s queue; no integrity problem"],
        ["After a burst of 50, in the shipped build", "about 70 MB held"],
        ["On a machine with 453 MiB of memory", "two bursts of 50 without the process being killed, at half the throughput"],
      ],
      afterHtml: [
        "The minimum we suggest: 1 core and 512 MB, for 1 to 3 people with small attachments. For a family or a team of up to about 10 people, 2 cores and 2 GB — an estimate, not measured yet. The machine was on the local network, not at a provider; a Raspberry Pi and a NAS have not been measured yet.",
        "The throughput figures come from the build used in the tests; the memory after a burst, from the build that ships. The full numbers are in the server’s install guide, which comes out with the code.",
      ],
    },
    figures: [
      {
        stem: "sincronizar-tudo-em-dia",
        kind: "still",
        width: 990,
        height: 660,
        alt: "The Sync panel of Verso’s settings, in Portuguese, titled “Tudo em dia.” (All up to date), with the line “demo-vault on notas.casa · you own the folder · last time 2 min ago”, the buttons Sync now, Pause and Turn off, and an empty Waiting for you section.",
        captionHtml: "Settings › Sync when nothing is waiting for you.",
      },
      {
        stem: "celular-servidores",
        kind: "still",
        width: 390,
        height: 844,
        alt: "Verso’s settings on a phone, in Portuguese, in the Servers section: a Universo named notas.casa, the account signed in, and three folders with the person’s role in each — Caderno (owner), Mesa de RPG (edits), Regras da Bia (reads only) — each with an Open here button.",
        captionHtml: "On a phone: a Universo’s folders, with each person’s role — owner, edits, reads only.",
      },
    ],
  },
  motion: {
    title: "At work",
    intro:
      "Recorded in Verso’s test lab, in Portuguese — hence the folders full of numbered notes and conflict copies.",
    figures: [
      {
        stem: "universo-nota-chega-ao-vivo",
        kind: "gif",
        webp: true,
        width: 1080,
        height: 1026,
        alt: "The note “Compras” (Shopping) open in a browser, in the dark theme, with a list. A new line, written on another computer, appears at the end: “written on Mac B at 22:02:52, seen in the browser within seconds”.",
        captionHtml: "A line written on a Mac shows up in the browser within seconds.",
      },
      {
        stem: "verso-sincronizar-conflitos",
        kind: "gif",
        width: 1180,
        height: 760,
        alt: "The Sync panel titled “128 coisas esperam por você” (128 things wait for you). Each item is a note that changed in two places, with the buttons Compare, Open both, Keep this one and Discard copy; comparing shows the lines found on one side only, marked with minus and plus.",
        captionHtml:
          "What changed on both sides becomes a copy, and Verso shows the difference for you to choose.",
      },
      {
        stem: "verso-guardar-os-dois",
        kind: "gif",
        width: 1180,
        height: 760,
        alt: "Verso’s editor with a note that changed on disk while someone typed. A notice says nothing was written and shows the difference between the disk and the typed text, with three choices: Discard mine and reload, Write mine over it, Keep both.",
        captionHtml:
          "The note changed on disk while you typed: nothing is written over it. You choose — discard yours, write yours over it, or keep both.",
      },
      {
        stem: "universo-console-admin",
        kind: "gif",
        webp: true,
        width: 1080,
        height: 1026,
        alt: "Universo’s administration console, in the dark theme, going through the Overview, Accounts, Folders and Log pages; the log lists who gave access to whom, in which folder and when.",
        captionHtml: "The admin’s console: overview, accounts, folders and the audit log.",
      },
    ],
  },
  notYet: {
    title: "What it does not do yet",
    intro: "Better to know before.",
    items: [
      {
        lead: "No public download.",
        textHtml:
          "Verso’s repository is still private. When it opens, the installers for macOS, Windows and Linux and Universo’s packages appear on this page.",
      },
      {
        lead: "No offline use on a phone.",
        textHtml:
          "On a phone and in a browser you work directly on the server’s folder; without a connection, you cannot edit. A local copy with a queue of writes is a later step.",
      },
      {
        lead: "No plugins.",
        textHtml:
          "Neither Obsidian’s nor its own. A plugin system is planned; Obsidian’s plugins do not run in Verso.",
      },
      {
        lead: "No public links for shares.",
        textHtml:
          "Sharing is between accounts of the same Universo. A link anyone can open, without an account, does not exist.",
      },
      {
        lead: "No end-to-end encryption.",
        textHtml:
          "Editing together and searching on the server need the server to read the files: whoever hosts sees the notes. Encryption at rest is the server’s disk’s.",
      },
      {
        lead: "No sync through Dropbox, Google Drive or iCloud.",
        textHtml: "Today sync is with a Universo only.",
      },
    ],
  },
  faq: {
    title: "Questions",
    items: [
      {
        q: "What is the licence?",
        aHtml: [
          "MPL-2.0, for the core and the app. You may use, study, change and redistribute it. Whoever distributes a changed version of one of Verso’s files publishes that file; running Verso as a service requires publishing nothing.",
        ],
      },
      {
        q: "Is it compatible with Obsidian?",
        aHtml: [
          "Verso extends Obsidian’s dialect and never contradicts it: <code>[[…]]</code> links, embeds, callouts, tags, frontmatter properties and <code>.canvas</code> boards (JSON Canvas) open as in Obsidian, and no extension of Verso changes the meaning of something that already exists. Verso’s configuration lives outside the folder, so the same vault opens in both.",
          "Verso is not an Obsidian clone and does not run its plugins.",
        ],
      },
      {
        q: "What about privacy?",
        aHtml: [
          "The app sends no telemetry. It reaches the network only for addresses in your notes or that you click, to check for a new version, and for the Universo you set up.",
          "On a Universo, the notes live on the host’s disk — and whoever hosts can read them (see above).",
          "This site has no analytics and no cookies. The waitlist keeps your e-mail, the page’s language and the time, and serves only to tell you when there is something to download.",
        ],
      },
      {
        q: "What does it cost?",
        aHtml: [
          "Nothing. There is no paid service and no paid plan; the only money foreseen is donations, and a donation does not buy a feature. The server is your machine: a computer at home, a NAS or a VPS whose bill you already pay.",
        ],
      },
      {
        q: "When does it open?",
        aHtml: ["No date set. Leave your e-mail and we will tell you when there is something to download."],
      },
    ],
  },
  waitlist: {
    title: "Waitlist",
    intro: "One e-mail when there is something to download.",
    label: "Your e-mail",
    placeholder: "you@example.com",
    button: "Tell me",
    sending: "Saving…",
    honeypot: "Leave this field empty",
    privacy: "We keep the address, this page’s language and the time. Nothing else.",
    ok: "Done. We will tell you when there is something to download.",
    invalid: "That does not look like an e-mail. Check it and try again.",
    limited: "Too many tries from this network in a short time. Try again in an hour.",
    failed: "Could not save it right now. Try again in a few minutes.",
  },
  thanks: {
    metaTitle: "On the list — Verso",
    title: "Done, you are on the list.",
    bodyHtml: "We will tell you when there is something to download. If the address was already on the list, nothing changed.",
    back: "Back to the start",
  },
  failed: {
    metaTitle: "Not saved — Verso",
    title: "Could not save the e-mail.",
    body: "The address did not look like an e-mail, there were too many tries from this network in the last hour, or the service failed. Try again:",
    back: "Back to the start",
  },
  footer: {
    lineHtml: "Verso · versomd.com · MPL-2.0",
    fontsHtml:
      "Fraunces, Literata and Instrument Sans, under the SIL Open Font License — the same fonts and colours as the app’s window.",
    noTracking: "No analytics, no cookies.",
  },
  figLabel: "Fig.",
  routes: { home: "/en/", thanks: "/en/thanks/", failed: "/en/waitlist/failed/" },
  ids: { content: "content", how: "how-it-works", notYet: "not-yet", faq: "questions", waitlist: "waitlist" },
};
