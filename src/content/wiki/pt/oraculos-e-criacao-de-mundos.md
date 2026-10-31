---
title: "Oráculos e Criação de Mundos"
description: "O oráculo que escreve a resposta no destaque; as tabelas sorteadas; o assistente de novo projeto com a árvore à vista; e a chave de cada recurso em Ajustes."
order: 27
group: rpg
slug: "oraculos-e-criacao-de-mundos"
twin: "oracles-and-world-building"
source: "demo-vault/27 - Oráculos e Criação de Mundos.md"
updated: "2026-10-20"
---
Ferramentas para mestres, jogadores solo e quem constrói mundos — ou só escreve ficção. Tudo segue o princípio dos arquivos: o que as ferramentas criam é **Markdown puro** na sua nota, legível em qualquer editor. As fichas têm a sua nota: [Fichas](/wiki/fichas/).

---

## 🎚️ Ligar e desligar: Ajustes › RPG & Mesa Solo › Dados e RPG

Os recursos de RPG têm uma página só deles, a primeira do grupo **RPG & Mesa Solo**: **Dados e RPG**. Cada ferramenta é um recurso com a sua chave: **Dados**, **Tabelas sorteadas**, **Oráculos**, **Fichas** (as de [Fichas](/wiki/fichas/)) e **Assistente de mundo e campanha** e **Dados 3D**. Todas vêm **ligadas**, menos os Dados 3D. A página tem os links **Ligar todos** e **Desligar todos**, e **Oráculos** e **Fichas** têm um link **Ajustes…** para a própria página. Os atalhos **Tudo** e **Só escrita**, em **Ajustes › Aplicação › Recursos** (onde fica também o **Diagrama de dados**), ligam ou desligam todas de uma vez, as de RPG também — antes, o Verso mostra o que vai mudar, e você pode cancelar.

Desligar não muda arquivo nenhum: uma ficha vira um bloco de código, um `[!oracle]` vira um destaque comum, como o Obsidian os mostra sem o plugin. Ligar de novo traz tudo de volta. A escolha é **sua**: uma pasta nunca liga nem desliga um recurso para quem a abre.

---

## 🔮 Oráculo

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

No texto, `dice: [[#^reviravolta]]` vira um botão que sorteia uma linha. Todas as tabelas da pasta aparecem também na aba **Tabelas** do oráculo — com o nome da nota de onde vêm. Cada uma se chama pelo título mais próximo acima dela (aqui, *Tabelas são notas*) ou, sem título, pelo seu `^id`; duas tabelas sob o mesmo título levam o `^id` depois dele.

### Ajustar o oráculo

Em **Ajustes › RPG & Mesa Solo › Oráculos e Solo RPG**, tudo se salva sozinho, sem botão de salvar:

- **Experimentar o oráculo** abre a janela para testar sem gravar nada.
- **Chances de sim ou não**: cada barra mostra como o d100 se divide entre as seis respostas, de *Sim, e…* a *Não, e…*. Escolha um **estilo** — *Equilibrado* (o padrão), *Viradas prováveis* (inspirado no Mythic GME, sem o fator caos dele), *Ironsworn* ou *Narrativo*, cada um com uma frase do que muda na mesa — e ele vale na hora; **Desfazer** volta ao anterior. Em **Ajustar à mão…** você muda os números de cada chance: a linha diz quanto falta ou sobra (*faltam 3%*) e só é salva quando soma 100.
- **Faíscas de ideias**: desligado, o oráculo usa as palavras do Verso, **no idioma da janela**. Ligue **Usar minhas próprias palavras** para editar as quatro listas: digite uma palavra e Enter, ou cole várias separadas por vírgula; o **×** tira uma (as setas andam entre elas, Delete apaga). **Voltar às palavras do Verso** desfaz.
- **Tabelas para sortear**: as do Verso e as das suas notas, com três opções de amostra. **Nova tabela** escreve uma nota com a lista e o `^id` — você vê o texto antes.

Esses ajustes ficam **na pasta** e valem para todos que a abrem: se você compartilha a pasta, a pessoa vê o oráculo como você vê. Onde você só lê a pasta, a página mostra os valores e diz por que não dá para mudá-los.

Numa sala de um servidor, quem **sorteia** é o servidor, e todos da sala veem quem consultou.

---

## 🏰 Novo projeto a partir de modelo

Em vez de criar pastas e arquivos um a um para um mundo, uma campanha ou um livro, use o assistente:

1. No menu de criar da barra lateral, escolha **Novo projeto a partir de modelo…** (ou `⌘⇧P` › *Novo projeto a partir de modelo…*).
2. Dê um **nome**, escolha a **pasta de destino** e um **modelo**: *Campanha de RPG (Dados Críticos)*, *Construção de Mundo (Worldbuilding)*, *Escrita de Romance e Ficção* ou *Organização Pessoal (P.A.R.A.)*. Abaixo, a prévia lista as pastas e os arquivos.
3. **Criar estrutura** mostra a árvore completa — *Confira o que será criado* — **antes de escrever qualquer coisa**. Desmarque o que não quer (uma pasta desmarcada leva o que há dentro) ou mude um nome, e confirme com **Criar agora**.
4. Nada que já existe é sobrescrito: o relatório diz o que foi criado, o que já estava lá e o que foi recusado.

Na aba **Gerador com IA**, **Copiar System Prompt para IA** copia as instruções para colar no Claude, no ChatGPT ou no Gemini (o Verso não envia nada a lugar nenhum). Cole de volta o JSON que a IA devolver e clique em **Validar e Importar**: o modelo entra na lista e fica guardado na pasta (`.verso/bundles/`), então volta na próxima vez e quem abrir a pasta também o tem. Se o JSON não passa, **Copiar pedido de correção para a IA** diz o que está errado.

---

## 🙏 Créditos

**Ajustes › Aplicação › Créditos e agradecimentos** lista as pessoas e obras de que o Verso parte (como o Fractal, de Igor Téuri e Walter Licínio), os avisos de licença dos layouts de ficha e o software livre. **Abrir** leva ao site de cada um no navegador.

---

Volte às regras de rolagens em [Dados e Tabelas Sorteadas](/wiki/dados-e-tabelas-sorteadas/), veja as fichas em [Fichas](/wiki/fichas/), consulte a [Página Inicial](/wiki/bem-vindo-ao-verso/) veja os dados de qualquer arquivo como caixas em [Dados Estruturados como Diagrama](/wiki/dados-estruturados-como-diagrama/), ou explore o Tour do Verso.
