---
title: "Compatibilidade com o Obsidian"
description: "Para quem vem do Obsidian ou usa os dois: a mesma pasta, nada reescrito ao abrir, o que funciona igual, o que o Verso acrescenta, o que não existe e como experimentar."
order: 37
group: start
slug: "compatibilidade-com-o-obsidian"
twin: "compatibility-with-obsidian"
source: "demo-vault/37 - Compatibilidade com o Obsidian.md"
updated: "2026-10-31"
---
Se você já guarda suas notas no **Obsidian**, não precisa mover nada para experimentar o Verso. O Verso abre **a mesma pasta**, lê os mesmos arquivos, e o formato dele *estende* o do Obsidian: nunca dá a uma construção que já existe um significado diferente. Esta nota diz o que isso quer dizer na prática: o que funciona igual, o que o Verso acrescenta, o que é diferente ou não existe, e como usar os dois na mesma pasta sem susto.

> **Nota: De onde vem isto**
>
> Tudo abaixo vem das decisões e dos testes do próprio projeto (a especificação do dialeto, `docs/spec/dialect.md`, e os ADRs 0011, 0012, 0030 e 0070). O comportamento do Obsidian o Verso conhece só pela documentação pública e por observá-lo de fora. Onde o projeto ainda não decidiu algo, esta nota diz isso em vez de adivinhar.

---

## 1. Uma pasta, dois apps

**Abra o seu cofre como pasta.** No Verso, `⌘ O` (Windows e Linux: `Ctrl + O`) abre uma pasta — veja [Arquivos e Pastas](/wiki/arquivos-e-pastas/). O Verso não tem "cofre" próprio: qualquer pasta é a unidade, e um cofre do Obsidian é só uma pasta.

