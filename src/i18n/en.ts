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
    wiki: "Wiki",
    download: "Download",
  },
  links: { releases: "https://github.com/SergioSJS/verso/releases", repo: "https://github.com/SergioSJS/verso" },
  toTop: "Back to top",
  switchTo: { label: "Ler em português", name: "Português", href: "/", hreflang: "pt-BR" },
  hero: {
    iconAlt: "Verso's icon: an open book with a ribbon",
    eyebrow: "Markdown notes, local-first, your own server",
    title: "Your notes are files. The server is yours.",
    ledeHtml:
      "Verso is a note app that opens any folder of Markdown files — an Obsidian vault too — and never rewrites a file by opening it. With <strong>UniVerso</strong>, Verso’s server that you install yourself, the same folder stays in step across your computers, opens in a browser and on a phone, and can be shared with other people.",
    propsLabel: "In short",
    props: [
      { key: "status", valueHtml: "in testing (beta); <a href=\"/en/download/\">download here</a>" },
      { key: "runs on", valueHtml: "macOS, Windows, Linux, Android, iPad and iPhone; in a browser, through a UniVerso" },
      { key: "server", valueHtml: "UniVerso, on a machine of yours — a mini PC, a NAS, the smallest VPS — or the desktop app itself" },
      { key: "licence", valueHtml: "<a href=\"https://github.com/SergioSJS/verso\">MPL-2.0, open source</a>" },
      { key: "costs", valueHtml: "nothing beyond the machine it runs on" },
    ],
    cta: "Download",
    ctaWaitlist: "Get told of a new version",
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
        text: "For a household, a small team or a tabletop RPG group — with the Table’s rolls, chat and music, dice, oracles and sheets — that wants to share folders on a server someone they trust runs.",
      },
      {
        kicker: "MCP",
        title: "An agent reads the notes",
        text: "For people who want an AI agent to read the notes: Verso has an MCP server that searches and reads the folder, tied to no model provider.",
      },
    ],
  },
  scenarios: {
    title: "How will you use Verso?",
    intro: "Pick the way closest to yours: each says what to install, in what order, and what works offline. You can start with the first and change later; a folder stays a folder.",
    legend: { files: "where the files live", sync: "syncs" },
    stepsLabel: "In this order",
    offlineLabel: "Offline",
    items: [
      {
        map: "local",
        title: "Only on my computer",
        who: "You write alone, on one computer — or you already have an Obsidian vault.",
        stepsHtml: ["Install the desktop app.", "<strong>Open folder</strong> (<code>⌘ O</code>): a new folder, or your vault as it is."],
        offline: "Everything. No account and no server.",
        anchor: "1-only-on-my-computer",
        link: "The scenario in the wiki",
        figure: { title: "Only on the computer", desc: "The desktop app opens a folder on the disk, where the files live.", labels: ["Computer", "Folder on disk"] },
      },
      {
        map: "home",
        title: "Computer and phone, at home",
        who: "You want the computer's notes on your phone, with no server to install.",
        stepsHtml: ["Install the app and open the folder.", "<strong>Settings › Turn into a server</strong>: tick the folders, <strong>On my network</strong>.", "<strong>Pair a phone</strong>: the QR code in the camera, then <strong>Allow</strong>."],
        offline: "The phone opens the folders while the computer serves them, on the same network.",
        anchor: "2-computer-and-phone-no-server",
        link: "The scenario in the wiki",
        figure: { title: "Computer and phone on the home network", desc: "The files live on the computer, which serves the ticked folders to the phone's browser, paired by a QR code, on the home network.", labels: ["Home network", "Computer", "Phone", "QR"] },
      },
      {
        map: "cloud",
        title: "Sync without a server",
        who: "More than one device, with the cloud you already have.",
        stepsHtml: ["A Nextcloud app password, or an S3 key.", "<strong>Settings › Sync › Sync with…</strong> WebDAV or S3.", "On each device, the same cloud folder."],
        offline: "Each device holds the whole folder; changes cross when the network is back.",
        anchor: "3-sync-without-a-server",
        link: "The scenario in the wiki, and Syncthing",
        figure: { title: "Syncing with a cloud", desc: "The computer and the phone each hold the whole folder and sync it with a WebDAV or S3 cloud, which keeps another copy.", labels: ["Your cloud", "Computer", "Phone", "WebDAV · S3"] },
      },
      {
        map: "universo",
        title: "Your own UniVerso",
        who: "Everything on every device, and the browser from anywhere.",
        stepsHtml: ["Install UniVerso on a NAS, a VPS or a free Oracle machine.", "Create the first admin through the link in the log.", "In the apps, <strong>Settings › Servers › Connect</strong>, and pick the folder."],
        offline: "The apps keep a synced copy that opens offline.",
        anchor: "4-your-own-universo",
        link: "The scenario in the wiki",
        figure: { title: "Your own UniVerso", desc: "UniVerso holds the folders; the computer and the phone keep synced copies, and the browser opens the folders on the server.", labels: ["UniVerso", "Computer", "Phone", "Browser"] },
      },
      {
        map: "table",
        title: "An RPG with friends",
        who: "A game master who wants the players at the Table, in their browser.",
        stepsHtml: ["<strong>Settings › Turn into a server › By an internet link</strong>.", "On the campaign folder, <strong>Make this folder a table</strong>.", "<strong>Invite players › Make link</strong>, and send it."],
        offline: "The computer stays on during the session; for a table that is always up, a UniVerso.",
        anchor: "5-playing-an-rpg-with-friends",
        link: "The scenario in the wiki",
        figure: { title: "The table served from your computer", desc: "The files live on your computer, which serves the table through a Cloudflare link to the invited players.", labels: ["Your computer", "Cloudflare link", "Players"] },
      },
      {
        map: "team",
        title: "Family or team",
        who: "Each with their own notes, and some folders shared.",
        stepsHtml: ["A UniVerso, and an invitation for each person.", "On the folder, <strong>Share…</strong>: <strong>reads</strong> or <strong>edits</strong>.", "Each connects their apps, or uses the browser."],
        offline: "As on a UniVerso: each app's copy opens offline. Only the owner deletes.",
        anchor: "6-family-or-team",
        link: "The scenario in the wiki",
        figure: { title: "Folders shared on a UniVerso", desc: "UniVerso holds the folder; the owner and whoever edits sync with it, and whoever only reads receives.", labels: ["UniVerso", "owner", "edits", "reads"] },
      },
    ],
    obsidianHtml: "<strong>Already on Obsidian?</strong> In any of these ways Verso opens the same vault, converting nothing, and the two live side by side on the same folder.",
    obsidianAnchor: "7-alongside-obsidian",
    obsidianLink: "Using both",
    wiki: "/en/wiki/how-will-you-use-verso/",
    all: "All seven scenarios, step by step",
  },
  more: {
    title: "Read on",
    items: [
      {
        page: "features",
        title: "Features",
        text: "What Verso does — writing, linking notes, boards, bases and the RPG tools — with screens of the app, and the roadmap to V1.",
        link: "See the features and the roadmap",
      },
      {
        page: "server",
        title: "UniVerso",
        text: "The server you run yourself: sync, sharing, editing together, and the numbers measured on a 1 GB machine the size of the smallest VPS.",
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
            "A folder on this computer stays in step with a folder on UniVerso. A change crosses when you save. A file changed on both sides becomes a copy beside it, never a loss; the first sync deletes nothing.",
        },
        {
          term: "Share and give access",
          textHtml:
            "The owner shares a folder, or a folder inside it, with another account on the same UniVerso, to read or to edit. At a table, every note, board, file or folder has the Access window, with three choices — does not see, sees, edits — that says where each comes from; the owner can take it back.",
        },
        {
          term: "Edit together",
          textHtml:
            "A note or a board open to two people gets the other’s edits at once, with each person’s cursor and name. Whoever joins shows as a quiet avatar, with no pop-ups jumping on the screen.",
        },
        {
          term: "The Table",
          textHtml:
            "A folder becomes a campaign, with a chat and roll log that everyone at the table sees. The server does the rolling, with the roller’s name; there are secret rolls (only the game master sees the result), images in the chat, and music the whole table hears.",
        },
        {
          term: "Invite players",
          textHtml:
            "The game master invites each player by a single-use link that opens only that campaign. Notes start hidden: release them to the whole table or to some players, and hide them again whenever you like.",
        },
        {
          term: "One access model",
          textHtml:
            "Four rights per player — Images, Files, Create notes and Create boards — all off for someone who just joined. An image a player pastes into a note lands in an <code>assets</code> folder beside it, with the same access as the note.",
        },
        {
          term: "Read link",
          textHtml:
            "A folder or a note can be read in a browser by whoever holds the address, no account needed. The link can expire, ask for a passphrase and be revoked at once; secret blocks never reach the reader. It starts off: the administrator turns it on.",
        },
        {
          term: "Version history",
          textHtml:
            "Each note keeps who changed it, when and the difference; an old version comes back with a click.",
        },
        {
          term: "Trash",
          textHtml:
            "What is deleted stays 30 days by default, with who deleted it and when, and returns to its place with “Restore”.",
        },
        {
          term: "Notifications",
          textHtml:
            "What changes without your asking lands in a notifications centre, and also in the system’s notifications if you want. Each kind of notice can be turned on or off.",
        },
        {
          term: "Browser and phone",
          textHtml:
            "UniVerso serves the same window as the app; on a phone or tablet it installs on the home screen, and the Android, iPad and iPhone apps sign in to it and sync. In the browser, for folders you choose, over HTTPS, the phone also opens and edits with no network, and sends what changed when the network returns.",
        },
        {
          term: "No server to rent",
          textHtml:
            "The desktop app is a server too: it serves folders on your home network, with the phone connecting by a QR code you approve on the computer, or over the internet, by a Cloudflare link, with no domain and no open port; players come in by invitation. It works while the computer stays on, as Foundry does; to stay up all the time, install UniVerso on a machine of your own.",
        },
        {
          term: "Internet link",
          textHtml:
            "With no domain and no open port, UniVerso can also get an <code>https</code> address through Cloudflare: a quick link, new at each start and good for 12 hours you can extend, or your own address. Turn it on in the console, with <code>universo.sh link</code> or with a variable.",
        },
        {
          term: "Install and keep it",
          textHtml:
            "The <code>universo.sh</code> installer asks before each step: it installs, gives the server an <code>https</code> address with Caddy, makes the first admin, backs up — encrypted, if you want — and updates.",
        },
        {
          term: "Console",
          textHtml:
            "Whoever administers sees accounts, folders, invitations, quotas and the audit log at <code>/admin</code>.",
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
          alt: "The Sync panel of Verso’s settings, titled “All up to date.”, with the line “Verso Demo on notes.example.org · the folder is yours · last 2 min ago”, the buttons Sync now, Pause and Turn off, the option to edit notes together while online, and an empty Waiting for you section.",
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
          alt: "Verso’s folder switcher on a phone, connected to a UniVerso: Gray Harbor and Notebook as owner, Rules read-only (Bruno’s) and Sketches for editing (Cris’s).",
          captionHtml: "On a phone: a UniVerso’s folders, with each person’s role — owner, edits, reads only.",
        },
      },
      {
        title: "Run it from the console",
        textHtml:
          "Nobody signs themselves up: the admin invites, and so does a game master the admin lets make folders, for their own tables. At <code>/admin</code> are the accounts, the folders, the invitations, the quotas and the audit log.",
        figure: {
          stem: "console-accounts",
          kind: "shot",
          width: 1280,
          height: 800,
          alt: "UniVerso’s administration console on the Accounts page: five accounts (Admin, Ana, Bruno, Cris and Dora), with e-mail, folders, space used, last seen and creation date. Beside it, the menu Overview, Accounts, Folders, Invitations, Log and Server.",
          captionHtml: "The administrator’s console, on the Accounts page.",
        },
      },
    ],
    vps: {
      title: "A 1 GB VPS is enough",
      introHtml:
        "We measured on a virtual machine sized like the smallest VPS: 1 core, 1 GB of memory, a 10 GB virtual disk, Ubuntu with no desktop, and UniVerso installed from the <code>.deb</code>. Four computers — two Macs, one Windows, one Linux — synced a folder of 133 files and 62 MB with it. On 30 October 2026 we repeated it with much more load: 10 to 116 devices at once, plus five people typing together for ten minutes.",
      stats: [
        { value: "0", label: "integrity problems, with 10 to 116 devices at once" },
        { value: "~25", label: "active people comfortably: each write takes about 2 s" },
        { value: "~360 MB", label: "of memory under load, steady, no leak" },
        { value: "5 s", label: "at most, while people type, until the note is written to disk" },
      ],
      allNumbers: "All the numbers",
      tableCaption: "What the 1-core, 1 GB machine showed",
      head: ["Situation", "Measured"],
      rows: [
        ["The program just started", "about 18 MB of memory"],
        ["20 minutes of four computers editing", "CPU under 2 %; the five copies byte-equal at every checkpoint"],
        ["First sync of the 62 MB to the four at once", "69 s"],
        ["One device writing alone", "about 100 ms per write — the disk’s time"],
        ["10 devices at once", "a write takes about 0.7 s; a read, 55 ms"],
        ["25 devices at once", "a write takes about 2.2 s; a read, 70 ms"],
        ["50 devices at once", "a write takes about 5 s; a read, 60 ms"],
        ["100 devices at once", "a write takes about 18 s; a read, 70 ms — it works, but slowly"],
        ["A 32-minute round, with bursts and 40 MB files (10 to 116 devices)", "no integrity problem, checked byte by byte"],
        ["Five people typing for 10 minutes, a reader and 25 load devices", "514 passages, none lost or repeated; memory at most 273 MB"],
        ["On a machine with 453 MiB of memory", "ten devices fetching a 181 MB folder at once: a 44 MB peak"],
      ],
      afterHtml: [
        "The minimum we suggest: 1 core and 512 MB, for a family or a small team. With 1 GB, up to about 25 active people at once is comfortable; beyond that the server stays correct, but each write waits longer — the limit is the core and the disk, not the memory. The machine was on the local network, not at a provider; a Raspberry Pi and a NAS have not been measured yet.",
        "The full numbers are in the <a href=\"https://github.com/SergioSJS/verso/blob/main/docs/reference/server-install.md#14-what-it-needs\">server’s install guide</a>, section 14.",
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
        lead: "The phone apps are not in the stores.",
        textHtml:
          "The Android one installs from its APK file; the iPad and iPhone one through AltStore Classic, which signs the app with your Apple ID for 7 days at a time and renews it by itself with the computer on the same network. In a phone’s browser, without the app, offline needs a UniVerso served over HTTPS.",
      },
      {
        lead: "No plugins.",
        textHtml:
          "Neither Obsidian’s nor its own. Third-party plugins come after V1; Obsidian’s do not run in Verso.",
      },
      {
        lead: "Without an account you only read.",
        textHtml:
          "A read link opens a folder or a note for anyone, with no account, but only to read. To edit together, a person needs an account on the UniVerso, or on the computer that serves the table.",
      },
      {
        lead: "No end-to-end encryption.",
        textHtml:
          "Editing together and searching on the server need the server to read the files: whoever hosts sees the notes. Encryption at rest is the server’s disk’s. Optional end-to-end encryption comes after V1.",
      },
      {
        lead: "Not yet Dropbox, OneDrive or Google Drive.",
        textHtml: "The desktop and Android apps already sync a folder with a UniVerso, with a WebDAV server (such as Nextcloud) or with an S3 bucket. Dropbox, OneDrive and Google Drive are planned for V1 (<a href=\"/en/features/#roadmap\">roadmap</a>).",
      },
      {
        lead: "The apps still warn at install.",
        textHtml: "The Mac app is not notarized by Apple: the first time, it opens through System Settings’ “Open Anyway”. The Windows one is not signed yet, and SmartScreen warns; signing is planned for V1.",
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
      "<strong>Where it is behind:</strong> Verso is still in testing (beta), with a <a href=\"/en/download/\">download here</a>. It has no layers on its maps, no timelines, no family trees and no ready-made rules packs; it has no plugins; on a phone, its apps are outside the stores (an APK on Android, AltStore on iPad and iPhone). For a world ready to use today, World Anvil, Kanka and LegendKeeper go further; to play at a virtual table, Foundry VTT. And Chronicler, which like Verso keeps Markdown on disk, already has infoboxes, page templates and maps with pins and layers (in Pro, in alpha) — but it is for one person, with no server and no phone.",
    ],
    pains: {
      title: "Three common problems, and what Verso does about them",
      items: [
        { lead: "The game master’s dilemma.", textHtml: "Verso shares per folder and per note: the players’ folder read-only, yours yours alone, in the same vault, with no duplicated notes. And a secret inside a note — a paragraph only the game master sees — never reaches someone who only reads. World Anvil, Kanka, LegendKeeper and Foundry VTT have secrets too." },
        { lead: "Tied to a service.", textHtml: "The notes are <code>.md</code> files in a folder of yours, and the server is a machine of yours. Leaving Verso is closing the app: the folder still opens in Obsidian or any editor." },
        { lead: "Keeping devices in step.", textHtml: "With a UniVerso, the folder stays in step across Mac, Windows, Linux, Android, iPad and iPhone and opens in a browser, with no sync subscription. But someone has to keep the server running." },
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
      { id: "verso", name: "Verso", note: "in testing (beta); download on GitHub" },
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
          { mark: "yes", text: "bases: table, cards, list, kanban, calendar and map" },
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
          { mark: "yes", text: "UniVerso (Docker, .deb, .rpm) or the desktop app itself" },
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
          { mark: "yes", text: "per folder or subfolder, read or write; at a table, per note, board or file" },
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
          { mark: "yes", text: "a > [!secret] block; whoever only reads the shared folder never receives it" },
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
          { mark: "partial", text: "campaign and world templates, sheets in over thirty layouts, oracles; no ready-made rules packs" },
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
          { mark: "partial", text: "an image on a board, with pins that open notes and secret pins; a geographic map in bases; no layers" },
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
          { mark: "partial", text: "Android (APK) and iPad and iPhone (AltStore) apps, outside the stores, with the notes on the device; and in the browser, through a UniVerso" },
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
          { mark: "info", text: "MPL-2.0, open source; the code is on GitHub" },
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
          "Verso extends Obsidian’s dialect and never contradicts it: <code>[[…]]</code> links, embeds, callouts, tags, frontmatter properties, <code>.canvas</code> boards (JSON Canvas) and <code>.base</code> bases open as in Obsidian, and no extension of Verso changes the meaning of something that already exists. Verso’s configuration lives outside the folder, so the same vault opens in both.",
          "Verso is not an Obsidian clone and does not run its plugins.",
        ],
      },
      {
        q: "What about privacy?",
        aHtml: [
          "The app sends no telemetry. It reaches the network only for addresses in your notes or that you click, to check for a new version, for the UniVerso or the cloud (WebDAV, S3) you set up and, if you turn on the internet link, for Cloudflare, from which it downloads <code>cloudflared</code>.",
          "On a UniVerso, the notes live on the host’s disk — and whoever hosts can read them (see above).",
          "This site has no analytics and no cookies. The waitlist keeps your e-mail, the page’s language and the time, and serves only to tell you when a new version comes out.",
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
        q: "Can I download it now?",
        aHtml: ["Yes. The test version is on the <a href=\"/en/download/\">downloads page</a>, with installers for macOS (Apple chip), Windows, Linux x64, Android and iPad and iPhone (through AltStore Classic), and UniVerso’s packages. The code is open source, under the MPL-2.0, at <a href=\"https://github.com/SergioSJS/verso\">github.com/SergioSJS/verso</a>. It is a test version, not V1, and there is no date for V1. To get an e-mail when a new version comes out, leave yours on the list."],
      },
    ],
  },
  pages: {
    features: {
      meta: {
        title: "Features and roadmap — Verso",
        description:
          "What Verso does — writing in Markdown, linking notes, boards, bases, RPG tools, syncing with a server of your own — and what comes next, up to V1.",
      },
      eyebrow: "Features",
      title: "What Verso does, and what comes next.",
      ledeHtml:
        "First what the test releases already have; right below, <a href=\"#roadmap\">the roadmap</a> to V1, the release for everyone.",
      today: {
        title: "What it does today",
        introHtml:
          "All of this is in the test releases: on a Mac with an Apple chip, on Windows 11, on Linux (x64), on Android, on iPad and iPhone (through AltStore Classic; through AltStore PAL later, and in Brazil only for now), and in a browser through a UniVerso. What is ready but has not yet shipped in a test release is in the <a href=\"#roadmap\">roadmap</a>.",
        groups: [
          {
            title: "Writing",
            itemsHtml: [
              "Three modes: reading, editing and the raw Markdown.",
              "Blocks you drag by their handle and a <code>/</code> menu, as in Notion.",
              "Tables edited as tables.",
              "A panel for the note’s properties, and typed notes: the type gives a note its fields.",
              "The note’s card: the properties become a card beside the text, with a picture — the character, the place, the project.",
              "Callouts, maths, Mermaid diagrams and code blocks with a copy button.",
              "Web pages inside a note, scrolling with it.",
            ],
          },
          {
            title: "Linking notes",
            itemsHtml: [
              "<code>[[…]]</code> links to notes, headings and blocks, and embeds that show the note or the block.",
              "Rest the pointer on a link and read the note without leaving where you are.",
              "Backlinks, outgoing links and the links that lead to no note yet.",
              "Where a note is named without a link, one click makes the link — one by one, or all at once, seeing first what changes.",
              "Renaming a note updates every link to it.",
              "A graph of the notes to explore.",
            ],
          },
          {
            title: "Boards",
            itemsHtml: [
              "<code>.canvas</code> files, Obsidian’s format, drawn with Excalidraw.",
              "The folder’s notes as cards you edit in place; text cards, pictures, which you can crop, PDFs, web pages and data files.",
              "Arrows that keep the point they were drawn to, and the drawings of Obsidian’s Excalidraw plugin.",
              "Maps: a picture under the board, pins that open notes, and secret pins the players do not see.",
            ],
          },
          {
            title: "Bases",
            itemsHtml: [
              "<code>.base</code> files shown as a table, cards, a list, a kanban, a calendar or a map, with filters (regular expressions too), sorting, groups and formulas.",
              "A base embedded live in a note; the same file Obsidian opens.",
            ],
          },
          {
            title: "Organizing",
            itemsHtml: [
              "A file tree with multiple selection, stickers, colours and covers.",
              "Folder pages, manual order and focuses, shared with make.md.",
              "The daily note, with a calendar, and the notes of the week, the month, the quarter and the year; templates offered when a note is made.",
              "Version history: who changed a note and when, the difference between versions, and an older version brought back.",
            ],
          },
          {
            title: "Reading and keeping",
            itemsHtml: [
              "A PDF reader with two-page spreads, pictures, audio and HTML files.",
              "Web pages kept as notes.",
              "A <code>.md</code> file opens by itself, with no folder, as in a notepad; a JSON, YAML, TOML, XML or CSV file opens as a diagram.",
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
            title: "For playing RPGs",
            itemsHtml: [
              "The game master’s secrets: a <code>&gt; [!secret]</code> block inside a note, or in a board’s text card, that someone who can only read the shared folder never receives.",
              "<code>dice: 1d20</code> rolls with a click, and a table in the note draws a row; the result is never written into the note.",
              "Music and sound at the table: the game master plays sound files for everyone to hear, and shares the sound of pages open in Verso.",
              "Watabou maps: what you export from there — a dungeon, a region, a house — becomes a folder with the note and a board with the drawing.",
            ],
          },
          {
            title: "With a UniVerso",
            itemsHtml: [
              "The folder in step across your computers; the first sync deletes nothing.",
              "Folders shared with other accounts, to read or to write.",
              "Notes, boards and bases edited together, live, with each person’s cursor and name.",
              "A 30-day trash, and a console for the admin.",
              "The same window in a browser and on a phone; on a phone, the folders you choose are kept there and you write without a connection.",
              "The desktop app also serves folders, from the folder’s own page: on your home network, with the phone connecting by a QR code, or over the internet, by a Cloudflare link, with no domain and no open port; you approve each device on the computer.",
              "A UniVerso can also have its own link on the internet, through Cloudflare, with no domain and no open port.",
              "A game master the admin lets make folders invites players by link; and a table can move between the computer and the UniVerso, where it starts with its notes hidden and no players, who are invited again.",
              "Notices in the app when something changes without your asking — sync dropped or came back, a folder was shared with you — by kind, and in the system’s notifications if you want. <a href=\"/en/universo/\">More about UniVerso</a>.",
            ],
          },
          {
            title: "On Android, iPad and iPhone",
            itemsHtml: [
              "The Android app signs in to a UniVerso and syncs; it can sync in the background, if you turn that on, and open a folder of the phone’s shared storage, which stays there if Verso is uninstalled.",
              "On Android, a text or a <code>.md</code> file arrives through Share, and the phone can be a server or share its sound at the table.",
              "On the iPad and iPhone, your notes show in the Files app, and other apps open them in place.",
            ],
          },
          {
            title: "AI agents and the terminal",
            itemsHtml: [
              "A read-only MCP server, which Settings connects to Claude Desktop; every call an agent makes is logged.",
              "The <code>verso</code> command indexes, searches and lists backlinks in the terminal.",
              "In the desktop app, a terminal in a tab, off at first, for Claude Code and other AI command-line tools.",
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
      gallery: {
        title: "In pictures",
        introHtml:
          "A few screens of the app, with the interface in English and the English tutorial notes that come with Verso. They show what is ready, including the RPG tools and the Table, which are already in the test version.",
        figures: [
          { stem: "oracles", kind: "shot", width: 1280, height: 800, alt: "The Oracle and Improvisation dialog open over a note: the question “Did the guard patrol hear the noise of the break-in?”, 50/50 odds, and the answer with the d100 result.", captionHtml: "Oracles: yes or no with adjustable odds, idea sparks and your own tables." },
          { stem: "statblock", kind: "shot", width: 1280, height: 800, alt: "A d20 creature card, the Cave Gnawer, with armor class, hit points, ability scores with modifiers, traits and actions with dice you roll by clicking, followed by a character card.", captionHtml: "Statblocks: a <code>statblock</code> block becomes a card, in your system’s layout." },
          { stem: "dice3d", kind: "shot", width: 1280, height: 800, alt: "3D dice resting on the page after a roll of 4d6 dropping the lowest, with the result card beside the button.", captionHtml: "3D dice, if you turn them on: the result is already drawn, the dice only fall to it." },
          { stem: "dice-tables", kind: "shot", width: 1280, height: 800, alt: "A note with an encounter table by d6; the dice button drew a row, “A merchant with his cart stuck in the mud”, and offers to roll again.", captionHtml: "Dice and random tables inside the note." },
          { stem: "table", kind: "shot", width: 1280, height: 800, alt: "The Table beside a note on a UniVerso: the campaign’s chat and roll log with the game master and three players, dice and totals, a secret roll marked, and the field to write in.", captionHtml: "The Table: chat and rolls everyone in the campaign sees. The server rolls, with the roller’s name." },
          { stem: "access", kind: "shot", width: 1280, height: 1120, alt: "The Table window of a campaign folder: the open-table switch, the invitation by link, the list of players with how many notes each sees and edits, and Bruno’s four rights — Images on; Files, Creates notes and Creates boards off.", captionHtml: "Each player’s rights: Images, Files, Creates notes and Creates boards, all off for someone who just joined." },
          { stem: "board-map", kind: "shot", width: 1280, height: 800, alt: "A board opened on an illustrated map of a coast, with named pins and one secret pin, dashed and with a padlock, for the campaign’s arc.", captionHtml: "Maps on the board: pins that open notes, and secret pins the players do not see." },
          { stem: "secret", kind: "shot", width: 1280, height: 800, alt: "A note with a red secret callout, “What the players don’t know”, marked as hidden from readers.", captionHtml: "The game master’s secret, in the middle of the note." },
          { stem: "infobox", kind: "shot", width: 1280, height: 800, alt: "The note of a place, Gray Harbor, with a card beside the text: an illustration, the region, the danger and the inhabitants linked to other notes.", captionHtml: "The note’s card: the properties become a card." },
          { stem: "datagraph", kind: "shot", width: 1280, height: 800, alt: "A JSON file of characters and places drawn as boxes joined by lines, with buttons to fold, unfold and fit to the screen.", captionHtml: "Structured data (JSON, YAML, TOML, XML, CSV) as a diagram." },
          { stem: "theme-builder", kind: "shot", width: 1280, height: 800, alt: "The theme builder with a custom teal-and-rust theme: colour fields on the left and, on the right, a sample page already drawn in the new colours.", captionHtml: "Appearance: a theme builder with a live preview, and a catalogue of ready-made themes." },
          { stem: "swatches", kind: "shot", width: 1280, height: 800, alt: "A note with colour codes, such as #1d9e75 and rgb(29 158 117), each with a small square of its colour beside it.", captionHtml: "A small square of colour beside each colour code; a click opens the picker." },
          { stem: "wizard", kind: "shot", width: 1280, height: 800, alt: "The new project wizard at the step that checks what will be created: the folders and files of a world template, each with a checkbox and a name you can edit.", captionHtml: "A new project from a template: you see the tree and edit it before anything is written." },
          { stem: "read-link", kind: "shot", width: 1280, height: 800, alt: "The read-link window of a note after making a 7-day link: who made it, when it expires, the address shown once, and the Copy and Revoke buttons.", captionHtml: "Read link: with an expiry, with a passphrase if you want, and revocable." },
          { stem: "history", kind: "shot", width: 1280, height: 800, alt: "A note’s version history: the list of versions with who changed it, when and the size, and the difference of the chosen version, new lines marked.", captionHtml: "Version history: who changed it, when, the difference, and a way back to an old version." },
          { stem: "notifications", kind: "shot", width: 1280, height: 800, alt: "The app’s notifications centre, with two notices of folders shared with the person, each with a See the folders button.", captionHtml: "Notifications: what changed without you asking, in a list to see later." },
          { stem: "cloud-sync", kind: "shot", width: 1280, height: 1000, alt: "The dialog to sync a folder with a service you already have, with the choice between WebDAV and S3 and the address fields.", captionHtml: "Sync a folder with WebDAV (Nextcloud) or S3, with no server of your own." },
          { stem: "phone", kind: "shot", width: 390, height: 844, alt: "The Table on a phone screen: the log of chat and rolls, the field to write in and the navigation bar at the bottom.", captionHtml: "On a phone, the same window, in the browser." },
        ],
      },
      roadmap: {
        title: "Roadmap",
        introHtml:
          "The way to V1, the release for everyone: it is a plan, not a promise — what goes in and in what order may change, and there are no dates.",
        updated: { text: "Updated 14 November 2026", dateTime: "2026-11-14" },
        states: { ready: "Ready, in the test version", building: "Being built", planned: "Up to V1", later: "After V1" },
        count: { one: "{n} item", other: "{n} items" },
        stops: { here: "You are here", v1: "V1", v1Note: "the release for everyone" },
        groups: [
          {
            title: "RPG tools",
            state: "ready",
            items: [
              { lead: "Oracles.", textHtml: "Yes-or-no questions with adjustable odds, idea sparks from word lists you edit, and your own random tables; the answer can go into the note." },
              { lead: "Creature and character sheets.", textHtml: "A <code>statblock</code> block draws a card, with dice that roll on a click. There are over thirty layouts: open systems, Fractal, World of Darkness, Cyberpunk RED and generic ones. A creature can start from another." },
              { lead: "A new project from a template.", textHtml: "Campaign, world, fiction or P.A.R.A.: you see the tree of folders and notes, uncheck and rename what you like, and only then is it created. Templates you import stay in the folder." },
              { lead: "3D dice.", textHtml: "Optional: a roll drops real dice on the screen, with the size, the time and the sound you choose. The result is already drawn; the dice only show it." },
              { lead: "Structured data as a diagram.", textHtml: "A JSON, YAML, TOML, XML or CSV file appears as boxes joined by lines that you drag, fold and fit; also inside a board." },
              { lead: "Appearance.", textHtml: "An appearance wizard with a live preview, a theme builder, themes saved as files and a catalogue of ready-made themes; the theme is chosen per folder and per person." },
              { lead: "Colour swatches.", textHtml: "A colour code in a note gets a small square of its colour, and a click opens the picker." },
              { lead: "The tutorial in English.", textHtml: "With the app in English, the sample content and the project templates come in English." },
            ],
          },
          {
            title: "The Table and sharing",
            state: "ready",
            items: [
              { lead: "The Table.", textHtml: "A log of rolls and chat that everyone who opened the table’s folder sees, on a UniVerso or on the computer that serves it, with the pictures sent. The server does the rolling, and each roll carries the name of who rolled; a player can make a secret roll. Drag a roll and it becomes a card in your notes." },
              { lead: "A folder is a campaign.", textHtml: "The folder’s owner turns it into a table, invites players with a single-use link and releases each note to the whole table or to some players; each note says who sees it. A folder can have more than one table, each with its own chat." },
              { lead: "One access model.", textHtml: "Any note, board, file or folder has the Access window: who does not see it, who sees it and who edits it. A player who edits a board edits it live, with only what they may see, and can put pictures into it; four rights, all off at first, say the rest: images, files, creating notes and creating boards." },
              { lead: "Read links, no account.", textHtml: "From the UniVerso, a folder or a note at an address anyone opens in a browser to read, with an expiry and a passphrase if you want, and that you revoke. A reader does not receive the game master’s secrets." },
              { lead: "Sync with a cloud you already have.", textHtml: "In the desktop and Android apps, a folder can stay in step with a WebDAV server (Nextcloud and the like) or an S3 bucket (Amazon, MinIO, Cloudflare R2), with no server of your own. The app checks the service before it uses it." },
            ],
          },
          {
            state: "planned",
            items: [
              { lead: "More of the Table.", textHtml: "The game master’s dashboard, showing a note to the table, sessions, “new” notices, seeing as a player sees, a players’ area on boards and map pins." },
              { lead: "Dropbox, OneDrive and Google Drive.", textHtml: "Sync with those services, besides the WebDAV and S3 that already exist." },
              { lead: "Files Dropbox and Google Drive keep only in the cloud.", textHtml: "On a Mac, a file those services keep only in the cloud is never read as deleted, as with iCloud already." },
              { lead: "Boards in shared folders.", textHtml: "Someone who receives a shared folder opens its boards with every card in place, and edits them together, live." },
              { lead: "Confirming it is you on a linked device.", textHtml: "The system’s own check and a key for each device." },
              { lead: "A signed Windows app.", textHtml: "No SmartScreen warning when installing. The Mac app is not notarized by Apple: it opens through System Settings’ “Open Anyway”, once." },
              { lead: "Merging by block what two people edited offline.", textHtml: "Two people who edited the same note offline have their edits merged, not copied." },
              { lead: "Intel Macs and Linux ARM64.", textHtml: "Apps for those computers too." },
              { lead: "Made for screen readers.", textHtml: "The whole app usable with a screen reader." },
            ],
          },
          {
            state: "later",
            items: [
              { lead: "Files served straight from the bucket.", textHtml: "A UniVerso that keeps its files in a bucket (S3) hands each image or attachment over by a short-lived link of the bucket itself, without going through the server." },
              { lead: "Third-party plugins." },
              { lead: "Optional end-to-end encryption." },
              { lead: "The MCP server over the network." },
              { lead: "An agent that writes into notes, with the difference in view." },
            ],
          },
        ],
      },
    },
    server: {
      meta: {
        title: "UniVerso, Verso’s server",
        description:
          "UniVerso is Verso as a server, on a machine of yours: the folder in step across computers, in a browser and on a phone, shared and edited together. Tested with dozens of devices at once on a 1-core, 1 GB machine the size of the smallest VPS, with nothing lost.",
      },
      eyebrow: "UniVerso, Verso’s server",
      title: "The server is yours.",
      ledeHtml:
        "UniVerso is Verso as a server: one program, installed as a Docker image (amd64 and arm64), as a <code>.deb</code> or <code>.rpm</code> package with systemd, or from an archive. It holds the accounts and the folders — ordinary folders of Markdown on the server’s disk. Nobody signs themselves up: the admin invites, and so does a game master the admin lets make folders, for their own tables. Each folder has an owner, editors and readers — and a folder can become a role-playing campaign’s table.",
      stepsTitle: "In three steps",
      featuresTitle: "What it does",
      gallery: {
        title: "In pictures",
        figures: [
          { stem: "table", kind: "shot", width: 1280, height: 800, alt: "The Table beside a note on a UniVerso: the campaign’s chat and roll log with the game master and three players, dice and totals, a secret roll marked, and the field to write in.", captionHtml: "The Table: chat and rolls everyone in the campaign sees. The server rolls, with the roller’s name." },
          { stem: "access", kind: "shot", width: 1280, height: 1120, alt: "The Table window of a campaign folder: the open-table switch, the invitation by link, the list of players with how many notes each sees and edits, and Bruno’s four rights — Images on; Files, Creates notes and Creates boards off.", captionHtml: "Each player’s rights: Images, Files, Creates notes and Creates boards, all off for someone who just joined." },
          { stem: "access-note", kind: "shot", width: 1280, height: 800, alt: "The Access window of a note, one row for the whole table and one per player, each with a choice of Does not see, Sees or Edits, and where the choice comes from.", captionHtml: "Access on a note: does not see, sees or edits, for the table and for each player." },
          { stem: "coedit", kind: "shot", width: 1280, height: 800, alt: "A note being edited on a UniVerso while another person types in it: Bruno’s new line shows with his cursor, beside the Table panel.", captionHtml: "Editing together: what the other person types appears at once, with their cursor." },
          { stem: "read-link", kind: "shot", width: 1280, height: 800, alt: "The read-link window of a note after making a 7-day link: who made it, when it expires, the address shown once, and the Copy and Revoke buttons.", captionHtml: "Read link: with an expiry, with a passphrase if you want, and revocable." },
          { stem: "read-visitor", kind: "shot", width: 1280, height: 800, alt: "A note opened through a read link, in the browser of someone with no account: only the shared note, read-only, links to what was not shared marked “not shared”, and a name with a padlock.", captionHtml: "Whoever opens the link reads with no account: what was not shared, and the secrets, stay out." },
          { stem: "history", kind: "shot", width: 1280, height: 800, alt: "A note’s version history: the list of versions with who changed it, when and the size, and the difference of the chosen version, new lines marked.", captionHtml: "Version history: who changed it, when, the difference, and a way back to an old version." },
          { stem: "notifications", kind: "shot", width: 1280, height: 800, alt: "The app’s notifications centre, with two notices of folders shared with the person, each with a See the folders button.", captionHtml: "Notifications: what changed without you asking, in a list to see later." },
          { stem: "folders-desktop", kind: "shot", width: 1280, height: 800, alt: "The app’s folder switcher connected to a UniVerso: Gray Harbor and Notebook as owner, Rules read-only and Sketches for editing.", captionHtml: "The UniVerso’s folders and each person’s role: owner, edits, reads." },
          { stem: "phone", kind: "shot", width: 390, height: 844, alt: "The Table on a phone screen: the log of chat and rolls, the field to write in and the navigation bar at the bottom.", captionHtml: "On a phone, the same window, in the browser." },
        ],
      },
      safety: {
        title: "Nothing gets lost",
        paragraphsHtml: [
          "We measured on 30 October 2026: edits made at the same time by several apps and browsers, in the same note and the same board, arrived identical everywhere and on disk, with nothing lost or repeated. When two people change the same file on different sides, the result is a copy beside it — never a loss.",
          "While people type, the server writes the note to disk at least every 5 seconds. If the machine goes down, at most those seconds are lost.",
        ],
      },
    },
    compare: {
      meta: {
        title: "How it compares — Verso",
        description:
          "Verso beside thirteen note, worldbuilding and RPG tools, capability by capability: what each one does and does not do. No prices.",
      },
      eyebrow: "Notes, worlds and RPG",
      roadmapHtml:
        "What is missing here — layers on maps, timelines, plugins — is, where planned, on the <a href=\"/en/features/#roadmap\">roadmap to V1</a>. The table counts what Verso already has ready, including the RPG tools and the Table, which are already in the test version.",
    },
    download: {
      meta: {
        title: "Download — Verso",
        description:
          "Every file of Verso and UniVerso, with each one's name, version and size, and the one for your system at the top: macOS, Windows, Linux, Android, iPad and iPhone.",
      },
      eyebrow: "Files to download",
      title: "Download Verso",
      ledeHtml:
        "You need <strong>one</strong> file, the one for your system. The list comes from the releases published on <a href=\"https://github.com/SergioSJS/verso/releases\">Verso’s GitHub</a>, which also has each release’s notes.",
      recommend: {
        title: "For your system",
        id: "recommended",
        detected: "Your system looks like {os}.",
        button: "Download for {os}",
        linuxAlso: "Or, as a system package:",
        missing: "Version {version} has no file for {os}.",
        alsoOther: "{channel} {version}:",
        unknown: "We could not tell your system, or Verso has no app for it yet. Pick the file from the list below.",
        badge: "Recommended for your system",
      },
      os: { macos: "macOS", windows: "Windows", linux: "Linux", android: "Android", ios: "iPad or iPhone" },
      channels: {
        stable: { name: "Stable", id: "stable", intro: "The newest release that is not a test version." },
        test: {
          name: "Test version",
          id: "test",
          intro: "To try what has just been finished: it may have bugs. It installs as “Verso Beta”, beside any other Verso.",
        },
      },
      noStableHtml: "<strong>There is no stable release yet.</strong> For now Verso comes out in test versions only; the newest is right below.",
      noneHtml:
        "We could not read the list of releases. The files are on the <a href=\"https://github.com/SergioSJS/verso/releases\">GitHub releases page</a>.",
      published: "Published {date}",
      releasePage: "This release’s notes and files on GitHub",
      fields: { version: "Version", size: "Size" },
      groups: {
        app: "The app",
        cli: "The command line",
        cliIntroHtml:
          "Almost nobody needs it: the app already brings the <code>verso</code> command. These files are for a computer <strong>without</strong> the app, such as a machine where an AI agent searches your notes.",
        server: "UniVerso, the server",
        serverIntroHtml:
          "To host your notes yourself, on a Linux machine of yours; to use Verso on your own computer you do not need it. The easy way is the installer: it picks the right file, checks its signature, installs and starts UniVerso. On the server, as your ordinary user:",
        serverAfterHtml:
          "Step by step, with Docker too, in <a href=\"/en/wiki/installing-your-universo-step-by-step/\">Installing your UniVerso, step by step</a>; on a NAS or a VPS, in <a href=\"/en/wiki/installing-the-server-on-a-nas-or-a-vps/\">Installing the server on a NAS or a VPS</a>; for free on Oracle Cloud, in <a href=\"/en/wiki/universo-on-a-free-oracle-server/\">UniVerso on a free Oracle server</a>. By hand, the file depends on the processor: <code>uname -m</code> says <code>x86_64</code> (x64) or <code>aarch64</code> (ARM64).",
        verify: "Check the files (optional)",
        verifyIntroHtml:
          "You can ignore these files: the app’s updater and UniVerso’s installer already check everything themselves. The list holds the checksum of each file of the release, signed with minisign by Verso’s key, <code>RWS1zv2nvs/ng1hA0YspwOg7wGda98zkXjVfx8m9CtT5obRW5zabNHaT</code>. To check by hand, on Linux with minisign installed, in the folder where you downloaded the list, its <code>.sig</code> and the file:",
        sigs: "Each file’s own signature",
        other: "Other files of this release",
      },
      kinds: {
        mac: {
          platform: "macOS, Apple chip (M1, M2, M3, M4…)",
          noteHtml:
            "Open the <code>.zip</code> and drag the app into Applications. The first time: System Settings › Privacy &amp; Security › <strong>Open Anyway</strong> (the app is signed ad hoc). It does not run on a Mac with an Intel processor.",
        },
        windows: {
          platform: "Windows 10 or 11 (x64)",
          noteHtml:
            "If “Windows protected your PC” shows: <strong>More info</strong> › <strong>Run anyway</strong> (Verso has no code-signing certificate yet). It installs for your user, without an administrator. Windows on ARM: not available.",
        },
        appImage: {
          platform: "Linux x64, any distribution (AppImage)",
          noteHtml: "Allow it to run as a program (or <code>chmod +x {file}</code>) and double-click it.",
        },
        deb: {
          platform: "Linux x64: Ubuntu 22.04+, Debian 12+, Linux Mint, Pop!_OS",
          noteHtml: "In a terminal, in the folder you downloaded it to: <code>sudo apt install ./{file}</code>",
        },
        rpm: {
          platform: "Linux x64: Fedora 36+",
          noteHtml: "In a terminal, in the folder you downloaded it to: <code>sudo dnf install ./{file}</code>",
        },
        android: {
          platform: "Android 10 or newer",
          noteHtml:
            "Open the downloaded file on the phone; the first time, allow installing unknown apps from the browser. More in <a href=\"/en/wiki/verso-on-phone-and-tablet/#the-android-app\">The Android app</a>.",
        },
        ios: {
          platform: "iPad and iPhone, iOS 16 or newer",
          noteHtml:
            "Through AltStore Classic, which signs the app with your own Apple ID: see <a href=\"/en/wiki/verso-on-phone-and-tablet/#the-app-for-ipad-and-iphone\">The app for iPad and iPhone</a>.",
        },
        cliMac: { platform: "Mac, Apple chip", noteHtml: "The <code>verso</code> command, compressed." },
        cliWindows: { platform: "Windows (x64)", noteHtml: "The <code>verso</code> command, compressed." },
        cliLinux: { platform: "Linux (x64)", noteHtml: "The <code>verso</code> command, compressed." },
        serverDebX64: { platform: "Ubuntu, Debian · x64", noteHtml: "A <code>.deb</code> package, to install by hand." },
        serverDebArm: { platform: "Ubuntu, Debian · ARM64", noteHtml: "A <code>.deb</code> package, to install by hand." },
        serverRpmX64: { platform: "Fedora, RHEL, Oracle Linux · x64", noteHtml: "An <code>.rpm</code> package, to install by hand." },
        serverRpmArm: { platform: "Fedora, RHEL, Oracle Linux · ARM64", noteHtml: "An <code>.rpm</code> package, to install by hand." },
        serverTarX64: { platform: "Any other Linux · x64", noteHtml: "An archive, to run without a package." },
        serverTarArm: { platform: "Any other Linux · ARM64", noteHtml: "An archive, to run without a package." },
      },
      source: {
        github: "List read from GitHub on {date}.",
        fallback: "GitHub did not answer when this page was published: list saved on {date}; the GitHub page always has the newest.",
      },
      allReleasesHtml:
        "Every release, the earlier ones too, with each one’s notes: <a href=\"https://github.com/SergioSJS/verso/releases\">GitHub releases page</a>.",
    },
  },
  waitlist: {
    title: "New-version notice",
    intro: "One e-mail when a new version comes out.",
    label: "Your e-mail",
    placeholder: "you@example.com",
    button: "Tell me",
    sending: "Saving…",
    honeypot: "Leave this field empty",
    privacyHtml:
      'We keep the e-mail, this page’s language and the time; no other personal data (the network address only counts the tries, hashed, and is gone within an hour). To leave the list, write to <a href="mailto:sergiosjs@pm.me">sergiosjs@pm.me</a>.',
    ok: "Done. We will tell you when a new version comes out.",
    invalid: "That does not look like an e-mail. Check it and try again.",
    limited: "Too many tries from this network in a short time. Try again in an hour.",
    failed: "Could not save it right now. Try again in a few minutes.",
  },
  thanks: {
    metaTitle: "On the list — Verso",
    title: "Done, you are on the list.",
    bodyHtml:
      'We will tell you when a new version comes out. If the address was already on the list, nothing changed. No personal data besides the e-mail is kept; to leave the list, write to <a href="mailto:sergiosjs@pm.me">sergiosjs@pm.me</a>.',
    back: "Back to the start",
  },
  failed: {
    metaTitle: "Not saved — Verso",
    title: "Could not save the e-mail.",
    body: "The address did not look like an e-mail, there were too many tries from this network in the last hour, or the service failed. Try again:",
    back: "Back to the start",
  },
  og: { imageAlt: "Verso: your notes are files. The server is yours." },
  footer: {
    lineHtml: "Verso · versomd.com · MPL-2.0 · <a href=\"https://github.com/SergioSJS/versomd-site\">this site’s source</a>",
    fontsHtml:
      "Fraunces, Literata and Instrument Sans, under the SIL Open Font License — the same fonts and colours as the app’s window.",
    noTracking: "No analytics, no cookies.",
  },
  figLabel: "Fig.",
  routes: { home: "/en/", features: "/en/features/", server: "/en/universo/", compare: "/en/compare/", wiki: "/en/wiki/", download: "/en/download/", thanks: "/en/thanks/", failed: "/en/waitlist/failed/" },
  ids: {
    scenarios: "how-to-use",
    content: "content",
    notYet: "not-yet",
    compare: "compare",
    faq: "questions",
    waitlist: "waitlist",
    files: "files",
    today: "today",
    gallery: "in-pictures",
    roadmap: "roadmap",
    steps: "steps",
    serverFeatures: "what-it-does",
  },
};
