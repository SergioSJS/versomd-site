---
title: "Mermaid Diagrams"
description: "Flowcharts, sequences and other diagrams written as text and drawn in the note."
order: 8
group: organize
slug: "mermaid-diagrams"
twin: "diagramas-mermaid"
source: "demo-vault-en/08 - Mermaid Diagrams.md"
updated: ""
---
Verso has native, safe support for **[Mermaid](https://mermaid.js.org/)** diagrams in both **Reading** mode and **Edit** mode (Live Preview).

> **Tip**
>
> In **Edit** mode, the diagram is rendered automatically when your cursor is not on it. To edit the source code, just click the diagram or the `</>` button in the top right corner!

---

## 1. Flowchart

```mermaid
graph TD
    A[Start: Note Idea] --> B{Needs a Diagram?}
    B -- Yes --> C[Insert mermaid block]
    B -- No --> D[Write in plain Markdown]
    C --> E[Preview in Real Time]
    D --> E
    E --> F([Note Complete and Saved])
```

---

## 2. Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    actor User as User
    participant Verso as Verso App
    participant Core as Verso Core (Rust)
    participant Disk as File System

    User->>Verso: Types a new note
    Verso->>Core: Saves text atomically
    Core->>Disk: Writes .md file
    Disk-->>Core: I/O confirmation
    Core-->>Verso: Note indexed and updated
    Verso-->>User: Feedback "Saved."
```

---

## 3. Git Graph

```mermaid
gitGraph
    commit id: "v0.1.0"
    commit id: "v0.2.0"
    branch feature/mermaid
    checkout feature/mermaid
    commit id: "parser"
    commit id: "live-preview"
    checkout main
    merge feature/mermaid id: "v0.3.0"
    commit id: "release"
```

---

## 4. Class Diagram

```mermaid
classDiagram
    class Vault {
        +String path
        +listNotes()
        +index()
    }
    class Note {
        +String title
        +String path
        +List~String~ tags
        +render()
    }
    class Diagram {
        +String type
        +renderSvg()
    }
    Vault "1" *-- "*" Note : contains
    Note "1" o-- "*" Diagram : includes
```

---

## 5. Pie Chart

```mermaid
pie title Note Distribution in the Vault
    "Engineering and Code" : 42
    "Design and Architecture" : 28
    "Daily Notes" : 18
    "Reading and Books" : 12
```

---

Continue to [Board and Relations](/en/wiki/board-and-relations/) or go back to the [Home Page](/en/wiki/welcome-to-verso/).