**Abrir um arquivo nunca o reescreve.** Nem o frontmatter, nem as quebras de linha, nem os espaços. Uma nota só é gravada de volta quando *você* a muda, e então de forma atômica, depois de conferir que o arquivo no disco ainda é o que o Verso leu. Se o Obsidian (ou o Git, ou um serviço de sincronização) mudou o arquivo nesse meio-tempo, o Verso mostra as duas versões e a diferença em vez de sobrescrever: [o que acontece](/wiki/escrevendo-no-editor/#quando-a-nota-muda-fora-do-verso).

**A pasta `.obsidian` fica em paz.** O Verso não a apaga, não grava nela e não entra nela. Só três arquivos dela são *lidos*, nunca gravados, e só para te oferecer algo:

- os ajustes das Notas diárias (`daily-notes.json`) e os do plugin Periodic Notes — **Ajustes › Notas periódicas** passa a oferecer **Usar os ajustes do Obsidian** ([Notas Diárias, Calendário e Templates](/wiki/notas-diarias-calendario-e-templates/));
- a única chave `attachmentFolderPath` do `app.json`, para que uma pasta servida a um celular mostre a pasta de anexos do cofre, só para leitura ([Verso num Servidor](/wiki/verso-num-servidor/)).

Nada mais dos ajustes do Obsidian é lido: temas, atalhos e escolha de plugins ficam no Obsidian.

**Os ajustes do próprio Verso** (favoritos, caminhos ignorados, formatos das notas periódicas…) ficam em `.verso/settings.json` *dentro* da pasta, e o arquivo só é criado quando você muda um deles pela primeira vez. O Obsidian não mostra `.verso` na lista de arquivos, então um não atrapalha o outro. O índice de busca e o layout da janela nem estão na pasta: ficam no seu computador, e o índice é um cache que se pode apagar sem perder nada.

---

## 2. O que funciona igual

| Nas suas notas | No Verso |
|---|---|
| `[[nota]]`, `[[nota\|apelido]]`, `[[nota#seção]]`, `[[nota#^bloco]]` | Links, backlinks e o grafo — [Links, Âncoras e Notas Incorporadas](/wiki/links-ancoras-e-notas-incorporadas/), [Visualização de Grafo e Conexões](/wiki/visualizacao-de-grafo-e-conexoes/) |
| Incorporações `![[...]]` | O mesmo, para notas, imagens e arquivos — [Links, Âncoras e Notas Incorporadas](/wiki/links-ancoras-e-notas-incorporadas/), [Documentos e Mídia](/wiki/documentos-e-midia/) |
| Callouts `> [!tipo] Título` | Desenhados como callouts, com dobrar e aninhar — [Guia de Markdown e Sintaxe](/wiki/guia-de-markdown-e-sintaxe/) |
| `^id` num bloco | A mesma referência; se um id aparece duas vezes, vale o último, como no Obsidian |
| Frontmatter YAML, `tags`, `aliases` | Lidos como propriedades — [Propriedades e Metadados](/wiki/propriedades-e-metadados/); o texto do bloco fica byte a byte como você escreveu |
| `#tags`, `==destaque==`, `%%comentários%%`, notas de rodapé, matemática KaTeX | Veja [Guia de Markdown e Sintaxe](/wiki/guia-de-markdown-e-sintaxe/) |
| Arquivos `.canvas` (JSON Canvas) | Abrem como **boards** — [Board e Relações](/wiki/board-e-relacoes/). O desenho extra do Verso fica numa chave `verso` que o Obsidian deixa intacta |
| Arquivos `.base` | Abrem como **bases**, o mesmo formato — [Visualização de Bases e Dados](/wiki/visualizacao-de-bases-e-dados/) |
| Formatos do Moment.js para notas diárias e semanais | Os mesmos formatos — [Notas Diárias, Calendário e Templates](/wiki/notas-diarias-calendario-e-templates/) |
| A pasta `.trash` | O que você apaga vai para lá também — [Arquivos e Pastas](/wiki/arquivos-e-pastas/) |

Os *arquivos* de quatro plugins também funcionam, porque o Verso lê o que o plugin escreve:

- **Dice Roller**: `` `dice: 1d20+3` `` é um dado que rola num clique — [Dados e Tabelas Sorteadas](/wiki/dados-e-tabelas-sorteadas/).
- **Fantasy Statblocks**: um bloco de código `statblock` com os nomes de chave do plugin desenha uma ficha — [Fichas](/wiki/fichas/).
- **make.md**: `sticker:`, `color:`, `banner:` e o `order:` e o `pinned:` da nota da pasta — [Organizando: figurinhas, capas e páginas](/wiki/organizando-com-figurinhas-capas-e-paginas/).
- **Excalidraw**: um desenho `.excalidraw.md` abre mostrando o desenho, com um botão **Converter em board** que mostra o resultado antes e cria um `.canvas` novo ao lado. O original fica como estava — [Board e Relações](/wiki/board-e-relacoes/).

*Funciona* aqui quer dizer que o arquivo é lido e desenhado; o plugin em si não roda (veja a seção 4).

---

## 3. O que o Verso acrescenta

As extensões do Verso são Markdown comum que **degrada bem**: quem só tem o Obsidian vê um callout, um bloco de código ou propriedades simples, e nada no arquivo perde o sentido.

- **Notas tipadas** — `type:` no frontmatter, ligado a um bloco `verso-schema`, transforma o painel de propriedades num formulário. No Obsidian a nota mostra as propriedades do jeito do Obsidian. Um cofre que já usa `type:` para outra coisa continua válido: sem esquema correspondente, a nota é Markdown puro — [Notas Tipadas](/wiki/notas-tipadas/).
- **O callout secreto** — `> [!secret]` é um callout comum no arquivo, no Obsidian e numa pasta do seu computador. Só um UniVerso (o Verso num servidor) o usa: serve a quem pode apenas *ler* a nota sem aquele bloco — [Dados e Tabelas Sorteadas](/wiki/dados-e-tabelas-sorteadas/), [Verso num Servidor](/wiki/verso-num-servidor/).
- **O callout de oráculo e o bloco roll** — `> [!oracle]` é um callout em qualquer outro lugar; um bloco `roll` é um bloco de código — [Oráculos e Criação de Mundos](/wiki/oraculos-e-criacao-de-mundos/), [A Mesa](/wiki/a-mesa/).
- **Blocos, capas, figurinhas, cartões de infobox, relações tipadas** — de novo frontmatter e Markdown — [Blocos como no Notion](/wiki/blocos-como-no-notion/), [Organizando: figurinhas, capas e páginas](/wiki/organizando-com-figurinhas-capas-e-paginas/), [Notas Tipadas](/wiki/notas-tipadas/).

Desligar um recurso de RPG no Verso não muda nenhum arquivo; a ficha vira um bloco de código e o oráculo um callout comum, como o Obsidian os mostra sem o plugin ([Oráculos e Criação de Mundos](/wiki/oraculos-e-criacao-de-mundos/)).

---

## 4. O que é diferente, ou não existe

- **Plugins não rodam.** Um plugin da comunidade do Obsidian não roda no Verso, e rodar plugins de terceiros está **fora do escopo até depois da versão 1**. Os *arquivos* do plugin (seção 2) ainda podem abrir.
- **Dataview.** Um bloco `dataview` não é executado, e um campo em linha `chave:: valor` não é interpretado. A resposta do projeto já vem de fábrica: as bases ([Visualização de Bases e Dados](/wiki/visualizacao-de-bases-e-dados/)) e as notas tipadas, a partir das propriedades no frontmatter. Passar os campos em linha para o frontmatter seria uma conversão, feita só por você, com a diferença mostrada antes.
- **HTML embutido.** O HTML cru numa nota é desenhado por uma lista permitida: `<iframe>`, `<video>` e `<audio>` são descartados na leitura. Isso ainda é uma pergunta em aberto na especificação, então não conte com isso nem num sentido nem no outro. E um `[[link]]` dentro de um `%%comentário%%` ou dentro de HTML é contado como link pelo índice do Verso.
- **Desenhos do Excalidraw.** O desenho do plugin abre mostrando o desenho; transformá-lo num board do Verso é um passo que você dá de propósito, com o resultado mostrado antes, e o original é mantido.
- **As formas aceitas de `tags` e `aliases`** no frontmatter (lista, texto separado por espaços, as duas) não estão fechadas na especificação. O exemplo documentado é a forma de lista.
- **Ajustes.** Temas, snippets de CSS e atalhos do Obsidian não são lidos (seção 1). O Verso tem os dele — [Ajustes, Aparência e Atalhos](/wiki/ajustes-aparencia-e-atalhos/).

---

## 5. Usando os dois na mesma pasta

- Deixe o `.obsidian` como está. O Verso não mexe nele, e um ajuste que você muda no Obsidian não afeta o Verso.
- Edite num ou noutro. O Verso não "normaliza" o que o Obsidian escreveu, então um diff do Git mostra só o que você mudou.
- Se uma nota está aberta nos dois ao mesmo tempo, o Verso nunca escreve por cima de uma mudança que não viu: antes de gravar ele confere o arquivo no disco e, se mudou, mostra as duas versões (seção 1).
- Se a pasta é sincronizada por um serviço (iCloud, OneDrive e afins), um arquivo que na nuvem é só um marcador nunca é tomado por apagado: o Verso espera ele ser baixado.
- O Verso não é o Obsidian: nada no projeto pede que você pare de usar o Obsidian. Você pode experimentar o Verso uma semana numa **cópia** da pasta primeiro, se isso te deixa mais tranquilo.

---

## 6. Experimente

1. Faça uma cópia de um cofre do Obsidian (ou use um que você não se importe de perder) e abra no Verso com `⌘ O`.
2. Abra uma nota cheia de `[[links]]`. Olhe os **Backlinks** e o **grafo**.
3. Passe a nota para o modo **Fonte**: o texto é exatamente o que o Obsidian escreveu. Feche sem digitar e olhe a data do arquivo no Finder ou no Explorer: não mudou.
4. Edite uma linha no Verso. Abra a mesma nota no Obsidian: a mudança está lá e o resto da nota está como era.
5. Abra um arquivo `.canvas`: vira um board. Mova um cartão e olhe o arquivo com o Git (`git diff`): só a linha daquele cartão mudou.
6. Se o cofre tem um desenho do Excalidraw, abra-o e aperte **Converter em board**: a prévia mostra o board antes de qualquer coisa ser criada.
7. Numa nota, digite `> [!secret]` e uma linha embaixo. Abra a nota no Obsidian: é um callout, como qualquer outro.
8. Em **Ajustes › Notas periódicas**, procure **Usar os ajustes do Obsidian** se você usa Notas diárias no Obsidian.

Quando terminar, o cofre continua sendo um cofre do Obsidian.

A seguir: [Instalar o servidor num NAS ou VPS](/wiki/instalar-o-servidor-num-nas-ou-vps/) põe as suas notas num servidor seu. Volte à [Página Inicial](/wiki/bem-vindo-ao-verso/) ou abra o Tour do Verso.
