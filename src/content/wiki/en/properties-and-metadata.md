---
title: "Properties and Metadata"
description: "How to use YAML frontmatter with the collapsible properties panel."
order: 3
group: start
slug: "properties-and-metadata"
twin: "propriedades-e-metadados"
source: "demo-vault-en/03 - Properties and Metadata.md"
updated: "2026-09-25"
---
Verso recognizes metadata written in YAML at the top of the file (the so-called *frontmatter*) and shows it in an elegant, editable **Properties panel** right above the note's title.

---

## 🗂️ The Collapsible Properties Panel

Look at the properties table at the top of this note:

1. **Collapse and expand**: click **Properties**, at the top of the panel, to collapse or expand the list. Verso remembers your choice.
2. **Editing in place**: click a value to change a text or a number, tick and untick a checkbox, and add or remove items from a list (like the tags). A date is written as text, in the `YYYY-MM-DD` format.
3. **New property**: the **Add property** button creates a new row in the panel.
4. **Clean persistence**: what you change in the panel is written to the note's YAML block, without touching the rest of the text. To edit the YAML directly, use **Source** mode.

---

## Supported Property Types

| Type | Example in YAML | How it renders in the interface |
| :--- | :--- | :--- |
| **Text** | `reviewer: "Sérgio"` | Editable text field |
| **Number** | `estimated_hours: 12` | Numeric field |
| **Date** | `date: 2026-09-25` | Text, in the `YYYY-MM-DD` format (bases read it as a date) |
| **Checkbox** | `done: false` | Checkbox you tick with a click |
| **List** | `tags: [frontmatter, yaml]` | One pill per item, each with a button to remove it |
| **Address** | `reference_url: https://versomd.com` | Text with a ↗ that opens the address |
| **Link to a note** | `related: "[[Project Alpha]]"` | A real link: it counts in the backlinks and follows renames |

---

## Integration with Bases

The properties defined here are read automatically by **Verso's Bases** (`.base`), letting you filter, sort and group your notes in dynamic tables and Kanban boards, as shown in [Bases and Data Views](/en/wiki/bases-and-data-views/).

A property whose value is a wikilink **in quotes** (or a list of them) links the two notes: that is the **typed relation**, which a board also creates — see [Board and Relations](/en/wiki/board-and-relations/).

With `type:` and a **schema** for the type, the properties become a form: the declared ones come first, with the right label and field — see [Typed Notes](/en/wiki/typed-notes/).

Go back to [Start](/en/wiki/welcome-to-verso/) or go on to [Bases and Data Views](/en/wiki/bases-and-data-views/).
