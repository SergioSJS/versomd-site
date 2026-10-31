---
title: "Guia de Markdown e Sintaxe"
description: "Títulos recolhíveis, blocos de código com botão de copiar, fórmulas matemáticas em KaTeX, tabelas com colunas redimensionáveis e listas hierárquicas."
order: 1
group: start
slug: "guia-de-markdown-e-sintaxe"
twin: "markdown-guide-and-syntax"
source: "demo-vault/01 - Guia de Markdown e Sintaxe.md"
updated: "2026-09-25"
---
Este documento demonstra os elementos visuais e de edição do Markdown suportados pelo Verso, incluindo blocos de código com cópia rápida, fórmulas matemáticas, tabelas redimensionáveis e elementos recolhíveis.

---

## Títulos e Recolhimento de Seções

Ao passar o mouse pela margem esquerda, ao lado dos títulos abaixo, clique na seta para recolher ou expandir a seção. Na paleta (`⌘⇧P`), **Contrair todas as seções** e **Expandir todas as seções** fazem isso com a nota inteira. O Verso lembra o que você recolheu quando a nota é fechada e aberta de novo (neste computador, sem mexer no arquivo), e clicar num título na **Estrutura** da barra lateral direita expande as seções que o escondem.

### Subtítulo H3: Exemplo de Seção
Esta seção pode ser recolhida usando a seta na margem esquerda. O conteúdo abaixo ficará oculto até que a seção seja expandida novamente.

#### Subtítulo H4: Detalhes Internos
Texto detalhado de apoio para testar a hierarquia visual.

---

## Formatação de Texto

Você pode formatar texto com a sintaxe do Markdown ou com a barra de formatação que fica acima da nota nos modos **Editar** e **Fonte** (veja [Escrevendo no Editor](/wiki/escrevendo-no-editor/)):
- **Negrito** com `**texto**` (`⌘B`)
- *Itálico* com `*texto*` (`⌘I`)
- ~~Tachado~~ com `~~texto~~`
- ==Destaque== com `==texto==` (`⌘⇧H` enquanto escreve)
- `Código inline` com `` `código` ``
- Citação em bloco:
> O conhecimento estruturado em texto puro sobrevive ao tempo e aos formatos transitórios de aplicativos proprietários.

---

## Listas e Tarefas Interativas

As listas suportam indentação inteligente via `Tab` e `Shift-Tab`, com níveis visuais destacados:

- Item de nível principal
  - Subitem indentado com `Tab`
    - Terceiro nível de profundidade
- Lista de tarefas com caixas clicáveis diretamente no modo Editar:
  - [x] Tarefa 1: Instalação e configuração inicial concluídas
  - [ ] Tarefa 2: Testar clique nesta caixa de seleção para alternar estado
  - [ ] Tarefa 3: Verificar que tarefas concluídas recebem estilo tachado automático

---

## Blocos de Código com Botão de Copiar

Passe o cursor sobre qualquer bloco de código abaixo para visualizar o botão **Copiar** no canto superior direito:

### Rust
```rust
fn main() {
    let app_name = "Verso";
    println!("Bem-vindo ao {} — seu editor em Markdown.", app_name);
}
```

### TypeScript
```typescript
interface Note {
  path: string;
  title: string;
  tags: string[];
  isFavorite: boolean;
}

const welcome: Note = {
  path: "00 - Bem-vindo ao Verso.md",
  title: "Bem-vindo ao Verso",
  tags: ["verso", "guia"],
  isFavorite: true,
};
```

### Python
```python
def fibonacci(n: int) -> list[int]:
    sequence = [0, 1]
    while len(sequence) < n:
        sequence.append(sequence[-1] + sequence[-2])
    return sequence[:n]

print("Primeiros 10 números de Fibonacci:", fibonacci(10))
```

---

## Fórmulas Matemáticas em KaTeX

O Verso inclui renderização matemática ultrarrápida via KaTeX:

