---
title: "Verso on Phone and Tablet"
description: "The bottom bar, one pane at a time, holding as right-click, a link's card, the keyboard bar and screen readers."
order: 22
group: tools
slug: "verso-on-phone-and-tablet"
twin: "verso-no-celular-e-no-tablet"
source: "demo-vault-en/22 - Verso on Phone and Tablet.md"
updated: "2026-10-09"
---
Verso opens in the browser of your phone and tablet, served by `verso serve` — the same window as on the computer, arranging itself for the screen it has. This note shows what changes with a finger instead of the mouse.

---

## The Phone Screen

On a screen less than 760 px wide:

- **The bottom bar** has six verbs: **Files** (the drawer with the tree), **Search**, **New note**, **Back**, **Commands** (the palette) and **Panel** (the right drawer, with outline, backlinks and tags). The side ribbon and the desktop status bar go away.
- **The tree is a drawer**: it opens with **Files** and closes with a tap outside it.
- **One pane at a time**: a layout split into [side-by-side panes](/en/wiki/tabs-panes-workspaces-and-windows/) shows just one, with a **1/2** button in the tab bar that switches panes. The layout is kept and comes back whole on a wider screen.
- **The tools of a narrow pane** fit in a **…** button: back, new note, the tabs and the **Tab actions…**.
- **A warning that matters** — a save that failed, the connection to the server — shows at the top of the pane, with the **Notifications** bell beside it; the notifications' warnings show at the top too.

On the tablet (760 to 1180 px) the side bars stay, and the tree's rows are taller for the finger.

---

## Tap, Hold and Drag

- **A tap** opens, like a click.
- **Tap a folder's row** anywhere to open or close it — no need to hit the little arrow. The folder's own page opens from the small **folder button** at the end of its row (or from **Open the folder's page** in its menu).
- **Hold and release** is the right click: it opens the menu of a tree row, a tab or a card.
- **Hold and drag** moves: a note to another folder, a tab, a kanban card. Dragging without holding first just scrolls the list.
- **Nothing by gesture alone**: the focused tree row has a **…** button beside it with the same menu, and each kanban card has its own.
- **Organize › Select** in a row's menu turns the tree into a selection: a checkbox on each row and a bar with **Move to…**, **Copy relative paths**, **Delete** and **Done**.
- **Keep open**, in a tab's menu, keeps a preview tab, and **Open**, in a note's menu, opens without preview — what the double click does on the computer.

---

## Writing

- **A link in Edit mode**: a tap puts the cursor in the link, as in any text, and a little card beside it offers **Open** and **Edit link**. On the computer it is still `⌘` + click; see [Links, Anchors and Embedded Notes](/en/wiki/links-anchors-and-embedded-notes/).
- **Photos and camera**: the toolbar's **Insert image** button opens a menu with **Photos and files…** (the phone's gallery and files), **Take a photo** (the camera; the photo enters as `Photo YYYY-MM-DD HHMMSS.jpg`) and **From the folder…**. The image is copied to the note's attachments folder and the embed goes in at the cursor; see [Documents and Media](/en/wiki/documents-and-media/).
- **No block handles**: the computer's `+` and ⋮⋮ need the mouse over the block, so on the phone they do not appear — and the text starts at the screen's ordinary margin. The keyboard bar takes care of the blocks.
- **The keyboard bar**: with the on-screen keyboard up, a row above it, scrolling sideways, brings **+** (a new block below), **Turn block into…** (heading, list, task, quote…), `[[`, `/`, outdent and indent, **move block up** and **down**, **delete block**, the **block menu** (duplicate, copy link…), undo, redo and hide the keyboard. The commands apply to the block where the cursor is; menus open above the bar. See [Blocks Like in Notion](/en/wiki/blocks-like-in-notion/) for what a block is.
- **The cursor stays above the keyboard**, and the menus — the `/`, the link and tag suggestions, the stickers — open in what the screen shows.
- **Line numbers** in Source mode go away on the phone, unless you turn them on in **Settings › Editor**.

---

## Bases, Graph, Boards and PDFs

- **The kanban** of a [base](/en/wiki/bases-and-data-views/) moves one column at a time, letting you see the edge of the next; hold a card to move it, or use **Move to column…** in its menu.
- **The [graph](/en/wiki/graph-view-and-connections/)**: the settings live in a closed panel, opened by the **Graph settings** button; pinch zooms in and two fingers pan.
- **Pinch** zooms the whole page, as on any site — except on the graph, a board and a PDF, which use it for themselves.

---

## On a Server

What the server is and how to install it: [Verso on a Server](/en/wiki/verso-on-a-server/).

- **Someone who only reads** the folder sees a closed lock beside its name (*You only read this folder*), and nothing that changes the folder shows up; if they try to write, move or rename something, a short notice says they only read it, near where they tried.
- **Copy link** gives the note's address on the server, and **Open in a new browser tab** does the job of the new window.
- **A web page** in a note shows up inside the note, with a link to open it in a tab when the site does not allow being shown inside another.

