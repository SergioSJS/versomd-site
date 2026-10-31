---
title: "Dados Estruturados como Diagrama"
description: "Um arquivo JSON, YAML, TOML, XML ou CSV, ou um bloco de código desses formatos, visto como caixas e linhas para mover, recolher e buscar; só leitura."
order: 28
group: organize
slug: "dados-estruturados-como-diagrama"
twin: "structured-data-as-a-diagram"
source: "demo-vault/28 - Dados Estruturados como Diagrama.md"
updated: "2026-10-21"
---
Um arquivo **JSON**, **YAML**, **TOML**, **XML** ou **CSV** abre como texto, no editor de código. Quando ele fica grande ou fundo, ler o texto cansa: onde termina um ramo? quantos itens tem esta lista? O **Diagrama** desenha o mesmo arquivo como **caixas ligadas por linhas** — uma caixa para cada objeto ou lista, uma linha para cada valor simples — e deixa você mover, recolher e buscar.

**O diagrama só mostra.** Ele nunca escreve no arquivo: para mudar um dado, edite o texto. A ideia da vista de caixas e linhas é do [JSON Crack](https://github.com/AykutSarac/jsoncrack.com) (Apache-2.0), citado em Ajustes › Aplicação › Créditos e agradecimentos.

---

## Experimente

Abra npcs-da-campanha.json (ou o npcs-da-campanha.yaml, o mesmo em YAML). No alto da aba há **Texto | Diagrama**: clique em **Diagrama**.

1. **Mova** uma caixa arrastando pelo título: ela leva junto tudo o que está pendurado nela. Com **Alt** apertado, só a caixa se move.
2. **Recolha** um ramo na setinha da caixa (ou com **Enter**): ela passa a dizer quanto esconde, como *3 itens* ou *6 chaves*. **Recolher tudo**, **Expandir tudo** e **Expandir até o nível…** ficam na barra (no celular, no menu **…** do fim da barra).
3. **Busque** no campo do alto: chaves e valores, mesmo dentro de um ramo recolhido — o diagrama abre o caminho até o resultado. **Enter** vai ao próximo, **Shift+Enter** ao anterior, **Esc** limpa.
4. Clique numa caixa ou numa linha dela: o trecho correspondente fica **selecionado no texto**, se você abrir o mesmo arquivo em outro painel (⌘\ divide a tela). E o cursor no texto marca a caixa onde ele está.
5. Clique com o botão direito numa caixa ou linha: **Copiar caminho** dá algo como `$.npcs[0].itens`; **Copiar valor** copia o valor.
6. **Arrumar de novo** devolve tudo ao desenho original; **De cima para baixo** troca a direção; **Ajustar à tela** mostra o conjunto. No celular a barra é uma linha só de ícones — lupa, afastar, aproximar, ajustar — e o menu **…** guarda o resto; a lupa abre a busca sobre a barra, e a dica de toque some quando você a dispensa.

Um valor comprido aparece cortado, com um **…** que mostra o texto inteiro. Um número aparece como foi escrito (`12345678901234567890`, sem arredondar).

---

## Para quem usa o teclado ou um leitor de tela

O diagrama é uma **árvore** para o leitor de tela, na ordem dos dados. **Tab** entra nela; **↑ ↓** vão entre irmãs, **←** sobe para a caixa-mãe, **→** desce para a primeira filha; **Enter** ou **Espaço** recolhe e expande; **T** vai ao texto; **/** vai à busca. **Alt+setas** movem a caixa com o que está sob ela, e **Alt+Shift+setas** só a caixa. Com a opção de reduzir movimento ligada no sistema, nada se anima.

---

## Um bloco de código numa nota

Um bloco de código de JSON, YAML, TOML, XML ou CSV numa nota tem o botão **Ver como diagrama**, que abre o diagrama do bloco numa aba ao lado, só para ler. Passe o mouse no bloco abaixo:

```json
{
  "mesa": "Aurora",
  "jogadores": [
    { "nome": "Rowan", "classe": "guerreiro", "equipamento": { "arma": "espada", "armadura": "cota de malha" } },
    { "nome": "Mira", "classe": "maga", "equipamento": { "arma": "cajado" } }
  ],
  "rodada": 7
}
```

---

## Num cartão do board

Um arquivo de dados posto num board (arraste-o da árvore) mostra o texto no cartão, colorido como no editor. No cabeçalho, **Texto | Diagrama** troca a vista; a escolha fica no próprio cartão, no canvas, e o arquivo nunca é gravado. O diagrama só recebe o mouse depois que você o entra (botão **Interagir com o diagrama**); **Esc** devolve o board. Com **Diagrama de dados** desligado, o cartão mostra só o texto. A lição 15 do Treino do Board ensina isso.

---

## Salvar como board

O comando **Salvar como board…** (na barra do diagrama e na paleta) escreve um **board** novo com um cartão de texto para cada caixa à vista e uma linha para cada ligação, do jeito que estão dispostos agora. Antes de criar, o Verso mostra o nome, a pasta e quantos cartões e linhas o board terá. Veja [Board e Relações](/wiki/board-e-relacoes/).

---

## O que mais saber

- **Formatos:** JSON, JSONC (`.jsonc`, com comentários), JSON Lines (`.jsonl`, `.ndjson` — uma raiz por linha; uma linha ruim aparece como erro, sem derrubar as outras), YAML (vários documentos viram várias raízes; um `*alias` é uma linha até a caixa do seu `&âncora`), TOML, XML e CSV/TSV.
- **Ao digitar:** o diagrama se atualiza depois de uma pausa e mantém o que você recolheu e moveu. Se o texto deixa de ser válido, o último diagrama bom continua na tela, com uma linha que diz o erro e leva até ele.
- **Tamanho:** o diagrama é oferecido até 20 MB de texto; acima disso, só o texto. Ele abre com os primeiros níveis abertos, até uns 300 caixas.
- **Lembrado neste aparelho:** o que você moveu e recolheu em cada arquivo, e a última vista usada (texto ou diagrama) para cada tipo de arquivo — a primeira vez de um tipo abre em texto.
- **Desligar:** em Ajustes › Aplicação › Recursos, a chave **Diagrama de dados** tira o seletor Texto | Diagrama e o botão dos blocos. Nenhum arquivo muda.

---

Volte às ferramentas de mesa em [Oráculos e Criação de Mundos](/wiki/oraculos-e-criacao-de-mundos/), veja como ligar uma pasta a uma nuvem sua em [Sincronizar com uma Nuvem](/wiki/sincronizar-com-uma-nuvem/), consulte a [Página Inicial](/wiki/bem-vindo-ao-verso/) ou explore o Tour do Verso.
