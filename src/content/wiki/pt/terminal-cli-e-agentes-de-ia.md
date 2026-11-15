---
title: "Terminal, CLI e Agentes de IA"
description: "Um terminal deste computador numa aba (ligar, abrir, as teclas e o que um programa rodado ali faz nos arquivos), o comando `verso` para buscar pelo terminal, o cofre nos agentes de IA pelo MCP e os botões que acham o Claude Code, o Gemini CLI e as outras ferramentas de IA."
order: 36
group: tools
slug: "terminal-cli-e-agentes-de-ia"
twin: "terminal-cli-and-ai-agents"
source: "demo-vault/36 - Terminal, CLI e Agentes de IA.md"
updated: "2026-10-01"
---
O Verso também trabalha fora das notas, de três jeitos:

- um **terminal de verdade** numa aba do app no computador: o seu próprio shell, aberto na raiz da pasta, com o mesmo `PATH` do terminal que você já usa;
- o comando **`verso`**, que busca nas suas notas pelo terminal;
- os **agentes de IA**: um agente (como o Claude) lê o cofre pelo protocolo MCP — sem nunca escrever nele —, e o Claude Code, o Gemini CLI, o Codex e outros rodam no terminal do app, ao lado das notas.

---

## O terminal

O terminal vem **desligado**. Um shell num app de notas não é para todo mundo; quem quer, liga.

### Ligar

Em **Ajustes › Aplicação › Recursos**, ligue **Terminal**. O atalho **Tudo** não liga o terminal: ele fica desligado até você ligar à mão, como os Dados 3D. Desligar fecha as abas de terminal abertas e encerra os programas delas.

### Abrir um terminal

- Na paleta (`⌘ ⇧ P`, ou `Ctrl + Shift + P`): **Novo terminal**. Ele abre na raiz da pasta da janela.
- Botão direito numa pasta da árvore › **Abrir terminal aqui**: o terminal começa naquela pasta.
- Em **Ajustes › Terminal e agentes › Terminal**, o botão **Novo terminal**.

Cada terminal é uma aba como uma nota: arraste-a para dividir o painel, leve-a para outro espaço de trabalho, abra vários. A aba se chama **Terminal — nome da pasta**, com um número quando há mais de um. A linha acima do terminal diz qual shell roda e onde (`zsh em Campanha`).

Uma pasta **sincronizada com um servidor** também é uma pasta deste computador: o terminal abre nela. Uma janela que mostra a pasta de um servidor **sem cópia aqui** abre o terminal na sua pasta pessoal, com uma linha dizendo que a pasta não está neste computador. O shell sempre roda **neste** computador.

O terminal não existe no navegador nem no celular, na janela de um arquivo avulso ([Abrir um Arquivo Avulso](/wiki/abrir-um-arquivo-avulso/)) nem num servidor: lá não aparece em lugar nenhum.

> **Aviso: Um programa no terminal escreve direto nos arquivos**
>
> O que você roda ali — um agente de IA, o `git`, um script — muda os arquivos da pasta sem passar pelo Verso, como o Finder ou outro editor fariam. O Verso vê cada mudança: uma nota aberta sem edição sua pega o texto novo; uma com edição sua mostra a faixa de conflito com as duas versões; e o **Histórico de versões** guarda cada mudança como *feita fora do Verso*, para desfazer. No primeiro terminal de cada pasta, uma linha lembra isso uma vez.

### Teclas

O terminal recebe quase todas as teclas. Estas continuam do app, e são o caminho para sair do terminal pelo teclado:

| Ação | macOS | Linux / Windows |
| :--- | :--- | :--- |
| Próxima aba / aba anterior | `⌘ ⇧ ]` / `⌘ ⇧ [` | `Ctrl + Shift + ]` / `Ctrl + Shift + [` |
| Ir para a aba 1…9 | `⌘ 1`…`⌘ 9` | `Ctrl + 1`…`Ctrl + 9` |
| Abrir… / paleta | `⌘ P` / `⌘ ⇧ P` | `Ctrl + P` / `Ctrl + Shift + P` |
| Ajustes | `⌘ ,` | `Ctrl + ,` |
| Buscar nas notas | `⌘ K` | `Ctrl + K` |
| Fechar a aba | `⌘ W` | `Ctrl + W` |

