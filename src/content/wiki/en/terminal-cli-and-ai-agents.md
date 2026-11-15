---
title: "Terminal, CLI and AI Agents"
description: "A terminal of this computer in a tab (turning it on, opening it, the keys and what a program run there does to the files), the `verso` command to search from the terminal, the folder in AI agents through MCP, and the buttons that find Claude Code, Gemini CLI and the other AI tools."
order: 36
group: tools
slug: "terminal-cli-and-ai-agents"
twin: "terminal-cli-e-agentes-de-ia"
source: "demo-vault-en/36 - Terminal, CLI and AI Agents.md"
updated: "2026-10-01"
---
Verso also works outside the notes, in three ways:

- a **real terminal** in a tab of the desktop app: your own shell, opened at the folder's root, with the same `PATH` as the terminal you already use;
- the **`verso`** command, which searches your notes from the terminal;
- **AI agents**: an agent (like Claude) reads the folder through the MCP protocol — without ever writing to it —, and Claude Code, Gemini CLI, Codex and others run in the app's terminal, beside your notes.

---

## The terminal

The terminal comes **off**. A shell in a notes app is not for everyone; whoever wants it turns it on.

### Turning it on

In **Settings › Application › Features**, turn on **Terminal**. The **Everything** shortcut does not turn the terminal on: it stays off until you turn it on by hand, like the 3D dice. Turning it off closes the open terminal tabs and ends their programs.

### Opening a terminal

- In the palette (`⌘ ⇧ P`, or `Ctrl + Shift + P`): **New terminal**. It opens at the root of the window's folder.
- Right-click a folder in the tree › **Open terminal here**: the terminal starts in that folder.
- In **Settings › Terminal and agents › Terminal**, the **New terminal** button.

Each terminal is a tab like a note: drag it to split the pane, take it to another workspace, open several. The tab is called **Terminal — folder name**, with a number when there is more than one. The line above the terminal says which shell runs and where (`zsh in Campaign`).

A folder **synced with a server** is a folder of this computer too: the terminal opens in it. A window that shows a server's folder **with no copy here** opens the terminal in your home folder, with a line saying the folder is not on this computer. The shell always runs on **this** computer.

The terminal does not exist in the browser or on the phone, in the window of a single file ([Open a Single File](/en/wiki/open-a-single-file/)) or on a server: there it appears nowhere.

> **Warning: A program in the terminal writes straight to the files**
>
> What you run there — an AI agent, `git`, a script — changes the folder's files without going through Verso, as Finder or another editor would. Verso sees each change: a note open with no typing of yours takes the new text; one with your typing shows the conflict banner with both versions; and the **Version history** keeps each change as *made outside Verso*, to undo. In the first terminal of each folder, a line says so once.

### Keys

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

### Closing, reloading, quitting

- Closing the tab ends the shell and everything it started. If a program still runs in it, Verso asks first (on Windows, it always asks).
- Typing `exit` closes the tab; the status bar says with which code the terminal ended.
- **Reloading the window** (`⌘ R`) does not kill what runs: the tab comes back and finds the same shell, with what it wrote last. Quitting the app ends the terminals (asking, if a program runs); on opening again, the tab starts a new shell in the same place.

### On each system

- **macOS:** your login shell (`$SHELL`, usually `zsh`), with `~/.zprofile` and `~/.zshrc`; Homebrew's and `npm`'s `PATH` comes along. The first time a program in the terminal opens `~/Documents`, macOS asks whether **Verso** may access the folder.
- **Windows:** PowerShell (`pwsh.exe` when installed, otherwise `powershell.exe`). In **Settings › Terminal and agents › Terminal shell** you switch to **Command Prompt**. `wsl` works typed in PowerShell.
- **Linux:** your login shell (`$SHELL`, or `bash`).

For screen readers, **Screen reader mode in the terminal** (in **Settings › Terminal and agents**) makes the reader announce what the terminal writes.

