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
        text: "Para uma casa, um grupo de RPG ou um time pequeno que quer partilhar pastas num servidor que alguém de confiança roda.",
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
        text: "O que o Verso faz hoje — escrever, ligar notas, boards, bases — e o roteiro até a V1.",
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
          term: "Partilhar",
          textHtml:
            "O dono dá a outra conta do mesmo UniVerso acesso de leitura ou de escrita a uma pasta, e pode tirar depois.",
        },
        {
          term: "Editar junto",
          textHtml:
            "Com a sincronização conectada, uma nota aberta por duas pessoas recebe as edições da outra letra a letra, com o cursor e o nome de cada uma.",
        },
        {
          term: "Lixeira",
          textHtml:
            "O que é apagado fica 30 dias por padrão, com quem apagou e quando, e volta para o lugar com “Restaurar”.",
        },
        {
          term: "Console",
          textHtml:
            "Quem administra vê contas, pastas, convites, cotas e o registro de auditoria em <code>/admin</code>.",
        },
        {
          term: "Navegador e celular",
          textHtml:
            "O UniVerso serve a mesma janela do app; no celular e no tablet ela se instala na tela inicial.",
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
          alt: "O painel Sincronizar dos ajustes do Verso, com o título “Tudo em dia.”, a linha “demo-vault em notas.casa · você é dona da pasta · última vez há 2 min”, os botões Sincronizar agora, Pausar e Desligar, e a seção Esperando por você, vazia.",
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
          alt: "Os ajustes do Verso num celular, na seção Servidores: um UniVerso chamado notas.casa, a conta conectada e três pastas com o papel da pessoa em cada uma — Caderno (dona), Mesa de RPG (edita), Regras da Bia (só lê) — cada uma com o botão Abrir aqui.",
          captionHtml: "No celular: as pastas de um UniVerso, com o papel de cada pessoa — dona, edita, só lê.",
        },
      },
      {
        title: "Administre pelo console",
        textHtml:
          "Ninguém se cadastra sozinho: quem administra convida. Em <code>/admin</code> ficam as contas, as pastas, os convites, as cotas e o registro de auditoria.",
        figure: {
          stem: "universo-console-admin",
          kind: "poster",
          width: 1080,
          height: 1026,
          alt: "O console de administração do UniVerso, no tema escuro, na página Contas: três contas (admin, Ana e Bia), com e-mail, pastas, espaço usado, último acesso e data de criação. Ao lado, o menu Visão geral, Contas, Pastas, Convites, Registro e Servidor.",
          captionHtml: "O console de quem administra, na página Contas.",
        },
      },
    ],
    vps: {
      title: "Uma VPS de 1 GB dá conta",
      introHtml:
        "Medimos numa máquina virtual do tamanho da menor VPS: 1 núcleo, 1 GB de memória, disco virtual de 10 GB, Ubuntu sem interface gráfica e o UniVerso instalado do <code>.deb</code>. Quatro computadores — dois Macs, um Windows e um Linux — sincronizaram com ela uma pasta de 133 arquivos e 62 MB.",
      stats: [
        { value: "~18 MB", label: "de memória com o programa recém-iniciado" },
        { value: "< 2 %", label: "de CPU em 20 minutos com os quatro editando" },
        { value: "69 s", label: "a primeira sincronização dos 62 MB para os quatro ao mesmo tempo" },
        { value: "50", label: "aparelhos gravando juntos por 60 s, sem nenhum problema de integridade" },
      ],
      allNumbers: "Todos os números",
      tableCaption: "O que a máquina de 1 núcleo e 1 GB mostrou",
      head: ["Situação", "Medido"],
      rows: [
        ["Programa recém-iniciado", "cerca de 18 MB de memória"],
        ["20 minutos com os quatro editando", "CPU abaixo de 2 %; as cinco cópias iguais byte a byte em toda conferência"],
        ["Primeira sincronização dos 62 MB para os quatro ao mesmo tempo", "69 s"],
        ["Um aparelho gravando sozinho", "cerca de 100 ms por gravação — o tempo do disco"],
        ["50 aparelhos gravando ao mesmo tempo por 60 s", "1001 operações; metade esperou até 4,5 s na fila do disco; nenhum problema de integridade"],
        ["Depois de uma rajada de 50, no build distribuído", "cerca de 70 MB retidos"],
        ["Numa máquina com 453 MiB de memória", "dez aparelhos baixando uma pasta de 181 MB ao mesmo tempo: pico de 44 MB; rajadas de 50 sem o processo ser derrubado, com metade da vazão"],
      ],
      afterHtml: [
        "O mínimo que indicamos: 1 núcleo e 512 MB, para uma família ou um time pequeno — medido com até dez aparelhos, anexos de qualquer tamanho. Com 1 GB sobra folga. A máquina estava na rede local, não num provedor; Raspberry Pi e NAS ainda não foram medidos.",
        "As vazões vêm do build usado nos testes; a memória depois da rajada, do build que é distribuído. Os números completos estão no guia de instalação do servidor, que sai junto com o código.",
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
        lead: "Não funciona offline no celular.",
        textHtml:
          "No celular e no navegador você trabalha direto na pasta do servidor; sem conexão, não edita — por enquanto: o celular offline já está pronto e chega na próxima versão de teste (<a href=\"/recursos/#roteiro\">roteiro</a>).",
      },
      {
        lead: "Não tem plugins.",
        textHtml:
          "Nem os do Obsidian, nem plugins próprios. Um sistema de plugins está planejado; os plugins do Obsidian não rodam no Verso.",
      },
      {
        lead: "Não tem link público para partilhar.",
        textHtml:
          "A partilha é entre contas do mesmo UniVerso. Um link que qualquer pessoa abre, sem conta, não existe.",
      },
      {
        lead: "Não tem criptografia de ponta a ponta.",
        textHtml:
          "Editar junto e buscar no servidor exigem que o servidor leia os arquivos: quem hospeda vê as notas. A criptografia em repouso é a do disco do servidor. Uma criptografia de ponta a ponta opcional fica para depois da V1.",
      },
      {
        lead: "Não sincroniza por Dropbox, Google Drive ou iCloud.",
        textHtml: "Hoje a sincronização é só com um UniVerso.",
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
      "<strong>Onde está atrás:</strong> o Verso ainda está em teste e sem download público. Não tem segredo do mestre dentro de uma nota, mapas com pinos e camadas, linhas do tempo, árvores genealógicas nem modelos de RPG prontos; não tem plugins; no celular, só pelo navegador e com conexão. Para um mundo pronto para usar hoje, World Anvil, Kanka e LegendKeeper vão mais longe; para jogar numa mesa virtual, o Foundry VTT. E o Chronicler, que como o Verso guarda Markdown no disco, já tem infoboxes, modelos de página e mapas com pinos e camadas (no Pro, em alfa) — mas é de uma pessoa só, sem servidor nem celular.",
    ],
    pains: {
      title: "Três problemas comuns, e o que o Verso faz com eles",
      items: [
        { lead: "O dilema do mestre.", textHtml: "Hoje o Verso partilha por pasta: a pasta dos jogadores com leitura, a sua só sua, no mesmo vault, sem duplicar notas. Um segredo dentro de uma nota — um parágrafo que só o mestre vê — ainda não existe; World Anvil, Kanka, LegendKeeper e Foundry VTT têm." },
        { lead: "Preso a um serviço.", textHtml: "As notas são arquivos <code>.md</code> numa pasta sua, e o servidor é uma máquina sua. Sair do Verso é fechar o app: a pasta continua abrindo no Obsidian ou em qualquer editor." },
        { lead: "Sincronizar entre aparelhos.", textHtml: "Com um UniVerso, a pasta fica em dia entre Mac, Windows e Linux e abre no navegador e no celular, sem assinatura de sincronização. Mas alguém precisa manter o servidor ligado, e no celular é só online." },
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
          { mark: "no", text: "ainda não; hoje, separe por pasta" },
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
          { mark: "partial", text: "notas tipadas que você define; sem pacotes de RPG" },
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
          { mark: "no", text: "uma imagem num board, sem pinos nem camadas" },
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
          { mark: "partial", text: "no navegador, por um UniVerso; só online" },
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
          "O que o Verso faz hoje — escrever em Markdown, ligar notas, boards, bases, sincronizar com um servidor seu — e o que vem até a V1.",
      },
      eyebrow: "Recursos",
      title: "O que o Verso faz, e o que vem depois.",
      ledeHtml:
        "Primeiro o que já está nas versões de teste; logo abaixo, <a href=\"#roteiro\">o roteiro</a> até a V1, a versão do lançamento público.",
      today: {
        title: "O que já faz",
        introHtml:
          "Tudo isto está nas versões de teste de hoje: no Mac com chip Apple, no Windows 10 e 11 e no Linux (x64), e no navegador e no celular por um UniVerso.",
        groups: [
          {
            title: "Escrever",
            itemsHtml: [
              "Três modos: leitura, edição e o Markdown cru.",
              "Blocos que você arrasta pela alça e um menu <code>/</code>, como no Notion.",
              "Tabelas editadas como tabelas.",
              "Um painel para as propriedades da nota, e notas tipadas: o tipo dá à nota os campos dela.",
              "Callouts, fórmulas, diagramas Mermaid e blocos de código com botão de copiar.",
            ],
          },
          {
            title: "Ligar as notas",
            itemsHtml: [
              "Links <code>[[…]]</code> para notas, títulos e blocos, e embeds que mostram a nota ou o bloco.",
              "Backlinks, links de saída e os links que ainda não levam a nenhuma nota.",
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
            ],
          },
          {
            title: "Bases",
            itemsHtml: [
              "Arquivos <code>.base</code> vistos como tabela, cartões, lista, kanban ou calendário, com filtros, ordem, grupos e fórmulas.",
              "Uma base embutida numa nota, ao vivo; o mesmo arquivo que o Obsidian abre.",
            ],
          },
          {
            title: "Organizar",
            itemsHtml: [
              "Uma árvore de arquivos com seleção múltipla, figurinhas, cores e capas.",
              "Páginas de pasta, ordem manual e focos, compartilhados com o make.md.",
              "A nota do dia, com calendário, e modelos oferecidos ao criar uma nota.",
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
            title: "Com um UniVerso",
            itemsHtml: [
              "A pasta em dia entre seus computadores; a primeira sincronização não apaga nada.",
              "Pastas partilhadas com outras contas, para ler ou para escrever.",
              "Notas, boards e bases editados junto, ao vivo, com o cursor e o nome de cada pessoa.",
              "Uma lixeira de 30 dias, e um console para quem administra.",
              "A mesma janela no navegador e no celular. <a href=\"/universo/\">Mais sobre o UniVerso</a>.",
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
      roadmap: {
        title: "Roteiro",
        introHtml: [
          "O que vem a seguir, até a V1 — a versão do lançamento público. É um plano, não uma promessa: o que entra e em que ordem pode mudar, e não há datas.",
          "<strong>Já feito</strong> está pronto e chega na próxima versão de teste; <strong>em construção</strong> está sendo feito agora; <strong>planejado</strong> está decidido para a V1.",
        ],
        states: { ready: "já feito", building: "em construção", planned: "planejado", later: "depois da V1" },
        groups: [
          {
            title: "Pronto, na próxima versão de teste",
            state: "ready",
            items: [
              { lead: "Notificações no app.", textHtml: "Um aviso quando algo muda sem você ter pedido — a sincronização caiu ou voltou, uma pasta foi partilhada com você, saiu uma versão nova — e uma lista para ver depois. Você escolhe, por tipo, o que avisa, e se também aparece nas notificações do sistema." },
              { lead: "Prévia ao passar o mouse.", textHtml: "Pare o ponteiro sobre um link e leia a nota sem sair de onde está." },
              { lead: "Ficha da nota.", textHtml: "As propriedades viram um cartão ao lado do texto, com imagem — a ficha de um personagem, de um lugar, de um projeto." },
              { lead: "Segredos do mestre.", textHtml: "Um bloco <code>&gt; [!secret]</code> dentro da nota, ou num cartão de texto do board, que quem só pode ler a pasta partilhada nunca recebe." },
              { lead: "Dados e tabelas aleatórias.", textHtml: "<code>dice: 1d20</code> rola com um clique, e uma tabela da nota sorteia uma linha; o resultado nunca é gravado na nota." },
              { lead: "Ligar menções.", textHtml: "Onde uma nota é citada pelo nome sem link, um clique faz o link — um por um, ou todos de uma vez, vendo antes o que muda." },
              { lead: "Mapas no board.", textHtml: "Uma imagem por baixo do board, pinos que abrem notas, e pinos secretos que os jogadores não veem." },
              { lead: "Histórico de versões.", textHtml: "Quem mudou uma nota e quando, a diferença entre versões, e uma versão antiga de volta — num UniVerso e nas pastas do computador." },
              { lead: "O celular offline.", textHtml: "As pastas que você escolher ficam no celular; você escreve sem conexão, e tudo sincroniza quando a rede volta." },
              { lead: "Notas periódicas.", textHtml: "Da semana, do mês, do trimestre e do ano, ao lado da nota do dia." },
              { lead: "Bases mais completas.", textHtml: "Filtros com expressões regulares e a vista em mapa." },
              { lead: "Páginas da web dentro da nota.", textHtml: "Uma página embutida rola com a nota e é recortada no lugar certo, como um iframe — também nos sites que não deixam ser embutidos." },
            ],
          },
          {
            title: "Em construção",
            state: "building",
            items: [
              { lead: "O app como servidor.", textHtml: "O app do computador serve as pastas que você escolher na rede da sua casa; o celular se liga lendo um QR code, e você aprova no computador." },
            ],
          },
          {
            title: "Também na V1",
            state: "planned",
            items: [
              { lead: "Apps assinados.", textHtml: "No Mac e no Windows, sem o aviso de app desconhecido na instalação." },
              { lead: "O código aberto.", textHtml: "O repositório do Verso público, e os instaladores para baixar aqui." },
              { lead: "Mac com Intel e Linux ARM64.", textHtml: "Apps para esses computadores também." },
              { lead: "Feito para leitor de tela.", textHtml: "O app inteiro usável com um leitor de tela." },
            ],
          },
          {
            title: "Mais tarde",
            state: "later",
            items: [
              { lead: "Criptografia de ponta a ponta, opcional." },
              { lead: "O servidor MCP pela rede." },
              { lead: "A pasta num armazenamento externo: um bucket seu ou WebDAV." },
            ],
          },
        ],
      },
    },
    server: {
      meta: {
        title: "UniVerso, o servidor do Verso",
        description:
          "O UniVerso é o Verso como servidor, numa máquina sua: a pasta em dia entre computadores, no navegador e no celular, partilhada e editada junto. Medido numa VPS de 1 núcleo e 1 GB.",
      },
      eyebrow: "UniVerso · o servidor do Verso",
      title: "O servidor é seu.",
      ledeHtml:
        "O UniVerso é o Verso como servidor: um só programa, instalado por imagem Docker (amd64 e arm64), por pacote <code>.deb</code> ou <code>.rpm</code> com systemd, ou por um arquivo compactado. Nele ficam as contas e as pastas — pastas comuns de Markdown no disco do servidor. Ninguém se cadastra sozinho: quem administra convida. Cada pasta tem um dono, quem edita e quem só lê.",
      stepsTitle: "Em três passos",
      featuresTitle: "O que ele faz",
    },
    compare: {
      meta: {
        title: "Comparativo — Verso",
        description:
          "O Verso ao lado de treze ferramentas de notas, de mundos e de RPG, capacidade por capacidade: o que cada uma faz e o que não faz. Sem preços.",
      },
      eyebrow: "Notas, mundos e RPG",
      roadmapHtml:
        "Parte do que falta aqui — o segredo do mestre dentro da nota, mapas com pinos, o celular offline — já está pronto e chega na próxima versão de teste; o resto está no <a href=\"/recursos/#roteiro\">roteiro da V1</a>. A tabela mostra só o que já está nas versões de teste.",
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
  routes: { home: "/", features: "/recursos/", server: "/universo/", compare: "/comparativo/", thanks: "/obrigado/", failed: "/lista/nao-deu/" },
  ids: {
    content: "conteudo",
    notYet: "ainda-nao",
    compare: "comparativo",
    faq: "perguntas",
    waitlist: "lista",
    files: "arquivos",
    today: "hoje",
    roadmap: "roteiro",
    steps: "passos",
    serverFeatures: "o-que-faz",
  },
};
