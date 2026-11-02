---
title: "Som e Música na Mesa"
description: "A mestra toca um arquivo de som e todos da mesa ouvem no mesmo ponto, cada um com o seu volume; uma nota com links de som vira a mesa de som, e quem não vê o arquivo não o ouve."
order: 36
group: start
slug: "som-e-musica-na-mesa"
twin: "sound-and-music-at-the-table"
source: "demo-vault/36 - Som e Música na Mesa.md"
updated: "2026-10-31"
---
Numa sessão, a música faz metade do clima: a taverna barulhenta, a estrada à noite, a batalha. No Verso, **o mestre aperta tocar e todo mundo da mesa ouve a mesma coisa, no mesmo ponto**, cada um com o próprio volume. A música tem uma aba só dela, **Música**, no painel da direita, ao lado da **Mesa** ([A Mesa](/wiki/a-mesa/)); funciona num UniVerso ([Rodando uma Mesa](/wiki/rodando-uma-mesa/)) e no app de desktop que serve a pasta.

Nenhum som passa pela rede: cada janela toca a **sua própria cópia** do arquivo, e só o "o que toca e em que ponto" é dividido, pelo relógio do servidor. Por isso a qualidade é a do arquivo e ninguém fica atrás de ninguém. Nada disso é escrito em arquivo nenhum: o que está tocando fica na memória do servidor e some quando a última pessoa sai da mesa.

---

## Ligar

**Ajustes › Recursos › RPG e mesa › Som da mesa**. Vem ligado sempre que a **Mesa** está ligada; desligado, não há aba Música, botão nem item na barra de status, e nada é carregado. Até a primeira música tocar, nada do tocador é carregado também.

---

## A aba Música

Abra o painel da direita e escolha **Música** (a notinha musical, ao lado do dado da Mesa; no celular, **Painel** na barra de baixo, e a aba abre numa folha de baixo para cima). De cima para baixo:

1. **Tocando agora**: o nome da faixa, de qual lista ela veio (*De: Música*, *De: Trilha › Taverna*), a barra de **Posição** e o tempo.
2. Para o mestre, os botões: **Faixa anterior**, **Pausar** / **Continuar**, **Próxima faixa**, **Parar** e **Repetir** — um clique repete **esta faixa**; o segundo, **a lista** inteira; o terceiro desliga. E o **Volume da mesa**, o de todos de uma vez.
3. Para todo mundo: **Seu volume**, **Silenciar** e **Seguir a mesa** (veja abaixo).
4. **Filtrar músicas**: digite parte do nome (sem se preocupar com acento ou maiúscula) e só ficam as faixas que combinam.
5. **Na fila**: a lista de onde veio a faixa que toca, com ela marcada; é o que **Próxima** e **Anterior** percorrem.
6. **Pastas**: **cada pasta que tem arquivos de som é uma lista**, sem configurar nada. Ponha os seus MP3 numa pasta `Música` e ela aparece aqui.
7. **Playlists**: **cada nota com links de som é uma playlist**, um bloco por título (veja abaixo).

Um clique numa faixa toca ela para todos — só para o mestre. Quem joga vê as mesmas listas, sem botão de tocar: *Só o mestre toca e troca as faixas; você controla o seu volume.* O servidor recusa o comando de quem não é o mestre, seja qual for a janela. Sem nenhum arquivo de som na pasta, a aba diz como começar.

---

## Na aba Mesa: uma linha só

Enquanto algo toca, a aba **Mesa** mostra no topo **uma linha fina**: o nome da faixa e, para o mestre, **Faixa anterior**, **Pausar** e **Próxima faixa**; para todos, **Volume**, que abre o seu volume e o **Silenciar**. Um clique no nome abre a aba Música. Quando nada toca, a linha some e o chat fica com o espaço todo.

---

## Uma nota é uma playlist

Não precisa de nada especial: **qualquer link para um arquivo de som numa nota ganha um botão de tocar** ao lado, para o mestre (um embed vira um player, logo abaixo), e a nota aparece em **Playlists**. O título acima de uma lista desses links é uma **cena**, e **Próxima** e **Anterior** andam por ela. Experimente com as duas faixas de amostra que vêm com este tutorial:

### Taverna

- A taverna
- A estrada

### Estrada

- A estrada, de novo

Aperte o botão ao lado de **A taverna**: a faixa toca, *De: 36 - Som e Música na Mesa › Taverna*, e **Próxima faixa** leva para **A estrada**. No fim da lista, Próxima apaga; com **Repetir: a lista**, ela volta à primeira. Quando uma faixa termina sem repetir, a janela do mestre toca a próxima da lista, ou para.

No Obsidian, esta mesma nota é uma lista de links comum: nenhum código novo, nada que o Obsidian não leia.

---

## Um player na nota

Um **embed** de som vira um player na própria nota, como no Obsidian ([Documentos e Mídia](/wiki/documentos-e-midia/)). `![[assets/sons/taverna.mp3]]`:

