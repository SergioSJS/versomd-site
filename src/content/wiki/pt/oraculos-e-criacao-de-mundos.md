---
title: "Oráculos e Criação de Mundos"
description: "O oráculo que escreve a resposta no destaque; as tabelas sorteadas; o assistente de novo projeto com a árvore à vista; os mapas dos geradores do Watabou, desenhados pelo Verso; e a chave de cada recurso em Ajustes."
order: 24
group: rpg
slug: "oraculos-e-criacao-de-mundos"
twin: "oracles-and-world-building"
source: "demo-vault/24 - Oráculos e Criação de Mundos.md"
updated: "2026-10-20"
---
Ferramentas para mestres, jogadores solo e quem constrói mundos — ou só escreve ficção. Tudo segue o princípio dos arquivos: o que as ferramentas criam é **Markdown puro** na sua nota, legível em qualquer editor. As fichas têm a sua nota: [Fichas](/wiki/fichas/).

---

## Ligar e desligar: Ajustes › RPG & Mesa Solo › Dados e RPG

Os recursos de RPG têm uma página só deles, a primeira do grupo **RPG & Mesa Solo**: **Dados e RPG**. Cada ferramenta é um recurso com a sua chave: **Dados**, **Tabelas sorteadas**, **Oráculos**, **Fichas** (as de [Fichas](/wiki/fichas/)), **Assistente de mundo e campanha**, **Dados 3D**, **Mesa** (veja [A Mesa](/wiki/a-mesa/)) e **Som da mesa** (veja [Som e Música na Mesa](/wiki/som-e-musica-na-mesa/)). Todas vêm **ligadas**, menos os Dados 3D. A página tem os botões **Ligar todos** e **Desligar todos** (**Ligar todos** não liga os Dados 3D: esses só pela chave deles), e **Oráculos** e **Fichas** têm um link **Ajustes…** para a própria página. Os atalhos **Tudo** e **Só escrita**, em **Ajustes › Aplicação › Recursos** (onde ficam também o **Diagrama de dados**, as **Amostras de cor** e, no app de computador, o **Terminal**), ligam ou desligam todas de uma vez, as de RPG também — antes, o Verso mostra o que vai mudar, e você pode cancelar.

Desligar não muda arquivo nenhum: uma ficha vira um bloco de código, um `[!oracle]` vira um destaque comum, como o Obsidian os mostra sem o plugin. Ligar de novo traz tudo de volta. A escolha é **sua**: uma pasta nunca liga nem desliga um recurso para quem a abre.

---

## Oráculo

Para jogo solo, improviso ou uma cena travada. Um destaque `[!oracle]` é a pergunta; a resposta vai **escrita na nota**:

> **Oráculo: A patrulha da guarda ouviu o barulho da invasão?**
>
> **Sim, mas…** _(d100: 33, 50 / 50)_
> Um oficial novato acha que foi só um gato derrubando caixotes.

**Experimente.** Clique em **Consultar Oráculo**, no cabeçalho do destaque acima. A janela abre com a pergunta já preenchida:

1. Em **Sim ou Não**, escolha a **Chance** — *Quase impossível*, *Improvável*, *50 / 50*, *Provável* ou *Quase certo* — e clique em **Consultar**. O Verso rola um d100 contra a linha daquela chance e lê uma de seis respostas (com os **Dados 3D** ligados, o d100 cai na tela e a resposta aparece quando ele para): *Sim, e…*, *Sim*, *Sim, mas…*, *Não, mas…*, *Não* ou *Não, e…*.
2. Clique em **Gravar no callout**: uma linha de resposta entra no destaque.
3. Consulte **a mesma pergunta** de novo: a nova resposta entra **abaixo** da anterior. As respostas se **acumulam**.
4. Reescreva a pergunta no destaque e consulte: só as linhas que o **oráculo** escreveu são trocadas. **O que você escreveu à mão nunca é apagado** — a linha do oficial novato, acima, fica.

Se o cursor não está num destaque, o botão se chama **Inserir na nota** e cria um destaque novo no cursor — nunca dentro de uma citação, tabela ou bloco de código. A janela também abre pelo `/` do editor (**Consultar Oráculo…**; **Oráculo** insere um destaque vazio) ou pela paleta (`⌘⇧P` › *Oráculo (sim/não e faíscas)…*).

As outras abas: **Faíscas** sorteia dois pares de palavras, *Ação + Tema* e *Descritor + Foco*, para destravar uma ideia; **Tabelas** sorteia numa tabela embutida ou numa tabela das suas notas.

### Tabelas são notas

Uma tabela Markdown ou uma lista com um identificador `^id` é sorteável, em qualquer pasta:

