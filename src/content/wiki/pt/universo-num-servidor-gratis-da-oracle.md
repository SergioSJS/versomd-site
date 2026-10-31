---
title: "UniVerso num Servidor Grátis da Oracle"
description: "O roteiro para quem nunca montou um servidor: uma máquina grátis da Oracle, o menu do instalador, o HTTPS com um nome grátis, o primeiro admin e o celular."
order: 34
group: server
slug: "universo-num-servidor-gratis-da-oracle"
twin: "universo-on-a-free-oracle-server"
source: "demo-vault/34 - UniVerso num Servidor Grátis da Oracle.md"
updated: "2026-10-30"
---
Esta nota é o roteiro para quem **nunca montou um servidor** e quer o seu UniVerso funcionando no celular, de graça, em uns 30 minutos. Você vai criar uma máquina pequena na nuvem da Oracle, entrar nela, baixar o instalador e escolher as opções num **menu**: o instalador faz o resto (o endereço seguro, a conta de admin, o aviso do que está errado). Para os caminhos mais manuais (Docker, CasaOS, o seu domínio), a nota é a [Instalar o seu UniVerso, Passo a Passo](/wiki/instalar-o-seu-universo-passo-a-passo/); o que o UniVerso faz depois de pronto está na [Verso num Servidor](/wiki/verso-num-servidor/).

> **Aviso: Verso está em testes**
>
> Enquanto o repositório do Verso for privado, o instalador baixa o programa de lá com um **token** do GitHub que o mantenedor entrega a você (passo 5). E o que a Oracle dá de graça é decisão dela e pode mudar: confira a página "Always Free" dela antes. Os menus do console da Oracle abaixo foram escritos pela documentação dela e podem ter outro nome ou lugar; os comandos do instalador foram testados num Ubuntu 24.04 com systemd, mas não numa máquina da Oracle de verdade.

---

## 1. Criar a máquina

No console da Oracle Cloud: **Compute › Instances › Create instance**.

1. **Image**: *Canonical Ubuntu 24.04*.
2. **Shape**: *Change shape*. Duas servem, as duas marcadas "Always Free-eligible":
   - `VM.Standard.E2.1.Micro` (AMD, **1 GB** de memória): serve uma a três pessoas. O instalador cria um arquivo de *swap* para ela não ficar sem memória.
   - `VM.Standard.A1.Flex` (Ampere, ARM64): até 4 núcleos e 24 GB no total, de graça; é a confortável, mas a região às vezes diz que está sem capacidade — tente de novo mais tarde.
3. **Networking**: pode deixar a rede nova que ele propõe, com *Assign a public IPv4 address* marcado.
4. **SSH keys**: *Generate a key pair for me* e **baixe a chave privada** (um arquivo `.key`). Sem ela você não entra na máquina.
5. **Create**. Quando ficar verde (*Running*), anote o **Public IP address**.

## 2. Abrir as portas 80 e 443 na Oracle

A Oracle tem um firewall **fora** da máquina, que só deixa passar o SSH (porta 22). O endereço seguro (HTTPS) precisa da 80 e da 443. No console:

1. **Networking › Virtual cloud networks** › a sua rede (a VCN).
2. **Subnets** › a subnet pública › **Security** › **Default Security List**.
3. **Add Ingress Rules**: *Source CIDR* `0.0.0.0/0`, *IP Protocol* `TCP`, *Destination Port Range* `80,443` › **Add**.

A porta 7340, do UniVerso, **não** se abre: quem chega nela é o Caddy, dentro da máquina.

## 3. Entrar na máquina (SSH)

No terminal do seu computador (no Windows 10 e 11, o PowerShell serve), com o caminho da chave baixada e o IP anotado:

```bash
chmod 600 ~/Downloads/ssh-key-*.key        # só no macOS e no Linux
ssh -i ~/Downloads/ssh-key-XXXX.key ubuntu@<IP público>
```

`ubuntu` é o usuário das imagens Ubuntu da Oracle. Na primeira vez ele pergunta se confia na máquina: digite `yes`.

## 4. Baixar o instalador e abrir o menu

```bash
curl -fsSLO https://versomd.com/universo.sh
sh universo.sh
```

Aparece o **menu do UniVerso**. Se a máquina tiver o `whiptail` (o Ubuntu tem), navegue com as **setas** e **Enter**; senão, digite o número da opção. Antes de cada passo ele explica o que vai fazer e pergunta se pode continuar. Quer ler o instalador antes? `less universo.sh` (e `q` para sair).

