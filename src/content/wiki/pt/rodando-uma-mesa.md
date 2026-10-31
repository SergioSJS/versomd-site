---
title: "Rodando uma Mesa"
description: "Uma pasta de campanha num UniVerso: convidar as jogadoras, notas ocultas até você liberar, links para o que ainda não apareceu com um cadeado, quem edita o quê e os limites da mesa."
order: 32
group: rpg
slug: "rodando-uma-mesa"
twin: "running-a-table"
source: "demo-vault/32 - Rodando uma Mesa.md"
updated: "2026-10-22"
---
Uma **mesa** é uma pasta de campanha num UniVerso (o Verso num servidor seu, [Verso num Servidor](/wiki/verso-num-servidor/)): você, a mestra, convida as jogadoras só para ela, e cada nota fica **oculta** até você liberar. Nada disso é escrito nas notas: o que está liberado, o que tem nome secreto e quem pode editar fica no banco do servidor, então um arquivo sincronizado, ou aberto no Obsidian, é uma nota comum.

Só a dona da pasta faz isto, numa pasta de um servidor ou numa pasta deste computador **sincronizada** com ele ([Verso num Servidor](/wiki/verso-num-servidor/)): a mestra pode conduzir a sessão do app de desktop, com a pasta local, enquanto as jogadoras usam o navegador ou o app do Windows na pasta do servidor. Sem conexão (ou com a sincronização pausada) a mesa fica indisponível e o painel **Mesa** diz isso; ela volta sozinha quando a conexão volta. Numa pasta só deste computador não há mesa, e nada disto aparece.

---

## Fazer da pasta uma mesa

1. Com a pasta aberta, o painel **Mesa** tem o botão **Tornar esta pasta uma mesa** (só para a dona de uma pasta de servidor que ainda não é mesa); depois dele, **Abrir a janela da Mesa**. Pode haver quantas mesas quiser na mesma pasta aberta, uma por subpasta, **e cada mesa tem a sua própria conversa** (o painel **Mesa** acompanha a nota aberta e diz *Mesa: nome*, veja [A Mesa](/wiki/a-mesa/)): cada pasta que é mesa ganha um selo **Mesa** na lista, e para a dona ele abre a janela *daquela* mesa; as jogadoras veem o selo **Mesa · jogador**, que mostra o que podem fazer ali (ler as notas liberadas e editar as que foram entregues a elas naquela mesa, em links) e não tem ajustes. O botão ao lado do nome da pasta acompanha a nota aberta: **Mesa: nome** da mesa que a contém, ou **Mesas (N)** com a lista quando a nota está fora de todas. Também dá pelo botão direito numa pasta › **Tornar esta pasta uma mesa**, ou, para a pasta toda, no fundo da lista › **Tornar a pasta toda uma mesa**. Numa pasta só deste computador o painel diz por que não há mesa.
2. A janela **Mesa** abre. Toda nota da pasta, as que já estavam e as que você fizer depois, começa **oculta**, com um cadeado na lista.
3. Para voltar atrás: **Desfazer mesa** na mesma janela, ou no menu da pasta. Os arquivos nunca mudaram.

Uma mestra pode ter várias mesas, uma pasta cada.

---

## Convidar as jogadoras

Na janela **Mesa**, **Convidar jogadores › Gerar link** faz um link de uso único, válido por 7 dias, que dá **leitura** desta mesa e só dela: quem aceita vê a pasta da mesa e nada acima nem ao lado. **Copiar o link** e mande.

Só quem administra o servidor convida alguém que ainda não tem conta; quem já tem conta entra pelo **Compartilhar…** da pasta ([Arquivos e Pastas](/wiki/arquivos-e-pastas/)). E quem já tem conta neste servidor, de outra mesa, **aceita o link com a conta que tem**: na página do convite, se já está dentro, o botão é **Entrar na mesa como** seu nome (**Não sou eu** sai da conta); se não, **Já tenho conta — entrar e aceitar** pede o e-mail e a senha ali mesmo. Não se cria outra conta, e um convite feito para um e-mail só serve àquela conta.

**Mesa aberta** é uma **chave** no topo da janela, com um selo **Aberta** ou **Fechada**, e vale na hora: não há botão de salvar. Desligada, as jogadoras não conseguem abrir a pasta e quem está dentro sai; e você sempre entra. **O que a jogadora vê:** no lugar da pasta, "A mesa está fechada pelo mestre. Você entra quando ela abrir.", com **Tentar agora**; o app tenta de novo sozinho, de vez em quando, e ela entra assim que você ligar a chave. Para você, o botão da Mesa ao lado do nome da pasta diz **Mesa (fechada)** enquanto estiver desligada, para você não esquecer ninguém do lado de fora.

