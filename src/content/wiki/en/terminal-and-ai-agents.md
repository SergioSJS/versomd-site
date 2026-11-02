---
title: "Terminal and AI Agents"
description: "A terminal of this computer in a tab, opened at the folder's root: turning it on, opening it, the buttons that find Claude Code, Gemini CLI and the other AI tools, the keys, and what a program run there does to the files."
order: 35
group: start
slug: "terminal-and-ai-agents"
twin: "terminal-e-agentes-de-ia"
source: "demo-vault-en/35 - Terminal and AI Agents.md"
updated: "2026-10-31"
---
Verso's desktop app has a **real terminal** in a tab: your own shell, opened at the folder's root, with the same `PATH` as the terminal you already use. There you run Claude Code, Gemini CLI, Codex or any other command-line program beside your notes, without leaving Verso.

It comes **off**. A shell in a notes app is not for everyone; whoever wants it turns it on.

---

## Turning it on

In **Settings › Features**, turn on **Terminal**. The **Everything** shortcut does not turn the terminal on: it stays off until you turn it on by hand, like the 3D dice. Turning it off closes the open terminal tabs and ends their programs.

## Opening a terminal

- In the palette (`⌘ ⇧ P`, or `Ctrl + Shift + P`): **New terminal**. It opens at the root of the window's folder.
- Right-click a folder in the tree › **Open terminal here**: the terminal starts in that folder.
- In **Settings › Terminal and agents › Terminal**, the **New terminal** button.

Each terminal is a tab like a note: drag it to split the pane, take it to another workspace, open several. The tab is called **Terminal — folder name**, with a number when there is more than one. The line above the terminal says which shell runs and where (`zsh in Campaign`).

A folder **synced with a server** is a folder of this computer too: the terminal opens in it. A window that shows a server's folder **with no copy here** opens the terminal in your home folder, with a line saying the folder is not on this computer. The shell always runs on **this** computer.

The terminal does not exist in the browser or on the phone, in the window of a single file ([Open a Single File](/en/wiki/open-a-single-file/)) or on a server: there it appears nowhere.

## The AI tools

The **AI tools** button, above the terminal (and in **Settings › Terminal and agents › AI tools › Look**), asks your shell which of these are installed — only when you click, never on opening:

| Tool | Command |
| :--- | :--- |
| Claude Code | `claude` |
| Gemini CLI | `gemini` |
| Codex | `codex` |
| Antigravity CLI | `agy` |
| OpenCode | `opencode` |
| Cursor CLI | `cursor-agent` |

**Start Claude Code** (and the others found) opens a new terminal at the folder's root already running the tool. One that is not installed shows as **… is not installed — install page**, and the click opens its page in the browser.

To give the agent Verso's tools over this folder (search, read notes, backlinks, boards and bases, read only), use the line in **Settings › Terminal and agents › Claude Code** — `claude mcp add … -- verso mcp …` — in the terminal itself. [Terminal, CLI and Agents](/en/wiki/terminal-cli-and-agents/) explains `verso mcp`.

> **Warning: A program in the terminal writes straight to the files**
>
> What you run there — an AI agent, `git`, a script — changes the folder's files without going through Verso, as Finder or another editor would. Verso sees each change: a note open with no typing of yours takes the new text; one with your typing shows the conflict banner with both versions; and the **Version history** keeps each change as *made outside Verso*, to undo. In the first terminal of each folder, a line says so once.

## Keys

The terminal takes almost every key. These stay the app's, and are the way out of the terminal by keyboard:

| Action | macOS | Linux / Windows |
| :--- | :--- | :--- |
| Next tab / previous tab | `⌘ ⇧ ]` / `⌘ ⇧ [` | `Ctrl + Shift + ]` / `Ctrl + Shift + [` |
| Go to tab 1…9 | `⌘ 1`…`⌘ 9` | `Ctrl + 1`…`Ctrl + 9` |
| Open… / palette | `⌘ P` / `⌘ ⇧ P` | `Ctrl + P` / `Ctrl + Shift + P` |
| Settings | `⌘ ,` | `Ctrl + ,` |
| Search the notes | `⌘ K` | `Ctrl + K` |
| Close the tab | `⌘ W` | `Ctrl + W` |

- **Copy and paste:** with text selected, `⌘ C` (or `Ctrl + C`) copies; with no selection, `Ctrl + C` interrupts the program, as in any terminal. `⌘ V` (or `Ctrl + V`) pastes.
- On the Mac, `⌘` never goes to the shell, and **Option** types accents and special characters. For Emacs-style shortcuts with Option, turn on **Option as Meta** in **Settings › Terminal and agents**.
- **Clear**, above the terminal and in the tab's menu, wipes what was already written on the screen.

## Closing, reloading, quitting

- Closing the tab ends the shell and everything it started. If a program still runs in it, Verso asks first (on Windows, it always asks).
- Typing `exit` closes the tab; the status bar says with which code the terminal ended.
- **Reloading the window** (`⌘ R`) does not kill what runs: the tab comes back and finds the same shell, with what it wrote last. Quitting the app ends the terminals (asking, if a program runs); on opening again, the tab starts a new shell in the same place.

## On each system

- **macOS:** your login shell (`$SHELL`, usually `zsh`), with `~/.zprofile` and `~/.zshrc`; Homebrew's and `npm`'s `PATH` comes along. The first time a program in the terminal opens `~/Documents`, macOS asks whether **Verso** may access the folder.
- **Windows:** PowerShell (`pwsh.exe` when installed, otherwise `powershell.exe`). In **Settings › Terminal and agents › Terminal shell** you switch to **Command Prompt**. `wsl` works typed in PowerShell.
- **Linux:** your login shell (`$SHELL`, or `bash`).

For screen readers, **Screen reader mode in the terminal** (in **Settings › Terminal and agents**) makes the reader announce what the terminal writes.

---

Go on to [Sound and Music at the Table](/en/wiki/sound-and-music-at-the-table/), or back to [UniVerso on a Free Oracle Server](/en/wiki/universo-on-a-free-oracle-server/) or to [Terminal, CLI and Agents](/en/wiki/terminal-cli-and-agents/), see the [Home Page](/en/wiki/welcome-to-verso/) or explore the Verso Tour.
