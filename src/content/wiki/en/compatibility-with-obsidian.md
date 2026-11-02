---
title: "Compatibility with Obsidian"
description: "For anyone coming from Obsidian or using both: the same folder, nothing rewritten on open, what works the same, what Verso adds, what does not exist and how to try it."
order: 37
group: start
slug: "compatibility-with-obsidian"
twin: "compatibilidade-com-o-obsidian"
source: "demo-vault-en/37 - Compatibility with Obsidian.md"
updated: "2026-10-31"
---
If you already keep notes in **Obsidian**, you do not need to move anything to try Verso. Verso opens **the same folder**, reads the same files, and its file format *extends* Obsidian's: it never gives an existing construct a different meaning. This note says what that means in practice: what works the same, what Verso adds, what is different or not there, and how to use both on one folder without surprises.

> **Note: Where this comes from**
>
> Everything below is from the project's own decisions and tests (the dialect spec, `docs/spec/dialect.md`, and ADRs 0011, 0012, 0030 and 0070). Obsidian's behaviour is known to Verso only from its public documentation and from watching it from the outside. Where the project has not decided something yet, this note says so instead of guessing.

---

## 1. One folder, two apps

**Open your vault as a folder.** In Verso, `⌘ O` (Windows and Linux: `Ctrl + O`) opens a folder — see [Files and Folders](/en/wiki/files-and-folders/). Verso has no "vault" of its own: any folder is the unit, and an Obsidian vault is just a folder.