*taverna.mp3*

- Ele toca **só para quem aperta**, nesta janela: bom para ouvir uma faixa antes de tocá-la para a mesa.
- Para o mestre, o player tem também **Tocar para a mesa**: a faixa vai para a aba Música, com a cena do título acima dela, e o Verso faz a mesma pergunta de antes quando algum jogador não vê o arquivo. Sozinho, sem mesa, o botão diz **Tocar na aba Música**.
- Se a música da mesa está tocando e você aperta tocar num player da nota, **a música da mesa fica mais baixa** enquanto ele toca — o player avisa — e volta ao volume quando ele para. Se o mestre começa uma música para a mesa enquanto o seu player toca, **o seu pausa**: *Pausado: a música da mesa começou.*
- Um jogador só tem o player de um arquivo que ele vê. O embed de um arquivo oculto aparece como **🔒 (ainda não revelado)**, sem o nome; num board, o cartão dele fica trancado. Atenção: um arquivo sem acesso próprio segue as notas que o incluem — embutido numa nota que os jogadores veem, eles também o veem. Para guardar uma faixa, botão direito nela › **Acesso…** › *Toda a mesa: Não vê*.

---

## O que cada pessoa controla

Todo mundo — mestre e jogadores — tem, no próprio aparelho:

- **Seu volume**, só seu;
- **Silenciar** / **Voltar o som**;
- **Seguir a mesa**: desligado, só a sua janela fica em silêncio. Ninguém mais é silenciado, e a música continua para os outros.

Nada disso é enviado a ninguém.

---

## Quem ouve: quem vê o arquivo

Numa mesa, cada arquivo começa **oculto** até o mestre liberar ([Rodando uma Mesa](/wiki/rodando-uma-mesa/)), e a música segue a mesma regra: **ouve quem vê o arquivo**. Um jogador que não vê fica sabendo só que *uma faixa que você não vê* está tocando, com o porquê — nem o nome dela chega até ele, nem os bytes.

Quando o mestre toca um arquivo que alguns jogadores não veem, o Verso pergunta antes, com os nomes: *"2 jogadores não veem este arquivo (Ana, Bruno). Liberar para a mesa e tocar?"*

- **Liberar e tocar** dá *vê* a toda a mesa para esse arquivo e toca;
- **Tocar sem eles** toca, e quem não vê não ouve;
- **Cancelar** não toca nada.

Enquanto toca, a aba Música do mestre diz quem não ouve. Para liberar de uma vez uma pasta de músicas, botão direito na pasta › **Acesso…** › *Toda a mesa: vê*; daí em diante cada arquivo novo nela já nasce visto.

---

## Formatos

Cada janela toca o que o seu navegador sabe tocar; o Verso não converte nada. **MP3** ou **AAC** (`.m4a`) tocam em todo lugar, celulares incluídos; OGG não toca no iPhone nem no Mac; WAV e FLAC tocam, mas pesam: cada pessoa da mesa baixa o arquivo inteiro. Quando uma janela não consegue tocar uma faixa, ela diz isso a quem a usa, e o mestre vê quem não consegue.

---

## Chegar depois, e o primeiro toque

Quem entra com a música já tocando começa **no mesmo ponto** que os outros. Navegadores só tocam som depois de um toque na página: se for o caso, aparece o botão **Ouvir a mesa** — um clique, ou qualquer toque na janela, e a música entra.

Se o mestre fecha a janela, **a música continua** para os outros; ela acaba quando todos saem da mesa.

---

## Com as abas fechadas

Enquanto toca algo e nem a aba **Mesa** nem a **Música** estão à vista, a barra de status mostra uma notinha musical com o nome da faixa; um clique abre a aba Música.

---

## Sozinho, sem mesa

Numa pasta só deste computador não há mesa, mas a aba Música funciona do mesmo jeito, **só para você**: ela diz *Só nesta janela: a pasta não tem mesa*, e nada é enviado a ninguém.

---

## Compartilhar áudio

O mestre pode compartilhar **o som das páginas abertas no Verso** (YouTube, Spotify Web, uma trilha de ambiente) com todos da mesa, sem nenhum arquivo na pasta. Entra só essa fonte: nunca outros programas do computador, nunca o som do sistema inteiro, e nunca os sons do próprio Verso (dados, avisos, a música da mesa, os players de áudio das notas). Esses continuam tocando na sua janela, a partir do próprio aplicativo, e nunca chegam à mesa. Isso existe só no **app para computador**; no navegador e no celular você **ouve**, mas não compartilha, e o botão nem aparece.

