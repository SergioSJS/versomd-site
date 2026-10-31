---
title: "Notas Diárias, Calendário e Templates"
description: "Registro cronológico diário, navegação mensal pelo calendário e automação de notas com templates."
order: 7
group: organize
slug: "notas-diarias-calendario-e-templates"
twin: "daily-notes-calendar-and-templates"
source: "demo-vault/07 - Notas Diárias, Calendário e Templates.md"
updated: "2026-10-14"
---
Uma nota por dia — e por semana, por mês, por trimestre e por ano —, um calendário que mostra as que existem, e templates que preenchem as notas novas.

---

## 📅 A Nota de Hoje

- **`⌘⇧D`**, o botão **Nota de hoje** na faixa da esquerda, ou **Nota de hoje** na paleta (`⌘⇧P`).
- A nota se chama `AAAA-MM-DD.md` e fica na pasta **Diário** — o padrão de **Ajustes › Notas periódicas**.
- Se a nota do dia ainda não existe, o Verso a cria a partir do template com o mesmo nome da pasta — aqui, Templates/Diário — e põe o cursor no fim.

Notas deste cofre: 24 de setembro e 25 de setembro.

---

## 📆 A Semana, o Mês, o Trimestre e o Ano

Além do dia, cada período tem a sua nota, na mesma pasta **Diário**:

| Período | Comando na paleta (`⌘⇧P`) | Nome da nota em 14/10/2026 |
|---|---|---|
| Semana | **Nota desta semana** | `2026-W42.md` |
| Mês | **Nota deste mês** | `2026-10.md` |
| Trimestre | **Nota deste trimestre** | `2026-Q4.md` |
| Ano | **Nota deste ano** | `2026.md` |

- A semana e o mês já vêm ligados; o trimestre e o ano se ligam em **Ajustes › Notas periódicas**.
- A nota da semana nasce do template Semanal: `{{date}}` vira o primeiro dia da semana, `{{date+6d:DD/MM}}` o último, e `{{sunday:DD/MM}}` … `{{saturday:DD/MM}}` cada dia dela pelo nome. Veja a semana 39 deste cofre.
- Numa nota periódica, **Nota periódica anterior** e **Próxima nota periódica** (na paleta e no menu da aba) pulam para a vizinha que existe, saltando as semanas sem nota.
- Nenhum desses comandos tem atalho: dê um em **Ajustes › Atalhos**. `⌘⇧D` continua sendo o do dia.
- Os formatos são os do Moment.js, como no Obsidian: `gggg-[W]ww` conta a semana a partir do domingo (o dia em que a semana começa é um ajuste da pasta), `GGGG-[W]WW` é a semana ISO. Uma `/` no formato cria pastas.
- Estes ajustes ficam na própria pasta (`.verso/settings.json`): quem abrir a pasta, em outro computador ou no servidor, encontra as mesmas notas. Se a pasta tem ajustes de notas diárias do Obsidian, os Ajustes oferecem **Usar os ajustes do Obsidian**.

---

## 🗓️ O Calendário

Abra o painel da direita (`⌘⌥→`) e escolha a aba **Calendário**:

- Um ponto embaixo do número marca os dias que têm nota na pasta **Diário** — volte até **setembro de 2026** com **Anterior** para ver os dois dias deste cofre.
- Um clique num dia abre a nota daquele dia, ou a cria.
- **Hoje** volta para o mês atual.
- A coluna **Sem.** numera as semanas: um clique abre a nota daquela semana, ou a cria. Volte a setembro de 2026 e veja a semana 39 marcada.
- O nome do mês, no alto, abre a nota do mês; o ano, a do ano (quando ligado).
- Pelo teclado: `←` no primeiro dia de uma semana chega ao número dela; `→` volta aos dias.

---

## 📋 Templates

Um template é uma nota qualquer da pasta **Templates** (**Ajustes › Arquivos e links › Pasta de templates**). Os deste cofre:

- Diário: o modelo das notas diárias — foco, tarefas, ideias e reflexão.
- Semanal: o modelo das notas da semana — metas, os sete dias e a revisão.
- Nota de Reunião: pauta, participantes, decisões e próximos passos.
- Novo Projeto: propriedades de projeto, escopo e cronograma.

Ao ser usado, um template troca `{{date}}` pela data de hoje (`AAAA-MM-DD`) e `{{title}}` pelo nome da nota.

### Começar uma nota nova por um template

Uma nota nova (`⌘N`, ou **Nova nota** na árvore) mostra **Começar com** logo abaixo do título: **Em branco** e cada template da pasta. Clique num — ou chegue com `Tab`, ande com as setas e aperte `Enter` — e o texto do template vira o da nota. **Em branco**, `Esc` ou começar a digitar guardam a lista. Numa pasta cuja nota define `items_template`, a nota nova já nasce daquele template.

### Inserir um template numa nota

1. Numa linha vazia, digite `/` e escolha **Inserir template…** (ou use **Inserir template…** na paleta, ou o botão da faixa da esquerda).
2. Escolha o template: o texto entra onde está o cursor.

### Transformar uma nota em template

Na paleta (`⌘⇧P`), **Salvar esta nota como template** copia a nota aberta para a pasta **Templates**.

---

Siga para [Diagramas Mermaid](/wiki/diagramas-mermaid/) ou volte para a [Página Inicial](/wiki/bem-vindo-ao-verso/).
