---
title: "Escrevendo no Editor"
description: "Os modos Leitura, Editar e Fonte, a barra de formatação, o menu `/` e o salvamento."
order: 11
group: start
slug: "escrevendo-no-editor"
twin: "writing-in-the-editor"
source: "demo-vault/11 - Escrevendo no Editor.md"
updated: "2026-10-01"
---
Tudo o que acontece enquanto você escreve: os três modos de uma nota, a barra de formatação, o menu `/`, o salvamento e as mudanças feitas fora do Verso.

---

## Os Três Modos

No canto de cada nota, três botões:

- **Leitura**: a nota como fica pronta. Um duplo clique no texto passa para o Editar.
- **Editar**: o Markdown vira formatação enquanto você escreve — títulos, negrito, links e tarefas aparecem formatados, e a marcação volta onde o cursor está. Aqui, um clique num link põe o cursor nele; `⌘` + clique segue o link.
- **Fonte**: o texto puro, marcação à mostra, com o YAML das propriedades.

`⌘E` alterna entre Leitura e Editar; **Fonte** está na paleta (`⌘⇧P`). O modo em que as notas abrem fica em **Ajustes › Editor › Abrir notas em**.

No **Editar**, cada parágrafo, item de lista ou título é um bloco que se arrasta pela alça ⋮⋮ da margem, como no Notion — veja [Blocos como no Notion](/wiki/blocos-como-no-notion/).

---

## A Barra de Formatação

Nos modos Editar e Fonte, acima da nota:

| Botão | Faz | Atalho |
| :--- | :--- | :--- |
| **Título** | troca entre título 1, 2, 3 e texto | `⌘⇧1` |
| **Negrito** / **Itálico** | `**` e `*` | `⌘B` / `⌘I` |
| **Riscado** / **Destaque** | `~~` e `==` | — / `⌘⇧H` |
| **Link** | `[texto](endereço)` | `⌘⇧K` |
| **Link interno [](#)** | abre as sugestões de nota | |
| **Lista**, **Lista numerada**, **Tarefa**, **Citação** | o começo da linha | |
| **Código**, **Separador** | `` ` `` e `---` | |
| **Tabela** | insere uma tabela, ou alinha a do cursor | `⌘⌥T` |

---

## O Menu `/`

No começo de uma linha, digite `/` e escolha um bloco. Digitar filtra a lista; `Enter` insere; `Esc` fecha.

- **Básico**: Título 1, 2 e 3, Citação, Bloco de código, Divisória.
- **Listas**: Tarefa, Lista, Lista numerada.
- **Destaques**: Destaque: nota, Destaque: dica, Destaque: aviso.
- **Inserir**: Tabela, Link interno, Embutir nota, Imagem, Link, **Data de hoje**, **Hora agora** e **Inserir template…**.

**Divisória pelo teclado**: digite `---` e aperte Enter. O Verso escreve a linha vazia que a Markdown pede em volta da divisória — antes, quando o texto de cima faria dela o sublinhado de um título, e depois — e deixa o cursor embaixo, pronto para escrever; um só `⌘Z` desfaz. Fora do cursor, a linha vazia entre dois blocos aparece só como um vão fino, e na Leitura ela não soma espaço nenhum.

Experimente nesta linha vazia, no modo Editar:

---

## Salvar

O Verso salva sozinho um instante depois que você para de escrever — o tempo fica em **Ajustes › Geral › Autosave (segundos após parar)**. `⌘S` salva na hora. Enquanto há algo por salvar, um **•** e o botão **Salvar** aparecem ao lado do título.

---

## Quando a Nota Muda Fora do Verso

Se outro programa (o Obsidian, o Git, um editor) muda uma nota aberta:

- sem nada seu por salvar, o Verso lê a nota de novo e avisa na barra de status;
- com texto seu por salvar, ele não grava por cima: mostra as duas versões, a diferença entre elas, e os botões **Descartar o meu e recarregar**, **Gravar o meu por cima** e **Guardar os dois** — este deixa a versão do disco com o nome e põe o seu texto numa cópia ao lado, como `Nota (conflito, Mac, 2026-10-10 15.34).md`.

---

## Localizar na Nota

`⌘F` abre a busca na nota, com o contador **N de M** e as opções `Aa` (maiúsculas), `\b` (palavra inteira) e `.*` (expressão regular). Nos modos Editar e Fonte, **Alternar substituição** mostra **Substituir** e **Todas**.

---

## Mais Ajustes do Editor

- **Ajustes › Editor › Correção ortográfica** liga e desliga o sublinhado de erros.
- **Ajustes › Editor › Números de linha**, um por modo: Leitura, Editar e Fonte.
- `Tab` e `⇧Tab` mudam o nível de uma lista.
- Na paleta, **Contrair todas as seções** e **Expandir todas as seções**.

---

Siga para [Busca e Navegação](/wiki/busca-e-navegacao/) ou volte para a [Página Inicial](/wiki/bem-vindo-ao-verso/).
