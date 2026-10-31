---
title: "Links, Anchors and Embedded Notes"
description: "Simple wikilinks, links with aliases, jumps to headings (`#Heading`), links to missing notes and note embedding."
order: 2
group: start
slug: "links-anchors-and-embedded-notes"
twin: "links-ancoras-e-notas-incorporadas"
source: "demo-vault-en/02 - Links, Anchors and Embedded Notes.md"
updated: "2026-09-25"
---
In Verso, the connections between notes are first-class citizens. This guide shows how to create wikilinks, jump straight to internal sections with anchors, and embed notes and blocks.

---

## 1. Types of Wikilinks

### Direct Link
In **Reading** mode, a click follows the link. In **Edit** mode, a click puts the cursor in the link, so you can edit it — `⌘` + click follows it, and `⌥ Enter` (`Alt + Enter`) opens the link under the cursor — a `[[link]]`, an `![[embed]]`, a `[text](address)` link or a bare address — without the mouse. It is in the palette as **Open link under cursor**.

Link to an existing note by name. When you type `[[`, Verso suggests the notes and files in the folder, the closest match first; `[[Note#` suggests that note's headings, and `[[#` this note's. The format of the inserted link follows **Settings › Files and links › New link format** (as short as possible, relative to the note, or from the folder root).
- [Welcome to Verso](/en/wiki/welcome-to-verso/)
- [Markdown Guide and Syntax](/en/wiki/markdown-guide-and-syntax/)

Another way: drag a note from the file tree into the text — a link to it goes in where you drop it (an image or a PDF goes in as an embed).

