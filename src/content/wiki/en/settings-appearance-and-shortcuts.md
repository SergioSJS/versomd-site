---
title: "Settings, Appearance and Shortcuts"
description: "Theme, palette, fonts, language and your own shortcuts."
order: 15
group: start
slug: "settings-appearance-and-shortcuts"
twin: "ajustes-aparencia-e-atalhos"
source: "demo-vault-en/15 - Settings, Appearance and Shortcuts.md"
updated: "2026-10-01"
---
`⌘,` opens **Settings** (also from the button on the left ribbon and from the menu **Verso › Settings…**). The **Search settings…** field finds an option by name.

---

## The Sections

- **General**: the language (**System**, **Português (Brasil)** or **English**), the autosave delay, updates, the developer console, remote content and the sites allowed in notes.
- **Notifications**: for each kind — sync, conflicts, sharing, updates, quota, trash, presence — **Notice and list**, **List only** or **Off**, and the system's notifications (see [Help, Updates and Diagnostics](/en/wiki/help-updates-and-diagnostics/#notifications)).
- **Appearance**: theme, dark tone, text size and width and the **Themes** gallery — one click changes the look; **Copy** and **Edit** open the **Theme builder** —, with themes to share.
- **Editor**: preview tabs, the mode notes open in, spell check and line numbers.
- **Files and links**: build folders and `.gitignore`, the format of new links, and the folders for attachments, daily notes and templates.
- **Board**: how a `.canvas` opens and how new boards are born (see [Board and Relations](/en/wiki/board-and-relations/)).
- **Hotkeys**: the keys for each command.
- **Terminal and agents**: the `verso` command and Verso in AI agents (see [Terminal, CLI and Agents](/en/wiki/terminal-cli-and-agents/)).

---

## From the Folder or from This Machine

Three settings belong to the folder, not to the computer: the **Bookmarks**, the **build folders** and the **`.gitignore`** (in **Files and links**), and the **Folder note name** (in **Organizing**). They live inside the folder itself, in `.verso/settings.json`, and travel with it: open the synced folder on another computer — through Verso's sync (see [Verso on a Server](/en/wiki/verso-on-a-server/)), iCloud, OneDrive, Syncthing or git — and they are there. Beside each one, Settings says **Of the folder** or **Of this machine**: of this machine as long as the folder does not have the file, which only appears on the first change — opening a folder never creates it. Whoever can only read a server folder keeps its bookmarks on this computer, and the star works the same way: beside them, Settings says **Of this machine**.

Try it: in **Files and links**, turn off **Ignore build folders** and watch the label change to **Of the folder**; turn it on again to go back.

---

## Appearance

- **Themes**, at the top, together: the **Theme** (**System**, **Light** or **Dark**), the **Dark tone** and, right below, the gallery (see next); changing the mode redraws the cards at once.
  - **Dark tone**, in the dark theme: **Soft (default)** (for reading and writing for hours), **Deep** (nearly black, for a dark room or an OLED screen) and **Dusk** (lighter).
- **Text**: the **Font size**, from 12 to 30 pixels, and the **Text width**: **From the theme** (the default: follows the theme's width, or Verso's), **Narrow** (40 rem), **Medium** (48 rem), **Standard** (100 characters), **Large** (72 rem) or **Full width**. The font size changes only the text of notes — reading and editing — never the interface nor this window; the width you choose wins over the theme's, and the effect shows at once.
- **Window zoom** (in the desktop app): − , the level and + , with **Reset (100%)**, the same zoom as the shortcuts; each zoom change also shows for a moment in a badge at the corner of the window.
- **More text options**: the interface's text font and the heading accent color, from amber to amethyst.
- **Side ribbon buttons**: each with its own switch; the Settings gear is always there, so there is a way back.

### Themes

In **Settings › Appearance**, the **Themes** gallery shows one card per theme: Verso's four — **Paper**, **Sepia**, **Slate** and **Moss** — and your own. Each card is a tiny page drawn with that theme's real colors and fonts (light or dark, as the window is), with the one in use marked. **One click uses the theme**, at once, without reloading; the keyboard reaches it too: Tab to the card and Space.

