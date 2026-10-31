---
title: "Arquivos e Pastas"
description: "Criar, renomear sem quebrar links, mover, anexar imagens e a lixeira."
order: 14
group: start
slug: "arquivos-e-pastas"
twin: "files-and-folders"
source: "demo-vault/14 - Arquivos e Pastas.md"
updated: "2026-10-01"
---
O cofre é uma pasta comum do seu computador: o que o Verso cria, renomeia ou apaga é um arquivo que você vê no Finder, e o que você muda no Finder o Verso vê.

---

## Criar

- `⌘N` cria uma nota nova; `⌘⇧N` pede o nome antes.
- O botão **Nova nota** (`+`) da faixa da esquerda abre o menu **Nova…**: nota, pasta, **Nova base**, **Novo board** e **Nova página web…**.
- O botão direito numa pasta da árvore, ou no espaço vazio dela, tem os mesmos itens — o que você criar entra naquela pasta.
- Um nome que o Windows não guarda — `CON`, `NUL`, `COM1`, ponto ou espaço no fim, ou `: * " < > ? | \` — não é criado nem dado num renomear, em nenhum sistema: a pasta pode ser sincronizada com um Windows. O campo diz por quê. Um arquivo que já tem um nome assim continua abrindo, e pode ser renomeado para um nome que todo sistema guarda.
- Também não é criado nem dado num renomear um nome que só difere de outro da mesma pasta em maiúsculas e minúsculas — `nota.md` ao lado de `Nota.md`: num Mac ou no Windows os dois seriam um arquivo só. O mesmo vale para um nome que só difere na forma em que os acentos foram gravados (um `Café.md` vindo de outro sistema). Renomear `nota.md` para `Nota.md` continua valendo.

---

## O Menu de uma Nota

Com o botão direito numa nota da árvore (num celular ou tablet, segure o dedo sobre ela e solte):

- **Abrir**, **Abrir em nova aba**, **Abrir ao lado** e **Relações** (o grafo em volta dela). **Abrir em nova janela** fica no grupo **Janela e localização**.
- **Renomear** (ou `F2` — na árvore ou com a nota aberta —, ou um clique no título da nota aberta). Se outras notas apontam para ela, o Verso mostra, nota por nota, como cada link vai ficar, e pergunta: **Atualizar links** ou **Deixar como está**.
- **Mover para…** leva a nota para outra pasta; **Duplicar** faz uma cópia.
- O que é raro fica em grupos, que abrem num submenu (passe o mouse, ou `→` e `Enter`; `←` ou `Esc` volta): **Personalizar** (figurinha e cor), **Organizar** (selecionar, fixar, mover para cima ou para baixo, ocultar da árvore, transformar em pasta, **Criar foco aqui**), **Janela e localização** (**Abrir em nova janela**, **Mostrar no Finder**, **Copiar caminho relativo** e **Copiar caminho completo**) e **Novo** (nota, pasta, base, board, página web e projeto a partir de modelo).
- **Mover para a lixeira** (ou `Delete`, ou `⌘⌫`, na árvore): a nota vai para a pasta `.trash` do cofre, como no Obsidian — nada se perde de vez; veja [A Lixeira](#a-lixeira).

---

## Trocar de Pasta

O botão com o nome da pasta, no alto da árvore, abre o seletor: as pastas deste computador que você já abriu, as suas e as compartilhadas num servidor. Duas pastas de mesmo nome mostram, embaixo, onde cada uma fica. Uma pasta que você não quer mais ver na lista tem um **×** ao lado (a pasta aberta não tem): ele só a tira da lista — nada é apagado do disco. Para trazê-las de volta, **Ajustes › Arquivos e links › Mostrar pastas ocultas**.

---

## Arrastar e Soltar

- Arraste uma nota da árvore para outra pasta para movê-la. Com o dedo, segure a nota um instante antes de arrastar: deslizar direto só rola a árvore.
- **Vários de uma vez:** `⌘`-clique acrescenta ou tira uma nota ou pasta da seleção, `⇧`-clique seleciona tudo desde a última clicada, e `Esc` limpa. Arraste a seleção para uma pasta, ou use o botão direito nela — **Mover para…**, **Copiar caminhos relativos**, **Mover para a lixeira** —, e tudo vai junto; os links que precisam mudar aparecem num plano só.
- Arraste um arquivo da árvore para o **texto de uma nota**: entra um link para ele (ou um embed, se for imagem, PDF ou outro arquivo).
- Arraste arquivos do Finder para a árvore: eles são copiados para a pasta onde você soltar; um nome já usado ganha `(2)` — nada é sobrescrito nem recusado — e a barra de status diz quais foram renomeados. No app de computador, soltar vai até o mesmo limite de **Importar arquivos…** (abaixo): o app copia o arquivo direto, sem passar pela janela. Na janela de um navegador, ou ao soltar dentro do texto de uma nota ou de um board, o limite é 32 MB por arquivo.
- Sem arrastar: **Importar arquivos…** (paleta de comandos, ou **Novo ▸ Importar arquivos…** no botão direito de uma pasta ou do espaço vazio da árvore) abre o seletor de arquivos do sistema; os escolhidos são copiados para aquela pasta, um nome já usado ganha `(2)`, e o primeiro fica selecionado na árvore. O tamanho máximo de cada arquivo é um ajuste (**Ajustes › Arquivos e links › Tamanho máximo de um arquivo importado**, 32 MB de início, até 1024): um PDF de 200 MB entra sem passar pela janela, o app o copia direto para a pasta. Num servidor o limite é 32 MB.
- Cole ou arraste uma **imagem** dentro de uma nota: ela é salva na pasta `assets` ao lado da nota (**Ajustes › Arquivos e links › Pasta de anexos**).

---

## A Lixeira

O que você apaga fica na **Lixeira** da pasta por 30 dias, e depois some de vez. Para vê-la: **Abrir a lixeira** na paleta de comandos, o botão direito no espaço vazio da árvore, ou **Ajustes › Arquivos e links**, onde o tamanho da lixeira aparece ao lado do espaço da pasta (ela não conta nesse espaço). A lixeira não aparece como uma linha da árvore: a árvore é dos seus arquivos.

- A lista mostra cada item com **onde estava**, o **tamanho**, **quando** foi apagado (e por quem, numa pasta de servidor) e **quando expira**; a busca no alto filtra pelo nome.
- **Restaurar** devolve o item para onde estava — uma pasta volta com tudo o que tinha. Se já existe outro arquivo com aquele nome, nada é substituído: o item volta ao lado, como `Nome (restaurado 2026-10-11).md`, e o Verso diz onde ele foi parar — também quando o nome que está ali só difere em maiúsculas e minúsculas. Um nome que o Windows não guarda não é restaurado: o Verso diz por quê, e o item continua na lixeira.
- **Apagar agora** e **Esvaziar a lixeira** apagam de vez, e perguntam antes, ali mesmo, com o tamanho.
- **Manter arquivos apagados por** muda o prazo desta pasta: de 1 dia a **Para sempre**. Encurtar apaga na hora o que já passou do novo prazo.
- Numa pasta de um servidor ([Verso num Servidor](/wiki/verso-num-servidor/)), quem pode editar vê a lixeira e restaura; apagar de vez e encurtar o prazo é da dona da pasta. Quando um aparelho sincronizado grava por cima de uma nota, a versão que ele substituiu também vai para a lixeira, como **substituído por** aquele aparelho — se outro programa salvou um texto velho por cima, dá para voltar.

---

## O Histórico de Versões

Cada nota, quadro e base guarda as suas **versões**: o que estava escrito a cada mudança, quem mudou e quando. Para ver: **Histórico de versões** na paleta de comandos, no menu da aba (botão direito), no menu da nota na árvore, ou no relógio da barra de status.

- A lista mostra cada versão, a mais recente primeiro, com **quando** (na hora deste computador), **quem** — este computador, uma pessoa ou um aparelho numa pasta de servidor, ou *fora do Verso* quando outro programa mudou o arquivo — e quantas **linhas** entraram e saíram.
- Escolha uma versão para ver a **diferença** para o texto atual, ou para a versão anterior: as linhas que saem vêm com `−`, as que entram com `+`.
- **Restaurar esta versão** pergunta antes e escreve aquela versão como uma versão nova: o texto atual continua no histórico, nada se perde. Se o arquivo mudou enquanto você olhava, nada é escrito e a diferença é refeita.
- **Copiar como nova nota** põe a versão ao lado do arquivo, como `Nome (versão 2026-10-14 15h04).md`.
- As escritas seguidas viram uma versão a cada dez minutos de edição. Todas ficam por um dia, uma por hora até 30 dias e uma por dia depois, por um ano — **Ajustes › Arquivos e links › Manter versões por** muda isso. O histórico fica fora da pasta, na configuração do Verso: nada dele aparece entre os seus arquivos. Imagens e PDFs não entram; um anexo substituído vai para a [lixeira](#a-lixeira).
- Numa pasta de servidor ([Verso num Servidor](/wiki/verso-num-servidor/)), quem pode editar vê o histórico e restaura — também numa nota que outras pessoas estão editando junto, que todos veem mudar —, e quem só lê não vê histórico.

---

## A Árvore pelo Teclado

A árvore de arquivos é uma única parada do `Tab`: ela lembra o item em que você estava, então `Tab` entra nela e `Tab` de novo sai. Lá dentro:

- `↓` e `↑` vão ao item de baixo e ao de cima; `Home` e `End` vão ao primeiro e ao último.
- `→` abre uma pasta fechada; numa pasta aberta, entra nela. `←` fecha a pasta aberta; num item, sobe para a pasta dele.
- `Enter` abre a nota, ou abre e fecha a pasta. `Espaço` seleciona o item (como `⌘` + clique) sem abrir nada.
- Digite as primeiras letras de um nome para pular para ele; a mesma letra de novo vai ao próximo. `*` abre todas as pastas ao lado do item.
- A tecla de menu, ou `Shift` + `F10`, abre o menu do item; `F2` renomeia e `Delete` manda para a lixeira.

---

## A Visão de Pasta

A setinha ao lado de uma pasta abre e fecha a pasta na árvore. O Verso lembra quais pastas você deixou abertas: ao abrir o app de novo, a árvore volta como estava. Num cofre grande, as pastas de primeiro nível começam fechadas, para a árvore não desenhar milhares de linhas de uma vez.

Um clique no nome de uma pasta abre a pasta numa aba: **Miniaturas** ou **Lista**, com as colunas **Nome**, **Tipo**, **Tamanho** e **Modificado**. Uma imagem aparece em miniatura, e um PDF mostra a primeira página. Uma pasta pode ter a sua própria nota — `Pasta/Pasta.md` —, que aparece no topo como **Nota da pasta**; se ela não existe, **Criar nota da pasta** a cria.

---

## Por Trás das Cenas

- O Verso guarda um índice das notas para buscar rápido. **Reindexar** (paleta ou faixa da esquerda) refaz o índice; a barra de status mostra o andamento.
- **Ajustes › Arquivos e links › Ignorar pastas de build** e **Respeitar .gitignore** deixam de fora as pastas de build (`node_modules`, `target`, `dist`…) e o que o Git ignora.
- Um arquivo que o macOS deixou só no iCloud (**Otimizar Armazenamento**) é baixado quando você o abre, com um aviso na barra de status.
- Se outro programa muda uma nota aberta, o Verso percebe — veja [Escrevendo no Editor](/wiki/escrevendo-no-editor/).

---

Siga para [Ajustes, Aparência e Atalhos](/wiki/ajustes-aparencia-e-atalhos/) ou volte para a [Página Inicial](/wiki/bem-vindo-ao-verso/).
