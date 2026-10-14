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
      "A Markdown note app that opens any folder, compatible with Obsidian. With UniVerso, a server you run yourself, the folder syncs between computers, opens in a browser and on a phone, and is shared with whoever you choose.",
  },
  skip: "Skip to the content",
  nav: {
    label: "Pages",
    home: "Home",
    features: "Features",
    server: "UniVerso",
    compare: "Compare",
    waitlist: "Waitlist",
  },
  toTop: "Back to top",
  switchTo: { label: "Ler em português", name: "Português", href: "/", hreflang: "pt-BR" },
  hero: {
    eyebrow: "Markdown notes · local-first · your own server",
    title: "Your notes are files. The server is yours.",
    ledeHtml:
      "Verso is a note app that opens any folder of Markdown files — an Obsidian vault too — and never rewrites a file by opening it. With <strong>UniVerso</strong>, Verso’s server that you install yourself, the same folder stays in step across your computers, opens in a browser and on a phone, and can be shared with other people.",
    propsLabel: "In short",
    props: [
      { key: "status", valueHtml: "in testing; no public download yet" },
      { key: "runs on", valueHtml: "macOS, Windows and Linux; in a browser and on a phone, through a UniVerso" },
      { key: "server", valueHtml: "UniVerso, on a machine of yours: a mini PC, a NAS, the smallest VPS" },
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
        "The Verso window in a browser, served by a UniVerso: the example folder that comes with the app, with properties and callouts as in Obsidian.",
    },
  },
  who: {
    title: "Who it is for",
    items: [
      {
        kicker: ".md",
        title: "The files are the truth",
        text: "For people who already keep notes in Markdown — in Obsidian or in any folder — and want the same notes on the computer, in the browser and on the phone without a third-party service in between.",
      },
      {
        kicker: "UniVerso",
        title: "The server is yours",
        text: "For a household, a tabletop RPG group or a small team that wants to share folders on a server someone they trust runs.",
      },
      {
        kicker: "MCP",
        title: "An agent reads the notes",
        text: "For people who want an AI agent to read the notes: Verso has an MCP server that searches and reads the folder, tied to no model provider.",
      },
    ],
  },
  more: {
    title: "Read on",
    items: [
      {
        page: "features",
        title: "Features",
        text: "What Verso does today — writing, linking notes, boards, bases — and the roadmap to V1.",
        link: "See the features and the roadmap",
      },
      {
        page: "server",
        title: "UniVerso",
        text: "The server you run yourself: sync, sharing, editing together, and the numbers measured on a 1 GB VPS.",
        link: "Meet UniVerso",
      },
      {
        page: "compare",
        title: "How it compares",
        text: "Verso beside thirteen note and RPG tools, with what each one does and does not do.",
        link: "Open the comparison",
      },
    ],
  },
  how: {
    files: {
      title: "The files are the truth",
      paragraphsHtml: [
        "Every note is a <code>.md</code> file in an ordinary folder on your disk. Verso opens the folder the way a code editor does: nothing imported, no database in place of the files. The search index is a cache; deleting it loses nothing.",
        "Opening a file never rewrites it — not the frontmatter, not the line endings, not the spacing. Converting anything is your action, with the difference shown. Every write is atomic and first checks whether the file changed on disk since it was read; if it did, Verso shows the difference instead of writing over it.",
      ],
    },
    server: {
      items: [
        {
          term: "Sync",
          textHtml:
            "A folder of this computer stays in step with a folder of the UniVerso. A change crosses when saved. A file changed on both sides becomes a copy beside it, never a loss; the first sync deletes nothing.",
        },
        {
          term: "Share",
          textHtml:
            "The owner gives another account of the same UniVerso read or write access to a folder, and can take it back.",
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
            "UniVerso serves the app’s own window; on a phone and a tablet it installs on the home screen.",
        },
      ],
    },
    stepLabel: "Step",
    steps: [
      {
        title: "Connect a folder to a UniVerso",
        textHtml:
          "In Settings › Sync, a folder of this computer starts to stay in step with a folder of the UniVerso. A change crosses when saved, and the first sync deletes nothing.",
        figure: {
          stem: "sincronizar-tudo-em-dia",
          kind: "still",
          width: 990,
          height: 660,
          alt: "The Sync panel of Verso’s settings, in Portuguese, titled “Tudo em dia.” (All up to date), with the line “demo-vault on notas.casa · you own the folder · last time 2 min ago”, the buttons Sync now, Pause and Turn off, and an empty Waiting for you section.",
          captionHtml: "Settings › Sync when nothing is waiting for you.",
        },
      },
      {
        title: "Open it in a browser and on a phone",
        textHtml:
          "UniVerso serves the app’s own window; on a phone and a tablet it installs on the home screen. Each folder shows your role in it: owner, edits or reads only.",
        figure: {
          stem: "celular-servidores",
          kind: "still",
          width: 390,
          height: 844,
          alt: "Verso’s settings on a phone, in Portuguese, in the Servers section: a UniVerso named notas.casa, the account signed in, and three folders with the person’s role in each — Caderno (owner), Mesa de RPG (edits), Regras da Bia (reads only) — each with an Open here button.",
          captionHtml: "On a phone: a UniVerso’s folders, with each person’s role — owner, edits, reads only.",
        },
      },
      {
        title: "Run it from the console",
        textHtml:
          "Nobody signs themselves up: the admin invites. At <code>/admin</code> are the accounts, the folders, the invitations, the quotas and the audit log.",
        figure: {
          stem: "universo-console-admin",
          kind: "poster",
          width: 1080,
          height: 1026,
          alt: "UniVerso’s administration console, in Portuguese and in the dark theme, on the Accounts page: three accounts (admin, Ana and Bia), with e-mail, folders, space used, last access and creation date. Beside it, the menu Overview, Accounts, Folders, Invitations, Log and Server.",
          captionHtml: "The admin’s console, on the Accounts page.",
        },
      },
    ],
    vps: {
      title: "A 1 GB VPS is enough",
      introHtml:
        "We measured on a virtual machine sized like the smallest VPS: 1 core, 1 GB of memory, a 10 GB virtual disk, Ubuntu with no desktop, and UniVerso installed from the <code>.deb</code>. Four computers — two Macs, one Windows, one Linux — synced a folder of 133 files and 62 MB with it.",
      stats: [
        { value: "~18 MB", label: "of memory with the program just started" },
        { value: "< 2 %", label: "CPU over 20 minutes of the four editing" },
        { value: "69 s", label: "for the first sync of the 62 MB to the four at once" },
        { value: "50", label: "devices writing at once for 60 s, with no integrity problem" },
      ],
      allNumbers: "All the numbers",
      tableCaption: "What the 1-core, 1 GB machine showed",
      head: ["Situation", "Measured"],
      rows: [
        ["The program just started", "about 18 MB of memory"],
        ["20 minutes of the four editing", "CPU under 2 %; the five copies byte-equal at every checkpoint"],
        ["First sync of the 62 MB to the four at once", "69 s"],
        ["One device writing alone", "about 100 ms per write — the disk’s time"],
        ["50 devices writing at once for 60 s", "1001 operations; half waited up to 4.5 s in the disk’s queue; no integrity problem"],
        ["After a burst of 50, in the shipped build", "about 70 MB held"],
        ["On a machine with 453 MiB of memory", "ten devices fetching a 181 MB folder at once: a 44 MB peak; bursts of 50 without the process being killed, at half the throughput"],
      ],
      afterHtml: [
        "The minimum we suggest: 1 core and 512 MB, for a family or a small team — measured with up to ten devices, attachments of any size. 1 GB leaves room to spare. The machine was on the local network, not at a provider; a Raspberry Pi and a NAS have not been measured yet.",
        "The throughput figures come from the build used in the tests; the memory after a burst, from the build that ships. The full numbers are in the server’s install guide, which comes out with the code.",
      ],
    },
  },
  motion: {
    title: "At work",
    intro:
      "Recorded in Verso’s test lab, in Portuguese — hence the folders full of numbered notes and conflict copies.",
    tabsLabel: "Recordings",
    tabs: ["Live in the browser", "Conflicts", "Keep both", "Console"],
    play: "Play the recording",
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
        alt: "UniVerso’s administration console, in the dark theme, going through the Overview, Accounts, Folders and Log pages; the log lists who gave access to whom, in which folder and when.",
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
          "Verso’s repository is still private. When it opens, the installers for macOS, Windows and Linux and UniVerso’s packages appear on this page.",
      },
      {
        lead: "No offline use on a phone.",
        textHtml:
          "On a phone and in a browser you work directly on the server’s folder; without a connection, you cannot edit. The phone offline is on the <a href=\"/en/features/#roadmap\">roadmap to V1</a>.",
      },
      {
        lead: "No plugins.",
        textHtml:
          "Neither Obsidian’s nor its own. A plugin system is planned; Obsidian’s plugins do not run in Verso.",
      },
      {
        lead: "No public links for shares.",
        textHtml:
          "Sharing is between accounts of the same UniVerso. A link anyone can open, without an account, does not exist.",
      },
      {
        lead: "No end-to-end encryption.",
        textHtml:
          "Editing together and searching on the server need the server to read the files: whoever hosts sees the notes. Encryption at rest is the server’s disk’s. Optional end-to-end encryption comes after V1.",
      },
      {
        lead: "No sync through Dropbox, Google Drive or iCloud.",
        textHtml: "Today sync is with a UniVerso only.",
      },
    ],
  },
  // Generated from one table for both languages (the comparison of 2026-10-13);
  // every claim and its source in verso-competitive/validacao.md. Never a price.
  compare: {
    title: "How it compares",
    introHtml: [
      "The table puts Verso beside the tools people who keep notes and people who run tabletop games tend to use, with what each one does and does not do.",
      "<strong>Where Verso is ahead:</strong> the notes are Markdown files you own, which Obsidian opens too; the server is yours; several people edit the same note, the same board and the same base live; and there is no paid plan. Obsidian keeps files but does not edit live without a third-party plugin; Notion and LegendKeeper edit live but keep the notes in their own service.",
      "<strong>Where it is behind:</strong> Verso is still in testing, with no public download. It has no game master’s secret inside a note, no maps with pins and layers, no timelines, no family trees and no ready-made RPG templates; it has no plugins; on a phone it works only in the browser and only online. For a world ready to use today, World Anvil, Kanka and LegendKeeper go further; to play at a virtual table, Foundry VTT. And Chronicler, which like Verso keeps Markdown on disk, already has infoboxes, page templates and maps with pins and layers (in Pro, in alpha) — but it is for one person, with no server and no phone.",
    ],
    pains: {
      title: "Three common problems, and what Verso does about them",
      items: [
        { lead: "The game master’s dilemma.", textHtml: "Today Verso shares per folder: the players’ folder read-only, yours yours alone, in the same vault, with no duplicated notes. A secret inside a note — a paragraph only the game master sees — does not exist yet; World Anvil, Kanka, LegendKeeper and Foundry VTT have it." },
        { lead: "Tied to a service.", textHtml: "The notes are <code>.md</code> files in a folder of yours, and the server is a machine of yours. Leaving Verso is closing the app: the folder still opens in Obsidian or any editor." },
        { lead: "Keeping devices in step.", textHtml: "With a UniVerso, the folder stays in step across Mac, Windows and Linux and opens in a browser and on a phone, with no sync subscription. But someone has to keep the server running, and on a phone it is online only." },
      ],
    },
    tableCaption: "Verso and other note and RPG tools, capability by capability",
    scrollHint: "The table scrolls sideways; the capability column and Verso’s stay put.",
    marks: {
      yes: { symbol: "✓", word: "yes" },
      partial: { symbol: "partial", word: "partial" },
      no: { symbol: "✗", word: "no" },
      info: { symbol: "", word: "" },
    },
    capability: "Capability",
    groups: [{ id: "notes", label: "Notes and writing", span: 5 }, { id: "rpg", label: "Worlds and RPG", span: 8 }],
    tools: [
      { id: "verso", name: "Verso", note: "in testing; no public download" },
      { id: "obsidian", name: "Obsidian", href: "https://obsidian.md/", note: "Markdown notes" },
      { id: "logseq", name: "Logseq", href: "https://logseq.com/", note: "outliner; new version in beta" },
      { id: "notion", name: "Notion", href: "https://www.notion.com/", note: "cloud workspace" },
      { id: "bookstack", name: "BookStack", href: "https://www.bookstackapp.com/", note: "self-hosted wiki" },
      { id: "scrivener", name: "Scrivener", href: "https://www.literatureandlatte.com/scrivener/overview", note: "long-form writing" },
      { id: "chronicler", name: "Chronicler", href: "https://chronicler.pro/", note: "local worldbuilding wiki, in alpha" },
      { id: "world-anvil", name: "World Anvil", href: "https://www.worldanvil.com/", note: "cloud worldbuilding" },
      { id: "kanka", name: "Kanka", href: "https://kanka.io/", note: "cloud campaigns" },
      { id: "legendkeeper", name: "LegendKeeper", href: "https://www.legendkeeper.com/", note: "worldbuilding with maps" },
      { id: "campfire", name: "Campfire", href: "https://www.campfirewriting.com/", note: "writing and worlds" },
      { id: "fantasia-archive", name: "Fantasia Archive", href: "https://fantasiaarchive.com/", note: "local worldbuilding" },
      { id: "foundry-vtt", name: "Foundry VTT", href: "https://foundryvtt.com/", note: "virtual tabletop" },
      { id: "pum-companion", name: "PUM Companion", href: "https://jeansenvaars.itch.io/pum-companion", note: "solo play with oracles" },
    ],
    rowGroups: [
      { id: "data", label: "Files and data" },
      { id: "collab", label: "Collaboration and permissions" },
      { id: "rpg", label: "RPG and worlds" },
      { id: "platforms", label: "Platforms and extensions" },
      { id: "ai", label: "AI" },
      { id: "cost", label: "Licence and cost" },
    ],
    rows: [
      {
        group: "data",
        label: "Files you own on disk",
        cells: [
          { mark: "yes", text: "folders of .md, .canvas and .base" },
          { mark: "yes", text: "folders of .md" },
          { mark: "partial", text: "the new version keeps SQLite; the old one, .md" },
          { mark: "no", text: "in their cloud; exports Markdown" },
          { mark: "no", text: "in the server’s database; exports .md" },
          { mark: "partial", text: "on disk, in its own package (RTF)" },
          { mark: "yes", text: "folders of .md; opens Obsidian vaults" },
          { mark: "no", text: "in their cloud; exports PDF, and JSON on a paid plan" },
          { mark: "no", text: "in their cloud; exports JSON and Markdown" },
          { mark: "no", text: "in their cloud; exports HTML and JSON" },
          { mark: "no", text: "in their cloud; exports DOCX, PDF and EPUB" },
          { mark: "partial", text: "on the computer, in the app’s format" },
          { mark: "partial", text: "on your server, in the world’s database" },
          { mark: "partial", text: "a save file per game, in the app’s format; exports .md" },
        ],
      },
      {
        group: "data",
        label: "Markdown",
        cells: [
          { mark: "yes", text: "native, in Obsidian’s dialect" },
          { mark: "yes", text: "native" },
          { mark: "partial", text: "native in the old one; export only in the new" },
          { mark: "partial", text: "shortcuts, import and export" },
          { mark: "partial", text: "optional Markdown editor" },
          { mark: "partial", text: "on export only" },
          { mark: "yes", text: "native, with wikilinks and frontmatter" },
          { mark: "no", text: "BBCode and a visual editor" },
          { mark: "partial", text: "on export only" },
          { mark: "partial", text: "imports Markdown" },
          { mark: "no", text: "no" },
          { mark: "info", text: "the site does not say" },
          { mark: "partial", text: "Markdown pages, kept in its database" },
          { mark: "partial", text: "exports the story as Markdown" },
        ],
      },
      {
        group: "data",
        label: "Database views",
        cells: [
          { mark: "yes", text: "bases: table, kanban, list, calendar" },
          { mark: "yes", text: "Bases: table, cards, list, kanban" },
          { mark: "yes", text: "in the new version" },
          { mark: "yes", text: "yes" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no" },
          { mark: "no", text: "planned" },
          { mark: "partial", text: "interactive tables (paid plan)" },
          { mark: "info", text: "the site does not say" },
          { mark: "info", text: "the site does not say" },
          { mark: "info", text: "the site does not say" },
          { mark: "partial", text: "structured fields" },
          { mark: "no", text: "no" },
          { mark: "info", text: "the site does not say" },
        ],
      },
      {
        group: "data",
        label: "Graph and backlinks",
        cells: [
          { mark: "yes", text: "graph, backlinks and search" },
          { mark: "yes", text: "yes" },
          { mark: "yes", text: "yes" },
          { mark: "partial", text: "backlinks, no graph" },
          { mark: "partial", text: "references, no graph" },
          { mark: "no", text: "no" },
          { mark: "partial", text: "backlinks; no graph announced" },
          { mark: "partial", text: "family trees and relation webs (paid plan)" },
          { mark: "partial", text: "mentions; the relations explorer is paid" },
          { mark: "partial", text: "auto-linking, no graph" },
          { mark: "info", text: "the site does not say" },
          { mark: "info", text: "the site does not say" },
          { mark: "partial", text: "links between documents, no graph" },
          { mark: "info", text: "the site does not say" },
        ],
      },
      {
        group: "collab",
        label: "Your own server",
        cells: [
          { mark: "yes", text: "UniVerso: Docker, .deb, .rpm" },
          { mark: "no", text: "no; Sync and Publish are theirs" },
          { mark: "partial", text: "the new version’s sync server (alpha)" },
          { mark: "no", text: "no" },
          { mark: "yes", text: "PHP and MySQL" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no" },
          { mark: "no", text: "source available; hosting not supported" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no" },
          { mark: "info", text: "a local app, no server" },
          { mark: "yes", text: "a Node.js server or the app itself" },
          { mark: "no", text: "no; optional backup to Google Drive" },
        ],
      },
      {
        group: "collab",
        label: "Live co-editing",
        cells: [
          { mark: "yes", text: "notes, boards, bases and text, with cursors" },
          { mark: "no", text: "Sync merges later; live only with a third-party plugin" },
          { mark: "partial", text: "in the new version: paid, by invitation, alpha" },
          { mark: "yes", text: "yes" },
          { mark: "no", text: "edit warnings, not live" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no" },
          { mark: "no", text: "co-authors on a paid plan, one at a time" },
          { mark: "partial", text: "whiteboards only" },
          { mark: "yes", text: "yes, with cursors" },
          { mark: "info", text: "collaborators edit; live not confirmed" },
          { mark: "no", text: "no" },
          { mark: "yes", text: "several people on one page" },
          { mark: "no", text: "no; solo play" },
        ],
      },
      {
        group: "collab",
        label: "Sharing with permissions",
        cells: [
          { mark: "yes", text: "per folder or subfolder: read or write" },
          { mark: "partial", text: "the whole vault, through Sync (paid)" },
          { mark: "partial", text: "the whole graph" },
          { mark: "yes", text: "per page; per-row rules in databases" },
          { mark: "yes", text: "per shelf, book, chapter and page" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no; single user" },
          { mark: "yes", text: "world, article, subscribers (the fine grain is paid)" },
          { mark: "yes", text: "per entry, role and person" },
          { mark: "yes", text: "per project and per page" },
          { mark: "yes", text: "view, comment or edit" },
          { mark: "no", text: "no" },
          { mark: "yes", text: "per person, on each journal and page" },
          { mark: "no", text: "exports the game or the story as a file" },
        ],
      },
      {
        group: "collab",
        label: "GM secrets inside a note",
        cells: [
          { mark: "no", text: "not yet; today, split by folder" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no per-block permission" },
          { mark: "no", text: "per page only" },
          { mark: "no", text: "no" },
          { mark: "partial", text: "||spoilers|| hidden until clicked; they are in the file" },
          { mark: "yes", text: "secrets in the text (paid plan)" },
          { mark: "yes", text: "private elements and properties" },
          { mark: "yes", text: "/secret blocks" },
          { mark: "info", text: "the site does not say" },
          { mark: "no", text: "no" },
          { mark: "yes", text: "Secret blocks the GM reveals" },
          { mark: "info", text: "does not apply: the oracle plays the GM" },
        ],
      },
      {
        group: "rpg",
        label: "Ready-made RPG templates",
        cells: [
          { mark: "partial", text: "typed notes you define; no RPG packs" },
          { mark: "no", text: "not built in" },
          { mark: "no", text: "no" },
          { mark: "partial", text: "community templates" },
          { mark: "no", text: "generic page templates" },
          { mark: "no", text: "writing templates" },
          { mark: "yes", text: "templates, infoboxes and statblock inserts" },
          { mark: "yes", text: "dozens of templates and statblocks" },
          { mark: "yes", text: "RPG entry types and property kits" },
          { mark: "partial", text: "page templates" },
          { mark: "partial", text: "worldbuilding modules, not RPG" },
          { mark: "yes", text: "worldbuilding document types" },
          { mark: "yes", text: "through game systems" },
          { mark: "yes", text: "50+ oracles, custom tables, dice" },
        ],
      },
      {
        group: "rpg",
        label: "Interactive maps",
        cells: [
          { mark: "no", text: "an image on a board, no pins or layers" },
          { mark: "partial", text: "geographic map in bases; fantasy maps by plugin" },
          { mark: "no", text: "no" },
          { mark: "partial", text: "geographic map in databases" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no" },
          { mark: "yes", text: "pins, regions and layers (Pro, in alpha)" },
          { mark: "yes", text: "pins; layers and secrets on a paid plan" },
          { mark: "yes", text: "layers, and pins with visibility" },
          { mark: "yes", text: "hideable pins, regions, paths" },
          { mark: "yes", text: "pins, zones and layers" },
          { mark: "no", text: "no" },
          { mark: "yes", text: "scenes with map notes" },
          { mark: "no", text: "imported images, no interactive map" },
        ],
      },
      {
        group: "rpg",
        label: "Boards (free canvas)",
        cells: [
          { mark: "yes", text: "JSON Canvas drawn with Excalidraw" },
          { mark: "yes", text: "Canvas (JSON Canvas)" },
          { mark: "partial", text: "whiteboards in the old version" },
          { mark: "no", text: "no free canvas" },
          { mark: "no", text: "draw.io diagrams only" },
          { mark: "partial", text: "a corkboard of cards" },
          { mark: "yes", text: "a canvas in the JSON Canvas format" },
          { mark: "yes", text: "whiteboard (paid plan)" },
          { mark: "yes", text: "live whiteboards" },
          { mark: "yes", text: "whiteboards" },
          { mark: "info", text: "the site does not say" },
          { mark: "info", text: "the site does not say" },
          { mark: "partial", text: "drawing on scenes" },
          { mark: "info", text: "the site does not say" },
        ],
      },
      {
        group: "platforms",
        label: "Offline on the desktop",
        cells: [
          { mark: "yes", text: "the folder is local" },
          { mark: "yes", text: "yes" },
          { mark: "yes", text: "yes" },
          { mark: "partial", text: "in the app, on pages marked for it" },
          { mark: "no", text: "through the server only" },
          { mark: "yes", text: "yes" },
          { mark: "yes", text: "yes, no account" },
          { mark: "no", text: "online only" },
          { mark: "no", text: "online only" },
          { mark: "partial", text: "the browser keeps edits, sends them later" },
          { mark: "yes", text: "Mac and Windows app with an offline mode" },
          { mark: "yes", text: "a local app" },
          { mark: "yes", text: "a desktop app" },
          { mark: "yes", text: "local and offline" },
        ],
      },
      {
        group: "platforms",
        label: "Plugins",
        cells: [
          { mark: "no", text: "none; Obsidian’s do not run" },
          { mark: "yes", text: "community plugins" },
          { mark: "yes", text: "yes" },
          { mark: "partial", text: "integrations and an API" },
          { mark: "partial", text: "themes and hooks" },
          { mark: "no", text: "no" },
          { mark: "info", text: "the site does not say" },
          { mark: "no", text: "no; an API on a paid plan" },
          { mark: "yes", text: "plugin library (paid plan)" },
          { mark: "no", text: "no; an API on a paid plan" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no" },
          { mark: "yes", text: "modules and systems" },
          { mark: "no", text: "no; paid extras" },
        ],
      },
      {
        group: "platforms",
        label: "Phone",
        cells: [
          { mark: "partial", text: "in the browser, through a UniVerso; online only" },
          { mark: "yes", text: "iOS and Android apps, offline" },
          { mark: "yes", text: "apps; the new version’s in testing" },
          { mark: "yes", text: "apps, with offline" },
          { mark: "partial", text: "responsive site" },
          { mark: "partial", text: "iOS; no Android" },
          { mark: "no", text: "no; desktop only" },
          { mark: "partial", text: "in the browser; no app" },
          { mark: "partial", text: "in the browser; no app" },
          { mark: "partial", text: "in the browser; no app" },
          { mark: "partial", text: "an app with fewer modules, online" },
          { mark: "no", text: "no" },
          { mark: "no", text: "phones not supported" },
          { mark: "yes", text: "iOS and Android apps (bought separately)" },
        ],
      },
      {
        group: "ai",
        label: "AI agents (MCP)",
        cells: [
          { mark: "yes", text: "local MCP server, read-only" },
          { mark: "partial", text: "official CLI; MCP from the community only" },
          { mark: "yes", text: "MCP server in the new version" },
          { mark: "yes", text: "official MCP, on their cloud" },
          { mark: "no", text: "no; there is an API" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no official one" },
          { mark: "no", text: "no official one" },
          { mark: "no", text: "no; a new API, paid" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no" },
          { mark: "no", text: "no official one" },
          { mark: "no", text: "no; an optional paid AI assistant" },
        ],
      },
      {
        group: "cost",
        label: "Licence and code",
        cells: [
          { mark: "info", text: "MPL-2.0; the repository is still private" },
          { mark: "info", text: "proprietary, closed source" },
          { mark: "info", text: "AGPL-3.0, open source" },
          { mark: "info", text: "proprietary" },
          { mark: "info", text: "MIT, open source" },
          { mark: "info", text: "proprietary" },
          { mark: "info", text: "PolyForm Shield 1.0.0: source available, not open source" },
          { mark: "info", text: "proprietary" },
          { mark: "info", text: "source available with Commons Clause; not open source" },
          { mark: "info", text: "proprietary" },
          { mark: "info", text: "proprietary" },
          { mark: "info", text: "GPL-3.0, open source" },
          { mark: "info", text: "proprietary" },
          { mark: "info", text: "proprietary; no licence published" },
        ],
      },
      {
        group: "cost",
        label: "Cost",
        cells: [
          { mark: "info", text: "free; you run the server" },
          { mark: "info", text: "free with paid add-ons (Sync, Publish)" },
          { mark: "info", text: "free with a paid plan (sync)" },
          { mark: "info", text: "free with paid plans" },
          { mark: "info", text: "free" },
          { mark: "info", text: "paid, one-time licence" },
          { mark: "info", text: "free with a paid plan (Pro, one-time licence)" },
          { mark: "info", text: "free with paid plans; a free world is public" },
          { mark: "info", text: "free with paid plans" },
          { mark: "info", text: "free with a paid plan; making projects is paid" },
          { mark: "info", text: "free with paid modules" },
          { mark: "info", text: "free; v1 stopped in 2025, a rewrite is under way" },
          { mark: "info", text: "paid, one licence for the GM" },
          { mark: "info", text: "paid: pay what you want above a minimum, per platform; PUM Lite is free" },
        ],
      },
    ],
    controls: {
      label: "Choose what to compare",
      presetsLabel: "Shortcuts",
      presets: [{ id: "notes", label: "Notes and writing" }, { id: "rpg", label: "Worlds and RPG" }, { id: "all", label: "All" }, { id: "versus", label: "Verso × Obsidian" }],
      toolsLabel: "Tools",
      capsLabel: "Capabilities",
      diff: "Only what differs",
      diffHint: "Hides the rows where every chosen tool has the same mark (✓, partial or ✗).",
      reset: "Show everything",
      count: "Showing {tools} of {toolsTotal} tools and {rows} of {rowsTotal} capabilities.",
    },
    legendHtml: "✓ does it · <strong>partial</strong> does part of it, or with limits · ✗ does not · no mark: only what the cell says, or what the product’s site does not say. No prices: they change, and each site gives its own.",
    verified: "Checked in October 2026; the other products change — see their sites.",
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
          "The app sends no telemetry. It reaches the network only for addresses in your notes or that you click, to check for a new version, and for the UniVerso you set up.",
          "On a UniVerso, the notes live on the host’s disk — and whoever hosts can read them (see above).",
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
        q: "How do I know the site and the download are official?",
        aHtml: [
          "Verso’s only site is this one, versomd.com; its source is public at <a href=\"https://github.com/SergioSJS/versomd-site\">github.com/SergioSJS/versomd-site</a>.",
          "The installers and UniVerso’s packages come only from the releases published on SergioSJS’s GitHub, and are signed with minisign. The public key is <code>RWS1zv2nvs/ng1hA0YspwOg7wGda98zkXjVfx8m9CtT5obRW5zabNHaT</code>. The app checks the signature before it updates itself, and <code>universo.sh</code> before it installs. A file signed with another key, or a site at another address, is not ours."
        ],
      },
      {
        q: "When does it open?",
        aHtml: ["No date set. Leave your e-mail and we will tell you when there is something to download."],
      },
    ],
  },
  pages: {
    features: {
      meta: {
        title: "Features and roadmap — Verso",
        description:
          "What Verso does today — writing in Markdown, linking notes, boards, bases, syncing with a server of your own — and what comes next, up to V1.",
      },
      eyebrow: "Features",
      title: "What Verso does, and what comes next.",
      ledeHtml:
        "First what the test releases already have; right below, <a href=\"#roadmap\">the roadmap</a> to V1, the release for everyone.",
      today: {
        title: "What it does today",
        introHtml:
          "All of this is in today’s test releases: on a Mac with an Apple chip, on Windows 10 and 11 and on Linux (x64), and in a browser and on a phone through a UniVerso.",
        groups: [
          {
            title: "Writing",
            itemsHtml: [
              "Three modes: reading, editing and the raw Markdown.",
              "Blocks you drag by their handle and a <code>/</code> menu, as in Notion.",
              "Tables edited as tables.",
              "A panel for the note’s properties, and typed notes: the type gives a note its fields.",
              "Callouts, maths, Mermaid diagrams and code blocks with a copy button.",
            ],
          },
          {
            title: "Linking notes",
            itemsHtml: [
              "<code>[[…]]</code> links to notes, headings and blocks, and embeds that show the note or the block.",
              "Backlinks, outgoing links and the links that lead to no note yet.",
              "Renaming a note updates every link to it.",
              "A graph of the notes to explore.",
            ],
          },
          {
            title: "Boards",
            itemsHtml: [
              "<code>.canvas</code> files, Obsidian’s format, drawn with Excalidraw.",
              "The folder’s notes as cards you edit in place; pictures, which you can crop, and PDFs.",
              "Arrows that keep the point they were drawn to, and the drawings of Obsidian’s Excalidraw plugin.",
            ],
          },
          {
            title: "Bases",
            itemsHtml: [
              "<code>.base</code> files shown as a table, cards, a list, a kanban or a calendar, with filters, sorting, groups and formulas.",
              "A base embedded live in a note; the same file Obsidian opens.",
            ],
          },
          {
            title: "Organizing",
            itemsHtml: [
              "A file tree with multiple selection, stickers, colours and covers.",
              "Folder pages, manual order and focuses, shared with make.md.",
              "The daily note, with a calendar, and templates offered when a note is made.",
            ],
          },
          {
            title: "Reading and keeping",
            itemsHtml: [
              "A PDF reader with two-page spreads, pictures and HTML files.",
              "Web pages kept as notes.",
            ],
          },
          {
            title: "Finding",
            itemsHtml: [
              "Search across the text of every note, open by name and a command palette.",
              "Find and replace across notes.",
              "Pinned and preview tabs, split panes, workspaces and one folder per window.",
            ],
          },
          {
            title: "With a UniVerso",
            itemsHtml: [
              "The folder in step across your computers; the first sync deletes nothing.",
              "Folders shared with other accounts, to read or to write.",
              "Notes, boards and bases edited together, live, with each person’s cursor and name.",
              "A 30-day trash, and a console for the admin.",
              "The same window in a browser and on a phone. <a href=\"/en/universo/\">More about UniVerso</a>.",
            ],
          },
          {
            title: "AI agents and the terminal",
            itemsHtml: [
              "A read-only MCP server, which Settings connects to Claude Desktop; every call an agent makes is logged.",
              "The <code>verso</code> command indexes, searches and lists backlinks in the terminal.",
            ],
          },
          {
            title: "Your way, no account",
            itemsHtml: [
              "Themes, palettes, fonts and your own shortcuts; the app in Portuguese or in English.",
              "No sign-up and no telemetry: the folder is yours.",
              "The app updates itself, and installs only an update whose signature checks out.",
            ],
          },
        ],
      },
      roadmap: {
        title: "Roadmap",
        introHtml: [
          "What comes next, up to V1 — the release for everyone. It is a plan, not a promise: what goes in and in what order may change, and there are no dates.",
          "<strong>Being built</strong> is what is being made now for the next test release; <strong>planned</strong> is what is decided for V1 and has not reached the test releases yet.",
        ],
        states: { building: "being built", planned: "planned", later: "after V1" },
        groups: [
          {
            title: "In the next test release",
            state: "building",
            items: [
              {
                lead: "Notifications in the app.",
                textHtml:
                  "A notice when something changes without you asking — sync dropped or came back, a folder was shared with you, a new version is out — and a list to look at later. You choose, kind by kind, what notifies you.",
              },
            ],
          },
          {
            title: "In V1",
            state: "planned",
            items: [
              { lead: "Preview on hover.", textHtml: "Rest the pointer on a link and read the note without leaving where you are." },
              { lead: "A note’s card.", textHtml: "The properties become a card beside the text, with a picture — a character sheet, a place, a project." },
              { lead: "The game master’s secrets.", textHtml: "A <code>&gt; [!secret]</code> block inside the note, which someone who can only read the shared note never receives." },
              { lead: "Dice and random tables.", textHtml: "<code>dice: 1d20</code> rolls with a click, and a table in a note draws a row; the result is never written into the note." },
              { lead: "Linking mentions.", textHtml: "Where a note is named without a link, one click makes the link — one at a time, or all at once, after seeing what changes." },
              { lead: "Maps on the board.", textHtml: "A picture under the board, pins that open notes, and secret pins the players do not see." },
              { lead: "Version history.", textHtml: "Who changed a note and when, the difference between versions, and an older version brought back — on a UniVerso and in the computer's own folders." },
              { lead: "The phone offline.", textHtml: "The folders you choose stay on the phone; you write without a connection, and everything syncs when the network is back." },
              { lead: "Periodic notes.", textHtml: "Weekly and monthly, beside the daily note." },
              { lead: "Fuller bases.", textHtml: "Filters with regular expressions, and the map view." },
              { lead: "The app as a server.", textHtml: "The desktop app serves its folder on your network; the phone finds it there and connects by reading a QR code." },
              { lead: "Intel Macs and Linux ARM64.", textHtml: "Apps for those computers too." },
            ],
          },
          {
            title: "Also before V1",
            state: "planned",
            items: [
              { lead: "A security test from outside.", textHtml: "Someone outside the project tries to break into a test UniVerso." },
              { lead: "Signed apps.", textHtml: "On a Mac and on Windows, with no unknown-app warning when installing." },
              { lead: "A pass with a screen reader.", textHtml: "The whole app gone through with a screen reader, so it works for people who cannot see the screen." },
              { lead: "A month of real use.", textHtml: "A month of using Verso every day, without losing any data." },
              { lead: "The code in the open.", textHtml: "Verso’s repository public, and the installers on this site." },
            ],
          },
          {
            title: "Later",
            state: "later",
            items: [
              { lead: "Optional end-to-end encryption." },
              { lead: "The MCP server over the network." },
              { lead: "The folder on outside storage: a bucket of yours or WebDAV." },
            ],
          },
        ],
      },
    },
    server: {
      meta: {
        title: "UniVerso, Verso’s server",
        description:
          "UniVerso is Verso as a server, on a machine of yours: the folder in step across computers, in a browser and on a phone, shared and edited together. Measured on a 1-core, 1 GB VPS.",
      },
      eyebrow: "UniVerso · Verso’s server",
      title: "The server is yours.",
      ledeHtml:
        "UniVerso is Verso as a server: one program, installed as a Docker image (amd64 and arm64), as a <code>.deb</code> or <code>.rpm</code> package with systemd, or from an archive. It holds the accounts and the folders — ordinary folders of Markdown on the server’s disk. Nobody signs themselves up: the admin invites. Each folder has an owner, editors and readers.",
      stepsTitle: "In three steps",
      featuresTitle: "What it does",
    },
    compare: {
      meta: {
        title: "How it compares — Verso",
        description:
          "Verso beside thirteen note, worldbuilding and RPG tools, capability by capability: what each one does and does not do. No prices.",
      },
      eyebrow: "Notes, worlds and RPG",
      roadmapHtml:
        "Part of what is missing — the game master’s secret inside a note, maps with pins, the phone offline — is on the <a href=\"/en/features/#roadmap\">roadmap to V1</a>. It is a plan, with no dates.",
    },
  },
  waitlist: {
    title: "Waitlist",
    intro: "One e-mail when there is something to download.",
    label: "Your e-mail",
    placeholder: "you@example.com",
    button: "Tell me",
    sending: "Saving…",
    honeypot: "Leave this field empty",
    privacyHtml:
      'We keep the e-mail, this page’s language and the time; no other personal data (the network address only counts the tries, hashed, and is gone within an hour). To leave the list, write to <a href="mailto:sergiosjs@pm.me">sergiosjs@pm.me</a>.',
    ok: "Done. We will tell you when there is something to download.",
    invalid: "That does not look like an e-mail. Check it and try again.",
    limited: "Too many tries from this network in a short time. Try again in an hour.",
    failed: "Could not save it right now. Try again in a few minutes.",
  },
  thanks: {
    metaTitle: "On the list — Verso",
    title: "Done, you are on the list.",
    bodyHtml:
      'We will tell you when there is something to download. If the address was already on the list, nothing changed. No personal data besides the e-mail is kept; to leave the list, write to <a href="mailto:sergiosjs@pm.me">sergiosjs@pm.me</a>.',
    back: "Back to the start",
  },
  failed: {
    metaTitle: "Not saved — Verso",
    title: "Could not save the e-mail.",
    body: "The address did not look like an e-mail, there were too many tries from this network in the last hour, or the service failed. Try again:",
    back: "Back to the start",
  },
  footer: {
    lineHtml: "Verso · versomd.com · MPL-2.0 · <a href=\"https://github.com/SergioSJS/versomd-site\">this site’s source</a>",
    fontsHtml:
      "Fraunces, Literata and Instrument Sans, under the SIL Open Font License — the same fonts and colours as the app’s window.",
    noTracking: "No analytics, no cookies.",
  },
  figLabel: "Fig.",
  routes: { home: "/en/", features: "/en/features/", server: "/en/universo/", compare: "/en/compare/", thanks: "/en/thanks/", failed: "/en/waitlist/failed/" },
  ids: {
    content: "content",
    notYet: "not-yet",
    compare: "compare",
    faq: "questions",
    waitlist: "waitlist",
    files: "files",
    today: "today",
    roadmap: "roadmap",
    steps: "steps",
    serverFeatures: "what-it-does",
  },
};
