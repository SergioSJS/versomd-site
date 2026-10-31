---
title: "A Mesa"
description: "Um registro de todas as rolagens, sorteios e perguntas ao oráculo, com quem fez e de qual nota, no painel da direita; as de outras pessoas chegam com o nome delas."
order: 31
group: rpg
slug: "a-mesa"
twin: "the-table"
source: "demo-vault/31 - A Mesa.md"
updated: "2026-10-22"
---
Num jogo, ninguém rola dentro de uma nota só: o mestre rola numa ficha de monstro, a jogadora no personagem, alguém pergunta ao oráculo na nota da sessão. A **Mesa** junta tudo num lugar: **um registro** de cada rolagem, sorteio de tabela e pergunta ao oráculo, com quem fez, a que horas e de qual nota. Fica no **painel da direita**, ao lado de Estrutura e Links, e nada é escrito em arquivo nenhum por causa dela, a não ser a imagem que você mesmo envia.

---

## Ver a Mesa

1. Abra o painel da direita (**Mostrar painel da direita**, ou **Painel** na barra de baixo do celular) e escolha a aba **Mesa**.
2. Role um dado qualquer: `dice: 1d20+5`, `dice: 2d6`, ou o **Rolar dados…** da paleta.
3. A linha aparece no fim da lista: **Você**, a hora, a nota de onde saiu (um link: um clique abre a nota), a notação, cada dado como um quadradinho e o **total**.

Role de uma tabela sorteada — `dice: [[25 - Dados e Tabelas Sorteadas#^encontros]]` — e a linha mostra a linha da tabela que saiu. Uma pergunta ao oráculo também ganha a sua linha, com a resposta.

O registro rola sozinho para a rolagem mais nova, a menos que você tenha subido para ler as antigas; aí aparece **Ir para o fim**. Os dados de cada pessoa são desenhados **nas cores dela** quando o servidor as informa.

---

## Compor uma rolagem

Logo abaixo do campo de mensagem fica a **bandeja de dados**: uma fila só, de botões pequenos, como a do módulo Dice Tray do Foundry. Ela monta uma rolagem sem digitar — e a escreve **no próprio campo de mensagem**:

No celular a Mesa abre numa folha que ocupa quase a tela inteira, e a linha de dados fica atrás do botão **Dados**, na fileira do campo de mensagem: toque nele para abrir ou fechar a linha, e o aparelho lembra a sua escolha.

1. **Clique num dado** — d4, d6, d8, d10, d12 ou d20 — e o campo passa a ter `/r 1d6`; mais um clique no d6 e um no d20 dão `/r 2d6+1d20`. Uma bolinha no dado mostra quantos dele estão na rolagem. Clicar **não rola**. Os outros dados (d2, d3, d66, d100 e dF) ficam atrás do botão **⋯**.
2. **Botão direito** num dado tira um (no teclado: `Shift+Enter`, `Delete` ou `Backspace` no dado; no celular, segure o dedo nele). `Enter` num dado soma um.
3. O pequeno campo **numérico** (o `0`) é o modificador: digite, use as setas `↑` `↓` ou a roda do mouse, de −99 a +99 (`/r 2d6+1d20+2`).
4. **KH** e **KL** são vantagem e desvantagem, como no Foundry: sobre `/r 1d20`, **KH** dá `/r 2d20kh1` (dois dados, fica o maior) e **KL** dá `/r 2d20kl1` (fica o menor). Clicar no mesmo de novo desfaz; clicar no outro troca. O botão aceso é o que está valendo.
5. Aperte **Enviar** (ou `Enter` no campo): a rolagem vai para o registro — rolada pelo servidor num UniVerso, os dados 3D e o som, o modo **Secreta** respeitado. Sem servidor, a sua janela rola e o registro guarda.

O **campo de mensagem** é editável, e é ele que vale: digite `/r 4d6kh3` e as bolinhas acompanham o que os botões sabem mostrar; o que não sabem (manter 3 de 4, re-rolagem) continua como você digitou, e um dado clicado depois recomeça a rolagem a partir dele. O que o Verso não lê é dito logo abaixo do campo, e nada é rolado. Esvaziar o campo limpa a rolagem.

O campo é grande e de várias linhas: `Shift+Enter` quebra a linha, `Enter` envia, e as quebras aparecem no registro para todos. Uma rolagem `/r` vale pela primeira linha.

### Rolagens salvas

O **marcador** da fila abre as **Rolagens salvas**: cada linha de uma nota que tenha um código `dice:` vira um botão. A nota é uma nota comum da pasta — a sua ficha, ou uma `Rolagens.md` — e segue você em qualquer aparelho. Uma lista de exemplo (escolha **esta nota** em **Escolher nota…** e os três aparecem como botões):

