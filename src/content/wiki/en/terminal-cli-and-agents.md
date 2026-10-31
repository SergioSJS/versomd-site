---
title: "Terminal, CLI and Agents"
description: "The `verso` command and the vault in AI agents."
order: 17
group: tools
slug: "terminal-cli-and-agents"
twin: "terminal-cli-e-agentes"
source: "demo-vault-en/17 - Terminal, CLI and Agents.md"
updated: "2026-10-01"
---
Verso also works outside the window: the `verso` command searches your notes from the terminal, and an AI agent (like Claude) can read the folder through the MCP protocol — without ever writing to it.

---

## Install the `verso` Command

In **Settings › Terminal and agents › The verso command in the terminal**, click **Install**. Verso puts the command at `/usr/local/bin/verso` (macOS may ask for your password); **Remove** takes it away. If another `verso` is already there, the button is **Replace**.

On Windows there is nothing to install: `verso.exe` comes with the app, in its folder. Run it by its path, or put that folder on the PATH to type just `verso`.

On Linux, the package (`.deb` or `.rpm`) already puts `verso` on the PATH, beside the app. With an AppImage, **Install** puts the command in `~/.local/bin`, without asking for a password, and it follows the AppImage when that updates. In the beta, the command is called `verso-beta`.

---

## What the Command Does

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
- **Claude Code** shows the line that connects the folder to Claude Code (`claude mcp add …`), with **Copy**.
- **Other MCP clients** shows the JSON for other programs.

### One Folder or All of Verso

In **Agents: one folder or all of Verso** you choose:

- **One server per folder** (the default): each folder you add becomes a server of its own, and the agent sees only that one.
- **One server for all of Verso**: a single server, `verso`, added once. It serves the folders marked in **This folder is visible to agents** — none until you mark one. The agent asks which exist (`list_folders`) and says which one it wants to read.

In both modes the app does not need to be open: the agent starts `verso` by itself. Everything an agent reads is recorded in `agents.log`, in Verso's configuration folder.

The agent gets these tools, all read-only:

- `search` and `list_notes` (list the notes and boards — also only those with a tag, like `project`, or a property, like `status: active`);
- `read_note` (read a note, with its properties and tags);
- `links` and `backlinks` (a note's connections — and, when the connection is a frontmatter property, like `ally: "[[Baron]]"`, what the relation is);
- `read_board` (read a board: the cards, the arrows with their relations, the drawn texts);
- `query_base` (query a base, like the table Verso shows);
- `unresolved` (the links with no target) and `index` (refresh the index);
- `list_folders` (the visible folders, in all-of-Verso mode).

Try asking: *"which notes have the tag project and what does the Verso Tour show?"*. It reads; you are the one who writes.

---

Go on to [Help, Updates and Diagnostics](/en/wiki/help-updates-and-diagnostics/) or go back to the [Home Page](/en/wiki/welcome-to-verso/).
