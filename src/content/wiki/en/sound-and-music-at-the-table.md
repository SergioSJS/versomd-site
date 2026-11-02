---
title: "Sound and Music at the Table"
description: "The game master plays a sound file and everyone at the table hears it at the same point, each with their own volume; a note of sound links becomes the soundboard, and whoever does not see the file does not hear it."
order: 36
group: start
slug: "sound-and-music-at-the-table"
twin: "som-e-musica-na-mesa"
source: "demo-vault-en/36 - Sound and Music at the Table.md"
updated: "2026-10-31"
---
In a session, music is half the mood: the noisy tavern, the road at night, the battle. In Verso, **the game master presses play and everyone at the table hears the same thing, at the same point**, each with their own volume. Music has a tab of its own, **Music**, in the right panel, beside the **Table** ([The Table](/en/wiki/the-table/)); it works on a UniVerso ([Running a Table](/en/wiki/running-a-table/)) and in the desktop app that serves the folder.

No sound crosses the network: each window plays **its own copy** of the file, and only "what plays and where" is shared, by the server's clock. So the quality is the file's, and nobody lags behind. Nothing of it is written to any file: what is playing lives in the server's memory and goes away when the last person leaves the table.

---

## Turn it on

**Settings › Features › RPG and tabletop › Table sound**. It is on whenever the **Table** is on; off, there is no Music tab, no button and no status-bar item, and nothing is loaded. Until the first track plays, nothing of the player is loaded either.

---

## The Music tab

Open the right panel and choose **Music** (the music note, beside the Table's die; on a phone, **Panel** in the bottom bar, and the tab opens as a sheet from the bottom). From top to bottom:

1. **Now playing**: the track's name, the list it came from (*From: Music*, *From: Soundtrack › Tavern*), the **Position** bar and the time.
2. For the game master, the buttons: **Previous track**, **Pause** / **Resume**, **Next track**, **Stop** and **Loop** — one click loops **this track**; the second, **the list**; the third turns it off. And the **Table volume**, everyone's at once.
3. For everyone: **Your volume**, **Mute** and **Follow the table** (see below).
4. **Filter tracks**: type part of a name (accents and capitals do not matter) and only the tracks that match stay.
5. **Up next**: the list the playing track came from, with it marked; it is what **Next** and **Previous** walk.
6. **Folders**: **every folder that holds sound files is a list**, with nothing to set up. Put your MP3s in a `Music` folder and it shows here.
7. **Playlists**: **every note with sound links is a playlist**, one block per heading (see below).

A click on a track plays it for everyone — for the game master only. Players see the same lists, with no play button: *Only the game master plays and changes the tracks; you control your own volume.* The server refuses the command of anyone who is not the game master, whatever their window shows. With no sound file in the folder, the tab says how to begin.

---

## In the Table tab: one row only

While something plays, the **Table** tab shows **one slim row** at its top: the track's name and, for the game master, **Previous track**, **Pause** and **Next track**; for everyone, **Volume**, which opens your volume and **Mute**. A click on the name opens the Music tab. When nothing plays, the row goes and the chat has all the room.

---

## A note is a playlist

Nothing special is needed: **any link to a sound file in a note gets a play button** beside it, for the game master (an embed becomes a player, just below), and the note shows under **Playlists**. The heading above a list of such links is a **scene**, and **Next** and **Previous** walk it. Try it with the two sample tracks that come with this tutorial:

### Tavern

- The tavern
- The road

### Road

- The road, again

Press the button beside **The tavern**: the track plays, *From: 36 - Sound and Music at the Table › Tavern*, and **Next track** goes to **The road**. At the end of the list, Next is greyed out; with **Loop: the list**, it goes back to the first. When a track ends without looping, the game master's window plays the next of the list, or stops.

In Obsidian, this same note is an ordinary list of links: no new code, nothing Obsidian does not read.

---

## A player in the note

A sound **embed** becomes a player in the note itself, as in Obsidian ([Documents and Media](/en/wiki/documents-and-media/)). `![[assets/sons/taverna.mp3]]`:

*taverna.mp3*

- It plays **only for whoever presses it**, in this window: a way to hear a track before playing it for the table.
- For the game master, the player also has **Play for the table**: the track goes to the Music tab, with the scene of the heading above it, and Verso asks the same question as above when some player does not see the file. Alone, with no table, the button reads **Play in the Music tab**.
- If the table's music is playing and you press play on a player in a note, **the table's music goes lower** while it plays — the player says so — and comes back when it stops. If the game master starts music for the table while your player plays, **yours pauses**: *Paused: the table's music started.*
- A player at the table only gets the audio player of a file they see. The embed of a hidden file shows as **🔒 (not revealed yet)**, without its name; on a board, its card is locked. Mind: a file with no access of its own follows the notes that include it — embedded in a note the players see, they see it too. To keep a track back, right-click it › **Access…** › *Whole table: Does not see*.

---

## What each person controls

Everyone — game master and players — has, on their own device:

- **Your volume**, yours only;
- **Mute** / **Unmute**;
- **Follow the table**: off, only your window goes silent. Nobody else is muted, and the music goes on for the others.

None of it is sent to anyone.

---

## Who hears: whoever sees the file

At a table, every file starts **hidden** until the game master releases it ([Running a Table](/en/wiki/running-a-table/)), and the music follows the same rule: **whoever sees the file hears it**. A player who does not see it is told only that *a track you do not see* is playing, and why — not even its name reaches them, nor its bytes.

When the game master plays a file some players do not see, Verso asks first, with the names: *"2 players do not see this file (Ana, Bruno). Release it to the table and play?"*

- **Release and play** gives the whole table *sees* on that file and plays it;
- **Play without them** plays it, and whoever does not see it does not hear it;
- **Cancel** plays nothing.

While it plays, the game master's Music tab says who is not hearing. To release a whole folder of music at once, right-click the folder › **Access…** › *Whole table: sees*; from then on every new file in it is seen as it arrives.

---

## Formats

Each window plays what its browser can play; Verso converts nothing. **MP3** or **AAC** (`.m4a`) play everywhere, phones included; OGG does not play on an iPhone or a Mac; WAV and FLAC play, but weigh a lot: everyone at the table downloads the whole file. When a window cannot play a track, it says so to whoever uses it, and the game master sees who cannot.

---

## Arriving late, and the first touch

Whoever joins while music is playing starts **at the same point** as the others. Browsers play sound only after a touch on the page: when that is the case, a **Hear the table** button shows — one click, or any touch in the window, and the music comes in.

If the game master closes their window, **the music goes on** for the others; it ends when everyone leaves the table.

---

## With the tabs closed

While something plays and neither the **Table** nor the **Music** tab is on screen, the status bar shows a small music note with the track's name; a click opens the Music tab.

---

## Alone, with no table

In a folder of this computer alone there is no table, but the Music tab works the same way, **for you only**: it says *In this window only: the folder has no table*, and nothing is sent to anyone.

---

## Share audio

The game master can share **the sound of the pages open in Verso** (YouTube, Spotify Web, an ambience loop) with everyone at the table, with no file in the folder. Only that source goes: never other programs on the computer, never the whole system, and never Verso's own sounds (dice, alerts, the table's music, the audio players in notes). Those keep playing on your computer, from the application itself, and never reach the table. This exists only in the **desktop app**; in a browser or on a phone you **listen**, but cannot share, and the button is not drawn.

