---
title: "Colour Swatches"
description: "A small square of the colour beside `#1d9e75`, `rgb()` and `hsl()`; a click in the editor opens the picker, and the code comes back in the same format."
order: 30
group: organize
slug: "colour-swatches"
twin: "amostras-de-cor"
source: "demo-vault-en/30 - Colour Swatches.md"
updated: "2026-10-22"
---
Notes about design, themes, maps or games hold colour codes — `#1d9e75`, `rgb(29 158 117)` — that you can only imagine. Verso draws **a small square of the colour** beside the code, and, in the editor, **a click on it opens a picker** that rewrites the code. The file does not change because of the square: it is only a drawing (like everything Verso shows without being asked).

---

## Which codes

| Format | Examples |
| :--- | :--- |
| Hexadecimal | `#1d9e75`, `#1D9E75`, `#fff`, `#1d9e7580`, `#f008` |
| `rgb()` and `rgba()` | `rgb(29, 158, 117)`, `rgb(29 158 117 / 50%)`, `rgba(29,158,117,.5)` |
| `hsl()` and `hsla()` | `hsl(160, 69%, 37%)`, `hsl(160 69% 37% / 0.5)` |

Both the comma and the space syntax work. Colour names (`red`, `teal`) are left out: too many ordinary words would get a square.

## Where it shows

- **In code** — inside backticks, like `#bada55`, or in a code block: `color: #bada55;`.
- **In properties** — `colour: "#1d9e75"` at the top of the note.
- **In plain text, when the code is not a tag.** Verso reads `#bada55` as a tag (as Obsidian does): it stays a tag, and gets a square only between backticks. But `color:#bada55`, `"#bada55"` and `rgb(186 218 85)` are no tags and do get one.

A bare `#123` in text is a ticket number, not a colour: no square. And an `#abc` inside a link, like `[[note#abc]]` or a page's address, is never a colour.

## Try it

In **Edit** or **Source**, click the square of `#1d9e75`. The picker shows, like VS Code's, the code at the top, the **saturation and brightness** square, the **opacity** strip and the **hue** strip.

1. **Drag** in the square or the strips and let go: the code in the note changes, **in the same format** — hexadecimal stays hexadecimal, in the same upper or lower case; `rgb(29 158 117)` stays `rgb()` with spaces; `hsl(…)` stays `hsl(…)`.
2. **By keyboard:** Tab moves between the square and the strips, the arrows adjust (Shift for bigger steps), **Enter** applies and closes, **Esc** cancels and puts the code back.
3. **⌘Z** undoes the change, like any typing.
4. In **Reading** the square only shows the colour; to adjust it, open the editor.

If the code had 3 digits (`#fff`) and the new colour does not fit in 3, it becomes 6 (`#1d9e75`); if you lower the opacity of a `#1d9e75`, it gains the pair of alpha digits (`#1d9e7580`).

## Turning it off

In **Settings › Application › Features**, the **Colour swatches** switch removes every square. No file changes.

---

Go on to [The Table](/en/wiki/the-table/), go back to [Syncing with a Cloud](/en/wiki/syncing-with-a-cloud/), see the [Home Page](/en/wiki/welcome-to-verso/) or explore the Verso Tour.