- Ataque da Bia: `dice: 1d20+7`
- Dano da espada: `dice: 1d8+4`
- Iniciativa: `dice: 1d20+2`

1. O nome do botão é o texto da linha sem o marcador de lista e sem os dois-pontos do fim; uma linha só com o código leva a notação por nome.
2. **Clicar num botão não rola:** ele escreve `/r` e a notação no campo, e você soma um modificador (o campo numérico) e aperta o botão do dado.
3. Num UniVerso, quem joga encontra sozinho a nota **concedida só a essa pessoa** (a ficha); o mestre pode deixar rolagens prontas nela. Em outros casos, **Escolher nota…** (ou **Nota: …**, para trocar) abre o seletor de notas; a escolha fica guardada neste navegador, por pasta.
4. **Salvar**: monte a rolagem, dê um nome e aperte **Salvar** — a linha `` - Nome: `dice: …` `` é acrescentada à nota (no fim da seção *Rolagens*, se ela tiver uma). Quem só lê a nota não vê o botão. A lista acompanha a nota quando ela muda.

---

## Rolagens de outras pessoas

Numa nota compartilhada de um UniVerso, quando outra pessoa rola, a rolagem chega com o **nome dela** e entra na Mesa, e um leitor de tela ouve "Ana rolou: 1d20+3: 17". Com o painel fechado, o botão que o abre (e a aba **Mesa**) mostra **quantas novidades** chegaram. As rolagens que a nota já guardava quando você entrou aparecem também, sem contar como novidade.

Com os **Dados 3D** ligados, a rolagem dos outros também cai em 3D na sua tela. Para ficar só com as suas, desligue **Mostrar em 3D as rolagens dos outros** em **Ajustes › RPG & Mesa Solo › Dados e RPG**.

**Som da Mesa.** Quando outra pessoa manda uma **mensagem** (ou uma rolagem que não cai em 3D) na Mesa, a janela toca um som curto — nunca para o que **você** manda, e não enquanto você escreve na caixa da Mesa. Em **Ajustes › Notificações** escolha **Som da Mesa** (Suave, Sino, Estalo ou Desligado; vem em Suave) e o **volume**; ao escolher, o som toca uma vez para você ouvir. Os dados têm o seu próprio som, ligado à parte. Se o navegador ainda não liberou o áudio (ele só libera depois que você toca na página), o som fica mudo em vez de tocar atrasado.

Numa pasta que **não** é de um UniVerso (só do seu computador), a Mesa mostra as suas rolagens e as que você ouve nas notas compartilhadas **desta sessão**, e diz que não é compartilhada nem guardada. Numa pasta de um UniVerso, ela é **a mesa de todos**: veja abaixo.

---

## A mesa de todos, num UniVerso

Quem abriu a mesma pasta de um UniVerso e trabalha na mesma mesa está **na mesma conversa**. O alto do painel mostra **quem está lá agora**, cada pessoa com a cor do seu cursor. As rolagens de todos entram aqui, rolagem feita **uma vez**, pelo servidor, com o nome e a hora dele, e o registro fica **guardado** no servidor, sem prazo de validade: quem entra depois vê o que houve.

### Uma conversa por mesa

Uma pasta pode ter **várias mesas** (uma por subpasta, veja [Rodando uma Mesa](/wiki/rodando-uma-mesa/)), e **cada mesa tem a sua própria conversa**: o registro, as mensagens, as imagens, as fixadas e quem está lá. O painel acompanha a **nota aberta**: o alto dele diz **Mesa: Cripta** quando você está numa nota da mesa Cripta, e é só a conversa dela que você vê. Abra uma nota da mesa Sala e o painel passa para **Mesa: Sala** (você sai de uma e entra na outra). Uma rolagem feita numa nota vai para o registro da mesa **daquela nota**.

Com uma nota fora de qualquer mesa (ou nenhuma aberta) o painel lista as mesas para você escolher, e guarda a última escolhida nesta pasta; o botão ao lado do nome da mesa (**Trocar de mesa**) escolhe outra a qualquer momento. Uma pasta sem nenhuma mesa continua com a conversa única de sempre.

### No pé do painel

No pé do painel há o campo **Escreva para a mesa…**:

