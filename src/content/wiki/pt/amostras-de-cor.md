---
title: "Amostras de Cor"
description: "Um quadradinho da cor ao lado de `#1d9e75`, `rgb()` e `hsl()`; um clique no editor abre o seletor, e o código volta no mesmo formato."
order: 30
group: organize
slug: "amostras-de-cor"
twin: "colour-swatches"
source: "demo-vault/30 - Amostras de Cor.md"
updated: "2026-10-22"
---
Notas de design, temas, mapas ou jogos guardam códigos de cor — `#1d9e75`, `rgb(29 158 117)` — que só dá para imaginar. O Verso desenha **um quadradinho da cor** ao lado do código, e, no editor, **um clique nele abre um seletor** que reescreve o código. O arquivo não muda por causa do quadradinho: ele é só desenho (como tudo que o Verso mostra sem você pedir).

---

## Quais códigos

| Formato | Exemplos |
| :--- | :--- |
| Hexadecimal | `#1d9e75`, `#1D9E75`, `#fff`, `#1d9e7580`, `#f008` |
| `rgb()` e `rgba()` | `rgb(29, 158, 117)`, `rgb(29 158 117 / 50%)`, `rgba(29,158,117,.5)` |
| `hsl()` e `hsla()` | `hsl(160, 69%, 37%)`, `hsl(160 69% 37% / 0.5)` |

Vale a sintaxe com vírgulas e a com espaços. Nomes de cor (`red`, `teal`) ficam de fora: palavras demais virariam quadradinho.

## Onde aparece

- **Em código** — dentro de crases, como `#bada55`, ou em um bloco de código: `color: #bada55;`.
- **Em propriedades** — `cor: "#1d9e75"` no alto da nota.
- **No texto solto, quando o código não é uma etiqueta.** Em `#bada55`, o Verso lê uma etiqueta (como o Obsidian): ela continua etiqueta, e ganha quadradinho só entre crases. Já `cor:#bada55`, `"#bada55"` e `rgb(186 218 85)` não são etiquetas e ganham.

Um `#123` solto no texto é número de chamado, não cor: sem quadradinho. E um `#abc` dentro de um link, como `[[nota#abc]]` ou o endereço de uma página, nunca é cor.

## Experimente

Em **Editar** ou **Fonte**, clique no quadradinho de `#1d9e75`. O seletor mostra, como o do VS Code, o código no alto, o quadrado de **saturação e brilho**, a faixa de **opacidade** e a faixa de **matiz**.

1. **Arraste** no quadrado ou nas faixas e solte: o código na nota troca, **no mesmo formato** — hexadecimal continua hexadecimal, com as mesmas letras maiúsculas ou minúsculas; `rgb(29 158 117)` continua `rgb()` com espaços; `hsl(…)` continua `hsl(…)`.
2. **Pelo teclado:** Tab vai entre o quadrado e as faixas, as setas ajustam (Shift em passos maiores), **Enter** aplica e fecha, **Esc** cancela e põe o código de volta.
3. **⌘Z** desfaz a troca, como qualquer digitação.
4. No modo **Leitura** o quadradinho só mostra a cor; para ajustar, abra o editor.

Se o código tinha 3 dígitos (`#fff`) e a cor nova não cabe em 3, ele passa a 6 (`#1d9e75`); se você baixar a opacidade de um `#1d9e75`, ele ganha o par de dígitos do alfa (`#1d9e7580`).

## Desligar

Em **Ajustes › Aplicação › Recursos**, a chave **Amostras de cor** tira todos os quadradinhos. Nenhum arquivo muda.

---

Siga para [A Mesa](/wiki/a-mesa/), volte a [Sincronizar com uma Nuvem](/wiki/sincronizar-com-uma-nuvem/), consulte a [Página Inicial](/wiki/bem-vindo-ao-verso/) ou explore o Tour do Verso.
