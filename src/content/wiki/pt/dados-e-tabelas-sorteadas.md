---
title: "Dados e Tabelas Sorteadas"
description: "`dice:` numa nota rola dados, uma tabela ou lista com `^id` sorteia uma linha; nada escrito, e numa nota compartilhada todos veem."
order: 25
group: rpg
slug: "dados-e-tabelas-sorteadas"
twin: "dice-and-random-tables"
source: "demo-vault/25 - Dados e Tabelas Sorteadas.md"
updated: "2026-10-14"
---
Um código `dice:` numa nota é um **dado**: na **Leitura** e no **Editar**, fora da linha do cursor, ele aparece como um botão. Um clique — ou `Tab` até ele e `Enter` — rola e mostra o resultado num cartão ao lado: o total, cada dado e o que foi somado, com **Rolar de novo**. É a mesma forma do plugin Dice Roller do Obsidian, então um cofre que já usa o plugin rola aqui, e uma nota escrita aqui rola lá.

**Nada é escrito na nota.** Rolar, rolar de novo e fechar o cartão deixam o arquivo como estava: abra a nota no modo **Fonte** e veja que o código continua só código.

**Escrever um dado.** No **Editar**, digite `/` e escolha **Dado** (ou digite `/dado`): o Verso escreve `` `dice: 1d20` `` na linha com a notação **selecionada** — digite `2d6+3` por cima e pronto. O item só aparece com o recurso **Dados** ligado.

---

## Rolar

- Ataque com espada: `dice: 1d20+5`
- Dano: `dice: 2d6+3`
- Atributo, o menor de quatro dados descartado: `dice: 4d6dl1`
- Com vantagem, o maior de dois d20: `dice: 2d20kh1`
- Dados fudge, do Fate: `dice: 4dF`
- Somas e diferenças: `dice: 1d12+1d10-1d4+2`
- Um dado que explode — no 6, rola outro e soma: `dice: 3d6!`
- Percentil, um d100: `dice: d%`

O Verso lê dados (`2d6`, `d20` é um só), somas e diferenças de dados e números, **manter** e **descartar** com a quantidade (`kh2` mantém os 2 maiores, `kl1` o menor, `dh1` descarta o maior, `dl1` o menor) o dado fudge (`dF`), o percentil (`d%`, um d100) e o dado que **explode** (`!` logo depois do dado: na face mais alta ele rola mais um, que pode explodir de novo, até 100 dados a mais numa rolagem). Espaços não contam: `dice: 3d4 + 3` é `3d4+3`.

Uma forma que o Verso não lê continua **código**, nunca vira outra rolagem: `dice: 1d20*2` aqui embaixo é só código.

`dice: 1d20*2`

Com um leitor de tela, o botão se chama *Rolar 1d20+5*, e o resultado é dito: *1d20+5: 17 — 12 mais 5*.

---

## Tabelas sorteadas

Uma tabela ou uma lista com um `^id` é uma **tabela sorteada**. Um código `dice:` com um link para ela sorteia uma linha:

Quem aparece na estrada? `dice: [[25 - Dados e Tabelas Sorteadas#^encontros]]`

| d6 | Encontro |
| --- | --- |
| 1–2 | Uma patrulha da guarda, desconfiada |
| 3–4 | Um mercador com a carroça atolada |
| 5 | Lobos famintos, e Capitão Ruy chega para ajudar |
| 6 | Nada; só o vento |

^encontros

A primeira coluna tem um **dado no cabeçalho** (`d6`, `d100`, `2d6`): cada linha diz as faixas que a escolhem (`1–2`, `5`, `01–05`, `96–00`), como numa tabela impressa. Os links da linha sorteada abrem com um clique.

Numa tabela sem dado no cabeçalho, ou numa lista, cada linha tem a mesma chance:

O tempo hoje: `dice: [[25 - Dados e Tabelas Sorteadas#^tempo]]`

- Sol forte
- Garoa fina
- Neblina até o meio-dia
- Tempestade à noite

^tempo

---

## Numa nota compartilhada

Num [UniVerso](/wiki/verso-num-servidor/), com outras pessoas na mesma nota, quem rola é o **servidor**: ninguém escolhe o próprio número. Todos na nota veem a rolagem com o nome de quem rolou — *Ana rolou* —, e quem entra depois vê as últimas rolagens da sala. Sem conexão, o dado rola nesta janela e o cartão avisa que ninguém mais viu.

---

## O segredo do mestre

Um callout do tipo `secret` guarda o que só quem escreve a nota deve ver. Digite `/` no Editar e escolha **Segredo**, ou escreva:

> **Segredo: O que os jogadores não sabem**
>
> A estalajadeira é irmã do barão, e a adega dá no túnel do porto.

