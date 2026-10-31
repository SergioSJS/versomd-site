---
title: "Daily Notes, Calendar and Templates"
description: "Daily chronological log, monthly calendar navigation and note automation with templates."
order: 7
group: organize
slug: "daily-notes-calendar-and-templates"
twin: "notas-diarias-calendario-e-templates"
source: "demo-vault-en/07 - Daily Notes, Calendar and Templates.md"
updated: "2026-10-14"
---
One note per day — and per week, per month, per quarter and per year —, a calendar that shows the ones that exist, and templates that fill in new notes.

---

## Today's Note

- **`⌘⇧D`**, the **Today's note** button in the left ribbon, or **Today's note** in the command palette (`⌘⇧P`).
- The note is named `YYYY-MM-DD.md` and lives in the **Daily** folder — the default in **Settings › Periodic notes**.
- If the day's note does not exist yet, Verso creates it from the template with the same name as the folder — here, Templates/Daily — and puts the cursor at the end.

Notes in this vault: September 24 and September 25.

---

## The Week, the Month, the Quarter and the Year

Besides the day, each period has its own note, in the same **Daily** folder:

| Period | Command in the palette (`⌘⇧P`) | Note name on 10/14/2026 |
|---|---|---|
| Week | **This week's note** | `2026-W42.md` |
| Month | **This month's note** | `2026-10.md` |
| Quarter | **This quarter's note** | `2026-Q4.md` |
| Year | **This year's note** | `2026.md` |

- The week and the month come turned on; the quarter and the year are turned on in **Settings › Periodic notes**.
- The week's note is born from the Weekly template: `{{date}}` becomes the first day of the week, `{{date+6d:DD/MM}}` the last, and `{{sunday:DD/MM}}` … `{{saturday:DD/MM}}` each day of it by name. See week 39 of this vault.
- In a periodic note, **Previous periodic note** and **Next periodic note** (in the palette and in the tab's menu) jump to the neighbour that exists, skipping the weeks without a note.
- None of these commands has a shortcut: give one in **Settings › Hotkeys**. `⌘⇧D` is still the one for the day.
- The formats are Moment.js's, as in Obsidian: `gggg-[W]ww` counts the week starting on Sunday (the day the week starts on is a setting of the folder), `GGGG-[W]WW` is the ISO week. A `/` in the format creates folders.
- These settings live in the folder itself (`.verso/settings.json`): whoever opens the folder, on another computer or on the server, finds the same notes. If the folder has Obsidian's daily-note settings, Settings offers **Use Obsidian's settings**.

---

## The Calendar

Open the right panel (`⌘⌥→`) and choose the **Calendar** tab:

- A dot under the number marks the days that have a note in the **Daily** folder — go back to **September 2026** with **Previous** to see this vault's two days.
- A click on a day opens that day's note, or creates it.
- **Today** goes back to the current month.
- The **Wk** column numbers the weeks: a click opens that week's note, or creates it. Go back to September 2026 and see week 39 marked.
- The month's name, at the top, opens the month's note; the year, the year's (when turned on).
- By keyboard: `←` on the first day of a week reaches its number; `→` goes back to the days.

---

## Templates

A template is any note in the **Templates** folder (**Settings › Files and links › Templates folder**). The ones in this vault:

- Daily: the model for daily notes — focus, tasks, ideas and reflection.
- Weekly: the model for the week's notes — goals, the seven days and the review.
- Meeting Note: agenda, attendees, decisions and next steps.
- New Project: project properties, scope and schedule.

When used, a template swaps `{{date}}` for today's date (`YYYY-MM-DD`) and `{{title}}` for the note's name.

### Start a new note from a template

A new note (`⌘N`, or **New note** in the tree) shows **Start with** right below the title: **Blank** and each template in the folder. Click one — or get there with `Tab`, move with the arrows and press `Enter` — and the template's text becomes the note's. **Blank**, `Esc` or starting to type puts the list away. In a folder whose note defines `items_template`, the new note is born from that template.

### Insert a template into a note

1. On an empty line, type `/` and choose **Insert template…** (or use **Insert template…** in the palette, or the button in the left ribbon).
2. Choose the template: the text goes in where the cursor is.

### Turn a note into a template

In the palette (`⌘⇧P`), **Save this note as a template** copies the open note to the **Templates** folder.

---

Go on to [Mermaid Diagrams](/en/wiki/mermaid-diagrams/) or go back to the [Home Page](/en/wiki/welcome-to-verso/).
