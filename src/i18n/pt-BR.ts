import type { Copy } from "./types";

// pt-BR first (ADR 0035 of the product: the product speaks pt-BR and EN).
// Every number here is in the product's docs/reference/server-install.md,
// section 14; every claim in its CHANGELOG.md or an accepted ADR.

export const ptBR: Copy = {
  lang: "pt-BR",
  htmlLang: "pt-BR",
  ogLocale: "pt_BR",
  meta: {
    title: "Verso — notas em Markdown, servidor seu",
    description:
      "App de notas em Markdown que abre qualquer pasta, compatível com o Obsidian. Com o UniVerso, um servidor que você mesmo roda, a pasta sincroniza entre computadores, abre no navegador e no celular e é partilhada com quem você escolher.",
  },
  skip: "Pular para o conteúdo",
  nav: {
    label: "Páginas",
    home: "Início",
    features: "Recursos",
    server: "UniVerso",
    compare: "Comparativo",
    wiki: "Wiki",
    waitlist: "Lista de espera",
  },
  toTop: "Voltar ao topo",
  switchTo: { label: "Read in English", name: "English", href: "/en/", hreflang: "en" },
  hero: {
    iconAlt: "Ícone do Verso: um livro aberto com uma fita",
    eyebrow: "Notas em Markdown · local-first · servidor próprio",
    title: "Suas notas são arquivos. O servidor é seu.",
    ledeHtml:
      "O Verso é um app de notas que abre qualquer pasta de arquivos Markdown — um vault do Obsidian também — e nunca reescreve um arquivo ao abri-lo. Com o <strong>UniVerso</strong>, o servidor do Verso que você mesmo instala, a mesma pasta fica em dia entre seus computadores, abre no navegador e no celular, e pode ser partilhada com outras pessoas.",
    propsLabel: "Em resumo",
    props: [
      { key: "estado", valueHtml: "em teste; ainda sem download público" },
      { key: "roda em", valueHtml: "macOS, Windows e Linux; no navegador e no celular, por um UniVerso" },
      { key: "servidor", valueHtml: "UniVerso, numa máquina sua: um mini PC, um NAS, a menor VPS" },
      { key: "licença", valueHtml: "MPL-2.0" },
      { key: "custa", valueHtml: "nada além da máquina onde ele roda" },
    ],
    cta: "Entrar na lista de espera",
    ctaSecondary: "Ler o que ainda não faz",
    figure: {
      stem: "janela-no-navegador",
      kind: "still",
      width: 1280,
      height: 820,
      alt: "A janela do Verso aberta num navegador. À esquerda, a árvore de arquivos de uma pasta chamada Exemplo, com subpastas Diário, Personagens, Projetos e Templates. À direita, a nota “Bem-vindo ao Verso”, com propriedades (título, data, tags, status, autor) e dois callouts.",
      captionHtml:
        "A janela do Verso no navegador, servida por um UniVerso: a pasta de exemplo que acompanha o app, com propriedades e callouts como no Obsidian.",
    },
  },
  who: {
    title: "Para quem é",
    items: [
      {
        kicker: ".md",
        title: "Os arquivos são a verdade",
        text: "Para quem já guarda notas em Markdown — no Obsidian ou numa pasta qualquer — e quer as mesmas notas no computador, no navegador e no celular sem um serviço de terceiros no meio.",
      },
      {
        kicker: "UniVerso",
        title: "O servidor é seu",
        text: "Para uma casa, um time pequeno ou uma mesa de RPG — com a Mesa de rolagens e conversa, dados, oráculos e fichas — que quer partilhar pastas num servidor que alguém de confiança roda.",
      },
      {
        kicker: "MCP",
        title: "Um agente lê as notas",
        text: "Para quem quer que um agente de IA leia as notas: o Verso traz um servidor MCP que busca e lê a pasta, sem depender de um provedor de modelo.",
      },
    ],
  },
  more: {
    title: "Continue lendo",
    items: [
      {
        page: "features",
        title: "Recursos",
        text: "O que o Verso faz — escrever, ligar notas, boards, bases e as ferramentas de RPG — com telas do app, e o roteiro até a V1.",
        link: "Ver os recursos e o roteiro",
      },
      {
        page: "server",
        title: "UniVerso",
        text: "O servidor que você mesmo roda: sincronizar, partilhar, editar junto, e os números medidos numa VPS de 1 GB.",
        link: "Conhecer o UniVerso",
      },
      {
        page: "compare",
        title: "Comparativo",
        text: "O Verso ao lado de treze ferramentas de notas e de RPG, com o que cada uma faz e o que não faz.",
        link: "Abrir o comparativo",
      },
    ],
  },
  how: {
    files: {
      title: "Os arquivos são a verdade",
      paragraphsHtml: [
        "Cada nota é um arquivo <code>.md</code> numa pasta comum do seu disco. O Verso abre a pasta como um editor de código abre: sem importar nada e sem um banco de dados no lugar dos arquivos. O índice de busca é um cache; apagá-lo não perde nada.",
        "Abrir um arquivo nunca o reescreve — nem o frontmatter, nem as quebras de linha, nem os espaços. Converter algo é uma ação sua, com a diferença à vista. Toda gravação é atômica e confere antes se o arquivo mudou no disco desde que foi lido; se mudou, o Verso mostra a diferença em vez de gravar por cima.",
      ],
    },
    server: {
      items: [
        {
          term: "Sincronizar",
          textHtml:
            "Uma pasta deste computador fica em dia com uma pasta do UniVerso. A mudança cruza ao salvar. Um arquivo mudado dos dois lados vira uma cópia ao lado, nunca uma perda; a primeira sincronização não apaga nada.",
        },
        {
          term: "Partilhar e dar acesso",
          textHtml:
            "O dono dá a outra conta do mesmo UniVerso acesso a uma pasta, a uma nota, a um board ou a um arquivo. A janela Acesso tem três escolhas — não vê, vê, edita —, diz de onde vem cada uma, e o dono pode tirar depois.",
        },
        {
          term: "Editar junto",
          textHtml:
            "Uma nota ou um board aberto por duas pessoas recebe as edições da outra na hora, com o cursor e o nome de cada uma. Quem entra aparece como um avatar discreto, sem janelinhas pulando na tela.",
        },
        {
          term: "A Mesa",
          textHtml:
            "Uma pasta vira uma campanha, com um registro de conversa e rolagens que todo mundo da mesa vê. Quem rola é o servidor, com o nome de quem rolou; há rolagem secreta (só o mestre vê o resultado) e imagens no chat.",
        },
        {
          term: "Convidar jogadores",
          textHtml:
            "O mestre convida cada jogador por um link de uso único, que entra só naquela campanha. As notas começam escondidas: ele libera para a mesa toda ou só para alguns jogadores, e esconde de novo quando quiser.",
        },
        {
          term: "Um só modelo de acesso",
          textHtml:
            "Quatro direitos por jogador — Imagens, Arquivos, Criar notas e Criar boards — todos desligados para quem acabou de entrar. Uma imagem que o jogador cola numa nota fica numa pasta <code>assets</code> ao lado dela, com o mesmo acesso da nota.",
        },
        {
          term: "Link de leitura",
          textHtml:
            "Uma pasta ou uma nota pode ser lida no navegador por quem tem o endereço, sem conta. O link pode expirar, pedir uma senha e ser revogado na hora; os blocos secretos nunca chegam ao leitor. Vem desligado: quem administra liga.",
        },
        {
          term: "Histórico de versões",
          textHtml:
            "De cada nota ficam quem mudou, quando e a diferença; uma versão antiga volta com um clique.",
        },
        {
          term: "Lixeira",
          textHtml:
            "O que é apagado fica 30 dias por padrão, com quem apagou e quando, e volta para o lugar com “Restaurar”.",
        },
        {
          term: "Avisos",
          textHtml:
            "O que muda sem você pedir cai numa central de avisos, e também nas notificações do sistema, se você quiser. Cada tipo de aviso se liga ou desliga.",
        },
        {
          term: "Navegador e celular",
          textHtml:
            "O UniVerso serve a mesma janela do app; no celular e no tablet ela se instala na tela inicial. Em pastas que você escolhe, e com HTTPS, o celular também abre e edita sem rede, e envia o que mudou quando a rede volta.",
        },
        {
          term: "Sem alugar servidor",
          textHtml:
            "O app do computador também pode servir pastas na rede de casa: o celular se liga lendo um QR code, e você aprova no computador. Serve para uma noite de jogo em casa; para ficar no ar sempre, instale o UniVerso numa máquina sua.",
        },
        {
          term: "Console",
          textHtml:
            "Quem administra vê contas, pastas, convites, cotas e o registro de auditoria em <code>/admin</code>.",
        },
      ],
    },
    stepLabel: "Passo",
    steps: [
      {
        title: "Ligue uma pasta ao UniVerso",
        textHtml:
          "Em Ajustes › Sincronizar, uma pasta deste computador passa a ficar em dia com uma pasta do UniVerso. A mudança cruza ao salvar, e a primeira sincronização não apaga nada.",
        figure: {
          stem: "sincronizar-tudo-em-dia",
          kind: "still",
          width: 990,
          height: 660,
          alt: "O painel Sincronizar dos ajustes do Verso, com o título “All up to date.” (tudo em dia), a linha “Verso Demo em notes.example.org · a pasta é sua · última vez há 2 min”, os botões Sync now, Pause e Turn off, a opção de editar notas junto e a seção Waiting for you, vazia.",
          captionHtml: "Ajustes › Sincronizar quando não há nada esperando por você.",
        },
      },
      {
        title: "Abra no navegador e no celular",
        textHtml:
          "O UniVerso serve a mesma janela do app; no celular e no tablet ela se instala na tela inicial. Cada pasta aparece com o seu papel nela: dona, edita ou só lê.",
        figure: {
          stem: "celular-servidores",
          kind: "still",
          width: 390,
          height: 844,
          alt: "O seletor de pastas do Verso num celular, ligado a um UniVerso: Gray Harbor e Notebook como dono, Rules só para ler (de Bruno) e Sketches para editar (de Cris).",
          captionHtml: "No celular: as pastas de um UniVerso, com o papel de cada pessoa — dono, edita, só lê.",
        },
      },
      {
        title: "Administre pelo console",
        textHtml:
          "Ninguém se cadastra sozinho: quem administra convida. Em <code>/admin</code> ficam as contas, as pastas, os convites, as cotas e o registro de auditoria.",
        figure: {
          stem: "console-accounts",
          kind: "shot",
          width: 1280,
          height: 800,
          alt: "O console de administração do UniVerso, na página Contas: cinco contas (Admin, Ana, Bruno, Cris e Dora), com e-mail, pastas, espaço usado, último acesso e data de criação. Ao lado, o menu Visão geral, Contas, Pastas, Convites, Registro e Servidor.",
          captionHtml: "O console de quem administra, na página Contas.",
        },
      },
    ],
    vps: {
      title: "Uma VPS de 1 GB dá conta",
      introHtml:
        "Medimos numa máquina virtual do tamanho da menor VPS: 1 núcleo, 1 GB de memória, disco virtual de 10 GB, Ubuntu sem interface gráfica e o UniVerso instalado do <code>.deb</code>. Quatro computadores — dois Macs, um Windows e um Linux — sincronizaram com ela uma pasta de 133 arquivos e 62 MB. Em 30 de outubro de 2026 repetimos com muito mais carga: de 10 a 116 aparelhos ao mesmo tempo, além de cinco pessoas digitando juntas por dez minutos.",
      stats: [
        { value: "0", label: "problemas de integridade, com 10 a 116 aparelhos ao mesmo tempo" },
        { value: "~25", label: "pessoas ativas com conforto: cada gravação leva cerca de 2 s" },
        { value: "~360 MB", label: "de memória sob carga, estável, sem vazamento" },
        { value: "5 s", label: "no máximo, enquanto se digita, até a nota ser gravada no disco" },
      ],
      allNumbers: "Todos os números",
      tableCaption: "O que a máquina de 1 núcleo e 1 GB mostrou",
      head: ["Situação", "Medido"],
      rows: [
        ["Programa recém-iniciado", "cerca de 18 MB de memória"],
        ["20 minutos com quatro computadores editando", "CPU abaixo de 2 %; as cinco cópias iguais byte a byte em toda conferência"],
        ["Primeira sincronização dos 62 MB para os quatro ao mesmo tempo", "69 s"],
        ["Um aparelho gravando sozinho", "cerca de 100 ms por gravação — o tempo do disco"],
        ["10 aparelhos ao mesmo tempo", "gravar leva cerca de 0,7 s; ler, 55 ms"],
        ["25 aparelhos ao mesmo tempo", "gravar leva cerca de 2,2 s; ler, 70 ms"],
        ["50 aparelhos ao mesmo tempo", "gravar leva cerca de 5 s; ler, 60 ms"],
        ["100 aparelhos ao mesmo tempo", "gravar leva cerca de 18 s; ler, 70 ms — funciona, mas devagar"],
        ["Uma rodada de 32 minutos, com rajadas e arquivos de 40 MB (10 a 116 aparelhos)", "nenhum problema de integridade, conferido byte a byte"],
        ["Cinco pessoas digitando por 10 minutos, um leitor e 25 aparelhos de carga", "514 trechos, nenhum perdido nem repetido; memória no máximo 273 MB"],
        ["Numa máquina com 453 MiB de memória", "dez aparelhos baixando uma pasta de 181 MB ao mesmo tempo: pico de 44 MB"],
      ],
      afterHtml: [
        "O mínimo que indicamos: 1 núcleo e 512 MB, para uma família ou um time pequeno. Com 1 GB, até umas 25 pessoas ativas ao mesmo tempo ficam confortáveis; acima disso o servidor continua certo, mas cada gravação espera mais — o limite é o núcleo e o disco, não a memória. A máquina estava na rede local, não num provedor; Raspberry Pi e NAS ainda não foram medidos.",
        "Os números completos estão no guia de instalação do servidor, que sai junto com o código.",
      ],
    },
  },
  motion: {
    title: "Funcionando",
    intro:
      "Gravado no laboratório de testes do Verso — por isso as pastas cheias de notas numeradas e de cópias de conflito.",
    tabsLabel: "Gravações",
    tabs: ["Ao vivo no navegador", "Conflitos", "Guardar os dois", "Console"],
    play: "Reproduzir a gravação",
    figures: [
      {
        stem: "universo-nota-chega-ao-vivo",
        kind: "gif",
        webp: true,
        width: 1080,
        height: 1026,
        alt: "A nota “Compras” aberta no navegador, no tema escuro, com uma lista. Uma nova linha, escrita em outro computador, aparece no fim: “escrito no Mac B às 22:02:52, visto no navegador em segundos”.",
        captionHtml: "Uma linha escrita num Mac aparece no navegador em segundos.",
      },
      {
        stem: "verso-sincronizar-conflitos",
        kind: "gif",
        width: 1180,
        height: 760,
        alt: "O painel Sincronizar com o título “128 coisas esperam por você”. Cada item é uma nota que mudou em dois lugares, com os botões Comparar, Abrir as duas, Ficar com esta e Descartar cópia; ao comparar, aparecem as linhas que só estão de um lado, marcadas com menos e mais.",
        captionHtml:
          "O que mudou dos dois lados vira uma cópia, e o Verso mostra a diferença para você escolher.",
      },
      {
        stem: "verso-guardar-os-dois",
        kind: "gif",
        width: 1180,
        height: 760,
        alt: "O editor do Verso com uma nota que mudou no disco enquanto alguém digitava. Um aviso diz que nada foi gravado e mostra a diferença entre o disco e o texto digitado, com três escolhas: Descartar o meu e recarregar, Gravar o meu por cima, Guardar os dois.",
        captionHtml:
          "A nota mudou no disco enquanto você digitava: nada é gravado por cima. Você escolhe — descartar o seu, gravar o seu por cima ou guardar os dois.",
      },
      {
        stem: "universo-console-admin",
        kind: "gif",
        webp: true,
        width: 1080,
        height: 1026,
        alt: "O console de administração do UniVerso, no tema escuro, passando pelas páginas Visão geral, Contas, Pastas e Registro; o registro lista quem deu acesso a quem, em que pasta e quando.",
        captionHtml: "O console de quem administra: visão geral, contas, pastas e o registro de auditoria.",
      },
    ],
  },
  notYet: {
    title: "O que ainda não faz",
    intro: "Melhor saber antes.",
    items: [
      {
        lead: "Não tem download público.",
        textHtml:
          "O repositório do Verso ainda é privado. Quando abrir, os instaladores para macOS, Windows e Linux e os pacotes do UniVerso aparecem nesta página.",
      },
      {
        lead: "No celular, o offline pede HTTPS.",
        textHtml:
          "As pastas que você escolher ficam guardadas no celular e você escreve sem conexão, mas só num UniVerso servido por HTTPS. Sem HTTPS, ou num navegador comum, você trabalha direto na pasta do servidor e, sem conexão, não edita.",
      },
      {
        lead: "Não tem plugins.",
        textHtml:
          "Nem os do Obsidian, nem plugins próprios. Um sistema de plugins está planejado; os plugins do Obsidian não rodam no Verso.",
      },
      {
        lead: "Quem não tem conta só lê.",
        textHtml:
          "Um link de leitura abre uma pasta ou uma nota para qualquer pessoa, sem conta, mas só para ler. Para editar junto, a pessoa precisa de uma conta do mesmo UniVerso.",
      },
      {
        lead: "Não tem criptografia de ponta a ponta.",
        textHtml:
          "Editar junto e buscar no servidor exigem que o servidor leia os arquivos: quem hospeda vê as notas. A criptografia em repouso é a do disco do servidor. Uma criptografia de ponta a ponta opcional fica para depois da V1.",
      },
      {
        lead: "Dropbox, OneDrive e Google Drive ainda não.",
        textHtml: "O app do computador já sincroniza uma pasta com um UniVerso, com um WebDAV (como o Nextcloud) ou com um bucket S3. Dropbox, OneDrive e Google Drive estão planejados para a V1 (<a href=\"/recursos/#roteiro\">roteiro</a>).",
      },
      {
        lead: "Os apps ainda avisam na instalação.",
        textHtml: "O app do Mac não é notarizado pela Apple: na primeira vez, ele abre pelo “Abrir mesmo assim” dos Ajustes do Sistema. O do Windows ainda não é assinado, e o SmartScreen avisa; a assinatura está planejada para a V1.",
      },
    ],
  },
  // Generated from one table for both languages (the comparison of 2026-10-13);
  // every claim and its source in verso-competitive/validacao.md. Never a price.
  compare: {
    title: "Comparativo",
    introHtml: [
      "A tabela põe o Verso ao lado das ferramentas que quem guarda notas e quem mestra RPG costuma usar, com o que cada uma faz e o que não faz.",
      "<strong>Onde o Verso está à frente:</strong> as notas são arquivos Markdown seus, que o Obsidian também abre; o servidor é seu; várias pessoas editam a mesma nota, o mesmo board e a mesma base ao vivo; e não há plano pago. O Obsidian guarda arquivos, mas não edita ao vivo sem plugin de terceiros; o Notion e o LegendKeeper editam ao vivo, mas guardam as notas no serviço deles.",
      "<strong>Onde está atrás:</strong> o Verso ainda está em teste e sem download público. Não tem camadas nos mapas, linhas do tempo, árvores genealógicas nem pacotes de regras prontos; não tem plugins; no celular, é pelo navegador, sem app de loja, e o offline pede HTTPS. Para um mundo pronto para usar hoje, World Anvil, Kanka e LegendKeeper vão mais longe; para jogar numa mesa virtual, o Foundry VTT. E o Chronicler, que como o Verso guarda Markdown no disco, já tem infoboxes, modelos de página e mapas com pinos e camadas (no Pro, em alfa) — mas é de uma pessoa só, sem servidor nem celular.",
    ],
    pains: {
      title: "Três problemas comuns, e o que o Verso faz com eles",
      items: [
        { lead: "O dilema do mestre.", textHtml: "O Verso partilha por pasta e por nota: a pasta dos jogadores com leitura, a sua só sua, no mesmo vault, sem duplicar notas. E um segredo dentro de uma nota — um parágrafo que só o mestre vê — nunca chega a quem só lê. World Anvil, Kanka, LegendKeeper e Foundry VTT também têm segredos." },
        { lead: "Preso a um serviço.", textHtml: "As notas são arquivos <code>.md</code> numa pasta sua, e o servidor é uma máquina sua. Sair do Verso é fechar o app: a pasta continua abrindo no Obsidian ou em qualquer editor." },
        { lead: "Sincronizar entre aparelhos.", textHtml: "Com um UniVerso, a pasta fica em dia entre Mac, Windows e Linux e abre no navegador e no celular, sem assinatura de sincronização. Mas alguém precisa manter o servidor ligado, e no celular o offline pede HTTPS." },
      ],
    },
    tableCaption: "O Verso e outras ferramentas de notas e de RPG, capacidade por capacidade",
    scrollHint: "A tabela rola para o lado; a coluna das capacidades e a do Verso ficam paradas.",
    marks: {
      yes: { symbol: "✓", word: "sim" },
      partial: { symbol: "parcial", word: "parcial" },
      no: { symbol: "✗", word: "não" },
      info: { symbol: "", word: "" },
    },
    capability: "Capacidade",
    groups: [{ id: "notes", label: "Notas e escrita", span: 5 }, { id: "rpg", label: "Mundos e RPG", span: 8 }],
    tools: [
      { id: "verso", name: "Verso", note: "em teste; sem download público" },
      { id: "obsidian", name: "Obsidian", href: "https://obsidian.md/", note: "notas em Markdown" },
      { id: "logseq", name: "Logseq", href: "https://logseq.com/", note: "outliner; versão nova em beta" },
      { id: "notion", name: "Notion", href: "https://www.notion.com/", note: "espaço de trabalho na nuvem" },
      { id: "bookstack", name: "BookStack", href: "https://www.bookstackapp.com/", note: "wiki auto-hospedada" },
      { id: "scrivener", name: "Scrivener", href: "https://www.literatureandlatte.com/scrivener/overview", note: "escrita longa" },
      { id: "chronicler", name: "Chronicler", href: "https://chronicler.pro/", note: "wiki de mundos local, em alfa" },
      { id: "world-anvil", name: "World Anvil", href: "https://www.worldanvil.com/", note: "worldbuilding na nuvem" },
      { id: "kanka", name: "Kanka", href: "https://kanka.io/", note: "campanhas na nuvem" },
      { id: "legendkeeper", name: "LegendKeeper", href: "https://www.legendkeeper.com/", note: "worldbuilding com mapas" },
      { id: "campfire", name: "Campfire", href: "https://www.campfirewriting.com/", note: "escrita e mundos" },
      { id: "fantasia-archive", name: "Fantasia Archive", href: "https://fantasiaarchive.com/", note: "worldbuilding local" },
      { id: "foundry-vtt", name: "Foundry VTT", href: "https://foundryvtt.com/", note: "mesa virtual" },
      { id: "pum-companion", name: "PUM Companion", href: "https://jeansenvaars.itch.io/pum-companion", note: "jogo solo com oráculos" },
    ],
    rowGroups: [
      { id: "data", label: "Arquivos e dados" },
      { id: "collab", label: "Colaboração e permissões" },
      { id: "rpg", label: "RPG e mundo" },
      { id: "platforms", label: "Plataformas e extensões" },
      { id: "ai", label: "IA" },
      { id: "cost", label: "Licença e custo" },
    ],
    rows: [
      {
        group: "data",
        label: "Arquivos seus no disco",
        cells: [
          { mark: "yes", text: "pastas de .md, .canvas e .base" },
          { mark: "yes", text: "pastas de .md" },
          { mark: "partial", text: "a versão nova guarda em SQLite; a antiga, em .md" },
          { mark: "no", text: "na nuvem deles; exporta Markdown" },
          { mark: "no", text: "no banco do servidor; exporta .md" },
          { mark: "partial", text: "no disco, num pacote próprio (RTF)" },
          { mark: "yes", text: "pastas de .md; abre vaults do Obsidian" },
          { mark: "no", text: "na nuvem deles; exporta PDF, e JSON no plano pago" },
          { mark: "no", text: "na nuvem deles; exporta JSON e Markdown" },
          { mark: "no", text: "na nuvem deles; exporta HTML e JSON" },
          { mark: "no", text: "na nuvem deles; exporta DOCX, PDF e EPUB" },
          { mark: "partial", text: "no computador, no formato do app" },
          { mark: "partial", text: "no seu servidor, no banco do mundo" },
          { mark: "partial", text: "um arquivo de save por jogo, no formato do app; exporta .md" },
        ],
      },
      {
        group: "data",
        label: "Markdown",
        cells: [
          { mark: "yes", text: "nativo, no dialeto do Obsidian" },
          { mark: "yes", text: "nativo" },
          { mark: "partial", text: "nativo na antiga; na nova, só exportação" },
          { mark: "partial", text: "atalhos, importação e exportação" },
          { mark: "partial", text: "editor Markdown opcional" },
          { mark: "partial", text: "só ao exportar" },
          { mark: "yes", text: "nativo, com wikilinks e frontmatter" },
          { mark: "no", text: "BBCode e editor visual" },
          { mark: "partial", text: "só na exportação" },
          { mark: "partial", text: "importa Markdown" },
          { mark: "no", text: "não" },
          { mark: "info", text: "o site não diz" },
          { mark: "partial", text: "páginas em Markdown, guardadas no banco" },
          { mark: "partial", text: "exporta a história em Markdown" },
        ],
      },
      {
        group: "data",
        label: "Visões de banco de dados",
        cells: [
          { mark: "yes", text: "bases: tabela, kanban, lista, calendário" },
          { mark: "yes", text: "Bases: tabela, cartões, lista, kanban" },
          { mark: "yes", text: "na versão nova" },
          { mark: "yes", text: "sim" },
          { mark: "no", text: "não" },
          { mark: "no", text: "não" },
          { mark: "no", text: "planejadas" },
          { mark: "partial", text: "tabelas interativas (plano pago)" },
          { mark: "info", text: "o site não diz" },
          { mark: "info", text: "o site não diz" },
          { mark: "info", text: "o site não diz" },
          { mark: "partial", text: "campos estruturados" },
          { mark: "no", text: "não" },
          { mark: "info", text: "o site não diz" },
        ],
      },
      {
        group: "data",
        label: "Grafo e backlinks",
        cells: [
          { mark: "yes", text: "grafo, backlinks e busca" },
          { mark: "yes", text: "sim" },
          { mark: "yes", text: "sim" },
          { mark: "partial", text: "backlinks, sem grafo" },
          { mark: "partial", text: "referências, sem grafo" },
          { mark: "no", text: "não" },
          { mark: "partial", text: "backlinks; grafo não anunciado" },
          { mark: "partial", text: "árvores e teias de relações (plano pago)" },
          { mark: "partial", text: "menções; explorador de relações pago" },
          { mark: "partial", text: "links automáticos, sem grafo" },
          { mark: "info", text: "o site não diz" },
          { mark: "info", text: "o site não diz" },
          { mark: "partial", text: "links entre documentos, sem grafo" },
          { mark: "info", text: "o site não diz" },
        ],
      },
      {
        group: "collab",
        label: "Servidor próprio",
        cells: [
          { mark: "yes", text: "UniVerso: Docker, .deb, .rpm" },
          { mark: "no", text: "não; Sync e Publish são deles" },
          { mark: "partial", text: "o servidor de sync da versão nova (alfa)" },
          { mark: "no", text: "não" },
          { mark: "yes", text: "PHP e MySQL" },
          { mark: "no", text: "não" },
          { mark: "no", text: "não" },
          { mark: "no", text: "não" },
          { mark: "no", text: "código disponível; hospedar não tem suporte" },
          { mark: "no", text: "não" },
          { mark: "no", text: "não" },
          { mark: "info", text: "app local, sem servidor" },
          { mark: "yes", text: "servidor Node.js ou o próprio app" },
          { mark: "no", text: "não; backup opcional no Google Drive" },
        ],
      },
      {
        group: "collab",
        label: "Edição ao vivo, várias pessoas",
        cells: [
          { mark: "yes", text: "notas, boards, bases e textos, com cursores" },
          { mark: "no", text: "o Sync junta depois; ao vivo, só por plugin de terceiros" },
          { mark: "partial", text: "na versão nova: pago, por convite, alfa" },
          { mark: "yes", text: "sim" },
          { mark: "no", text: "aviso de edição, não ao vivo" },
          { mark: "no", text: "não" },
          { mark: "no", text: "não" },
          { mark: "no", text: "coautores no plano pago, um de cada vez" },
          { mark: "partial", text: "só nos quadros brancos" },
          { mark: "yes", text: "sim, com cursores" },
          { mark: "info", text: "colaboradores editam; ao vivo, não confirmado" },
          { mark: "no", text: "não" },
          { mark: "yes", text: "várias pessoas na mesma página" },
          { mark: "no", text: "não; jogo solo" },
        ],
      },
      {
        group: "collab",
        label: "Partilha com permissões",
        cells: [
          { mark: "yes", text: "por pasta ou subpasta: ler ou escrever" },
          { mark: "partial", text: "o cofre inteiro, pelo Sync (pago)" },
          { mark: "partial", text: "o grafo inteiro" },
          { mark: "yes", text: "por página; regras por linha nas bases" },
          { mark: "yes", text: "por estante, livro, capítulo e página" },
          { mark: "no", text: "não" },
          { mark: "no", text: "não; uso solo" },
          { mark: "yes", text: "mundo, artigo, assinantes (o fino é pago)" },
          { mark: "yes", text: "por entrada, papel e pessoa" },
          { mark: "yes", text: "por projeto e por página" },
          { mark: "yes", text: "ver, comentar ou editar" },
          { mark: "no", text: "não" },
          { mark: "yes", text: "por pessoa, em cada diário e página" },
          { mark: "no", text: "exporta o jogo ou a história em arquivo" },
        ],
      },
      {
        group: "collab",
        label: "Segredo do mestre dentro da nota",
        cells: [
          { mark: "yes", text: "bloco > [!secret]; quem só lê a pasta partilhada não o recebe" },
          { mark: "no", text: "não" },
          { mark: "no", text: "não" },
          { mark: "no", text: "não há permissão por bloco" },
          { mark: "no", text: "só por página" },
          { mark: "no", text: "não" },
          { mark: "partial", text: "spoilers ||…|| escondidos até clicar; estão no arquivo" },
          { mark: "yes", text: "segredos no texto (plano pago)" },
          { mark: "yes", text: "elementos e propriedades privados" },
          { mark: "yes", text: "blocos /secret" },
          { mark: "info", text: "o site não diz" },
          { mark: "no", text: "não" },
          { mark: "yes", text: "blocos Secret, que o mestre revela" },
          { mark: "info", text: "não se aplica: o oráculo faz o papel do mestre" },
        ],
      },
      {
        group: "rpg",
        label: "Modelos de RPG prontos",
        cells: [
          { mark: "partial", text: "modelos de campanha e de mundo, fichas de mais de trinta layouts, oráculos; sem pacotes de regras prontos" },
          { mark: "no", text: "não nativos" },
          { mark: "no", text: "não" },
          { mark: "partial", text: "modelos da comunidade" },
          { mark: "no", text: "modelos de página genéricos" },
          { mark: "no", text: "modelos de escrita" },
          { mark: "yes", text: "modelos, infoboxes e blocos de ficha" },
          { mark: "yes", text: "dezenas de modelos e fichas" },
          { mark: "yes", text: "tipos de RPG e kits de propriedades" },
          { mark: "partial", text: "modelos de página" },
          { mark: "partial", text: "módulos de mundo, não de RPG" },
          { mark: "yes", text: "tipos de documento de mundo" },
          { mark: "yes", text: "pelos sistemas de jogo" },
          { mark: "yes", text: "mais de 50 oráculos, tabelas próprias, dados" },
        ],
      },
      {
        group: "rpg",
        label: "Mapas interativos",
        cells: [
          { mark: "partial", text: "uma imagem num board, com pinos que abrem notas e pinos secretos; sem camadas" },
          { mark: "partial", text: "mapa geográfico nas bases; de mundo, por plugin" },
          { mark: "no", text: "não" },
          { mark: "partial", text: "mapa geográfico nas bases de dados" },
          { mark: "no", text: "não" },
          { mark: "no", text: "não" },
          { mark: "yes", text: "pinos, regiões e camadas (Pro, em alfa)" },
          { mark: "yes", text: "pinos; camadas e segredos no plano pago" },
          { mark: "yes", text: "camadas e pinos com visibilidade" },
          { mark: "yes", text: "pinos ocultáveis, regiões, caminhos" },
          { mark: "yes", text: "pinos, zonas e camadas" },
          { mark: "no", text: "não" },
          { mark: "yes", text: "cenas com notas no mapa" },
          { mark: "no", text: "imagens importadas, sem mapa interativo" },
        ],
      },
      {
        group: "rpg",
        label: "Boards (quadro livre)",
        cells: [
          { mark: "yes", text: "JSON Canvas desenhado com Excalidraw" },
          { mark: "yes", text: "Canvas (JSON Canvas)" },
          { mark: "partial", text: "quadros brancos na versão antiga" },
          { mark: "no", text: "não há quadro livre" },
          { mark: "no", text: "só diagramas draw.io" },
          { mark: "partial", text: "quadro de cartões" },
          { mark: "yes", text: "canvas no formato JSON Canvas" },
          { mark: "yes", text: "quadro branco (plano pago)" },
          { mark: "yes", text: "quadros brancos ao vivo" },
          { mark: "yes", text: "quadros brancos" },
          { mark: "info", text: "o site não diz" },
          { mark: "info", text: "o site não diz" },
          { mark: "partial", text: "desenho sobre as cenas" },
          { mark: "info", text: "o site não diz" },
        ],
      },
      {
        group: "platforms",
        label: "Offline no computador",
        cells: [
          { mark: "yes", text: "a pasta é local" },
          { mark: "yes", text: "sim" },
          { mark: "yes", text: "sim" },
          { mark: "partial", text: "no app, nas páginas marcadas" },
          { mark: "no", text: "só pelo servidor" },
          { mark: "yes", text: "sim" },
          { mark: "yes", text: "sim, sem conta" },
          { mark: "no", text: "só online" },
          { mark: "no", text: "só online" },
          { mark: "partial", text: "o navegador guarda e envia depois" },
          { mark: "yes", text: "app de Mac e Windows com modo offline" },
          { mark: "yes", text: "app local" },
          { mark: "yes", text: "app de computador" },
          { mark: "yes", text: "local e offline" },
        ],
      },
      {
        group: "platforms",
        label: "Plugins",
        cells: [
          { mark: "no", text: "nenhum; os do Obsidian não rodam" },
          { mark: "yes", text: "da comunidade" },
          { mark: "yes", text: "sim" },
          { mark: "partial", text: "integrações e API" },
          { mark: "partial", text: "temas e ganchos" },
          { mark: "no", text: "não" },
          { mark: "info", text: "o site não diz" },
          { mark: "no", text: "não; API no plano pago" },
          { mark: "yes", text: "biblioteca de plugins (plano pago)" },
          { mark: "no", text: "não; API no plano pago" },
          { mark: "no", text: "não" },
          { mark: "no", text: "não" },
          { mark: "yes", text: "módulos e sistemas" },
          { mark: "no", text: "não; extras pagos" },
        ],
      },
      {
        group: "platforms",
        label: "Celular",
        cells: [
          { mark: "partial", text: "no navegador, por um UniVerso; offline nas pastas que você escolher, com HTTPS; sem app de loja" },
          { mark: "yes", text: "apps iOS e Android, offline" },
          { mark: "yes", text: "apps; os da versão nova em teste" },
          { mark: "yes", text: "apps, com offline" },
          { mark: "partial", text: "site responsivo" },
          { mark: "partial", text: "iOS; sem Android" },
          { mark: "no", text: "não; só computador" },
          { mark: "partial", text: "no navegador; sem app" },
          { mark: "partial", text: "no navegador; sem app" },
          { mark: "partial", text: "no navegador; sem app" },
          { mark: "partial", text: "app com menos módulos, online" },
          { mark: "no", text: "não" },
          { mark: "no", text: "não suporta celular" },
          { mark: "yes", text: "apps iOS e Android (compra à parte)" },
        ],
      },
      {
        group: "ai",
        label: "Agentes de IA (MCP)",
        cells: [
          { mark: "yes", text: "servidor MCP local, só leitura" },
          { mark: "partial", text: "CLI oficial; MCP só da comunidade" },
          { mark: "yes", text: "servidor MCP na versão nova" },
          { mark: "yes", text: "MCP oficial, na nuvem deles" },
          { mark: "no", text: "não; há uma API" },
          { mark: "no", text: "não" },
          { mark: "no", text: "não" },
          { mark: "no", text: "nenhum oficial" },
          { mark: "no", text: "nenhum oficial" },
          { mark: "no", text: "não; API nova, paga" },
          { mark: "no", text: "não" },
          { mark: "no", text: "não" },
          { mark: "no", text: "nenhum oficial" },
          { mark: "no", text: "não; assistente de IA pago, opcional" },
        ],
      },
      {
        group: "cost",
        label: "Licença e código",
        cells: [
          { mark: "info", text: "MPL-2.0; o repositório ainda é privado" },
          { mark: "info", text: "proprietária, código fechado" },
          { mark: "info", text: "AGPL-3.0, código aberto" },
          { mark: "info", text: "proprietária" },
          { mark: "info", text: "MIT, código aberto" },
          { mark: "info", text: "proprietária" },
          { mark: "info", text: "PolyForm Shield 1.0.0: código disponível, não é aberto" },
          { mark: "info", text: "proprietária" },
          { mark: "info", text: "código visível com Commons Clause; não é aberto" },
          { mark: "info", text: "proprietária" },
          { mark: "info", text: "proprietária" },
          { mark: "info", text: "GPL-3.0, código aberto" },
          { mark: "info", text: "proprietária" },
          { mark: "info", text: "proprietária; nenhuma licença publicada" },
        ],
      },
      {
        group: "cost",
        label: "Custo",
        cells: [
          { mark: "info", text: "gratuito; você roda o servidor" },
          { mark: "info", text: "gratuito com plano pago (Sync, Publish)" },
          { mark: "info", text: "gratuito com plano pago (sync)" },
          { mark: "info", text: "gratuito com plano pago" },
          { mark: "info", text: "gratuito" },
          { mark: "info", text: "pago, licença única" },
          { mark: "info", text: "gratuito com plano pago (Pro, licença única)" },
          { mark: "info", text: "gratuito com plano pago; no gratuito, o mundo é público" },
          { mark: "info", text: "gratuito com plano pago" },
          { mark: "info", text: "gratuito com plano pago; criar projetos é pago" },
          { mark: "info", text: "gratuito com plano pago (módulos)" },
          { mark: "info", text: "gratuito; a v1 parou em 2025, uma nova está em obra" },
          { mark: "info", text: "pago, licença única do mestre" },
          { mark: "info", text: "pago: pague quanto quiser, acima de um mínimo, por plataforma; o PUM Lite é gratuito" },
        ],
      },
    ],
    controls: {
      label: "Escolha o que comparar",
      presetsLabel: "Atalhos",
      presets: [{ id: "notes", label: "Notas e escrita" }, { id: "rpg", label: "Mundos e RPG" }, { id: "all", label: "Todas" }, { id: "versus", label: "Verso × Obsidian" }],
      toolsLabel: "Ferramentas",
      capsLabel: "Recursos",
      diff: "Só o que muda",
      diffHint: "Esconde as linhas em que todas as ferramentas escolhidas têm a mesma marca (✓, parcial ou ✗).",
      reset: "Mostrar tudo",
      count: "Mostrando {tools} de {toolsTotal} ferramentas e {rows} de {rowsTotal} recursos.",
    },
    legendHtml: "✓ faz · <strong>parcial</strong> faz em parte ou com limites · ✗ não faz · sem marca: só o que a célula diz, ou o que o site do produto não diz. Preço não entra: muda, e cada site diz o seu.",
    verified: "Verificado em outubro de 2026; os outros produtos mudam — veja os sites deles.",
  },
  faq: {
    title: "Perguntas",
    items: [
      {
        q: "Qual é a licença?",
        aHtml: [
          "MPL-2.0, para o núcleo e para o app. Você pode usar, estudar, mudar e redistribuir. Quem distribui uma versão mudada de um arquivo do Verso publica aquele arquivo; rodar o Verso como serviço não obriga a publicar nada.",
        ],
      },
      {
        q: "É compatível com o Obsidian?",
        aHtml: [
          "O Verso estende o dialeto do Obsidian e nunca o contradiz: links <code>[[…]]</code>, embeds, callouts, tags, propriedades no frontmatter e boards <code>.canvas</code> (JSON Canvas) abrem como no Obsidian, e nenhuma extensão do Verso muda o sentido de algo que já existe. A configuração do Verso fica fora da pasta, então o mesmo vault abre nos dois.",
          "O Verso não é um clone do Obsidian e não roda os plugins dele.",
        ],
      },
      {
        q: "E a privacidade?",
        aHtml: [
          "O app não manda telemetria. Ele só vai à rede para endereços que estão nas suas notas ou em que você clica, para ver se há versão nova e para o UniVerso que você configurou.",
          "No UniVerso, as notas ficam no disco de quem hospeda — e quem hospeda pode lê-las (veja acima).",
          "Este site não tem analytics nem cookies. A lista de espera guarda seu e-mail, o idioma da página e a hora, e serve só para avisar quando houver o que baixar.",
        ],
      },
      {
        q: "Quanto custa?",
        aHtml: [
          "Nada. Não há serviço pago nem plano pago; o único dinheiro previsto são doações, e doação não compra recurso. O servidor é a sua máquina: um computador em casa, um NAS ou uma VPS cuja conta você já paga.",
        ],
      },
      {
        q: "Como sei que o site e o download são oficiais?",
        aHtml: [
          "O site do Verso é só este, <span lang=\"en\">versomd.com</span>; o código dele é público em <a href=\"https://github.com/SergioSJS/versomd-site\">github.com/SergioSJS/versomd-site</a>.",
          "Os instaladores e os pacotes do UniVerso saem só nas versões publicadas no GitHub de SergioSJS e são assinados com minisign. A chave pública é <code>RWS1zv2nvs/ng1hA0YspwOg7wGda98zkXjVfx8m9CtT5obRW5zabNHaT</code>. O app confere a assinatura antes de se atualizar, e o <code>universo.sh</code> antes de instalar. Um arquivo assinado com outra chave, ou um site com outro endereço, não é nosso."
        ],
      },
      {
        q: "Quando abre?",
        aHtml: ["Sem data marcada. Deixe o e-mail e avisamos quando houver o que baixar."],
      },
    ],
  },
  pages: {
    features: {
      meta: {
        title: "Recursos e roteiro — Verso",
        description:
          "O que o Verso faz — escrever em Markdown, ligar notas, boards, bases, ferramentas de RPG, sincronizar com um servidor seu — e o que vem até a V1.",
      },
      eyebrow: "Recursos",
      title: "O que o Verso faz, e o que vem depois.",
      ledeHtml:
        "Primeiro o que já está nas versões de teste; logo abaixo, <a href=\"#roteiro\">o roteiro</a> até a V1, a versão do lançamento público.",
      today: {
        title: "O que já faz",
        introHtml:
          "Tudo isto está nas versões de teste: no Mac com chip Apple, no Windows 11 e no Linux (x64), e no navegador e no celular por um UniVerso. O que está pronto mas ainda não saiu numa versão de teste fica no <a href=\"#roteiro\">roteiro</a>.",
        groups: [
          {
            title: "Escrever",
            itemsHtml: [
              "Três modos: leitura, edição e o Markdown cru.",
              "Blocos que você arrasta pela alça e um menu <code>/</code>, como no Notion.",
              "Tabelas editadas como tabelas.",
              "Um painel para as propriedades da nota, e notas tipadas: o tipo dá à nota os campos dela.",
              "A ficha da nota: as propriedades viram um cartão ao lado do texto, com imagem — o personagem, o lugar, o projeto.",
              "Callouts, fórmulas, diagramas Mermaid e blocos de código com botão de copiar.",
              "Páginas da web dentro da nota, rolando com ela.",
            ],
          },
          {
            title: "Ligar as notas",
            itemsHtml: [
              "Links <code>[[…]]</code> para notas, títulos e blocos, e embeds que mostram a nota ou o bloco.",
              "Pare o ponteiro sobre um link e leia a nota sem sair de onde está.",
              "Backlinks, links de saída e os links que ainda não levam a nenhuma nota.",
              "Onde uma nota é citada sem link, um clique faz o link — um por um, ou todos de uma vez, vendo antes o que muda.",
              "Renomear uma nota atualiza todos os links para ela.",
              "Um grafo das notas, que você explora.",
            ],
          },
          {
            title: "Boards",
            itemsHtml: [
              "Arquivos <code>.canvas</code>, o formato do Obsidian, desenhados com o Excalidraw.",
              "As notas da pasta como cartões que você edita ali mesmo; imagens, que dá para recortar, e PDFs.",
              "Setas que ficam no ponto onde foram desenhadas, e os desenhos do plugin Excalidraw do Obsidian.",
              "Mapas: uma imagem por baixo do board, pinos que abrem notas e pinos secretos que os jogadores não veem.",
            ],
          },
          {
            title: "Bases",
            itemsHtml: [
              "Arquivos <code>.base</code> vistos como tabela, cartões, lista, kanban, calendário ou mapa, com filtros (também por expressão regular), ordem, grupos e fórmulas.",
              "Uma base embutida numa nota, ao vivo; o mesmo arquivo que o Obsidian abre.",
            ],
          },
          {
            title: "Organizar",
            itemsHtml: [
              "Uma árvore de arquivos com seleção múltipla, figurinhas, cores e capas.",
              "Páginas de pasta, ordem manual e focos, compartilhados com o make.md.",
              "A nota do dia, com calendário, e as notas da semana, do mês, do trimestre e do ano; modelos oferecidos ao criar uma nota.",
              "Histórico de versões: quem mudou uma nota e quando, a diferença entre versões e uma versão antiga de volta.",
            ],
          },
          {
            title: "Ler e guardar",
            itemsHtml: [
              "Um leitor de PDF com duas páginas lado a lado, imagens e arquivos HTML.",
              "Páginas da web guardadas como notas.",
            ],
          },
          {
            title: "Encontrar",
            itemsHtml: [
              "Busca no texto de todas as notas, abrir pelo nome e uma paleta de comandos.",
              "Localizar e substituir em todas as notas.",
              "Abas fixas e de prévia, painéis divididos, espaços de trabalho e uma pasta por janela.",
            ],
          },
          {
            title: "Para jogar RPG",
            itemsHtml: [
              "Segredos do mestre: um bloco <code>&gt; [!secret]</code> na nota, ou num cartão de texto do board, que quem só pode ler a pasta partilhada nunca recebe.",
              "<code>dice: 1d20</code> rola com um clique, e uma tabela da nota sorteia uma linha; o resultado nunca é gravado na nota.",
            ],
          },
          {
            title: "Com um UniVerso",
            itemsHtml: [
              "A pasta em dia entre seus computadores; a primeira sincronização não apaga nada.",
              "Pastas partilhadas com outras contas, para ler ou para escrever.",
              "Notas, boards e bases editados junto, ao vivo, com o cursor e o nome de cada pessoa.",
              "Uma lixeira de 30 dias, e um console para quem administra.",
              "A mesma janela no navegador e no celular; no celular, as pastas que você escolher ficam guardadas e você escreve sem conexão.",
              "O app do computador também pode servir suas pastas na rede de casa: o celular se liga lendo um QR code, e você aprova no computador.",
              "Avisos no app quando algo muda sem você pedir — a sincronização caiu ou voltou, uma pasta foi partilhada com você —, por tipo, e nas notificações do sistema se você quiser. <a href=\"/universo/\">Mais sobre o UniVerso</a>.",
            ],
          },
          {
            title: "Agentes de IA e terminal",
            itemsHtml: [
              "Um servidor MCP só de leitura, que os Ajustes ligam ao Claude Desktop; cada chamada de um agente fica registrada.",
              "O comando <code>verso</code> indexa, busca e lista backlinks no terminal.",
            ],
          },
          {
            title: "Do seu jeito, sem conta",
            itemsHtml: [
              "Temas, paletas, fontes e atalhos seus; o app em português ou em inglês.",
              "Sem cadastro e sem telemetria: a pasta é sua.",
              "O app se atualiza e só instala uma atualização cuja assinatura confere.",
            ],
          },
        ],
      },
      gallery: {
        title: "Em imagens",
        introHtml:
          "Algumas telas do app, com a interface em inglês e as notas do tutorial em inglês que acompanham o Verso. São do que já está pronto, inclusive o que ainda vai chegar numa próxima versão de teste.",
        figures: [
          { stem: "oracles", kind: "shot", width: 1280, height: 800, alt: "O Oráculo e Improvisação aberto sobre uma nota: a pergunta “o guarda ouviu o barulho?”, chance de 50 por cento e a resposta “Sim, mas…” com o resultado do d100.", captionHtml: "Oráculos: sim ou não com chances ajustáveis, centelhas de ideias e tabelas suas." },
          { stem: "statblock", kind: "shot", width: 1280, height: 800, alt: "A ficha de uma criatura de d20, a Cave Gnawer, com classe de armadura, pontos de vida, atributos com modificadores, traços e ações com dados que se rolam com um clique, seguida de uma ficha de personagem.", captionHtml: "Fichas: um bloco <code>statblock</code> vira um cartão, no layout do seu sistema." },
          { stem: "dice3d", kind: "shot", width: 1280, height: 800, alt: "Dados em 3D parados sobre a página depois de uma rolagem de 4d6 descartando o menor, com o cartão do resultado ao lado do botão.", captionHtml: "Dados em 3D, se você ligar: o resultado já está sorteado, os dados só caem até ele." },
          { stem: "dice-tables", kind: "shot", width: 1280, height: 800, alt: "Uma nota com uma tabela de encontros por d6; o botão de dados sorteou uma linha, “um mercador com a carroça atolada”, e oferece rolar de novo.", captionHtml: "Dados e tabelas aleatórias dentro da nota." },
          { stem: "table", kind: "shot", width: 1280, height: 800, alt: "A Mesa ao lado de uma nota num UniVerso: o registro de conversa e rolagens da campanha, com o mestre e três jogadores, dados e totais, uma rolagem secreta marcada, e o campo para escrever.", captionHtml: "A Mesa: conversa e rolagens que todo mundo da campanha vê. O servidor rola, com o nome de quem rolou." },
          { stem: "access", kind: "shot", width: 1280, height: 1120, alt: "A janela da Mesa de uma pasta de campanha: o interruptor de mesa aberta, o convite por link, a lista de jogadores com quantas notas cada um vê e edita, e os quatro direitos de Bruno — Imagens ligado, Arquivos, Criar notas e Criar boards desligados.", captionHtml: "Os direitos de cada jogador: Imagens, Arquivos, Criar notas e Criar boards, todos desligados para quem acabou de entrar." },
          { stem: "board-map", kind: "shot", width: 1280, height: 800, alt: "Um board aberto sobre o mapa ilustrado de uma costa, com pinos nomeados e um pino secreto, tracejado e com um cadeado, para o arco da campanha.", captionHtml: "Mapas no board: pinos que abrem notas, e pinos secretos que os jogadores não veem." },
          { stem: "secret", kind: "shot", width: 1280, height: 800, alt: "Uma nota com um callout vermelho de segredo, “o que os jogadores não sabem”, marcado como escondido de quem só lê.", captionHtml: "O segredo do mestre, no meio da nota." },
          { stem: "infobox", kind: "shot", width: 1280, height: 800, alt: "A nota de um lugar, Gray Harbor, com um cartão ao lado do texto: uma ilustração, a região, o perigo e os habitantes ligados a outras notas.", captionHtml: "A ficha da nota: as propriedades viram um cartão." },
          { stem: "datagraph", kind: "shot", width: 1280, height: 800, alt: "Um arquivo JSON de personagens e lugares desenhado como caixas ligadas por linhas, com botões para dobrar, desdobrar e ajustar à tela.", captionHtml: "Dados estruturados (JSON, YAML, TOML, XML, CSV) como diagrama." },
          { stem: "theme-builder", kind: "shot", width: 1280, height: 800, alt: "O construtor de temas com um tema próprio em azul-esverdeado e ferrugem: campos de cor à esquerda e, à direita, uma página de exemplo já desenhada com as cores novas.", captionHtml: "Aparência: um construtor de temas com a prévia ao vivo, e um catálogo de temas prontos." },
          { stem: "swatches", kind: "shot", width: 1280, height: 800, alt: "Uma nota com códigos de cor, como #1d9e75 e rgb(29 158 117), cada um com um quadradinho da cor ao lado.", captionHtml: "Quadradinhos de cor ao lado de cada código de cor; um clique abre o seletor." },
          { stem: "wizard", kind: "shot", width: 1280, height: 800, alt: "O assistente de novo projeto, na etapa de conferir o que será criado: as pastas e os arquivos de um modelo de mundo, cada um com uma caixa para marcar e um nome que se pode editar.", captionHtml: "Novo projeto a partir de um modelo: você vê a árvore e edita antes de gravar qualquer coisa." },
          { stem: "read-link", kind: "shot", width: 1280, height: 800, alt: "A janela de link de leitura de uma nota, depois de criar um link de 7 dias: quem fez, quando expira, o endereço mostrado uma só vez e os botões Copiar e Revogar.", captionHtml: "Link de leitura: com prazo, com senha se quiser, e revogável." },
          { stem: "history", kind: "shot", width: 1280, height: 800, alt: "O histórico de versões de uma nota: a lista de versões com quem mudou, quando e o tamanho, e a diferença da versão escolhida, com as linhas novas marcadas.", captionHtml: "Histórico de versões: quem mudou, quando, a diferença e a volta a uma versão antiga." },
          { stem: "notifications", kind: "shot", width: 1280, height: 800, alt: "A central de notificações do app, com dois avisos de pastas partilhadas com a pessoa, cada um com o botão Ver as pastas.", captionHtml: "Avisos: o que mudou sem você pedir, numa lista para ver depois." },
          { stem: "cloud-sync", kind: "shot", width: 1280, height: 1000, alt: "A janela para sincronizar uma pasta com um serviço que você já tem, com a escolha entre WebDAV e S3 e os campos do endereço.", captionHtml: "Sincronizar uma pasta com WebDAV (Nextcloud) ou S3, sem servidor seu." },
          { stem: "phone", kind: "shot", width: 390, height: 844, alt: "A Mesa na tela de um celular: o registro de conversa e rolagens, o campo para escrever e a barra de navegação embaixo.", captionHtml: "No celular, a mesma janela, no navegador." },
        ],
      },
      roadmap: {
        title: "Roteiro",
        introHtml: [
          "O que vem a seguir, até a V1 — a versão do lançamento público. É um plano, não uma promessa: o que entra e em que ordem pode mudar, e não há datas.",
          "<strong>Já feito</strong> está pronto e chega na próxima versão de teste; <strong>planejado</strong> está decidido para a V1; <strong>depois da V1</strong> fica para mais tarde.",
        ],
        states: { ready: "já feito", building: "em construção", planned: "planejado", later: "depois da V1" },
        groups: [
          {
            title: "Pronto, na próxima versão de teste: ferramentas de RPG",
            state: "ready",
            items: [
              { lead: "Oráculos.", textHtml: "Perguntas de sim ou não com chances ajustáveis, centelhas de ideias a partir de listas de palavras que você edita, e suas próprias tabelas aleatórias; a resposta pode ir para a nota." },
              { lead: "Fichas de criatura e de personagem.", textHtml: "Um bloco <code>statblock</code> desenha um cartão, com dados que rolam com um clique. Há mais de trinta layouts: sistemas abertos, Fractal, World of Darkness, Cyberpunk RED e genéricos. Uma criatura pode partir de outra." },
              { lead: "Novo projeto a partir de um modelo.", textHtml: "Campanha, mundo, ficção ou P.A.R.A.: você vê a árvore de pastas e notas, desmarca e renomeia o que quiser, e só então ela é criada. Os modelos que você importa ficam na pasta." },
              { lead: "Dados em 3D.", textHtml: "Opcional: a rolagem faz cair dados de verdade na tela, com o tamanho, o tempo e o som que você escolher. O resultado já foi sorteado; os dados só o mostram." },
              { lead: "Dados estruturados como diagrama.", textHtml: "Um arquivo JSON, YAML, TOML, XML ou CSV aparece como caixas ligadas por linhas, que você arrasta, dobra e ajusta; também dentro de um board." },
              { lead: "Aparência.", textHtml: "Um assistente de aparência com prévia ao vivo, um construtor de temas, temas salvos em arquivo e um catálogo de temas prontos; o tema é escolhido por pasta e por pessoa." },
              { lead: "Quadradinhos de cor.", textHtml: "Um código de cor na nota ganha um quadradinho da cor, e um clique abre o seletor." },
              { lead: "O tutorial em inglês.", textHtml: "Com o app em inglês, o conteúdo de exemplo e os modelos de projeto vêm em inglês." },
            ],
          },
          {
            title: "Pronto, na próxima versão de teste: a Mesa e o compartilhamento",
            state: "ready",
            items: [
              { lead: "A Mesa.", textHtml: "Um registro de rolagens e conversa que todo mundo que abriu a pasta de um UniVerso vê, com as imagens enviadas. Quem rola é o servidor, e cada rolagem leva o nome de quem rolou; um jogador pode ter uma rolagem secreta. Uma rolagem vira um cartão nas suas notas se você a arrastar." },
              { lead: "Uma pasta é uma campanha.", textHtml: "O dono da pasta a transforma numa mesa, convida os jogadores por um link de uso único e libera cada nota para a mesa toda ou para alguns jogadores; cada nota diz quem a vê. Uma pasta pode ter mais de uma mesa, cada uma com a sua conversa." },
              { lead: "Um só modelo de acesso.", textHtml: "Qualquer nota, board, arquivo ou pasta tem a janela Acesso, com quem não vê, quem vê e quem edita. O jogador que edita um board o edita ao vivo, só com o que pode ver, e pode pôr imagens nele; quatro direitos, todos desligados de início, dizem o resto: imagens, arquivos, criar notas e criar boards." },
              { lead: "Link de leitura, sem conta.", textHtml: "Do UniVerso, uma pasta ou uma nota num endereço que qualquer pessoa abre no navegador para ler, com prazo e senha se você quiser, e que você revoga. Quem lê não recebe os segredos do mestre." },
              { lead: "Sincronizar com uma nuvem que você já tem.", textHtml: "No app do computador, uma pasta pode ficar em dia com um WebDAV (Nextcloud e parecidos) ou com um bucket S3 (Amazon, MinIO, Cloudflare R2), sem servidor seu. O app confere o serviço antes de usar." },
            ],
          },
          {
            title: "Também na V1",
            state: "planned",
            items: [
              { lead: "Mais da Mesa.", textHtml: "O painel do mestre, mostrar uma nota à mesa, sessões, avisos de “novo”, ver como um jogador vê, uma área dos jogadores nos boards e pinos de mapa." },
              { lead: "Dropbox, OneDrive e Google Drive.", textHtml: "A sincronização com esses serviços, além do WebDAV e do S3 que já existem." },
              { lead: "Confirmar que é você num aparelho ligado.", textHtml: "A verificação do sistema e uma chave por aparelho." },
              { lead: "App do Windows assinado.", textHtml: "Sem o aviso do SmartScreen na instalação. O app do Mac não é notarizado pela Apple: ele abre pelo “Abrir mesmo assim” dos Ajustes do Sistema, uma vez." },
              { lead: "O código aberto.", textHtml: "O repositório do Verso público, e os instaladores para baixar aqui." },
              { lead: "Mac com Intel e Linux ARM64.", textHtml: "Apps para esses computadores também." },
              { lead: "Feito para leitor de tela.", textHtml: "O app inteiro usável com um leitor de tela." },
            ],
          },
          {
            title: "Mais tarde",
            state: "later",
            items: [
              { lead: "Plugins de terceiros." },
              { lead: "Criptografia de ponta a ponta, opcional." },
              { lead: "O servidor MCP pela rede." },
              { lead: "Um agente que escreve nas notas, com a diferença à vista." },
              { lead: "Juntar por bloco o que duas pessoas editaram offline." },
            ],
          },
        ],
      },
    },
    server: {
      meta: {
        title: "UniVerso, o servidor do Verso",
        description:
          "O UniVerso é o Verso como servidor, numa máquina sua: a pasta em dia entre computadores, no navegador e no celular, partilhada e editada junto. Testado com dezenas de aparelhos ao mesmo tempo numa VPS de 1 núcleo e 1 GB, sem perder nada.",
      },
      eyebrow: "UniVerso · o servidor do Verso",
      title: "O servidor é seu.",
      ledeHtml:
        "O UniVerso é o Verso como servidor: um só programa, instalado por imagem Docker (amd64 e arm64), por pacote <code>.deb</code> ou <code>.rpm</code> com systemd, ou por um arquivo compactado. Nele ficam as contas e as pastas — pastas comuns de Markdown no disco do servidor. Ninguém se cadastra sozinho: quem administra convida. Cada pasta tem um dono, quem edita e quem só lê — e uma pasta pode virar a mesa de uma campanha de RPG.",
      stepsTitle: "Em três passos",
      featuresTitle: "O que ele faz",
      gallery: {
        title: "Em imagens",
        figures: [
          { stem: "table", kind: "shot", width: 1280, height: 800, alt: "A Mesa ao lado de uma nota num UniVerso: o registro de conversa e rolagens da campanha, com o mestre e três jogadores, dados e totais, uma rolagem secreta marcada, e o campo para escrever.", captionHtml: "A Mesa: conversa e rolagens que todo mundo da campanha vê. O servidor rola, com o nome de quem rolou." },
          { stem: "access", kind: "shot", width: 1280, height: 1120, alt: "A janela da Mesa de uma pasta de campanha: o interruptor de mesa aberta, o convite por link, a lista de jogadores com quantas notas cada um vê e edita, e os quatro direitos de Bruno — Imagens ligado, Arquivos, Criar notas e Criar boards desligados.", captionHtml: "Os direitos de cada jogador: Imagens, Arquivos, Criar notas e Criar boards, todos desligados para quem acabou de entrar." },
          { stem: "access-note", kind: "shot", width: 1280, height: 800, alt: "A janela Acesso de uma nota, com uma linha para a mesa toda e uma por jogador, cada uma com a escolha Não vê, Vê ou Edita, e de onde vem a escolha.", captionHtml: "Acesso numa nota: não vê, vê ou edita, para a mesa e para cada jogador." },
          { stem: "coedit", kind: "shot", width: 1280, height: 800, alt: "Uma nota em edição no UniVerso enquanto outra pessoa digita nela: a linha nova de Bruno aparece com o cursor dele, ao lado do painel da Mesa.", captionHtml: "Editar junto: o que o outro digita aparece na hora, com o cursor dele." },
          { stem: "read-link", kind: "shot", width: 1280, height: 800, alt: "A janela de link de leitura de uma nota, depois de criar um link de 7 dias: quem fez, quando expira, o endereço mostrado uma só vez e os botões Copiar e Revogar.", captionHtml: "Link de leitura: com prazo, com senha se quiser, e revogável." },
          { stem: "read-visitor", kind: "shot", width: 1280, height: 800, alt: "Uma nota aberta pelo link de leitura, no navegador de alguém sem conta: só a nota compartilhada, em modo leitura, com links para o que não foi compartilhado marcados como “não compartilhado” e um nome com cadeado.", captionHtml: "Quem abre o link lê sem conta: o que não foi compartilhado e os segredos ficam de fora." },
          { stem: "history", kind: "shot", width: 1280, height: 800, alt: "O histórico de versões de uma nota: a lista de versões com quem mudou, quando e o tamanho, e a diferença da versão escolhida, com as linhas novas marcadas.", captionHtml: "Histórico de versões: quem mudou, quando, a diferença e a volta a uma versão antiga." },
          { stem: "notifications", kind: "shot", width: 1280, height: 800, alt: "A central de notificações do app, com dois avisos de pastas partilhadas com a pessoa, cada um com o botão Ver as pastas.", captionHtml: "Avisos: o que mudou sem você pedir, numa lista para ver depois." },
          { stem: "folders-desktop", kind: "shot", width: 1280, height: 800, alt: "O seletor de pastas do app ligado a um UniVerso: Gray Harbor e Notebook como dono, Rules só para ler e Sketches para editar.", captionHtml: "As pastas do UniVerso e o papel de cada pessoa: dono, edita, só lê." },
          { stem: "phone", kind: "shot", width: 390, height: 844, alt: "A Mesa na tela de um celular: o registro de conversa e rolagens, o campo para escrever e a barra de navegação embaixo.", captionHtml: "No celular, a mesma janela, no navegador." },
        ],
      },
      safety: {
        title: "Nada se perde",
        paragraphsHtml: [
          "Medimos em 30 de outubro de 2026: edições feitas ao mesmo tempo por vários apps e navegadores, na mesma nota e no mesmo board, chegaram iguais em todo lugar e no disco, sem nada perdido nem repetido. Quando duas pessoas mudam o mesmo arquivo de lados diferentes, o resultado é uma cópia ao lado — nunca uma perda.",
          "Enquanto as pessoas digitam, o servidor grava a nota no disco pelo menos a cada 5 segundos. Se a máquina cair, o que se perde são, no máximo, esses segundos.",
        ],
      },
    },
    compare: {
      meta: {
        title: "Comparativo — Verso",
        description:
          "O Verso ao lado de treze ferramentas de notas, de mundos e de RPG, capacidade por capacidade: o que cada uma faz e o que não faz. Sem preços.",
      },
      eyebrow: "Notas, mundos e RPG",
      roadmapHtml:
        "O que falta aqui — camadas nos mapas, linhas do tempo, plugins — está, quando está planejado, no <a href=\"/recursos/#roteiro\">roteiro da V1</a>. A tabela conta o que o Verso já tem pronto, inclusive as ferramentas de RPG e a Mesa, que chegam na próxima versão de teste.",
    },
  },
  waitlist: {
    title: "Lista de espera",
    intro: "Um e-mail quando houver o que baixar.",
    label: "Seu e-mail",
    placeholder: "voce@exemplo.com",
    button: "Me avise",
    sending: "Guardando…",
    honeypot: "Deixe este campo vazio",
    privacyHtml:
      'Guardamos o e-mail, o idioma desta página e a hora; nenhum outro dado pessoal (o endereço de rede só conta as tentativas, embaralhado, e some em uma hora). Para sair da lista, escreva para <a href="mailto:sergiosjs@pm.me">sergiosjs@pm.me</a>.',
    ok: "Pronto. Avisamos quando houver o que baixar.",
    invalid: "Isso não parece um e-mail. Confira e tente de novo.",
    limited: "Muitas tentativas desta rede em pouco tempo. Tente de novo daqui a uma hora.",
    failed: "Não deu para guardar agora. Tente de novo em alguns minutos.",
  },
  thanks: {
    metaTitle: "Na lista — Verso",
    title: "Pronto, você está na lista.",
    bodyHtml:
      'Avisamos quando houver o que baixar. Se o endereço já estava na lista, nada mudou. Além do e-mail, nenhum dado pessoal fica guardado; para sair da lista, escreva para <a href="mailto:sergiosjs@pm.me">sergiosjs@pm.me</a>.',
    back: "Voltar ao início",
  },
  failed: {
    metaTitle: "Não deu — Verso",
    title: "Não deu para guardar o e-mail.",
    body: "O endereço não parecia um e-mail, houve tentativas demais desta rede na última hora, ou o serviço falhou. Tente de novo:",
    back: "Voltar ao início",
  },
  og: { imageAlt: "Verso: suas notas são arquivos. O servidor é seu." },
  footer: {
    lineHtml: "Verso · <span lang=\"en\">versomd.com</span> · MPL-2.0 · <a href=\"https://github.com/SergioSJS/versomd-site\">código deste site</a>",
    fontsHtml:
      "Fraunces, Literata e Instrument Sans, sob a SIL Open Font License — as mesmas fontes e cores da janela do app.",
    noTracking: "Sem analytics, sem cookies.",
  },
  figLabel: "Fig.",
  routes: { home: "/", features: "/recursos/", server: "/universo/", compare: "/comparativo/", wiki: "/wiki/", thanks: "/obrigado/", failed: "/lista/nao-deu/" },
  ids: {
    content: "conteudo",
    notYet: "ainda-nao",
    compare: "comparativo",
    faq: "perguntas",
    waitlist: "lista",
    files: "arquivos",
    today: "hoje",
    gallery: "em-imagens",
    roadmap: "roteiro",
    steps: "passos",
    serverFeatures: "o-que-faz",
  },
};