Num [UniVerso](/wiki/verso-num-servidor/), quem só pode **ler** a nota a recebe **sem** esse bloco — na tela, na busca, nos links e nas tags, no que sincroniza para o aparelho dela, numa nota ao vivo. Quem pode editar vê tudo, com um cadeado e *Oculto para leitores*; o botão **Ver como leitor**, ao lado de Ler e Editar, mostra a nota como um leitor a recebe, e **Ver a nota inteira** volta. Numa pasta deste computador nada se esconde, e o bloco diz *Visível para quem tiver o arquivo*.

> **Aviso: Não é criptografia**
>
> Quem pode editar a nota vê o segredo — senão o apagaria na próxima edição. Quem tem o arquivo também: o Obsidian, um computador que sincroniza como editor, uma cópia dada à mão. O segredo é escondido dos leitores do servidor, não cifrado; e um leitor sabe que a nota mudou só quando muda o que ele vê.

---

## Sem nota

Na paleta de comandos (`⌘⇧P`), **Rolar dados…** abre um rolador: digite a notação, `Enter`, e o resultado aparece. Também não escreve nada.

---

## Dados 3D

Quer ver os dados caírem? Em **Ajustes › RPG & Mesa Solo › Dados e RPG**, ligue **Dados 3D**. Ele vem **desligado**, mesmo no atalho *Tudo*: é o recurso mais pesado, para a bateria também. Ligado, ao rolar um dado — num botão `dice:` ou no rolador — dados de verdade (d4, d6, d8, d10, d12, d20 e o percentil como dois d10) caem sobre a tela e param; só então o cartão com o resultado aparece.

O número **já foi sorteado** antes de os dados caírem, pelo gerador criptográfico da janela ou, numa sala, pelo servidor; a queda só o encena, e o dado pousa mostrando exatamente esse número. Por isso o leitor de tela diz o resultado na hora, sem esperar, e o cartão com o texto existe sempre.

- **Os dados ficam na mesa**, como no Rolai, até você mexer em algo: um clique em qualquer lugar que não seja um botão ou uma janela, `Esc` ou a próxima rolagem os tira. Eles não seguram o clique: a página continua usável por baixo. Enquanto caem, `Esc` ou um clique também os pula.
- **Duração da rolagem:** em *Dados e RPG*, **Rápida**, **Normal** ou **Lenta** muda a velocidade da queda.
- **Som dos dados:** o botão **Som dos dados** vem **ligado**, como no Rolai (desligue-o em *Dados e RPG*), e toca o barulho de cada batida dos dados na mesa e uns nos outros, com as gravações do Rolai (domínio público); o timbre segue o material do dado (plástico, madeira ou metal).
- **No Board:** um código `dice:` no texto de um cartão de texto do Board também é um dado — clique nele, mesmo sem entrar no cartão, e o resultado (e os dados 3D e o som) aparece como numa nota. Nada é escrito no arquivo do Board.
- **Rolagens salvas:** na bandeja de dados da Mesa, cada linha de uma nota com um código `dice:` (ex.: `` - Ataque da Bia: `dice: 1d20+7` ``) vira um botão que põe a rolagem no campo; veja [A Mesa](/wiki/a-mesa/), em *Rolagens salvas*.
- **Sem animação:** se o sistema pede menos movimento, ou se a rolagem tem mais de 20 dados ou um dado que explode (`!`), só o cartão aparece.
- **Numa sala**, cada pessoa vê os dados cair só se o *seu* recurso Dados 3D estiver ligado; as outras veem o cartão.
- O motor 3D é baixado só na primeira rolagem em 3D e guardado para uso sem conexão, com os sons, se você os ligar.
- **Aparência:** logo abaixo do botão, na mesma página, como no Rolai: o **tamanho** (de 70% a 160%; 100% é um dado de uns 70 pixels num notebook), **três conjuntos de cor** (1, 2 e 3 — uma rolagem usa o 1; um perfil de dados pode dar a um grupo o 2 ou o 3), e, para o conjunto escolhido, o **estilo** (Do Verso, Esmeralda, Osso, Obsidiana, Sangue, Abissal, Gelo, Escamas, Taverna), as cores do **corpo**, do **número** e do **contorno**, a **textura** (Lisa, Mármore, Pintas, Glitter, Estrelas, Céu astral, Nuvens, Fogo, Água, Gelo, Papel, Madeira, Aço, Vitral, Caveiras, Dragão, Leopardo, Tigre, Lagarto, Pena — as imagens originais do 3DDiceRoller, que vêm com o aplicativo) e o **material** (Automático, Plástico, Metal, Madeira, Vidro, Fosco). Se o número ficar parecido demais com o corpo, o Verso avisa (contraste abaixo de 3:1). **Rolar para testar** rola um d20 e dois d6, um em cada conjunto. Vale só para este aparelho: numa sala, cada pessoa vê a rolagem com os *seus* dados.

---

Veja a seguir as fichas visuais em [Fichas](/wiki/fichas/), e o oráculo para jogo solo e a criação de campanhas em [Oráculos e Criação de Mundos](/wiki/oraculos-e-criacao-de-mundos/). Volte para a [Página Inicial](/wiki/bem-vindo-ao-verso/) ou abra o Tour do Verso.