1. Na aba **Música**, **Compartilhar áudio…** (no estado vazio ou no alto da aba). Só o mestre vê o botão.
2. Abra a página **como página**, não dentro de uma nota, e deixe-a tocar. Na lista, escolha **Páginas abertas no Verso**. Em **Qualidade** (fechado) fica a taxa: 96 kbit/s é um bom começo. Sem página aberta, a lista pede para abrir uma.
3. Na primeira vez, o Verso avisa: *o som do que você compartilha vai para todos desta mesa; o que você pode tocar para os outros é responsabilidade sua; o Verso não grava nada*.
4. Enquanto compartilha, a aba mostra *Compartilhando …*, um **medidor de nível** com a frase *Som chegando* (ou *Silêncio*, se a página não está soltando som ou está bloqueada), quantos ouvem e a taxa. **Parar de compartilhar** está na aba, na linha da aba Mesa e na barra de status. Você continua ouvindo a página direto; o Verso nunca toca o seu próprio fluxo de volta.
5. Quem está na mesa vê *Fulano está compartilhando …* e usa **o seu volume**, **Silenciar** e **Seguir a mesa**; se o navegador espera um toque, **Ouvir a mesa**. Um segundo compartilhamento pergunta antes de substituir o primeiro. Quem ouve recebe com um atraso de cerca de 400 a 600 milissegundos e usa cerca de 130 kbit/s na rede por ouvinte.

> **No Mac (macOS 14.4 ou mais novo)** a única fonte é **Páginas abertas no Verso**: o som das páginas abertas como página (YouTube, Spotify Web, uma trilha de ambiente), todas juntas, e o nome diz quais sites estão tocando agora (*Páginas abertas no Verso: open.spotify.com*). Ela aparece quando uma página já fez som: comece a tocar nela e abra **Compartilhar áudio…** de novo. Os sons do próprio Verso saem por um caminho próprio enquanto você compartilha, com um atraso de alguns centésimos de segundo. **Vídeos e páginas mostrados dentro de uma nota vão junto**: no Mac o som deles não se separa, e o aviso do Verso diz isso. Na primeira vez, o macOS pede para permitir **Gravação de Áudio do Sistema** ao Verso. Se você disser não, o Verso avisa, e você pode permitir depois em **Ajustes do Sistema > Privacidade e Segurança > Gravação de Áudio do Sistema** (em algumas versões, *Tela e Áudio do Sistema*), e começar de novo. Uma fonte que dá *Silêncio* enquanto toca costuma ser esta permissão desligada. Uma cópia do Verso aberta pelo terminal (build de desenvolvimento) não acha páginas: use o app instalado. Num macOS mais antigo o seletor diz que precisa de um mais novo.
>
> **No Windows (Windows 11 ou mais novo)** o Verso compartilha **só o som das páginas abertas no Verso**, nunca outros programas e nunca os sons do próprio Verso (dados, avisos, a música da mesa: esses já tocam na sua janela). A lista tem uma fonte, **Páginas abertas no Verso**, e diz quais sites estão tocando agora; todas as páginas abertas vão juntas. Abra a página **como página**: uma página mostrada dentro de uma nota não é compartilhada, porque ali ela não se separa dos sons do próprio Verso. Sem página aberta, o seletor pede para abrir uma; no **Windows 10** ele diz que precisa do Windows 11. As páginas agora guardam seus logins num perfil só delas, então depois desta atualização entre mais uma vez nas páginas que você usa.
>
> **No Linux** a lista é a mesma do Windows: **só o som das páginas abertas no Verso** (YouTube, Spotify Web, uma trilha de ambiente), todas juntas, nunca outros programas e nunca os sons do próprio Verso; a lista diz quais sites estão tocando agora. Abra a página **como página**: **vídeos e páginas mostrados dentro de uma nota não são compartilhados no Linux**. Enquanto você compartilha, os sons do próprio Verso saem por um caminho próprio, com um atraso de alguns centésimos de segundo. Precisa das ferramentas de som do PulseAudio (`pactl`, `parec` e `pacat`, do pacote `pulseaudio-utils`, que o PipeWire também usa): o .deb e o .rpm as recomendam, e quem usa o AppImage as instala à mão. Sem elas o seletor avisa. Sem página aberta, ele pede para abrir uma.

---

As duas faixas
---

As duas faixas de amostra (`assets/sons/`) são de **RandomMind**, em domínio público (CC0 1.0): `taverna.mp3` é “The Old Tower Inn” (<https://opengameart.org/content/medieval-the-old-tower-inn>) e `estrada.mp3` é “The Bard's Tale” (<https://opengameart.org/content/medieval-the-bards-tale>), as versões em loop, regravadas em mono para pesar pouco.

Siga para a [Compatibilidade com o Obsidian](/wiki/compatibilidade-com-o-obsidian/), ou volte à [UniVerso num Servidor Grátis da Oracle](/wiki/universo-num-servidor-gratis-da-oracle/) ou a [A Mesa](/wiki/a-mesa/), consulte a [Página Inicial](/wiki/bem-vindo-ao-verso/) ou explore o Tour do Verso.