---

## Pair the Phone with Your Computer

With nothing to install: Verso on your computer can itself serve the folders you tick to the phone's browser, **over the network both are on** (your home, for example). It is the same server as `verso serve`, inside the app; it stays **off** until you turn it on, and turns off again when the app closes. While it serves, a **book icon** shows in the Mac's menu bar (or in Windows' notification area), with a menu **Serving N folders… / Stop / Open Settings**; on Linux the mark sits in the app's status bar.

1. On the computer, **Settings › Turn into a server**. The folder open in the window comes first, with its tree of folders; the other folders you have already opened are in the **Recent** group. Tick the folders the phone may see — none comes ticked. To serve **only some folders inside** a folder, tick it and choose in its tree (the open folder's is already open; for recent ones, **Choose folders**). Tick only what the phone may see: each ticked folder reaches the phone as a folder of its own, the rest of the folder does not show up for it, not even by name, and the folder's attachments folder (the one Obsidian configures) goes along, read-only and files only (unticking the last one stops serving the folder; to serve it whole, **Serve the whole folder** in the tree). Then tap **Turn the server on**. The first time, Verso explains what the system is going to ask (local network, firewall) before asking; if you refuse, it says how to allow it, without touching the firewall on its own.
2. Tap **Pair a phone**. The computer shows a **QR**, the address and an **eight-letter code**, valid for **2 minutes** and one use.
3. On the phone, point the camera at the QR (or open the address in the browser and type the code). The browser warns that the certificate is not from a known authority: it is the certificate the app itself made for your computer. Accept it — **only on a network you trust**.
4. On the computer, **Was it you who scanned this QR?** appears, with the phone's name, address and the time. **Allow** lets the phone in (tick *Can edit the notes* for it to write; without that, it only reads); **Not me: refuse** ends the code. Three wrong codes close the window.
5. The phone opens Verso's window with the ticked folders. In **Settings › Turn into a server** you see the paired phones and **Revoke** any one: its session ends right away. Up to 4 phones can stay paired; how many are **connected at the same time** is the **Devices connected at once** setting (1 to 16, 4 by default) — a phone over the number sees a message saying what to do and connects by itself when there is room. **Forget all phones** and **Replace this computer's identity** end all pairings at once.

What stays out on purpose: the phone **never** opens folders you did not tick, does not see your disk, does not make the computer open anything in the system, does not change the app's settings and is not part of a folder that also syncs with a UniVerso (in that case, open the UniVerso's address on the phone). If the computer's address changes — another network, a VPN that connects —, the server **stops by itself** and warns you; you have to turn it on and pair again. On a network with client isolation (a café, a hotel) the phone cannot reach the computer, and Verso says so.

The app's certificate is **not from a known authority**, so the phone's browser treats it as insecure and does not let the folder be [available offline](#offline). For that, use a UniVerso with real HTTPS, or `tailscale serve` — see [Verso on a Server](/en/wiki/verso-on-a-server/).

---

## Offline

On a server with HTTPS (over plain HTTP this option is off, and Verso says how to turn HTTPS on), a folder can be made **available offline** on this device — on the phone, the tablet or a computer's browser. It is a choice for each folder, for this device only, and starts off.

1. Open the folder and go to **Settings › Offline**. Before keeping it, Verso says how much space it will take — the notes and text files whole, the attachments, the window's code — and asks the browser not to delete the copy. If it does not promise, that is written out (likelier on the iPhone; installing the page on the home screen — **Share › Add to Home Screen** — helps).
2. **Attachments**: pictures and PDFs are kept **after being opened**, or all at once, with **Keep every attachment**.
3. Done: the window opens **with no connection**, shows the kept folders, and you read and write the notes. Search, links and the graph are computed from the kept notes, and say so: *offline: from the notes on this device*.
4. What you change waits, and the status bar says how many changes are waiting. When the network returns, they go up **by the same sync rules as the desktop app**: two notes that only gained lines at the end become one; a note changed on both sides keeps the server's version and yours in a copy, listed in **Settings › Offline**; deleting many files at once asks for your confirmation. A message says *Back online: n changes sent*.
5. **Signing out** deletes this device's copy, after saying how many changes have not gone up yet; if the server ends the session, the copy goes away at the next connection. The copy is **not encrypted**: the browser's storage is as safe as the unlocked device.

Someone who only reads the folder keeps what the server hands them — without what is hidden from readers ([Verso on a Server](/en/wiki/verso-on-a-server/)).

---

## Screen Readers

With VoiceOver (iPhone and iPad) or TalkBack (Android), a double tap and hold does the same as holding: it opens the menu. Every new button has a name, in Portuguese and in English.

---

Go back to the [Home Page](/en/wiki/welcome-to-verso/) or open the Verso Tour.
