---
title: "Organizando: figurinhas, capas e páginas"
description: "Figurinhas, cores, capas com reposicionamento, páginas de pasta, ordenação manual, itens ocultos e edição de notas incorporadas."
order: 19
group: organize
slug: "organizando-com-figurinhas-capas-e-paginas"
twin: "organizing-with-stickers-covers-and-pages"
source: "demo-vault/19 - Organizando com figurinhas, capas e páginas.md"
updated: "2026-10-02"
---
O Verso organiza notas e pastas com o mesmo frontmatter que o plugin make.md escreve no Obsidian: um cofre rotulado lá aparece rotulado aqui, e o contrário também. Tudo fica em Markdown, no próprio arquivo.

---

## 1. Figurinhas e cores

Uma nota ou pasta pode ter uma figurinha (um emoji ou um ícone) e uma cor que tinge o nome. Elas aparecem na árvore, nas abas e no cabeçalho da nota.

### Como definir
1. Clique na figurinha à esquerda do título da nota aberta (sem figurinha, ali fica um brilho apagado; a estrela, à direita, é a dos favoritos), ou clique com o botão direito na nota ou pasta na árvore e escolha **Personalizar › Alterar figurinha…** ou **Personalizar › Alterar cor…**.
2. Busque um emoji pelo nome, em português ou inglês, ou passe para a aba **Ícones**.
3. Escolha uma cor da paleta.

No frontmatter, a figurinha fica na forma do make.md:
```yaml
---
sticker: emoji//1f680
color: "#e07a52"
---
```
Um ícone fica como `lucide//rocket`. Um valor que o Verso não reconhece não vira figurinha: o item mantém o ícone dele.

---

## 2. Capas

Uma capa é uma imagem no topo da nota:

- **Adicionar capa**: no topo da nota, clique em **Adicionar capa** e digite o caminho de uma imagem da pasta (como `assets/diagrama.svg`) ou um endereço da web. Uma imagem da web só carrega com **Ajustes › Geral › Carregar conteúdo remoto** ligado.
- **Reposicionar**: sobre a capa, clique em **Reposicionar** e arraste a imagem na vertical, ou use as setas `↑` e `↓`. **Salvar posição** (ou `Enter`) grava; `Esc` desiste.
- **Remover capa** tira a capa da nota.

A posição vai para `banner_y`, uma porcentagem de 0 (topo da imagem) a 100 (base), como o make.md escreve:
```yaml
---
banner: assets/diagrama.svg
banner_y: "42"
---
```

---

## 3. Páginas de pasta

Clique numa pasta na árvore para abrir a **página da pasta**: no topo, a nota da pasta; embaixo, uma tabela com os itens dela.

- A nota da pasta é `Projetos/Projetos.md` (dentro da pasta, com o nome dela) ou `Projetos.md` (ao lado da pasta). Para usar outro nome, como `README`, preencha **Ajustes › Organização › Nome da nota da pasta**.
- A nota da pasta não aparece na árvore: abra pelo botão direito na pasta › **Organizar › Abrir nota da pasta**, ou pela página da pasta.
- Numa pasta sem nota, a página oferece **Criar nota da pasta**.
- Um clique com o botão direito no espaço vazio da página traz o mesmo menu da árvore: nova nota, pasta, base, board ou página web, **Mostrar no Finder** e os caminhos.
- Renomear a pasta renomeia a nota dela junto: `Projetos/Projetos.md` vira `Trabalhos/Trabalhos.md`.
- Os rótulos de uma pasta ficam no frontmatter da nota dela. Rotular, ordenar ou fixar algo numa pasta sem nota cria a nota dela.

### Itens novos
A nota da pasta pode dar uma figurinha, uma cor e um template a cada nota nova criada ali:
```yaml
---
items_sticker: emoji//1f4dd
items_color: "#4361ee"
items_template: "Templates/Nota de Reunião.md"
---
```

---

## 4. Ordem manual e itens fixados

