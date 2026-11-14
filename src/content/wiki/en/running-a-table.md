---
title: "Running a Table"
description: "Where to start: what Verso is and a map of every lesson."
order: 26
group: rpg
slug: "running-a-table"
twin: "rodando-uma-mesa"
source: "demo-vault-en/26 - Running a Table.md"
updated: "2026-10-22"
---
A **table** is a campaign folder on a UniVerso (Verso on a server of your own, [Verso on a Server](/en/wiki/verso-on-a-server/)): you, the game master, invite the players to it alone, and each note stays **hidden** until you release it. None of this is written in the notes: what is released, which names are secret and who may edit is kept in the server's database, so a synced file, or one opened in Obsidian, is an ordinary note.

Only the folder's owner does this, on a folder of a server or on a folder of this computer **synced** with one ([Verso on a Server](/en/wiki/verso-on-a-server/)): the game master can run the session from the desktop app, with the local folder, while the players use the browser or their own desktop app on the server's folder. With no connection (or with sync paused) the table is unavailable and the **Table** panel says so; it comes back by itself when the connection does. On a folder of this computer alone there is no table, and none of this shows — unless that Verso itself turns into a server and you sit at the table ([A Table over the Internet](/en/wiki/a-table-over-the-internet/)): then it is the same table, with the same **Table** window and the same invitations.

---

## Make the folder a table