- **Copy** makes an editable copy, called **Copy of …**. Verso's own themes never change: to change one, copy it and edit the copy.
- **Your own** themes also have **Edit**, **Export** and **Delete**.
- **More themes…**, under the gallery, opens a window with **every** theme Verso ships — its four and the **catalogue** (Nord, Dracula, Catppuccin, Solarized, Gruvbox, Minimal and others) —, with a **search** (by name or by author) and filters by **Mode** (light, dark, both) and by **Surface**. Each card is drawn with the theme's own colors and carries, below, the credit of the one that inspired it (**Inspired by Minimal, by Steph Ango (MIT)**, with the link to the source). A click uses the theme; **Copy** makes a copy to edit, which keeps the credit. On a phone the window takes the whole screen, with **Back**. A theme of one side only (dark only, say) takes Verso's mode to that side, and the message says so. Everyone's credits are in **Settings › Credits and acknowledgements**.
- **New theme** starts from the look you have now; **Import…** reads a `.verso-theme` file. A theme the folder suggests shows as a card under **Suggested by the folder**.

Try it now: click **Sepia**, switch the theme to **Dark** and compare the three dark tones; then go back to **Paper**.

### Theme builder

**Edit** opens the **Theme builder** in a tab of its own — large, beside a note if you split the pane, and on a phone like any tab. On one side, the controls; on the other, a large sample page — headings, text, a link, a tag, a quotation, code, a table, a button and a notice —, drawn with the same classes as a note. Change a color and the sample page and the whole window change at once, without reloading.

- **Light and Dark** are edited separately: pick the side in **Side you are editing**.
- The controls come in groups, folded until you open them (on a phone, one group at a time): **Base**, **Headings**, **Code**, **Callout colours** and **Structure**.
- **Base**: paper, paper 2, hairlines, ink, ink 2, seal (links and highlights) and brass (headings and marks). Each has a color picker and a text field, which accepts `#rrggbb`, `rgb()`, `hsl()` and `oklch()`. The supporting colors — the third paper, the supporting ink, the soft backgrounds — Verso works out from these. The **fonts** (heading, reading, code) and the text **size** are here too.
- **Headings**: a colour for each level, 1 to 6. **Code**: the code's background and text. **Callout colours**: red, orange, yellow, green, cyan, blue, purple and pink, which paint callouts, the oracle's answers and sheets. A colour you leave alone does not change: Verso keeps the one it always used, or works it out from the Base. The reset button beside each colour gives that default back.
- **Structure**: sixteen choices from a closed list — **Surface** (tonal, flat, contrast with a dark sidebar, or cards), **Heading style** (plain, with a rule, with a side bar, small caps), **Table style** (thin lines, striped, full grid), **Tag style** (pill, outline, minimal) **Corners** (soft, sharp, round), ten for reading — heading size and weight, text width, line height, quote style, link style, bold and italic colour, task box, paragraph spacing and callout style — and the **Horizontal rule (---)** (the usual line with the ⁂, a plain line, a thin line, a line that fades at the ends), with its colour right below. The sample beside shows each choice live, and the first value of each list is Verso's own look.
- **Contrast**: the ratio between text and background, live — now also the code's text on its background and each heading on the paper —, in a section that opens by itself when there is a warning. Below **4.5:1** the builder warns you — many people read poorly like that —; if a choice would leave a pair below **3:1**, it is undone on its own, once, with a message that says what was undone.
- **Restore default** is always at the top, and reachable with the keyboard.

Nothing counts until **Save theme**. **Cancel** — or closing the tab and answering **Discard** — puts the look back as it was, and the Settings page returns on the theme's card. Each device keeps its own themes; on a server, they go with your account.

