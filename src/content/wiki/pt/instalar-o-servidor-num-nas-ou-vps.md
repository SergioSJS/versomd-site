---
title: "Instalar o servidor num NAS ou VPS"
description: "O servidor num NAS (CasaOS, ZimaOS, outros com Docker) ou num VPS: o compose ou o instalador, o HTTPS, o endereço público, backups e os limites da lixeira."
order: 38
group: start
slug: "instalar-o-servidor-num-nas-ou-vps"
twin: "installing-the-server-on-a-nas-or-a-vps"
source: "demo-vault/38 - Instalar o servidor num NAS ou VPS.md"
updated: "2026-10-31"
---
Um **UniVerso** é o Verso num servidor seu ([Verso num Servidor](/wiki/verso-num-servidor/)). Ele precisa de uma máquina que fique ligada: um **NAS** no armário ou um servidor pequeno alugado, um **VPS**. Esta nota ajuda a escolher o caminho para a máquina que você tem e depois o percorre com comandos de verdade. É o mapa curto; quando um passo já tem explicação completa, o link leva até ela em vez de repetir: o passo a passo longo é a [Instalar o seu UniVerso, Passo a Passo](/wiki/instalar-o-seu-universo-passo-a-passo/), e o roteiro para uma máquina grátis da Oracle, só com o menu, é a [UniVerso num Servidor Grátis da Oracle](/wiki/universo-num-servidor-gratis-da-oracle/).

> **Aviso: O Verso está em teste**
>
> Enquanto o repositório do Verso é privado, baixar o programa (e a imagem do Docker) pede um **token** do GitHub que o mantenedor lhe dá, como a nota 24 explica. Sem esse acesso, ainda não dá para instalar. Os comandos abaixo são os do guia de instalação do projeto (`docs/reference/server-install.md`) e os do próprio script de instalação (`sh universo.sh --help`).

---

## 1. Qual caminho

| Você tem | Use | Onde |
|---|---|---|
| Um NAS com **ZimaOS ou CasaOS** | o arquivo compose, como app personalizado | seção 2 |
| Outro NAS que roda Docker | o mesmo arquivo compose | seção 2 |
| Um VPS ou máquina com **Ubuntu ou Debian** (ou Fedora, RHEL) | o instalador guiado `universo.sh`, ou o `.deb` | seção 3 |
| Uma máquina grátis da Oracle | o menu do instalador | [UniVerso num Servidor Grátis da Oracle](/wiki/universo-num-servidor-gratis-da-oracle/) |

Os dois caminhos terminam igual: `http://<endereço da máquina>:7340` abre o UniVerso, e a primeira conta que você cria é a do **admin**. O **HTTPS** é opcional e vem depois (seção 4).

---

## 2. Um NAS

### ZimaOS e CasaOS

