---
title: "Structured Data as a Diagram"
description: "A JSON, YAML, TOML, XML or CSV file, or a code block in one of those formats, seen as boxes and lines to move, collapse and search; read-only."
order: 28
group: organize
slug: "structured-data-as-a-diagram"
twin: "dados-estruturados-como-diagrama"
source: "demo-vault-en/28 - Structured Data as a Diagram.md"
updated: "2026-10-21"
---
A **JSON**, **YAML**, **TOML**, **XML** or **CSV** file opens as text, in the code editor. When it gets large or deep, reading the text is tiring: where does a branch end? how many items does this list have? The **Diagram** draws the same file as **boxes joined by lines** — one box for each object or list, one line for each simple value — and lets you move, fold and search.

**The diagram only shows.** It never writes to the file: to change a piece of data, edit the text. The idea of the boxes-and-lines view comes from [JSON Crack](https://github.com/AykutSarac/jsoncrack.com) (Apache-2.0), credited in Settings › Application › Credits and acknowledgements.

---

## Try it

Open campaign-npcs.json (or campaign-npcs.yaml, the same in YAML). At the top of the tab there is **Text | Diagram**: click **Diagram**.

1. **Move** a box by dragging its title: it takes along everything hanging from it. With **Alt** held down, only the box moves.
2. **Fold** a branch with the little arrow on the box (or with **Enter**): it then says how much it hides, like *3 items* or *6 keys*. **Fold all**, **Unfold all** and **Unfold to level…** are in the bar (on a phone, in the **…** menu at the bar's end).
3. **Search** in the field at the top: keys and values, even inside a folded branch — the diagram opens the way to the result. **Enter** goes to the next one, **Shift+Enter** to the previous, **Esc** clears.
4. Click a box or one of its lines: the matching piece of text is **selected in the text**, if you open the same file in another pane (⌘\ splits the screen). And the cursor in the text marks the box it is in.
5. Right-click a box or line: **Copy path** gives something like `$.npcs[0].items`; **Copy value** copies the value.
6. **Arrange again** puts everything back in the original layout; **Top to bottom** switches the direction; **Fit to window** shows the whole. On a phone the bar is a single row of icons — magnifier, zoom out, zoom in, fit — and the **…** menu keeps the rest; the magnifier opens the search over the bar, and the touch tip goes away when you dismiss it.

A long value appears cut off, with a **…** that shows the whole text. A number appears as it was written (`12345678901234567890`, not rounded).

---

## For keyboard and screen reader users

For a screen reader, the diagram is a **tree**, in the order of the data. **Tab** enters it; **↑ ↓** move between siblings, **←** goes up to the parent box, **→** goes down to the first child; **Enter** or **Space** folds and unfolds; **T** goes to the text; **/** goes to the search. **Alt+arrows** move the box with what is under it, and **Alt+Shift+arrows** only the box. With the reduce-motion option turned on in the system, nothing animates.

---

## A code block in a note

A code block of JSON, YAML, TOML, XML or CSV in a note has the **View as diagram** button, which opens the block's diagram in a tab beside it, for reading only. Hover over the block below:

```json
{
  "table": "Aurora",
  "players": [
    { "name": "Rowan", "class": "fighter", "equipment": { "weapon": "sword", "armor": "chain mail" } },
    { "name": "Mira", "class": "mage", "equipment": { "weapon": "staff" } }
  ],
  "round": 7
}
```

---

## On a board card

A data file put on a board (drag it from the tree) shows its text on the card, coloured as in the editor. In the header, **Text | Diagram** switches the view; the choice is kept on the card itself, in the canvas, and the file is never written. The diagram only receives the mouse once you enter it (the **Interact with the diagram** button); **Esc** gives the board back. With **Data diagram** off, the card shows the text only. Lesson 15 of the Board Training teaches it.

---

## Save as board

The **Save as board…** command (in the diagram's bar and in the palette) writes a new **board** with a text card for each visible box and a line for each connection, just as they are laid out now. Before creating it, Verso shows the name, the folder and how many cards and lines the board will have. See [Board and Relations](/en/wiki/board-and-relations/).

---

## What else to know

- **Formats:** JSON, JSONC (`.jsonc`, with comments), JSON Lines (`.jsonl`, `.ndjson` — one root per line; a bad line shows up as an error, without bringing down the others), YAML (several documents become several roots; an `*alias` is a line to the box of its `&anchor`), TOML, XML and CSV/TSV.
- **As you type:** the diagram updates after a pause and keeps what you folded and moved. If the text stops being valid, the last good diagram stays on screen, with a line that says the error and takes you to it.
- **Size:** the diagram is offered up to 20 MB of text; above that, only the text. It opens with the first levels unfolded, up to about 300 boxes.
- **Remembered on this device:** what you moved and folded in each file, and the last view used (text or diagram) for each file type — the first time for a type opens in text.
- **Turning it off:** in Settings › Application › Features, the **Data diagram** switch removes the Text | Diagram selector and the blocks' button. No file changes.

---

Go back to the tabletop tools in [Oracles and World Building](/en/wiki/oracles-and-world-building/), see how to tie a folder to a cloud of yours in [Syncing with a Cloud](/en/wiki/syncing-with-a-cloud/), see the [Home Page](/en/wiki/welcome-to-verso/) or explore the Verso Tour.
