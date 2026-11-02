---
title: "Documents and Media"
description: "Viewing PDFs in 2-page mode, resizing images and embedding safe web pages through iframes."
order: 6
group: organize
slug: "documents-and-media"
twin: "documentos-e-midia"
source: "demo-vault-en/06 - Documents and Media.md"
updated: "2026-09-25"
---
Images, PDFs, sounds and web pages live in notes just like text: in a link, in an embed or in a tab of their own.

---

## Images with Scale Control

Include an image with a wikilink (`![[file]]`) or with Markdown, and give the width after a `|`:

### Wikilink with width (`![[assets/diagrama.svg|320]]`)
![diagrama](/wiki-assets/diagrama.svg)

### Markdown with width (`![Diagram|320](assets/diagrama.svg)`)
![Diagram](/wiki-assets/diagrama.svg)

- Drag an image's **corner** to change its size: Verso writes the measure into the embed.
- In Edit mode, the toolbar's **Insert image** button (the last one) opens a menu: **From this computer…** opens the system's file picker, and the chosen image is **copied** to the `assets` folder beside the note (the folder's name is set in Settings › Files and links, under Attachments folder) and the `![[name.png]]` embed is inserted where the cursor is. If an image with that name already exists, the new one is saved as `name (2).png`; nothing is overwritten, and the bytes are not changed. **From the folder…** keeps showing the files that are already in the folder. On the phone and the tablet, the menu offers **Photos and files…** and **Take a photo** (the camera; the photo comes in as `Photo 2026-10-15 142530.jpg`).
- **Pasting** or **dragging** an image into a note (Edit mode) takes the same path: it is saved in `assets` beside the note, and the embed is inserted where the cursor is.
- On a server, an image over **32 MB** is not uploaded, and someone who can only read the folder cannot insert images.
- In an image tab, a click toggles between fitting the screen and the real size.

---

## PDF Reader

Open the Verso Manual (PDF). The reader's bar has, in order:

- **Previous page**, the page number and **Next page**.
- **Zoom out**, **Zoom in**, **Fit width** and **Whole page**.
- **Page display mode**: each click cycles through **Single page**, **Two pages (with cover)** and **Two pages (without cover)**, like a book.
- **Search the PDF** (also `⌘F` with the PDF open).
- **Copy a link to this page**: copies `[[file.pdf#page=N]]` — with the passage, if there is selected text.
- **Quote the selection in the notes**: select a passage and click. Verso creates, beside the PDF, the note `PDF name — Notes.md`, and adds the passage to it as a quote with a link to the page.

### A PDF inside the note

`![[assets/manual-verso.pdf#page=2]]` opens the PDF at page 2:

[manual-verso.pdf](/wiki-assets/manual-verso.pdf)

`#2`, `|page=5`, `|600` (the height, in pixels) and `|800x600` (width and height) also work. What comes after `|` applies in Reading mode.

---

## Sound in the Note

A sound file included as an embed becomes a **player**, as in Obsidian. `![[assets/sons/taverna.mp3]]`:

*taverna.mp3*

- **Play** and **Pause**; the bar with the time (drag it, or use the arrow keys, to go elsewhere in the track); **Mute** and the **Volume**. The volume is yours, kept on this device, and the same for every player.
- A click on the **name** opens the file (with `⌘`, beside).
- It plays **for you only**, one at a time: starting a player pauses the other.
- It works for `.mp3`, `.m4a`, `.aac`, `.ogg`, `.wav` and `.flac`, and for the Markdown embed too: `![](assets/sons/estrada.mp3)`. **MP3** and **AAC** play everywhere; OGG does not play on the iPhone, the iPad or the Mac.
- In **Source** mode the text shows as written; opening or playing never changes the note.
- On a phone or a tablet, the volume is the device's own buttons; **Mute** stays on the player.
- On a **board**, a sound file — brought from **Insert › Note or file of the folder…** or dragged from the computer — becomes a card with the same player, resized like the others.
- At a table, the game master also has **Play for the table**: see [Sound and Music at the Table](/en/wiki/sound-and-music-at-the-table/).

---

## Web Pages Inside the Note

An `<iframe>` shows a web page in the middle of the note:

<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-46.66%2C-23.57%2C-46.63%2C-23.54&amp;layer=mapnik" style="width: 100%; height: 320px; border-radius: 8px;"></iframe>

The first time a site appears in a note, Verso asks before loading it: **Always allow** allows that site in all notes; **Cancel** swaps the page for a link. A page on your local network (this computer or a device on the network) comes with an extra warning.

- The allowed sites are kept in **Settings › General › Sites allowed in notes**, one per line.
- With **Settings › General › Load remote content** off, nothing from outside is loaded: the note shows a **Load** button.

A whole page can also be a note of your own — see [Web Pages and HTML](/en/wiki/web-pages-and-html/).

---

Move on to the next guide: [Daily Notes, Calendar and Templates](/en/wiki/daily-notes-calendar-and-templates/).
Or go back to the [Home Page](/en/wiki/welcome-to-verso/).
