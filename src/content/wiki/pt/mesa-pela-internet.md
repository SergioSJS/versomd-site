---
title: "Mesa pela Internet"
description: "O Verso do seu computador vira um servidor: um link da Cloudflare (modo de teste) ou o seu próprio endereço, convites, sentar à mesa, links de leitura e quem entra como."
order: 30
group: server
slug: "mesa-pela-internet"
twin: "a-table-over-the-internet"
source: "demo-vault/30 - Mesa pela Internet.md"
updated: "2026-11-04"
---
Você quer jogar com gente que não está na sua casa, sem alugar servidor nem entender de rede? O Verso do seu computador pode **virar um servidor** por algumas horas: você liga, manda um **link** às jogadoras, elas entram pelo navegador e jogam na [Mesa](/wiki/a-mesa/), como num UniVerso ([Verso num Servidor](/wiki/verso-num-servidor/)). É a mesma ideia de rodar o Foundry no seu computador: **o computador precisa ficar ligado e acordado** enquanto a mesa acontece.

É **um recurso só**, o **Transformar em servidor**, com duas caixas: servir **na sua rede** (os celulares que você [pareia](/wiki/verso-no-celular-e-no-tablet/)) e servir **por um link na internet**. Marque uma, a outra ou as duas.

> **Aviso: O link é um modo de teste**
>
> O link usa um serviço de teste da Cloudflare: sem garantia de funcionamento, até 200 pedidos ao mesmo tempo. O Verso diz isso na própria caixa. Só entra quem você convidar, e ninguém vê uma pasta que você não compartilhou. **Desligue quando a sessão acabar.**

---

## 1. Ligar o link

1. Abra a pasta da campanha no Verso e vá em **Ajustes › Transformar em servidor**.
2. Sirva a pasta da campanha **pela página dela**: abra a página da pasta (ou o menu dela na árvore) e toque em **Servir deste computador**. Com o servidor desligado, o Verso pergunta **Ligar o servidor e servir esta pasta?** e faz as duas coisas num passo. Dá também para marcar a pasta em **Ajustes › Transformar em servidor › Pastas servidas** — nenhuma vem marcada —, e tudo isso vale **com o servidor ligado**: servir ou parar de servir uma pasta não desliga o servidor, então o link continua o mesmo e as jogadoras das outras mesas nem percebem. A mesa pode ficar na pasta ou em **qualquer subpasta** dela. **Escolher pastas** dentro dela diz só o que os **seus celulares** veem; as jogadoras veem só o que você compartilha ou põe numa mesa. Uma pasta sua que também sincroniza com um UniVerso pode ser servida daqui do mesmo jeito: o que as jogadoras mudam aqui sobe para o UniVerso pela sincronização, como qualquer mudança neste computador. Só não se serve uma pasta que **outra pessoa** compartilhou com você: quem serve é a dona dela.
3. Em **Onde servir**, marque **Por um link na internet (Cloudflare, modo de teste)**. Se não quiser servir celulares na sua rede, deixe **Na minha rede** desmarcada: com só o link, o computador não aceita nada pela rede da casa.
4. Toque em **Ligar o servidor**. Na **primeira vez** o Verso baixa o **cloudflared**, o programa da Cloudflare que abre o link (cerca de 40 MB), e confere a soma dele antes de usar. Demora um pouco; o painel mostra quantos MB já vieram, e **Cancelar** para tudo ali mesmo — nada liga depois e o arquivo pela metade é apagado.
5. Quando aparecer **Link no ar.**, o painel mostra o **Endereço da mesa**, com **Copiar link** e **Mostrar o QR do link**. A barra de status passa a dizer **Servindo · link na internet**, e o **ícone do Verso** na barra de menus do Mac (ou na área de notificação do Windows) ganha uma linha **Link pela internet ligado**; no Linux fica só a marca da barra de status. Um link novo pode levar até um minuto para abrir: se a página não abrir na hora, espere um pouco e tente de novo.

O painel também diz:

- **Quanto falta**: *Fecha sozinho em … h … min*. O link dura **12 horas**. **Prorrogar por 12 horas** mantém o **mesmo link** por mais 12. Passou das 12 sem prorrogar, o link fecha e o painel avisa; ligue de novo para um link novo.
- **Um link rápido muda a cada vez que liga.** Mande o novo às pessoas; os convites feitos antes apontam para o link antigo.
- Se a rede bloqueia UDP: *o link passou a usar HTTP/2*. Funciona igual, às vezes um pouco mais devagar.
- Se o link **cair** no meio da sessão (o cloudflared parou), nada religa sozinho: o painel diz *Mesa offline*. Desmarque e marque a caixa do link para ligar de novo — um link rápido sai diferente.
- O **cloudflared** é da Cloudflare, licença Apache-2.0; a lista está em **Ajustes › Créditos**.

### Se não ligar

O painel diz o motivo em palavras. Os mais comuns:

- *Não foi possível baixar o cloudflared do GitHub*: sem internet, ou o GitHub não respondeu. Confira a conexão e tente de novo.
- *O cloudflared baixado não confere com a soma que o Verso fixa*: o arquivo foi recusado e apagado. Tente mais tarde.
- *O cloudflared não alcançou a Cloudflare nem por QUIC (UDP) nem por HTTP/2*: a rede parece bloquear. Tente outra rede.
- *A Cloudflare não deu um link a tempo*: o serviço de teste pode estar fora. Tente em instantes.

---

## 2. Convidar as jogadoras

Antes, confira **Ajustes › Conta**, que aparece enquanto o servidor está ligado: **Seu nome para os jogadores** é como a mesa vê você no chat, nas rolagens e na lista. Começa com o nome do usuário deste computador; troque e toque em **Salvar nome**. A Conta também tem o idioma e **Onde você entra como dono** (esta janela e os celulares pareados). Não há senha: o seu clique no app é a prova de que é você.

Você convida pela **página da pasta**, como num UniVerso, na janela da pasta servida (seção 3 abaixo):

1. **Uma mesa:** no cartão da mesa, **Convidar jogadores › Gerar link**. Acima do botão, **Hospedada em** diz onde a mesa está: *este computador* com o endereço que o convite vai levar (o link da internet, se estiver ligado; senão o da sua rede), ou o **UniVerso** em que a janela está. **Uma pasta sem mesa:** **Compartilhar…** no menu da pasta, escreva o e-mail da pessoa e o papel (**lê** ou **edita**) e toque em **Compartilhar**; nenhuma conta tem esse e-mail ainda, então o diálogo oferece **Gerar link de convite**. Nos dois casos o link aparece **uma vez**: copie e mande à pessoa por onde preferir. Vale por **7 dias** e serve para **uma pessoa só**.
2. A jogadora abre o link, cria a conta com **qualquer e-mail dela** (**nada é enviado**: o e-mail só serve de nome de entrada), um nome e uma senha, e depois entra pelo endereço da mesa.
3. Em **Ajustes › Transformar em servidor**, a lista **Convites** mostra todos os convites deste servidor (esperando, aceito por…, encerrado, expirado) e **Encerrar** fecha um que ainda espera.

