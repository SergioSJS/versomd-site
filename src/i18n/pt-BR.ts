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
    label: "Seções",
    how: "Como funciona",
    notYet: "O que ainda não faz",
    faq: "Perguntas",
    waitlist: "Lista de espera",
  },
  switchTo: { label: "Read in English", name: "English", href: "/en/", hreflang: "en" },
  hero: {
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
  how: {
    title: "Como funciona",
    files: {
      title: "Os arquivos são a verdade",
      paragraphsHtml: [
        "Cada nota é um arquivo <code>.md</code> numa pasta comum do seu disco. O Verso abre a pasta como um editor de código abre: sem importar nada e sem um banco de dados no lugar dos arquivos. O índice de busca é um cache; apagá-lo não perde nada.",
        "Abrir um arquivo nunca o reescreve — nem o frontmatter, nem as quebras de linha, nem os espaços. Converter algo é uma ação sua, com a diferença à vista. Toda gravação é atômica e confere antes se o arquivo mudou no disco desde que foi lido; se mudou, o Verso mostra a diferença em vez de gravar por cima.",
      ],
    },
    server: {
      title: "O servidor é seu",
      introHtml:
        "O UniVerso é o Verso como servidor: um só programa, instalado por imagem Docker (amd64 e arm64), por pacote <code>.deb</code> ou <code>.rpm</code> com systemd, ou por um arquivo compactado. Nele ficam as contas e as pastas — pastas comuns de Markdown no disco do servidor. Ninguém se cadastra sozinho: quem administra convida. Cada pasta tem um dono, quem edita e quem só lê.",
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
          "No celular e no navegador você trabalha direto na pasta do servidor; sem conexão, não edita. Uma cópia local com fila de gravações é um passo posterior.",
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
          "Editar junto e buscar no servidor exigem que o servidor leia os arquivos: quem hospeda vê as notas. A criptografia em repouso é a do disco do servidor.",
      },
      {
        lead: "Não sincroniza por Dropbox, Google Drive ou iCloud.",
        textHtml: "Hoje a sincronização é só com um UniVerso.",
      },
    ],
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
  footer: {
    lineHtml: "Verso · <span lang=\"en\">versomd.com</span> · MPL-2.0 · <a href=\"https://github.com/SergioSJS/versomd-site\">código deste site</a>",
    fontsHtml:
      "Fraunces, Literata e Instrument Sans, sob a SIL Open Font License — as mesmas fontes e cores da janela do app.",
    noTracking: "Sem analytics, sem cookies.",
  },
  figLabel: "Fig.",
  routes: { home: "/", thanks: "/obrigado/", failed: "/lista/nao-deu/" },
  ids: { content: "conteudo", how: "como-funciona", notYet: "ainda-nao", faq: "perguntas", waitlist: "lista" },
};