### Hover Preview
Hold the pointer over a link for half a second, in **Reading** mode: a card appears with the note it names, already scrolled to the link's heading or block — without leaving this note. Move the pointer into the card to scroll its text; a click on it opens the note. In **Edit** mode, hold `⌘` (`Ctrl` on Windows and Linux) while hovering over the link. Try it on these two:
- [the formulas in the Syntax Guide](/en/wiki/markdown-guide-and-syntax/#math-formulas-in-katex)
- the atomic writing finding

The preview also appears over the rows of the **Links** panel, over graph nodes and over a card's name on the board. On a phone or tablet, where there is no pointer: a tap on a link in Edit mode shows the preview above **Open** and **Edit link**; in the graph and on the board, hold your finger still on the note. By keyboard, the **Preview the link under the cursor** command (⌘⇧P) opens the card with focus on it, and `Esc` closes it and returns the focus — it has no key of its own: pick one in **Settings › Hotkeys**. To not see the card on hover: **Settings › Editor › Preview on hover**.

### Link with an Alias
Change the visible text while keeping the original destination with the vertical bar `|`:
- [Go to the Home Page](/en/wiki/welcome-to-verso/)
- [Open the Syntax Guide](/en/wiki/markdown-guide-and-syntax/)

### Link to a Nonexistent Note (Automatic Creation)
Click the link below to try the Obsidian-style automatic creation behavior (the note will be created and opened instantly in the editor):
- New Project Idea

---

## 2. Heading Jumps (Anchors)

### Jump Within the Same Document
Click to scroll smoothly to the test section at the end of this file:
- [Jump straight to the Local Target Section](#local-target-section)

### Jump to a Heading in Another Note
You can also point to headings in other notes using the `[[Note#Heading]]` syntax:
- [See Math Formulas in the Syntax Guide](/en/wiki/markdown-guide-and-syntax/#math-formulas-in-katex)
- [See Code Blocks](/en/wiki/markdown-guide-and-syntax/#code-blocks-with-a-copy-button)

---

## 3. Embedded Notes (Transclusion / Embeds)

You can include the content of another note inside this one using the `!` prefix. Hover over the embedded note: the **Edit beside** button opens the original note in a split beside it, ready to edit.

*Research and Findings*

### Embedding just one block

A `^id` at the end of a paragraph, a list item or a heading names that block; `![[note#^id]]` shows only it, and `[[note#^id]]` takes you to it. A `^id` alone on a line, after a blank line, names the block before it — a table, a code block, a quote. This embed shows only the third item of the findings:

*Research and Findings*

If the same `^id` appears twice in a note, the last one wins, as in Obsidian, and the note warns you. The `^id` mark doesn't show in Reading; in Edit it is dimmed, so you can see where it is.

---

## 4. Who Points to This Note

Every link creates the way back. Open the right panel (`⌘⌥→`, or the button at the right corner of the status bar) and look at the tabs:

- **Links**: at the top, the **Backlinks** — the notes that point to the open note — and, under **Unlinked mentions**, the ones that mention its name without being a link; below, after a line, the **Outgoing links**: where this note points.
- **Outline**: the note's headings, to jump between them.

### Unlinked mentions

In **Unlinked mentions**, each row is a place where another note writes this one's name without being a link — the full name, upper or lower case doesn't matter, accents count ("Harbor" finds "harbor", not "Harbór"), and each of the note's `aliases` counts as a name. Code, comments, tags and what is already a link are left out. The row shows the text around it, and:

- **Link** swaps that text for a link right there: `[[Name]]`, or `[[Name|text]]` when the written text is different (another case, an alias). In a note open in a tab, ⌘Z undoes it.
- **Link all** first shows, as a diff, each note and each line that will change; nothing is written until you confirm, and a note that changed in the meantime is left out, with its name said.

Someone who only reads a folder on a server sees the list, without the buttons.

> **Example: Try it**
>
> This sentence writes the name Lia Torres without a link. Open her note (⌘P and her name), go to **Links** in the right panel and, under **Unlinked mentions**, click **Link** on this note's row: the sentence now has the link.

### Suggestions as I write

In **Settings › Editor**, **Suggest links as I type** (off by default) makes Verso offer the link while you write. Type the start of a name — by default three letters or more, in a word that starts with a capital letter or a number, like `Gra`, `Gray H` or `2026` (for the dated notes) — and a list shows up to five notes (and aliases) of the folder that start that way; the **arrows** choose, **Tab** or **Enter** accept and write the link over what you typed, **Esc** dismisses the list for that word. If you type the whole name, next to the cursor appears `Link to [[Name]]`, which stays even after a space or a comma, until the next word starts; **Tab** or **Enter** write the link (`[[Name]]`, or `[[Name|text]]` when what you typed is another case or an alias). Two options just below adjust this: **Letters before suggesting** (from 1 to 10; with 2, `Gr` already lists) and **Only words that start with a capital or a number** (off, `gray ha` also lists Gray Harbor — with more noise). The text never changes by itself. On the phone the notice is a button to tap. It never appears inside code, a link or the properties header, never offers the note itself, and the **Ignored folders** and **Ignored names** lists take out of the way whatever is noise, like names that are common words.

Another path, on by default (**Mention a note with @**, in the same place): type `@` at the start of a word and the same list of notes as `[[` opens; keep typing to filter and pick a note — the `@` and what came after become `[[Name]]` (or `[[Name|text]]`). **Esc** leaves the text as you typed it. It doesn't open in `someone@email`, nor in code, links, formulas or tags.

Renaming a note breaks nothing: Verso shows the notes that point to it and updates the links when you confirm (see [Files and Folders](/en/wiki/files-and-folders/)).

---

## Spacing for the Scroll Test

Below are a few filler lines to make sure the anchor jump visibly scrolls the screen.

...
...
...
...
...
...

---

## Local Target Section

> **Note**
>
> **You have reached the Local Target Section!**
> If you clicked the link `[[#Local Target Section]]`, the screen scrolled here automatically.

Back to [Home](/en/wiki/welcome-to-verso/) or on to [Properties and Metadata](/en/wiki/properties-and-metadata/).
