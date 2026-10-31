---
title: "Links, Âncoras e Notas Incorporadas"
description: "Wikilinks simples, links com apelidos, saltos para cabeçalhos (`#Título`), links para notas ausentes e incorporação de notas."
order: 2
group: start
slug: "links-ancoras-e-notas-incorporadas"
twin: "links-anchors-and-embedded-notes"
source: "demo-vault/02 - Links, Âncoras e Notas Incorporadas.md"
updated: "2026-09-25"
---
No Verso, as conexões entre notas são cidadãs de primeira classe. Este guia demonstra como criar wikilinks, navegar diretamente para seções internas com âncoras e incorporar notas e blocos.

---

## 1. Tipos de Wikilinks

### Link Direto
No modo **Leitura**, um clique segue o link. No modo **Editar**, o clique põe o cursor no link, para editá-lo — `⌘` + clique o segue, e `⌥ Enter` (`Alt + Enter`) abre o link sob o cursor — um `[[link]]`, um `![[embed]]`, um link `[texto](endereço)` ou um endereço solto — sem o mouse. Está na paleta como **Abrir link sob o cursor**.

Link para uma nota existente pelo nome. Ao digitar `[[`, o Verso sugere as notas e os arquivos da pasta, o mais parecido primeiro; `[[Nota#` sugere os títulos daquela nota, e `[[#` os títulos desta. O formato do link inserido segue **Ajustes › Arquivos e links › Formato de novo link** (o mais curto possível, relativo à nota, ou a partir da raiz da pasta).
- [Bem-vindo ao Verso](/wiki/bem-vindo-ao-verso/)
- [Guia de Markdown e Sintaxe](/wiki/guia-de-markdown-e-sintaxe/)

Outro jeito: arraste uma nota da árvore de arquivos para o texto — entra um link para ela no ponto onde você soltar (uma imagem ou um PDF entram como embed).

