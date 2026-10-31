---
title: "Installing Your UniVerso, Step by Step"
description: "From zero to a server of your own, for someone who has never set one up: the compose file or the install script, the first admin, HTTPS (optional, for offline use and notifications), the backup."
order: 24
group: server
slug: "installing-your-universo-step-by-step"
twin: "instalar-o-seu-universo-passo-a-passo"
source: "demo-vault-en/24 - Installing Your UniVerso, Step by Step.md"
updated: "2026-10-15"
---
This note takes you, with no rush, from an empty machine to a working **UniVerso**: Verso on a server of your own, open in the browser of your computer, your phone and your tablet. What the UniVerso does once it is installed is in [Verso on a Server](/en/wiki/verso-on-a-server/); here is only the road to get there. You do not need to be a programmer: you need to copy and paste carefully.

> **Warning: Verso is in testing**
>
> There is **no public download** yet: Verso's repository is private while the app matures, and the commands below fetch the program from there with a GitHub **token** that the maintainer gives you. Without that access, you cannot install yet. The commands are the ones in the project's reference guide (`docs/reference/server-hands-on.md`), written from version **0.8.0-beta.1** and checked step by step, on 2026-10-15, on an Ubuntu 26.04 machine with 1 core and 1 GB, running **0.8.2-beta.1** (all of Path 1; Path 2 with the image built by hand). What was left unrun in a real browser: HTTPS with a name or Tailscale, the desktop app and the phone. If something does not match, go to [If something goes wrong](#if-something-goes-wrong) and tell the maintainer.

> **Tip: Never set up a server?**
>
> The note [UniVerso on a Free Oracle Server](/en/wiki/universo-on-a-free-oracle-server/) is the route with the **installer's menu** (`sh universo.sh`): HTTPS with a free name and the first admin in a few steps, on a free Oracle machine. What is below is the manual road.

> **Note: The shortest path**
>
> Paste the compose file, open `http://<machine IP>:7340` and use the setup link that shows up in the log. **No HTTPS, no name, no proxy.** HTTPS is an optional step, later, to unlock offline mode and notifications (section 5). This holds from the version after 0.8.2-beta.1; earlier ones refuse to let you in over HTTP from another machine.

---

## 1. What you need

- **A machine that stays on all the time.** It can be a small VPS in the cloud (1 GB of memory is enough), a Raspberry Pi (ARM64), a NAS with Docker, CasaOS or ZimaOS, or an old PC with Linux. Your everyday laptop will not do: when it sleeps, the server disappears.
- **Linux.** Both paths below assume Linux: Ubuntu or Debian (the easiest), or Fedora, RHEL, Oracle Linux.
- **Knowing the machine's type**, x64 or ARM64. In the machine's terminal:

  ```bash
  uname -m
  ```

  `x86_64` is x64 (most PCs and VPSs); `aarch64` is ARM64 (Raspberry Pi 4, Oracle's Ampere). The installer picks the right file by itself; you only need to know in case something asks.
- **A terminal on the machine**, usually over SSH, from your computer: `ssh your-user@<machine IP>`. The IP and the user come from whoever gave you the machine (the cloud panel, the router, the NAS).
- **The GitHub token**, while Verso is in testing (see the warning above).
- **Nothing else is required.** A **name** (domain) and HTTPS are optional, for later: see [5. HTTPS (optional), to unlock offline and notifications](#5-https-optional-to-unlock-offline-and-notifications).

The UniVerso is **free and yours**: it runs on a machine of your own, your notes remain ordinary Markdown files in a folder on it, and there is no account or subscription from anyone in between.

---

## 2. Path 1 — the install script (the simplest)

It works for a Linux machine with `apt` or `dnf`, with or without Docker. On the server, as your regular user (the script asks for `sudo` when it needs it):

```bash
V=0.8.2-beta.1
curl -fsSLO https://versomd.com/universo.sh
less universo.sh                          # optional: read what it does (q to quit)
read -rs GITHUB_TOKEN && export GITHUB_TOKEN   # paste the token, Enter; while the repository is private
sh universo.sh install --version "$V"
```

What each line does:

1. `V=...` stores the version in a variable, so a later update changes just one line.
2. `curl` downloads the `universo.sh` script.
3. `read -rs` asks for the token without showing it on screen; paste it and press Enter. A GitHub *fine-grained* token with **Contents: Read-only** on the repository; without it, the script explains how to create one.
4. `sh universo.sh install` downloads the package for this machine, checks the signature, installs, starts the service and waits for it to answer. The script asks for an optional `https://` address (the `--url`): press Enter, plain HTTP works without it; with HTTPS in front you set it later.

> **Important: Keep the script's output**
>
> At the end it prints "UniVerso is running. Next:" (on a Portuguese system: `O UniVerso está rodando. Agora:`; the script speaks the system's language) with the **link that creates the first admin**. Copy it somewhere safe before closing the terminal.

To check that it is up, now and after any reboot:

```bash
sh universo.sh status
```

It says `Service: active, enabled at boot` (in Portuguese, `Serviço: active, enabled na partida`), the version, the address it listens on and the last lines of the log. The service comes back on its own after a reboot.

> **Note: There is also the by-hand install**
>
> The guide has the package install (`.deb` or `.rpm`) with the signature checked by you, without the script. It is more work and gives the same result; it is there for whoever wants it.

To open it from another device on the network, the package must listen outside the machine and port 7340 must be open in the firewall: put `VERSO_LISTEN=0.0.0.0:7340` in `/etc/universo/universo.env` (`sudoedit /etc/universo/universo.env`), run `sudo ufw allow 7340/tcp` if you use ufw, and `sudo systemctl restart universo`. Then open `http://<machine IP>:7340` and use the setup link (section 6). HTTPS, to unlock offline mode and notifications, is section 5.

---

## 3. Path 2 — Docker

For a machine where Docker already runs. The data lives in two directories of yours; the container can be replaced without losing it.

**Step 0: Docker and Compose.** Check that both answer (a fresh cloud machine does not come with them):

```bash
docker --version
docker compose version
```

If you get `command not found`, on Ubuntu install both from the distribution's repository (on Debian and other distributions, follow <https://docs.docker.com/engine/install/>):

```bash
sudo apt install docker.io docker-compose-v2
systemctl is-enabled docker          # should say enabled
```

Your user is not in the `docker` group: put `sudo` before every `docker` and `docker compose` below.

**Step 1: the directories.** The server only writes to two directories of yours, and creating them is enough. You do not need to set an owner or permissions: the container starts as administrator just long enough to hand to user 1000 whatever belongs to root in those two directories, and drops to 1000 with no privileges before the server runs. **Mount only the folder meant for Verso**, never a parent such as ZimaOS's whole `/DATA`: the container hands to user 1000 everything that belongs to root inside what you mount, including other apps' files.

```bash
sudo mkdir -p /srv/universo/data /srv/universo/folders
```

**Step 2: sign in to the image registry** (once; while the repository is private, with a GitHub *classic* token that has `read:packages`):

```bash
echo "$TOKEN" | sudo docker login ghcr.io -u <your-github-user> --password-stdin
```

`Login Succeeded` **does not prove** that the token works: the registry only checks it when pulling the image. If the `docker compose up` of step 4 answers `403 Forbidden`, the token lacks `read:packages` (a token with only `repo` or Contents is not enough). Docker stores the token unencrypted in `/root/.docker/config.json`; when you no longer need to pull new versions, `sudo docker logout ghcr.io` erases it.

**Step 3: the version and the compose file.**

```bash
V=0.8.2-beta.1
echo "V=$V" | sudo tee /srv/universo/.env
sudoedit /srv/universo/compose.yaml
```

Paste this into `compose.yaml`; there is nothing to fill in:

```yaml
name: universo
services:
  universo:
    image: ghcr.io/sergiosjs/universo:${V}        # the version from .env
    container_name: universo
    restart: unless-stopped
    read_only: true
    tmpfs:
      - /tmp
    cap_drop:
      - ALL
    cap_add:                  # only to hand the directories to user 1000 at startup
      - CHOWN
      - SETUID
      - SETGID
    security_opt:
      - no-new-privileges:true
    ports:
      - "7340:7340"                                 # all addresses: plain HTTP over the network
    volumes:
      - type: bind
        source: /srv/universo/data
        target: /data
      - type: bind
        source: /srv/universo/folders
        target: /folders
    environment:
      VERSO_ADMIN_EMAIL: ""                         # empty: the log prints a setup link
      VERSO_ADMIN_PASSWORD: ""
      # Optional, only with HTTPS in front (section 5):
      # VERSO_PUBLIC_URL: "https://notas.exemplo.com"
```

**Step 4: start it and watch the log.**

```bash
cd /srv/universo
docker compose up -d
docker compose ps
docker logs -f universo        # Ctrl+C to quit
```

Open `http://<machine IP>:7340` in the browser and use the setup link from the log (section 6). The container has no way of knowing the host machine's IP, so the log prints the link with `localhost`: replace `localhost` with the machine's IP when opening from another computer. `restart: unless-stopped` brings the container back after a crash and after a reboot, as long as Docker itself starts at boot (`systemctl is-enabled docker` should say `enabled`).

---

## 4. CasaOS and ZimaOS

In the CasaOS or ZimaOS panel, install a **custom app** by pasting the compose file below and click install: **there is nothing to fill in**. It is the project's `packaging/server/docker-compose.yml`, without the panel's metadata. First, once, in the system's terminal, sign in to the registry (the `docker login` of step 2 of Path 2).

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
    cap_add:                  # only to hand the directories to user 1000 at startup
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
      VERSO_ADMIN_EMAIL: ""     # empty: the log shows a setup link
      VERSO_ADMIN_PASSWORD: ""
      # Optional, only with HTTPS in front (section 5):
      # VERSO_PUBLIC_URL: "https://universo.sua-tailnet.ts.net"
      # VERSO_TRUSTED_PROXY: ""
```

`/DATA/AppData/universo/data` holds the accounts and must live on a local disk; `/DATA/Documents/Verso` holds the notes and can live on a NAS (swap in whatever path you like). Once installed, open `http://<box IP>:7340` from any device in the house and use the setup link that the app's log shows (section 6). A proxy on CasaOS itself or on your network is accepted without `VERSO_TRUSTED_PROXY`: nothing to work out.

---

## 5. HTTPS (optional), to unlock offline and notifications

> **Info: Plain HTTP works**
>
> `http://<IP>:7340` opens the UniVerso and lets you in, from any device on the network. **The price:** without HTTPS, anyone on the same network can read your password and your notes as they pass. At home that is fine; on public Wi-Fi, do not use it this way. HTTPS also **unlocks** what the browser only gives to secure pages: **offline mode**, **system notifications** and **passkeys**. Without it, Verso turns them off and tells you (a discreet line in Settings and one notice per session, with the "How to turn on HTTPS" link). When you want it, pick **one** of the three ways below.

With HTTPS in front, the UniVerso only needs `VERSO_PUBLIC_URL` with the `https://` address: the proxy next to it, on the same machine or on your network, is accepted with nothing more. Careful: once set, `VERSO_PUBLIC_URL` makes the UniVerso answer **only to that name**; `http://<IP>:7340` stops opening.

### Only for your own devices: Tailscale

The easiest way for your phone and your iPad. Tailscale creates a private network among your devices and hands you HTTPS ready-made; every device that will open the UniVerso needs the Tailscale app installed and connected, the desktop app's computer too. On the server:

```bash
tailscale serve --bg 7340
```

Then, just `VERSO_PUBLIC_URL` (in Path 1's `/etc/universo/universo.env`, or in the compose file of Path 2 or CasaOS):

```
VERSO_PUBLIC_URL=https://<machine>.<tailnet>.ts.net
```

with **HTTPS turned on for your network** in Tailscale's admin console. Tailscale's options change from version to version: `tailscale serve --help` is the reference. To apply the change, restart the UniVerso (`sudo systemctl restart universo`, or `docker compose up -d` in the `/srv/universo` folder).

### No name and no Tailscale: an SSH tunnel, or plain HTTP

To see the UniVerso only from your computer, opening no port at all, and with the package listening only on the machine itself (Path 1's default), an SSH tunnel is enough. On your computer:

```bash
ssh -L 7340:127.0.0.1:7340 your-user@<machine IP>
```

Leave that terminal open and open `http://localhost:7340` in **your computer's** browser; the admin's setup link (step 6) is the one from the log, with `http://localhost:7340` in place of the name. `localhost` counts as a secure address for the browser, so offline mode and notifications work there, and only you can reach it. For the other devices in the house, plain HTTP (`http://<IP>:7340`) is already enough.

### For other people: a name and Caddy

1. **The name.** At your DNS provider, an `A` record from a name of yours to the machine's IP: `notas.exemplo.com` → `<IP>`.
2. **Caddy**, a program that serves HTTPS and gets the certificate by itself. On Ubuntu or Debian:

   ```bash
   sudo apt install caddy
   sudoedit /etc/caddy/Caddyfile
   sudo systemctl reload caddy
   ```

   In the Caddyfile, this block (if the machine already has a Caddy serving something else, **add** the block below what is there, deleting nothing):

   ```
   notas.exemplo.com {
       reverse_proxy 127.0.0.1:7340
   }
   ```

3. **Ports 80 and 443 open** on the machine and, if it is in the cloud, on its firewall too. Caddy needs 80 to get the certificate. On the machine:

   ```bash
   sh universo.sh firewall
   ```

   and, by hand, with ufw:

   ```bash
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   ```

   **The cloud has a firewall of its own**, outside the machine, which is opened in the provider's console (on Oracle Cloud, *Security Lists*, *Add Ingress Rules*, TCP, ports `80,443`). Port 7340 stays closed.
4. **The UniVerso told the name.** One line, in `/etc/universo/universo.env` (open it with `sudoedit /etc/universo/universo.env`) or in the compose file:

   ```
   VERSO_PUBLIC_URL=https://notas.exemplo.com
   ```

   `universo.env` already has this variable (empty): change the value on the line that exists, instead of adding another. If you repeat the line, the last one wins, but the file gets confusing. If Caddy is on this same machine, leave `VERSO_LISTEN=127.0.0.1:7340` (only it reaches the port). Restart: `sudo systemctl restart universo` (or `docker compose up -d`).

Done: `https://notas.exemplo.com` opens the UniVerso's sign-in page, and offline mode and notifications can be turned on. Other proxies (nginx, Cloudflare) exist; the guide describes them.

---

## 6. The first admin, and connecting the app

Nobody signs up on their own: the first account is the **admin**'s. With `VERSO_ADMIN_EMAIL` and `VERSO_ADMIN_PASSWORD` empty, the server prints in the log, on startup, a **setup link** that is valid for one hour and one use. To find it:

```bash
sudo journalctl -u universo | grep setup     # the package (Path 1)
docker logs universo 2>&1 | grep setup       # Docker (Path 2 and CasaOS)
```

The link is `http://<machine IP>:7340/setup?token=…` (the log writes `localhost` because the container has no way of knowing the host machine's IP; replace `localhost` with the machine's address when opening from another computer), or the one on `VERSO_PUBLIC_URL` if you set one. Expired or lost? Restart the service (`sudo systemctl restart universo` or `docker compose restart`) and another comes out, as long as no account exists.

On the **First start** page, fill in **E-mail**, **Name**, **New password** (12 characters at least) and **Language**, and click **Create account**. From then on you sign in with that e-mail and that password, and the administration console (`/admin`) is yours.

![servidor-primeiro-acesso](/wiki-assets/servidor-primeiro-acesso.png)

### On the computer, with the app

In the Verso app, open Settings (**Verso › Settings…**, ⌘, on macOS; **Ctrl+,** on Windows and Linux) and go to **Servers**.

> **Tip: The shortest way: let the app find the server**
>
> With the computer on the **same network** as the server, the UniVerso shows up by itself under **Found on this network**, with the address it will use. Click **Connect** on its row and skip to step 3 below: there is nothing to type. Any device on the network can announce itself, so check the address before you click. If the server has `VERSO_PUBLIC_URL` set, the row shows that address; a server with its own HTTPS and no `VERSO_PUBLIC_URL` appears without a button, telling you to set it. If the list stays empty, follow the steps as usual: typing the address always works. On Docker, the announcement only leaves the container with host networking (`network_mode: host`, without the `ports:` block); the compose file in section 4 uses the default network, so there you type the address.

1. In **Server address**, type `http://<machine IP>:7340` (or, with HTTPS in front, `https://notas.exemplo.com`). The app accepts both.
2. Click **Connect**. The app copies a code (`XXXX-XXXX`) and opens the server's page in the browser.
3. Sign in with your account if the browser asks; on the **Connect an app** page, paste the code into **The app's code** and click **Continue**.
4. Click **Approve this device**. The page says *Done. You can go back to the app.*

![servidor-aprovar-aparelho](/wiki-assets/servidor-aprovar-aparelho.png)

The app now says *Connected as* your name. A new server has no folders yet, and **there is nothing to create beforehand**: with the folder you want to keep open in the app, click **Sync ‘your folder’**. The app makes the folder on the server, with the same name, and syncs it right away; your files stay as they are and none is deleted. If the server already has folders, they show up in the list, each with **Open here** and **Sync** (to link yours to one that already exists). The code is valid for 10 minutes; if it passed, click **Connect** again.

![servidor-app-conectado](/wiki-assets/servidor-app-conectado.png)

### On the phone and the tablet

There is no app to install: open `http://<machine IP>:7340` (or the `https://` address, if there is one) in the phone's browser and sign in with the e-mail and password. (With Tailscale, the phone must have it connected.) Without HTTPS, offline mode is off and the window tells you. How the window behaves on a small screen is in [Verso on Phone and Tablet](/en/wiki/verso-on-phone-and-tablet/).

For a second person, the admin syncs (or creates) the folder, then makes an invitation in the console (`/admin/invitations`) and sends the link: [the accounts and the invitations](/en/wiki/verso-on-a-server/#the-first-admin-and-the-accounts).

---

## 7. Backup and update

**Backup**, with Path 1's package: one command saves the accounts, the notes and the settings in `/var/backups/universo`; the other pair carries a copy to your computer (the file belongs to root, so it is first copied to the home folder; `ubuntu` is the user of Ubuntu's cloud images, swap in yours):

```bash
sh universo.sh backup        # the last line prints "Backup: /var/backups/universo/universo-backup-….tar.gz"
sudo install -o ubuntu -m 600 /var/backups/universo/<the file it printed> ~/   # on the server
scp 'ubuntu@<server IP>:universo-backup-*.tar.gz' .                              # on your computer
```

Copy the name the command printed (or look with `ls /var/backups/universo`): in a newer copy of the script it ends with a random part (`-a1b2c3`), in an older one it ends with the time.

The guide also teaches how to **encrypt** the backup (`backup --keygen` and `backup --encrypt`) before it leaves the machine, in a newer version of the script.

With **Docker**, stop the server, copy the two directories and start it again. The `umask 077` and the `>` make the file be born yours and readable only by you (it holds the accounts and the password hashes; without that, `tar` with `sudo` leaves it owned by root and open to any user on the machine):

```bash
cd /srv/universo
sudo docker compose stop
( umask 077; sudo tar -czpf - -C /srv universo > ~/universo-backup-$(date +%Y%m%d-%H%M%S).tar.gz )
sudo docker compose start
```

**Updating**, with the package: take the backup above and run (without `--version` it takes the latest; with `--version` you choose one). Settings and data stay:

```bash
sh universo.sh update
```

With **Docker**, change the version in `.env` and recreate the container (the data stays in the two directories):

```bash
cd /srv/universo
echo "V=0.8.2-beta.1" | sudo tee .env   # swap in the new version's number
docker compose pull
docker compose up -d
```

---

## If something goes wrong

**First, the log**, which almost always names the problem:

```bash
sh universo.sh status
sudo journalctl -u universo -n 50        # the package
docker logs universo                     # Docker
```

**The most common errors:**

- **The service does not start.** The log names the line: a `VERSO_PUBLIC_URL` that is not `http(s)://…`, `VERSO_ADMIN_EMAIL is set without VERSO_ADMIN_PASSWORD`. Fix it in `/etc/universo/universo.env` (or in the compose file) and restart. With Docker, a directory that belongs to someone else (a NAS user) the container does not touch: the administration console and the log say `UniVerso cannot write to … sudo chown -R 1000:1000 <the host folder>`; run that command.
- **The page shows "Connection without HTTPS"**: it is not an error. You opened it over `http://`, and the UniVerso works, it only leaves offline mode, notifications and passkeys off. Click "How to turn on HTTPS" (section 5).
- **The page says "does not answer to that name"** (error 421): `VERSO_PUBLIC_URL` is set and you opened it through an address that is not its own (often the IP). Use its name; or, without `VERSO_PUBLIC_URL`, you typed a public name, which is only accepted with it: use the IP, or set `VERSO_PUBLIC_URL`. The e-mail links (sign in by link, "forgot password") also only exist with it set.
- **The invitation link (or the password-reset one) opens "localhost refused to connect".** Without `VERSO_PUBLIC_URL` the server does not know which address people reach it by: the table's invitation link opens at the address you yourself use, but what leaves by e-mail (password reset) and the link in the start-up log say `localhost`. If people reach the server by another address (the network IP, a name, a tunnel), set `VERSO_PUBLIC_URL` to that address and restart; the log warns about it at start.
- **The proxy answers 502**: the UniVerso is not running, or it listens on a port other than the one in the Caddy block (`sh universo.sh status`, the "Listening on" line).
- **Two warnings in the log that are not errors.** `update check: the release feed answered 404: a private repository needs VERSO_UPDATE_TOKEN`: while the repository is private, the new-version check cannot see it; the server works. And `plain HTTP works; offline, notifications and the like need HTTPS`: it only says that the server has no TLS of its own.
- **Port 7340 is taken**: the log says `Address already in use`. Give the UniVerso another (`VERSO_LISTEN=0.0.0.0:7341`, or `127.0.0.1:7341` behind a proxy) and the same port to the proxy (`reverse_proxy 127.0.0.1:7341`).
- **Nobody from outside gets in, but on the machine it works**: the **firewall** (port 7340 for plain HTTP; 80 and 443 for Caddy), and, on the package, `VERSO_LISTEN=0.0.0.0:7340`. Check `sh universo.sh firewall` and the cloud's inbound rule.
- **The admin's password is lost.** On the machine:

  ```bash
  sh universo.sh reset-admin voce@exemplo.com                # the package
  docker exec universo universo admin reset voce@exemplo.com # Docker
  ```

  It prints a single-use link; open it and choose a new password.
- **Writes are slow, but reads are not.** Usually it is the disk: the server writes safely before answering, and on a disk that takes about 26 ms per synchronous write (measured) the ceiling is about 15 writes per second, no matter how many devices. To check the disk, in the data folder: `dd if=/dev/zero of=./disk-check bs=4k count=200 oflag=dsync; rm ./disk-check`, and divide the total time by 200. Under about 2 ms is good; 5 to 10 ms is enough for a household; 25 ms or more calls for a local SSD for the data (the notes folders can stay on a NAS).
- **Nothing answers after a reboot**: `systemctl is-enabled universo` must say `enabled` (Docker: `systemctl is-enabled docker`, then `docker compose ps` in `/srv/universo`); for the proxy, `systemctl status caddy`. A recreated cloud machine may have another IP, and the DNS record has to follow.

Going deeper: the project's full manual is `docs/reference/server-install.md` and this walkthrough's guide is `docs/reference/server-hands-on.md`, both in the Verso repository.

---

For what to do with the server up, go back to [Verso on a Server](/en/wiki/verso-on-a-server/); for the phone, [Verso on Phone and Tablet](/en/wiki/verso-on-phone-and-tablet/). The next note, [Dice and Random Tables](/en/wiki/dice-and-random-tables/), rolls dice and draws from tables — at a table with your UniVerso, everyone sees the same roll. Go back to the [Home Page](/en/wiki/welcome-to-verso/) or open the Verso Tour.