---

## The `verso` command

### Installing the command

In **Settings › Terminal and agents › The verso command in the terminal**, click **Install**. Verso puts the command at `/usr/local/bin/verso` (macOS may ask for your password); **Remove** takes it away. If another `verso` is already there, the button is **Replace**.

On Windows there is nothing to install: `verso.exe` comes with the app, in its folder. Run it by its path, or put that folder on the PATH to type just `verso`.

On Linux, the package (`.deb` or `.rpm`) already puts `verso` on the PATH, beside the app. With an AppImage, **Install** puts the command in `~/.local/bin`, without asking for a password, and it follows the AppImage when that updates. In the beta, the command is called `verso-beta`.

### What the command does

Run it in the app's terminal or in any other:

| Command | Does |
| :--- | :--- |
| `verso index ~/Notes` | indexes the folder |
| `verso search ~/Notes meeting` | searches the notes (`--limit 50` for more results) |
| `verso backlinks ~/Notes "Project Alpha"` | who points to a note (by name, as in a link, or by its path inside the folder) |
| `verso backlinks ~/Notes --unresolved` | the links that lead to no note: notes that do not exist yet, and attachments |
| `verso ~/Notes` | opens the folder in the app — with the app open, in a window of its own |
| `verso help` | the full help |

`--json` returns the answer as JSON, for scripts; `--lang pt-BR` or `--lang en` picks the language.

---

## AI Agents (MCP)

In **Settings › Terminal and agents**:

- **Add to Claude Desktop** connects this folder to Claude Desktop (on a Mac, with the `verso` command installed; on Windows it already comes with the app). Without Claude Desktop installed, the button becomes **Get Claude Desktop** and opens the download page.
- **Claude Code** shows the line that connects the folder to Claude Code (`claude mcp add … -- verso mcp …`), with **Copy**.
- **Other MCP clients** shows the JSON for other programs.

### One Folder or All of Verso

In **Agents: one folder or all of Verso** you choose:

- **One server per folder** (the default): each folder you add becomes a server of its own, and the agent sees only that one.
- **One server for all of Verso**: a single server, `verso`, added once. It serves the folders marked in **This folder is visible to agents** — none until you mark one. The agent asks which exist (`list_folders`) and says which one it wants to read.

In both modes the app does not need to be open: the agent starts `verso` by itself. Everything an agent reads is recorded in `agents.log`, in Verso's configuration folder.

### The agent's tools

The agent gets these tools, all read-only:

- `search` and `list_notes` (list the notes and boards — also only those with a tag, like `project`, a property, like `status: active`, or a type, like `Character` — see [Typed Notes](/en/wiki/typed-notes/));
- `read_note` (read a note, with its properties and tags);
- `links` and `backlinks` (a note's connections — and, when the connection is a frontmatter property, like `ally: "[[Baron]]"`, what the relation is);
- `read_board` (read a board: the cards, the arrows with their relations, the drawn texts);
- `query_base` (query a base, like the table Verso shows);
- `unresolved` (the links with no target) and `index` (refresh the index);
- `list_folders` (the visible folders, in all-of-Verso mode).

Try asking: *"which notes have the tag project and what does the Verso Tour show?"*. It reads; you are the one who writes.

---

## AI agents in the terminal

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

To give the agent Verso's tools over this folder (search, read notes, backlinks, boards and bases, read only), paste in the terminal itself the line in **Settings › Terminal and agents › Claude Code**, the one in [AI Agents (MCP)](#ai-agents-mcp). And remember the warning in [The terminal](#the-terminal): what the agent does there writes straight to the files, and the **Version history** keeps each change to undo.

---

Previous: [Syncing with a Cloud](/en/wiki/syncing-with-a-cloud/) · Next: [Settings, Appearance and Shortcuts](/en/wiki/settings-appearance-and-shortcuts/) · [Home Page](/en/wiki/welcome-to-verso/) · Verso Tour
