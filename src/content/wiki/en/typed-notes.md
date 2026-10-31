---
title: "Typed Notes"
description: "`type:` and a schema: a type's form, what doesn't fit marked, nothing written without you, and `type:` in search."
order: 21
group: organize
slug: "typed-notes"
twin: "notas-tipadas"
source: "demo-vault-en/21 - Typed Notes.md"
updated: "2026-10-07"
---
A **typed note** is an ordinary note with `type:` in the frontmatter. When that name is the name of a **schema** in the folder, the properties panel turns into a form: the properties the type declares come first, with the right name and the right field for each one. The file stays plain Markdown — Obsidian reads the note as a note with properties.

---

## The Schema

A schema is a `verso-schema` code block in any note of the folder, like Character:

````markdown
```verso-schema
type: character
label: { pt-BR: Personagem, en: Character }
properties:
  - key: level
    kind: number
    label: { pt-BR: Nível, en: Level }
```
````

- `type` is the name notes write in their `type:` (capitalization does not matter).
- `label` is the type's name in each interface language.
- `properties` lists the properties, each with `key`, `kind` and `label`. The kinds: `text`, `list`, `number`, `checkbox`, `date`, `datetime`, `link` and `image`.
- `layout: infobox`, optional, draws the properties as a card beside the text (see **The Infobox**, below).

Nothing in a schema runs: there is no formula, query or computed value. Only a block at the top of the note counts — a block inside a list or quote is an example, and the note says so.

---

## What Verso Does

Open Lia Torres and Captain Ruy:

- Above the properties, **Type: Character** and a shortcut to the schema.
- The declared properties come first, in the schema's order, with the label in the window's language; a date gets a date picker, a checkbox becomes a box.
- A value that does not fit the type — `level: high` — shows up **as written, underlined**. Nothing converts it.
- A declared property the note does not have is an empty row: **nothing is written until you give it a value**.
- The note's other keys come after.

What Verso **never** does: write on open, add keys by itself, reorder or normalize values, or rewrite notes when the schema changes.

---

## The Infobox

Open Gray Harbor. The Place schema says `layout: infobox`, and the properties become a **card to the right of the text**, like a wiki's — in Reading and in Edit mode:

- At the top, the type's first `image` property: the harbor map. The image's alt text is the link's alias — `"[[porto-cinzento.svg|Gray Harbor seen from the lighthouse]]"` —, otherwise the note's title.
- Below, the type, and the declared properties in the schema's order.
- The note's other keys (here, `weather`) are folded into **Other properties**.
- **Inhabitants** is of the `link` kind: each quoted link shows up as a link — click to follow it. The **Add a link…** field offers the notes in the folder, like `[[` does.

It is the same properties panel with another arrangement: editing on the card is editing the frontmatter, on the same lines, and opening the note writes nothing. In a narrow pane or on the phone, the card goes above the text, showing the image and the first three properties; **Show every property** opens the rest.

An image can be a link to an image in the folder, a path (`assets/mapa.png`, as in `banner:`) or a web address. **A web address only shows if the origin has been approved** — like an embedded page ([Web Pages and HTML](/en/wiki/web-pages-and-html/)); otherwise the card shows the address as text, the reason and the **Approve** button.

In Obsidian, the note shows the same properties the Obsidian way: nothing in the file is Verso's.

---

## When Something Does Not Match

- **A `type` that no schema names** leaves the note as ordinary Markdown — your folder may use `type:` for something else.
- **Two schemas with the same name** (for example, a *Duplicate*): neither applies, and notes of the type say which two they are, until one is left.
- **A schema that cannot be read** (an unknown `kind`, broken YAML) types nothing and warns in the note itself and in the notes of the type.

---

## Search and Agents

- In search, `type:character` lists the notes of the type — together with `tag:`, `path:` and the words.
- An agent through MCP ([Terminal, CLI and Agents](/en/wiki/terminal-cli-and-agents/)) receives each note's type and declared properties, and lists the notes of a type.

---

## To Practice

1. In Captain Ruy, swap `high` for a number in the **Level** field and watch the mark go away.
2. Fill in **First appearance** and watch the line enter at the end of the frontmatter (**Source** mode).
3. In Character, add a property to the schema — `- key: facção`, `kind: text` — and go back to the notes: the new row appears empty in both, and no file changed.
4. Search `type:character`.
5. In Gray Harbor, in the **Add a link…** field of **Inhabitants**, pick a note and press Enter: the link goes into the frontmatter, in quotes. Click an inhabitant to go to their note.
6. Make the window narrow (or split the pane with ⌘\\): the card goes above the text, folded.

---

Next: [Verso on Phone and Tablet](/en/wiki/verso-on-phone-and-tablet/) — Verso with a finger instead of the mouse.

Go back to the [Home Page](/en/wiki/welcome-to-verso/) or open the Verso Tour.