| d6 | Reviravolta inesperada |
|:--:|---|
| 1 | Um aliado de confiança revela uma dívida secreta |
| 2 | O clima vira tempestade violenta ou névoa espessa |
| 3 | Um recurso vital (chave, mapa, suprimento) foi roubado |
| 4 | Uma pista antiga aponta para uma ameaça mais urgente |
| 5 | Uma patrulha rival chega no pior momento |
| 6 | Algo sobrenatural muda as regras do lugar |
^reviravolta

No texto, `dice: [[#^reviravolta]]` vira um botão que sorteia uma linha. Todas as tabelas da pasta aparecem também na aba **Tabelas** do oráculo — com a nota de onde vêm e o `^id` embaixo da lista. Entram as tabelas com duas linhas ou mais e as listas que não são de tarefas. Cada uma se chama pelo título mais próximo acima dela (aqui, *Tabelas são notas*) ou, sem título, pelo seu `^id`; duas tabelas sob o mesmo título levam o `^id` depois dele.

### Ajustar o oráculo

Em **Ajustes › RPG & Mesa Solo › Oráculos e Solo RPG**, tudo se salva sozinho, sem botão de salvar:

- **Experimentar o oráculo** abre a janela para testar sem gravar nada.
- **Chances de sim ou não**: cada barra mostra como o d100 se divide entre as seis respostas, de *Sim, e…* a *Não, e…*. Escolha um **estilo** — *Equilibrado* (o padrão), *Viradas prováveis* (inspirado no Mythic GME, sem o fator caos dele), *Ironsworn* ou *Narrativo*, cada um com uma frase do que muda na mesa — e ele vale na hora; **Desfazer** volta ao anterior. Em **Ajustar à mão…** você muda os números de cada chance: a linha diz quanto falta ou sobra (*faltam 3%*) e só é salva quando soma 100.
- **Faíscas de ideias**: desligado, o oráculo usa as palavras do Verso, **no idioma da janela**. Ligue **Usar minhas próprias palavras** para editar as quatro listas: digite uma palavra e Enter, ou cole várias separadas por vírgula; o **×** tira uma (as setas andam entre elas, Delete apaga). **Voltar às palavras do Verso** desfaz.
- **Tabelas para sortear**: as do Verso e as das suas notas, com três opções de amostra. **Nova tabela** escreve uma nota com a lista e o `^id` — você vê o texto antes. **Importar JSON…** traz tabelas de um JSON (e também vira nota); **Copiar as da pasta (JSON)** leva as suas para outro lugar.

Esses ajustes ficam **na pasta** e valem para todos que a abrem: se você compartilha a pasta, a pessoa vê o oráculo como você vê. Onde você só lê a pasta, a página mostra os valores e diz por que não dá para mudá-los.

Numa sala de um servidor, quem **sorteia** é o servidor, e todos da sala veem quem consultou. Com a **Mesa** ligada, cada consulta entra também no painel **Mesa**.

---

## Novo projeto a partir de modelo

Em vez de criar pastas e arquivos um a um para um mundo, uma campanha ou um livro, use o assistente:

1. No menu de criar da barra lateral, escolha **Novo projeto a partir de modelo…** (ou `⌘⇧P` › *Novo projeto a partir de modelo…*).
2. Dê um **nome**, escolha a **pasta de destino** e um **modelo**: *Campanha de RPG (Dados Críticos)*, *Construção de Mundo (Worldbuilding)*, *Escrita de Romance e Ficção* ou *Organização Pessoal (P.A.R.A.)*. Abaixo, a prévia lista as pastas e os arquivos.
3. **Criar estrutura** mostra a árvore completa — *Confira o que será criado* — **antes de escrever qualquer coisa**. Desmarque o que não quer (uma pasta desmarcada leva o que há dentro) ou mude um nome, e confirme com **Criar agora**.
4. Nada que já existe é sobrescrito: o relatório diz o que foi criado, o que já estava lá e o que foi recusado.

Na aba **Gerador com IA**, **Copiar System Prompt para IA** copia as instruções para colar no Claude, no ChatGPT ou no Gemini (o Verso não envia nada a lugar nenhum). Cole de volta o JSON que a IA devolver e clique em **Validar e Importar**: o modelo entra na lista e fica guardado na pasta (`.verso/bundles/`), então volta na próxima vez e quem abrir a pasta também o tem. Se o JSON não passa, **Copiar pedido de correção para a IA** diz o que está errado.

---

## Mapas dos geradores do Watabou

