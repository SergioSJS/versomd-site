---
title: "Visualização de Bases e Dados"
description: "Como funcionam os arquivos `.base` e como incorporar exibições vivas nas suas notas."
order: 4
group: organize
slug: "visualizacao-de-bases-e-dados"
twin: "bases-and-data-views"
source: "demo-vault/04 - Visualização de Bases e Dados.md"
updated: "2026-09-25"
---
Uma **base** — um arquivo `.base`, o mesmo formato do Obsidian — mostra notas como uma planilha viva: cada nota é uma linha, e as propriedades dela viram colunas. Abra a Projetos deste cofre: ela reúne as notas da pasta `projetos/`.

---

## Uma Base Dentro da Nota

A visão **Todos os Projetos** da base, incorporada aqui com `![[Projetos.base#Todos os Projetos]]`:

*Projetos*

Ela não é só para olhar: os menus dela — **Ordenar**, **Filtrar**, **Propriedades**, **Ajustes da visão** — gravam a `Projetos.base` daqui mesmo, como a aba da base faria. Se a base mudou em outro lugar enquanto isso, nada é gravado por cima: a visão avisa e mostra o arquivo como ele está.

---

## As Seis Visões

Uma base pode ter várias visões; troque de visão pelo menu no topo dela.

1. **Tabela**: linhas e colunas. Clique num cabeçalho para ordenar; o menu do cabeçalho tem **Resumir: Soma**, **Resumir: Média** e outros, que somam a coluna numa linha de total.
2. **Fichas** (o tipo **Cards**): um cartão por nota.
3. **Lista**: compacta, para ler rápido.
4. **Kanban**: colunas por uma propriedade (aqui, `status`). Arraste um cartão para outra coluna e o Verso grava o valor novo na nota.
5. **Calendário**: cada nota no dia da sua propriedade de data (aqui, `date`). Os projetos são de setembro de 2026: volte até lá com a seta **‹**. Arraste uma nota para outro dia e a data muda na nota; o **+** num dia cria uma nota nele.
6. **Mapa**: cada nota com coordenadas vira um marcador (aqui, a propriedade `local` dos projetos — São Paulo, Lisboa, Recife). Veja abaixo.

---

## A Barra da Base

- **Ordenar**, **Filtrar**, **Propriedades** (as colunas que aparecem), **Ajustes da visão** e **Buscar nesta visão**.
- **Novo**: cria uma nota que já entra na base.
- **Mais**: **Copiar como tabela Markdown**, **Copiar como CSV** e **Salvar como nota Markdown**.
- No canto da aba, **Visão** e **Código** alternam entre a base e o texto dela.

---

## O Mapa

A visão **Mapa** da base, incorporada:

*Projetos*

- As coordenadas vêm de uma propriedade: um texto `"lat, lng"` (`local: "-23.5505, -46.6333"`) ou uma lista de dois números. Em **Ajustes da visão**, escolha essa propriedade, o ícone e a cor dos marcadores, o zoom e a altura dentro da nota.
- Clique num marcador e a nota abre; pare o ponteiro sobre ele e ela aparece numa prévia.
- Abaixo do mapa, os mesmos lugares em lista, na ordem da visão: é por ela que o teclado e o leitor de tela chegam a cada lugar.
- Com o botão direito no mapa: **Copiar coordenadas**, **Usar como centro da visão** e **Usar este zoom na visão**.
- **Sem rede por padrão**: o mapa desenha o contorno do mundo que vem com o Verso (Natural Earth, domínio público). Um fundo detalhado só com a sua escolha, em **Ajustes › Fundo dos mapas** — o OpenFreeMap está lá pelo nome, desligado até você ligar. Uma base que peça o próprio fundo (`mapTiles`) pergunta antes de buscar qualquer coisa: o servidor de tiles fica sabendo quais lugares você olha.
- O formato é o do plugin **Maps** do Obsidian: a mesma base abre como mapa nos dois.

---

## Expressões Regulares nas Fórmulas

Uma fórmula pode usar uma expressão regular, como no Obsidian: `/padrão/flags`. A coluna **Mês** da tabela acima vem desta:

```
date.toString().replace(/^(\d{4})-(\d{2})-\d{2}$/, "$2/$1")
```

- `texto.replace(/x/, "y")` troca a primeira ocorrência; com `g`, todas. `$1`, `$2` repetem o que cada parêntese pegou.
- `/abc/.matches(texto)` diz se há uma ocorrência; `texto.split(/,\s*/)` divide o texto.
- As flags `i` (sem diferença de maiúsculas), `m`, `s` e `u` valem como no JavaScript.
- `html("<b>Atenção</b>")` mostra HTML na célula, limpo como o HTML de uma nota: sem scripts, e imagens da web só com **Carregar conteúdo remoto** ligado.
- O Verso avalia em tempo linear: nenhuma expressão trava a base, nem num servidor. Por isso não há *lookahead*, *lookbehind* (`(?<=…)`) nem referência a grupo (`\1`): uma expressão que use um deles mostra um aviso que diz qual, em vez de um resultado inventado.

---

## Por Dentro do Arquivo

O código da `Projetos.base` (veja em **Código**):

```yaml
filters:
  and:
    - file.inFolder("projetos")   # só as notas desta pasta
formulas:
  orcamento_mil: "(orcamento / 1000).toFixed(1)"   # uma coluna calculada
  mes: 'date.toString().replace(/^(\d{4})-(\d{2})-\d{2}$/, "$2/$1")'   # uma expressão regular
properties:
  formula.orcamento_mil:
    displayName: Orçamento (mil)   # o nome que a coluna mostra
views:
  - type: table
    name: Todos os Projetos
    sort:
      - property: date
        direction: DESC
    summaries:
      orcamento: Sum   # a linha de total
  - type: kanban
    name: Por Status
    groupBy: status
  - type: calendar
    name: Calendário
    startDate: date
  - type: map
    name: Mapa
    coordinates: note.local   # a propriedade com as coordenadas
```

> **Aviso: Sem filtro, a base lista tudo**
>
> Uma base sem `filters` mostra **todos** os arquivos da pasta aberta. Filtre por pasta (`file.inFolder("x")`), por tag (`file.hasTag("x")`) ou por link (`file.hasLink("Nota")`), e combine com `and` e `or`.

---

## Uma Base no Meio da Nota

Na paleta (`⌘⇧P`), **Inserir base** escreve um bloco `base` na nota. Este aqui lista as notas diárias, com o foco de cada dia; o botão `</>` mostra o código:

```base
filters:
  and:
    - file.inFolder("Diário")
views:
  - type: table
    name: Notas diárias
    order:
      - file.name
      - foco_principal
```

---

## Como Criar uma Base

- Na faixa da esquerda, o botão **Nova nota** (`+`) abre o menu **Nova…**: escolha **Nova base**.
- Com o botão direito numa pasta, ou no espaço vazio da árvore de arquivos: **Nova base**.
- Na paleta (`⌘⇧P`): **Nova base**.

Explore as notas de projetos deste cofre:
- Projeto Alpha
- Projeto Beta
- Pesquisa e Descobertas

Voltar para [Início](/wiki/bem-vindo-ao-verso/) ou seguir para [Visualização de Grafo e Conexões](/wiki/visualizacao-de-grafo-e-conexoes/).
