---
title: "Installing the server on a NAS or a VPS"
description: "The server on a NAS (CasaOS, ZimaOS, others with Docker) or on a VPS: the compose file or the installer, HTTPS, the public address, backups and the trash's limits."
order: 38
group: start
slug: "installing-the-server-on-a-nas-or-a-vps"
twin: "instalar-o-servidor-num-nas-ou-vps"
source: "demo-vault-en/38 - Installing the server on a NAS or a VPS.md"
updated: "2026-10-31"
---
A **UniVerso** is Verso on a server of your own ([Verso on a Server](/en/wiki/verso-on-a-server/)). It needs a machine that stays on: a **NAS** in the closet or a small rented server, a **VPS**. This note helps you pick the road for the machine you have, then walks it with real commands. It is the short map; when a step already has a full explanation, the link takes you there instead of repeating it: the long step by step is [Installing Your UniVerso, Step by Step](/en/wiki/installing-your-universo-step-by-step/), and the road for a free Oracle machine, with nothing but the menu, is [UniVerso on a Free Oracle Server](/en/wiki/universo-on-a-free-oracle-server/).

> **Warning: Verso is in testing**
>
> While Verso's repository is private, downloading the program (and the Docker image) needs a GitHub **token** that the maintainer gives you, as note 24 explains. Without that access, you cannot install yet. The commands below are the ones in the project's install guide (`docs/reference/server-install.md`) and in the installer script itself (`sh universo.sh --help`).

---

## 1. Which road

| You have | Take | Where |
|---|---|---|
| A NAS with **ZimaOS or CasaOS** | the compose file, as a custom app | section 2 |
| Another NAS that runs Docker | the same compose file | section 2 |
| A VPS or a machine with **Ubuntu or Debian** (or Fedora, RHEL) | the guided installer `universo.sh`, or the `.deb` | section 3 |
| A free machine at Oracle | the installer's menu | [UniVerso on a Free Oracle Server](/en/wiki/universo-on-a-free-oracle-server/) |

Both roads end the same: `http://<machine address>:7340` opens the UniVerso, and the first account you create is the **admin**'s. **HTTPS** is optional and comes after (section 4).

---

## 2. A NAS

### ZimaOS and CasaOS

