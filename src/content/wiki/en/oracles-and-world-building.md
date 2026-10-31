---
title: "Oracles and World Building"
description: "The oracle that writes the answer into the highlight; random tables; the new-project wizard with the tree in view; and each feature's switch in Settings."
order: 27
group: rpg
slug: "oracles-and-world-building"
twin: "oraculos-e-criacao-de-mundos"
source: "demo-vault-en/27 - Oracles and World Building.md"
updated: "2026-10-20"
---
Tools for game masters, solo players and people who build worlds — or just write fiction. All of it follows the principle of files: what the tools create is **plain Markdown** in your note, readable in any editor. Statblocks have their own note: [Statblocks](/en/wiki/statblocks/).

---

## 🎚️ Turning on and off: Settings › RPG & Solo Play › Dice and RPG

The RPG features have a page of their own, the first of the **RPG & Solo Play** group: **Dice and RPG**. Each tool is a feature with its own switch: **Dice**, **Random tables**, **Oracles**, **Statblocks** (the ones in [Statblocks](/en/wiki/statblocks/)) **World and campaign wizard** and **3D dice**. All of them come **on**, except 3D dice. The page has **Turn all on** and **Turn all off** links, and **Oracles** and **Statblocks** have a **Settings…** link to their own page. The shortcuts **Everything** and **Writing only**, in **Settings › Application › Features** (which also holds the **Data diagram** switch), turn them all on or off at once, the RPG ones too — first, Verso shows what will change, and you can cancel.

Turning one off changes no file: a statblock becomes a code block, an `[!oracle]` becomes an ordinary callout, as Obsidian shows them without the plugin. Turning it on again brings everything back. The choice is **yours**: a folder never turns a feature on or off for whoever opens it.

---

## 🔮 Oracle

For solo play, improvisation or a stuck scene. An `[!oracle]` callout is the question; the answer is **written in the note**:

> **Oracle: Did the guard patrol hear the noise of the break-in?**
>
> **Yes, but…** _(d100: 33, 50 / 50)_
> A rookie officer thinks it was just a cat knocking over crates.

**Try it.** Click **Ask Oracle**, in the header of the callout above. The window opens with the question already filled in:

1. In **Yes or No**, choose the **Odds** — *Nearly impossible*, *Unlikely*, *50 / 50*, *Likely* or *Nearly certain* — and click **Ask Oracle**. Verso rolls a d100 against the row for that chance and reads one of six answers (with **3D dice** on, the d100 falls on the screen and the answer shows when it rests): *Yes, and…*, *Yes*, *Yes, but…*, *No, but…*, *No* or *No, and…*.
2. Click **Save in callout**: an answer line goes into the callout.
3. Ask **the same question** again: the new answer goes **below** the previous one. Answers **pile up**.
4. Rewrite the question in the callout and ask: only the lines the **oracle** wrote are replaced. **What you wrote by hand is never erased** — the rookie officer's line, above, stays.

If the cursor is not in a callout, the button is called **Insert into note** and creates a new callout at the cursor — never inside a quote, table or code block. The window also opens from the editor's `/` (**Ask Oracle…**; **Oracle** inserts an empty callout) or from the palette (`⌘⇧P` › *Oracle (yes/no and sparks)…*).

The other tabs: **Idea Sparks** draws two pairs of words, *Action + Theme* and *Descriptor + Focus*, to unstick an idea; **Tables** draws from a built-in table or from a table in your notes.

### Tables are notes

A Markdown table or a list with a `^id` identifier can be drawn from, in any folder:

| d6 | Unexpected twist |
|:--:|---|
| 1 | A trusted ally reveals a secret debt |
| 2 | The weather turns into a violent storm or thick fog |
| 3 | A vital resource (key, map, supplies) has been stolen |
| 4 | An old clue points to a more urgent threat |
| 5 | A rival patrol arrives at the worst moment |
| 6 | Something supernatural changes the rules of the place |
^reviravolta

In the text, `dice: [[#^reviravolta]]` becomes a button that draws a row. All the tables in the folder also show up in the oracle's **Tables** tab — with the name of the note they come from. Each is named by the nearest heading above it (here, *Tables are notes*) or, with no heading, by its `^id`; two tables under the same heading get the `^id` after it.

### Tuning the oracle

In **Settings › RPG & Solo Play › Oracles & Solo RPG**, everything saves itself, with no save button:

- **Try the oracle** opens the window so you can test without saving anything.
- **Yes-or-no odds**: each bar shows how the d100 splits among the six answers, from *Yes, and…* to *No, and…*. Pick a **style** — *Balanced* (the default), *Likely twists* (inspired by Mythic GME, without its chaos factor), *Ironsworn* or *Narrative*, each with a sentence on what changes at the table — and it applies at once; **Undo** goes back to the previous one. In **Adjust by hand…** you change the numbers of each chance: the row says how much is missing or over (*3% missing*) and is saved only when it adds up to 100.
- **Idea sparks**: when off, the oracle uses Verso's words, **in the window's language**. Turn on **Use my own words** to edit the four lists: type a word and press Enter, or paste several separated by commas; the **×** removes one (the arrows move between them, Delete erases). **Back to Verso's words** undoes it.
- **Tables to draw from**: Verso's and those from your notes, with three sample options. **New table** writes a note with the list and the `^id` — you see the text first.

These settings stay **in the folder** and apply to everyone who opens it: if you share the folder, the other person sees the oracle the way you do. Where you can only read the folder, the page shows the values and says why they cannot be changed.

In a server room, it is the server that **draws**, and everyone in the room sees who asked.

---

## 🏰 New project from a template

Instead of creating folders and files one by one for a world, a campaign or a book, use the wizard:

1. In the sidebar's create menu, choose **New project from a template…** (or `⌘⇧P` › *New project from a template…*).
2. Give it a **name**, choose the **destination folder** and a **template**: *RPG Campaign (Dados Críticos)*, *World Building*, *Novel and Fiction Writing* or *Personal Organization (P.A.R.A.)*. Below, the preview lists the folders and files.
3. **Create structure** shows the complete tree — *Check what will be created* — **before writing anything**. Uncheck what you do not want (an unchecked folder takes what is inside it) or change a name, and confirm with **Create now**.
4. Nothing that already exists is overwritten: the report says what was created, what was already there and what was refused.

In the **AI Generator** tab, **Copy System Prompt for AI** copies the instructions to paste into Claude, ChatGPT or Gemini (Verso sends nothing anywhere). Paste back the JSON the AI returns and click **Validate & Import**: the template joins the list and is kept in the folder (`.verso/bundles/`), so it is there next time and whoever opens the folder has it too. If the JSON does not pass, **Copy fix prompt for AI** tells what is wrong.

---

## 🙏 Credits

**Settings › Application › Credits and acknowledgements** lists the people and works Verso builds on (such as Fractal, by Igor Téuri and Walter Licínio), the licence notices of the statblock layouts and the free software. **Open** takes you to each one's website in the browser.

---

Go back to the rolling rules in [Dice and Random Tables](/en/wiki/dice-and-random-tables/), see the statblocks in [Statblocks](/en/wiki/statblocks/), check the [Home Page](/en/wiki/welcome-to-verso/), see the data of any file as boxes in [Structured Data as a Diagram](/en/wiki/structured-data-as-a-diagram/), or explore the Verso Tour.
