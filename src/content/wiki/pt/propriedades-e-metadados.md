---
title: "Propriedades e Metadados"
description: "Como usar o frontmatter YAML com o painel de propriedades retrátil."
order: 3
group: start
slug: "propriedades-e-metadados"
twin: "properties-and-metadata"
source: "demo-vault/03 - Propriedades e Metadados.md"
updated: "2026-09-25"
---
O Verso reconhece metadados escritos em formato YAML no início do arquivo (o chamado *frontmatter*) e os apresenta em um **Painel de Propriedades** elegante e editável logo acima do título da nota.

---

## Painel Retrátil de Propriedades

Observe a tabela de propriedades no topo desta nota:

1. **Recolher e expandir**: clique em **Propriedades**, no topo do painel, para recolher ou expandir a lista. O Verso lembra a sua escolha.
2. **Edição no local**: clique num valor para mudar um texto ou um número, marque e desmarque uma caixa, e acrescente ou tire itens de uma lista (como as tags). Uma data é escrita como texto, no formato `AAAA-MM-DD`.
3. **Propriedade nova**: o botão **Adicionar propriedade** cria uma linha nova no painel.
4. **Persistência limpa**: o que muda no painel é gravado no bloco YAML da nota, sem mexer no resto do texto. Para editar o YAML direto, use o modo **Fonte**.

---

## Tipos de Propriedades Suportados

| Tipo | Exemplo no YAML | Renderização na Interface |
| :--- | :--- | :--- |
| **Texto** | `revisor: "Sérgio"` | Campo de texto editável |
| **Número** | `estimativa_horas: 12` | Campo numérico |
| **Data** | `date: 2026-09-25` | Texto, no formato `AAAA-MM-DD` (as bases leem como data) |
| **Caixa de seleção** | `concluido: false` | Caixa de seleção que se marca com um clique |
| **Lista** | `tags: [frontmatter, yaml]` | Uma pílula por item, cada uma com um botão para tirar |
| **Endereço** | `url_referencia: https://versomd.com` | Texto com um ↗ que abre o endereço |
| **Link para nota** | `relacionado: "[[Projeto Alpha]]"` | Um link de verdade: conta nos backlinks e acompanha renomeações |

---

## Integração com Bases

As propriedades definidas aqui são lidas automaticamente pelas **Bases do Verso** (`.base`), permitindo que você filtre, ordene e agrupe suas notas em tabelas dinâmicas e quadros Kanban, conforme demonstrado em [Visualização de Bases e Dados](/wiki/visualizacao-de-bases-e-dados/).

Uma propriedade cujo valor é um wikilink **entre aspas** (ou uma lista deles) liga as duas notas: é a **relação tipada**, que um board também cria — veja [Board e Relações](/wiki/board-e-relacoes/).

Com `type:` e um **schema** do tipo, as propriedades viram um formulário: as declaradas primeiro, com rótulo e campo certos — veja [Notas Tipadas](/wiki/notas-tipadas/).

Voltar para [Início](/wiki/bem-vindo-ao-verso/) ou seguir para [Visualização de Bases e Dados](/wiki/visualizacao-de-bases-e-dados/).
