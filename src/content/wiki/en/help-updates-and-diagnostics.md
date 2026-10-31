---
title: "Help, Updates and Diagnostics"
description: "Updates, reporting a problem and the console."
order: 18
group: tools
slug: "help-updates-and-diagnostics"
twin: "ajuda-atualizacoes-e-diagnostico"
source: "demo-vault-en/18 - Help, Updates and Diagnostics.md"
updated: "2026-10-01"
---
How to keep Verso up to date, report a problem and see what happens inside.

---

## Updates

- **Settings › General › Check for updates automatically** looks for new versions on its own: when the app opens and, while it is open, every 24 hours. A new version appears as a notification (see below), once per version, with **Download and update** and **View in Settings**.
- In **Settings › General › Version**, **Check for updates** looks right now. If there is a new version: **View release notes** (what is new in it, in the window's language; the version's page on GitHub also says which file to download for each computer), **Download and update** and, when the download finishes, **Restart now**.
- Every update comes **signed** with Verso's key: before installing, the app checks the file's signature and checksum. If either does not match, nothing is installed, and the releases page remains the way to download by hand.

---

## Notifications

What changes without you asking appears in a notice in the bottom right corner (on a phone, at the top): sync that dropped and sync that came back, the connection to the server, a conflict copy, a folder shared with you or a revoked share, a new version, a folder close to its quota, items leaving the trash within 3 days, someone joining the note you are editing (this one starts as **list only**, with no notice: the bell counts it and the mark of whoever joined, beside "live", gets a brief ring). Each change is said **once**; an information notice goes away after 6 seconds, a warning or error stays until you close it (`Esc` closes the one that has focus) or until the state returns. What you did — save, move, rename — is still said in the status bar, not here.

- **The bell**, in the status bar before **Report a problem** (on a phone, at the top of the panel), counts what you have not seen. Click it — or use **Notifications** in the palette (`⌘⇧P`) — to open the list: newest first, with the time, the folder when it is not this window's, and what you can do. Opening marks everything as seen; **Clear** empties it. The list stays on this computer (up to 100, for 30 days), and does not go to your account.
- **Settings › Notifications**: for each kind, **Notice and list**, **List only** or **Off**. Turning it off does not hide the state: the status bar still tells you about sync, and the note about the conflict.
- **Also in the system's notifications** starts off. In the browser, turning it on asks for permission; if refused, the option goes back to off and says why. On the desktop nothing is asked: the system's notification settings decide, and the option says where they are. When on, whatever is in **Notice and list** also appears in the system's notifications while the window is behind others, minimized or on another tab.

Try it: open **Settings › Notifications**, put **Presence** on **Notice and list** to see the notice when someone joins, or leave it on **List only** (the start) and see only the bell; then open the bell.

---

## Report a Problem

The **Report a problem** button, in the status bar (bottom right), gets a dot when some error has happened. It opens a pre-filled report — the version, the app's state, the session's errors and the end of the log — for you to read, edit and **Copy**. Nothing is sent on its own.

The app's log lives at `~/Library/Application Support/verso/logs/verso.log`, on your computer: what the app opened, the commands that failed, the window's errors.

---

## The Console

`⌥⌘I` (or **View › Open Console**) opens the window's inspector: console, elements and network — useful for developers, or for sending a detailed error. **Settings › General › Developer console** turns it on and off.

---

## The Status Bar

At the bottom of the window: the button to show and hide the files, the app's messages, the index's progress, the word and character count of the note (on a PDF, the page), the most used shortcuts — **new note**, **edit**, **split**, **new workspace** —, the **Notifications** bell, **Report a problem** and the button for the right panel.

---

## The Mac Menu

- **Verso**: **Settings…** (`⌘,`) and **Quit Verso** (`⌘Q`).
- **File**: **New Window**, **Open Folder…** (`⌘⇧O`) and **Open Recent**.
- **Edit**: **Undo**, **Redo** and **Select All**.
- **View**: **Open Console** (`⌥⌘I`).

---

## This Folder

This demo folder came from **Import the demo content** (in the palette and in the tree's menu). Importing again brings in whatever is new and keeps the files you have already changed.

---

Go on to [Organizing: stickers, covers and pages](/en/wiki/organizing-with-stickers-covers-and-pages/) or go back to the [Home Page](/en/wiki/welcome-to-verso/).