Com a caixa do link desmarcada, o convite sai pelo endereço da **sua rede**: só abre quem estiver nela, e o navegador vai reclamar do certificado do computador — é o mesmo aviso do [pareamento do celular](/wiki/verso-no-celular-e-no-tablet/#parear-o-celular-com-o-seu-computador); aceite só numa rede em que você confia.

Quem entra vê só o que você compartilhou, com o papel que você deu. Como mestrar a mesa (liberar notas, jogadoras, direitos) está em [Rodando uma Mesa](/wiki/rodando-uma-mesa/).

**Para quem foi convidado:** a página de entrada lembra de abrir **primeiro** o link do convite e criar a conta. Se a mesa não responder, a janela diz **A mesa está offline** — o computador de quem mestra pode ter desligado ou dormido, ou o link acabou — com **Tentar de novo**, e tenta sozinha a cada 30 segundos. Se a mestra mandou um link novo, é só abri-lo.

---

## 3. A sua janela na mesa

Não há botão para sentar à mesa. Com o servidor ligado e a pasta da janela servida, o menu de uma pasta (clique com o botão direito, ou toque e segure) tem **Tornar esta pasta uma mesa**, e o fundo da lista de notas tem **Tornar a pasta toda uma mesa** — como num UniVerso. Ao escolher, a janela passa a ser cliente do seu próprio servidor, como dona, e a mesa nasce nele: a Mesa, a campanha e os convites, como num UniVerso. **Compartilhar…** e o link de leitura fazem o mesmo. Uma pasta servida que **já tem** mesa senta sozinha assim que você a abre, ou assim que liga o servidor com ela aberta. A mesa pode ficar em qualquer subpasta, e cada jogadora vê só a pasta da mesa dela.

No cartão da mesa, **Copiar link da mesa** copia o endereço dela para mandar às jogadoras que já têm conta: o do link da internet, se estiver ligado; senão o da sua rede, e o Verso avisa que esse só abre na sua rede.

**Parar de servir** fica na página da pasta e no menu do fundo da árvore. Antes, o Verso diz quantas jogadoras perdem o acesso até você servir de novo. **A mesa, o chat e as rolagens ficam guardados**: servindo a pasta outra vez, a mesma mesa volta, com as mesmas pessoas. Se o servidor **parar**, ou você parar de servir a pasta em que a janela está sentada, a janela volta sozinha para a pasta do computador e avisa. Na próxima vez, o Verso abre a pasta do computador, nunca a mesa.

### Levar a mesa para o outro servidor

Uma pasta servida daqui que também sincroniza com um UniVerso está nos dois lugares, mas **uma mesa mora num servidor só**. No diálogo da mesa, **Mudar de servidor › Mudar esta mesa para: …** a leva para o outro (do computador para o UniVerso, ou o contrário). Antes, o Verso pergunta e diz o que acontece:

- **Lá** a mesa nasce com **todas as notas ocultas e sem jogadores**: convide-os de novo. A janela vai para lá e abre o diálogo da mesa nova.
- **Aqui** a mesa fecha para os jogadores. Quem abrir lê *A mesa mudou de servidor. O mestre levou esta mesa para outro servidor. Peça a ele um convite novo.* O chat, as rolagens e os direitos ficam aqui até você **desfazer** esta mesa.
- **Desfazer a mesa antiga** a torna uma pasta comum aqui e **tira dela os jogadores que ela tinha**: eles perdem o acesso a esta pasta neste servidor. Quem tem um lugar na pasta por fora da mesa continua.

### Compartilhar uma pasta

Na janela da pasta servida, **Compartilhar…** no menu de uma pasta a entrega a uma pessoa que você convidou, com o papel **lê** ou **edita** (nunca **dona**). O clique no app vale como a sua confirmação: nenhuma senha é pedida. O compartilhamento fica de uma sessão para a outra, e você o revoga no mesmo diálogo. Vale também numa pasta servida só em parte: as subpastas escolhidas são o que os seus celulares veem, e qualquer subpasta pode ser compartilhada ou virar mesa. Jogadoras e celulares não compartilham nada aqui.

### Links de leitura

Em **Links de leitura**, **Ligar os links de leitura** vem **desligado**. Ligado, você cria um link no menu de uma nota ou pasta **na janela da pasta servida**, e quem o tiver lê, sem conta e sem editar. Desligar **fecha todos os links na hora**; ligar de novo reabre os que você não revogou. Um link abre só o que ele mostra, numa pasta servida inteira ou em parte.

---

## 4. O seu endereço, que não muda

O link rápido muda a cada vez. Se você tem um **domínio** seu, pode ter um endereço fixo, como `mesa.seudominio.com`, e **sem o limite de 12 horas**. Precisa de uma conta na **Cloudflare** com o domínio adicionado a ela (o plano grátis serve). Em **Usar meu endereço**:

1. **Tenha um domínio e adicione-o à Cloudflare** — uma vez, à mão. **Como adicionar um domínio à Cloudflare** leva à página deles.
2. **Entrar na Cloudflare**: o navegador abre, você entra e escolhe o domínio. O Verso espera até 10 minutos. Se o navegador não abrir, o painel mostra a página para abrir à mão.
3. Escreva o **Endereço** (`mesa.seudominio.com`: letras minúsculas, números e hífens, com um ponto) e toque em **Configurar**. O Verso cria o túnel e o registro de DNS; pode levar alguns minutos até abrir em todo lugar.

Depois, marque **Usar meu endereço no link (em vez de um link rápido)** com o link desligado. O mesmo endereço vale em todas as sessões.

- **Remover meu endereço** apaga o túnel na Cloudflare (o registro de DNS pode ficar lá; apague no painel se quiser). Se a Cloudflare não puder ser consultada, **Esquecer só neste computador** limpa daqui, e o túnel continua lá até você apagá-lo.
- Com **Manter ligado ao abrir o app**, o endereço próprio volta ao abrir o app; o link rápido, nunca.

---

## 5. Contas, senhas e outros apps

- **Senha ou passkey:** pela sua **rede**, entra-se com a **senha**. Uma **passkey** só vale pelo link da internet. A passkey feita num **link rápido some com ele**; no **seu endereço**, ela fica.
- **Pessoas convidadas:** a lista mostra quem aceitou um convite — nome, e-mail, as pastas que alcança e quando foi vista por último. Nada é mandado por e-mail, então quem esqueceu a senha pede a você: **Nova senha** cria um link que vale **uma vez, por 24 horas**, e só aparece naquela hora — copie e mande você mesmo; as sessões da pessoa terminam na hora, e a senha antiga vale até ela criar a nova. **Encerrar sessões** desconecta navegador, apps e tokens dela (a senha continua). **Remover** pergunta antes e apaga a conta: a pessoa perde tudo o que alcançava aqui, e os apps e tokens dela param na hora (as notas ficam); dá para convidar de novo depois. Ligue o servidor antes de pedir uma senha nova: o link precisa de um endereço.
- **Apps Verso de outras pessoas:** quem você convidou pode conectar o próprio Verso (**Ajustes › Servidores**) e sincronizar a pasta compartilhada com ele. Use o **endereço do link**: pela rede, o Verso dela não confia no certificado do seu computador e não conecta. A lista mostra cada app com o nome e a pessoa, e **Encerrar** o desconecta. No celular, o **app Verso** (Android, iPhone, iPad) conecta e sincroniza como o do computador, pelo endereço do link; o **navegador** do celular abre a janela, sem guardar uma cópia.
- **Tokens:** quem tem conta pode criar, no navegador, um token pessoal para um programa dela; ele alcança só as pastas daquela conta, e nunca abre nada do dono do computador.
- **Celular ou navegador seu, fora de casa:** com o link ligado, **Parear um celular** mostra o QR do link (com a rede também ligada, um botão troca entre o QR da rede e o do link). No celular, abra o QR — ou a página de entrada do link, **Parear este celular com um código** — e digite o código. Ele só funciona **enquanto o Parear está aberto no computador** (2 minutos, 3 tentativas ao todo); fora disso o link nem tenta o código. No **Foi você?**, o computador diz que o pedido veio **pelo link** e de qual endereço. Um aparelho pareado por um **link rápido** sai junto com aquele link (quando ele fecha, muda ou o servidor para); pelo **seu endereço** ele fica.

---

## 6. Parar

**Parar de servir** (na seção, na barra de status ou no menu do ícone) desliga tudo de uma vez: o link, a rede e a janela sentada. Fechar o app faz o mesmo. Se o computador dormir, a mesa cai: quem joga vê **A mesa está offline**.

---

Se preferir um servidor que fique ligado sozinho, veja a [Verso num Servidor](/wiki/verso-num-servidor/) e a [Instalar o servidor num NAS ou VPS](/wiki/instalar-o-servidor-num-nas-ou-vps/).

Anterior: [Verso no Celular e no Tablet](/wiki/verso-no-celular-e-no-tablet/) · Próxima: [Verso num Servidor](/wiki/verso-num-servidor/) · [Página Inicial](/wiki/bem-vindo-ao-verso/) · Tour do Verso