1. In the **Music** tab, **Share audio…** (in the empty state or at the top of the tab). Only the game master sees the button.
2. Open the page **as a page**, not inside a note, and let it play. In the list, pick **Pages open in Verso**. Under **Quality** (folded) is the rate: 96 kbit/s is a good start. With no page open, the list asks you to open one.
3. The first time, Verso says: *the sound of what you share goes to everyone at this table; what you may play to others is your responsibility; Verso records nothing*.
4. While you share, the tab shows *Sharing …*, a **level meter** with *Sound arriving* (or *Silence*, when the page gives no sound or is blocked), how many are listening and the rate. **Stop sharing** is in the tab, in the Table tab's row and in the status bar. You keep hearing the page directly; Verso never plays your own stream back to you.
5. Everyone at the table sees *<name> is sharing …* and uses **their own volume**, **Mute** and **Follow the table**; if the browser waits for a touch, **Hear the table**. A second share asks before it replaces the first. Listeners hear it about 400 to 600 milliseconds behind the sharer, and each listener uses about 130 kbit/s on the network.

> **On a Mac (macOS 14.4 or newer)** the only source is **Pages open in Verso**: the sound of the pages opened as a page (YouTube, Spotify Web, an ambience loop), all together, and its name says which sites are playing now (*Pages open in Verso: open.spotify.com*). It is listed once a page has made sound: start playing in it and open **Share audio…** again. Verso's own sounds leave, while you share, by a path of their own, a few hundredths of a second late. **Videos and pages shown inside a note go along**: on the Mac their sound cannot be told apart, and the notice Verso shows says so. The first time, macOS asks to allow **System Audio Recording** for Verso. If you say no, Verso tells you, and you can allow it later in **System Settings > Privacy & Security > System Audio Recording** (in some versions *Screen & System Audio Recording*), then start again. A source that gives *Silence* while it plays usually means this permission is off. A copy of Verso started from a terminal (a development build) finds no pages: use the installed app. On an older macOS the picker says it needs a newer one.
>
> **On Windows (Windows 11 or newer)** Verso shares **only the sound of pages open in Verso**, never other programs and never Verso's own sounds (dice, alerts, the table's music: those already play in your window). The list has one source, **Pages open in Verso**, and names the sites that are playing now; all open pages go together. Open the page **as a page**: a page shown inside a note is not shared, because inside a note its sound cannot be separated from Verso's own. With no page open the picker asks you to open one; on **Windows 10** it says it needs Windows 11. The pages now keep their sign-ins in a profile of their own, so after this update sign in once more in the pages you use.
>
> **On Linux** the list is the same as on Windows: **only the sound of pages open in Verso** (YouTube, Spotify Web, an ambience loop), all together, never other programs and never Verso's own sounds; the list names the sites playing now. Open the page **as a page**: **videos and pages shown inside a note are not shared on Linux**. While you share, Verso's own sounds leave by a path of their own, a few hundredths of a second late. It needs the sound tools of PulseAudio (`pactl`, `parec` and `pacat`, from the package `pulseaudio-utils`, which PipeWire also uses): the .deb and .rpm recommend it, and whoever uses the AppImage installs it by hand. Without them the picker says so. With no page open it asks you to open one.

---

The two sample tracks
---

The two sample tracks (`assets/sons/`) are by **RandomMind**, in the public domain (CC0 1.0): `taverna.mp3` is “The Old Tower Inn” (<https://opengameart.org/content/medieval-the-old-tower-inn>) and `estrada.mp3` is “The Bard's Tale” (<https://opengameart.org/content/medieval-the-bards-tale>), their loop versions, re-encoded in mono to weigh little.

Go on to [Compatibility with Obsidian](/en/wiki/compatibility-with-obsidian/), or back to [UniVerso on a Free Oracle Server](/en/wiki/universo-on-a-free-oracle-server/) or to [The Table](/en/wiki/the-table/), see the [Home Page](/en/wiki/welcome-to-verso/) or explore the Verso Tour.