**Opening a file never rewrites it.** Not the frontmatter, not the line endings, not the spacing. A note is written back only when *you* change it, and then atomically, after checking that the file on disk is still the one Verso read. If Obsidian (or Git, or a sync service) changed it meanwhile, Verso shows both versions and the difference instead of overwriting: [what happens](/en/wiki/writing-in-the-editor/#when-the-note-changes-outside-verso).

**The `.obsidian` folder is left alone.** Verso does not delete it, does not write to it and does not walk into it. Only three of its files are *read*, never written, and only to offer you something:

- the Daily notes settings (`daily-notes.json`) and the Periodic Notes plugin's settings — **Settings › Periodic notes** then offers **Use Obsidian's settings** ([Daily Notes, Calendar and Templates](/en/wiki/daily-notes-calendar-and-templates/));
- the one key `attachmentFolderPath` of `app.json`, so a folder served to a phone can show the vault's attachments folder, read-only ([Verso on a Server](/en/wiki/verso-on-a-server/)).

Nothing else of Obsidian's settings is read: themes, hotkeys and plugin choices stay in Obsidian.

**Verso's own settings** (bookmarks, ignored paths, periodic-note formats…) go in `.verso/settings.json` *inside* the folder, and the file is only created when you first change one of them. Obsidian does not show `.verso` in its file list, so the two do not get in each other's way. The search index and the window's layout are not in the folder at all: they live on your computer, and the index is a cache that can be deleted without losing anything.

---

## 2. What works the same

| In your notes | In Verso |
|---|---|
| `[[note]]`, `[[note\|alias]]`, `[[note#section]]`, `[[note#^block]]` | Links, backlinks and the graph — [Links, Anchors and Embedded Notes](/en/wiki/links-anchors-and-embedded-notes/), [Graph View and Connections](/en/wiki/graph-view-and-connections/) |
| `![[...]]` embeds | The same, for notes, images and files — [Links, Anchors and Embedded Notes](/en/wiki/links-anchors-and-embedded-notes/), [Documents and Media](/en/wiki/documents-and-media/) |
| `> [!kind] Title` callouts | Drawn as callouts, folding and nesting included — [Markdown Guide and Syntax](/en/wiki/markdown-guide-and-syntax/) |
| `^id` on a block | The same reference; if an id appears twice, the last one wins, as in Obsidian |
| YAML frontmatter, `tags`, `aliases` | Read as properties — [Properties and Metadata](/en/wiki/properties-and-metadata/); the text of the block stays byte for byte as you wrote it |
| `#tags`, `==highlight==`, `%%comments%%`, footnotes, KaTeX math | See [Markdown Guide and Syntax](/en/wiki/markdown-guide-and-syntax/) |
| `.canvas` files (JSON Canvas) | Open as **boards** — [Board and Relations](/en/wiki/board-and-relations/). Verso's extra drawing is kept under a `verso` key that Obsidian leaves intact |
| `.base` files | Open as **bases**, the same format — [Bases and Data Views](/en/wiki/bases-and-data-views/) |
| Moment.js formats for daily and weekly notes | The same formats — [Daily Notes, Calendar and Templates](/en/wiki/daily-notes-calendar-and-templates/) |
| The `.trash` folder | Deleted files go there too — [Files and Folders](/en/wiki/files-and-folders/) |

Four plugins' *files* also work, because Verso reads what the plugin writes:

- **Dice Roller**: `` `dice: 1d20+3` `` is a die that rolls on a click — [Dice and Random Tables](/en/wiki/dice-and-random-tables/).
- **Fantasy Statblocks**: a `statblock` code block with the plugin's key names draws a card — [Statblocks](/en/wiki/statblocks/).
- **make.md**: `sticker:`, `color:`, `banner:` and the folder note's `order:` and `pinned:` — [Organizing: stickers, covers and pages](/en/wiki/organizing-with-stickers-covers-and-pages/).
- **Excalidraw**: a `.excalidraw.md` drawing opens showing the drawing, with a **Convert to board** button that shows the result first and creates a new `.canvas` beside it. The original stays as it was — [Board and Relations](/en/wiki/board-and-relations/).

*Works* here means the file is read and drawn; the plugin itself does not run (see section 4).

---

## 3. What Verso adds

Verso's extensions are ordinary Markdown that **degrades**: a person with only Obsidian sees a callout, a code block or plain properties, and nothing in the file is meaningless to them.

- **Typed notes** — `type:` in the frontmatter, matched to a `verso-schema` block, turns the properties panel into a form. In Obsidian the note shows its properties the Obsidian way. A vault that already uses `type:` for something else stays valid: with no matching schema, the note is plain Markdown — [Typed Notes](/en/wiki/typed-notes/).
- **The secret callout** — `> [!secret]` is an ordinary callout in the file, in Obsidian and in a folder on your computer. Only a UniVerso (Verso on a server) uses it: it serves people who may only *read* the note without that block — [Dice and Random Tables](/en/wiki/dice-and-random-tables/), [Verso on a Server](/en/wiki/verso-on-a-server/).
- **The oracle callout and the roll block** — `> [!oracle]` is a callout elsewhere; a `roll` block is a code block elsewhere — [Oracles and World Building](/en/wiki/oracles-and-world-building/), [The Table](/en/wiki/the-table/).
- **Blocks, covers, stickers, infobox cards, typed relations** — frontmatter and Markdown again — [Blocks Like in Notion](/en/wiki/blocks-like-in-notion/), [Organizing: stickers, covers and pages](/en/wiki/organizing-with-stickers-covers-and-pages/), [Typed Notes](/en/wiki/typed-notes/).

Turning an RPG feature off in Verso changes no file; the statblock becomes a code block and the oracle an ordinary callout, as Obsidian shows them without the plugin ([Oracles and World Building](/en/wiki/oracles-and-world-building/)).

---

## 4. What is different, or not there

- **Plugins do not run.** An Obsidian community plugin does not run in Verso, and running third-party plugins is **out of scope until after version 1**. The plugin's *files* (section 2) can still open.
- **Dataview.** A `dataview` block is not executed, and an inline field `key:: value` is not interpreted. The project's answer is built in: bases ([Bases and Data Views](/en/wiki/bases-and-data-views/)) and typed notes, from properties in the frontmatter. Moving inline fields to the frontmatter would be a conversion, done only by you, with the difference shown first.
- **Embedded HTML.** Raw HTML in a note is drawn through an allowlist: `<iframe>`, `<video>` and `<audio>` are dropped from the reading view. This is still an open question in the spec, so do not rely on it either way. And a `[[link]]` inside a `%%comment%%` or inside HTML is counted as a link by Verso's index.
- **Excalidraw drawings.** The plugin's drawing opens showing the drawing; turning it into a Verso board is a step you take on purpose, with the result shown first, and the original is kept.
- **The accepted forms of `tags` and `aliases`** in the frontmatter (list, text separated by spaces, both) are not settled in the spec. The documented example is the list form.
- **Settings.** Themes, CSS snippets and hotkeys of Obsidian are not read (section 1). Verso has its own — [Settings, Appearance and Shortcuts](/en/wiki/settings-appearance-and-shortcuts/).

---

## 5. Using both on the same folder

- Leave `.obsidian` as it is. Verso will not touch it, and a settings change you make in Obsidian does not affect Verso.
- Edit in either one. Verso does not "normalize" what Obsidian wrote, so a Git diff shows only what you changed.
- If a note is open in both at once, Verso never writes over a change it did not see: before saving it checks the file on disk and, if it changed, shows you both versions (section 1).
- If the folder is synced by a service (iCloud, OneDrive and so on), a file that is only a placeholder in the cloud is never taken for a deletion: Verso waits for it to be downloaded.
- Verso is not Obsidian: nothing in the project asks you to stop using Obsidian. You can try Verso for a week on a **copy** of the folder first, if that makes you more comfortable.

---

## 6. Try it

1. Make a copy of an Obsidian vault (or use one you do not mind losing), and open it in Verso with `⌘ O`.
2. Open a note full of `[[links]]`. Look at **Backlinks** and the **graph**.
3. Switch the note to **Source** mode: the text is exactly what Obsidian wrote. Close it without typing, and look at the file's date in Finder or Explorer: it has not changed.
4. Edit a line in Verso. Open the same note in Obsidian: the change is there and the rest of the note is as it was.
5. Open a `.canvas` file: it becomes a board. Move a card and look at the file with Git (`git diff`): only that card's line changed.
6. If the vault has an Excalidraw drawing, open it and press **Convert to board**: the preview shows the board before anything is created.
7. In a note, type `> [!secret]` and a line under it. Open the note in Obsidian: it is a callout, like any other.
8. In **Settings › Periodic notes**, look for **Use Obsidian's settings** if you use Daily notes in Obsidian.

When you are done, the vault is still an Obsidian vault.

Next: [Installing the server on a NAS or a VPS](/en/wiki/installing-the-server-on-a-nas-or-a-vps/) puts your notes on a server of your own. Back to the [Home Page](/en/wiki/welcome-to-verso/) or the Verso Tour.
