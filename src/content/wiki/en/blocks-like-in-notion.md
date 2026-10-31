---
title: "Blocks Like in Notion"
description: "Dragging paragraphs and items by the ⋮⋮ handle, the + that opens the `/` menu, each block's menu and Notion's keys."
order: 20
group: organize
slug: "blocks-like-in-notion"
twin: "blocos-como-no-notion"
source: "demo-vault-en/20 - Blocks Like in Notion.md"
updated: "2026-10-06"
---
In **Edit** mode, every paragraph, heading, list item, quote, code block or table is a **block** that moves with the mouse — like in Notion — and the file stays plain Markdown, which Obsidian reads the same.

A block is a **paragraph**, never a line: Enter breaks the line inside it, and pressing Enter twice starts the next block.

---

## The Handle and the +

Hover over a block: in the left margin a **+** and a **⋮⋮** handle appear, and a light outline shows where the block starts and ends.

- **Drag the ⋮⋮** to move the block. A line shows where it will land; moving the mouse further right puts a list item **inside** the item above. Near the edge, the note scrolls by itself. `Esc` cancels.
- **Click the ⋮⋮** for the block menu: **Turn into**, **Duplicate**, **Copy link to block** and **Delete**.
- **Click the +** for a new block right below, with the `/` menu open. `Esc` undoes it.

One `⌘Z` undoes a whole drag. With a stretch of text selected, the handle moves every block the selection touches.

On a touch screen there is no mouse to hover over the block: the handle and the **+** do not appear, and the bar above the keyboard does the same for the block where the cursor is — **move block up** and **down**, **Turn block into…**, **delete** and the **block menu**. See [Verso on Phone and Tablet](/en/wiki/verso-on-phone-and-tablet/).

---

## Keys

| Action | macOS | Linux / Windows |
| :--- | :--- | :--- |
| **Move block up / down** | `⌘ ⇧ ↑` / `⌘ ⇧ ↓` | `Ctrl + Shift + ↑` / `↓` |
| **Duplicate block** | `⌘ D` | `Ctrl + D` |
| **Turn block into…** | `⌘ /` | `Ctrl + /` |
| **Move the line** (as before) | `⌥ ↑` / `⌥ ↓` | `Alt + ↑` / `↓` |

Today's note moved to `⌘⇧D`. All of these commands are in the palette (`⌘⇧P`) — also **Delete block** and **Copy link to block** — and each one can get another key in **Settings › Hotkeys**.

---

## Writing Shortcuts

- `[] ` at the start of a line becomes a task: `- [ ] `.
- In the `/` menu, **Toggle** writes a callout that opens and closes (`> [!note]- `).
- **Copy link to block** writes a `^id` at the end of the paragraph (only once) and copies `[[Note#^id]]`; on a heading, it copies `[[Note#Heading]]`.

---

## Settings

In **Settings › Editor**:

- **Block handles** — on. Off, the margin goes away and the note looks like before.
- **Enter starts a new block** — off. On, as in Notion: Enter in a paragraph starts the next block and `Shift-Enter` breaks the line. Lists, quotes, code and tables keep their own Enter.

---

## To Practice

Drag the items to put the list in order, move the paragraph below to after the tip, and put one item inside another:

1. Third step
2. First step
3. Second step

- Fruit
- Apple
- Vegetable

This paragraph wants to go after the tip: drag it by the ⋮⋮, or put the cursor in it and press `⌘⇧↓`.

> **Tip: Tip**
>
> A numbered list renumbers itself when an item changes place.

---

Next: [Typed Notes](/en/wiki/typed-notes/). Or go back to the [Home Page](/en/wiki/welcome-to-verso/), or open the Verso Tour.
