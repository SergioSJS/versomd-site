---
title: "Verso num Servidor"
description: "O `verso serve`: instalar, contas por convite, dono, editores e leitores, editar junto e o app desktop conectado."
order: 23
group: server
slug: "verso-num-servidor"
twin: "verso-on-a-server"
source: "demo-vault/23 - Verso num Servidor.md"
updated: ""
---
O **UniVerso** é o Verso sem janela, numa máquina sua — um servidor em casa, um NAS, uma nuvem qualquer. As notas continuam **pastas comuns de arquivos Markdown** no disco dele; você as abre num navegador, no computador, no celular ou no tablet, e várias pessoas podem trabalhar na mesma pasta.

> **Nota: Quem hospeda vê as notas**
>
> O servidor lê os arquivos para buscar e para editar junto: não há criptografia de ponta a ponta. Quem roda a máquina vê o que está nela, como num Notion seu.

---

## Instalar

Um passo a passo para quem nunca montou um servidor, com os comandos para copiar, está em [Instalar o seu UniVerso, Passo a Passo](/wiki/instalar-o-seu-universo-passo-a-passo/). O resumo:

Três jeitos, do mesmo programa (o guia completo está em `docs/reference/server-install.md`):

- **Docker**, para amd64 e arm64;
- **CasaOS e ZimaOS**, por um arquivo compose;
- um pacote **`.deb` ou `.rpm`** com um serviço do systemd, para uma máquina sem Docker.

Duas pastas importam: `VERSO_DATA_DIR`, num disco local, com as contas e os índices; e `VERSO_FOLDERS_DIR`, com as pastas de notas, que pode ficar num NAS. O backup é das duas.

O caminho mais curto: cole o arquivo compose, abra `http://<IP da máquina>:7340` e use o link de configuração do log. **O HTTP simples funciona**, de qualquer aparelho da rede, e serve em casa; numa rede pública a senha e as notas passam abertas. O **HTTPS é opcional, depois**, para liberar o modo offline, as notificações e as passkeys: um proxy reverso, o `tailscale serve` (o caminho mais simples para o celular e o iPad) ou o certificado do próprio servidor. Sem ele, o Verso desliga esses recursos e avisa, com o link "Como ligar o HTTPS".

---

## O primeiro admin e as contas

- O admin vem das variáveis `VERSO_ADMIN_EMAIL` e `VERSO_ADMIN_PASSWORD`, **só na primeira subida**. Sem elas, o log mostra um link de configuração que vale uma hora.
- **Ninguém se cadastra sozinho**: o admin **convida**, com um link de uso único que vale sete dias, e vê quem o usou.
- Cada pasta tem um **dono**, **editores** e **leitores**. O admin não entra numa pasta sem dar acesso a si mesmo — e isso fica no registro que o dono lê.
- Senha esquecida: o admin gera um link de senha nova. Admin perdido: `universo admin reset <e-mail>` na própria máquina.
- Celular perdido: na página da conta, no console, **Encerrar sessões e tokens** desconecta a conta de todo navegador e aparelho na hora e revoga os tokens dela, sem trocar a senha — e fica no registro.
- Tudo isso fica no **console de administração** (o endereço `/admin`, ou Ajustes › Conta › *Administrar este servidor*), que só o admin vê: uma visão geral, as contas, as pastas com a **cota** de cada uma, os convites, o registro e a configuração do servidor.
- **Cota por pasta**: o admin limita o espaço de uma pasta; uma escrita que passaria do limite é recusada, e diminuir a pasta sempre é possível. Perto do limite, a janela avisa.
- Na página de uma pasta, **Últimas mudanças nos arquivos** diz quando, quem e o quê — com o **nome do aparelho** entre parênteses ao lado da conta, quando a mudança veio da sincronização de um aparelho. O registro do servidor também nomeia o aparelho quando recusa uma mudança.
- **Pede atenção**, na mesma página, aponta um nome guardado em **dois arquivos** no disco do servidor (o acento nas duas formas, de antes de um nome ser um arquivo só): só um sincroniza, e a linha diz qual remover ou renomear.

---

## A sua conta

Em **Ajustes › Conta** — o botão da pessoa, ao lado da engrenagem na faixa lateral, ou **Conta** no fim da barra lateral no celular:

- **passkeys** — entrar com a digital, o rosto ou o PIN, sem senha;
- as **sessões** abertas, e um botão para sair de todas as outras — encerrar a sessão de um aparelho o **desconecta na hora**, e a sincronização dele pede para conectar de novo em Ajustes › Servidores;
- **tokens de acesso** para scripts, presos a pastas e a ler ou escrever.

