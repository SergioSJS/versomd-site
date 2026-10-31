---
title: "Drawing on the Board"
description: "The Excalidraw cheat sheet: tools, groups, arrows, layers and shortcuts."
order: 10
group: boards
slug: "drawing-on-the-board"
twin: "desenhando-no-board"
source: "demo-vault-en/10 - Drawing on the Board.md"
updated: "2026-10-01"
---
Verso's boards are drawn with **Excalidraw**. To learn by doing, open the Board Training: fourteen lessons, each with a space to practice. This note is the cheat sheet, to look things up later.

*Board Training*

---

## Tools

Each tool in the top bar has its own key, shown beside the icon.

| Key | Tool |
| :--- | :--- |
| `V` or `1` | Selection |
| `R` or `2` | Rectangle |
| `D` or `3` | Diamond |
| `O` or `4` | Ellipse |
| `A` or `5` | Arrow |
| `L` or `6` | Line |
| `P` or `7` | Draw, freehand |
| `T` or `8` | Text |
| `E` or `0` | Eraser |
| `N` | Sticky note |
| `H` | Hand, to drag the board |
| `F` | Frame tool (the canvas group) |
| `K` | Laser pointer |
| `Q` | Keep the tool active after drawing |

Hold `⇧` while drawing to make perfect squares and circles. A double click on the empty space puts a **text card** (Markdown, where a `dice:` code becomes a die) — the **Text card** button in the toolbar does the same; in **Settings › Board › Double click on the board creates** you can switch to **Drawn text**, Excalidraw's loose text. For drawn text, use the Text tool (`T`).

Under **More tools** (the `⋮` of the bar) there are also **Draw to shape** (`⇧ X`: a scribble becomes a rectangle, circle, diamond, line or arrow) and **Bucket fill** (`B`: paints a closed region).

## Moving around the board

- **Move**: two fingers on the trackpad, or the mouse wheel (with `⇧`, sideways). Or hold `space` and drag.
- **Zoom in**: pinch on the trackpad, `⌘` + wheel, or `⌘ +` and `⌘ −`. `⌘ 0` goes back to 100%.
- **See everything**: `⇧ 1`. **See only the selection**: `⇧ 2`.
- **Go to a group**: the **Outline** button, at the top right of the board, lists the groups and the cards; a click on a group shows the whole group.

## Connecting one thing to another

With the **Arrow**, start on top of a card and release on top of another: the edge lights up when the arrow sticks. Each end keeps aiming at the point where you started and where you released — stopping at the card's edge — and keeps aiming there when the cards move and when the board opens again. A double click on the arrow writes a label. In the left column, the **Arrow type** button chooses between straight, curved and elbow, and the **Arrowheads**.

For a **loose arrow**, which attaches to no card at all, hold `⌘` while drawing. Without a keyboard (on touch), turn on **Insert › Loose arrows**: new arrows come out loose until you turn it off. With the Arrow in hand, the hint line under the bar reminds you of this — and warns you when Loose arrows is on.

An arrow between two cards is a canvas connection, which Obsidian shows too. Between two notes, the **Promote to relation** button writes the link into the source note's frontmatter — see [Board and Relations](/en/wiki/board-and-relations/).

## Groups

- **Frame**: it is the canvas group, and Obsidian shows it as a group. The **Frame tool** (`F`, under **More tools**) encloses whatever you drag around; or select the things and, with a right click, **Wrap selection in frame**. The new frame is called *Frame*: a double click on the name renames it.
- **Group** (`⌘ G`): joins drawings so they move together. `⌘ ⇧ G` separates them; a double click enters the group to work on a single piece.

## Layers

What was drawn last stays on top. To change the order, use **Layers** in the panel, the right click, or `⌘ ]` (forward), `⌘ [` (backward), `⌘ ⌥ ]` (bring to front) and `⌘ ⌥ [` (send to back).

## Color and style

With something selected, the left panel shows **Stroke**, **Background**, **Fill**, the width, the style and the sloppiness of the stroke, **Edges** and **Opacity**. `⌘ ⌥ C` copies the style and `⌘ ⌥ V` pastes it onto something else. Note cards also change color, fill, edges and stroke, and Verso keeps it all in the file.

## Shortcuts

| Action | macOS | Linux / Windows |
| :--- | :--- | :--- |
| **See everything** | `⇧ 1` | `Shift + 1` |
| **See the selection** | `⇧ 2` | `Shift + 2` |
| **Zoom 100%** | `⌘ 0` | `Ctrl + 0` |
| **Select all** | `⌘ A` | `Ctrl + A` |
| **Duplicate** | `⌘ D` | `Ctrl + D` |
| **Group / ungroup** | `⌘ G` / `⌘ ⇧ G` | `Ctrl + G` / `Ctrl + Shift + G` |
| **Forward / backward** | `⌘ ]` / `⌘ [` | `Ctrl + ]` / `Ctrl + [` |
| **Bring to front / send to back** | `⌘ ⌥ ]` / `⌘ ⌥ [` | `Ctrl + Shift + ]` / `Ctrl + Shift + [` |
| **Copy / paste the style** | `⌘ ⌥ C` / `⌘ ⌥ V` | `Ctrl + Alt + C` / `Ctrl + Alt + V` |
| **Lock** | `⌘ ⇧ L` | `Ctrl + Shift + L` |
| **Grid** | `⌘ '` | `Ctrl + '` |
| **Undo / redo** | `⌘ Z` / `⌘ ⇧ Z` | `Ctrl + Z` / `Ctrl + Shift + Z` |
| **Search the board** | `⌘ F` | `Ctrl + F` |
| **Export image** | `⌘ ⇧ E` | `Ctrl + Shift + E` |
| **All shortcuts** | `?` | `?` |

> **Note**
>
> With the board in focus, some of Verso's shortcuts give way to Excalidraw's: `⌘ D` duplicates, `⌘ K` creates a link on whatever is selected, `⌘ [` and `⌘ ]` change the layer. Click outside the board — in the file list, for example — to use them in Verso. `⌘ P`, `⌘ F` and `⌘ ⇧ E` work on the board too.

Continue to [Writing in the Editor](/en/wiki/writing-in-the-editor/) or go back to [Home](/en/wiki/welcome-to-verso/) · See also the Verso Tour.
