---
title: "Bases and Data Views"
description: "How `.base` files work and how to embed live views in your notes."
order: 4
group: organize
slug: "bases-and-data-views"
twin: "visualizacao-de-bases-e-dados"
source: "demo-vault-en/04 - Bases and Data Views.md"
updated: "2026-09-25"
---
A **base** — a `.base` file, the same format as Obsidian's — shows notes as a living spreadsheet: each note is a row, and its properties become columns. Open this vault's Projects: it gathers the notes in the `projects/` folder.

---

## 📊 A Base Inside the Note

The **All Projects** view of the base, embedded here with `![[Projects.base#All Projects]]`:

*Projects*

It is not only for looking: its menus — **Sort**, **Filter**, **Properties**, **View settings** — write to this very `Projects.base`, just as the base's tab would. If the base changed somewhere else in the meantime, nothing is written over it: the view warns you and shows the file as it is.

---

## The Six Views

A base can have several views; switch views with the menu at the top of it.

1. **Table**: rows and columns. Click a header to sort; the header menu has **Summarize: Sum**, **Summarize: Average** and others, which total the column in a summary row.
2. **Cards**: one card per note.
3. **List**: compact, for quick reading.
4. **Kanban**: columns by a property (here, `status`). Drag a card to another column and Verso writes the new value into the note.
5. **Calendar**: each note on the day of its date property (here, `date`). The projects are from September 2026: go back there with the **‹** arrow. Drag a note to another day and the date changes in the note; the **+** on a day creates a note on it.
6. **Map**: each note with coordinates becomes a marker (here, the projects' `location` property — São Paulo, Lisbon, Recife). See below.

---

## The Base Bar

- **Sort**, **Filter**, **Properties** (the columns that show), **View settings** and **Search this view**.
- **New**: creates a note that already belongs to the base.
- **More**: **Copy as Markdown table**, **Copy as CSV** and **Save as Markdown note**.
- In the tab's corner, **View** and **Source** switch between the base and its text.

---

## 🗺️ The Map

The base's **Map** view, embedded:

*Projects*

- The coordinates come from a property: a `"lat, lng"` text (`location: "-23.5505, -46.6333"`) or a list of two numbers. In **View settings**, choose that property, the markers' icon and color, the zoom and the height inside the note.
- Click a marker and the note opens; hover over it and it shows up in a preview.
- Below the map, the same places in a list, in the view's order: it is how the keyboard and the screen reader reach each place.
- Right-click on the map: **Copy coordinates**, **Make this the view's centre** and **Make this the view's zoom**.
- **No network by default**: the map draws the outline of the world that ships with Verso (Natural Earth, public domain). A detailed background only by your choice, in **Settings › General › Maps' background** — OpenFreeMap is there by name, off until you turn it on. A base that asks for its own background (`mapTiles`) asks before fetching anything: the tile server learns which places you look at.
- The format is that of Obsidian's **Maps** plugin: the same base opens as a map in both.

---

## 🔎 Regular Expressions in Formulas

A formula can use a regular expression, as in Obsidian: `/pattern/flags`. The **Month** column of the table above comes from this one:

```
date.toString().replace(/^(\d{4})-(\d{2})-\d{2}$/, "$2/$1")
```

- `text.replace(/x/, "y")` replaces the first occurrence; with `g`, all of them. `$1`, `$2` repeat what each parenthesis caught.
- `/abc/.matches(text)` tells whether there is a match; `text.split(/,\s*/)` splits the text.
- The flags `i` (case-insensitive), `m`, `s` and `u` work as in JavaScript.
- `html("<b>Heads up</b>")` shows HTML in the cell, cleaned like a note's HTML: no scripts, and web images only with **Load remote content** on.
- Verso evaluates in linear time: no expression can hang the base, not even on a server. That is why there is no *lookahead*, *lookbehind* (`(?<=…)`) or group reference (`\1`): an expression that uses one of them shows a warning that says which, instead of an invented result.

---

## Inside the File

The code of `Projects.base` (see it under **Source**):

```yaml
filters:
  and:
    - file.inFolder("projects")   # only the notes in this folder
formulas:
  budget_k: "(budget / 1000).toFixed(1)"   # a calculated column
  mes: 'date.toString().replace(/^(\d{4})-(\d{2})-\d{2}$/, "$2/$1")'   # a regular expression
properties:
  formula.budget_k:
    displayName: Budget (k)   # the name the column shows
views:
  - type: table
    name: All Projects
    sort:
      - property: date
        direction: DESC
    summaries:
      budget: Sum   # the summary row
  - type: kanban
    name: By Status
    groupBy: status
  - type: calendar
    name: Calendar
    startDate: date
  - type: map
    name: Map
    coordinates: note.location   # the property with the coordinates
```

> **Warning: Without a filter, the base lists everything**
>
> A base without `filters` shows **all** the files in the open folder. Filter by folder (`file.inFolder("x")`), by tag (`file.hasTag("x")`) or by link (`file.hasLink("Note")`), and combine with `and` and `or`.

---

## A Base in the Middle of a Note

In the command palette (`⌘⇧P`), **Insert base** writes a `base` block into the note. This one lists the daily notes, with each day's focus; the `</>` button shows the code:

```base
filters:
  and:
    - file.inFolder("Daily")
views:
  - type: table
    name: Daily notes
    order:
      - file.name
      - main_focus
```

---

## How to Create a Base

- In the left ribbon, the **New note** button (`+`) opens the **New** menu: choose **New base**.
- Right-click on a folder, or on the empty space of the file tree: **New base**.
- In the command palette (`⌘⇧P`): **New base**.

Explore this vault's project notes:
- Project Alpha
- Project Beta
- Research and Findings

Go back to [Start](/en/wiki/welcome-to-verso/) or go on to [Graph View and Connections](/en/wiki/graph-view-and-connections/).