---

## Editar junto

Abra a mesma nota em duas janelas, ou com outra pessoa: o que um digita aparece no outro enquanto digita, com o cursor e o nome — o nome da conta de quem digita, posto pelo servidor: ninguém aparece com o nome de outra pessoa. O servidor grava o arquivo quando as edições assentam, e **nunca grava por cima** de uma mudança feita fora — essa mostra a diferença para vocês escolherem, como o Verso sempre fez.

Não só as notas: **tudo o que você edita na janela** é editado junto, do mesmo jeito.

- **Um board**: o que cada um desenha, move ou escreve aparece no outro enquanto faz, e as mudanças dos dois ficam. Você vê o **ponteiro** e a **seleção** de cada um, com o nome. Se dois mexem na **mesma forma** ao mesmo tempo, fica a versão mais nova, como o Excalidraw decide; uma forma **apagada** continua apagada mesmo que alguém a estivesse arrastando — e o ⌘Z de quem apagou a traz de volta.
- **Um arquivo de texto** (`.txt`, `.json`, `.csv`, o código de uma página) e **uma base** — inclusive os filtros, as ordenações, as colunas e as visões mudados pela própria base: letra por letra, como numa nota.
- **Uma nota no cartão de um board**: editada dentro do cartão, está na mesma sala de quem a abriu numa aba.
- A aba diz quem está lá — *ao vivo, com Ana* —, e um leitor de tela ouve quem entra e quem sai.
- Um canvas salvo por outro programa noutro layout só entra na sala depois do primeiro salvamento aqui, que mostra a diferença antes. Um desenho do plugin Excalidraw continua só para ver; o texto dele é uma nota, editada junto como as outras.

Numa nota, num board ou num arquivo de texto que mudou em disco enquanto você digitava, são três saídas: **Descartar o meu e recarregar**, **Gravar o meu por cima** ou **Guardar os dois** — a versão do disco fica com o nome, e o seu texto vai para uma cópia ao lado, com o nome que a sincronização dá a um conflito.

---

## Do app desktop

Em **Ajustes › Servidores**, escolha o servidor em **Encontrados nesta rede** (o app o acha sozinho quando está na mesma rede) ou escreva o endereço dele, e conecte: o app **copia um código** para a área de transferência e o navegador abre a página do servidor, onde você **cola o código** (ou digita o que o app mostra) para **permitir este computador** — ninguém cola token. A página nunca pega o código de um link: um link que alguém mandou para você, com o código do aparelho dele, não aprova nada até você colar o código do app à sua frente. Depois do código, a página diz **quem pediu** — o nome do aparelho, o endereço e a hora do pedido — e pergunta: *Foi você quem pediu, neste aparelho?* **Aprovar este aparelho** ou **Não fui eu: recusar**. Um endereço e uma hora que não são os seus: recuse. Depois, escolha uma pasta do servidor, e a janela a mostra como se estivesse aqui.

Ali também fica o **nome deste aparelho** — por padrão, o nome do sistema. Dê um nome seu (dois computadores com o mesmo nome de sistema deixam de se confundir): ele vai no nome das cópias de conflito, na lista de sessões do servidor e nas últimas mudanças de cada pasta.

---

