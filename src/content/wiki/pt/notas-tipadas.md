---
title: "Notas Tipadas"
description: "`type:` e um schema: o formulário de um tipo, o que não cabe marcado, nada escrito sem você, e `type:` na busca."
order: 21
group: organize
slug: "notas-tipadas"
twin: "typed-notes"
source: "demo-vault/21 - Notas Tipadas.md"
updated: "2026-10-07"
---
Uma **nota tipada** é uma nota comum com `type:` no frontmatter. Quando esse nome é o de um **schema** do cofre, o painel de propriedades vira um formulário: as propriedades que o tipo declara vêm primeiro, com o nome certo e o campo certo para cada uma. O arquivo continua Markdown puro — o Obsidian lê a nota como uma nota com propriedades.

---

## O Schema

Um schema é um bloco de código `verso-schema` numa nota qualquer do cofre, como Personagem:

````markdown
```verso-schema
type: personagem
label: { pt-BR: Personagem, en: Character }
properties:
  - key: nível
    kind: number
    label: { pt-BR: Nível, en: Level }
```
````

- `type` é o nome que as notas escrevem no seu `type:` (maiúsculas não importam).
- `label` é o nome do tipo em cada idioma da interface.
- `properties` lista as propriedades, cada uma com `key`, `kind` e `label`. Os tipos: `text`, `list`, `number`, `checkbox`, `date`, `datetime`, `link` e `image`.
- `layout: infobox`, opcional, desenha as propriedades como uma ficha ao lado do texto (veja **O Infobox**, abaixo).

Nada num schema roda: não há fórmula, consulta nem valor calculado. Só um bloco no topo da nota conta — um bloco dentro de uma lista ou citação é um exemplo, e a nota diz isso.

---

## O Que o Verso Faz

Abra Lia Torres e Capitão Ruy:

- Acima das propriedades, **Tipo: Personagem** e um atalho para o schema.
- As propriedades declaradas primeiro, na ordem do schema, com o rótulo do idioma da janela; uma data ganha um seletor de data, uma caixa de seleção vira caixa.
- Um valor que não cabe no tipo — `nível: alto` — aparece **como está escrito, sublinhado**. Nada o converte.
- Uma propriedade declarada que a nota não tem é uma linha vazia: **nada é escrito até você dar um valor**.
- As outras chaves da nota vêm depois.

O que o Verso **nunca** faz: escrever ao abrir, acrescentar chaves sozinho, reordenar ou normalizar valores, nem reescrever as notas quando o schema muda.

---

## O Infobox

Abra Porto Cinzento. O schema Lugar diz `layout: infobox`, e as propriedades viram uma **ficha à direita do texto**, como a de uma wiki — na leitura e no modo Editar:

- No alto, a primeira propriedade do tipo `image`: o mapa do porto. O texto alternativo da imagem é o alias do link — `"[[porto-cinzento.svg|O Porto Cinzento visto do farol]]"` —, senão o título da nota.
- Embaixo, o tipo, e as propriedades declaradas na ordem do schema.
- As outras chaves da nota (aqui, `clima`) ficam dobradas em **Outras propriedades**.
- **Habitantes** é do tipo `link`: cada link entre aspas aparece como um link — clique para seguir. O campo **Adicionar link…** oferece as notas da pasta, como o `[[`.

É o mesmo painel de propriedades com outro arranjo: editar na ficha é editar o frontmatter, nas mesmas linhas, e abrir a nota não grava nada. Num painel estreito ou no celular, a ficha vai para cima do texto, mostrando a imagem e as três primeiras propriedades; **Mostrar todas as propriedades** abre o resto.

Uma imagem pode ser um link para uma imagem da pasta, um caminho (`assets/mapa.png`, como no `banner:`) ou um endereço da web. **Um endereço da web só aparece se a origem foi aprovada** — como uma página incorporada ([Páginas Web e HTML](/wiki/paginas-web-e-html/)); senão a ficha mostra o endereço como texto, o porquê e o botão **Aprovar**.

No Obsidian, a nota mostra as mesmas propriedades do jeito do Obsidian: nada no arquivo é do Verso.

---

## Quando Algo Não Bate

- **Um `type` que nenhum schema nomeia** deixa a nota como Markdown comum — o seu cofre pode usar `type:` para outra coisa.
- **Dois schemas com o mesmo nome** (por exemplo, um *Duplicar*): nenhum vale, e as notas do tipo dizem quais são os dois, até sobrar um.
- **Um schema que não lê** (um `kind` desconhecido, YAML quebrado) não tipa nada e avisa na própria nota e nas notas do tipo.

---

## Buscar e Agentes

- Na busca, `type:personagem` lista as notas do tipo — junto com `tag:`, `path:` e as palavras.
- Um agente pelo MCP ([Terminal, CLI e Agentes](/wiki/terminal-cli-e-agentes/)) recebe o tipo e as propriedades declaradas de cada nota, e lista as notas de um tipo.

---

## Para Praticar

1. Em Capitão Ruy, troque `alto` por um número no campo **Nível** e veja a marca sumir.
2. Preencha a **Primeira aparição** e veja a linha entrar no fim do frontmatter (modo **Fonte**).
3. Em Personagem, acrescente uma propriedade ao schema — `- key: facção`, `kind: text` — e volte às notas: a linha nova aparece vazia nas duas, e nenhum arquivo mudou.
4. Busque `type:personagem`.
5. Em Porto Cinzento, no campo **Adicionar link…** de **Habitantes**, escolha uma nota e aperte Enter: o link entra no frontmatter, entre aspas. Clique num habitante para ir até a nota dele.
6. Deixe a janela estreita (ou divida o painel com ⌘\\): a ficha sobe para cima do texto, dobrada.

---

Próxima: [Verso no Celular e no Tablet](/wiki/verso-no-celular-e-no-tablet/) — o Verso com um dedo no lugar do mouse.

Volte para a [Página Inicial](/wiki/bem-vindo-ao-verso/) ou abra o Tour do Verso.