1. **Sign in to the image registry**, once, in the system's terminal (while the repository is private): the `docker login ghcr.io` step in [note 24, Docker, step 2](/en/wiki/installing-your-universo-step-by-step/#3-path-2--docker), with its warning about the token's `read:packages`.
2. In the panel, install a **custom app** and paste the compose file in [note 24, section 4](/en/wiki/installing-your-universo-step-by-step/#4-casaos-and-zimaos). There is nothing to fill in. Install.
3. Open `http://<NAS address>:7340` in a browser and sign in with the setup link from the app's log (section 6 of note 24 has the screens; the same command is `docker logs universo 2>&1 | grep setup`). The log writes `localhost` in the link: swap in the NAS address.

What that file does, in four lines:

- **`/DATA/AppData/universo/data`** holds the accounts. It must be a disk **inside** the NAS, never a network share (SQLite can be corrupted on NFS or SMB).
- **`/DATA/Documents/Verso`** holds your notes, as plain files. This one may be any folder of the NAS. Mount **only** the folder meant for Verso: the container hands to user 1000 everything that belongs to root inside what you mount, so never a parent such as the whole `/DATA`.
- **`mem_limit: 768m`** limits the container's memory, which suits a machine of 1 GB. If something eats more, the container is killed and restarts by itself (`restart: unless-stopped`) instead of taking the NAS down. On a NAS with more memory, raise it to about three quarters of it, for example `mem_limit: 3g` on a 4 GB machine.
- **`ports: "7340:7340"`** publishes the port: plain HTTP on your home network, which is fine at home.

**Updating** on CasaOS and ZimaOS is the app's update button.

### Another NAS that runs Docker

The file is an ordinary compose file, so any panel that takes one can use it, or you can run it by hand in the NAS's terminal over SSH, in the folder where you saved it as `compose.yaml`:

```bash
docker compose up -d
docker compose ps
docker logs -f universo        # Ctrl+C to quit
```

Change the two `source:` paths to folders of your NAS. The project has not written the screens of any one brand's panel (Synology, QNAP and the like), so that part is the panel's own documentation. Two things the compose file says about NAS:

- If your NAS's folders belong to a user other than 1000, the file has a commented `user:` line for it (the numbers come from `id` on the NAS); the directories must then already be writable by that user. If the server cannot write, the administration console and the log say `UniVerso cannot write to … sudo chown -R 1000:1000 <the folder>`: run that command.
- The announcement that lets the desktop app find the server by itself does not leave a container on Docker's default network. Type the server's address in the app, as note 24 shows in section 6.

**Updating**, over SSH in the same folder (the image is the `beta` tag, the newest test version):

```bash
docker compose pull
docker compose up -d
```

---

## 3. A VPS

Any Ubuntu or Debian machine (Fedora and RHEL too) with systemd, 1 GB of memory and a public address will do. The cloud's panel gives you the address and how to get in: `ssh your-user@<address>`.

### The guided installer (the simplest)

On the server, as your regular user (the script asks for `sudo` when it needs it):

```bash
curl -fsSLO https://versomd.com/universo.sh
less universo.sh                                  # optional: read what it does (q to quit)
read -rs GITHUB_TOKEN && export GITHUB_TOKEN      # paste the token, Enter; while the repository is private
sh universo.sh
```

`sh universo.sh` with no command opens a **menu** that says each step before it runs it and asks to go on. Every option is also a command you can type: `sh universo.sh install`, `sh universo.sh https`, `sh universo.sh admin`, `sh universo.sh swap`, `sh universo.sh status`, and `sh universo.sh --help` lists them all. In order:

1. **Install** (`sh universo.sh install`): fetches the right package for this machine, checks its signature, installs it, starts the service and prints the link that creates the first admin. On a machine of 2 GB or less without swap it offers a swap file first (`sh universo.sh swap`), and you should accept it.
2. **HTTPS** (section 4).
3. **The first admin** (`sh universo.sh admin`): asks the e-mail and the password (12 characters at least), typed twice and hidden, and keeps it nowhere.
4. **Open the ports** (`sh universo.sh firewall`) if you want to reach it from outside: it opens 80 and 443. A cloud has a firewall of its own, outside the machine, opened in the provider's console; note 34 shows it on Oracle's.

The package listens only on the machine itself until you say otherwise. For plain HTTP over the network, put `VERSO_LISTEN=0.0.0.0:7340` in `/etc/universo/universo.env` and restart (`sudo systemctl restart universo`); with HTTPS in front, leave the default, and the proxy on the same machine reaches it.

### Or the `.deb`, by hand

If you would rather not run a script, download `universo-<version>-amd64.deb` (or `-arm64.deb`, if `uname -m` says `aarch64`) from the release and:

```bash
sudo apt install ./universo-<version>-amd64.deb
sudoedit /etc/universo/universo.env               # optional: the first admin, VERSO_LISTEN
sudo systemctl enable --now universo
journalctl -u universo -f
```

The package does **not** start the service by itself, hence the `enable --now`. The setup link for the admin is in the log: `sudo journalctl -u universo | grep setup`.

### The memory limit

The service is limited to three quarters of the machine's memory (`MemoryMax=75%` in its unit): if it runs out, the **server** restarts, not the machine. It is the counterpart, on a VPS, of the container's 768 MB on a NAS. To change it, a drop-in survives updates:

```bash
sudo systemctl edit universo
# [Service]
# MemoryMax=2G
```

(`infinity` means no limit.)

---

## 4. HTTPS

Plain HTTP works, but anyone on the same network can read your password and your notes as they pass. HTTPS also unlocks what the browser only gives to secure pages: offline mode, system notifications and passkeys. Without it Verso turns them off and tells you. [Note 24, section 5](/en/wiki/installing-your-universo-step-by-step/#5-https-optional-to-unlock-offline-and-notifications) has the choices in detail; the short version:

- **On a VPS, in one step:** `sh universo.sh https`. It installs Caddy from Caddy's own signed repository, gets the certificate and sets the address. The name is one of three: **your own domain** (whose `A` record must already point at the machine), **a free name made from the machine's address** (`150-230-1-2.sslip.io`, nothing to sign up for), or **a free DuckDNS name** (`sh universo.sh https --duckdns NAME`; it asks for your DuckDNS token, hidden, and keeps the name pointing at the machine if its address changes). Ports 80 and 443 must be open, here and at the cloud. If it fails it says why in words (a closed port, a name that does not point here), and running it again picks up where it was.
- **For your own devices only, on a NAS or a VPS:** Tailscale. `tailscale serve --bg 7340` on the server, with every device that will open the UniVerso having the Tailscale app connected.
- **On a NAS,** `universo.sh` is not the way (it is for machines with systemd and apt or dnf). Use Tailscale, or a reverse proxy of your own in front of port 7340.

Whichever you pick, finish with section 5.

---

## 5. `VERSO_PUBLIC_URL`, and the page for the old address

`VERSO_PUBLIC_URL` is the one address people type, with `https://`, for example `https://notes.example.com`. Put it on **one line**:

- on a VPS, in `/etc/universo/universo.env` (open it with `sudoedit`; the variable is already there, empty: change that line instead of adding another), then `sudo systemctl restart universo`. `sh universo.sh https` writes it for you;
- on a NAS or any Docker, in the `environment:` of the compose file, as `VERSO_PUBLIC_URL: "https://notes.example.com"`, then `docker compose up -d`.

Set, the server answers **only to that name**, and the links it makes (invitations, e-mail links) use it. That has a visible effect: the old address, `http://<IP>:7340`, stops opening the app. Instead of a bare error, a browser gets a **page** that says the address has changed, with a link to the right one, in the browser's language first and the other below it. It is not a failure; open the link and bookmark that one. The desktop app, scripts and syncing still get the plain technical refusal (HTTP 421), so if an app says the server "does not answer to that name", point it at the new address.

---

## 6. Backups and updates

**Backing up is copying the two directories**: the accounts and the notes. The accounts exist nowhere else.

On a VPS, with the installer:

```bash
sh universo.sh backup                # saves to /var/backups/universo
sh universo.sh backup --keygen       # once: the key for encrypted backups; keep the secret one elsewhere
sh universo.sh backup --encrypt      # each time, encrypted
sh universo.sh schedule backup --keep 7    # a daily backup, the last 7 kept (off by default)
sh universo.sh schedule update             # a weekly update (off by default)
sh universo.sh schedule status             # see them; "schedule off" turns them off
```

`backup` stops the service for a moment. **A backup on the same machine does not survive losing it:** copy it off with `scp` or `rclone`. To restore, `sh universo.sh restore <file>` (add `--identity <key file>` for an encrypted one).

On Docker or a NAS, the backup is the stop, copy and start in [note 24, section 7](/en/wiki/installing-your-universo-step-by-step/#7-backup-and-update), and your NAS's own snapshots or backup program can copy the two folders.

**Updating**: back up first. On a VPS, `sh universo.sh update` (settings and data are kept; `--version X` picks one); on Docker, `docker compose pull` and `docker compose up -d`, as in section 2. The server never updates itself: the administration console says when a new version exists.

---

## 7. The trash and its limits

What someone deletes on the server goes to the folder's trash (`.trash/`), and so do the previous versions that a device's write replaced. Two settings keep it from filling the disk:

| Setting | Default | What it does |
|---|---|---|
| `VERSO_TRASH_DAYS` | `30` | Days a deleted file stays in the trash; `0` keeps them forever. |
| `VERSO_TRASH_MAX` | `1GB` | The most a folder's trash may hold, as a size (`500MB`, `2GB`); `0` or `none` for no cap. Past it, the **oldest** items go first, whatever their age. |

Nothing outside `.trash/` is ever touched. The trash is swept when the server starts and once a day. The administration console's folder page sets the days for each folder, and the folder's owner may shorten them from the window.

To change a default, add a line to `/etc/universo/universo.env` (VPS), for example `VERSO_TRASH_MAX=2GB`, and restart; on Docker, put it under `environment:` as `VERSO_TRASH_MAX: "2GB"` and `docker compose up -d`. Plan the disk for **twice the notes' size, plus 1 GB**, because the trash keeps what was deleted.

---

## 8. If something goes wrong

The log almost always names the problem:

```bash
sh universo.sh status                  # VPS: state, version, address, last log lines
sudo journalctl -u universo -n 50      # VPS
docker logs universo                   # Docker and NAS
sh universo.sh support                 # a report with no password or token, to paste when asking for help
```

- **"This address has changed" page, or error 421:** `VERSO_PUBLIC_URL` is set and you opened another address (often the IP). Open the one the page names (section 5).
- **The setup link opens "localhost refused to connect":** the log writes `localhost` because the server does not know its own address. Swap in the machine's address, or set `VERSO_PUBLIC_URL`.
- **It works on the machine but not from outside:** the firewall (port 7340 for plain HTTP; 80 and 443 behind HTTPS), the cloud's own firewall, and, on a package, `VERSO_LISTEN=0.0.0.0:7340`.
- **The container keeps restarting:** it may be hitting the memory limit. `docker stats universo` shows it; raise `mem_limit` if the machine has the room.
- **The service does not start:** the log names the line (a `VERSO_PUBLIC_URL` that does not begin with `http://` or `https://`, for instance). Fix it and restart.
- **A lost admin password:** `sh universo.sh reset-admin you@example.com` on a VPS; `docker exec universo universo admin reset you@example.com` on Docker. It prints a single-use link.

The rest of the troubleshooting is at the end of [note 24](/en/wiki/installing-your-universo-step-by-step/#if-something-goes-wrong). Once the server is up, connecting the app and the phone is in section 6 of that note and in [Verso on Phone and Tablet](/en/wiki/verso-on-phone-and-tablet/). Go back to [Compatibility with Obsidian](/en/wiki/compatibility-with-obsidian/), to the [Home Page](/en/wiki/welcome-to-verso/) or open the Verso Tour.
