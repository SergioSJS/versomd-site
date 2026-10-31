---
title: "Ajuda, Atualizações e Diagnóstico"
description: "Atualizações, relatar um problema e o console."
order: 18
group: tools
slug: "ajuda-atualizacoes-e-diagnostico"
twin: "help-updates-and-diagnostics"
source: "demo-vault/18 - Ajuda, Atualizações e Diagnóstico.md"
updated: "2026-10-01"
---
Como manter o Verso em dia, contar um problema e ver o que acontece por dentro.

---

## Atualizações

- **Ajustes › Geral › Verificar atualizações automaticamente** procura versões novas sozinho: ao abrir o app e, com ele aberto, a cada 24 horas. Uma versão nova aparece como notificação (veja abaixo), uma vez por versão, com **Baixar e atualizar** e **Ver nos Ajustes**.
- Em **Ajustes › Geral › Versão**, **Verificar atualizações** procura agora. Se houver uma versão nova: **Ver notas da versão** (as novidades dela, no idioma da janela; a página da versão no GitHub diz também qual arquivo baixar para cada computador), **Baixar e atualizar** e, quando o download termina, **Reiniciar agora**.
- Toda atualização vem **assinada** com a chave do Verso: antes de instalar, o app confere a assinatura e o checksum do arquivo. Se algum dos dois não conferir, nada é instalado, e a página de versões continua sendo o caminho para baixar à mão.

---

## Notificações

O que muda sem você ter pedido aparece num aviso no canto de baixo, à direita (no celular, no alto): a sincronização que caiu e a que voltou, a conexão com o servidor, uma cópia de conflito, uma pasta compartilhada com você ou um compartilhamento revogado, uma versão nova, uma pasta perto da cota, itens que saem da lixeira em até 3 dias, alguém que entra na nota que você está editando (esta começa **só na lista**, sem aviso: o sino a conta e a marca de quem entrou, ao lado de "ao vivo", ganha um anel breve). Cada mudança é dita **uma vez**; um aviso de informação some em 6 segundos, um de atenção ou de erro fica até você fechar (`Esc` fecha o que tem o foco) ou até o estado voltar. O que você fez — salvar, mover, renomear — continua dito na barra de status, não aqui.

- **O sino**, na barra de status antes de **Relatar problema** (no celular, no alto do painel), conta o que você não viu. Clique nele — ou use **Notificações** na paleta (`⌘⇧P`) — para abrir a lista: o mais novo primeiro, com a hora, a pasta quando não é a desta janela e o que dá para fazer. Abrir marca tudo como visto; **Limpar** esvazia. A lista fica neste computador (até 100, por 30 dias), não vai para a conta.
- **Ajustes › Notificações**: para cada tipo, **Aviso e lista**, **Só na lista** ou **Desligado**. Desligar não esconde o estado: a barra de status continua dizendo a sincronização, e a nota, o conflito.
- **Também nas notificações do sistema** começa desligado. No navegador, ao ligar, ele pede a permissão; recusada, a opção volta a desligado e diz por quê. No computador nada é perguntado: os ajustes de notificações do sistema decidem, e a opção diz onde ficam. Ligada, o que está em **Aviso e lista** aparece também nas notificações do sistema enquanto a janela está atrás de outras, minimizada ou em outra aba.

Experimente: abra **Ajustes › Notificações**, ponha **Presença** em **Aviso e lista** para ver o aviso de quem entra, ou deixe em **Só na lista** (o começo) e veja só o sino; depois abra o sino.

---

## Relatar um Problema

O botão **Relatar problema**, na barra de status (embaixo, à direita), ganha um ponto quando algum erro aconteceu. Ele abre um relato já preenchido — a versão, o estado do app, os erros da sessão e o fim do registro — para você ler, editar e **Copiar**. Nada é enviado sozinho.

O registro do app fica em `~/Library/Application Support/verso/logs/verso.log`, no seu computador: o que o app abriu, os comandos que falharam, os erros da janela.

---

## O Console

`⌥⌘I` (ou **Visualização › Abrir console**) abre o inspetor da janela: console, elementos e rede — útil para quem desenvolve, ou para mandar um erro detalhado. **Ajustes › Geral › Console do desenvolvedor** o liga e desliga.

---

## A Barra de Status

Embaixo da janela: o botão de mostrar e ocultar os arquivos, as mensagens do app, o andamento do índice, a contagem de palavras e caracteres da nota (num PDF, a página), os atalhos mais usados — **nova nota**, **editar**, **dividir**, **novo espaço de trabalho** —, o sino das **Notificações**, **Relatar problema** e o botão do painel da direita.

---

## O Menu do Mac

- **Verso**: **Ajustes…** (`⌘,`) e **Encerrar o Verso** (`⌘Q`).
- **Arquivo**: **Nova janela**, **Abrir pasta…** (`⌘⇧O`) e **Abrir recente**.
- **Edição**: **Desfazer**, **Refazer** e **Selecionar tudo**.
- **Visualização**: **Abrir console** (`⌥⌘I`).

---

## Este Cofre

Este cofre de exemplo veio de **Importar cofre de exemplo** (na paleta e no menu da árvore). Importar de novo traz o que for novo e mantém os arquivos que você já mudou.

---

Siga para [Organizando: figurinhas, capas e páginas](/wiki/organizando-com-figurinhas-capas-e-paginas/) ou volte para a [Página Inicial](/wiki/bem-vindo-ao-verso/).