- **Copiar e colar:** com texto selecionado, `⌘ C` (ou `Ctrl + C`) copia; sem seleção, `Ctrl + C` interrompe o programa, como em qualquer terminal. `⌘ V` (ou `Ctrl + V`) cola.
- No Mac, `⌘` nunca vai para o shell, e **Option** digita acentos e caracteres especiais. Para atalhos no estilo Emacs com Option, ligue **Option como Meta** em **Ajustes › Terminal e agentes**.
- **Limpar**, acima do terminal e no menu da aba, apaga o que já foi escrito na tela.

### Fechar, recarregar, sair

- Fechar a aba encerra o shell e tudo o que ele abriu. Se um programa ainda roda nele, o Verso pergunta antes (no Windows, pergunta sempre).
- Digitar `exit` fecha a aba; a barra de status diz com que código o terminal terminou.
- **Recarregar a janela** (`⌘ R`) não mata o que roda: a aba volta e encontra o mesmo shell, com o que ele escreveu por último. Fechar o app encerra os terminais (perguntando, se há programa rodando); ao abrir de novo, a aba começa um shell novo no mesmo lugar.

### Em cada sistema

- **macOS:** o seu shell de login (`$SHELL`, normalmente o `zsh`), com o `~/.zprofile` e o `~/.zshrc`; o `PATH` do Homebrew e do `npm` vem junto. Na primeira vez que um programa no terminal abre `~/Documents`, o macOS pergunta se o **Verso** pode acessar a pasta.
- **Windows:** o PowerShell (`pwsh.exe` quando instalado, senão o `powershell.exe`). Em **Ajustes › Terminal e agentes › Shell do terminal** você troca pelo **Prompt de Comando**. O `wsl` funciona digitado no PowerShell.
- **Linux:** o seu shell de login (`$SHELL`, ou o `bash`).

Para leitores de tela, **Modo leitor de tela no terminal** (em **Ajustes › Terminal e agentes**) faz o leitor anunciar o que o terminal escreve.

---

## O comando `verso`

### Instalar o comando

Em **Ajustes › Terminal e agentes › Comando verso no terminal**, clique em **Instalar**. O Verso põe o comando em `/usr/local/bin/verso` (o macOS pode pedir a sua senha); **Remover** o tira. Se já existe outro `verso` ali, o botão é **Substituir**.

No Windows não há o que instalar: o `verso.exe` vem com o app, na pasta dele. Rode-o pelo caminho, ou ponha essa pasta no PATH para digitar só `verso`.

No Linux, o pacote (`.deb` ou `.rpm`) já põe o `verso` no PATH, ao lado do app. Num AppImage, **Instalar** põe o comando em `~/.local/bin`, sem pedir senha, e ele acompanha o AppImage quando este se atualiza. No beta, o comando se chama `verso-beta`.

### O que o comando faz

Rode-o no terminal do app ou em qualquer outro:

| Comando | Faz |
| :--- | :--- |
| `verso index ~/Notas` | indexa a pasta |
| `verso search ~/Notas reunião` | busca nas notas (`--limit 50` para mais resultados) |
| `verso backlinks ~/Notas "Projeto Alpha"` | quem aponta para uma nota (pelo nome, como num link, ou pelo caminho dentro da pasta) |
| `verso backlinks ~/Notas --unresolved` | os links que não levam a nenhuma nota: notas que ainda não existem, e anexos |
| `verso ~/Notas` | abre a pasta no app — com o app aberto, numa janela própria |
| `verso help` | a ajuda completa |

`--json` devolve a resposta em JSON, para scripts; `--lang pt-BR` ou `--lang en` escolhe o idioma.