- **Mensagens.** Escreva e aperte **Enter** (Shift+Enter quebra a linha). Texto simples, até **500 caracteres**; perto do limite aparece um contador. Um `[[link]]` para uma nota da pasta vira link.
- **Rolar.** Escreva `/r 1d20+3` (ou `/roll 4d6kh3`) e o servidor rola, para todos verem — ou monte a rolagem na fila de dados logo abaixo, como acima.
- **Secreta.** Na barra da caixa, o menu **Pública / Secreta** (o de Foundry e Roll20: quem vê a rolagem) em **Secreta** faz a rolagem ser só sua e dos **donos da pasta**: os outros leem "Ana rolou em segredo", sem notação nem número.
- **Imagens.** **Cole** direto no campo: copie uma imagem ou tire um print e aperte `Ctrl+V` / `⌘V`, ou botão direito › **Colar**, ou, no celular, segure o dedo no campo › **Colar**; também vale soltar a imagem sobre o painel, e o clipe do campo escolhe da galeria. A imagem espera no campo como uma miniatura com um **×** para tirar; `Enter` envia (a imagem primeiro, depois o texto, se houver). Aceita **PNG, JPEG, WebP ou GIF** (até 10 MB; o GIF continua animado no registro). A imagem vira **um arquivo da pasta** (na pasta de anexos), aparece como miniatura e abre grande com um clique. Quem não tem **Imagens** na janela da Mesa não envia imagens; PDF e áudio pedem **Arquivos**.

Cada linha tem o botão **⋯**:

- **Fixar** põe a linha numa lista **Fixadas** no alto, para todos, até alguém **Desafixar**.
- **Apagar** tira uma mensagem ou imagem: quem a enviou apaga a sua, um dono apaga qualquer uma. Uma **rolagem** só o **mestre** (um dono da pasta) apaga; um jogador não, para ninguém rolar de novo e esconder a primeira.
- **Adicionar à nota…** vale também para mensagens e imagens (a imagem entra como incorporação do arquivo).

Um dono ainda tem **⋯ › Limpar a mesa**: pergunta antes, com **Manter as entradas fixadas** marcado, e esvazia a mesa para todos. E **Ver anteriores** traz as linhas mais antigas, aos poucos.

Em **Ajustes › Notificações**, o tipo **Mesa** avisa de uma mensagem ou rolagem de outra pessoa quando o painel está fechado; ele começa **desligado**.

---

## Levar uma rolagem para uma nota

**Arraste** a linha de uma rolagem, de uma tabela sorteada ou de um oráculo do painel da Mesa e **solte sobre o texto de uma nota** (no modo Editar ou na Fonte): um traço mostra onde ela vai cair, e o bloco entra com uma linha em branco de cada lado, **num único passo** que um **⌘Z** desfaz. Solte sobre um **board** e ela vira um cartão de texto. Quem edita a nota arrasta também **mensagens** e **rolagens** do chat da Mesa; as imagens não se arrastam: use o **⋯** (veja abaixo).

Na nota ela fica escrita como um pequeno bloco `roll`, texto que qualquer um lê, até no Obsidian:

````
```roll
quem: Ana · quando: 2026-10-22 21:40 · onde: [A Mesa](/wiki/a-mesa/)
2d6 + 1d4 + 3 → [4, 3] + [2] + 3 = 12
```
````

O Verso o desenha como um **cartão fixo** — quem, quando, onde (um link), os dados e o total — e **nunca rola de novo**: é o registro do que saiu, como no caderno do mestre.

```roll
quem: Ana · quando: 2026-10-22 21:40 · onde: [[31 - A Mesa]]
2d6 + 1d4 + 3 → [4, 3] + [2] + 3 = 12
```

Na **Fonte** você vê o texto; um bloco com erro de escrita continua sendo o código que é. Cada linha da Mesa também tem o **⋯ › Adicionar à nota…**, o caminho pelo teclado, pelo leitor de tela e pelo celular.

---

## Ocultar e guardar

- **Ocultar daqui pra trás** esconde, só nesta janela, tudo que está na Mesa agora. **Mostrar de volta** desfaz.
- **Adicionar à nota…**, no **⋯** de cada linha, escolhe uma nota, **mostra o que vai ser escrito** (o bloco `roll`, ou a linha de uma mensagem) e, se você confirmar, acrescenta ao fim dela. Se a nota mudou enquanto isso, nada é gravado.

---

## Desligar

Em **Ajustes › RPG & Mesa Solo › Dados e RPG**, a chave **Mesa** tira a aba e o botão (ela também precisa de **Dados** ligado). As rolagens nas notas continuam como sempre.

---

Volte a [Amostras de Cor](/wiki/amostras-de-cor/), siga para [Rodando uma Mesa](/wiki/rodando-uma-mesa/), consulte a [Página Inicial](/wiki/bem-vindo-ao-verso/) ou explore o Tour do Verso.
