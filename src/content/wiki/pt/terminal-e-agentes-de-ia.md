---
title: "Terminal e Agentes de IA"
description: "Um terminal deste computador numa aba, aberto na raiz da pasta: ligar, abrir, os botões que acham o Claude Code, o Gemini CLI e as outras ferramentas de IA, as teclas e o que um programa rodado ali faz nos arquivos."
order: 35
group: start
slug: "terminal-e-agentes-de-ia"
twin: "terminal-and-ai-agents"
source: "demo-vault/35 - Terminal e Agentes de IA.md"
updated: "2026-10-31"
---
O app do Verso no computador tem um **terminal de verdade** numa aba: o seu próprio shell, aberto na raiz da pasta, com o mesmo `PATH` do terminal que você já usa. Ali você roda o Claude Code, o Gemini CLI, o Codex ou qualquer outro programa de linha de comando ao lado das notas, sem sair do Verso.

Ele vem **desligado**. Um shell num app de notas não é para todo mundo; quem quer, liga.

---

## Ligar

Em **Ajustes › Recursos**, ligue **Terminal**. O atalho **Tudo** não liga o terminal: ele fica desligado até você ligar à mão, como os Dados 3D. Desligar fecha as abas de terminal abertas e encerra os programas delas.

## Abrir um terminal

- Na paleta (`⌘ ⇧ P`, ou `Ctrl + Shift + P`): **Novo terminal**. Ele abre na raiz da pasta da janela.
- Botão direito numa pasta da árvore › **Abrir terminal aqui**: o terminal começa naquela pasta.
- Em **Ajustes › Terminal e agentes › Terminal**, o botão **Novo terminal**.

Cada terminal é uma aba como uma nota: arraste-a para dividir o painel, leve-a para outro espaço de trabalho, abra vários. A aba se chama **Terminal — nome da pasta**, com um número quando há mais de um. A linha acima do terminal diz qual shell roda e onde (`zsh em Campanha`).

Uma pasta **sincronizada com um servidor** também é uma pasta deste computador: o terminal abre nela. Uma janela que mostra a pasta de um servidor **sem cópia aqui** abre o terminal na sua pasta pessoal, com uma linha dizendo que a pasta não está neste computador. O shell sempre roda **neste** computador.

O terminal não existe no navegador nem no celular, na janela de um arquivo avulso ([Abrir um Arquivo Avulso](/wiki/abrir-um-arquivo-avulso/)) nem num servidor: lá não aparece em lugar nenhum.

## As ferramentas de IA

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

Para dar ao agente as ferramentas do Verso sobre esta pasta (buscar, ler notas, backlinks, boards e bases, só leitura), use a linha de **Ajustes › Terminal e agentes › Claude Code** — `claude mcp add … -- verso mcp …` — no próprio terminal. A [Terminal, CLI e Agentes](/wiki/terminal-cli-e-agentes/) explica o `verso mcp`.

> **Aviso: Um programa no terminal escreve direto nos arquivos**
>
> O que você roda ali — um agente de IA, o `git`, um script — muda os arquivos da pasta sem passar pelo Verso, como o Finder ou outro editor fariam. O Verso vê cada mudança: uma nota aberta sem edição sua pega o texto novo; uma com edição sua mostra a faixa de conflito com as duas versões; e o **Histórico de versões** guarda cada mudança como *feita fora do Verso*, para desfazer. No primeiro terminal de cada pasta, uma linha lembra isso uma vez.

## Teclas

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

## Fechar, recarregar, sair

- Fechar a aba encerra o shell e tudo o que ele abriu. Se um programa ainda roda nele, o Verso pergunta antes (no Windows, pergunta sempre).
- Digitar `exit` fecha a aba; a barra de status diz com que código o terminal terminou.
- **Recarregar a janela** (`⌘ R`) não mata o que roda: a aba volta e encontra o mesmo shell, com o que ele escreveu por último. Fechar o app encerra os terminais (perguntando, se há programa rodando); ao abrir de novo, a aba começa um shell novo no mesmo lugar.

## Em cada sistema

- **macOS:** o seu shell de login (`$SHELL`, normalmente o `zsh`), com o `~/.zprofile` e o `~/.zshrc`; o `PATH` do Homebrew e do `npm` vem junto. Na primeira vez que um programa no terminal abre `~/Documents`, o macOS pergunta se o **Verso** pode acessar a pasta.
- **Windows:** o PowerShell (`pwsh.exe` quando instalado, senão o `powershell.exe`). Em **Ajustes › Terminal e agentes › Shell do terminal** você troca pelo **Prompt de Comando**. O `wsl` funciona digitado no PowerShell.
- **Linux:** o seu shell de login (`$SHELL`, ou o `bash`).

Para leitores de tela, **Modo leitor de tela no terminal** (em **Ajustes › Terminal e agentes**) faz o leitor anunciar o que o terminal escreve.

---

Siga para a [Som e Música na Mesa](/wiki/som-e-musica-na-mesa/), ou volte à [UniVerso num Servidor Grátis da Oracle](/wiki/universo-num-servidor-gratis-da-oracle/) ou à [Terminal, CLI e Agentes](/wiki/terminal-cli-e-agentes/), consulte a [Página Inicial](/wiki/bem-vindo-ao-verso/) ou explore o Tour do Verso.
