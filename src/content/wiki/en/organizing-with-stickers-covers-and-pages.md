---
title: "Organizing: stickers, covers and pages"
description: "Stickers, colors, covers with repositioning, folder pages, manual ordering, hidden items and editing embedded notes."
order: 19
group: organize
slug: "organizing-with-stickers-covers-and-pages"
twin: "organizando-com-figurinhas-capas-e-paginas"
source: "demo-vault-en/19 - Organizing with Stickers, Covers and Pages.md"
updated: "2026-10-02"
---
Verso organizes notes and folders with the same frontmatter the make.md plugin writes in Obsidian: a folder labeled there shows up labeled here, and the other way around. Everything stays in Markdown, in the file itself.

---

## 1. Stickers and colors

A note or folder can have a sticker (an emoji or an icon) and a color that tints its name. They show up in the tree, in the tabs and in the note's header.

### How to set them
1. Click the sticker to the left of the open note's title (with no sticker, there is a faded sparkle there; the star on the right is the bookmarks one), or right-click the note or folder in the tree and choose **Customize › Change sticker…** or **Customize › Change color…**.
2. Search for an emoji by name, in English or Portuguese, or switch to the **Icons** tab.
3. Pick a color from the palette.

In the frontmatter, the sticker is stored in make.md's form:
```yaml
---
sticker: emoji//1f680
color: "#e07a52"
---
```
An icon is stored as `lucide//rocket`. A value Verso does not recognize does not become a sticker: the item keeps its own icon.

---

## 2. Covers

A cover is an image at the top of the note:

- **Add cover**: at the top of the note, click **Add cover** and type the path of an image in the folder (like `assets/diagrama.svg`) or a web address. A web image only loads with **Settings › General › Load remote content** turned on.
- **Reposition**: over the cover, click **Reposition** and drag the image vertically, or use the arrows `↑` and `↓`. **Save position** (or `Enter`) writes it; `Esc` gives up.
- **Remove cover** takes the cover off the note.

The position goes into `banner_y`, a percentage from 0 (top of the image) to 100 (bottom), as make.md writes it:
```yaml
---
banner: assets/diagrama.svg
banner_y: "42"
---
```

---

## 3. Folder pages

Click a folder in the tree to open the **folder page**: at the top, the folder's note; below, a table with its items.

- The folder note is `Projects/Projects.md` (inside the folder, with its name) or `Projects.md` (beside the folder). To use another name, like `README`, fill in **Settings › Organizing › Folder note name**.
- The folder note does not show in the tree: open it by right-clicking the folder › **Organize › Open the folder note**, or from the folder page.
- In a folder with no note, the page offers **Create the folder note**.
- A right-click on the empty space of the page brings up the same menu as the tree: new note, folder, base, board or web page, **Reveal in Finder** and the paths.
- Renaming the folder renames its note along with it: `Projects/Projects.md` becomes `Work/Work.md`.
- A folder's labels live in the frontmatter of its note. Labeling, ordering or pinning something in a folder with no note creates its note.

### New items
The folder note can give a sticker, a color and a template to every new note created there:
```yaml
---
items_sticker: emoji//1f4dd
items_color: "#4361ee"
items_template: "Templates/Meeting Note.md"
---
```

---

## 4. Manual order and pinned items

- **Drag**: drag a note or folder up or down within the same folder.
- **By keyboard**: in the item's menu, **Organize › Move up** or **Organize › Move down**.
- **Pin**: in the item's menu, **Pin to folder** — or hold `⇧` as you drop the item into the folder. **Unpin from folder** undoes it.
- **Two orders**: a folder stays in alphabetical order until the first drag, which creates its own order from the alphabetical one. The button next to **Files** (A→Z in alphabetical, a handle in custom), or a right-click on a folder or on the tree's empty area, switches the whole tree between **Alphabetical order** and **Custom order** (the checked one is the current one). Alphabetical order erases nothing: back in custom, each folder has the order it had.
- **At the root**: loose notes at the root can also be ordered by dragging. The order is kept in a note at the root named after the open folder, created on the first drag.

The order and the pinned items live in the folder note: `order` with the item names, `pinned` with links to them. Renaming or moving an item through Verso updates the list.
```yaml
---
order:
  - Research and Findings.md
  - Project Alpha.md
  - Project Beta.md
pinned:
  - "[[Research and Findings]]"
---
```

---

## 5. Hiding from the tree

- In the item's menu in the tree, **Organize › Hide from tree**. It disappears from the tree but stays in search and in links.
- To show it again, open **Settings › Organizing › Hidden from tree** and click **Unhide**.

---

## 6. Editing an embedded note in place

An embedded note (`![[Note Name]]`) can be edited right there, without opening another tab:

- In **Reading** or **Edit**, click the embedded note's text, or the button in its corner. The button again (or `Esc`) ends the editing.
- What you type is saved in the embedded note, not in this one. Each one has its own undo (`⌘Z`).
- If the embedded note changes elsewhere while you type — in another tab, or outside Verso —, the conflict warning appears, with both versions; nothing is overwritten unless you choose.
- Prefer to open the note beside this one? Turn off **Settings › Organizing › Edit embedded notes in place**.

Try it on the note below:

*Research and Findings*

---

## 7. Emojis with `:`

- In the editor, type `:` and the name of an emoji — `:rocket` suggests 🚀.
- Suggestions accept names in English and Portuguese. Use `↑` and `↓` to choose, `Enter` to insert and `Esc` to close.
- Turn it off in **Settings › Organizing › ':' opens the emoji picker**.

---

## 8. Focuses (named roots)

Focuses are sets of folders and notes that act as roots of the file tree — compatible with make.md:

- **Focuses tab**: in the right-hand panel (next to Bookmarks), the **Focuses** tab lists all the focuses of the folder. **Home** stands for the whole folder and is always first.
- **Filtering the tree**: click a focus to show only its folders and notes. The file tree's header then shows the active focus (e.g. `FILES · Projects`), with a button to go back to Home.
- **Creating and adding**: right-click a folder or note in the tree and choose **Organize › Create focus here** or **Organize › Add to focus…**.
- **By keyboard**: use the **Switch focus** command in the command palette to flip quickly between focuses.
- **Focuses the same as make.md's**: if the folder has `.space/waypoints.json`, Verso reads its focuses and offers to write the changes back. You can turn this on or off in **Settings › Organizing › Keep focuses the same as make.md's**.

---

Continue to [Blocks Like in Notion](/en/wiki/blocks-like-in-notion/), go back to the [Home Page](/en/wiki/welcome-to-verso/) or open the Verso Tour.
