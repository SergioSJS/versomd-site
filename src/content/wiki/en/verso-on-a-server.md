---
title: "Verso on a Server"
description: "`verso serve`: installing, accounts by invitation, owner, editors and readers, editing together and the connected desktop app."
order: 23
group: server
slug: "verso-on-a-server"
twin: "verso-num-servidor"
source: "demo-vault-en/23 - Verso on a Server.md"
updated: ""
---
**UniVerso** is Verso without the window, on a machine of your own — a server at home, a NAS, any cloud. Your notes stay **ordinary folders of Markdown files** on its disk; you open them in a browser, on your computer, phone or tablet, and several people can work in the same folder.

> **Note: Whoever hosts it can see the notes**
>
> The server reads the files to search and to edit together: there is no end-to-end encryption. Whoever runs the machine sees what is on it, just like with a Notion of your own.

---

## Installing

A step-by-step guide for people who have never set up a server, with commands to copy, is in [Installing Your UniVerso, Step by Step](/en/wiki/installing-your-universo-step-by-step/). The summary:

Three ways, all the same program (the full guide is in `docs/reference/server-install.md`):

- **Docker**, for amd64 and arm64;
- **CasaOS and ZimaOS**, through a compose file;
- a **`.deb` or `.rpm`** package with a systemd service, for a machine without Docker.

Two folders matter: `VERSO_DATA_DIR`, on a local disk, with the accounts and the indexes; and `VERSO_FOLDERS_DIR`, with the note folders, which can live on a NAS. The backup covers both.

The shortest path: paste the compose file, open `http://<the machine's IP>:7340` and use the setup link from the log. **Plain HTTP works**, from any device on the network, and is fine at home; on a public network the password and the notes travel in the open. **HTTPS is optional, later**, to unlock offline mode, notifications and passkeys: a reverse proxy, `tailscale serve` (the simplest path for the phone and the iPad) or the server's own certificate. Without it, Verso turns those features off and tells you, with the "How to turn on HTTPS" link.

---

## The first admin and the accounts

- The admin comes from the `VERSO_ADMIN_EMAIL` and `VERSO_ADMIN_PASSWORD` variables, **on the first start only**. Without them, the log shows a setup link that is valid for one hour.
- **Nobody signs up on their own**: the admin **invites**, with a single-use link that is valid for seven days, and sees who used it.
- Each folder has an **owner**, **editors** and **readers**. The admin does not enter a folder without granting themselves access — and that goes in the log the owner reads.
- Forgotten password: the admin makes a new-password link. Lost admin: `universo admin reset <e-mail>` on the machine itself.
- Lost phone: on the account page, in the console, **End sessions and tokens** signs the account out of every browser and device at once and revokes its tokens, without changing the password — and it goes in the log.
- All of this lives in the **administration console** (the `/admin` address, or Settings › Account › *Administer this server*), which only the admin sees: an overview, the accounts, the folders with each one's **quota**, the invitations, the log and the server's configuration.
- **Quota per folder**: the admin limits a folder's space; a write that would go past the limit is refused, and shrinking the folder is always possible. Near the limit, the window warns you.
- On a folder's page, **Latest changes to the files** says when, who and what — with the **device name** in parentheses next to the account, when the change came from a device's sync. The server's log also names the device when it refuses a change.
- **Needs a look**, on the same page, points out a name kept in **two files** on the server's disk (the accent in both forms, from before a name was a single file): only one syncs, and the line says which one to remove or rename.

---

## Your account

In **Settings › Account** — the person button, next to the gear on the side strip, or **Account** at the end of the sidebar on the phone:

- **passkeys** — sign in with your fingerprint, face or PIN, no password;
- the open **sessions**, and a button to sign out of all the others — ending a device's session **signs it out at once**, and its sync asks to connect again in Settings › Servers;
- **access tokens** for scripts, tied to folders and to reading or writing.

---

## Editing together

Open the same note in two windows, or with another person: what one types shows up in the other as it is typed, with the cursor and the name — the name of the account of whoever is typing, set by the server: nobody appears under someone else's name. The server writes the file when the edits settle, and **never writes over** a change made outside — that one shows the difference so you can choose, as Verso has always done.

Not just notes: **everything you edit in the window** is edited together, the same way.