---

## Agentes de IA (MCP)

Em **Ajustes › Terminal e agentes**:

- **Adicionar ao Claude Desktop** liga este cofre ao Claude Desktop (no Mac, com o comando `verso` instalado; no Windows ele já vem com o app). Sem o Claude Desktop instalado, o botão vira **Baixar o Claude Desktop** e abre a página de download.
- **Claude Code** mostra a linha que liga o cofre ao Claude Code (`claude mcp add … -- verso mcp …`), com **Copiar**.
- **Outros clientes MCP** mostra o JSON para outros programas.

### Uma pasta ou todo o Verso

Em **Agentes: uma pasta ou todo o Verso** você escolhe:

- **Um servidor por pasta** (o padrão): cada cofre que você adiciona vira um servidor próprio, e o agente vê só ele.
- **Um servidor para todo o Verso**: um servidor só, `verso`, adicionado uma vez. Ele atende os cofres marcados em **Esta pasta é visível para agentes** — nenhum até você marcar. O agente pergunta quais existem (`list_folders`) e diz em qual quer ler.

Nos dois modos o app não precisa estar aberto: o agente inicia o `verso` sozinho. Tudo o que um agente lê fica registrado em `agents.log`, na pasta de configuração do Verso.

### As ferramentas do agente

O agente ganha estas ferramentas, todas só de leitura:

- `search` (buscar) e `list_notes` (listar as notas e os boards — também só as de uma tag, como `projeto`, de uma propriedade, como `status: ativo`, ou de um tipo, como `Personagem` — veja [Notas Tipadas](/wiki/notas-tipadas/));
- `read_note` (ler uma nota, com as propriedades e as tags dela);
- `links` e `backlinks` (as ligações de uma nota — e, quando a ligação é uma propriedade do frontmatter, como `aliado: "[[Barão]]"`, qual é a relação);
- `read_board` (ler um board: os cartões, as setas com as relações, os textos desenhados);
- `query_base` (consultar uma base, como a tabela que o Verso mostra);
- `unresolved` (os links sem destino) e `index` (atualizar o índice);
- `list_folders` (os cofres visíveis, no modo de todo o Verso).

Experimente pedir: *"quais notas têm a tag projeto e o que o Tour do Verso mostra?"*. Ele lê; quem escreve é você.

---

## Agentes de IA no terminal

O botão **Ferramentas de IA**, acima do terminal (e em **Ajustes › Terminal e agentes › Ferramentas de IA › Procurar**), pergunta ao seu shell quais destas estão instaladas — só quando você clica, nunca ao abrir:

| Ferramenta | Comando |
| :--- | :--- |
| Claude Code | `claude` |
| Gemini CLI | `gemini` |
| Codex | `codex` |
| Antigravity CLI | `agy` |
| OpenCode | `opencode` |
| Cursor CLI | `cursor-agent` |

**Abrir Claude Code** (e as outras encontradas) abre um terminal novo na raiz da pasta já rodando a ferramenta. Uma que não está instalada aparece como **… não está instalado — página de instalação**, e o clique abre a página dela no navegador.

Para dar ao agente as ferramentas do Verso sobre esta pasta (buscar, ler notas, backlinks, boards e bases, só leitura), cole no próprio terminal a linha de **Ajustes › Terminal e agentes › Claude Code**, a de [Agentes de IA (MCP)](#agentes-de-ia-mcp). E lembre do aviso de [O terminal](#o-terminal): o que o agente faz ali escreve direto nos arquivos, e o **Histórico de versões** guarda cada mudança para desfazer.

---

Anterior: [Sincronizar com uma Nuvem](/wiki/sincronizar-com-uma-nuvem/) · Próxima: [Ajustes, Aparência e Atalhos](/wiki/ajustes-aparencia-e-atalhos/) · [Página Inicial](/wiki/bem-vindo-ao-verso/) · Tour do Verso
