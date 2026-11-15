---
title: "Verso no Celular e no Tablet"
description: "Uma barra só no alto e a folha das abas, um painel por vez, segurar como clique direito, o cartão de um link, a barra do teclado e os leitores de tela."
order: 29
group: tools
slug: "verso-no-celular-e-no-tablet"
twin: "verso-on-phone-and-tablet"
source: "demo-vault/29 - Verso no Celular e no Tablet.md"
updated: "2026-10-09"
---
O Verso abre no navegador do celular e do tablet, servido pelo `verso serve` — a mesma janela do computador, que se arranja para a tela que tem. No Android há também o [app](#o-app-para-android), a mesma janela instalada. Esta nota mostra o que muda com um dedo no lugar do mouse.

---

## A Tela do Celular

Numa tela com menos de 760 px de largura:

- **Uma barra só, no alto**: o **nome da nota** com a pasta dela embaixo, o botão de **modo** (o livro na Leitura, o lápis no Editar: um toque troca entre os dois), o **⋯** do painel, o botão com o **número de abas abertas** — na ponta direita, onde o polegar alcança — e o sino das **Notificações**. O resto da tela é do texto. A fita lateral e a barra de status do computador saem.
- **O botão de abas** (ou um toque no nome da nota) abre uma folha logo abaixo da barra: as **abas abertas** (um toque traz a aba para a frente, o **×** fecha), o **caminho** da nota (cada pasta abre a vista dela), os três modos com nome — **Leitura**, **Editar** e **Fonte** — e seis ações: **Arquivos** (a gaveta com a árvore), **Buscar**, **Nova nota**, **Voltar**, **Comandos** (a paleta) e **Painel** (a gaveta da direita: estrutura, links, tags, favoritos, focos, calendário — e a Mesa e a música, quando ligadas). Um toque fora da folha, ou o Voltar do Android, fecha.
- **A barra de baixo** repete essas seis ações e vem ligada. Para dar a tela toda ao texto, desligue **Barra inferior sempre visível**, no fim da folha, ou use **⋯ › Ocultar a barra inferior**; o mesmo **⋯** a traz de volta, e a escolha fica guardada.
- **A árvore é uma gaveta**: abre por **Arquivos** e fecha com um toque fora dela.
- **Um painel por vez**: um layout dividido em [painéis lado a lado](/wiki/abas-paineis-espacos-de-trabalho-e-janelas/) mostra uma só, com um botão **1/2** na barra do alto que troca de painel. O layout fica guardado e volta inteiro numa tela mais larga.
- **As ferramentas de um painel estreito** cabem num botão **…**: voltar, nova nota, as abas e as **Ações da aba…**.
- **Um aviso que importa** — um salvamento que falhou, a conexão com o servidor — aparece no alto do painel, com o sino das **Notificações** ao lado; os avisos das notificações aparecem no alto também.

No tablet (de 760 a 1180 px) as barras laterais ficam, e as linhas da árvore são mais altas para o dedo.

---

## Tocar, Segurar e Arrastar

- **Um toque** abre, como um clique.
- **Toque numa pasta**, em qualquer ponto da linha, para abrir ou fechar — não precisa acertar a setinha (com o mouse é igual: um clique na linha). A página da própria pasta abre pelo **botãozinho de pasta** no fim da linha (ou por **Abrir a página da pasta** no menu dela).
- **Segurar e soltar** é o clique direito: abre o menu de uma linha da árvore, de uma aba ou de um cartão.
- **Segurar e arrastar** move: uma nota para outra pasta, uma aba, um cartão do kanban. Arrastar sem segurar antes só rola a lista.
- **Nada só por gesto**: a linha da árvore em foco tem um botão **…** ao lado com o mesmo menu, e cada cartão do kanban tem o seu.
- **Organizar › Selecionar** no menu de uma linha transforma a árvore numa seleção: uma caixa em cada linha e uma barra com **Mover para…**, **Copiar caminhos relativos**, **Mover para a lixeira** e **Concluir** (o que você não pode fazer na pasta não aparece).
- **Manter aberta**, no menu de uma aba, guarda uma aba de pré-visualização, e **Abrir**, no menu de uma nota, abre sem pré-visualização — o que o duplo clique faz no computador.

---

## Escrevendo

- **Um link no modo Editar**: o toque põe o cursor no link, como em qualquer texto, e um cartãozinho ao lado oferece **Abrir** e **Editar link**. No computador continua `⌘` + clique; veja [Links, Âncoras e Notas Incorporadas](/wiki/links-ancoras-e-notas-incorporadas/).
- **Fotos e câmera**: o botão **Inserir imagem** da barra de ferramentas abre um menu com **Fotos e arquivos…** (a galeria e os arquivos do celular), **Tirar foto** (a câmera; a foto entra como `Foto AAAA-MM-DD HHMMSS.jpg`) e **Da pasta…**. A imagem é copiada para a pasta de anexos da nota e o embed entra no cursor; veja [Documentos e Mídia](/wiki/documentos-e-midia/).
- **Sem alças nos blocos**: o `+` e o ⋮⋮ do computador precisam do mouse sobre o bloco, então no celular não aparecem — e o texto começa na margem comum da tela. Quem cuida dos blocos é a barra do teclado.
- **A barra do teclado**: com o teclado na tela, uma linha acima dele, que rola para o lado, traz **+** (um bloco novo abaixo), **Transformar em…** (título, lista, tarefa, citação…), `[[`, `/`, diminuir e aumentar o recuo, **mover o bloco para cima** e **para baixo**, **excluir o bloco**, o **menu do bloco** (duplicar, copiar link…), desfazer, refazer e esconder o teclado. Os comandos valem para o bloco onde está o cursor; os menus abrem acima da barra. Veja [Blocos como no Notion](/wiki/blocos-como-no-notion/) para o que é um bloco.
- **O cursor fica acima do teclado**, e os menus — o `/`, as sugestões de link e de tag, as figurinhas — abrem no que a tela mostra.
- **Os números de linha** do modo Fonte saem do celular, a não ser que você os ligue em **Ajustes › Editor**.

---

## Bases, Grafo, Boards e PDFs

- **O kanban** de uma [base](/wiki/visualizacao-de-bases-e-dados/) passa uma coluna por vez, deixando ver a beirada da próxima; segure um cartão para movê-lo, ou use **Mover para a coluna…** no menu dele.
- **O [grafo](/wiki/visualizacao-de-grafo-e-conexoes/)**: os ajustes ficam num painel fechado, aberto pelo botão **Ajustes do grafo**; a pinça amplia e dois dedos deslocam.
- **A pinça** amplia a página inteira, como em qualquer site — menos no grafo, num board e num PDF, que a usam para si.

---

## Num Servidor

O que é o servidor e como instalá-lo: [Verso num Servidor](/wiki/verso-num-servidor/).

- **Quem só lê** a pasta vê um cadeado fechado ao lado do nome dela (*Você só lê esta pasta*), e nada que muda a pasta aparece; se tentar escrever, mover ou renomear algo, um aviso curto diz que só lê, perto de onde tentou.
- **Copiar link** dá o endereço da nota no servidor, e **Abrir numa nova aba do navegador** faz o papel da nova janela.
- **Uma página web** de uma nota aparece dentro da nota, com um link para abri-la numa aba quando o site não deixa ser mostrado dentro de outro.

---

## Parear o Celular com o Seu Computador

Sem instalar nada: o próprio Verso do computador pode servir as pastas que você marcar ao navegador do celular, **pela rede em que os dois estão** (a sua casa, por exemplo). É o mesmo servidor do `verso serve`, dentro do app. Em **Transformar em servidor** há duas caixas, **Na minha rede** e **Por um link na internet (Cloudflare, modo de teste)**; o celular pareia **só pela rede**, e o link para jogar com gente de fora é a [Mesa pela Internet](/wiki/mesa-pela-internet/). Fica **desligado** até você ligar, e desliga de novo quando o app fecha. Enquanto serve, o **ícone do Verso** (a marca do app) aparece na barra de menus do Mac (ou na área de notificação do Windows), com um menu **Servindo N pastas… / Parar / Abrir Ajustes**; no Linux a marca fica na barra de status do app.

1. No computador, **Ajustes › Transformar em servidor**. O cofre aberto na janela vem primeiro, com a árvore de pastas dele; as outras pastas que você já abriu estão no grupo **Recentes**. Marque as pastas que o celular pode ver — nenhuma vem marcada. Para servir **só algumas pastas de dentro** de uma pasta, marque-a e escolha na árvore dela (a do cofre aberto já está aberta; nas recentes, **Escolher pastas**). Marque só o que o celular pode ver: cada pasta marcada chega ao celular como uma pasta própria, o resto da pasta não aparece para ele nem pelo nome, e a pasta de anexos do cofre (a que o Obsidian configura) vai junto, só para ler e só arquivos (desmarcar a última para de servir o cofre; para servi-lo inteiro, **Servir a pasta inteira** na árvore). Em **Onde servir**, deixe **Na minha rede** marcada (ela vem marcada). Depois toque em **Ligar o servidor**. Na primeira vez o Verso explica o que o sistema vai perguntar (rede local, firewall) antes de pedir; se você negar, ele diz como liberar, sem mexer no firewall por conta própria.
2. Toque em **Parear um celular**. O computador mostra um **QR**, o endereço e um **código de oito letras**, que valem **2 minutos** e uma vez só.
3. No celular, aponte a câmera para o QR (ou abra o endereço no navegador e digite o código). O navegador avisa que o certificado não é de uma autoridade conhecida: é o certificado que o próprio app fez para o seu computador. Aceite — **só numa rede em que você confia**.
4. No computador aparece **Foi você quem leu este QR?**, com o nome do celular, o endereço e a hora. **Permitir** deixa o celular entrar (*Pode editar as notas* já vem marcada; desmarque para ele só ler. Um celular que edita entra como **você**, a dona do computador, e por isso também **apaga** — para a lixeira da pasta —, mesmo quando recebeu só parte da pasta); **Não fui eu: recusar** encerra o código. Três códigos errados fecham a janela.
5. O celular abre a janela do Verso com as pastas marcadas. Em **Ajustes › Transformar em servidor** você vê os celulares pareados e **Revoga** qualquer um: a sessão dele termina na hora. Até 4 celulares podem ficar pareados; quantos ficam **conectados ao mesmo tempo** é o ajuste **Aparelhos conectados ao mesmo tempo** (de 1 a 16, 4 por padrão) — um celular que passa do número vê um aviso dizendo o que fazer e conecta sozinho quando houver lugar. **Esquecer todos os celulares** e **Substituir a identidade deste computador** terminam todos os pareamentos de uma vez.

O que fica de fora de propósito: o celular **nunca** abre pastas que você não marcou, não vê o seu disco, não manda o computador abrir nada no sistema, não muda os ajustes do app e não abre uma pasta que outra pessoa compartilhou com você num UniVerso (nesse caso, abra o endereço do UniVerso no celular; a página dessa pasta e os Ajustes dizem *compartilhada com você em …: só quem é dona dela pode servi-la*). Se o endereço do computador mudar — outra rede, uma VPN que liga —, o servidor **para sozinho** e avisa; é preciso ligar e parear de novo. Numa rede com isolamento de clientes (um café, um hotel) o celular não alcança o computador, e o Verso diz isso.

O celular **nunca sincroniza**: ele usa a janela do navegador, e só o Verso de outra pessoa que você convidou sincroniza (veja a [Mesa pela Internet](/wiki/mesa-pela-internet/)). O certificado do app **não é de uma autoridade conhecida**, então o navegador do celular o trata como inseguro e não deixa a pasta ficar [disponível sem rede](#sem-rede). Para isso, use um UniVerso com HTTPS de verdade, ou o `tailscale serve` — veja [Verso num Servidor](/wiki/verso-num-servidor/).

---

## Sem Rede

Num servidor com HTTPS (por HTTP simples esta opção fica desligada, e o Verso diz como ligar o HTTPS), uma pasta pode ficar **disponível sem rede** neste aparelho — no celular, no tablet ou num navegador de computador. É uma escolha de cada pasta, só deste aparelho, e começa desligada.

1. Abra a pasta e vá em **Ajustes › Sem rede**. Antes de guardar, o Verso diz quanto espaço vai ocupar — as notas e os arquivos de texto inteiros, os anexos, o código da janela — e pede ao navegador que não apague a cópia. Se ele não prometer, isso aparece escrito (é mais provável no iPhone; instalar a página na tela de início — **Compartilhar › Adicionar à Tela de Início** — ajuda).
2. **Anexos**: figuras e PDFs ficam guardados **depois de abertos**, ou todos de uma vez, em **Guardar todos os anexos**.
3. Pronto: a janela abre **sem conexão**, mostra as pastas guardadas, e você lê e escreve nas notas. A busca, os links e o grafo se calculam a partir das notas guardadas, e dizem isso: *sem rede: a partir das notas deste aparelho*.
4. O que você muda espera, e a barra de status diz quantas mudanças esperam. Quando a rede volta, elas sobem **pelas mesmas regras de sincronização do app de computador**: duas notas que só ganharam linhas no fim viram uma só; uma nota mudada nos dois lados fica com a versão do servidor e a sua numa cópia, listada em **Ajustes › Sem rede**; apagar muitos arquivos de uma vez pede a sua confirmação. Um aviso diz *Voltou a rede: n mudanças enviadas*.
5. **Sair** da conta apaga a cópia deste aparelho, depois de dizer quantas mudanças ainda não subiram; se o servidor encerrar a sessão, a cópia some na próxima conexão. A cópia **não é cifrada**: o armazenamento do navegador é tão seguro quanto o aparelho desbloqueado.

Quem só lê a pasta guarda o que o servidor lhe entrega — sem o que está escondido dos leitores ([Verso num Servidor](/wiki/verso-num-servidor/)).

---

## O App para Android

O app para Android é o mesmo Verso do computador, num APK que você instala no celular (fora da loja: o Android pede para permitir instalar apps de fora uma vez). A tela é a deste resto da nota; o que muda:

- **A pasta do celular** fica **dentro do app**: na primeira vez ele cria a pasta *Verso* e oferece este tutorial. Nenhum outro app a vê, e ela é **apagada junto se o Verso for desinstalado** — **Ajustes › Sincronizar** diz isso. Para guardar uma cópia, sincronize-a com um UniVerso ou com uma nuvem (WebDAV, S3, veja [Sincronizar com uma Nuvem](/wiki/sincronizar-com-uma-nuvem/)); a senha da nuvem fica no cofre cifrado do Android. A sincronização corre **enquanto o app está aberto** e continua de onde parou quando ele abre de novo; com **Sincronizar em segundo plano** ligado (**Ajustes › Sincronizar**, desligado de saída) ela segue com o Verso fechado, sob uma notificação — se quiser, **Só no Wi-Fi** ou **Só carregando**.
- **Um UniVerso**: em **Ajustes › Servidores**, **Conectar** abre a página do servidor no navegador do celular para você entrar; depois as pastas dele aparecem no seletor de pastas (o nome da pasta, no alto da gaveta). O nome do celular para o servidor é o que você deu a ele nos ajustes do Android.
- **Uma pasta do servidor vira uma cópia no celular, que abre sem internet**: tocar numa pasta do servidor no seletor (ou em **Abrir aqui**, em **Ajustes › Servidores**) pergunta onde guardar a cópia e mostra antes quanto ela ocupa (*12 arquivos · 3,4 MB*):
  - **Dentro do app** — só o Verso vê; é **apagada se o app for desinstalado** (o servidor fica com tudo).
  - **Celular/Documents** — o Obsidian e os outros apps veem; na primeira vez o Verso pede o **Acesso a todos os arquivos** (**Permitir acesso**, ligue para o Verso e volte; depois toque em **Baixar e abrir** de novo).

  **Baixar e abrir** baixa a pasta inteira, mostra *Baixando: 3 de 12 arquivos…* e depois *Pronto*. A cópia fica sincronizada com o servidor: em **modo avião** ela abre como qualquer pasta do celular, e o que você mudar sobe quando a rede voltar, com o Verso aberto nela. Escolher a mesma pasta de novo abre a cópia direto, sem perguntar. Quem só lê recebe só o que o servidor deixa ler. Para olhar a pasta sem guardar nada, **Abrir só no servidor, sem cópia** — esse jeito só funciona com internet.
- **O celular como servidor**: **Ajustes › Transformar em servidor** funciona como no computador ([acima](#parear-o-celular-com-o-seu-computador)), só que no Wi-Fi do celular. Enquanto serve, uma **notificação** diz o que está servindo e para quantos aparelhos, e o celular fica acordado mesmo com a tela apagada: **gasta bateria e esquenta — deixe-o carregando**. Nos dados móveis só o **link pela internet** alcança o celular (**Por um link na internet**, como no computador).
- **Uma pasta que outros apps veem**: no seletor de pastas, **Abrir outra pasta…** percorre o armazenamento do celular — o que o Obsidian, o gerenciador de arquivos e o Syncthing veem — até uma pasta, ou cria uma **Nova pasta…** ali. Na primeira vez o Verso pede o **Acesso a todos os arquivos** do Android: o Android abre a página dele, você liga para o Verso e volta. Uma pasta assim fica no celular mesmo se o Verso for desinstalado. O celular abre a pasta que mostrou por último; o seletor diz onde cada uma está (*dentro do app*, *Celular/Documents*).
- **Compartilhar com o Verso**: em outro app, **Compartilhar** um texto, um link ou um arquivo `.md` e escolher o Verso — ou abrir um `.md` com **Abrir com › Verso**: vira uma **nota nova** no alto da pasta aberta, com o nome do arquivo ou a primeira linha do texto, e abre. O arquivo do outro app fica como estava; o Verso guarda uma cópia.
- **O som do celular na mesa**: quem mestra pelo celular tem **Compartilhar áudio** com *Som dos apps do celular*: o Android pede o microfone uma vez e mostra o aviso de captura de tela a cada vez (permita); o que o Spotify ou um jogo tocam vai para a mesa. Apps que proíbem, e ligações, não são ouvidos.
- **Não tem** no Android: o terminal, a linha de comando e os agentes, várias janelas, uma página web dentro da nota (ela abre no navegador) e abrir um arquivo avulso.
- **Atualizações**: em **Ajustes › Geral**, **Verificar atualizações** procura uma versão nova; baixada e conferida, ela vai para a tela de instalação do próprio Android, que pergunta antes de instalar.

---

## O App para iPad e iPhone

O mesmo Verso também vem para iPad e iPhone (iOS 16 ou mais novo). Por enquanto ele chega **pela AltStore Classic**, não pela App Store:

1. No computador, instale o **AltServer** (altstore.io) e, por ele, a **AltStore** no iPad ou no iPhone. Ela assina os apps com o **seu próprio Apple ID**, de graça, por 7 dias de cada vez, e os renova sozinha quando o computador e o aparelho estão na mesma rede.
2. No iPad ou no iPhone, baixe o arquivo `.ipa` do Verso da página da versão, abra-o com a AltStore e toque em **Instalar**.

Pela **AltStore PAL** (sem computador), o Verso vem depois, e **por enquanto só no Brasil**.

O que muda em relação ao Android:

- **A pasta do app** aparece no app **Arquivos**, em *No meu iPad › Verso* (ou *No meu iPhone*): outros apps abrem as notas dali, e o que eles mudam o Verso vê ao voltar para a tela. Ela é apagada junto se o Verso for desinstalado, a não ser que sincronize. O iOS abre só as pastas dos **Documentos** do Verso: o seletor de pastas não tem *Abrir outra pasta…*, que no Android percorre o armazenamento do celular.
- **Um UniVerso** e **o aparelho como servidor** funcionam como no Android, mas o iOS só deixa servir com o Verso na tela. Uma pasta do servidor escolhida também vira uma cópia que abre sem internet, sempre nos **Documentos** do Verso: aparece no Arquivos em *No meu iPad › Verso*, ao lado da pasta *Verso*, com o nome da pasta do servidor.
- **Não tem** no iOS: o link pela internet, o terminal, a linha de comando e os agentes, e as atualizações pelo próprio app (a AltStore as traz).

## Leitores de Tela

Com o VoiceOver (iPhone e iPad) ou o TalkBack (Android), tocar duas vezes e segurar faz o mesmo que segurar: abre o menu. Cada botão novo tem nome, em português e em inglês.

---

Anterior: [Como Você Vai Usar o Verso](/wiki/como-voce-vai-usar-o-verso/) · Próxima: [Mesa pela Internet](/wiki/mesa-pela-internet/) · [Página Inicial](/wiki/bem-vindo-ao-verso/) · Tour do Verso