### Prévia ao Passar o Mouse
Pare o ponteiro sobre um link por meio segundo, no modo **Leitura**: aparece um cartão com a nota que ele nomeia, já rolada até o título ou o bloco do link — sem sair desta nota. Leve o ponteiro para dentro do cartão para rolar o texto; um clique nele abre a nota. No modo **Editar**, segure `⌘` (`Ctrl` no Windows e no Linux) enquanto para sobre o link. Experimente nestes dois:
- [as fórmulas do Guia de Sintaxe](/wiki/guia-de-markdown-e-sintaxe/#fórmulas-matemáticas-em-katex)
- a descoberta da escrita atômica

A prévia também aparece sobre as linhas do painel **Links**, sobre os nós do grafo e sobre o nome de um cartão no board. Num celular ou tablet, onde não há ponteiro: um toque num link no modo Editar mostra a prévia acima de **Abrir** e **Editar link**; no grafo e no board, segure o dedo parado sobre a nota. Pelo teclado, o comando **Ver a prévia do link sob o cursor** (⌘⇧P) abre o cartão com o foco nele, e `Esc` o fecha e devolve o foco — ele não tem tecla própria: escolha uma em **Ajustes › Atalhos**. Para não ver o cartão ao passar o mouse: **Ajustes › Editor › Prévia ao passar o mouse**.

### Link com Apelido (Alias)
Altere o texto visível mantendo o destino original com a barra vertical `|`:
- [Ir para a Página Inicial](/wiki/bem-vindo-ao-verso/)
- [Acessar o Guia de Sintaxe](/wiki/guia-de-markdown-e-sintaxe/)

### Link para Nota Inexistente (Criação Automática)
Clique no link abaixo para testar o comportamento de criação automática estilo Obsidian (a nota será criada e aberta instantaneamente no editor):
- Nova Ideia de Projeto

---

## 2. Saltos de Cabeçalho (Âncoras)

### Salto dentro do Próprio Documento
Clique para rolar suavemente até a seção de teste no final deste arquivo:
- [Pular diretamente para a Seção de Destino Local](#seção-de-destino-local)

### Salto para Cabeçalho em Outra Nota
Você também pode apontar para cabeçalhos de outras notas usando a sintaxe `[[Nota#Título]]`:
- [Ver Fórmulas Matemáticas no Guia de Sintaxe](/wiki/guia-de-markdown-e-sintaxe/#fórmulas-matemáticas-em-katex)
- [Ver Blocos de Código](/wiki/guia-de-markdown-e-sintaxe/#blocos-de-código-com-botão-de-copiar)

---

## 3. Notas Incorporadas (Transclusão / Embeds)

Você pode incluir o conteúdo de outra nota dentro desta nota usando o prefixo `!`. Passe o mouse sobre a nota incorporada: o botão **Editar ao lado** abre a nota original numa divisão ao lado, pronta para editar.

*Pesquisa e Descobertas*

### Incorporar só um bloco

Um `^id` no fim de um parágrafo, de um item de lista ou de um título dá nome àquele bloco; `![[nota#^id]]` mostra só ele, e `[[nota#^id]]` leva até ele. Um `^id` sozinho numa linha, depois de uma linha em branco, nomeia o bloco de antes — uma tabela, um bloco de código, uma citação. Este embed mostra só o terceiro item das descobertas:

*Pesquisa e Descobertas*

Se o mesmo `^id` aparecer duas vezes numa nota, vale o último, como no Obsidian, e a nota avisa. A marca `^id` não aparece na Leitura; no Editar ela fica apagada, para você ver onde está.

---

## 4. Quem Aponta para Esta Nota

Todo link cria o caminho de volta. Abra o painel da direita (`⌘⌥→`, ou o botão no canto direito da barra de status) e veja as abas:

- **Links**: em cima, os **Backlinks** — as notas que apontam para a nota aberta — e, em **Menções sem link**, as que citam o nome dela sem ser link; embaixo, depois de um traço, os **Links de saída**: para onde esta nota aponta.
- **Estrutura**: os títulos da nota, para pular entre eles.

### Menções sem link

Em **Menções sem link**, cada linha é um lugar onde outra nota escreve o nome desta sem ser link — o nome inteiro, maiúsculas ou minúsculas tanto faz, acentos contam ("Porto" acha "porto", não "Pôrto"), e cada um dos `aliases` da nota vale como nome. Código, comentários, tags e o que já é link ficam de fora. A linha mostra o trecho em volta, e:

- **Linkar** troca aquele trecho por um link ali mesmo: `[[Nome]]`, ou `[[Nome|texto]]` quando o texto escrito é outro (outra caixa, um alias). Numa nota aberta numa aba, ⌘Z desfaz.
- **Linkar todas** mostra antes, como um diff, cada nota e cada linha que vai mudar; nada é gravado até você confirmar, e uma nota que mudou nesse meio-tempo fica de fora, com o nome dito.

Quem só lê uma pasta num servidor vê a lista, sem os botões.

> **Exemplo: Experimente**
>
> Esta frase escreve o nome Lia Torres sem link. Abra a nota dela (⌘P e o nome dela), vá em **Links** no painel da direita e, em **Menções sem link**, clique em **Linkar** na linha desta nota: a frase passa a ter o link.

### Sugestões enquanto escrevo

Em **Ajustes › Editor**, **Sugerir links enquanto escrevo** (desligado por padrão) faz o Verso oferecer o link enquanto você escreve. Digite o começo de um nome — por padrão três letras ou mais, numa palavra que começa com maiúscula ou número, como `Por`, `Porto C` ou `2026` (para as notas com data) — e uma lista mostra até cinco notas (e apelidos) da pasta que começam assim; as **setas** escolhem, **Tab** ou **Enter** aceitam e escrevem o link sobre o que você digitou, **Esc** dispensa a lista para aquela palavra. Se você digitar o nome inteiro, junto ao cursor aparece `Ligar a [[Nome]]`, que fica mesmo depois de um espaço ou uma vírgula, até a próxima palavra começar; **Tab** ou **Enter** escrevem o link (`[[Nome]]`, ou `[[Nome|texto]]` quando o que você digitou é outra caixa ou um apelido). Duas opções logo abaixo ajustam isso: **Letras para sugerir** (de 1 a 10; com 2, `Po` já lista) e **Só em palavras com maiúscula ou número** (desligada, `porto ci` também lista Porto Cinzento — com mais ruído). O texto nunca muda sozinho. No celular o aviso é um botão para tocar. Nunca aparece dentro de código, de um link ou do cabeçalho de propriedades, nunca oferece a própria nota, e as listas **Pastas ignoradas** e **Nomes ignorados** tiram do caminho o que for ruído, como nomes que são palavras comuns.

Outro caminho, ligado por padrão (**Citar uma nota com @**, no mesmo lugar): digite `@` no começo de uma palavra e a mesma lista de notas do `[[` se abre; continue digitando para filtrar e escolha uma nota — o `@` e o que veio depois viram `[[Nome]]` (ou `[[Nome|texto]]`). **Esc** deixa o texto como você digitou. Não abre em `fulano@email`, nem em código, links, fórmulas ou tags.

Renomear uma nota não quebra nada: o Verso mostra as notas que apontam para ela e atualiza os links quando você confirma (veja [Arquivos e Pastas](/wiki/arquivos-e-pastas/)).

---

## Espaçamento para Teste de Rolagem

Abaixo temos algumas linhas de preenchimento para garantir que o salto com âncora role visivelmente a tela.

...
...
...
...
...
...

---

## Seção de Destino Local

> **Nota**
>
> **Você chegou à Seção de Destino Local!**
> Se você clicou no link `[[#Seção de Destino Local]]`, a tela rolou até aqui automaticamente.

Voltar para [Início](/wiki/bem-vindo-ao-verso/) ou seguir para [Propriedades e Metadados](/wiki/propriedades-e-metadados/).