> **Dica: Tudo do menu também é um comando**
>
> Cada opção é um comando que você pode digitar direto: `sh universo.sh install`, `sh universo.sh https`, `sh universo.sh admin`… `sh universo.sh --help` lista todos.

## 5. Opção 1: instalar

Escolha **Instalar o UniVerso**. Em uma máquina de 1 GB ele avisa que não há *swap* e oferece criar um arquivo (1 GB, que continua depois de reiniciar): responda **s**. Enquanto o repositório é privado, ele pede o token do GitHub; o menu explica como criar um, e você cola sem aparecer na tela. Ele baixa o pacote, **confere a assinatura**, instala e liga o serviço. Ao fim, ele reconhece a Oracle e **repete os passos da seção 2** — o segundo firewall, o da própria máquina, se resolve na opção 9 do menu (**Abrir as portas 80 e 443 nesta máquina**): escolha-a agora e responda **s** a tudo.

## 6. Opção 2: HTTPS com um nome grátis

Escolha **HTTPS**. Ele pergunta que endereço você quer:

1. **Um nome grátis feito do endereço da máquina** (sslip.io) — recomendado para começar: nada a comprar nem cadastrar. O nome é o IP com traços, por exemplo `150-230-1-2.sslip.io`.
2. O seu **próprio domínio** (o registro DNS dele já tem que apontar para a máquina).
3. Um nome grátis do **DuckDNS** (conta e token em duckdns.org; continua valendo se o IP mudar).

Ele instala o **Caddy** pelo repositório oficial e assinado do próprio Caddy, escreve o site, espera o certificado do Let's Encrypt (até 2 minutos), grava o endereço nas configurações e confere que `https://…` responde. Se algo falhar, ele **diz em palavras** o que é: porta 80 ou 443 fechada, o nome que não aponta para a máquina, ou o limite de pedidos do Let's Encrypt (e, no caso do sslip.io, oferece tentar o nip.io).

## 7. Opção 3: o primeiro admin

Escolha **Criar o primeiro admin**. Digite o **e-mail** e a **senha** (12 caracteres ou mais, **duas vezes**; nada aparece enquanto você digita). Ele cria a conta e imprime o endereço para entrar. A senha passa por um arquivo que é apagado logo depois e **não fica em lugar nenhum**.

## 8. Abrir no celular

No navegador do celular, abra o endereço `https://…` que o instalador imprimiu, entre com o e-mail e a senha — e pronto: o UniVerso no bolso. Com HTTPS, o modo offline e as notificações funcionam ([Verso no Celular e no Tablet](/wiki/verso-no-celular-e-no-tablet/)). No app do computador: Ajustes › Servidores, com o mesmo endereço ([conectar o app](/wiki/instalar-o-seu-universo-passo-a-passo/#6-o-primeiro-admin-e-conectar-o-app)).

---

## Depois: cuidar do servidor

- **Backup** (opção 4): uma cópia em `/var/backups/universo`. Ela fica **na mesma máquina**: copie para fora (`scp`) também.
- **Automático, desligado por padrão** (opção 10): um backup por dia (as últimas 7 cópias ficam) e uma atualização por semana. `sh universo.sh schedule status` mostra; `sh universo.sh schedule off` desliga.
- **Atualizar** (opção 5) e **Estado** (opção 6).
- **Pedir ajuda** (opção 7): `sh universo.sh support` junta um relatório — versões, memória, log, configurações — **sem nenhuma senha ou token** (as configurações secretas aparecem sem o valor) e o salva num arquivo para você colar. Leia antes de colar: ele traz o nome ou endereço público da sua máquina.

> **Nota: A Oracle pode tomar a máquina de volta**
>
> Uma máquina grátis que a Oracle julga parada (pouco uso de CPU, rede e memória por sete dias) pode ser recuperada por ela. Um servidor de notas para poucas pessoas pode parecer parado: **guarde backups fora da máquina**.

Volte à [Abrir um Arquivo Avulso](/wiki/abrir-um-arquivo-avulso/). Para ver o que fazer com o servidor no ar, vá à [Verso num Servidor](/wiki/verso-num-servidor/); para a mesa de jogo, [Rodando uma Mesa](/wiki/rodando-uma-mesa/). Volte à [Página Inicial](/wiki/bem-vindo-ao-verso/) ou abra o Tour do Verso.
