---
title: "Writing in the Editor"
description: "The Reading, Edit and Source modes, the formatting bar, the `/` menu and saving."
order: 11
group: start
slug: "writing-in-the-editor"
twin: "escrevendo-no-editor"
source: "demo-vault-en/11 - Writing in the Editor.md"
updated: "2026-10-01"
---
Everything that happens while you write: a note's three modes, the formatting bar, the `/` menu, saving, and changes made outside Verso.

---

## The Three Modes

In the corner of each note, three buttons:

- **Reading**: the note as it looks when finished. A double click on the text switches to Edit.
- **Edit**: Markdown turns into formatting as you write — headings, bold, links and tasks show up formatted, and the markup comes back where the cursor is. Here, a click on a link puts the cursor in it; `⌘` + click follows the link.
- **Source**: the plain text, markup in plain sight, with the properties' YAML.

`⌘E` switches between Reading and Edit; **Source** is in the palette (`⌘⇧P`). The mode notes open in is set under **Settings › Editor › Open notes in**.

In **Edit**, each paragraph, list item or heading is a block you can drag by the ⋮⋮ handle in the margin, as in Notion — see [Blocks Like in Notion](/en/wiki/blocks-like-in-notion/).

---

## The Formatting Bar

In Edit and Source modes, above the note:

| Button | Does | Shortcut |
| :--- | :--- | :--- |
| **Heading** | switches between heading 1, 2, 3 and text | `⌘⇧1` |
| **Bold** / **Italic** | `**` and `*` | `⌘B` / `⌘I` |
| **Strikethrough** / **Highlight** | `~~` and `==` | — / `⌘⇧H` |
| **Link** | `[text](address)` | `⌘⇧K` |
| **Internal link [](#)** | opens the note suggestions | |
| **Bullet list**, **Numbered list**, **Task**, **Quote** | the start of the line | |
| **Code**, **Rule** | `` ` `` and `---` | |
| **Table** | inserts a table, or aligns the one at the cursor | `⌘⌥T` |

---

## The `/` Menu

At the start of a line, type `/` and choose a block. Typing filters the list; `Enter` inserts; `Esc` closes.

- **Basic**: Heading 1, 2 and 3, Quote, Code block, Divider.
- **Lists**: Task, Bullet list, Numbered list.
- **Callouts**: Callout: note, Callout: tip, Callout: warning.
- **Insert**: Table, Internal link, Embed note, Image, Link, **Today's date**, **Time now** and **Insert template…**.

**A divider from the keyboard**: type `---` and press Enter. Verso writes the blank lines Markdown wants around the divider — one before, when the text above would turn it into a heading underline, and one after — and leaves the caret below, ready to write; a single `⌘Z` undoes it. Away from the caret, the blank line between two blocks shows only as a thin gap, and Reading adds no space for it at all.

Try it on this empty line, in Edit mode:

---

## Saving

Verso saves by itself a moment after you stop writing — the delay is set under **Settings › General › Autosave (seconds after typing stops)**. `⌘S` saves right away. While something is waiting to be saved, a **•** and the **Save** button appear beside the title.

---

## When the Note Changes Outside Verso

If another program (Obsidian, Git, an editor) changes an open note:

- with nothing of yours waiting to be saved, Verso reads the note again and tells you in the status bar;
- with text of yours waiting to be saved, it does not write over it: it shows both versions, the difference between them, and the buttons **Discard mine and reload**, **Write mine over it** and **Keep both** — the last one leaves the disk's version under its name and puts your text in a copy beside it, like `Note (conflict, Mac, 2026-10-10 15.34).md`.

---

## Find in the Note

`⌘F` opens the search in the note, with the **N of M** counter and the options `Aa` (match case), `\b` (whole word) and `.*` (regular expression). In Edit and Source modes, the replace toggle shows replace and replace all.

---

## More Editor Settings

- **Settings › Editor › Spell check** turns the underlining of mistakes on and off.
- **Settings › Editor › Line numbers**, one per mode: Reading, Edit and Source.
- `Tab` and `⇧Tab` change a list's level.
- In the palette, **Collapse all sections** and **Expand all sections**.

---

Continue to [Search and Navigation](/en/wiki/search-and-navigation/) or go back to the [Home Page](/en/wiki/welcome-to-verso/).
