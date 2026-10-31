---
title: "Board and Relations"
description: "Boards (`.canvas`) drawn with Excalidraw, with the folder's notes as cards, and typed relations in the frontmatter."
order: 9
group: boards
slug: "board-and-relations"
twin: "board-e-relacoes"
source: "demo-vault-en/09 - Board and Relations.md"
updated: "2026-09-30"
---
A **board** is a `.canvas` file — the same format as Obsidian's canvas — drawn with Excalidraw. Open the Demo Board to see it: the folder's notes show up as cards, with their content; a group gathers the projects; arrows connect one card to another; and you can draw freehand on top of everything.

*Demo Board*

---

## What you can do on a board

- **Put things on it** with the **Insert** button, in the board's toolbar (where the picture is): *Picture or PDF from the computer…* (copied into the attachments folder — you can also drop or paste a picture onto the board), *Note or file of the folder…* (any note, picture or PDF — or drag a file from the tree onto the board), *Text card* (Markdown) and *Web link…* (an address, which only opens with a click). In the same menu, *Loose arrows* makes new arrows not attach to cards — holding `⌘` while drawing does the same.
- **Pictures** show up as just the picture, with no frame or title; when selected, the **Open**, **Swap file…** and **Crop** buttons appear at the top right. **Crop** chooses the part of the picture the card shows, by dragging the corners — the picture's file does not change, and **Restore original** undoes it.
- **Connect cards**: with Excalidraw's arrow tool, draw from one card's edge to another's. The arrow becomes a canvas edge, which Obsidian shows too.
- **Draw freely**: shapes, freehand strokes, loose text and loose arrows are kept in the same file, under the `verso` key. Obsidian leaves that part intact when it edits the canvas.
- **Read and edit inside a card**: a double click on a note card goes into it — you can read and scroll the note there — and one more click on the text edits it, without leaving the board; `Esc` leaves. The ↗ in the card's corner (or `⌘` + double click) opens the note in a tab, and the ⇄ swaps the card's file. On a text card, a double click edits the text.
- **Maps**: select a picture and use **Use as map** (in the corner tools): it locks, goes to the back and gets marked, so it never moves by accident — **Stop using as map** is in the *Outline*, under *Maps*. Drag a note from the tree onto the map, or use **Pin a note here…**: a **pin** appears, a mark with the note's sticker and name that keeps its size at any zoom; a click opens the note, and resting the pointer over it shows the note in a card. **Send to back** and **Bring to front** work for any card. A large PNG is cut into tiles and opens fast, even on a phone. On a map, as on any board, a card can be **Hidden from readers** on a UniVerso — see the padlock and **View as a reader**; it is not encryption: anyone with the file, and Obsidian, sees the card. The map is still a `.canvas` that Obsidian opens, with the picture and the pins as cards.
- **See it as a list**: the *Outline* button shows groups, cards and connections in a list you can walk through with the keyboard.
- **See the JSON**: the *Text* mode, in the tab's corner, shows the file as it is.
- **Learn to draw**: the Board Training teaches Excalidraw lesson by lesson, and [Drawing on the Board](/en/wiki/drawing-on-the-board/) gathers the tools and shortcuts.
- **Create a board**: **New board** in the palette, in the new menu of the `+` button in the ribbon, or in a tree folder's menu. It is born as `Untitled.canvas`, in the folder set in **Settings › Board › Folder for new boards** (empty: the root).
- **Export**: **Export image** (`⌘⇧E`, or the board's ☰ menu) — **Format** PNG or SVG, **Scale** from 1× to 3×, **Background**, **Dark** and **Selection only**; then **Save in the folder**, **Save to Downloads** or **Copy**.
- **Lost card**: if a card's file disappears or is renamed outside Verso, the card shows *Not found in the folder*; a double click on it, or **Swap file…**, points the card at the right file.
- **Settings › Board**: open a `.canvas` as a board or as text, open showing everything or where you left off, the stroke of new shapes (hand-drawn or clean), the font of the drawn text, the grid and the folder for new boards.

> **Note**
>
> Opening a board never rewrites the file. When saving, Verso changes only what you changed and keeps the layout Obsidian writes in — a `git diff` shows only the line of the card you dragged.

---

## Typed relations

An arrow between two notes can become a **relation**: select the arrow and use *Promote to relation*. Verso asks for the type — for example `depende_de` — and shows the change in the source note's frontmatter before writing it:

```yaml
depende_de: "[[projects/Project Alpha]]"
```

This very note has one: the `related` property at the top points to Project Alpha. A property whose value is a wikilink **in quotes** (or a list of them) is a link — it appears in the target note's backlinks and follows renames. Without quotes, `[[x]]` is just YAML.

---

## Drawings from the Excalidraw plugin

A note drawn with Obsidian's Excalidraw plugin shows, below the title, the **Convert to board** button. It shows the new `.canvas` and creates it beside the drawing when you confirm; the original drawing stays as it was. Try it with this vault's drawing.

Back to [Home](/en/wiki/welcome-to-verso/).
