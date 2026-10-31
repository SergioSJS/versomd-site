---
title: "Ajustes, Aparência e Atalhos"
description: "Tema, paleta, fontes, idioma e os seus próprios atalhos."
order: 15
group: start
slug: "ajustes-aparencia-e-atalhos"
twin: "settings-appearance-and-shortcuts"
source: "demo-vault/15 - Ajustes, Aparência e Atalhos.md"
updated: "2026-10-01"
---
`⌘,` abre os **Ajustes** (também no botão da faixa da esquerda e no menu **Verso › Ajustes…**). O campo **Buscar nos ajustes…** acha uma opção pelo nome.

---

## As Seções

- **Geral**: o idioma (**Sistema**, **Português (Brasil)** ou **English**), o tempo do salvamento automático, as atualizações, o console do desenvolvedor, o conteúdo remoto e os sites permitidos nas notas.
- **Notificações**: para cada tipo — sincronização, conflitos, compartilhamento, atualizações, cota, lixeira, presença — **Aviso e lista**, **Só na lista** ou **Desligado**, e as notificações do sistema (veja [Ajuda, Atualizações e Diagnóstico](/wiki/ajuda-atualizacoes-e-diagnostico/#notificações)).
- **Aparência**: tema, tom do escuro, tamanho e largura do texto e a galeria de **Temas** — um clique troca o visual; **Copiar** e **Editar** abrem o **Construtor de tema** —, com temas para compartilhar.
- **Editor**: abas de pré-visualização, o modo em que as notas abrem, a correção ortográfica e os números de linha.
- **Arquivos e links**: pastas de build e `.gitignore`, o formato dos links novos, e as pastas de anexos, das notas diárias e dos templates.
- **Board**: como um `.canvas` abre e como os boards novos nascem (veja [Board e Relações](/wiki/board-e-relacoes/)).
- **Atalhos**: as teclas de cada comando.
- **Terminal e agentes**: o comando `verso` e o Verso nos agentes de IA (veja [Terminal, CLI e Agentes](/wiki/terminal-cli-e-agentes/)).

---

## Da pasta ou desta máquina

Três ajustes são da pasta, não do computador: os **Favoritos**, as **pastas de build** e o **`.gitignore`** (em **Arquivos e links**) e o **Nome da nota da pasta** (em **Organização**). Eles ficam dentro da própria pasta, em `.verso/settings.json`, e viajam com ela: abra a pasta sincronizada em outro computador — pela sincronização do Verso (veja [Verso num Servidor](/wiki/verso-num-servidor/)), iCloud, OneDrive, Syncthing ou git — e eles estão lá. Ao lado de cada um, os Ajustes dizem **Da pasta** ou **Desta máquina**: desta máquina enquanto a pasta não tem o arquivo, que só aparece na primeira mudança — abrir uma pasta nunca o cria. Quem só lê uma pasta de servidor guarda os favoritos dela neste computador, e a estrela funciona do mesmo jeito: ao lado deles, os Ajustes dizem **Desta máquina**.

Experimente: em **Arquivos e links**, desligue **Ignorar pastas de build** e veja a etiqueta passar a **Da pasta**; ligue de novo para voltar.

---

## Aparência

- **Temas**, no alto, juntos: o **Tema** (**Sistema**, **Claro** ou **Escuro**), o **Tom do escuro** e, logo abaixo, a galeria (veja adiante); ao trocar o modo, os cartões mudam na hora.
  - **Tom do escuro**, no tema escuro: **Suave** (o padrão, para ler e escrever por horas), **Profundo** (quase preto, para um quarto escuro ou uma tela OLED) e **Penumbra** (mais claro).
- **Texto**: o **Tamanho da fonte**, de 12 a 30 pixels, e a **Largura do texto**: **Do tema** (o padrão: segue a largura do tema, ou a do Verso), **Estreita** (40 rem), **Média** (48 rem), **Padrão** (100 caracteres), **Larga** (72 rem) ou **Tela inteira**. O tamanho da fonte muda só o texto das notas — leitura e edição —, nunca a interface nem esta janela; a largura que você escolher vale por cima da do tema, e o efeito aparece na hora.
- **Zoom da janela** (no aplicativo de mesa): − , o nível e + , com **Redefinir (100%)**, o mesmo zoom dos atalhos; cada mudança de zoom também aparece por um instante num selo no canto da janela.
- **Mais opções de texto**: a fonte do texto da interface e a cor de destaque dos títulos, de âmbar a ametista.
- **Botões da faixa lateral**: cada um com o seu interruptor; a engrenagem de Ajustes fica sempre, para que haja volta.

### Temas

Em **Ajustes › Aparência**, a galeria **Temas** mostra um cartão por tema: os quatro do Verso — **Papel**, **Sépia**, **Ardósia** e **Musgo** — e os seus. Cada cartão é uma páginazinha desenhada com as cores e as fontes reais daquele tema (claro ou escuro, como a janela está), com o que está em uso marcado. **Um clique usa o tema**, na hora, sem recarregar; o teclado também chega: Tab até o cartão e Espaço.

- **Copiar** faz uma cópia editável, chamada **Cópia de …**. Os temas do Verso não se alteram: para mudar um, copie e edite a cópia.
- Os **seus** temas também têm **Editar**, **Exportar** e **Excluir**.
- **Mais temas…**, abaixo da galeria, abre uma janela com **todos** os temas que o Verso traz — os quatro dele e o **catálogo** (Nord, Dracula, Catppuccin, Solarized, Gruvbox, Minimal e outros) —, com **busca** (pelo nome ou pelo autor) e filtros por **Modo** (claro, escuro, ambos) e por **Superfície**. Cada cartão é desenhado com as cores do próprio tema e traz, embaixo, o crédito de quem o inspirou (**Inspirado em Minimal, de Steph Ango (MIT)**, com o link da fonte). Um clique usa o tema; **Copiar** faz uma cópia para editar, que guarda o crédito. No celular a janela ocupa a tela toda, com **Voltar**. Um tema de um lado só (só escuro, por exemplo) leva o modo do Verso para esse lado, e a mensagem diz isso. Os créditos de todos ficam em **Ajustes › Créditos e agradecimentos**.
- **Novo tema** começa do visual de agora; **Importar…** lê um arquivo `.verso-theme`. Um tema que a pasta sugere aparece como um cartão em **Sugerido pela pasta**.

Experimente agora: clique em **Sépia**, troque o tema para **Escuro** e compare os três tons do escuro; depois volte para **Papel**.

### Construtor de tema

**Editar** abre o **Construtor de tema** numa aba própria — grande, ao lado de uma nota se você dividir o painel, e no celular como qualquer aba. De um lado, os controles; do outro, uma página de exemplo grande — títulos, texto, um link, uma etiqueta, uma citação, código, uma tabela, um botão e um aviso —, desenhada com as mesmas classes de uma nota. Mude uma cor e a página de exemplo e a janela inteira mudam na hora, sem recarregar.

- **Claro e Escuro** se editam à parte: escolha o lado em **Lado que você edita**.
- Os controles vêm em grupos, fechados até você abrir (no celular, um grupo de cada vez): **Base**, **Títulos**, **Código**, **Cores das callouts** e **Estrutura**.
- **Base**: papel, papel 2, linhas finas, tinta, tinta 2, selo (links e destaques) e latão (títulos e marcas). Cada cor tem o seletor e um campo de texto, que aceita `#rrggbb`, `rgb()`, `hsl()` e `oklch()`. As cores de apoio — o terceiro papel, a tinta de apoio, os fundos suaves — o Verso calcula a partir dessas. Aqui também ficam as **fontes** (dos títulos, de leitura, de código) e o **tamanho** do texto.
- **Títulos**: uma cor para cada nível, do 1 ao 6. **Código**: o fundo e o texto do código. **Cores das callouts**: vermelho, laranja, amarelo, verde, ciano, azul, roxo e rosa, que pintam os avisos (callouts), as respostas do oráculo e as fichas. Uma cor que você não escolhe não muda: o Verso usa a que sempre usou, ou a calcula da Base. O botão de voltar ao lado de cada cor devolve esse padrão.
- **Estrutura**: dezesseis escolhas de uma lista fechada — **Superfície** (tonal, plana, contraste com a barra lateral escura, ou cartões), **Estilo dos títulos** (simples, com linha, com barra lateral, versalete), **Estilo das tabelas** (linhas finas, zebrada, com grade), **Estilo das etiquetas** (pílula, contorno, mínima) e **Cantos** (suaves, retos, arredondados); e dez de leitura: **Tamanho dos títulos** (padrão, compacto, grande), **Peso dos títulos** (seminegrito, normal, negrito), **Largura do texto** (padrão, estreita, larga), **Altura da linha** (normal, justa, arejada), **Estilo das citações** (barra em itálico, barra, painel, simples), **Estilo dos links** (sublinhado, sublinhado ao passar o mouse, só a cor), **Cor de negrito e itálico** (do texto, de destaque, semânticas), **Estilo das caixas de tarefa** (quadrada, cantos arredondados, redonda), **Espaço entre parágrafos** (padrão, justo, solto) **Estilo dos avisos** (com fundo, com contorno, título em faixa) e **Linha horizontal (---)** (a linha com ⁂ de sempre, linha simples, linha fina, linha que se desfaz nas pontas), com a cor dela logo abaixo. A prévia ao lado mostra cada escolha na hora, e o que fica no primeiro valor da lista é o visual do próprio Verso.
- **Contraste**: a razão entre o texto e o fundo, ao vivo — agora também o texto do código sobre o fundo do código e cada título sobre o papel —, numa seção que se abre sozinha quando há aviso. Abaixo de **4,5:1** o construtor avisa — muita gente lê mal assim —; se uma escolha deixasse um par abaixo de **3:1**, ela é desfeita sozinha, uma vez, com uma mensagem que diz o que foi desfeito.
- **Restaurar padrão** fica sempre no alto, e se alcança com o teclado.

Nada vale até **Salvar tema**. **Cancelar** — ou fechar a aba e responder **Descartar** — devolve o visual como era, e a página de Ajustes volta sobre o cartão do tema. Cada aparelho guarda os seus temas; num servidor, eles vão com a sua conta.

**Compartilhar**: **Exportar** (no cartão do seu tema) guarda o visual num arquivo `.verso-theme` pequeno, só com cores, fontes e tamanho — nunca uma nota, nunca CSS livre. Para usar o de outra pessoa, **Importar…** ou arraste o arquivo para a janela. O Verso confere o arquivo: só aceita as cores e as fontes da lista, e recusa o que deixaria o texto ilegível, dizendo por quê. Há um para experimentar: Pergaminho.verso-theme (está em `assets/temas`) — arraste-o para a janela e depois clique em **Papel** para voltar.

**Sugerir à pasta**: no construtor, em **Compartilhar com a pasta**, quem pode escrever na pasta pode **Sugerir à pasta** o tema. Quem a abrir vê um aviso — **Esta pasta sugere o tema …** — com **Usar** e **Agora não**; a pasta nunca aplica nada sozinha, e a resposta fica lembrada neste aparelho. **Remover a sugestão** desfaz.

Experimente: **Copiar** o **Papel**, **Editar** a cópia, mude a **Tinta** para um azul-escuro, veja o exemplo mudar, tente um cinza claro demais e leia a mensagem que desfaz a escolha; depois **Cancelar**.

---

## Atalhos

Em **Atalhos**, cada comando mostra a sua tecla e o botão **Alterar**: clique, e aperte a combinação nova — ela precisa ter `⌘` (ou ser `⌥ Enter`, a do **Abrir link sob o cursor**). Se outro comando já usava aquela combinação, ela sai dele. **Restaurar** volta ao padrão.

**Zoom da janela** (no aplicativo de mesa): `⌘+` aumenta, `⌘-` diminui e `⌘0` volta a 100 % (`Ctrl` no Windows e no Linux), de 50 % a 200 %, de 10 em 10; `Ctrl` com a roda do mouse ou o gesto de pinça no trackpad fazem o mesmo — menos sobre um board, um mapa, um PDF ou o grafo, que dão zoom nele mesmo. Cada computador guarda o seu zoom. É diferente do **Tamanho da fonte**, que só aumenta o texto das notas. O nível aparece num selo por um instante e fica em **Ajustes › Aparência › Zoom da janela**. No navegador vale o zoom do próprio navegador.

Os atalhos do dia a dia estão na [Página Inicial](/wiki/bem-vindo-ao-verso/); os do board, em [Desenhando no Board](/wiki/desenhando-no-board/).

---

## A Barra de Menus (macOS)

No Mac, a barra do topo da tela reúne o que o Verso faz, com a tecla de cada comando ao lado — as mesmas teclas de **Atalhos**, e mudam junto com elas. Cada item faz o mesmo que o comando de mesmo nome na paleta (`⌘⇧P`).

- **Arquivo**: novas notas, pastas, boards e bases; abrir pasta e recentes; importar arquivos; **Sincronizar com…**; salvar, renomear, mover, histórico de versões e lixeira.
- **Edição**: desfazer, copiar e colar; buscar na nota, substituir, buscar nas notas; propriedade, template e base.
- **Visualização**: leitura e edição, painéis, barra e abas verticais, dividir, zoom, grafos, **Aparência e temas…** e **Mais temas…**.
- **Ir**: voltar e avançar, abrir nota, paleta, nota diária, trocar foco, abas.
- **RPG**: **Rolar dados…**, **Perguntar ao oráculo**, **Novo projeto a partir de modelo…** e **Ajustes de Dados e RPG…**. Um recurso desligado em **Ajustes › Recursos** some do menu; o item dos ajustes fica, para ligá-lo de volta.
- **Ajuda**: notificações, tutorial, atualizações, relatar um problema e créditos.

Um item cinza não vale agora (por exemplo **Salvar** sem nenhuma nota aberta). 
### No Windows e no Linux

Não há barra no topo da tela: há um botão **☰ Menu** no canto de cima à esquerda da janela, como o do Obsidian. Ele abre os **mesmos menus** (Arquivo, Edição, Visualização, Ir, RPG, Janela e Ajuda), com as mesmas teclas (**Ctrl** no lugar de ⌘), os itens cinza e o RPG que some com o recurso desligado. **Ajustes…** e **Encerrar o Verso** ficam no fim de **Arquivo**. Pelo teclado: **Alt** sozinho abre o menu; **Alt** e a letra sublinhada abre um menu direto (**Alt+A** Arquivo, **Alt+E** Edição, **Alt+V** Visualização, **Alt+I** Ir, **Alt+R** RPG, **Alt+J** Janela, **Alt+U** Ajuda); as setas andam, **Enter** executa e **Esc** volta um passo. No navegador e no celular não há esse botão: a paleta (`Ctrl+⇧+P`) tem os mesmos comandos.

---

## A Faixa da Esquerda

Os botões da faixa da esquerda (busca, abrir, nota de hoje, grafo…) se arrastam para mudar de ordem. Com o botão direito num deles: **Mover para cima**, **Mover para baixo**, **Ocultar este botão**, **Mostrar botões ocultos** e **Restaurar ordem**.

---

Siga para [Páginas Web e HTML](/wiki/paginas-web-e-html/) ou volte para a [Página Inicial](/wiki/bem-vindo-ao-verso/).