A janela é feita de cartões: **Convidar jogadores** (o link num campo, com **Copiar** e o dia em que vence), **Jogadores** (uma tabela, veja [Quem pode o quê: a tabela de jogadoras](#quem-pode-o-quê-a-tabela-de-jogadoras)), **Notas** (quantas liberadas e quantas ocultas, com **Liberar tudo** e **Ocultar tudo**, que valem para a mesa toda) e, recolhidos, os limites em **Avançado**. **Desfazer mesa** fica no pé, em vermelho e discreto, e pergunta antes.

**Na página da pasta** (a que abre ao clicar no nome da pasta) a mesa vira uma linha fina logo abaixo do título: **MESA ● Aberta · 2 jogadores · 3 online**, com **Acesso…** (o diálogo de acesso da pasta), **Convidar**, **Abrir a Mesa** e a engrenagem de **Configurações da mesa**, que abre a janela inteira, onde fica a chave **Mesa aberta**. Embaixo, a conta: quantas notas as jogadoras veem e quantas são só suas. Numa pasta que ainda não é mesa, a linha é só o botão **Tornar esta pasta uma mesa**. A jogadora vê uma linha só, **MESA ● Aberta · 3 online**, e o botão **Entrar na Mesa**.

---

## Liberar aos poucos

- Botão direito numa nota, num board, num arquivo ou numa pasta › **Acesso…**. Abre uma lista: a linha **Toda a mesa** e uma linha por jogadora, cada uma com uma escolha, **Não vê**, **Vê** ou **Edita**. Oculto é o padrão da mesa: quem está em **Não vê** não sabe que a nota existe. Numa nota, cada escolha vale na hora e o rodapé diz **Salvo ✓** com **Desfazer**; a linha **Toda a mesa** vale para quem entrar depois, e embaixo do nome de cada jogadora está de onde vem o acesso dela: **segue a mesa**, **segue a pasta** ou **acesso próprio**.
- O mesmo diálogo abre pelo ícone de pessoas no título de qualquer arquivo, e numa seleção de vários arquivos (**Acesso de N arquivos…**). Na janela **Mesa**, o número **Vê** ou **Edita** de cada jogadora abre a lista dela, com o mesmo controle em cada arquivo.
- **Uma pasta** vale para tudo o que está dentro dela, arquivos e subpastas. O diálogo da pasta tem **Cancelar** e **Aplicar** no rodapé, e diz **Altera N arquivos** antes de você aplicar. Para liberar ou ocultar a mesa toda, escolha **Toda a mesa** em **Vê** ou **Não vê** no diálogo da pasta raiz e aplique.
- **Exceção:** depois de aplicar a pasta, um único arquivo pode ter acesso próprio, diferente do da pasta. O diálogo da pasta mostra uma linha, **N arquivos com acesso próprio · Ver**, que abre a lista deles com busca; **↺ Seguir** devolve um arquivo ao acesso da pasta, e **Seguir a pasta em todos** devolve todos (pergunta antes). Se você muda a pasta e há exceções, o diálogo pergunta: **Manter** (o padrão) ou **Seguir a pasta em todos**. Um arquivo que entra na pasta vindo de outro lugar mantém o acesso que tinha, e aparece nas exceções.
- Na árvore, uma marca pequena ao lado de cada arquivo mostra o estado dele para você: o cadeado para o que está oculto da mesa, o lápis para o que alguma jogadora edita.

Assim o **diário** de uma jogadora, uma **pista que só um personagem recebeu** ou a **ficha** de cada jogadora são só uma nota com **Vê** ou **Edita** para ela: não há recurso à parte. Dar **Edita** a uma jogadora que ainda não via a nota a **inclui** entre quem a vê, e a linha de status diz isso.

Uma nota oculta não existe para a jogadora: não está em lista nenhuma, e pedir por ela responde como pedir por uma que nunca houve. As imagens e arquivos só aparecem se uma nota **liberada** os mostra. Os blocos `> [!secret]` ([Dados e Tabelas Sorteadas](/wiki/dados-e-tabelas-sorteadas/)) continuam escondendo um pedaço de uma nota liberada.

---

## Quem vê esta nota

Dentro da nota, ao lado da estrela, há um ícone de **usuários com um número**: quantas jogadoras veem esta nota. Passe o mouse (ou toque, ou dê foco com Tab e aperte Enter) para abrir a lista: para você, **cada jogadora da mesa**, com **Vê**, **Edita** ou **Não vê** (o ícone e a palavra, não só a cor) e um atalho **Acesso…** que abre o mesmo diálogo da nota; para a jogadora, só **quem vê a nota** ("Você, Bruno e o mestre" ou "A mesa toda"), nunca os seus controles. **Esc** fecha e o foco volta ao botão; no celular a lista abre como uma folha de baixo, com um botão para fechar. O ícone só aparece em notas de uma mesa que já tem jogadoras.

---

## Um link para uma nota que ainda não apareceu

Numa nota liberada, `[[Barão]]` para uma nota oculta chega à jogadora como **Barão 🔒**: o texto, sem link, para ela saber que há algo. Com apelido, `[[A traição do barão|um rumor]]` vira **um rumor 🔒**. Um incorporado `![[Cripta]]` vira "🔒 (ainda não revelado)". Nunca vai o caminho, o título de uma seção nem um `^id`.

Quando o nome já é um spoiler: botão direito na nota oculta › **Nome secreto**, e todo link para ela vira ▒▒▒▒, com o mesmo tamanho sempre. Um cartão de **board** para uma nota oculta também chega como um cartão trancado. Ao liberar a nota, os links funcionam para todo mundo.

---

## Quem edita

Por padrão as jogadoras só leem o que está em **Vê** para elas. Em **Acesso…** da nota, a linha da jogadora em **Edita** a torna quem a edita (a ficha dela, ou uma nota da mesa toda se a linha **Toda a mesa** for **Edita**). Quem edita a nota a vê, e a lê **inteira**, com os blocos secretos e os links como você os escreveu: se há segredo nela, não a dê para ninguém.

Quem edita pode **arrastar qualquer rolagem ou mensagem** do chat da [Mesa](/wiki/a-mesa/) para dentro da nota, e o mesmo num board, onde o cartão entra como texto. Um jogador que edita um board edita **ao vivo**, e vê só o que lhe é permitido: os cartões de arquivos que ele não vê aparecem trancados.

Quem edita uma **pasta** da mesa edita tudo o que ela vê ali dentro e **renomeia** o que há nela; **criar** notas e boards depende dos direitos abaixo. Quem edita um arquivo também coloca imagens nele. Ninguém além de você apaga ou move; o servidor confere isso em cada porta (a janela, a sala de edição, o aparelho sincronizado).

---

## Quem pode o quê: a tabela de jogadoras

O cartão **Jogadores** é uma **tabela**, uma linha por jogadora, com colunas para o que cada uma pode fazer:

| Coluna | O que mostra |
|---|---|
| **Jogador** | o avatar, o nome e um ponto verde enquanto ela está na mesa |
| **Vê** | quantas notas estão liberadas para ela; clique no número para abrir a lista, com cada nota como link |
| **Edita** | quantas notas ela pode editar (as que você marcou com **Edita** em **Acesso…**); clique para ver quais |
| **Direitos** | quantos dos quatro direitos você deu a ela; clique no número para abrir as **quatro chaves** |

Por padrão a jogadora só lê e escreve texto no chat: os quatro direitos começam **desligados** e é você quem liga, uma jogadora de cada vez, ou pela caixa **Todos** de cada direito, logo abaixo da tabela, que fica "mista" quando as jogadoras diferem:

| Direito | O que ela passa a poder |
|---|---|
| **Imagens** | enviar uma imagem para o chat da [Mesa](/wiki/a-mesa/) |
| **Arquivos** | enviar PDF, áudio e outros arquivos que não são imagem, para o chat e para dentro de um arquivo que ela edita |
| **Cria notas** | criar notas, bases e pastas dentro de uma pasta que ela edita |
| **Cria boards** | criar boards e desenhos dentro de uma pasta que ela edita |

**Editar** um arquivo já cobre o resto, sem direito nenhum: a jogadora coloca uma **imagem nova** nele (o servidor grava o arquivo, com as conferências de sempre) e o **renomeia** dentro da pasta. Ela nunca apaga, e mover um arquivo para outra pasta continua sendo só seu; o arquivo movido leva o acesso que tinha. Editar uma **pasta** sem **Cria notas** nem **Cria boards** é editar e renomear o que há nela, não acrescentar; quando a jogadora tenta, a janela diz qual direito falta ("O mestre não te deu o direito de criar boards.").

Cada chave salva na hora e diz **Salvo** ao lado; o leitor de tela lê "Ana pode criar notas". Ligada ou desligada, a janela da jogadora fica sabendo **na hora**: o botão de anexar, o colar e o soltar aparecem ou somem, sem recarregar. Quem grava o arquivo é o servidor, com as conferências de sempre (o tipo do arquivo pelos bytes, nunca SVG, página ou script, o limite de tamanho da mesa, a cota da pasta); tanto faz a jogadora ter entrado por um compartilhamento ou ser membro da pasta. Uma imagem nova posta numa nota ou num board que ela edita vai para uma pasta `assets` ao lado do arquivo (criada se faltar; `assets 2`, `assets 3`… se o nome estiver ocupado por algo que ela não vê), e quem vê o board ou a nota vê a imagem, e só essas pessoas. O chat continua guardando as imagens na pasta de anexos da mesa. Você, dona da pasta, sempre pode tudo. No celular cada jogadora é uma linha enxuta, e os direitos abrem embaixo dela, sem rolar para o lado. Tudo pelo teclado: Tab, Espaço na chave, Enter no número.

---

## Limites da mesa

Em **Avançado: limites da mesa** (recolhido; cada campo salva ao sair dele ou com Enter e diz **Salvo** ao lado): quantas entradas o registro da [Mesa](/wiki/a-mesa/) guarda (de 1.000 a 200.000; 20.000 de início) e o tamanho de uma imagem nela (de 1 a 30 MB; 10 de início). Passando do limite do registro, saem as mais antigas que não estão fixadas. Cada mesa tem o seu registro e os seus limites: o ajuste de uma não muda a outra.

---

Siga para [Abrir um Arquivo Avulso](/wiki/abrir-um-arquivo-avulso/), volte a [A Mesa](/wiki/a-mesa/), consulte a [Página Inicial](/wiki/bem-vindo-ao-verso/) ou explore o Tour do Verso.