1. **Entre no registro de imagens**, uma vez, no terminal do sistema (enquanto o repositório é privado): o passo do `docker login ghcr.io` da [nota 24, Docker, passo 2](/wiki/instalar-o-seu-universo-passo-a-passo/#3-caminho-2--docker), com o aviso sobre o `read:packages` do token.
2. No painel, instale um **app personalizado** e cole o arquivo compose da [nota 24, seção 4](/wiki/instalar-o-seu-universo-passo-a-passo/#4-casaos-e-zimaos). Não há nada para preencher. Instale.
3. Abra `http://<endereço do NAS>:7340` num navegador e entre pelo link de configuração que aparece no log do app (a seção 6 da nota 24 mostra as telas; o mesmo comando é `docker logs universo 2>&1 | grep setup`). O log escreve `localhost` no link: troque pelo endereço do NAS.

O que esse arquivo faz, em quatro linhas:

- **`/DATA/AppData/universo/data`** guarda as contas. Precisa ser um disco **dentro** do NAS, nunca um compartilhamento de rede (o SQLite pode corromper em NFS ou SMB).
- **`/DATA/Documents/Verso`** guarda as suas notas, como arquivos comuns. Esta pode ser qualquer pasta do NAS. Monte **só** a pasta feita para o Verso: o contêiner entrega ao usuário 1000 tudo o que é do root dentro do que você monta, então nunca um pai como o `/DATA` inteiro.
- **`mem_limit: 768m`** limita a memória do contêiner, o que serve a uma máquina de 1 GB. Se algo comer mais, o contêiner é encerrado e volta sozinho (`restart: unless-stopped`) em vez de derrubar o NAS. Num NAS com mais memória, suba para cerca de três quartos dela, por exemplo `mem_limit: 3g` numa máquina de 4 GB.
- **`ports: "7340:7340"`** publica a porta: HTTP simples na sua rede de casa, o que em casa não tem problema.

**Atualizar**, no CasaOS e no ZimaOS, é o botão de atualizar do app.

### Outro NAS que roda Docker

O arquivo é um compose comum, então qualquer painel que aceite um serve, ou você o roda à mão no terminal do NAS por SSH, na pasta onde o salvou como `compose.yaml`:

```bash
docker compose up -d
docker compose ps
docker logs -f universo        # Ctrl+C para sair
```

Troque os dois caminhos `source:` por pastas do seu NAS. O projeto não escreveu as telas do painel de nenhuma marca (Synology, QNAP e afins), então essa parte é a documentação do próprio painel. Duas coisas que o compose diz sobre NAS:

- Se as pastas do seu NAS pertencem a um usuário que não é o 1000, o arquivo tem uma linha `user:` comentada para isso (os números saem do `id` no NAS); os diretórios precisam então já estar graváveis por esse usuário. Se o servidor não consegue gravar, o console de administração e o log dizem `UniVerso cannot write to … sudo chown -R 1000:1000 <a pasta>`: rode esse comando.
- O anúncio que deixa o app de desktop achar o servidor sozinho não sai de um contêiner na rede padrão do Docker. Digite o endereço do servidor no app, como a nota 24 mostra na seção 6.

**Atualizar**, por SSH na mesma pasta (a imagem é a etiqueta `beta`, a versão de teste mais nova):

```bash
docker compose pull
docker compose up -d
```

---

## 3. Um VPS

Qualquer máquina Ubuntu ou Debian (Fedora e RHEL também) com systemd, 1 GB de memória e endereço público serve. O painel da nuvem dá o endereço e como entrar: `ssh seu-usuario@<endereço>`.

### O instalador guiado (o mais simples)

No servidor, como seu usuário comum (o script pede `sudo` quando precisa):

```bash
curl -fsSLO https://versomd.com/universo.sh
less universo.sh                                  # opcional: ler o que ele faz (q para sair)
read -rs GITHUB_TOKEN && export GITHUB_TOKEN      # cole o token, Enter; enquanto o repositório é privado
sh universo.sh
```

`sh universo.sh` sem comando abre um **menu** que diz cada passo antes de rodá-lo e pergunta se pode seguir. Toda opção também é um comando que você pode digitar: `sh universo.sh install`, `sh universo.sh https`, `sh universo.sh admin`, `sh universo.sh swap`, `sh universo.sh status`, e `sh universo.sh --help` lista todos. Em ordem:

1. **Instalar** (`sh universo.sh install`): baixa o pacote certo para esta máquina, confere a assinatura, instala, liga o serviço e mostra o link que cria o primeiro admin. Numa máquina de 2 GB ou menos sem swap, ele oferece antes um arquivo de swap (`sh universo.sh swap`), e vale aceitar.
2. **HTTPS** (seção 4).
3. **O primeiro admin** (`sh universo.sh admin`): pergunta o e-mail e a senha (12 caracteres ou mais), digitada duas vezes e oculta, e não a guarda em lugar nenhum.
4. **Abrir as portas** (`sh universo.sh firewall`) se quiser chegar de fora: abre a 80 e a 443. Uma nuvem tem um firewall próprio, fora da máquina, que se abre no console do provedor; a nota 34 mostra o da Oracle.

O pacote só escuta na própria máquina até você dizer o contrário. Para HTTP simples pela rede, ponha `VERSO_LISTEN=0.0.0.0:7340` em `/etc/universo/universo.env` e reinicie (`sudo systemctl restart universo`); com HTTPS na frente, deixe o padrão, e o proxy na mesma máquina chega até ele.

### Ou o `.deb`, à mão

Se prefere não rodar um script, baixe `universo-<versão>-amd64.deb` (ou `-arm64.deb`, se `uname -m` disser `aarch64`) da release e:

```bash
sudo apt install ./universo-<versão>-amd64.deb
sudoedit /etc/universo/universo.env               # opcional: o primeiro admin, VERSO_LISTEN
sudo systemctl enable --now universo
journalctl -u universo -f
```

O pacote **não** liga o serviço sozinho, por isso o `enable --now`. O link de configuração do admin está no log: `sudo journalctl -u universo | grep setup`.

### O limite de memória

O serviço é limitado a três quartos da memória da máquina (`MemoryMax=75%` na unit dele): se faltar, quem reinicia é o **servidor**, não a máquina. É o par, num VPS, dos 768 MB do contêiner num NAS. Para mudar, um drop-in sobrevive às atualizações:

```bash
sudo systemctl edit universo
# [Service]
# MemoryMax=2G
```

(`infinity` quer dizer sem limite.)

---

## 4. HTTPS

O HTTP simples funciona, mas qualquer pessoa na mesma rede lê a sua senha e as suas notas enquanto passam. O HTTPS também libera o que o navegador só dá a páginas seguras: modo offline, notificações do sistema e passkeys. Sem ele o Verso desliga essas coisas e avisa. A [nota 24, seção 5](/wiki/instalar-o-seu-universo-passo-a-passo/#5-https-opcional-para-liberar-offline-e-notificações) tem as escolhas em detalhe; a versão curta:

- **Num VPS, em um passo:** `sh universo.sh https`. Ele instala o Caddy do repositório assinado do próprio Caddy, pega o certificado e põe o endereço. O nome é um de três: **o seu domínio** (cujo registro `A` já precisa apontar para a máquina), **um nome grátis feito do endereço da máquina** (`150-230-1-2.sslip.io`, sem cadastro nenhum), ou **um nome grátis do DuckDNS** (`sh universo.sh https --duckdns NOME`; ele pede o seu token do DuckDNS, oculto, e mantém o nome apontando para a máquina se o endereço mudar). As portas 80 e 443 precisam estar abertas, aqui e na nuvem. Se falhar, diz o porquê em palavras (porta fechada, nome que não aponta para cá), e rodar de novo continua de onde parou.
- **Só para os seus aparelhos, num NAS ou num VPS:** Tailscale. `tailscale serve --bg 7340` no servidor, com cada aparelho que vai abrir o UniVerso tendo o app do Tailscale conectado.
- **Num NAS,** o `universo.sh` não é o caminho (ele é para máquinas com systemd e apt ou dnf). Use o Tailscale, ou um proxy reverso seu na frente da porta 7340.

Seja qual for, termine com a seção 5.

---

## 5. `VERSO_PUBLIC_URL`, e a página do endereço antigo

`VERSO_PUBLIC_URL` é o endereço único que as pessoas digitam, com `https://`, por exemplo `https://notas.exemplo.com`. Ponha em **uma linha**:

- num VPS, em `/etc/universo/universo.env` (abra com `sudoedit`; a variável já está lá, vazia: mude essa linha em vez de acrescentar outra), depois `sudo systemctl restart universo`. O `sh universo.sh https` escreve por você;
- num NAS ou em qualquer Docker, no `environment:` do compose, como `VERSO_PUBLIC_URL: "https://notas.exemplo.com"`, depois `docker compose up -d`.

Com ela definida, o servidor responde **só a esse nome**, e os links que ele faz (convites, links por e-mail) usam esse endereço. Isso tem um efeito visível: o endereço antigo, `http://<IP>:7340`, deixa de abrir o app. Em vez de um erro seco, o navegador recebe uma **página** que diz que o endereço mudou, com um link para o certo, no idioma do navegador primeiro e o outro embaixo. Não é uma falha; abra o link e guarde esse nos favoritos. O app de desktop, os scripts e a sincronização continuam recebendo a recusa técnica simples (HTTP 421), então, se um app disser que o servidor "não responde a esse nome", aponte-o para o endereço novo.

---

## 6. Backups e atualizações

**Fazer backup é copiar os dois diretórios**: as contas e as notas. As contas não existem em nenhum outro lugar.

Num VPS, com o instalador:

```bash
sh universo.sh backup                # salva em /var/backups/universo
sh universo.sh backup --keygen       # uma vez: a chave dos backups cifrados; guarde a secreta em outro lugar
sh universo.sh backup --encrypt      # a cada vez, cifrado
sh universo.sh schedule backup --keep 7    # um backup por dia, os 7 últimos guardados (desligado por padrão)
sh universo.sh schedule update             # uma atualização por semana (desligada por padrão)
sh universo.sh schedule status             # veja-os; "schedule off" desliga
```

O `backup` para o serviço por um instante. **Um backup na mesma máquina não sobrevive a perdê-la:** copie-o para fora com `scp` ou `rclone`. Para restaurar, `sh universo.sh restore <arquivo>` (com `--identity <arquivo da chave>` para um cifrado).

No Docker ou num NAS, o backup é o parar, copiar e ligar da [nota 24, seção 7](/wiki/instalar-o-seu-universo-passo-a-passo/#7-backup-e-atualização), e os snapshots ou o programa de backup do próprio NAS podem copiar as duas pastas.

**Atualizar**: faça o backup antes. Num VPS, `sh universo.sh update` (ajustes e dados ficam; `--version X` escolhe uma versão); no Docker, `docker compose pull` e `docker compose up -d`, como na seção 2. O servidor nunca se atualiza sozinho: o console de administração avisa quando existe uma versão nova.

---

## 7. A lixeira e os limites dela

O que alguém apaga no servidor vai para a lixeira da pasta (`.trash/`), e as versões anteriores que a gravação de um aparelho substituiu também. Dois ajustes impedem que ela encha o disco:

| Ajuste | Padrão | O que faz |
|---|---|---|
| `VERSO_TRASH_DAYS` | `30` | Dias que um arquivo apagado fica na lixeira; `0` os guarda para sempre. |
| `VERSO_TRASH_MAX` | `1GB` | O máximo que a lixeira de uma pasta pode guardar, como um tamanho (`500MB`, `2GB`); `0` ou `none` para sem teto. Passando dele, saem primeiro os itens **mais antigos**, seja qual for a idade. |

Nada fora de `.trash/` é tocado. A lixeira é varrida quando o servidor inicia e uma vez por dia. A página da pasta no console de administração define os dias de cada pasta, e o dono da pasta pode encurtá-los pela janela.

Para mudar um padrão, acrescente uma linha em `/etc/universo/universo.env` (VPS), por exemplo `VERSO_TRASH_MAX=2GB`, e reinicie; no Docker, ponha no `environment:` como `VERSO_TRASH_MAX: "2GB"` e `docker compose up -d`. Planeje o disco para **o dobro do tamanho das notas, mais 1 GB**, porque a lixeira guarda o que foi apagado.

---

## 8. Se algo der errado

O log quase sempre nomeia o problema:

```bash
sh universo.sh status                  # VPS: estado, versão, endereço, últimas linhas do log
sudo journalctl -u universo -n 50      # VPS
docker logs universo                   # Docker e NAS
sh universo.sh support                 # um relatório sem senha nem token, para colar ao pedir ajuda
```

- **Página "Este endereço mudou", ou erro 421:** a `VERSO_PUBLIC_URL` está definida e você abriu outro endereço (em geral o IP). Abra o que a página nomeia (seção 5).
- **O link de configuração abre "localhost recusou a conexão":** o log escreve `localhost` porque o servidor não conhece o próprio endereço. Troque pelo endereço da máquina, ou defina a `VERSO_PUBLIC_URL`.
- **Funciona na máquina mas não de fora:** o firewall (porta 7340 para HTTP simples; 80 e 443 com HTTPS), o firewall da própria nuvem e, no pacote, `VERSO_LISTEN=0.0.0.0:7340`.
- **O contêiner não para de reiniciar:** ele pode estar batendo no limite de memória. O `docker stats universo` mostra; suba o `mem_limit` se a máquina tem folga.
- **O serviço não inicia:** o log nomeia a linha (uma `VERSO_PUBLIC_URL` que não começa com `http://` ou `https://`, por exemplo). Corrija e reinicie.
- **Senha de admin perdida:** `sh universo.sh reset-admin voce@exemplo.com` num VPS; `docker exec universo universo admin reset voce@exemplo.com` no Docker. Ele imprime um link de uso único.

O resto da solução de problemas está no fim da [nota 24](/wiki/instalar-o-seu-universo-passo-a-passo/#se-algo-der-errado). Com o servidor no ar, conectar o app e o celular está na seção 6 dessa nota e em [Verso no Celular e no Tablet](/wiki/verso-no-celular-e-no-tablet/). Volte à [Compatibilidade com o Obsidian](/wiki/compatibilidade-com-o-obsidian/), à [Página Inicial](/wiki/bem-vindo-ao-verso/) ou abra o Tour do Verso.
