---
title: "Board e Relações"
description: "Boards (`.canvas`) desenhados com o Excalidraw, com as notas da pasta como cartões, e relações tipadas no frontmatter."
order: 9
group: boards
slug: "board-e-relacoes"
twin: "board-and-relations"
source: "demo-vault/09 - Board e Relações.md"
updated: "2026-09-30"
---
Um **board** é um arquivo `.canvas` — o mesmo formato do canvas do Obsidian — desenhado com o Excalidraw. Abra o Board de Demonstração para ver: as notas da pasta aparecem como cartões, com o conteúdo delas; um grupo junta os projetos; setas ligam um cartão a outro; e dá para desenhar à mão livre por cima de tudo.

*Board de Demonstração*

---

## O que dá para fazer num board

- **Pôr coisas nele** pelo botão **Inserir**, na barra de ferramentas do board (onde fica a imagem): *Imagem ou PDF do computador…* (copiados para a pasta de anexos — também dá para soltar ou colar uma imagem no board), *Nota ou arquivo da pasta…* (qualquer nota, imagem ou PDF — ou arraste um arquivo da árvore para o board), *Cartão de texto* (Markdown) e *Link da web…* (um endereço, que só abre com um clique). No mesmo menu, *Setas soltas* faz as setas novas não prenderem nos cartões — segurar `⌘` enquanto desenha faz o mesmo.
- **Imagens** aparecem só como a imagem, sem moldura nem título; selecionada, os botões **Abrir**, **Trocar arquivo…** e **Recortar** ficam no alto à direita. **Recortar** escolhe a parte da imagem que o cartão mostra, arrastando os cantos — o arquivo da imagem não muda, e **Restaurar original** desfaz.
- **Ligar cartões**: com a ferramenta de seta do Excalidraw, desenhe de uma borda de cartão até a borda de outro. A seta vira uma aresta do canvas, que o Obsidian também mostra.
- **Desenhar à vontade**: formas, traço livre, texto solto e setas soltas ficam no mesmo arquivo, sob a chave `verso`. O Obsidian mantém essa parte intacta quando edita o canvas.
- **Ler e editar num cartão**: duplo clique num cartão de nota entra nele — dá para ler e rolar a nota ali — e mais um clique no texto edita, sem sair do board; `Esc` sai. O ↗ no canto do cartão (ou `⌘` + duplo clique) abre a nota numa aba, e o ⇄ troca o arquivo do cartão. Num cartão de texto, o duplo clique edita o texto.
- **Mapas**: selecione uma imagem e use **Usar como mapa** (nas ferramentas do canto): ela trava, vai para o fundo e fica marcada, para nunca se mover sem querer — **Deixar de usar como mapa** está no *Sumário*, em *Mapas*. Arraste uma nota da árvore para o mapa, ou use **Fixar uma nota aqui…**: nasce um **alfinete**, uma marca com a figurinha e o nome da nota que mantém o tamanho em qualquer zoom; um clique abre a nota, e parar o ponteiro sobre ele a mostra num cartão. **Enviar para trás** e **Trazer para a frente** valem para qualquer cartão. Um PNG grande é cortado em ladrilhos e abre rápido, até no celular. Num mapa, como em qualquer board, um cartão pode ser **Oculto dos leitores** num UniVerso — veja o cadeado e **Ver como leitor**; não é criptografia: quem tem o arquivo, e o Obsidian, vê o cartão. O mapa continua sendo um `.canvas` que o Obsidian abre, com a imagem e os alfinetes como cartões.
- **Ver como lista**: o botão *Sumário* mostra grupos, cartões e conexões numa lista que dá para percorrer pelo teclado.
- **Ver o JSON**: o modo *Texto*, no canto da aba, mostra o arquivo como ele é.
- **Aprender a desenhar**: o Treino do Board ensina o Excalidraw lição por lição, e [Desenhando no Board](/wiki/desenhando-no-board/) reúne as ferramentas e os atalhos.
- **Criar um board**: **Novo board** na paleta, no menu **Nova…** do botão `+` da faixa da esquerda, ou no menu de uma pasta da árvore. Ele nasce como `Sem título.canvas`, na pasta de **Ajustes › Board › Pasta para boards novos** (vazia: a raiz).
- **Exportar**: **Exportar imagem** (`⌘⇧E`, ou o menu ☰ do board) — **Formato** PNG ou SVG, **Escala** de 1× a 3×, **Fundo**, **Escuro** e **Só a seleção**; depois **Salvar na pasta**, **Salvar em Downloads** ou **Copiar**.
- **Cartão perdido**: se o arquivo de um cartão some ou muda de nome fora do Verso, o cartão mostra *Não encontrado na pasta*; um duplo clique nele, ou **Trocar arquivo…**, aponta o cartão para o arquivo certo.
- **Ajustes › Board**: abrir um `.canvas` como board ou como texto, abrir mostrando tudo ou onde você parou, o traço das formas novas (à mão livre ou limpo), a fonte do texto desenhado, a grade e a pasta dos boards novos.

> **Nota**
>
> Abrir um board nunca reescreve o arquivo. Ao salvar, o Verso muda só o que você mudou e mantém o layout em que o Obsidian escreve — um `git diff` mostra só a linha do cartão que você arrastou.

---

## Relações tipadas

Uma seta entre duas notas pode virar uma **relação**: selecione a seta e use *Promover a relação*. O Verso pede o tipo — por exemplo `depende_de` — e mostra a mudança no frontmatter da nota de origem antes de gravar:

```yaml
depende_de: "[[projetos/Projeto Alpha]]"
```

Esta própria nota tem uma: a propriedade `relacionado` no topo aponta para Projeto Alpha. Uma propriedade cujo valor é um wikilink **entre aspas** (ou uma lista deles) é um link — aparece nos backlinks da nota de destino e acompanha renomeações. Sem aspas, `[[x]]` é só YAML.

---

## Desenhos do plugin Excalidraw

Uma nota desenhada com o plugin Excalidraw do Obsidian mostra, abaixo do título, o botão **Converter em board**. Ele mostra o `.canvas` novo e o cria ao lado do desenho quando você confirmar; o desenho original fica como estava. Experimente com o desenho deste cofre.

Voltar para [Início](/wiki/bem-vindo-ao-verso/).
