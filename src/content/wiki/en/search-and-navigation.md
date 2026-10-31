---
title: "Search and Navigation"
description: "Searching, opening by name, replacing text across all notes, backlinks and bookmarks."
order: 12
group: start
slug: "search-and-navigation"
twin: "busca-e-navegacao"
source: "demo-vault-en/12 - Search and Navigation.md"
updated: "2026-10-01"
---
Find a note, a passage or a command, replace text in all notes at once, and go back to where you came from.

---

## The Three Shortcuts Worth Gold

| Shortcut | Opens | For |
| :--- | :--- | :--- |
| `⌘ K` | **Search the notes** | finding notes by name and by what is written in them |
| `⌘ P` | **Open…** | going to a note or file by name |
| `⌘ ⇧ P` | **Commands** | anything Verso does, by name |

---

## Search the Notes (`⌘K`)

The search first finds the notes whose **file name** has the words, and then the ones that have **all** the words in the text, as whole words — ignoring case and accents. `Enter` opens the first result; the **×** at the end of the field clears the search (on the phone, where there is no `Esc`). Three filters refine the search:

- `tag:project` — the notes with the `#project` tag (and the tags inside it, like `#project/alpha`);
- `path:projects` — the notes whose path contains `projects`;
- `file:Alpha` — the notes whose name contains `Alpha`.

Try it: `tag:project interface`, or `path:Daily tasks`.

---

## Find and Replace in All Notes (`⌘⇧H`)

With the focus outside the editor (in the file list, for example), `⌘⇧H` opens **Find and replace in the vault…** — also in the ribbon and in the palette.

1. Fill in **Find** and **Replace with**; check **Match case** or **Regular expression** if you need to.
2. The ✓ button (**Preview changes**) shows, note by note, what is going to change. Nothing has been written yet.
3. **Apply** writes; **Leave them** gives up.

Inside a note being edited, `⌘⇧H` is the formatting bar's **Highlight**; to replace text only in that note, use `⌘F` (see [Writing in the Editor](/en/wiki/writing-in-the-editor/)).

---

## Back and Forward

Each pane remembers where it has been: **‹** and **›** in the tab bar, `⌘[` and `⌘]`, or the mouse's back and forward buttons.

---

## The Side Panel

`⌘⌥→`, or the button at the right end of the status bar, opens the panel with six tabs:

- **Outline** — the open note's headings;
- **Links** — who points to it (the **Backlinks**, and the **Unlinked mentions**) and, below, where it points to (the **Outgoing links**);
- **Tags** — the vault's tags;
- **Bookmarks** — the notes marked with the star;
- **Focuses** — the named roots of the file tree;
- **Calendar** — the daily notes (see [Daily Notes, Calendar and Templates](/en/wiki/daily-notes-calendar-and-templates/)).

The **star** beside a note's title puts it in the bookmarks. Above the title, the note's path shows the folders it is in: a click opens the folder.

---

Continue to [Tabs, Panes, Workspaces and Windows](/en/wiki/tabs-panes-workspaces-and-windows/) or go back to the [Home Page](/en/wiki/welcome-to-verso/).