Fórmula em linha: $E = mc^2$ e $\lim_{x \to 0} \frac{\sin(x)}{x} = 1$.

Fórmula em bloco destacado:
$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

Matriz de rotação em $\mathbb{R}^2$:
$$
R(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}
$$

---

## Tabelas com Colunas Redimensionáveis

No modo de Leitura (`Cmd+E`), passe o mouse sobre a linha divisória entre os cabeçalhos da tabela e arraste para redimensionar a largura das colunas:

| Recurso | Descrição | Status no Verso |
| :--- | :--- | :--- |
| **Edição ao Vivo** | Preview em tempo real dos elementos Markdown | Suportado |
| **Tarefas Interativas** | Checkboxes alternáveis via clique no editor | Suportado |
| **Bases de Dados** | Visualização de dados tipo Obsidian Bases | Suportado |
| **PDF Spread Mode** | Visualização em página dupla lado a lado | Suportado |
| **Fórmulas KaTeX** | Expressões matemáticas inline e em bloco | Suportado |

---

## Destaques (Callouts)

Um destaque é uma citação que começa com `> [!tipo]`. O tipo dá a cor e o ícone; o texto depois dele vira o título:

> **Dica: Dica com título próprio**
>
> Escreva `> [!tip] Seu título` na primeira linha.

> **Aviso: Clique no título para abrir**
>
> Com um `-` depois do tipo, o destaque começa **fechado** no modo Leitura; com `+`, começa aberto e também pode ser fechado.

> **Nota: Destaques podem ser aninhados**
>
> Um `>` a mais por nível:
> > [!quote] Um destaque dentro de outro
> > Até 32 níveis.

No menu `/`, **Destaque: nota**, **Destaque: dica** e **Destaque: aviso** escrevem o começo para você.

---

## Notas de Rodapé, Comentários e Tags

- Uma nota de rodapé se escreve `[^1]` no texto e `[^1]: explicação` em qualquer linha.[^1] As notas aparecem no fim, no modo Leitura, com um ↩ para voltar ao texto.
- Um comentário entre `%%` some no modo Leitura: %%este trecho só aparece no Editar e no Fonte%% — mude de modo com `⌘E` para ver.
- Uma #tag no texto vira um link no modo Leitura: o clique busca `tag:` com o nome dela.

[^1]: Esta é a nota de rodapé do exemplo acima.

---

## Tabelas no Editor

No modo Editar uma tabela continua uma tabela: clique numa célula e digite nela. `Tab` e `⇧Tab` andam pelas células (`Tab` na última cria uma linha), `Enter` desce para a célula de baixo (na última linha, cria outra), as setas passam à célula vizinha e saem da tabela nas bordas, e `Esc` sai para a linha seguinte. O **+** embaixo da tabela acrescenta uma linha e o **+** ao lado, uma coluna. Clique com o botão direito numa célula para inserir ou excluir linhas e colunas e alinhar a coluna à esquerda, ao centro ou à direita — as mesmas ferramentas aparecem na barra de formatação enquanto uma célula está em foco, com o alinhamento da coluna marcado.

O arquivo continua Markdown: a cada mudança as barras `|` se alinham sozinhas, e um `|` digitado numa célula vira `\|`. O botão **Tabela** da barra (ou `⌘⌥T`) — ou **Tabela** no menu `/` — insere uma tabela nova, com o cursor no primeiro cabeçalho. No modo Fonte, a tabela é o texto.

Para alargar uma coluna, arraste a borda direita da célula de cabeçalho dela, no modo Editar ou na Leitura. O Verso guarda essa largura para a tabela e a nota — o arquivo não muda, e o Obsidian mostra a tabela como sempre.

Voltar para a [Página Inicial](/wiki/bem-vindo-ao-verso/) ou continuar para [Links, Âncoras e Notas Incorporadas](/wiki/links-ancoras-e-notas-incorporadas/).
