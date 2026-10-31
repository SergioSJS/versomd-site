---
title: "UniVerso on a Free Oracle Server"
description: "The route for someone who has never set up a server: a free Oracle machine, the installer's menu, HTTPS with a free name, the first admin and the phone."
order: 34
group: server
slug: "universo-on-a-free-oracle-server"
twin: "universo-num-servidor-gratis-da-oracle"
source: "demo-vault-en/34 - UniVerso on a Free Oracle Server.md"
updated: "2026-10-30"
---
This note is the route for someone who has **never set up a server** and wants their own UniVerso working on the phone, for free, in about 30 minutes. You will make a small machine in Oracle's cloud, get into it, download the installer and pick options from a **menu**: the installer does the rest (the safe address, the admin account, saying what is wrong in plain words). For the more manual roads (Docker, CasaOS, your own domain), the note is [Installing Your UniVerso, Step by Step](/en/wiki/installing-your-universo-step-by-step/); what the UniVerso does once it is up is in [Verso on a Server](/en/wiki/verso-on-a-server/).

> **Warning: Verso is in testing**
>
> While Verso's repository is private, the installer fetches the program from it with a GitHub **token** that the maintainer gives you (step 5). And what Oracle gives for free is Oracle's decision and may change: check its "Always Free" page first. The Oracle console menus below are written from its documentation and may be named or placed differently; the installer's commands were tested on Ubuntu 24.04 with systemd, not on a real Oracle machine.

---

## 1. Create the machine

In the Oracle Cloud console: **Compute › Instances › Create instance**.

1. **Image**: *Canonical Ubuntu 24.04*.
2. **Shape**: *Change shape*. Two work, both marked "Always Free-eligible":
   - `VM.Standard.E2.1.Micro` (AMD, **1 GB** of memory): serves one to three people. The installer makes a *swap* file so it does not run out of memory.
   - `VM.Standard.A1.Flex` (Ampere, ARM64): up to 4 cores and 24 GB in all, free; it is the comfortable one, but a region sometimes says it is out of capacity — try again later.
3. **Networking**: the new network it proposes is fine, with *Assign a public IPv4 address* ticked.
4. **SSH keys**: *Generate a key pair for me* and **download the private key** (a `.key` file). Without it you cannot get into the machine.
5. **Create**. When it turns green (*Running*), note the **Public IP address**.

## 2. Open ports 80 and 443 at Oracle

Oracle has a firewall **outside** the machine that lets only SSH (port 22) through. The safe address (HTTPS) needs 80 and 443. In the console:

1. **Networking › Virtual cloud networks** › your network (the VCN).
2. **Subnets** › the public subnet › **Security** › **Default Security List**.
3. **Add Ingress Rules**: *Source CIDR* `0.0.0.0/0`, *IP Protocol* `TCP`, *Destination Port Range* `80,443` › **Add**.

Port 7340, the UniVerso's own, is **not** opened: Caddy reaches it inside the machine.

## 3. Get into the machine (SSH)

In your computer's terminal (on Windows 10 and 11, PowerShell works), with the path of the downloaded key and the IP you noted:

```bash
chmod 600 ~/Downloads/ssh-key-*.key        # macOS and Linux only
ssh -i ~/Downloads/ssh-key-XXXX.key ubuntu@<public IP>
```

`ubuntu` is the user of Oracle's Ubuntu images. The first time it asks whether you trust the machine: type `yes`.

## 4. Download the installer and open the menu

```bash
curl -fsSLO https://versomd.com/universo.sh
sh universo.sh
```

The **UniVerso menu** appears. If the machine has `whiptail` (Ubuntu does), move with the **arrow keys** and **Enter**; otherwise type the option's number. Before each step it says what it is about to do and asks whether to go on. Want to read the installer first? `less universo.sh` (and `q` to quit).

> **Tip: Everything in the menu is also a command**
>
> Each option is a command you can type directly: `sh universo.sh install`, `sh universo.sh https`, `sh universo.sh admin`… `sh universo.sh --help` lists them all.

## 5. Option 1: install

Choose **Install UniVerso**. On a 1 GB machine it warns that there is no *swap* and offers to make a file (1 GB, kept across reboots): answer **y**. While the repository is private it asks for the GitHub token; the menu explains how to make one, and you paste it without it showing on screen. It downloads the package, **checks the signature**, installs and starts the service. At the end it recognises Oracle and **repeats the steps of section 2** — the second firewall, the machine's own, is sorted out by option 9 of the menu (**Open ports 80 and 443 on this machine**): choose it now and answer **y** to everything.

## 6. Option 2: HTTPS with a free name

Choose **HTTPS**. It asks which address you want:

1. **A free name made from the machine's address** (sslip.io) — recommended to start: nothing to buy or sign up for. The name is the IP with dashes, for example `150-230-1-2.sslip.io`.
2. Your **own domain** (its DNS record must already point to the machine).
3. A free **DuckDNS** name (an account and a token at duckdns.org; keeps working if the IP changes).

It installs **Caddy** from Caddy's own signed repository, writes the site, waits for Let's Encrypt's certificate (up to 2 minutes), writes the address into the settings and checks that `https://…` answers. If something fails it **says in plain words** what it is: port 80 or 443 closed, the name not pointing at the machine, or Let's Encrypt's request limit (and, for sslip.io, it offers to try nip.io).

## 7. Option 3: the first admin

Choose **Make the first admin**. Type the **e-mail** and the **password** (12 characters or more, **twice**; nothing shows as you type). It makes the account and prints the address to sign in at. The password goes through a file that is deleted right after and **stays nowhere**.

## 8. Open it on the phone

In the phone's browser, open the `https://…` address the installer printed, sign in with the e-mail and password — and that is it: the UniVerso in your pocket. With HTTPS, offline mode and notifications work ([Verso on Phone and Tablet](/en/wiki/verso-on-phone-and-tablet/)). In the desktop app: Settings › Servers, with the same address ([connect the app](/en/wiki/installing-your-universo-step-by-step/#6-the-first-admin-and-connecting-the-app)).

---

## Afterwards: looking after the server

- **Backup** (option 4): a copy in `/var/backups/universo`. It sits **on the same machine**: copy it off (`scp`) too.
- **Automatic, off by default** (option 10): a backup every day (the last 7 copies are kept) and an update every week. `sh universo.sh schedule status` shows them; `sh universo.sh schedule off` turns them off.
- **Update** (option 5) and **Status** (option 6).
- **Asking for help** (option 7): `sh universo.sh support` gathers a report — versions, memory, log, settings — with **no password or token** in it (secret settings appear without their value) and saves it to a file for you to paste. Read it before pasting: it carries your machine's public name or address.

> **Note: Oracle may take the machine back**
>
> A free machine that Oracle judges idle (low CPU, network and memory use over seven days) may be reclaimed by it. A notes server for a few people can look idle: **keep backups off the machine**.

Go back to [Open a Single File](/en/wiki/open-a-single-file/). For what to do with the server up, see [Verso on a Server](/en/wiki/verso-on-a-server/); for the game table, [Running a Table](/en/wiki/running-a-table/). Go back to the [Home Page](/en/wiki/welcome-to-verso/) or open the Verso Tour.
