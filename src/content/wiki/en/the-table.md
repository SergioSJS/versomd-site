---
title: "The Table"
description: "One log of every roll, table roll and oracle question, with who made it and from which note, in the right panel; other people's rolls arrive with their names."
order: 31
group: rpg
slug: "the-table"
twin: "a-mesa"
source: "demo-vault-en/31 - The Table.md"
updated: "2026-10-22"
---
In a game nobody rolls inside a single note: the game master rolls from a monster's statblock, a player from their character, someone asks the oracle from the session note. The **Table** puts it all in one place: **one log** of every roll, random-table roll and oracle question, with who made it, when and from which note. It lives in the **right panel**, beside Outline and Links, and nothing is written to any file because of it, except an image you send yourself.

---

## Seeing the Table

1. Open the right panel (**Show right panel**, or **Panel** on the phone's bottom bar) and choose the **Table** tab.
2. Roll any die: `dice: 1d20+5`, `dice: 2d6`, or the palette's **Roll dice…**.
3. The line appears at the end of the list: **You**, the time, the note it came from (a link: a click opens the note), the notation, each die as a small square and the **total**.

Roll from a random table — `dice: [[25 - Dice and Random Tables#^encontros]]` — and the line shows the row that came out. A question to the oracle gets its line too, with the answer.

The log scrolls to the newest roll on its own, unless you scrolled up to read older ones; then **Jump to the end** appears. Each person's dice are drawn **in their colours** when the server tells them.

---

## Composing a roll

Right under the message field is the **dice tray**: a single row of small buttons, like the Dice Tray module of Foundry. It puts a roll together without typing — and writes it **into the message field itself**:

On a phone the Table opens as a sheet that fills almost the whole screen, and the dice row sits behind the **Dice** button in the message field's row: tap it to open or close the row, and the device remembers your choice.

1. **Click a die** — d4, d6, d8, d10, d12 or d20 — and the field holds `/r 1d6`; one more click on the d6 and one on the d20 give `/r 2d6+1d20`. A small badge on the die says how many of it are in the roll. Clicking **does not roll**. The other dice (d2, d3, d66, d100 and dF) are behind the **⋯** button.
2. **Right click** a die to take one off (from the keyboard: `Shift+Enter`, `Delete` or `Backspace` on the die; on a phone, hold your finger on it). `Enter` on a die adds one.
3. The small **number** field (the `0`) is the modifier: type, use the `↑` `↓` arrows or the mouse wheel, from −99 to +99 (`/r 2d6+1d20+2`).
4. **KH** and **KL** are advantage and disadvantage, as in Foundry: over `/r 1d20`, **KH** gives `/r 2d20kh1` (two dice, keep the highest) and **KL** gives `/r 2d20kl1` (keep the lowest). The same button again undoes it; the other switches. The lit button is the one in force.
5. Press **Send** (or `Enter` in the field): the roll goes to the log — rolled by the server in a UniVerso, with the 3D dice and the sound, the **Secret** mode respected. With no server your window rolls and the log keeps it.

The **message field** is editable, and it is what counts: type `/r 4d6kh3` and the badges follow what the buttons know how to show; what they do not (keep 3 of 4, re-roll) stays as you typed it, and a die clicked afterwards starts the roll again from it. What Verso cannot read is said right under the field, and nothing is rolled. Emptying the field clears the roll.

The field is big and has several lines: `Shift+Enter` breaks the line, `Enter` sends, and the breaks show in the log for everyone. A `/r` roll is its first line.

### Saved rolls

The row's **bookmark** opens the **Saved rolls**: every line of a note that holds a `dice:` code becomes a button. The note is an ordinary note of the folder — your sheet, or a `Rolls.md` — and it follows you to any device. An example list (pick **this note** with **Choose note…** and the three show up as buttons):

- Bia's attack: `dice: 1d20+7`
- Sword damage: `dice: 1d8+4`
- Initiative: `dice: 1d20+2`

1. The button's name is the line's text without the list marker and the trailing colon; a line with only the code carries the notation as its name.
2. **Clicking a button does not roll:** it writes `/r` and the notation in the field, and you add a modifier (the number field) and press the dice button.
3. In a UniVerso, a player finds by itself the note **granted to that person alone** (the sheet); the game master can leave ready rolls in it. Otherwise, **Choose note…** (or **Note: …**, to change it) opens the note picker; the choice is kept in this browser, per folder.
4. **Save**: put a roll together, give it a name and press **Save** — the line `` - Name: `dice: …` `` is added to the note (at the end of the *Rolls* section, if it has one). Someone who only reads the note does not see the button. The list follows the note when it changes.

---

## Other people's rolls

In a shared note of a UniVerso, when someone else rolls, the roll arrives with **their name** and enters the Table, and a screen reader hears "Ana rolled: 1d20+3: 17". With the panel closed, the button that opens it (and the **Table** tab) shows **how many new** lines arrived. The rolls the note already held when you came in appear too, without counting as new.

With **3D dice** on, other people's rolls also fall in 3D on your screen. To keep only your own, turn off **Show others' rolls in 3D** in **Settings › RPG & Solo Play › Dice and RPG**.

**Table sound.** When someone else sends a **message** (or a roll that does not fall in 3D) at the Table, the window plays a short sound — never for what **you** send, and not while you are writing in the Table's box. In **Settings › Notifications** pick **Table sound** (Soft, Bell, Pop or Off; it starts on Soft) and the **volume**; choosing plays it once so you can hear it. The dice have their own sound, switched on separately. If the browser has not yet allowed audio (it does so only after you touch the page), the sound stays silent instead of playing late.

In a folder that is **not** a UniVerso's (only on your computer), the Table shows your rolls and the ones you hear in shared notes **this session**, and says it is neither shared nor kept. In a UniVerso folder it is **everyone's table**: see below.

---

## Everyone's table, on a UniVerso

Everyone who has the same UniVerso folder open and works at the same table is **in the same conversation**. The top of the panel shows **who is there now**, each person in their cursor's colour. Everyone's rolls enter here, rolled **once**, by the server, with its name and its time, and the log is **kept** on the server with no expiry: whoever joins later sees what happened.

### One conversation per table

A folder can have **several tables** (one per subfolder, see [Running a Table](/en/wiki/running-a-table/)), and **each table has its own conversation**: the log, the messages, the images, the pinned ones and who is there. The panel follows the **open note**: its top says **Table: Cripta** when you are in a note of the Cripta table, and you see only that table's conversation. Open a note of the Sala table and the panel moves to **Table: Sala** (you leave one and join the other). A roll made in a note goes to the log of **that note's** table.

With a note outside every table (or none open) the panel lists the tables for you to choose from, and remembers the last one chosen in this folder; the button beside the table's name (**Switch table**) picks another at any time. A folder with no table keeps the one conversation it always had.

### At the foot of the panel

At the foot of the panel is the **Write to the table…** field:

- **Messages.** Type and press **Enter** (Shift+Enter breaks the line). Plain text, up to **500 characters**; a counter shows near the limit. A `[[link]]` to a note of the folder is a link.
- **Rolling.** Type `/r 1d20+3` (or `/roll 4d6kh3`) and the server rolls, for everyone to see — or put the roll together in the dice row right below, as above.
- **Secret.** In the box's toolbar, the **Public / Secret** menu (Foundry's and Roll20's roll mode: who sees the roll) set to **Secret** makes the roll yours and the **folder's owners'**: the others read "Ana rolled in secret", with no notation and no number.
- **Images.** **Paste** straight into the field: copy an image or take a screenshot and press `Ctrl+V` / `⌘V`, or right click › **Paste**, or, on a phone, hold your finger on the field › **Paste**; dropping an image on the panel works too, and the paperclip in the field picks from the gallery. The image waits in the field as a thumbnail with an **×** to take it out; `Enter` sends it (the image first, then the text, if any). It takes a **PNG, JPEG, WebP or GIF** (up to 10 MB; a GIF stays animated in the log). The image becomes **a file of the folder** (in the attachments place), shows as a thumbnail and opens large on a click. Someone without **Images** in the Table window sends no images; PDFs and audio need **Files**.

Every line has a **⋯** button:

- **Pin** puts the line in a **Pinned** list at the top, for everyone, until someone chooses **Unpin**.
- **Delete** removes a message or an image: its author deletes their own, an owner any. A **roll** is deleted only by the **game master** (an owner of the folder); a player cannot, so nobody re-rolls and hides the first one.
- **Add to note…** works for messages and images too (an image goes in as an embed of its file).

An owner also has **⋯ › Clear the table**: it asks first, with **Keep the pinned entries** ticked, and empties the table for everyone. And **See earlier** brings older lines, a page at a time.

In **Settings › Notifications**, the **Table** kind tells you of a message or a roll by someone else while the panel is closed; it starts **off**.

---

## Taking a roll into a note

**Drag** the line of a roll, a random-table roll or an oracle draw from the Table panel and **drop it on a note's text** (in Edit mode or in Source): a line shows where it will land, and the block goes in with a blank line each side, **in one step** that **⌘Z** undoes. Drop it on a **board** and it becomes a text card. Messages and images are not dragged: use the **⋯** (see below).

In the note it is written as a small `roll` block, text anyone can read, even in Obsidian:

````
```roll
who: Ana · when: 2026-10-22 21:40 · where: [The Table](/en/wiki/the-table/)
2d6 + 1d4 + 3 → [4, 3] + [2] + 3 = 12
```
````

Verso draws it as a **fixed card** — who, when, where (a link), the dice and the total — and it **never rolls again**: it is the record of what came out, like the game master's notebook.

```roll
who: Ana · when: 2026-10-22 21:40 · where: [[31 - The Table]]
2d6 + 1d4 + 3 → [4, 3] + [2] + 3 = 12
```

In **Source** you see the text; a block with a typo stays the code it is. Each line of the Table also has **⋯ › Add to note…**, the way by keyboard, by screen reader and by phone.

---

## Hiding and keeping

- **Hide up to here** hides, in this window only, everything on the Table now. **Show it again** undoes it.
- **Add to note…**, in each line's **⋯**, picks a note, **shows what will be written** (the `roll` block, or a message's line) and, if you confirm, appends it to its end. If the note changed meanwhile, nothing is written.

---

## Turning it off

In **Settings › RPG & Solo Play › Dice and RPG**, the **Table** switch removes the tab and the button (it also needs **Dice** on). Rolls in notes work as they always did.

---

Go back to [Colour Swatches](/en/wiki/colour-swatches/), continue to [Running a Table](/en/wiki/running-a-table/), see the [Home Page](/en/wiki/welcome-to-verso/) or explore the Verso Tour.
