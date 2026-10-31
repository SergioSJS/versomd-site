---
title: "Desenhando no Board"
description: "A cola do Excalidraw: ferramentas, grupos, setas, camadas e atalhos."
order: 10
group: boards
slug: "desenhando-no-board"
twin: "drawing-on-the-board"
source: "demo-vault/10 - Desenhando no Board.md"
updated: "2026-10-01"
---
Os boards do Verso são desenhados com o **Excalidraw**. Para aprender fazendo, abra o Treino do Board: catorze lições, cada uma com um espaço para praticar. Esta nota é a cola, para consultar depois.

*Treino do Board*

---

## Ferramentas

Cada ferramenta da barra de cima tem a sua tecla, que aparece ao lado do ícone.

| Tecla | Ferramenta |
| :--- | :--- |
| `V` ou `1` | Seleção |
| `R` ou `2` | Retângulo |
| `D` ou `3` | Losango |
| `O` ou `4` | Elipse |
| `A` ou `5` | Flecha |
| `L` ou `6` | Linha |
| `P` ou `7` | Desenhar, à mão livre |
| `T` ou `8` | Texto |
| `E` ou `0` | Borracha |
| `N` | Nota adesiva |
| `H` | Mão, para arrastar o board |
| `F` | Ferramenta de quadro (o grupo do canvas) |
| `K` | Apontador laser |
| `Q` | Manter a ferramenta depois de desenhar |

Segure `⇧` enquanto desenha para fazer quadrados e círculos perfeitos. Um duplo clique no vazio põe um **cartão de texto** (Markdown, onde um código `dice:` vira dado) — o botão **Cartão de texto** da barra faz o mesmo; em **Ajustes › Board › Duplo clique no board cria** você troca por **Texto desenhado**, o texto solto do Excalidraw. Para o texto desenhado, use a ferramenta Texto (`T`).

Em **Mais ferramentas** (o `⋮` da barra) estão também **Desenho vira forma** (`⇧ X`: um rabisco vira retângulo, círculo, losango, linha ou seta) e **Balde de tinta** (`B`: pinta uma região fechada).

## Andar pelo board

- **Mover**: dois dedos no trackpad, ou a roda do mouse (com `⇧`, para os lados). Ou segure `espaço` e arraste.
- **Aproximar**: a pinça no trackpad, `⌘` + roda, ou `⌘ +` e `⌘ −`. `⌘ 0` volta a 100%.
- **Ver tudo**: `⇧ 1`. **Ver só a seleção**: `⇧ 2`.
- **Ir a um grupo**: o botão **Sumário**, no alto à direita do board, lista os grupos e os cartões; um clique num grupo mostra o grupo inteiro.

## Ligar uma coisa na outra

Com a **Flecha**, comece em cima de um cartão e solte em cima de outro: a borda acende quando a seta gruda. Cada ponta fica mirando o ponto onde você começou e onde soltou — parando na borda do cartão — e continua mirando ali quando os cartões se movem e quando o board abre de novo. Um duplo clique na seta escreve um rótulo. Na coluna da esquerda, o botão **Tipo de seta** escolhe entre reta, curva e em cotovelo, e as **Pontas**.

Para uma **seta livre**, que não prende em cartão nenhum, segure `⌘` enquanto desenha. Sem teclado (no toque), ligue **Inserir › Setas soltas**: as setas novas saem livres até você desligar. Com a Flecha na mão, a linha de dicas embaixo da barra lembra disso — e avisa quando Setas soltas está ligado.

Uma seta entre dois cartões é uma conexão do canvas, que o Obsidian também mostra. Entre duas notas, o botão **Promover a relação** grava o laço no frontmatter da nota de origem — veja [Board e Relações](/wiki/board-e-relacoes/).

## Grupos

- **Quadro**: é o grupo do canvas, e o Obsidian o mostra como grupo. A **Ferramenta de quadro** (`F`, em **Mais ferramentas**) cerca o que você arrastar em volta; ou selecione as coisas e, no botão direito, **Envolver a seleção num quadro**. O quadro novo se chama *Frame*: um duplo clique no nome o renomeia.
- **Agrupar** (`⌘ G`): junta desenhos para que se movam juntos. `⌘ ⇧ G` separa; um duplo clique entra no grupo para mexer numa peça só.

## Camadas

O que foi desenhado por último fica por cima. Para mudar a ordem, use **Camadas** no painel, o botão direito, ou `⌘ ]` (para a frente), `⌘ [` (para trás), `⌘ ⌥ ]` (primeiro plano) e `⌘ ⌥ [` (fundo).

## Cor e estilo

Com algo selecionado, o painel da esquerda mostra **Contorno**, **Fundo**, **Preenchimento**, a espessura, o estilo e a precisão do traço, **Arestas** e **Opacidade**. `⌘ ⌥ C` copia o estilo e `⌘ ⌥ V` cola em outra coisa. Cartões de nota também mudam de cor, preenchimento, arestas e traço, e o Verso guarda tudo no arquivo.

## Atalhos

| Ação | macOS | Linux / Windows |
| :--- | :--- | :--- |
| **Ver tudo** | `⇧ 1` | `Shift + 1` |
| **Ver a seleção** | `⇧ 2` | `Shift + 2` |
| **Zoom 100%** | `⌘ 0` | `Ctrl + 0` |
| **Selecionar tudo** | `⌘ A` | `Ctrl + A` |
| **Duplicar** | `⌘ D` | `Ctrl + D` |
| **Agrupar / separar** | `⌘ G` / `⌘ ⇧ G` | `Ctrl + G` / `Ctrl + Shift + G` |
| **Para a frente / para trás** | `⌘ ]` / `⌘ [` | `Ctrl + ]` / `Ctrl + [` |
| **Primeiro plano / fundo** | `⌘ ⌥ ]` / `⌘ ⌥ [` | `Ctrl + Shift + ]` / `Ctrl + Shift + [` |
| **Copiar / colar o estilo** | `⌘ ⌥ C` / `⌘ ⌥ V` | `Ctrl + Alt + C` / `Ctrl + Alt + V` |
| **Bloquear** | `⌘ ⇧ L` | `Ctrl + Shift + L` |
| **Grade** | `⌘ '` | `Ctrl + '` |
| **Desfazer / refazer** | `⌘ Z` / `⌘ ⇧ Z` | `Ctrl + Z` / `Ctrl + Shift + Z` |
| **Buscar no board** | `⌘ F` | `Ctrl + F` |
| **Exportar imagem** | `⌘ ⇧ E` | `Ctrl + Shift + E` |
| **Todos os atalhos** | `?` | `?` |

> **Nota**
>
> Com o board em foco, alguns atalhos do Verso dão lugar aos do Excalidraw: `⌘ D` duplica, `⌘ K` cria um link no que estiver selecionado, `⌘ [` e `⌘ ]` mudam a camada. Clique fora do board — na lista de arquivos, por exemplo — para usá-los no Verso. `⌘ P`, `⌘ F` e `⌘ ⇧ E` funcionam também no board.

Siga para [Escrevendo no Editor](/wiki/escrevendo-no-editor/) ou volte para [Início](/wiki/bem-vindo-ao-verso/) · Veja também o Tour do Verso.