**Share**: **Export** (on your theme's card) saves the look in a small `.verso-theme` file, with only colors, fonts and size — never a note, never free-form CSS. To use someone else's, **Import…** or drag the file onto the window. Verso checks the file: it only accepts the colors and fonts on the list, and refuses what would make the text unreadable, saying why. There is one to try: Pergaminho.verso-theme (it is in `assets/temas`) — drag it onto the window and then click **Paper** to go back.

**Suggest to the folder**: in the builder, under **Share with the folder**, whoever can write to the folder can **Suggest to the folder** the theme. Whoever opens it sees a notice — **This folder suggests the theme …** — with **Use** and **Not now**; the folder never applies anything on its own, and the answer is remembered on this device. **Remove the suggestion** undoes it.

Try it: **Copy** **Paper**, **Edit** the copy, change the **Ink** to a dark blue, watch the sample change, try a gray that is too light and read the message that undoes the choice; then **Cancel**.

---

## Shortcuts

In **Hotkeys**, each command shows its key and the **Change** button: click, and press the new combination — it must include `⌘` (or be `⌥ Enter`, the one for **Open link under cursor**). If another command was already using that combination, it loses it. **Restore** goes back to the default.

**Window zoom** (in the desktop app): `⌘+` zooms in, `⌘-` zooms out and `⌘0` goes back to 100 % (`Ctrl` on Windows and Linux), from 50 % to 200 %, in steps of 10; `Ctrl` with the mouse wheel or the pinch gesture on the trackpad do the same — except over a board, a map, a PDF or the graph, which zoom themselves. Each computer keeps its own zoom. It is different from **Font size**, which only enlarges the text of notes. The level shows in a badge for a moment and stays in **Settings › Appearance › Window zoom**. In the browser, the browser's own zoom applies.

The everyday shortcuts are on the [Home Page](/en/wiki/welcome-to-verso/); the board's, in [Drawing on the Board](/en/wiki/drawing-on-the-board/).

---

## The Menu Bar (macOS)

On a Mac, the bar at the top of the screen gathers what Verso does, with each command's key beside it — the same keys as in **Hotkeys**, changing along with them. Each item does the same as the command of the same name in the palette (`⌘⇧P`).

- **File**: new notes, folders, boards and bases; open a folder and recents; import files; **Sync with…**; save, rename, move, version history and trash.
- **Edit**: undo, copy and paste; find in the note, replace, search the notes; property, template and base.
- **View**: reading and editing, panels, tab bar and vertical tabs, split, zoom, graphs, **Appearance and Themes…** and **More Themes…**.
- **Go**: back and forward, quick open, the palette, the daily note, switch focus, tabs.
- **RPG**: **Roll Dice…**, **Ask the Oracle**, **New Project from Template…** and **Dice and RPG Settings…**. A feature turned off in **Settings › Features** leaves the menu; the settings item stays, to turn it back on.
- **Help**: notifications, the tutorial, updates, report a problem and credits.

A grey item does not apply right now (for example **Save** with no note open). 
### On Windows and Linux

There is no bar at the top of the screen: there is a **☰ Menu** button in the window's top-left corner, as in Obsidian. It opens the **same menus** (File, Edit, View, Go, RPG, Window and Help), with the same keys (**Ctrl** in place of ⌘), the grey items, and the RPG items that leave with their feature turned off. **Settings…** and **Quit Verso** are at the end of **File**. From the keyboard: **Alt** alone opens the menu; **Alt** and the underlined letter opens a menu directly (**Alt+F** File, **Alt+E** Edit, **Alt+V** View, **Alt+G** Go, **Alt+R** RPG, **Alt+W** Window, **Alt+H** Help); the arrows walk it, **Enter** runs and **Esc** steps back. A browser and a phone have no such button: the palette (`Ctrl+⇧+P`) has the same commands.

---

## The Left Ribbon

The buttons on the left ribbon (search, open, today's note, graph…) can be dragged to change their order. Right-click one for: **Move up**, **Move down**, **Hide this button**, **Show hidden buttons** and **Restore order**.

---

Go on to [Web Pages and HTML](/en/wiki/web-pages-and-html/) or go back to the [Home Page](/en/wiki/welcome-to-verso/).