1. With the folder open, the **Table** panel has the **Make this folder a table** button (only for the owner of a server's folder that is not a table yet); after it, **Open the Table window**. The same open folder can hold as many tables as you like, one per subfolder, **and each table has its own conversation** (the **Table** panel follows the open note and says *Table: name*, see [The Table](/en/wiki/the-table/)): every folder that is a table gets a **Table** badge in the list, which for the owner opens *that* table's window; players see the **Table · player** badge, which shows what they can do there (read the released notes and edit the ones granted to them in that table, as links) and has no settings. The button beside the folder's name follows the open note: **Table: name** of the table that holds it, or **Tables (N)** with a list when the note is outside all of them. It also works with a right click on a folder › **Make this folder a table**, or, for the whole folder, on the list's background › **Make the whole folder a table**. In a folder only on this computer the panel says why there is no table.
2. The **Table** window opens. Every note of the folder, the ones already there and the ones you make later, starts **hidden**, with a padlock in the list.
3. To go back: **Undo table** in the same window, or in the folder's menu. The files never changed.

A game master may have several tables, one folder each.

---

## Invite the players

In the **Table** window, **Invite players › Make link** makes a single-use link, good for 7 days, that gives **reading** of this table and only it: whoever accepts sees the table's folder and nothing above or beside it. **Copy the link** and send it.

On a UniVerso, someone with no account yet is invited by whoever runs the server, and also by a game master the admin gave the **creates folders** power, into the tables of her own folders: her invitation always reads (**reads**), she has at most **20 invitations waiting** at once, and the account made from it cannot create folders. If the admin takes **creates folders** away from her, her invitations still waiting end; whoever already accepted stays. Someone who has an account comes in through the folder's **Share…** ([Files and Folders](/en/wiki/files-and-folders/)). And someone who already has an account on this server, from another table, **accepts the link with the account they have**: on the invitation page, if already signed in, the button is **Join the table as** their name (**That is not me** signs out); if not, **I have an account — sign in and accept** asks for the e-mail and password right there. No second account is made, and an invitation made for an e-mail serves only that account.

**Table open** is a **switch** at the top of the window, with a **Open** or **Closed** badge, and it takes effect at once: there is no save button. Off, players cannot open the folder and whoever is inside leaves; you always can. **What a player sees:** in the folder's place, "The table is closed by the game master. You get in when it opens.", with **Try now**; the app tries again by itself now and then, and the player gets in as soon as you turn the switch on. For you, the Table button beside the folder's name says **Table (closed)** while it is off, so you never forget anyone outside.

A table you **took to the other server** (the computer or the UniVerso, see [A Table over the Internet](/en/wiki/a-table-over-the-internet/)) stays closed here for good: a player who opens it reads *The table moved to another server. The game master took this table to another server. Ask them for a new invitation.*, with no retry, and the switch does not reopen it. **Undoing** that old table takes out the players it had.

The window is made of cards: **Invite players** (the link in a field, with **Copy** and the day it expires), **Players** (a table, see [Who can do what: the players table](#who-can-do-what-the-players-table)), **Notes** (how many are released and how many hidden, with **Release everything** and **Hide everything**, which apply to the whole table) and, folded, the limits under **Advanced**. **Undo table** sits at the bottom, red and quiet, and asks first.

**On the folder's page** (the one that opens when you click the folder's name) the table becomes a thin line right under the title: **TABLE ● Open · 2 players · 3 online**, with **Access…** (the folder's access dialog), **Invite**, **Open the Table** and the gear of **Table settings**, which opens the whole window, where the **Table open** switch is. Below, the count: how many notes the players see and how many are yours alone. On a folder that is not a table yet, the line is just the **Make this folder a table** button. A player sees one line, **TABLE ● Open · 3 online**, and the **Join the Table** button.

---

## Release bit by bit

- Right-click a note, a board, a file or a folder › **Access…**. A list opens: the **Whole table** row and one row per player, each with a choice, **Does not see**, **Sees** or **Edits**. Hidden is the table's default: whoever is on **Does not see** does not know the note exists. On a note, each choice takes effect at once and the footer says **Saved ✓** with **Undo**; the **Whole table** row is the default for whoever joins later, and under each player's name is where their access comes from: **follows the table**, **follows the folder** or **own access**.
- The same dialog opens from the people icon in any file's title, and on a selection of several files (**Access for N files…**). In the **Table** window, each player's **Sees** or **Edits** number opens their list, with the same control on each file.
- **A folder** applies to everything inside it, files and subfolders. The folder's dialog has **Cancel** and **Apply** in its footer, and says **Changes N files** before you apply. To release or hide the whole table, choose **Whole table** as **Sees** or **Does not see** in the root folder's dialog and apply.
- **Exception:** after the folder is applied, a single file can have its own access, different from the folder's. The folder's dialog shows a line, **N files with own access · View**, which opens their list with a search; **↺ Follow** sends one file back to the folder's access, and **Follow the folder in all** sends them all back (it asks first). If you change the folder and there are exceptions, the dialog asks: **Keep** (the default) or **Follow the folder in all**. A file that comes into the folder from elsewhere keeps the access it had, and shows among the exceptions.
- In the tree, a small mark beside each file shows its state for you: the padlock for what is hidden from the table, the pencil for what some player edits.

So a player's **journal**, a **clue only one character got** or each player's **sheet** are just a note with **Sees** or **Edits** for them: there is no separate feature. Giving **Edits** to a player who did not see the note yet **adds** them to those who do, and the status line says so.

A hidden note does not exist for a player: it is in no list, and asking for it answers as asking for a note that never was. Images and files only show if a **released** note shows them. The `> [!secret]` blocks ([Dice and Random Tables](/en/wiki/dice-and-random-tables/)) still hide a piece of a released note.

---

## Who sees this note

Inside the note, beside the star, there is a **users icon with a number**: how many players see this note. Hover it (or tap it, or focus it with Tab and press Enter) to open the list: for you, **every player at the table**, with **Sees**, **Edits** or **Does not see** (the icon and the word, not only the colour) and a **Change access…** shortcut that opens the note's same dialog; for a player, only **who sees the note** ("You, Bruno and the game master" or "The whole table"), never your controls. **Esc** closes it and the focus goes back to the button; on a phone the list opens as a bottom sheet with a button to close it. The icon only shows on notes of a table that already has players.

---

## A link to a note that has not appeared yet

In a released note, `[[Baron]]` to a hidden note reaches the player as **Baron 🔒**: the text, no link, so they know something is there. With an alias, `[[The Baron's Betrayal|a rumour]]` becomes **a rumour 🔒**. An embed `![[Crypt]]` becomes "🔒 (not revealed yet)". The path, a section's title and a `^id` are never sent.

When the name is already a spoiler: right-click the hidden note › **Secret name**, and every link to it becomes ▒▒▒▒, always the same length. A **board** card for a hidden note also arrives as a locked card. Once the note is released, links work for everyone.

---

## Who edits

By default players only read what is on **Sees** for them. In the note's **Access…**, setting a player's row to **Edits** makes them one who edits it (their sheet, or a note of the whole table if the **Whole table** row is **Edits**). Whoever edits the note sees it, and reads it **whole**, with its secret blocks and links as you wrote them: if there is a secret in it, do not give it to anyone.

Whoever edits can **drag any roll or message** from the [Table](/en/wiki/the-table/)'s chat into the note, and the same on a board, where the card comes in as text. A player who edits a board edits it **live**, and sees only what they are allowed to: cards of files they do not see show locked.

Whoever edits a **folder** of the table edits everything they see inside it and **renames** what is in it; **creating** notes and boards depends on the rights below. Whoever edits a file also puts images into it. Nobody but you deletes or moves; the server checks this at every door (the window, the editing room, the synced device).

---

## Who can do what: the players table

The **Players** card is a **table**, one row per player, with columns for what each can do:

| Column | What it shows |
|---|---|
| **Player** | the avatar, the name and a green dot while they are at the table |
| **Sees** | how many notes are released to them; click the number to open the list, each note a link |
| **Edits** | how many notes they may edit (the ones you set to **Edits** in **Access…**); click to see which |
| **Rights** | how many of the four rights you gave them; click the number to open the **four switches** |

By default a player only reads and types text in the chat: the four rights start **off** and you turn them on, one player at a time, or with the **All players** boxes just under the table, one per right, which show "mixed" when the players differ:

| Right | What they can then do |
|---|---|
| **Images** | send an image to the [Table](/en/wiki/the-table/)'s chat |
| **Files** | send PDFs, audio and other files that are not images, to the chat and into a file they edit |
| **Creates notes** | create notes, bases and folders inside a folder they edit |
| **Creates boards** | create boards and drawings inside a folder they edit |

**Editing** a file already covers the rest, with no right at all: the player puts a **new image** into it (the server writes the file, with the usual checks) and **renames** it inside its folder. They never delete, and moving a file to another folder stays yours; a moved file keeps the access it had. Editing a **folder** without **Creates notes** or **Creates boards** is editing and renaming what is in it, not adding to it; when the player tries, the window says which right is missing ("The game master has not given you the right to create boards.").

Each switch saves at once and says **Saved** beside itself; a screen reader reads "Ana can create notes". On or off, the player's window learns it **at once**: the attach button, paste and drop appear or go, with no reload. The server writes the file, with the usual checks (the type by the bytes, never SVG, a page or a script, the table's size limit, the folder's quota); it makes no difference whether the player came in through a share or is a member of the folder. A new image put into a note or board she edits goes to an `assets` folder beside the file (made if missing; `assets 2`, `assets 3`… if the name is taken by something she does not see), and whoever sees the board or the note sees the image, and only those people. The chat keeps storing its images in the table's attachments folder. You, the folder's owner, can always do everything. On a phone each player is a slim row, and the rights open under it, no sideways scroll. All of it by keyboard: Tab, Space on a switch, Enter on a number.

---

## The table's limits

Under **Advanced: the table's limits** (folded; each field saves when you leave it or press Enter, and says **Saved** beside itself): how many entries the [Table](/en/wiki/the-table/)'s log keeps (1,000 to 200,000; 20,000 at first) and the size of a file on it — image, PDF or audio (1 to 30 MB; 10 at first). Past the log's limit, the oldest that are not pinned go. Each table has its own log and its own limits: setting one does not change the other.

---

Previous: [The Table](/en/wiki/the-table/) · Next: [Sound and Music at the Table](/en/wiki/sound-and-music-at-the-table/) · [Home Page](/en/wiki/welcome-to-verso/) · Verso Tour
