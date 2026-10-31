---
title: "Instalar o seu UniVerso, Passo a Passo"
description: "Do zero a um servidor seu, para quem nunca montou um: o compose ou o script de instalação, o primeiro admin, o HTTPS (opcional, para o offline e as notificações), o backup."
order: 24
group: server
slug: "instalar-o-seu-universo-passo-a-passo"
twin: "installing-your-universo-step-by-step"
source: "demo-vault/24 - Instalar o seu UniVerso, Passo a Passo.md"
updated: "2026-10-15"
---
Esta nota leva você, sem pressa, de uma máquina vazia a um **UniVerso** funcionando: o Verso num servidor seu, aberto no navegador do computador, do celular e do tablet. O que o UniVerso faz depois de instalado está em [Verso num Servidor](/wiki/verso-num-servidor/); aqui é só o caminho até lá. Não precisa ser programador: precisa copiar e colar com atenção.

> **Aviso: O Verso está em testes**
>
> Ainda **não há um download público**: o repositório do Verso é privado enquanto o app amadurece, e os comandos abaixo baixam o programa de lá com um **token** do GitHub que o mantenedor lhe dá. Sem esse acesso, ainda não dá para instalar. Os comandos são os do guia de referência do projeto (`docs/reference/server-hands-on.md`), escritos a partir da versão **0.8.0-beta.1** e conferidos passo a passo, em 2026-10-15, numa máquina Ubuntu 26.04 de 1 núcleo e 1 GB com a **0.8.2-beta.1** (o Caminho 1 inteiro; o Caminho 2 com a imagem montada à mão). O que ficou sem rodar num navegador de verdade: o HTTPS com nome ou Tailscale, o app de desktop e o celular. Se algo não bater, vá a [Se algo der errado](#se-algo-der-errado) e conte ao mantenedor.

> **Dica: Nunca montou um servidor?**
>
> A nota [UniVerso num Servidor Grátis da Oracle](/wiki/universo-num-servidor-gratis-da-oracle/) é o roteiro com o **menu do instalador** (`sh universo.sh`): HTTPS com um nome grátis e o primeiro admin em poucos passos, numa máquina grátis da Oracle. O que está abaixo é o caminho manual.

> **Nota: O caminho mais curto**
>
> Cole o arquivo compose, abra `http://<IP da máquina>:7340` e use o link de configuração que aparece no log. **Sem HTTPS, sem nome, sem proxy.** O HTTPS é um passo opcional, depois, para liberar o modo offline e as notificações (seção 5). Isso vale a partir da versão que vem depois da 0.8.2-beta.1; as anteriores recusam entrar por HTTP vindo de outra máquina.

---

## 1. O que você precisa

- **Uma máquina que fica ligada o tempo todo.** Pode ser uma VPS pequena na nuvem (1 GB de memória basta), um Raspberry Pi (ARM64), um NAS com Docker, CasaOS ou ZimaOS, ou um PC velho com Linux. O seu notebook do dia a dia não serve: quando ele dorme, o servidor some.
- **Linux.** Os dois caminhos abaixo supõem Linux: Ubuntu ou Debian (o mais fácil), ou Fedora, RHEL, Oracle Linux.
- **Saber o tipo da máquina**, x64 ou ARM64. No terminal da máquina:

  ```bash
  uname -m
  ```

  `x86_64` é x64 (a maioria dos PCs e VPS); `aarch64` é ARM64 (Raspberry Pi 4, a Ampere da Oracle). O instalador escolhe o arquivo certo sozinho; você só precisa saber, caso algo peça.
- **Um terminal na máquina**, normalmente por SSH, a partir do seu computador: `ssh seu-usuario@<IP da máquina>`. O IP e o usuário vêm de quem lhe deu a máquina (o painel da nuvem, o roteador, o NAS).
- **O token do GitHub**, enquanto o Verso está em testes (veja o aviso acima).
- **Nada mais é obrigatório.** Um **nome** (domínio) e o HTTPS são opcionais, para depois: veja [5. HTTPS (opcional), para liberar offline e notificações](#5-https-opcional-para-liberar-offline-e-notificações).

O UniVerso é **livre e seu**: roda numa máquina sua, as notas continuam arquivos Markdown comuns numa pasta dela, e não há conta nem assinatura de ninguém no meio.

---

## 2. Caminho 1 — o script de instalação (o mais simples)

Serve para uma máquina Linux com `apt` ou `dnf`, com ou sem Docker. No servidor, com o seu usuário comum (o script pede `sudo` quando precisar):

```bash
V=0.8.2-beta.1
curl -fsSLO https://versomd.com/universo.sh
less universo.sh                          # opcional: ler o que ele faz (q para sair)
read -rs GITHUB_TOKEN && export GITHUB_TOKEN   # cole o token, Enter; enquanto o repositório é privado
sh universo.sh install --version "$V"
```

O que cada linha faz:

1. `V=...` guarda a versão numa variável, para uma atualização depois mudar uma linha só.
2. `curl` baixa o script `universo.sh`.
3. `read -rs` pede o token sem mostrá-lo na tela; cole e aperte Enter. Um token *fine-grained* do GitHub com **Contents: Read-only** no repositório; sem ele, o script explica como criar.
4. `sh universo.sh install` baixa o pacote desta máquina, confere a assinatura, instala, liga o serviço e espera ele responder. O script pergunta um endereço `https://` opcional (o `--url`): aperte Enter, o HTTP simples funciona sem ele; com HTTPS na frente você o define depois.

> **Importante: Guarde a saída do script**
>
> No fim ele imprime "O UniVerso está rodando. Agora:" (num sistema em inglês: `UniVerso is running. Next:`; o script fala a língua do sistema) com o **link que cria o primeiro admin**. Copie-o para um lugar seguro antes de fechar o terminal.

Para conferir que está de pé, agora e depois de qualquer reboot:

```bash
sh universo.sh status
```

Ele diz `Serviço: active, enabled na partida` (em inglês, `Service: active, enabled at boot`), a versão, o endereço em que escuta e as últimas linhas do log. O serviço volta sozinho depois de um reboot.

> **Nota: Existe também a instalação à mão**
>
> O guia tem a instalação do pacote (`.deb` ou `.rpm`) com a assinatura conferida por você, sem o script. É mais trabalho e dá o mesmo resultado; fica para quem quiser.

Para abrir de outro aparelho da rede, o pacote precisa escutar fora da máquina e a porta 7340 precisa estar aberta no firewall: ponha `VERSO_LISTEN=0.0.0.0:7340` no `/etc/universo/universo.env` (`sudoedit /etc/universo/universo.env`), rode `sudo ufw allow 7340/tcp` se usar o ufw, e `sudo systemctl restart universo`. Depois abra `http://<IP da máquina>:7340` e use o link de configuração (seção 6). O HTTPS, para liberar o modo offline e as notificações, é a seção 5.

---

## 3. Caminho 2 — Docker

Para uma máquina onde o Docker já roda. Os dados ficam em dois diretórios seus; o contêiner pode ser trocado sem perdê-los.

**Passo 0: o Docker e o Compose.** Confira que os dois respondem (uma máquina nova de nuvem não os traz):

```bash
docker --version
docker compose version
```

Se der `command not found`, no Ubuntu instale os dois do repositório da distribuição (no Debian e em outras distribuições, siga <https://docs.docker.com/engine/install/>):

```bash
sudo apt install docker.io docker-compose-v2
systemctl is-enabled docker          # deve dizer enabled
```

Seu usuário não fica no grupo `docker`: ponha `sudo` antes de todo `docker` e `docker compose` abaixo.

**Passo 1: os diretórios.** O servidor só escreve em dois diretórios seus, e basta criá-los. Não precisa dar dono nem permissão: o contêiner começa como administrador só o tempo de passar ao usuário 1000 o que é do root nesses dois diretórios, e desce a 1000 sem nenhum privilégio antes de o servidor rodar. **Monte só a pasta destinada ao Verso**, nunca um pai como o `/DATA` inteiro do ZimaOS: o contêiner passa ao usuário 1000 tudo que é do root dentro do que você montar, inclusive os arquivos de outros apps.

```bash
sudo mkdir -p /srv/universo/data /srv/universo/folders
```

**Passo 2: entrar no registro de imagens** (uma vez; enquanto o repositório é privado, com um token *classic* do GitHub que tenha `read:packages`):

```bash
echo "$TOKEN" | sudo docker login ghcr.io -u <seu-usuario-github> --password-stdin
```

O `Login Succeeded` **não prova** que o token serve: o registro só o confere ao puxar a imagem. Se o `docker compose up` do passo 4 responder `403 Forbidden`, o token não tem `read:packages` (um token com só `repo` ou Contents não basta). O Docker guarda o token sem criptografia em `/root/.docker/config.json`; quando não precisar mais puxar versões novas, `sudo docker logout ghcr.io` o apaga.

**Passo 3: a versão e o arquivo compose.**

```bash
V=0.8.2-beta.1
echo "V=$V" | sudo tee /srv/universo/.env
sudoedit /srv/universo/compose.yaml
```

Cole isto no `compose.yaml`; não há nada para preencher:

```yaml
name: universo
services:
  universo:
    image: ghcr.io/sergiosjs/universo:${V}        # a versão do .env
    container_name: universo
    restart: unless-stopped
    read_only: true
    tmpfs:
      - /tmp
    cap_drop:
      - ALL
    cap_add:                  # só para passar os diretórios ao usuário 1000 ao ligar
      - CHOWN
      - SETUID
      - SETGID
    security_opt:
      - no-new-privileges:true
    ports:
      - "7340:7340"                                 # todos os endereços: HTTP simples pela rede
    volumes:
      - type: bind
        source: /srv/universo/data
        target: /data
      - type: bind
        source: /srv/universo/folders
        target: /folders
    environment:
      VERSO_ADMIN_EMAIL: ""                         # vazio: o log imprime um link de configuração
      VERSO_ADMIN_PASSWORD: ""
      # Opcional, só com HTTPS na frente (seção 5):
      # VERSO_PUBLIC_URL: "https://notas.exemplo.com"
```

**Passo 4: ligar e ver o log.**

```bash
cd /srv/universo
docker compose up -d
docker compose ps
docker logs -f universo        # Ctrl+C para sair
```

Abra `http://<IP da máquina>:7340` no navegador e use o link de configuração do log (seção 6). O contêiner não tem como saber o IP da máquina hospedeira, então o log imprime o link com `localhost`: troque `localhost` pelo IP da máquina ao abrir de outro computador. `restart: unless-stopped` traz o contêiner de volta depois de uma queda e de um reboot, desde que o próprio Docker suba no boot (`systemctl is-enabled docker` deve dizer `enabled`).

---

## 4. CasaOS e ZimaOS

No painel do CasaOS ou do ZimaOS, instale um **app personalizado** colando o arquivo compose abaixo e clique em instalar: **não há nada para preencher**. É o `packaging/server/docker-compose.yml` do projeto, sem os metadados do painel. Antes, uma vez, no terminal do sistema, entre no registro (o `docker login` do passo 2 do Caminho 2).

```yaml
name: universo
services:
  universo:
    image: ghcr.io/sergiosjs/universo:beta
    container_name: universo
    restart: unless-stopped
    read_only: true
    tmpfs:
      - /tmp
    cap_drop:
      - ALL
    cap_add:                  # só para passar os diretórios ao usuário 1000 ao ligar
      - CHOWN
      - SETUID
      - SETGID
    security_opt:
      - no-new-privileges:true
    ports:
      - "7340:7340"
    volumes:
      - type: bind
        source: /DATA/AppData/universo/data
        target: /data
      - type: bind
        source: /DATA/Documents/Verso
        target: /folders
    environment:
      VERSO_ADMIN_EMAIL: ""     # vazio: o log mostra um link de configuração
      VERSO_ADMIN_PASSWORD: ""
      # Opcionais, só com HTTPS na frente (seção 5):
      # VERSO_PUBLIC_URL: "https://universo.sua-tailnet.ts.net"
      # VERSO_TRUSTED_PROXY: ""
```

`/DATA/AppData/universo/data` guarda as contas e precisa ficar num disco local; `/DATA/Documents/Verso` guarda as notas e pode ficar num NAS (troque pelo caminho que quiser). Depois de instalado, abra `http://<IP da caixa>:7340` de qualquer aparelho da casa e use o link de configuração que o log do app mostra (seção 6). Um proxy no próprio CasaOS ou na sua rede é aceito sem o `VERSO_TRUSTED_PROXY`: nada a descobrir.

---

## 5. HTTPS (opcional), para liberar offline e notificações

> **Informação: O HTTP simples funciona**
>
> `http://<IP>:7340` abre o UniVerso e deixa entrar, de qualquer aparelho da rede. **O preço:** sem HTTPS, quem está na mesma rede consegue ler a sua senha e as suas notas enquanto passam. Em casa isso serve; num Wi-Fi público, não use assim. O HTTPS também **libera** o que o navegador só dá a páginas seguras: o **modo offline**, as **notificações do sistema** e as **passkeys**. Sem ele, o Verso os desliga e avisa (uma linha discreta nos Ajustes e um aviso por sessão, com o link "Como ligar o HTTPS"). Quando quiser, escolha **um** dos três jeitos abaixo.

Com o HTTPS na frente, o UniVerso só precisa do `VERSO_PUBLIC_URL` com o endereço `https://`: o proxy ao lado dele, na mesma máquina ou na sua rede, é aceito sem mais nada. Atenção: definido, o `VERSO_PUBLIC_URL` faz o UniVerso responder **só a esse nome**; o `http://<IP>:7340` deixa de abrir.

### Só para os seus aparelhos: Tailscale

O jeito mais fácil para o seu celular e o seu iPad. O Tailscale cria uma rede privada entre os seus aparelhos e entrega o HTTPS pronto; cada aparelho que vai abrir o UniVerso precisa do aplicativo do Tailscale instalado e conectado, o computador do app de desktop também. No servidor:

```bash
tailscale serve --bg 7340
```

Depois, só o `VERSO_PUBLIC_URL` (no `/etc/universo/universo.env` do Caminho 1, ou no compose do Caminho 2 ou do CasaOS):

```
VERSO_PUBLIC_URL=https://<máquina>.<tailnet>.ts.net
```

com o **HTTPS ligado para a sua rede** no console de administração do Tailscale. As opções do Tailscale mudam de versão em versão: `tailscale serve --help` é a referência. Para aplicar a mudança, reinicie o UniVerso (`sudo systemctl restart universo`, ou `docker compose up -d` na pasta `/srv/universo`).

### Sem nome e sem Tailscale: um túnel SSH, ou o próprio HTTP

Para ver o UniVerso só do seu computador, sem abrir porta alguma, e com o pacote escutando só na própria máquina (o padrão do Caminho 1), um túnel SSH basta. No seu computador:

```bash
ssh -L 7340:127.0.0.1:7340 seu-usuario@<IP da máquina>
```

Deixe esse terminal aberto e abra `http://localhost:7340` no navegador **do seu computador**; o link de configuração do admin (passo 6) é o do log, com `http://localhost:7340` no lugar do nome. `localhost` conta como um endereço seguro para o navegador, então o modo offline e as notificações funcionam ali, e só você chega lá. Para os outros aparelhos da casa, o HTTP simples (`http://<IP>:7340`) já basta.

### Para outras pessoas: um nome e o Caddy

1. **O nome.** No seu provedor de DNS, um registro `A` de um nome seu para o IP da máquina: `notas.exemplo.com` → `<IP>`.
2. **O Caddy**, um programa que entrega o HTTPS e obtém o certificado sozinho. No Ubuntu ou Debian:

   ```bash
   sudo apt install caddy
   sudoedit /etc/caddy/Caddyfile
   sudo systemctl reload caddy
   ```

   No Caddyfile, este bloco (se a máquina já tem um Caddy servindo outra coisa, **acrescente** o bloco abaixo do que existe, sem apagar nada):

   ```
   notas.exemplo.com {
       reverse_proxy 127.0.0.1:7340
   }
   ```

3. **As portas 80 e 443 abertas** na máquina e, se for nuvem, também no firewall dela. O Caddy precisa da 80 para obter o certificado. Na máquina:

   ```bash
   sh universo.sh firewall
   ```

   e, à mão, com o ufw:

   ```bash
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   ```

   **A nuvem tem um firewall próprio**, fora da máquina, que se abre no console do provedor (na Oracle Cloud, *Security Lists*, *Add Ingress Rules*, TCP, portas `80,443`). A porta 7340 fica fechada.
4. **O UniVerso informado do nome.** Uma linha, no `/etc/universo/universo.env` (abra com `sudoedit /etc/universo/universo.env`) ou no compose:

   ```
   VERSO_PUBLIC_URL=https://notas.exemplo.com
   ```

   O `universo.env` já traz essa variável (vazia): troque o valor na linha que existe, em vez de acrescentar outra. Se repetir a linha, vale a última, mas o arquivo fica confuso. Se o Caddy está nesta mesma máquina, deixe `VERSO_LISTEN=127.0.0.1:7340` (só ele chega à porta). Reinicie: `sudo systemctl restart universo` (ou `docker compose up -d`).

Pronto: `https://notas.exemplo.com` abre a página de entrada do UniVerso, e o modo offline e as notificações podem ser ligados. Outros proxies (nginx, Cloudflare) existem; o guia os descreve.

---

## 6. O primeiro admin, e conectar o app

Ninguém se cadastra sozinho: a primeira conta é a do **admin**. Com `VERSO_ADMIN_EMAIL` e `VERSO_ADMIN_PASSWORD` vazios, o servidor imprime no log, ao subir, um **link de configuração** que vale uma hora e uma vez. Para achá-lo:

```bash
sudo journalctl -u universo | grep setup     # o pacote (Caminho 1)
docker logs universo 2>&1 | grep setup       # Docker (Caminho 2 e CasaOS)
```

O link é `http://<IP da máquina>:7340/setup?token=…` (o log escreve `localhost` porque o contêiner não tem como saber o IP da máquina hospedeira; troque `localhost` pelo endereço da máquina ao abrir de outro computador), ou o do `VERSO_PUBLIC_URL` se você definiu um. Venceu ou se perdeu? Reinicie o serviço (`sudo systemctl restart universo` ou `docker compose restart`) e sai outro, enquanto não existir nenhuma conta.

Na página **Primeiro acesso**, preencha **E-mail**, **Nome**, **Senha nova** (12 caracteres no mínimo) e **Idioma**, e clique em **Criar conta**. Dali em diante você entra com esse e-mail e essa senha, e o console de administração (`/admin`) é seu.

![servidor-primeiro-acesso](/wiki-assets/servidor-primeiro-acesso.png)

### No computador, com o app

No app Verso, abra os ajustes (**Verso › Ajustes…**, ⌘, no macOS; **Ctrl+,** no Windows e no Linux) e vá a **Servidores**.

> **Dica: O caminho mais curto: deixe o app achar o servidor**
>
> Com o computador na **mesma rede** do servidor, o UniVerso aparece sozinho em **Encontrados nesta rede**, com o endereço que ele vai usar. Clique em **Conectar** na linha dele e pule para o passo 3 abaixo: não precisa digitar nada. Qualquer aparelho da rede pode se anunciar, então confira o endereço antes de clicar. Se o servidor tem o `VERSO_PUBLIC_URL` definido, a linha mostra esse endereço; um servidor com HTTPS próprio e sem `VERSO_PUBLIC_URL` aparece sem botão, dizendo para defini-lo. Se a lista ficar vazia, siga os passos normalmente: digitar o endereço sempre funciona. No Docker, o anúncio só sai do contêiner com rede em modo host (`network_mode: host`, sem o bloco `ports:`); o compose da seção 4 usa a rede padrão, então ali você digita o endereço.

1. Em **Endereço do servidor**, digite `http://<IP da máquina>:7340` (ou, com HTTPS na frente, `https://notas.exemplo.com`). O app aceita os dois.
2. Clique em **Conectar**. O app copia um código (`XXXX-XXXX`) e abre a página do servidor no navegador.
3. Entre com a sua conta se o navegador pedir; na página **Conectar um aplicativo**, cole o código em **Código do aplicativo** e clique em **Continuar**.
4. Clique em **Aprovar este aparelho**. A página diz *Pronto. Pode voltar ao aplicativo.*

![servidor-aprovar-aparelho](/wiki-assets/servidor-aprovar-aparelho.png)

O app passa a dizer *Conectado como* o seu nome. Um servidor novo ainda não tem pastas, e **não há nada a criar antes**: com a pasta que você quer guardar aberta no app, clique em **Sincronizar ‘sua pasta’**. O app faz a pasta no servidor, com o mesmo nome, e já sincroniza; os seus arquivos ficam como estão e nenhum é apagado. Se o servidor já tem pastas, elas aparecem na lista, cada uma com **Abrir aqui** e **Sincronizar** (para ligar a sua a uma que já existe). O código vale 10 minutos; passou, clique em **Conectar** de novo.

![servidor-app-conectado](/wiki-assets/servidor-app-conectado.png)

### No celular e no tablet

Não há app a instalar: abra `http://<IP da máquina>:7340` (ou o endereço `https://`, se houver) no navegador do celular e entre com o e-mail e a senha. (Com o Tailscale, o celular precisa estar com ele conectado.) Sem HTTPS, o modo offline fica desligado e a janela avisa. Como a janela se comporta numa tela pequena está em [Verso no Celular e no Tablet](/wiki/verso-no-celular-e-no-tablet/).

Para uma segunda pessoa, o admin sincroniza (ou cria) a pasta, depois um convite no console (`/admin/invitations`) e manda o link: [as contas e os convites](/wiki/verso-num-servidor/#o-primeiro-admin-e-as-contas).

---

## 7. Backup e atualização

**Backup**, com o pacote do Caminho 1: um comando guarda as contas, as notas e as configurações em `/var/backups/universo`; o outro par leva uma cópia para o seu computador (o arquivo é do root, então antes é copiado para a pasta pessoal; `ubuntu` é o usuário das imagens de nuvem do Ubuntu, troque pelo seu):

```bash
sh universo.sh backup        # a última linha imprime "Backup: /var/backups/universo/universo-backup-….tar.gz"
sudo install -o ubuntu -m 600 /var/backups/universo/<o arquivo que ele imprimiu> ~/   # no servidor
scp 'ubuntu@<IP do servidor>:universo-backup-*.tar.gz' .                              # no seu computador
```

Copie o nome que o comando imprimiu (ou veja com `ls /var/backups/universo`): numa cópia mais nova do script ele traz no fim uma parte aleatória (`-a1b2c3`), numa mais antiga termina na hora.

O guia também ensina a **criptografar** o backup (`backup --keygen` e `backup --encrypt`) antes de ele sair da máquina, numa versão mais nova do script.

Com **Docker**, pare o servidor, copie os dois diretórios e ligue de novo. O `umask 077` e o `>` fazem o arquivo nascer seu e legível só por você (ele guarda as contas e as senhas em hash; sem isso o `tar` com `sudo` o deixa do root e aberto a qualquer usuário da máquina):

```bash
cd /srv/universo
sudo docker compose stop
( umask 077; sudo tar -czpf - -C /srv universo > ~/universo-backup-$(date +%Y%m%d-%H%M%S).tar.gz )
sudo docker compose start
```

**Atualizar**, com o pacote: faça o backup acima e rode (sem `--version` ele pega a mais recente; com `--version` você escolhe uma). Configurações e dados ficam:

```bash
sh universo.sh update
```

Com **Docker**, troque a versão no `.env` e recrie o contêiner (os dados ficam nos dois diretórios):

```bash
cd /srv/universo
echo "V=0.8.2-beta.1" | sudo tee .env   # troque pelo número da versão nova
docker compose pull
docker compose up -d
```

---

## Se algo der errado

**Primeiro, o log**, que quase sempre nomeia o problema:

```bash
sh universo.sh status
sudo journalctl -u universo -n 50        # o pacote
docker logs universo                     # Docker
```

**Os erros mais comuns:**

- **O serviço não sobe.** O log nomeia a linha: um `VERSO_PUBLIC_URL` que não é `http(s)://…`, `VERSO_ADMIN_EMAIL is set without VERSO_ADMIN_PASSWORD`. Corrija no `/etc/universo/universo.env` (ou no compose) e reinicie. Com Docker, um diretório que é de outra pessoa (um usuário do NAS) o contêiner não toca: o console de administração e o log dizem `O UniVerso não pode escrever em … sudo chown -R 1000:1000 <pasta do host>`; rode esse comando.
- **A página mostra "Conexão sem HTTPS"**: não é erro. Você abriu por `http://`, e o UniVerso funciona, só deixa desligados o modo offline, as notificações e as passkeys. Clique em "Como ligar o HTTPS" (seção 5).
- **A página diz "does not answer to that name"** (erro 421): o `VERSO_PUBLIC_URL` está definido e você abriu por um endereço que não é o dele (muitas vezes o IP). Use o nome dele; ou, sem `VERSO_PUBLIC_URL`, você digitou um nome público, que só é aceito com ele: use o IP, ou defina o `VERSO_PUBLIC_URL`. Os links por e-mail (entrar por link, "esqueci a senha") também só existem com ele definido.
- **O link de convite (ou de redefinição de senha) abre "localhost recusou a conexão".** Sem o `VERSO_PUBLIC_URL` o servidor não sabe por qual endereço as pessoas chegam a ele: o link de convite da mesa abre no endereço pelo qual você mesmo o usa, mas o que sai por e-mail (redefinir senha) e o link do log de início trazem `localhost`. Se as pessoas chegam ao servidor por outro endereço (o IP da rede, um nome, um túnel), defina o `VERSO_PUBLIC_URL` com esse endereço e reinicie; o log avisa disso ao iniciar.
- **O proxy responde 502**: o UniVerso não está rodando, ou escuta noutra porta que não a do bloco do Caddy (`sh universo.sh status`, linha "Escuta em").
- **Dois avisos no log que não são erro.** `update check: the release feed answered 404: a private repository needs VERSO_UPDATE_TOKEN`: enquanto o repositório é privado, a verificação de versão nova não o enxerga; o servidor funciona. E `plain HTTP works; offline, notifications and the like need HTTPS`: só informa que o servidor está sem TLS próprio.
- **A porta 7340 está ocupada**: o log diz `Address already in use`. Dê outra ao UniVerso (`VERSO_LISTEN=0.0.0.0:7341`, ou `127.0.0.1:7341` atrás de um proxy) e a mesma porta ao proxy (`reverse_proxy 127.0.0.1:7341`).
- **Ninguém de fora chega, mas na máquina funciona**: o **firewall** (a porta 7340 para o HTTP simples; 80 e 443 para o Caddy), e, no pacote, o `VERSO_LISTEN=0.0.0.0:7340`. Confira o `sh universo.sh firewall` e a regra de entrada da nuvem.
- **A senha do admin se perdeu.** Na máquina:

  ```bash
  sh universo.sh reset-admin voce@exemplo.com                # o pacote
  docker exec universo universo admin reset voce@exemplo.com # Docker
  ```

  Ele imprime um link de uso único; abra-o e escolha uma senha nova.
- **As escritas estão lentas, mas as leituras não.** Em geral é o disco: o servidor grava com segurança antes de responder, e num disco que leva uns 26 ms por escrita síncrona (medido) o teto é de umas 15 escritas por segundo, fosse qual fosse o número de aparelhos. Para verificar o disco, na pasta dos dados: `dd if=/dev/zero of=./disk-check bs=4k count=200 oflag=dsync; rm ./disk-check`, e divida o tempo total por 200. Abaixo de uns 2 ms é bom; de 5 a 10 ms basta para uma casa; 25 ms ou mais pede um SSD local para os dados (as pastas das notas podem ficar num NAS).
- **Nada responde depois de um reboot**: `systemctl is-enabled universo` precisa dizer `enabled` (Docker: `systemctl is-enabled docker`, depois `docker compose ps` em `/srv/universo`); o proxy, `systemctl status caddy`. Uma máquina de nuvem recriada pode ter outro IP, e o registro DNS precisa acompanhar.

Mais fundo: o manual completo do projeto é o `docs/reference/server-install.md` e o guia deste passo a passo é o `docs/reference/server-hands-on.md`, ambos no repositório do Verso.

---

Para o que fazer com o servidor no ar, volte a [Verso num Servidor](/wiki/verso-num-servidor/); para o celular, [Verso no Celular e no Tablet](/wiki/verso-no-celular-e-no-tablet/). A próxima nota, [Dados e Tabelas Sorteadas](/wiki/dados-e-tabelas-sorteadas/), rola dados e sorteia em tabelas — numa mesa com o seu UniVerso, todos veem a mesma rolagem. Volte para a [Página Inicial](/wiki/bem-vindo-ao-verso/) ou abra o Tour do Verso.