- **A board**: what each person draws, moves or writes shows up in the other as they do it, and both people's changes are kept. You see each person's **pointer** and **selection**, with the name. If two people touch the **same shape** at the same time, the newer version stays, as Excalidraw decides; a shape that was **deleted** stays deleted even if someone was dragging it — and the ⌘Z of whoever deleted it brings it back.
- **A text file** (`.txt`, `.json`, `.csv`, a page's code) and **a base** — including the filters, sorts, columns and views changed by the base itself: letter by letter, as in a note.
- **A note on a board card**: edited inside the card, it is in the same room as whoever opened it in a tab.
- The tab says who is there — *live, with Ana* —, and a screen reader hears who comes in and who goes out.
- A canvas saved by another program in another layout only enters the room after the first save here, which shows the difference first. A drawing from the Excalidraw plugin stays view-only; its text is a note, edited together like the others.

In a note, a board or a text file that changed on disk while you were typing, there are three ways out: **Discard mine and reload**, **Write mine over it** or **Keep both** — the disk's version keeps the name, and your text goes to a copy beside it, with the name that sync gives to a conflict.

---

## From the desktop app

In **Settings › Servers**, pick the server under **Found on this network** (the app finds it on its own when it is on the same network) or type its address, and connect: the app **copies a code** to the clipboard and the browser opens the server's page, where you **paste the code** (or type the one the app shows) to **allow this computer** — nobody pastes a token. The page never takes the code from a link: a link someone sent you, with the code of their device, approves nothing until you paste the code from the app in front of you. After the code, the page says **who asked** — the device name, the address and the time of the request — and asks: *Was it you who asked, on this device?* **Approve this device** or **It was not me: refuse**. An address and a time that are not yours: refuse. Then pick a folder on the server, and the window shows it as if it were here.

That is also where **this device's name** lives — by default, the system's name. Give it a name of your own (two computers with the same system name stop being confused with each other): it goes into the name of conflict copies, the server's session list and each folder's latest changes.

---

**With no server at all**: the desktop app can also serve the folders you mark straight to the phone, on your network, with no account and no password — the phone is paired by a QR and you allow it on the computer. See [Pair the phone with your computer](/en/wiki/verso-on-phone-and-tablet/#pair-the-phone-with-your-computer).

## Syncing a folder from this computer

Opening a server folder in a window is working **online**: everything goes over the network. **Syncing** is the other way: the folder lives on this computer — it opens without a network, Obsidian reads it, the backup copies it — and the server keeps the same files for your other devices, the browser and whoever shares the folder with you.

With the folder open, the shortest way is **Settings › Servers › Sync ‘your folder’**: one click makes the folder on the server, with the name of this one (`Name (2)` if there is already one with it — it never merges into another), and turns sync on. On a new server it is the only step, and whoever installed it (the admin) always can. In **Settings › Sync**, pick the server and **a new folder** (with the name of this one) or one you already have there. The folder's size shows before anything crosses. After that:

- a change on one side goes to the other — on save, when the server signals, on reconnect and every five minutes; with no network, it waits;
- large files go **in pieces**, and are only written once they arrive whole;
- **the first time nothing is deleted**: what only one side has goes to the other;
- if both sides changed the same file, it is a **conflict**: the server's version keeps the name, and this computer's sits beside it, like `Note (conflict, Mac, 2026-10-10 15.34).md`. In Settings › Sync, the list of conflicts shows **the difference**; merge by hand and delete the copy;
- if both sides only **added lines to the end** of a note, it is not a conflict: the lines are joined into a single note, the server's first, and recent activity says *merged*;
- a name with an accent is **a single file** everywhere, even if one system stores the `é` whole and another as `e` plus the accent (as old Macs wrote it): each computer keeps the spelling its system gave the name, and the same file changed on both sides is a conflict;
- if sync were about to delete **many files** at once — more than a fifth of the folder, or more than 50, and at least 3 —, it **stops and asks**: a folder that was moved or a disk that did not mount looks like deletions;
- what stays out (the server's quota, a file that is not on the computer) shows up with the reason, and **Recent activity** lists what went and came — what came from the server says by whom and on which device, like "by Ana on Ana's MacBook".

The status bar shows the state — *Synced*, *sending 3*, *Offline*, *Server unreachable*, *Paused*, *1 conflict* — and a click on it opens the section. With the server down, the section says which server did not answer, and *Sync now* tries again; *Sync this folder* and the folder list in Settings › Servers say the same right there, with **Try again**. Whoever only **reads** the folder on the server receives the changes; the ones made here stay here. Turning it off leaves both sides as they are.

Files that iCloud or OneDrive left only in the cloud show in **Settings › Sync** as *files not on this computer yet*, with the **Download N files (X MB)** button: it says the size first, refuses to start if the disk cannot hold them (or if the free space cannot be told), downloads one at a time with progress and a **Stop**, and the ones that come down sync on the next pass. A file that synced before and went back to the cloud asks nothing: the quiet line *are only in the cloud; the server has them* counts it, and it is never deleted on the server.

### Editing together in a synced folder

While sync is connected, a note opened here **joins the same room** as whoever opened it in the browser or on another device: you edit together, live, with each person's cursor and name. The server writes the note when the edits settle, and sync brings the file to this computer — no conflict copy of your own text.

- Beside the title, and in the status bar, the note says its state in words: *live, with Ana and Bia*, *live, alone*, *catching up…* while what you changed offline is sent before joining.
- **Did the network drop?** The note stays *local — offline*: your text stays on screen and is saved on this computer. When the network is back, the note rejoins the room and what you typed is merged, letter by letter, with what the others typed. If the room is already a different one (a long time passed, the server restarted), sync compares as usual — and, if both sides changed, your version stays in a copy beside it. Nothing is lost.
- **Pausing** sync leaves the note *local — sync paused* until you resume.
- Whoever only **reads** the folder shows up in the note, with their name, and does not type.
- A change made **outside Verso** (Obsidian, a script) to the open note crosses like any other: it enters the room, or stays in a copy if the room had already saved something else.
- Do not want to edit together in this folder? In **Settings › Sync**, turn off **Edit notes together while online**: notes go back to being edited only here and cross on save. It is a setting of yours, for this computer — it does not go into the folder. With it off, the note and the board say **Live editing is off for this folder**, in a button that opens this setting.

Boards, text files and bases opened here also go live, the same way; attachments cross as files.

---

## Sharing with someone else

Each person has their own vault in the same UniVerso. To share **one folder** of yours with someone else, right-click the folder in the tree and choose **Share…**: type the e-mail of their account on this server and the role — **reads** or **edits**. To share **the whole vault**, the same dialog is in the tree root's menu, **Share the whole folder…**. Only the folder's owner shares; whoever receives it does not pass it on.

A shared folder gets a little person mark in the tree. In the dialog, change someone's role or take their access away — the dialog asks first, and that person's open windows close the folder at once. What they had already synced stays on their computer, and sync of that share is **turned off**: the status bar and Settings › Sync say that whoever shared revoked the access, and when.

If the folder's notes show images kept **outside** it — the attachments folder at the vault root, as Obsidian does it —, the dialog warns you and offers to **include the attachments folder, read-only**.

Whoever receives it sees the folder as a folder of **their own**, with its name and the owner's — *Campaign (Sérgio)* — under **Shared with me**: on the folder button, at the top of the sidebar (which groups **On this computer**, **Mine** and **Shared with me**), in Settings › Servers and in the account in the browser. It opens in a window of its own and, in the desktop app, syncs with a folder on this computer just for it — never inside your vault. Nothing from outside the shared folder reaches it: a link to a note outside shows up as **not in what was shared with you**, without creating a note. If the receiver **renames or moves** a note in the folder, the owner's links to it in notes **outside** the share change too — the server rewrites them, like Notion, without the receiver seeing those notes; an owner's note that was open at that moment stays as it was. And the numbers the receiver sees — the notes in the status bar, a base's counts and sums — count only what was shared.

This demo vault does not have two accounts: to see the other side, use two browsers on one UniVerso.

Whoever only **reads** a note does not receive its `[!secret]` blocks: the game master's secret stays in the note for whoever edits it (see [the game master's secret](/en/wiki/dice-and-random-tables/#the-game-masters-secret)).

## A read link, with no account

For players, or anyone, to **read** the world without making an account, the folder's owner makes a **read link**: right-click the folder and choose **Read link…**, or a note and choose **Copy read link…**. Pick the expiry (none, 1, 7 or 30 days, or until a date) and, if you like, a **password**. The address (`/r/…`) shows **once**, already copied: the server keeps only a mark of it. Whoever opens it reads, in a browser, only what the link points at — the folder, or the note and what it embeds —, in the reader's view: **without** the `[!secret]` blocks, no editing, no history, and a link to a note that was not shared shows as plain text *(not shared)*. Dice roll in the reader's browser and write nothing.

Before the link is made, the dialog says how many notes have secrets and that readers will not see them. The tree marks what has a live link, and the panel lists the links with who made each and when it was last opened. **Revoke** ends the link at once, open pages included. Read links **start off**: whoever runs the server turns them on in *Administration › Server*, and turning them off ends them all. A wrong password counts as a refused sign-in, and the owner is mailed when there are many.

---

For the phone and the tablet, see [Verso on Phone and Tablet](/en/wiki/verso-on-phone-and-tablet/); to roll dice and draw from a table, [Dice and Random Tables](/en/wiki/dice-and-random-tables/). Go back to the [Home Page](/en/wiki/welcome-to-verso/) or open the Verso Tour.
