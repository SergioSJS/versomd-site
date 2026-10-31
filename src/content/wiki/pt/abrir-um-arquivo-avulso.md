---
title: "Abrir um Arquivo Avulso"
description: "Dois cliques num `.md` abrem o arquivo sozinho, sem pasta, numa janela sem árvore nem índice e sem nada escrito ao lado; e como fazer do Verso o app padrão de `.md` em cada sistema."
order: 33
group: tools
slug: "abrir-um-arquivo-avulso"
twin: "open-a-single-file"
source: "demo-vault/33 - Abrir um Arquivo Avulso.md"
updated: "2026-10-30"
---
Um `.md` na pasta Downloads, na Mesa, anexado a uma mensagem: dois cliques, leia, corrija uma linha, feche. Para isso o Verso não precisa de uma pasta: ele abre **um arquivo só**, numa janela de arquivos avulsos — sem árvore, sem busca, sem grafo, sem lixeira, sem sincronização —, e **não escreve nada ao lado do arquivo**: nem índice, nem `.verso`, nem `.trash`. O que ele grava é o arquivo, com a mesma segurança de uma pasta: gravação atômica e, se outro programa mudou o arquivo enquanto você editava, a faixa de conflito com as duas versões.

---

## Como abrir

- **Dois cliques** num `.md` (ou `.markdown`) no Finder, no Explorer ou no gerenciador de arquivos, quando o Verso é o app desse arquivo; ou **Abrir com › Verso**.
- Arraste o arquivo para o ícone do Verso no Dock (macOS).
- No terminal: `verso nota.md` (ou `verso open nota.md`).
- No app: **Arquivo › Abrir arquivo…**, ou o comando **Abrir arquivo…** na paleta. **Arquivo › Abrir recente** guarda os últimos dez arquivos num grupo abaixo das pastas.

Se o arquivo está **dentro de uma pasta que uma janela já mostra**, ele abre como aba daquela janela. Senão, abre na janela de arquivos avulsos — uma só por app; cada arquivo vira uma aba, e a faixa acima das abas mostra o nome do arquivo e a pasta onde ele está.

Se ele está dentro de uma pasta que você **já abriu antes** no Verso, a faixa diz isso e oferece **Abrir a pasta**.

## O que a janela faz e não faz

- Leitura, Editar e Fonte, o sumário e as propriedades, como em qualquer nota.
- Uma **imagem, PDF, áudio ou vídeo** ao lado do arquivo (`![[foto.png]]`) aparece; só leitura, só dentro da pasta do arquivo, e um link simbólico que sai dela é recusado.
- Um link `[[Outra]]` ou `[texto](outra.md)`: ao clicar, se existe uma nota com esse nome **ao lado** do arquivo, ela abre como outra aba (outro arquivo avulso); se não existe, nada é criado e a barra de status diz para abrir a pasta. Um embed de nota `![[Outra]]` é desenhado como link, não embutido; a pré-visualização ao passar o mouse fica desligada.
- Um arquivo que o sistema **não deixa gravar** (permissões, bloqueado, volume só de leitura) abre só para leitura, com o motivo acima do texto e **Salvar uma cópia…**. Um arquivo com **mais de 8 MiB** abre só para leitura, no modo Fonte.
- **Apagado ou movido** fora do Verso enquanto estava aberto: o texto fica na aba, com **Gravar aqui de novo** (recria o arquivo no mesmo lugar; recusa se algo reapareceu lá) e **Salvar uma cópia…** (a caixa de salvar do sistema).
- Um arquivo que está só na nuvem (iCloud, OneDrive) é baixado ao abrir, como uma nota de pasta; o que não puder ser baixado é dito, nunca aberto vazio.
- A janela de arquivos avulsos **não volta** ao reabrir o app; os arquivos ficam em **Abrir recente**.

## Voltar para a pasta

A faixa tem **Abrir a pasta inteira no Verso**: depois de uma confirmação que diz o nome da pasta, ela abre como uma pasta normal — indexada, com árvore, busca, links e tudo o mais — numa janela sua. É a única porta de volta, e está sempre à vista.

## Fazer do Verso o app padrão de `.md`

O instalador registra o Verso como **um** app que abre `.md` e `.markdown`, e nunca o torna o padrão sozinho — isso é escolha sua. O gesto está em **Ajustes › Arquivos e links › Abrir arquivos .md com o Verso por padrão**:

- **macOS:** no Finder, selecione um arquivo `.md`, **Obter Informações › Abrir com › Verso › Alterar tudo**.
- **Windows:** **Ajustes › Aplicativos › Aplicativos padrão**, escolha o Verso para `.md` e `.markdown` (o botão nos Ajustes do Verso abre essa página).
- **Linux:** no gerenciador de arquivos, **Abrir com › Verso**, marcando como padrão; ou no terminal `xdg-mime default verso-app.desktop text/markdown`. Um AppImage só conta depois de integrado ao menu do sistema.

---

Siga para [UniVerso num Servidor Grátis da Oracle](/wiki/universo-num-servidor-gratis-da-oracle/), volte a [Rodando uma Mesa](/wiki/rodando-uma-mesa/), consulte a [Página Inicial](/wiki/bem-vindo-ao-verso/) ou explore o Tour do Verso.
