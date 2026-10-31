---
title: "Blocos como no Notion"
description: "Arrastar parágrafos e itens pela alça ⋮⋮, o + que abre o menu `/`, o menu de cada bloco e as teclas do Notion."
order: 20
group: organize
slug: "blocos-como-no-notion"
twin: "blocks-like-in-notion"
source: "demo-vault/20 - Blocos como no Notion.md"
updated: "2026-10-06"
---
No modo **Editar**, cada parágrafo, título, item de lista, citação, bloco de código ou tabela é um **bloco** que se move com o mouse — como no Notion — e o arquivo continua Markdown puro, que o Obsidian lê igual.

Um bloco é um **parágrafo**, nunca uma linha: Enter quebra a linha dentro dele, e Enter duas vezes começa o bloco seguinte.

---

## A Alça e o +

Passe o mouse sobre um bloco: na margem da esquerda aparecem um **+** e uma alça **⋮⋮**, e um contorno leve mostra onde o bloco começa e termina.

- **Arraste a ⋮⋮** para mover o bloco. Uma linha mostra onde ele vai cair; levar o mouse mais para a direita põe um item de lista **dentro** do item de cima. Perto da borda, a nota rola sozinha. `Esc` cancela.
- **Clique na ⋮⋮** para o menu do bloco: **Transformar em…**, **Duplicar**, **Copiar link do bloco** e **Excluir**.
- **Clique no +** para um bloco novo logo abaixo, com o menu `/` aberto. `Esc` desfaz.

Um `⌘Z` desfaz um arraste inteiro. Com um trecho selecionado, a alça move todos os blocos que a seleção toca.

Numa tela de toque não há mouse para passar sobre o bloco: a alça e o **+** não aparecem, e a barra acima do teclado faz o mesmo no bloco onde está o cursor — **mover para cima** e **para baixo**, **Transformar em…**, **excluir** e o **menu do bloco**. Veja [Verso no Celular e no Tablet](/wiki/verso-no-celular-e-no-tablet/).

---

## Teclas

| Ação | macOS | Linux / Windows |
| :--- | :--- | :--- |
| **Mover bloco para cima / baixo** | `⌘ ⇧ ↑` / `⌘ ⇧ ↓` | `Ctrl + Shift + ↑` / `↓` |
| **Duplicar bloco** | `⌘ D` | `Ctrl + D` |
| **Transformar bloco em…** | `⌘ /` | `Ctrl + /` |
| **Mover a linha** (como antes) | `⌥ ↑` / `⌥ ↓` | `Alt + ↑` / `↓` |

A nota de hoje passou para `⌘⇧D`. Todos esses comandos estão na paleta (`⌘⇧P`) — também **Excluir bloco** e **Copiar link do bloco** — e cada um pode ganhar outra tecla em **Ajustes › Atalhos**.

---

## Atalhos de Escrita

- `[] ` no começo de uma linha vira uma tarefa: `- [ ] `.
- No menu `/`, **Recolhível** escreve um destaque que abre e fecha (`> [!note]- `).
- **Copiar link do bloco** escreve um `^id` no fim do parágrafo (só uma vez) e copia `[[Nota#^id]]`; num título, copia `[[Nota#Título]]`.

---

## Ajustes

Em **Ajustes › Editor**:

- **Alças dos blocos** — ligado. Desligado, a margem some e a nota fica como antes.
- **Enter começa um bloco novo** — desligado. Ligado, como no Notion: Enter num parágrafo começa o bloco seguinte e `Shift-Enter` quebra a linha. Listas, citações, código e tabelas mantêm o seu Enter.

---

## Para Praticar

Arraste os itens para pôr a lista em ordem, mova o parágrafo abaixo para depois da dica e ponha um item dentro de outro:

1. Terceiro passo
2. Primeiro passo
3. Segundo passo

- Fruta
- Maçã
- Legume

Este parágrafo quer ir para depois da dica: arraste-o pela ⋮⋮, ou ponha o cursor nele e aperte `⌘⇧↓`.

> **Dica: Dica**
>
> Uma lista numerada se renumera sozinha quando um item muda de lugar.

---

Próxima: [Notas Tipadas](/wiki/notas-tipadas/). Ou volte para a [Página Inicial](/wiki/bem-vindo-ao-verso/), ou abra o Tour do Verso.
