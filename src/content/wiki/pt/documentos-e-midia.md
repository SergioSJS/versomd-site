---
title: "Documentos e Mídia"
description: "Visualização de PDFs com modo de 2 páginas, redimensionamento de imagens e incorporação de páginas web seguras via iframes."
order: 6
group: organize
slug: "documentos-e-midia"
twin: "documents-and-media"
source: "demo-vault/06 - Documentos e Mídia.md"
updated: "2026-09-25"
---
Imagens, PDFs e páginas da web moram nas notas como o texto: num link, num embed ou numa aba só deles.

---

## Imagens com Controle de Escala

Inclua uma imagem com wikilink (`![[arquivo]]`) ou com Markdown, e dê a largura depois de `|`:

### Wikilink com largura (`![[assets/diagrama.svg|320]]`)
![diagrama](/wiki-assets/diagrama.svg)

### Markdown com largura (`![Diagrama|320](assets/diagrama.svg)`)
![Diagrama](/wiki-assets/diagrama.svg)

- Arraste o **canto** de uma imagem para mudar o tamanho: o Verso escreve a medida no embed.
- No modo Editar, o botão **Inserir imagem** da barra de ferramentas (o último) abre um menu: **Do computador…** abre o seletor de arquivos do sistema, e a imagem escolhida é **copiada** para a pasta `assets` ao lado da nota (o nome da pasta está em Ajustes › Anexos) e o embed `![[nome.png]]` é inserido onde está o cursor. Se já existe uma imagem com esse nome, a nova fica como `nome (2).png`; nada é sobrescrito, e os bytes não são alterados. **Da pasta…** continua mostrando os arquivos que já estão na pasta. No celular e no tablet, o menu oferece **Fotos e arquivos…** e **Tirar foto** (a câmera; a foto entra como `Foto 2026-10-15 142530.jpg`).
- **Cole** ou **arraste** uma imagem para dentro de uma nota (modo Editar) faz o mesmo caminho: ela é salva em `assets` ao lado da nota, e o embed é inserido onde está o cursor.
- Num servidor, uma imagem passa de **32 MB** não é enviada, e quem só lê a pasta não insere imagens.
- Numa aba de imagem, um clique alterna entre caber na tela e o tamanho real.

---

## Leitor de PDF

Abra o Manual do Verso (PDF). A barra do leitor tem, em ordem:

- **Página anterior**, o número da página e **Próxima página**.
- **Afastar**, **Aproximar**, **Ajustar à largura** e **Página inteira**.
- **Modo de exibição de páginas**: cada clique passa por **Página única**, **Duas páginas (com capa)** e **Duas páginas (sem capa)**, como um livro.
- **Buscar no PDF** (também `⌘F` com o PDF aberto).
- **Copiar link desta página**: copia `[[arquivo.pdf#page=N]]` — com o trecho, se houver texto selecionado.
- **Citar seleção nas anotações**: selecione um trecho e clique. O Verso cria, ao lado do PDF, a nota `Nome do PDF — Anotações.md`, e acrescenta nela o trecho como uma citação com link para a página.

### Um PDF dentro da nota

`![[assets/manual-verso.pdf#page=2]]` abre o PDF na página 2:

[manual-verso.pdf](/wiki-assets/manual-verso.pdf)

Também valem `#2`, `|page=5`, `|600` (a altura, em pixels) e `|800x600` (largura e altura). O que vem depois de `|` vale no modo Leitura.

---

## Páginas da Web Dentro da Nota

Um `<iframe>` mostra uma página da web no meio da nota:

<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-46.66%2C-23.57%2C-46.63%2C-23.54&amp;layer=mapnik" style="width: 100%; height: 320px; border-radius: 8px;"></iframe>

Na primeira vez que um site aparece numa nota, o Verso pergunta antes de carregar: **Permitir sempre** libera aquele site em todas as notas; **Cancelar** troca a página por um link. Uma página da sua rede local (deste computador ou de um aparelho da rede) vem com um aviso a mais.

- Os sites liberados ficam em **Ajustes › Geral › Sites permitidos nas notas**, um por linha.
- **Ajustes › Geral › Carregar conteúdo remoto** desligado não carrega nada de fora: a nota mostra um botão **Carregar**.

Uma página inteira também pode ser uma nota sua — veja [Páginas Web e HTML](/wiki/paginas-web-e-html/).

---

Avance para o próximo guia: [Notas Diárias, Calendário e Templates](/wiki/notas-diarias-calendario-e-templates/).
Ou retorne para a [Página Inicial](/wiki/bem-vindo-ao-verso/).
