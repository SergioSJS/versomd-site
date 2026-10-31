---
title: "Running a Table"
description: "A campaign folder on a UniVerso: inviting the players, notes hidden until you release them, links to what has not appeared yet drawn with a padlock, who edits what, and the table's limits."
order: 32
group: rpg
slug: "running-a-table"
twin: "rodando-uma-mesa"
source: "demo-vault-en/32 - Running a Table.md"
updated: "2026-10-22"
---
A **table** is a campaign folder on a UniVerso (Verso on a server of your own, [Verso on a Server](/en/wiki/verso-on-a-server/)): you, the game master, invite the players to it alone, and each note stays **hidden** until you release it. None of this is written in the notes: what is released, which names are secret and who may edit is kept in the server's database, so a synced file, or one opened in Obsidian, is an ordinary note.

Only the folder's owner does this, on a folder of a server or on a folder of this computer **synced** with one ([Verso on a Server](/en/wiki/verso-on-a-server/)): the game master can run the session from the desktop app, with the local folder, while the players use the browser or the Windows app on the server's folder. With no connection (or with sync paused) the table is unavailable and the **Table** panel says so; it comes back by itself when the connection does. On a folder of this computer alone there is no table, and none of this shows.

---

## Make the folder a table

1. With the folder open, the **Table** panel has the **Make this folder a table** button (only for the owner of a server's folder that is not a table yet); after it, **Open the Table window**. The same open folder can hold as many tables as you like, one per subfolder, **and each table has its own conversation** (the **Table** panel follows the open note and says *Table: name*, see [The Table](/en/wiki/the-table/)): every folder that is a table gets a **Table** badge in the list, which for the owner opens *that* table's window; players see the **Table · player** badge, which shows what they can do there (read the released notes and edit the ones granted to them in that table, as links) and has no settings. The button beside the folder's name follows the open note: **Table: name** of the table that holds it, or **Tables (N)** with a list when the note is outside all of them. It also works with a right click on a folder › **Make this folder a table**, or, for the whole folder, on the list's background › **Make the whole folder a table**. In a folder only on this computer the panel says why there is no table.
2. The **Table** window opens. Every note of the folder, the ones already there and the ones you make later, starts **hidden**, with a padlock in the list.
3. To go back: **Undo table** in the same window, or in the folder's menu. The files never changed.

A game master may have several tables, one folder each.

---

## Invite the players

In the **Table** window, **Invite players › Make link** makes a single-use link, good for 7 days, that gives **reading** of this table and only it: whoever accepts sees the table's folder and nothing above or beside it. **Copy the link** and send it.

Only whoever runs the server invites someone with no account yet; someone who has one comes in through the folder's **Share…** ([Files and Folders](/en/wiki/files-and-folders/)). And someone who already has an account on this server, from another table, **accepts the link with the account they have**: on the invitation page, if already signed in, the button is **Join the table as** their name (**That is not me** signs out); if not, **I have an account — sign in and accept** asks for the e-mail and password right there. No second account is made, and an invitation made for an e-mail serves only that account.

**Table open** is a **switch** at the top of the window, with a **Open** or **Closed** badge, and it takes effect at once: there is no save button. Off, players cannot open the folder and whoever is inside leaves; you always can. **What a player sees:** in the folder's place, "The table is closed by the game master. You get in when it opens.", with **Try now**; the app tries again by itself now and then, and the player gets in as soon as you turn the switch on. For you, the Table button beside the folder's name says **Table (closed)** while it is off, so you never forget anyone outside.

The window is made of cards: **Invite players** (the link in a field, with **Copy** and the day it expires), **Players** (a table, see [Who can do what: the players table](#who-can-do-what-the-players-table)), **Notes** (how many are released and how many hidden, with **Release everything** and **Hide everything**) and, folded, the limits under **Advanced**. **Undo table** sits at the bottom, red and quiet, and asks first.

**On the folder's page** (the one that opens when you click the folder's name) the same fits in a **Table** card right under the title: the switch, how many players there are and who is at the table now, **Invite**, **Release everything** / **Hide everything** and **Table settings**, which opens the whole window; you can fold the card away, and the app remembers it per folder. On a folder that is not a table yet, the card is just the **Make this folder a table** button. A player sees one line, **Table · player**, with the table open or closed and the notes granted to them, as links.

---

## Release bit by bit

- Right-click a note › **Release to…**: **The whole table**, or one or more players (tick as many as you like: the menu stays open), or **Nobody (hidden)**. The note shows in the list of those you chose, in searches, in the graph, in links and in boards; it syncs to their device. Whoever was not chosen does not see it: it is as if it did not exist.
- **Nobody (hidden)** takes it back (the device is told to let it go). Taking a player off a note they already saw tells their device to let it go too, and the others' hear nothing.
- On a folder of the table: **Release everything here** and **Hide everything here** (always the whole table). With several notes selected, the same in the selection's menu. In the **Table** window: **Release everything**.

So a player's **journal**, a **clue only one character got** or each player's **sheet** are just a note released to one player (and, if it is theirs to write, handed to them in **Editable by**): there is no separate feature. Handing editing to a player who did not see the note **adds** them to those who do, and the status line says so.

A hidden note does not exist for a player: it is in no list, and asking for it answers as asking for a note that never was. Images and files only show if a **released** note shows them. The `> [!secret]` blocks ([Dice and Random Tables](/en/wiki/dice-and-random-tables/)) still hide a piece of a released note.

---

## Who sees this note

Inside the note, beside the star, there is a **users icon with a number**: how many players see this note. Hover it (or tap it, or focus it with Tab and press Enter) to open the list: for you, **every player at the table**, with **sees**, **edits** or **does not see** (the icon and the word, not only the colour) and a **Change who sees…** shortcut that opens the same **Release to…** menu; for a player, only **who sees the note** ("You, Bruno and the game master" or "The whole table"), never your controls. **Esc** closes it and the focus goes back to the button; on a phone the list opens as a bottom sheet with a button to close it. The icon only shows on notes of a table that already has players.

---

## A link to a note that has not appeared yet

In a released note, `[[Baron]]` to a hidden note reaches the player as **Baron 🔒**: the text, no link, so they know something is there. With an alias, `[[The Baron's Betrayal|a rumour]]` becomes **a rumour 🔒**. An embed `![[Crypt]]` becomes "🔒 (not revealed yet)". The path, a section's title and a `^id` are never sent.

When the name is already a spoiler: right-click the hidden note › **Secret name**, and every link to it becomes ▒▒▒▒, always the same length. A **board** card for a hidden note also arrives as a locked card. Once the note is released, links work for everyone.

---

## Who edits

By default players only read. Right-click a note › **Editable by** picks **nobody**, **the group** (every player edits: the group's note) or **one player** (their sheet). The player who edits the note sees it too (they join those who see it; **the group** makes it a note of the whole table), and whoever edits it reads it **whole**, with its secret blocks and links as you wrote them: if there is a secret in it, do not give it to anyone.

Whoever edits a file renames it inside its folder and puts images into it; creating notes and boards depends on the rights below; nobody but you deletes or moves files. The server checks this at every door (the window, the editing room, the synced device).

---

## Who can do what: the players table

The **Players** card is a **table**, one row per player, with columns for what each can do:

| Column | What it shows |
|---|---|
| **Player** | the avatar, the name and a green dot while they are at the table |
| **Sees** | how many notes are released to them; click the number to open the list, each note a link |
| **Edits** | how many notes they may edit (given in **Editable by**); click to see which |
| **Rights** | how many of the four rights you gave them; click the number to open the **four switches** |

By default a player only reads and types text in the chat: the four rights start **off** and you turn them on, one player at a time, or with each right's **Everyone** box just under the table, which shows "mixed" when the players differ:

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

Under **Advanced: the table's limits** (folded; each field saves when you leave it or press Enter, and says **Saved** beside itself): how many entries the [Table](/en/wiki/the-table/)'s log keeps (1,000 to 200,000; 20,000 at first) and the size of an image on it (1 to 30 MB; 10 at first). Past the log's limit, the oldest that are not pinned go. Each table has its own log and its own limits: setting one does not change the other.

---

Go on to [Open a Single File](/en/wiki/open-a-single-file/), go back to [The Table](/en/wiki/the-table/), see the [Home Page](/en/wiki/welcome-to-verso/) or explore the Verso Tour.
