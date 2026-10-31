---
title: "Files and Folders"
description: "Creating, renaming without breaking links, moving, attaching images and the trash."
order: 14
group: start
slug: "files-and-folders"
twin: "arquivos-e-pastas"
source: "demo-vault-en/14 - Files and Folders.md"
updated: "2026-10-01"
---
Your folder is an ordinary folder on your computer: whatever Verso creates, renames or deletes is a file you can see in the Finder, and whatever you change in the Finder, Verso sees.

---

## Create

- `⌘N` creates a new note; `⌘⇧N` asks for the name first.
- The **New note** (`+`) button on the left ribbon opens a menu: note, folder, **New base**, **New board** and **New web page…**.
- Right-click a folder in the tree, or the empty space of the tree, for the same items — whatever you create goes into that folder.
- A name that Windows cannot store — `CON`, `NUL`, `COM1`, a dot or space at the end, or `: * " < > ? | \` — is not created or accepted in a rename, on any system: the folder might be synced with a Windows machine. The field tells you why. A file that already has such a name keeps opening, and can be renamed to a name every system stores.
- Neither is a name accepted, when creating or renaming, that differs from another name in the same folder only in upper and lower case — `note.md` beside `Note.md`: on a Mac or on Windows the two would be a single file. The same goes for a name that differs only in the way the accents were stored (a `Café.md` that came from another system). Renaming `note.md` to `Note.md` is still fine.

---

## A Note's Menu

Right-click a note in the tree (on a phone or tablet, hold your finger on it and let go):

- **Open**, **Open in new tab**, **Open to the side** and **Relations** (the graph around it). **Open in a new window** is in the **Window and location** group.
- **Rename** (or `F2` — in the tree or with the note open —, or a click on the title of the open note). If other notes point to it, Verso shows, note by note, how each link will look, and asks: **Update links** or **Leave them**.
- **Move to…** takes the note to another folder; **Duplicate** makes a copy.
- The rarer items sit in groups, which open in a submenu (hover, or `→` and `Enter`; `←` or `Esc` goes back): **Customize** (sticker and color), **Organize** (select, pin, move up or down, hide from tree, turn into folder, **Create focus here**), **Window and location** (**Open in a new window**, **Reveal in Finder**, **Copy relative path** and **Copy full path**) and **New** (note, folder, base, board, web page and a project from a template).
- **Move to Trash** (or `Delete`, or `⌘⌫`, in the tree): the note goes to the folder's `.trash` folder, as in Obsidian — nothing is lost for good; see [The Trash](#the-trash).

---

## Switching Folders

The button with the folder's name, at the top of the tree, opens the switcher: the folders of this computer you opened before, your own and the shared ones on a server. Two folders with one name show, underneath, where each sits. A folder you no longer want in the list has a **×** beside it (the open folder has none): it only takes it off the list — nothing is deleted from the disk. To bring them back, **Settings › Files and links › Show hidden folders**.

---

## Drag and Drop

- Drag a note from the tree onto another folder to move it. With a finger, hold the note for a moment before dragging: sliding straight away only scrolls the tree.
- **Several at once:** `⌘`-click adds or removes a note or folder from the selection, `⇧`-click selects everything since the last one clicked, and `Esc` clears. Drag the selection onto a folder, or right-click it — **Move to…**, **Copy relative paths**, **Move to Trash** —, and everything goes together; the links that need to change appear in a single plan.
- Drag a file from the tree into the **text of a note**: a link to it goes in (or an embed, if it is an image, PDF or other file).
- Drag files from the Finder onto the tree: they are copied into the folder where you drop them; a name already taken gets `(2)` — nothing is overwritten or refused — and the status bar says which were renamed. In the desktop app a drop goes up to the same limit as **Import files…** (below): the app copies the file straight in, without passing through the window. In a browser window, or when you drop into a note's text or a board, the limit is 32 MB per file.
- Without dragging: **Import files…** (the command palette, or **New ▸ Import files…** in the right-click menu of a folder or of the tree's empty space) opens the system's file picker; the chosen files are copied into that folder, a name already taken gets `(2)`, and the first one is selected in the tree. The largest size of each file is a setting (**Settings › Files and links › Largest imported file**, 32 MB to start, up to 1024): a 200 MB PDF goes in without passing through the window, the app copies it straight into the folder. On a server the limit is 32 MB.
- Paste or drag an **image** into a note: it is saved in the `assets` folder beside the note (**Settings › Files and links › Attachments folder (beside the note)**).

---

## The Trash

What you delete stays in the folder's **Trash** for 30 days, and then is gone for good. To see it: **Open the trash** in the command palette, a right-click on the empty space of the tree, or **Settings › Files and links**, where the trash's size appears beside the folder's space (it does not count toward that space). The trash does not show up as a row in the tree: the tree is for your files.

- The list shows each item with **where it was**, its **size**, **when** it was deleted (and by whom, in a server folder) and **when it expires**; the search at the top filters by name.
- **Restore** puts the item back where it was — a folder comes back with everything it had. If another file with that name already exists, nothing is replaced: the item comes back beside it, as `Name (restored 2026-10-11).md`, and Verso tells you where it went — also when the name that is there differs only in upper and lower case. A name that Windows cannot store is not restored: Verso says why, and the item stays in the trash.
- **Delete now** and **Empty the trash** delete for good, and ask first, right there, with the size.
- **Keep deleted files for** changes this folder's period: from 1 day to **Forever**. Shortening it deletes at once whatever is already past the new period.
- In a server folder ([Verso on a Server](/en/wiki/verso-on-a-server/)), whoever can edit sees the trash and restores; deleting for good and shortening the period belong to the folder's owner. When a synced device overwrites a note, the version it replaced also goes to the trash, as **replaced by** that device — if another program saved an old text over it, you can go back.

---

## Version History

Every note, board and base keeps its **versions**: what was written at each change, who changed it and when. To see them: **Version history** in the command palette, in the tab's menu (right-click), in the note's menu in the tree, or on the clock in the status bar.

- The list shows each version, the most recent first, with **when** (in this computer's time), **who** — this computer, a person or a device in a server folder, or *outside Verso* when another program changed the file — and how many **lines** came in and went out.
- Pick a version to see the **difference** from the current text, or from the previous version: lines that go out come with `−`, those that come in with `+`.
- **Restore this version** asks first and writes that version as a new version: the current text stays in the history, nothing is lost. If the file changed while you were looking, nothing is written and the difference is redone.
- **Copy as a new note** puts the version beside the file, as `Name (version 2026-10-14 15h04).md`.
- Consecutive writes become one version every ten minutes of editing. All are kept for a day, then one an hour up to 30 days and one a day after that, for a year — **Settings › Files and links › Keep versions for** changes this. The history stays outside the folder, in Verso's configuration: none of it shows up among your files. Images and PDFs are not included; a replaced attachment goes to the [trash](#the-trash).
- In a server folder ([Verso on a Server](/en/wiki/verso-on-a-server/)), whoever can edit sees the history and restores — also on a note that other people are editing together, which everyone sees change —, and whoever can only read sees no history.

---

## The Tree from the Keyboard

The file tree is a single stop of `Tab`: it remembers the item you were on, so `Tab` enters it and `Tab` again leaves. Inside:

- `↓` and `↑` go to the item below and above; `Home` and `End` go to the first and last.
- `→` opens a closed folder; on an open folder, enters it. `←` closes the open folder; on an item, goes up to its folder.
- `Enter` opens the note, or opens and closes the folder. `Space` selects the item (like `⌘` + click) without opening anything.
- Type the first letters of a name to jump to it; the same letter again goes to the next one. `*` opens all the folders beside the item.
- The menu key, or `Shift` + `F10`, opens the item's menu; `F2` renames and `Delete` sends to the trash.

---

## Folder View

The little arrow beside a folder opens and closes it in the tree. Verso remembers which folders you left open: when you open the app again, the tree comes back as it was. In a large folder, the first-level folders start closed, so the tree does not draw thousands of rows at once.

A click on a folder's name opens the folder in a tab: **Thumbnails** or **List**, with the columns **Name**, **Kind**, **Size** and **Modified**. An image appears as a thumbnail, and a PDF shows its first page. A folder can have its own note — `Folder/Folder.md` —, which appears at the top as the **Folder note**; if it does not exist, **Create the folder note** creates it.

---

## Behind the Scenes

- Verso keeps an index of the notes so it can search quickly. **Reindex** (palette or left ribbon) rebuilds the index; the status bar shows the progress.
- **Settings › Files and links › Ignore build folders** and **Respect .gitignore** leave out the build folders (`node_modules`, `target`, `dist`…) and whatever Git ignores.
- A file that macOS left only in iCloud (**Optimize Mac Storage**) is downloaded when you open it, with a notice in the status bar.
- If another program changes an open note, Verso notices — see [Writing in the Editor](/en/wiki/writing-in-the-editor/).

---

Go on to [Settings, Appearance and Shortcuts](/en/wiki/settings-appearance-and-shortcuts/) or go back to the [Home Page](/en/wiki/welcome-to-verso/).