[Os geradores do Watabou](https://watabou.github.io) fazem masmorras, regiões, cidades e vilas de graça; os mapas que eles fazem são seus para usar (o crédito é apreciado). O Verso os traz para a sua pasta:

1. No **One Page Dungeon**, clique com o botão direito no mapa e use **Export as › PNG…** (ou **Shift+E**; deixe o tamanho de célula que ele oferece, 70) — o mapa sozinho, nunca girado, no esquadro da grade do board — depois **Export as › JSON** (as salas) e **Export as › Markdown** (o texto e a semente). O desenho vem sem título, história nem números das salas: os alfinetes do Verso e a nota os trazem. Para a página inteira, com o título e os quadros das notas, desligue **View › Rotate-to-fit** e use **Export as › SVG** e **Save as PNG**. No **Dwellings** (casas), **Export › as JSON** dá a casa inteira, todos os andares; depois, em cada andar, **Export › as SVG** e **as PNG** dão o desenho daquele andar. Nos geradores de **vila** e de **cidade**, **Export as › JSON** e **› PNG**. No **Perilous Shores**, **Save** dá o JSON da região.
2. No Verso, **Importar mapa do Watabou…** (`⌘⇧P`, ou **Novo** no menu de uma pasta). Escolha os arquivos, ou solte-os no diálogo. Ele diz o que são e o que vai criar **antes de escrever qualquer coisa**; **Importar** grava.
3. Uma masmorra vira uma pasta com a **nota** — o título, a história e as salas numeradas, exatamente como o gerador escreveu (em inglês), com a semente nas propriedades — e um **board** cujo **mapa é o desenho do próprio Watabou**, alinhado exatamente às salas. O **número de cada sala é um alfinete** em cima do próprio número do desenho: um clique abre a nota, passar o mouse mostra o texto. Por baixo do desenho fica o **traçado do Verso** das salas, paredes e portas, escondido: **Mostrar o traçado** (nas ferramentas de mapa, no alto à direita, ou no ⋯ › Board do celular) mostra o traçado em azul para editar, e esconde de novo. A nota fica ao lado do mapa como cartão, e é também a versão em texto do mapa.
4. Uma casa vira uma pasta com a **nota** — a casa numa frase e os cômodos andar por andar, com o tamanho, as portas e para onde levam, as escadas e as janelas — e um **board** com **um quadro por andar**, do porão para cima, todos na mesma grade, então a escada de um andar fica no mesmo lugar no de cima. Cada andar que veio com o seu desenho mostra o **desenho do Watabou** daquele andar, com o traçado do Verso escondido por baixo. Os nomes dos cômodos são os do gerador; dois de mesmo nome num andar viram *Room 1* e *Room 2* na nota, que é a versão em texto da casa.
5. Uma **vila** ou uma **cidade** vira uma pasta com a nota e um board cujo mapa é o desenho do gerador: fixe as suas notas nele.

Sem o SVG (numa masmorra) ou o desenho de um andar (numa casa), o board mostra o **desenho do próprio Verso** no lugar — salas, paredes, portas, água, colunas e os números das salas, um desenho comum que você edita com dois cliques dentro dele — e a importação diz o que mais exportar. Só o PNG de *Save as PNG* (a página) não basta: só o SVG dela diz onde o mapa está na página, em que escala e em que giro (o mapa de *Export as › PNG…* dispensa o SVG: o tamanho dele diz tudo). Uma página exportada com *Rotate-to-fit* ligado ainda entra, girada; a importação e a nota avisam, e dizem como exportar de novo no esquadro.
6. Uma região vira **uma nota** com a lista das cidades, dos perigos e dos lugares. A nota de uma cidade ou de um perigo só é criada quando você clica no link dela, já com a descrição, o **gerador dentro dela** na semente dela, e **Abrir no gerador**.

**Novo mapa gerado…** cria uma nota com um gerador **dentro dela** e a semente que o Verso sorteou guardada nas propriedades, para refazer o mesmo mapa; o site é perguntado uma vez, como qualquer página numa nota (o gerador precisa de internet). No app do computador, o **Export** do gerador grava o arquivo na sua pasta, ao lado da nota, e um export do Watabou abre a importação com ele.

As paredes também ficam guardadas no board, para quando a mesa tiver visão e névoa. Elas são do mestre: num UniVerso, jogadores e leitores do board não as recebem, e as **portas secretas** de uma masmorra (as linhas tracejadas do desenho e do traçado) são desenhadas só para o mestre — para um jogador, a passagem parece aberta. Nada do código do Watabou vem com o Verso: os geradores rodam no site dele.

---

## Créditos

**Ajustes › Aplicação › Créditos e agradecimentos** lista as pessoas e obras de que o Verso parte (como o Fractal, de Igor Téuri e Walter Licínio), os avisos de licença dos layouts de ficha e o software livre. **Abrir** leva ao site de cada um no navegador.

---

Para ver os dados de qualquer arquivo como caixas, veja [Dados Estruturados como Diagrama](/wiki/dados-estruturados-como-diagrama/).

Anterior: [Fichas](/wiki/fichas/) · Próxima: [A Mesa](/wiki/a-mesa/) · [Página Inicial](/wiki/bem-vindo-ao-verso/) · Tour do Verso
