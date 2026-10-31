---
title: "Diagramas Mermaid"
description: "Fluxogramas, sequências e outros diagramas escritos em texto e desenhados na nota."
order: 8
group: organize
slug: "diagramas-mermaid"
twin: "mermaid-diagrams"
source: "demo-vault/08 - Diagramas Mermaid.md"
updated: ""
---
O Verso oferece suporte nativo e seguro a diagramas **[Mermaid](https://mermaid.js.org/)** tanto no modo **Leitura** quanto no modo **Editar (Live Preview)**.

> **Dica**
>
> No modo **Editar**, o diagrama é renderizado automaticamente quando você não está com o cursor nele. Para editar o código-fonte, basta clicar no diagrama ou no botão `</>` no canto superior direito!

---

## 1. Fluxograma (Flowchart)

```mermaid
graph TD
    A[Início: Ideia da Nota] --> B{Precisa de Diagrama?}
    B -- Sim --> C[Inserir bloco mermaid]
    B -- Não --> D[Escrever em Markdown puro]
    C --> E[Visualizar em Tempo Real]
    D --> E
    E --> F([Nota Completa e Salva])
```

---

## 2. Diagrama de Sequência (Sequence Diagram)

```mermaid
sequenceDiagram
    autonumber
    actor Usuario as Usuário
    participant Verso as Verso App
    participant Core as Verso Core (Rust)
    participant Disk as Sistema de Arquivos

    Usuario->>Verso: Digita nova anotação
    Verso->>Core: Salva texto atômico
    Core->>Disk: Grava arquivo .md
    Disk-->>Core: Confirmação de I/O
    Core-->>Verso: Nota indexada e atualizada
    Verso-->>Usuario: Feedback "Salvo."
```

---

## 3. Fluxo de Git (Git Graph)

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

## 4. Diagrama de Classes (Class Diagram)

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
    Vault "1" *-- "*" Note : contém
    Note "1" o-- "*" Diagram : inclui
```

---

## 5. Gráfico de Pizza (Pie Chart)

```mermaid
pie title Distribuição de Notas do Cofre
    "Engenharia e Código" : 42
    "Design e Arquitetura" : 28
    "Notas Diárias" : 18
    "Leituras e Livros" : 12
```

---

Siga para [Board e Relações](/wiki/board-e-relacoes/) ou volte para a [Página Inicial](/wiki/bem-vindo-ao-verso/).