**Sem servidor nenhum**: o app do computador também pode servir as pastas que você marcar direto ao celular, na sua rede, sem conta e sem senha — o celular é pareado por um QR e você permite no computador. Veja [Parear o celular com o seu computador](/wiki/verso-no-celular-e-no-tablet/#parear-o-celular-com-o-seu-computador).

## Sincronizar uma pasta deste computador

Abrir uma pasta do servidor numa janela é trabalhar **online**: tudo passa pela rede. **Sincronizar** é o outro jeito: a pasta mora neste computador — abre sem rede, o Obsidian lê, o backup copia — e o servidor guarda os mesmos arquivos para os seus outros aparelhos, o navegador e quem divide a pasta com você.

Com a pasta aberta, o jeito mais curto é **Ajustes › Servidores › Sincronizar ‘sua pasta’**: um clique faz a pasta no servidor, com o nome desta (`Nome (2)` se já houver uma com ele — nunca se junta a outra), e liga a sincronização. Num servidor novo é o único passo, e quem o instalou (o admin) sempre pode. Em **Ajustes › Sincronizar**, escolha o servidor e **uma pasta nova** (com o nome desta) ou uma que você já tem lá. O espaço da pasta aparece antes de qualquer coisa cruzar. Depois:

- uma mudança de um lado vai para o outro — ao salvar, quando o servidor avisa, ao reconectar e a cada cinco minutos; sem rede, ela espera;
- arquivos grandes vão **em pedaços**, e só são gravados quando chegam inteiros;
- **na primeira vez nada é apagado**: o que só um lado tem vai para o outro;
- se os dois lados mudaram o mesmo arquivo, é um **conflito**: a versão do servidor fica com o nome, e a deste computador fica ao lado, como `Nota (conflito, Mac, 2026-10-10 15.34).md`. Em Ajustes › Sincronizar, a lista de conflitos mostra **a diferença**; junte à mão e apague a cópia;
- se os dois lados só **acrescentaram linhas ao fim** de uma nota, não é conflito: as linhas se juntam numa nota só, as do servidor primeiro, e a atividade recente diz *juntado*;
- um nome com acento é **um arquivo só** em todo lugar, mesmo que um sistema guarde o `é` inteiro e outro como `e` mais o acento (como os Macs antigos gravavam): cada computador fica com a grafia que o seu sistema deu ao nome, e o mesmo arquivo mudado dos dois lados é um conflito;
- se a sincronização fosse apagar **muitos arquivos** de uma vez — mais de um quinto da pasta, ou mais de 50, e ao menos 3 —, ela **para e pergunta**: uma pasta movida ou um disco que não montou parecem exclusões;
- o que fica de fora (a cota do servidor, um arquivo que não está no computador) aparece com o motivo, e **Atividade recente** lista o que foi e veio — o que veio do servidor diz por quem e em qual aparelho, como "por Ana em MacBook de Ana".

A barra de status mostra o estado — *Sincronizada*, *enviando 3*, *Sem conexão*, *Servidor fora de alcance*, *Pausada*, *1 conflito* — e um clique nela abre a seção. Com o servidor fora do ar, a seção diz qual servidor não respondeu, e *Sincronizar agora* tenta de novo; *Sincronizar esta pasta* e a lista de pastas em Ajustes › Servidores dizem o mesmo ali mesmo, com **Tentar de novo**. Quem só **lê** a pasta no servidor recebe as mudanças; as feitas aqui ficam aqui. Desligar deixa os dois lados como estão.

Arquivos que o iCloud ou o OneDrive deixaram só na nuvem aparecem em **Configurações › Sincronizar** como *arquivos que ainda não estão neste computador*, com o botão **Baixar N arquivos (X MB)**: ele diz o tamanho antes, recusa começar se o disco não comporta (ou se não dá para saber o espaço livre), baixa um de cada vez com o progresso e um **Parar**, e os que descem sincronizam na passada seguinte. Um arquivo que já sincronizou e voltou para a nuvem não pede nada: a linha discreta *estão só na nuvem; o servidor tem a cópia* o conta, e ele nunca é apagado no servidor.

### Editar junto numa pasta sincronizada

Enquanto a sincronização está conectada, uma nota aberta aqui **entra na mesma sala** de quem a abriu no navegador ou noutro aparelho: vocês editam juntos, ao vivo, com o cursor e o nome de cada um. O servidor grava a nota quando as edições assentam, e a sincronização traz o arquivo para este computador — nenhuma cópia de conflito do seu próprio texto.

- Ao lado do título, e na barra de status, a nota diz o estado em palavras: *ao vivo, com Ana e Bia*, *ao vivo, só você*, *pondo em dia…* enquanto o que você mudou sem rede é enviado antes de entrar.
- **A rede caiu?** A nota fica *local — sem conexão*: o seu texto continua na tela e é salvo neste computador. Quando a rede volta, a nota volta para a sala e o que você digitou se junta, letra por letra, ao que os outros digitaram. Se a sala já é outra (passou muito tempo, o servidor reiniciou), a sincronização compara como sempre — e, se os dois lados mudaram, a sua versão fica numa cópia ao lado. Nada se perde.
- **Pausar** a sincronização deixa a nota *local — sincronização pausada* até você retomar.
- Quem só **lê** a pasta aparece na nota, com o nome, e não digita.
- Uma mudança feita **fora do Verso** (o Obsidian, um script) na nota aberta cruza como qualquer outra: entra na sala, ou fica numa cópia se a sala já tinha salvo outra coisa.
- Não quer editar junto nesta pasta? Em **Ajustes › Sincronizar**, desligue **Editar notas junto enquanto online**: as notas voltam a ser editadas só aqui e cruzam ao salvar. É um ajuste seu, deste computador — não vai para a pasta. Com ele desligado, a nota e o board dizem **Edição ao vivo desligada nesta pasta**, num botão que abre este ajuste.

Boards, arquivos de texto e bases abertos aqui também ficam ao vivo, do mesmo jeito; os anexos cruzam como arquivos.

---

## Compartilhar com outra pessoa

Cada pessoa tem o seu vault no mesmo UniVerso. Para dividir **uma pasta** do seu com outra pessoa, clique com o botão direito na pasta, na árvore, e escolha **Compartilhar…**: escreva o e-mail da conta dela neste servidor e o papel — **lê** ou **edita**. Para dividir **o vault todo**, o mesmo diálogo no menu da raiz da árvore, **Compartilhar a pasta toda…**. Só a dona da pasta compartilha; quem recebe não repassa.

A pasta compartilhada ganha uma marquinha de pessoa na árvore. No diálogo, mude o papel de alguém ou tire o acesso — o diálogo pergunta antes, e as janelas abertas dessa pessoa fecham a pasta na hora. O que ela já tinha sincronizado continua no computador dela, e a sincronização desse compartilhamento é **desligada**: a barra de status e Ajustes › Sincronizar dizem que quem compartilhou revogou o acesso, e quando.

Se as notas da pasta mostram imagens guardadas **fora** dela — a pasta de anexos na raiz do vault, como o Obsidian faz —, o diálogo avisa e oferece **incluir a pasta de anexos, só leitura**.

Quem recebe vê a pasta como uma pasta **sua**, com o nome dela e o da dona — *Campanha (Sérgio)* — em **Compartilhados comigo**: no botão da pasta, no topo da barra lateral (que agrupa **Neste computador**, **Meus** e **Compartilhados comigo**), em Ajustes › Servidores e na conta no navegador. Ela abre numa janela própria e, no app desktop, sincroniza com uma pasta deste computador só dela — nunca dentro do seu vault. Nada de fora da pasta compartilhada chega a ela: um link para uma nota de fora aparece como **não está no que foi compartilhado com você**, sem criar nota. Se quem recebe **renomeia ou move** uma nota da pasta, os links da dona para ela nas notas de **fora** do compartilhamento também mudam — o servidor os reescreve, como o Notion, sem que quem recebe veja essas notas; uma nota da dona aberta naquela hora fica como estava. E os números que quem recebe vê — as notas na barra de status, as contas e somas de uma base — contam só o que foi compartilhado.

Este vault de demonstração não tem duas contas: para ver o outro lado, use dois navegadores num UniVerso.

Quem só **lê** uma nota não recebe os blocos `[!secret]` dela: o segredo do mestre fica na nota para quem a edita (veja [o segredo do mestre](/wiki/dados-e-tabelas-sorteadas/#o-segredo-do-mestre)).

## Um link de leitura, sem conta

Para que jogadores, ou qualquer pessoa, **leiam** o mundo sem fazer uma conta, a dona da pasta faz um **link de leitura**: clique com o botão direito na pasta e escolha **Link de leitura…**, ou numa nota e escolha **Copiar link de leitura…**. Escolha a validade (sem validade, 1, 7 ou 30 dias, ou até uma data) e, se quiser, uma **senha**. O endereço (`/r/…`) aparece **uma vez**, já copiado: o servidor guarda só uma marca dele. Quem o abrir lê, num navegador, só o que o link aponta — a pasta, ou a nota e o que ela incorpora —, na visão do leitor: **sem** os blocos `[!secret]`, sem editar, sem histórico, e um link para uma nota que não foi compartilhada aparece como texto simples *(não compartilhado)*. Os dados rolam no navegador de quem lê e não escrevem nada.

Antes de o link ser feito, o diálogo diz quantas notas têm segredos e que quem lê não as verá. A árvore marca o que tem um link ativo, e o painel lista os links com quem fez cada um e quando foi aberto pela última vez. **Revogar** acaba o link na hora, até nas páginas que já estavam abertas. Os links de leitura **começam desligados**: quem administra liga em *Administração › Servidor*, e desligar encerra todos. Uma senha errada conta como um login recusado, e a dona é avisada por e-mail quando são muitas.

---

Para o celular e o tablet, veja [Verso no Celular e no Tablet](/wiki/verso-no-celular-e-no-tablet/); para rolar dados e sortear numa tabela, [Dados e Tabelas Sorteadas](/wiki/dados-e-tabelas-sorteadas/). Volte para a [Página Inicial](/wiki/bem-vindo-ao-verso/) ou abra o Tour do Verso.
