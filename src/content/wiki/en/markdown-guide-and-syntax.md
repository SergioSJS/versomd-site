---
title: "Markdown Guide and Syntax"
description: "Collapsible headings, code blocks with a copy button, KaTeX math formulas, tables with resizable columns and hierarchical lists."
order: 1
group: start
slug: "markdown-guide-and-syntax"
twin: "guia-de-markdown-e-sintaxe"
source: "demo-vault-en/01 - Markdown Guide and Syntax.md"
updated: "2026-09-25"
---
This document demonstrates the visual and editing elements of Markdown supported by Verso, including code blocks with quick copy, math formulas, resizable tables and collapsible elements.

---

## Headings and Section Folding

Hover over the left margin, next to the headings below, and click the arrow to collapse or expand the section. In the palette (`⌘⇧P`), **Collapse all sections** and **Expand all sections** do this for the whole note. Verso remembers what you collapsed when the note is closed and opened again (on this computer, without touching the file), and clicking a heading in the **Outline** of the right sidebar expands the sections that hide it.

### H3 Subheading: Section Example
This section can be collapsed using the arrow in the left margin. The content below stays hidden until the section is expanded again.

#### H4 Subheading: Inner Details
Detailed supporting text to test the visual hierarchy.

---

## Text Formatting

You can format text with Markdown syntax or with the formatting bar above the note in **Edit** and **Source** modes (see [Writing in the Editor](/en/wiki/writing-in-the-editor/)):
- **Bold** with `**text**` (`⌘B`)
- *Italic* with `*text*` (`⌘I`)
- ~~Strikethrough~~ with `~~text~~`
- ==Highlight== with `==text==` (`⌘⇧H` while writing)
- `Inline code` with `` `code` ``
- Block quote:
> Knowledge structured in plain text outlasts time and the fleeting formats of proprietary apps.

---

## Lists and Interactive Tasks

Lists support smart indentation via `Tab` and `Shift-Tab`, with highlighted visual levels:

- Top-level item
  - Subitem indented with `Tab`
    - Third level of depth
- Task list with checkboxes you can click right in Edit mode:
  - [x] Task 1: Installation and initial setup done
  - [ ] Task 2: Try clicking this checkbox to toggle its state
  - [ ] Task 3: Check that completed tasks get automatic strikethrough styling

---

## Code Blocks with a Copy Button

Hover over any code block below to see the **Copy** button in the top-right corner:

### Rust
```rust
fn main() {
    let app_name = "Verso";
    println!("Welcome to {} — your Markdown editor.", app_name);
}
```

### TypeScript
```typescript
interface Note {
  path: string;
  title: string;
  tags: string[];
  isFavorite: boolean;
}

const welcome: Note = {
  path: "00 - Welcome to Verso.md",
  title: "Welcome to Verso",
  tags: ["verso", "guide"],
  isFavorite: true,
};
```

### Python
```python
def fibonacci(n: int) -> list[int]:
    sequence = [0, 1]
    while len(sequence) < n:
        sequence.append(sequence[-1] + sequence[-2])
    return sequence[:n]

print("First 10 Fibonacci numbers:", fibonacci(10))
```

---

## Math Formulas in KaTeX

Verso includes ultra-fast math rendering via KaTeX:

Inline formula: $E = mc^2$ and $\lim_{x \to 0} \frac{\sin(x)}{x} = 1$.

Highlighted block formula:
$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

Rotation matrix in $\mathbb{R}^2$:
$$
R(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}
$$

---

## Tables with Resizable Columns

In Reading mode (`Cmd+E`), hover over the dividing line between the table headers and drag to resize the column widths:

| Feature | Description | Status in Verso |
| :--- | :--- | :--- |
| **Live Editing** | Real-time preview of Markdown elements | Supported |
| **Interactive Tasks** | Checkboxes toggled by clicking in the editor | Supported |
| **Databases** | Obsidian Bases-style data views | Supported |
| **PDF Spread Mode** | Side-by-side two-page viewing | Supported |
| **KaTeX Formulas** | Inline and block math expressions | Supported |

---

## Callouts

A callout is a quote that starts with `> [!type]`. The type sets the color and icon; the text after it becomes the title:

> **Tip: Tip with its own title**
>
> Write `> [!tip] Your title` on the first line.

> **Warning: Click the title to open**
>
> With a `-` after the type, the callout starts **closed** in Reading mode; with `+`, it starts open and can also be closed.

> **Note: Callouts can be nested**
>
> One more `>` per level:
> > [!quote] A callout inside another
> > Up to 32 levels.

In the `/` menu, **Callout: note**, **Callout: tip** and **Callout: warning** write the beginning for you.

---

## Footnotes, Comments and Tags

- A footnote is written `[^1]` in the text and `[^1]: explanation` on any line.[^1] Footnotes appear at the end, in Reading mode, with a ↩ to go back to the text.
- A comment between `%%` disappears in Reading mode: %%this passage only shows in Edit and Source%% — switch modes with `⌘E` to see it.
- A #tag in the text becomes a link in Reading mode: clicking it searches `tag:` with its name.

[^1]: This is the footnote for the example above.

---

## Tables in the Editor

In Edit mode a table stays a table: click a cell and type in it. `Tab` and `⇧Tab` move through the cells (`Tab` in the last one creates a row), `Enter` goes down to the cell below (in the last row, it creates another), the arrows move to the neighboring cell and leave the table at the edges, and `Esc` exits to the next line. The **+** below the table adds a row and the **+** beside it, a column. Right-click a cell to insert or delete rows and columns and to align the column left, center or right — the same tools appear in the formatting bar while a cell is focused, with the column's alignment marked.

The file stays Markdown: on every change the `|` bars line themselves up, and a `|` typed in a cell becomes `\|`. The **Table** button on the bar (or `⌘⌥T`) — or **Table** in the `/` menu — inserts a new table, with the cursor in the first header. In Source mode, the table is the text.

To widen a column, drag the right edge of its header cell, in Edit mode or in Reading. Verso keeps that width for the table and the note — the file doesn't change, and Obsidian shows the table as usual.

Back to the [Home Page](/en/wiki/welcome-to-verso/) or continue to [Links, Anchors and Embedded Notes](/en/wiki/links-anchors-and-embedded-notes/).