- **Arrastar**: arraste uma nota ou pasta para cima ou para baixo dentro da mesma pasta.
- **Pelo teclado**: no menu do item, **Organizar › Mover para cima** ou **Organizar › Mover para baixo**.
- **Fixar**: no menu do item, **Fixar na pasta** — ou segure `⇧` ao soltar o item na pasta. **Desafixar da pasta** desfaz.
- **Duas ordens**: uma pasta fica em ordem alfabética até o primeiro arraste, que cria a ordem dela a partir da alfabética. O botão ao lado de **Arquivos** (A→Z na alfabética, uma alça na personalizada), ou o botão direito numa pasta ou na área vazia da árvore, troca a árvore toda entre **Ordem alfabética** e **Ordem personalizada** (a marcada é a atual). A alfabética não apaga nada: de volta à personalizada, cada pasta tem a ordem que tinha.
- **Na raiz**: as notas soltas na raiz também se ordenam arrastando. A ordem fica numa nota na raiz com o nome da pasta aberta, criada no primeiro arraste.

A ordem e os fixados ficam na nota da pasta: `order` com os nomes dos itens, `pinned` com links para eles. Renomear ou mover um item pelo Verso atualiza a lista.
```yaml
---
order:
  - Pesquisa e Descobertas.md
  - Projeto Alpha.md
  - Projeto Beta.md
pinned:
  - "[[Pesquisa e Descobertas]]"
---
```

---

## 5. Ocultar da árvore

- No menu do item na árvore, **Organizar › Ocultar da árvore**. Ele some da árvore, mas continua na busca e nos links.
- Para mostrar de novo, abra **Ajustes › Organização › Itens ocultos da árvore** e clique em **Mostrar**.

---

## 6. Editar uma nota embutida no lugar

Uma nota embutida (`![[Nome da Nota]]`) pode ser editada ali mesmo, sem abrir outra aba:

- Na **Leitura** ou no **Editar**, clique no texto da nota embutida, ou no botão no canto dela. O botão de novo (ou `Esc`) termina a edição.
- O que você digita é salvo na nota embutida, não nesta. Cada uma tem o próprio desfazer (`⌘Z`).
- Se a nota embutida mudar em outro lugar enquanto você digita — em outra aba, ou fora do Verso —, aparece o aviso de conflito, com as duas versões; nada é sobrescrito sem você escolher.
- Prefere abrir a nota ao lado? Desligue **Ajustes › Organização › Editar notas embutidas no lugar**.

Experimente na nota abaixo:

*Pesquisa e Descobertas*

---

## 7. Emojis com `:`

- No editor, digite `:` e o nome de um emoji — `:foguete` sugere 🚀.
- As sugestões aceitam nomes em português e inglês. Use `↑` e `↓` para escolher, `Enter` para inserir e `Esc` para fechar.
- Desligue em **Ajustes › Organização › ':' abre o seletor de emoji**.

---

## 8. Focos (raízes nomeadas)

Focos são conjuntos de pastas e notas que atuam como raízes da árvore de arquivos — compatíveis com o make.md:

- **Aba Focos**: no painel da direita (ao lado de Favoritos), a aba **Focos** lista todos os focos do cofre. **Início** representa o cofre completo e fica sempre primeiro.
- **Filtrar a árvore**: clique num foco para mostrar apenas as suas pastas e notas. O cabeçalho da árvore de arquivos passa a exibir o foco ativo (ex: `ARQUIVOS · Projetos`), com um botão para voltar a Início.
- **Criar e adicionar**: clique com o botão direito numa pasta ou nota na árvore e escolha **Organizar › Criar foco aqui** ou **Organizar › Adicionar ao foco…**.
- **Pelo teclado**: use o comando **Trocar foco** na paleta de comandos para alternar rapidamente entre os focos.
- **Focos iguais aos do make.md**: se o cofre tiver `.space/waypoints.json`, o Verso lê seus focos e oferece gravar as alterações de volta. Você pode ligar ou desligar em **Ajustes › Organização › Manter os focos iguais aos do make.md**.

---

Siga para [Blocos como no Notion](/wiki/blocos-como-no-notion/), volte para a [Página Inicial](/wiki/bem-vindo-ao-verso/) ou abra o Tour do Verso.
