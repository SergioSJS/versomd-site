---
title: "Open a Single File"
description: "A double-click on an `.md` opens the file alone, with no folder, in a window with no tree or index and nothing written beside it; and how to make Verso the default app for `.md` on each system."
order: 33
group: tools
slug: "open-a-single-file"
twin: "abrir-um-arquivo-avulso"
source: "demo-vault-en/33 - Open a Single File.md"
updated: "2026-10-30"
---
An `.md` in Downloads, on the Desktop, attached to a message: double-click, read, fix a line, close. For that Verso needs no folder: it opens **one file alone**, in a loose-files window — no tree, no search, no graph, no bin, no sync — and **writes nothing beside the file**: no index, no `.verso`, no `.trash`. What it writes is the file, as safely as in a folder: an atomic write and, if another program changed the file while you edited it, the conflict banner with both versions.

---

## How to open one

- **Double-click** an `.md` (or `.markdown`) in Finder, Explorer or the file manager, when Verso is the app for that file; or **Open with › Verso**.
- Drag the file onto Verso's Dock icon (macOS).
- In a terminal: `verso note.md` (or `verso open note.md`).
- In the app: **File › Open File…**, or the **Open File…** command in the palette. **File › Open Recent** keeps the last ten files in a group under the folders.

If the file lies **inside a folder a window already shows**, it opens as a tab of that window. Otherwise it opens in the loose-files window — one per app; each file is a tab, and the bar above the tabs names the file and the folder it sits in.

If it lies inside a folder you **have opened before** in Verso, the bar says so and offers **Open the folder**.

## What the window does and does not do

- Reading, Edit and Source, the outline and the properties, as for any note.
- An **image, PDF, audio or video** beside the file (`![[photo.png]]`) shows; read only, inside the file's folder only, and a symbolic link that leaves it is refused.
- A link `[[Other]]` or `[text](other.md)`: on a click, if a note of that name exists **beside** the file, it opens as another tab (another loose file); if not, nothing is created and the status line says to open the folder. A note embed `![[Other]]` is drawn as a link, not inlined; hover preview is off.
- A file the system **will not let be written** (permissions, locked, a read-only volume) opens read only, with the reason above the text and **Save a copy…**. A file **over 8 MiB** opens read only, in Source.
- **Deleted or moved** outside Verso while open: the text stays in the tab, with **Save here again** (the file made again in the same place; refused if something reappeared there) and **Save a copy…** (the system's save dialog).
- A file that is only in the cloud (iCloud, OneDrive) is downloaded when opened, as a folder's note is; what cannot be downloaded is said, never opened empty.
- The loose-files window **does not come back** when the app restarts; the files stay in **Open Recent**.

## Back to the folder

The bar has **Open the whole folder in Verso**: after a confirmation that names the folder, it opens as a normal folder — indexed, with the tree, search, links and all the rest — in a window of its own. It is the one way back, and it is always in view.

## Making Verso the default app for `.md`

The installer registers Verso as **an** app that opens `.md` and `.markdown`, and never makes it the default by itself — that choice is yours. The gesture is in **Settings › Files and links › Open .md files with Verso by default**:

- **macOS:** in Finder, select an `.md` file, **Get Info › Open with › Verso › Change All**.
- **Windows:** **Settings › Apps › Default apps**, choose Verso for `.md` and `.markdown` (the button in Verso's Settings opens that page).
- **Linux:** in the file manager, **Open With › Verso**, set as default; or in a terminal `xdg-mime default verso-app.desktop text/markdown`. An AppImage counts only once it is integrated into the system's menu.

---

Go on to [UniVerso on a Free Oracle Server](/en/wiki/universo-on-a-free-oracle-server/), go back to [Running a Table](/en/wiki/running-a-table/), see the [Home Page](/en/wiki/welcome-to-verso/) or explore the Verso Tour.
