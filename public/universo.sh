#!/bin/sh
# universo.sh — installs, updates and looks after UniVerso, the Verso server,
# on a Linux machine with systemd and apt or dnf (ADR 0075, revision of
# 2026-10-12). One file, POSIX sh, no dependency beyond curl and the
# system's own tools; `sh universo.sh --help` lists what it does.
#
# The canonical copy lives in the Verso repository, at
# packaging/server/universo.sh (https://github.com/SergioSJS/verso). The
# copy served at https://versomd.com/universo.sh is that file, copied into
# the site's repository (versomd-site, public/universo.sh) unchanged: an
# edit is made in the Verso repository first, then copied.
#
# Recommended use: download it, read it if you like, then run it —
#   curl -fsSLO https://versomd.com/universo.sh
#   sh universo.sh install
# What it does by hand is in docs/reference/server-install.md (sections 5
# and 6); this script only runs those steps and says each one.
#
# Messages in Brazilian Portuguese when LANG (or LC_ALL, LC_MESSAGES)
# starts with "pt", in English otherwise.

set -u

REPO=SergioSJS/verso
# Verso's release key, the one the app carries (app/src-tauri/src/update.rs)
# and docs/reference/server-install.md section 6 prints.
PUBKEY=RWS1zv2nvs/ng1hA0YspwOg7wGda98zkXjVfx8m9CtT5obRW5zabNHaT
ENV_FILE=/etc/universo/universo.env
ETC_DIR=/etc/universo
DATA_ROOT=/var/lib/universo
SERVICE=universo
DOCS=https://github.com/SergioSJS/verso/blob/main/docs/reference/server-install.md

case "${LC_ALL:-${LC_MESSAGES:-${LANG:-}}}" in
  pt*) PT=1 ;;
  *) PT=0 ;;
esac

# --- messages ---------------------------------------------------------------

# t EN PT: prints the message in the reader's language.
t() { if [ "$PT" = 1 ]; then printf '%s\n' "$2"; else printf '%s\n' "$1"; fi; }
step() { printf '==> '; t "$1" "$2"; }
info() { printf '    '; t "$1" "$2"; }
warn() { printf '!!  ' >&2; t "$1" "$2" >&2; }
die() { printf 'ERROR: ' >&2; t "$1" "$2" >&2; exit 1; }

usage() {
  if [ "$PT" = 1 ]; then
    cat <<'EOF'
universo.sh — instala e cuida do UniVerso, o servidor do Verso.

Uso: sh universo.sh <comando> [opções]

Comandos:
  install [--version X] [--package ARQ] [--url https://notas.exemplo]
      Baixa o pacote da release (a mais recente, sem --version) para esta
      arquitetura, confere a assinatura, instala com apt ou dnf, grava o
      endereço público em /etc/universo/universo.env, liga o serviço e diz
      o que fazer depois (o primeiro admin, HTTPS, as portas).
  update [--version X] [--package ARQ]
      Baixa, confere e instala por cima; configurações e dados ficam.
  uninstall [--purge]
      Remove o pacote. Com --purge também /var/lib/universo, /etc/universo
      e o usuário universo, depois de você digitar o nome da pasta.
  status            Estado do serviço, versão, endereço, tamanho dos dados,
                    as últimas 5 linhas do log.
  logs [-f]         O log do serviço (journalctl -u universo); -f acompanha.
  backup [PASTA]    Para o serviço por um instante, empacota dados, pastas
                    e configurações num .tar.gz com data e hora em PASTA
                    (/var/backups/universo por padrão) e liga de novo.
  reset-admin [E-MAIL]
                    Senha de admin perdida: imprime um link de uso único.
  firewall          Abre as portas 80 e 443 (ufw, firewalld ou iptables).
                    Só quando pedido.
  help              Esta ajuda.

Opções:
  --version X       Uma release em vez da mais recente (0.7.0 ou v0.7.0).
  --package ARQ     Um .deb ou .rpm já baixado; ARQ.sig ao lado é conferido.
  --url URL         O endereço que as pessoas digitam no navegador.
  --insecure-no-verify
                    Instala sem conferir assinatura nem checksum. Perigoso.

Enquanto o repositório é privado, o download pede um token do GitHub em
GITHUB_TOKEN (o comando explica como criar um), ou use --package.

Manual: https://github.com/SergioSJS/verso/blob/main/docs/reference/server-install.md
EOF
  else
    cat <<'EOF'
universo.sh — installs and looks after UniVerso, the Verso server.

Usage: sh universo.sh <command> [options]

Commands:
  install [--version X] [--package FILE] [--url https://notes.example]
      Downloads the release's package (the latest, without --version) for
      this architecture, checks its signature, installs it with apt or
      dnf, writes the public address into /etc/universo/universo.env,
      starts the service and says what to do next (the first admin,
      HTTPS, the ports).
  update [--version X] [--package FILE]
      Downloads, checks and installs over it; settings and data are kept.
  uninstall [--purge]
      Removes the package. With --purge also /var/lib/universo,
      /etc/universo and the universo user, after you type the folder's
      name back.
  status            The service's state, version, address, data sizes and
                    the last 5 lines of its log.
  logs [-f]         The service's log (journalctl -u universo); -f follows.
  backup [DIR]      Stops the service briefly, packs data, folders and
                    settings into a timestamped .tar.gz in DIR
                    (/var/backups/universo by default), starts it again.
  reset-admin [E-MAIL]
                    A lost admin password: prints a link to use once.
  firewall          Opens ports 80 and 443 (ufw, firewalld or iptables).
                    Only when asked.
  help              This help.

Options:
  --version X       A release instead of the latest (0.7.0 or v0.7.0).
  --package FILE    A .deb or .rpm already downloaded; FILE.sig beside it
                    is checked.
  --url URL         The address people type in the browser.
  --insecure-no-verify
                    Installs without checking a signature or checksum.
                    Dangerous.

While the repository is private, downloading needs a GitHub token in
GITHUB_TOKEN (the command explains how to make one), or use --package.

Guide: https://github.com/SergioSJS/verso/blob/main/docs/reference/server-install.md
EOF
  fi
}

# --- the machine ------------------------------------------------------------

need_root() {
  [ "$(id -u)" = 0 ] && return 0
  if command -v sudo >/dev/null 2>&1; then
    step "This needs root: running it again with sudo." \
         "Isto precisa de root: rodando de novo com sudo."
    exec sudo --preserve-env=GITHUB_TOKEN,LANG,LC_ALL,LC_MESSAGES sh "$0" "$@"
  fi
  die "This needs root. Run it as root (su -c 'sh universo.sh ...')." \
      "Isto precisa de root. Rode como root (su -c 'sh universo.sh ...')."
}

need() {
  command -v "$1" >/dev/null 2>&1 && return 0
  die "'$1' is missing. Install it ($2) and run again." \
      "Falta o '$1'. Instale ($2) e rode de novo."
}

detect_arch() {
  case "$(uname -m)" in
    x86_64|amd64) DEB_ARCH=amd64; RPM_ARCH=x86_64 ;;
    aarch64|arm64) DEB_ARCH=arm64; RPM_ARCH=aarch64 ;;
    *) die "This machine is $(uname -m); UniVerso is built for x86_64 and ARM64 only." \
           "Esta máquina é $(uname -m); o UniVerso é feito só para x86_64 e ARM64." ;;
  esac
}

detect_pm() {
  if command -v apt-get >/dev/null 2>&1 && command -v dpkg >/dev/null 2>&1; then
    PM=deb; PKG_RE="^universo-.*-$DEB_ARCH\\.deb\$"
  elif command -v dnf >/dev/null 2>&1 && command -v rpm >/dev/null 2>&1; then
    PM=rpm; PKG_RE="^universo-.*-$RPM_ARCH\\.rpm\$"
  else
    t "No apt nor dnf on this machine, so no package can be installed here.
Use the archive instead (section 6 of the guide):
  download universo-<version>-$(uname -m).tar.gz from the release,
  tar -xzf universo-<version>-$(uname -m).tar.gz
  cd universo-<version>-$(uname -m)
  VERSO_DATA_DIR=\$HOME/verso/data VERSO_FOLDERS_DIR=\$HOME/verso/folders ./bin/universo
The archive also holds the systemd unit and the settings' template.
Guide: $DOCS" \
      "Sem apt nem dnf nesta máquina, então nenhum pacote pode ser instalado aqui.
Use o arquivo compactado (seção 6 do manual):
  baixe universo-<versão>-$(uname -m).tar.gz da release,
  tar -xzf universo-<versão>-$(uname -m).tar.gz
  cd universo-<versão>-$(uname -m)
  VERSO_DATA_DIR=\$HOME/verso/data VERSO_FOLDERS_DIR=\$HOME/verso/folders ./bin/universo
O arquivo traz também a unidade do systemd e o modelo das configurações.
Manual: $DOCS" >&2
    exit 1
  fi
}

# The installed version, empty when not installed (a .deb removed but not
# purged counts as not installed).
installed_version() {
  if [ "$PM" = deb ]; then
    dpkg-query -W -f='${db:Status-Abbrev}|${Version}\n' universo 2>/dev/null \
      | awk -F'|' '$1 ~ /^ii/ { print $2 }'
  else
    rpm -q --qf '%{VERSION}-%{RELEASE}\n' universo 2>/dev/null | grep -v 'not installed' || true
  fi
}

package_version() {
  if [ "$PM" = deb ]; then dpkg-deb -f "$1" Version; else rpm -qp --qf '%{VERSION}-%{RELEASE}' "$1" 2>/dev/null; fi
}

running_version() {
  command -v universo >/dev/null 2>&1 && universo --version 2>/dev/null | head -n 1
}

# --- temporary files --------------------------------------------------------

TMPD=
cleanup() { [ -n "$TMPD" ] && rm -rf "$TMPD"; }
trap cleanup EXIT
trap 'exit 130' INT TERM

make_tmp() {
  [ -n "$TMPD" ] && return 0
  TMPD=$(mktemp -d) || die "Could not make a temporary directory." "Não foi possível criar um diretório temporário."
  # Others may pass through (apt reads the package as the _apt user) but
  # not list it; the token's header file is the owner's only.
  chmod 711 "$TMPD"
  mkdir "$TMPD/pkg" && chmod 755 "$TMPD/pkg"
}

# --- the settings file ------------------------------------------------------

# env_get NAME: the value of NAME in the settings file (the last line that
# sets it), surrounding quotes removed; empty when unset.
env_get() {
  [ -r "$ENV_FILE" ] || return 0
  awk -v n="$1" '
    index($0, n "=") == 1 { v = substr($0, length(n) + 2) }
    END {
      if (v ~ /^".*"$/ || v ~ /^'\''.*'\''$/) v = substr(v, 2, length(v) - 2)
      print v
    }' "$ENV_FILE"
}

# env_set NAME VALUE: every line that sets NAME takes the new value; when
# none does, the first commented "#NAME=" line does; else it is added at
# the end. Every other line, edited or not, stays as it was. The file
# keeps its owner and mode (written in place).
env_set() {
  [ -f "$ENV_FILE" ] || die "$ENV_FILE is missing: is the package installed?" \
                            "Falta o $ENV_FILE: o pacote está instalado?"
  awk -v n="$1" -v v="$2" '
    FNR == NR { if (index($0, n "=") == 1) set = 1; next }
    index($0, n "=") == 1 { print n "=" v; done = 1; next }
    !set && !done && index($0, "#" n "=") == 1 { print n "=" v; done = 1; next }
    { print }
    END { if (!done) print n "=" v }
  ' "$ENV_FILE" "$ENV_FILE" > "$ENV_FILE.tmp.$$" || die "Could not write $ENV_FILE." "Não foi possível gravar o $ENV_FILE."
  cat "$ENV_FILE.tmp.$$" > "$ENV_FILE"
  rm -f "$ENV_FILE.tmp.$$"
}

listen_port() {
  l=$(env_get VERSO_LISTEN)
  [ -n "$l" ] || l=127.0.0.1:7340
  printf '%s\n' "${l##*:}"
}

local_url() {
  if [ -n "$(env_get VERSO_TLS_CERT_FILE)" ]; then
    printf 'https://127.0.0.1:%s/\n' "$(listen_port)"
  else
    printf 'http://127.0.0.1:%s/\n' "$(listen_port)"
  fi
}

check_url() {
  case "$1" in
    http://*|https://*) ;;
    *) die "The address must start with https:// (or http:// for this machine only): $1" \
           "O endereço deve começar com https:// (ou http:// só para esta máquina): $1" ;;
  esac
  case "$1" in
    *[!A-Za-z0-9.:/_~%?=@+-]*) die "The address has a character it cannot have: $1" \
                                   "O endereço tem um caractere que não pode ter: $1" ;;
  esac
}

# ask PROMPT: reads one line from the terminal (or stdin when there is
# none) into ANSWER; empty at the end of input.
ask() {
  printf '%s' "$1"
  ANSWER=
  if (exec </dev/tty) 2>/dev/null; then
    IFS= read -r ANSWER </dev/tty || ANSWER=
  else
    IFS= read -r ANSWER || ANSWER=
  fi
}

# --- getting the package ----------------------------------------------------

token_help() {
  t "The repository $REPO is private for now: downloading its releases needs a GitHub token.
  1. Open https://github.com/settings/personal-access-tokens/new (signed in
     with an account that can see $REPO).
  2. Repository access: Only select repositories › $REPO.
     Permissions › Repository › Contents: Read-only. Generate.
  3. On this machine:  export GITHUB_TOKEN=github_pat_...   then run again.
Or download the .deb/.rpm and its .sig from the release page yourself and
use --package FILE." \
    "O repositório $REPO está privado por enquanto: baixar as releases pede um token do GitHub.
  1. Abra https://github.com/settings/personal-access-tokens/new (com uma
     conta que vê o $REPO).
  2. Repository access: Only select repositories › $REPO.
     Permissions › Repository › Contents: Read-only. Generate.
  3. Nesta máquina:  export GITHUB_TOKEN=github_pat_...   e rode de novo.
Ou baixe o .deb/.rpm e o .sig da página da release você mesmo e use
--package ARQ." >&2
}

# gh_get URL OUT [ACCEPT]: a GitHub API request; the token, when given,
# goes in a header file, never on the command line. Prints the HTTP code.
gh_get() {
  : > "$TMPD/hdr"
  chmod 600 "$TMPD/hdr"
  [ -n "${GITHUB_TOKEN:-}" ] && printf 'Authorization: Bearer %s\n' "$GITHUB_TOKEN" > "$TMPD/hdr"
  printf 'Accept: %s\nX-GitHub-Api-Version: 2022-11-28\n' "${3:-application/vnd.github+json}" >> "$TMPD/hdr"
  curl -sS -L --proto '=https' --retry 3 -H @"$TMPD/hdr" -o "$2" -w '%{http_code}' "$1" 2>"$TMPD/curl.err" || {
    cat "$TMPD/curl.err" >&2
    die "Could not reach GitHub ($1). Check this machine's network and DNS." \
        "Não foi possível falar com o GitHub ($1). Confira a rede e o DNS desta máquina."
  }
}

# pick_asset JSON: from a release (or a list of them, newest first) the
# first one, not a draft, that has this machine's package. Prints
# tag<TAB>name<TAB>url<TAB>digest<TAB>signature-url.
pick_asset() {
  if command -v jq >/dev/null 2>&1; then
    jq -r --arg re "$PKG_RE" '
      [ (if type == "array" then .[] else . end) | select(.draft | not) | . as $r
        | $r.assets[] | select(.name | test($re)) | . as $a
        | [ $r.tag_name, $a.name, $a.url, ($a.digest // ""),
            ([ $r.assets[] | select(.name == ($a.name + ".sig")) | .url ] | first // "") ] ]
      | first // empty | @tsv' "$1"
  elif command -v python3 >/dev/null 2>&1; then
    python3 -I -c '
import json, re, sys
data = json.load(open(sys.argv[1]))
rels = data if isinstance(data, list) else [data]
for r in rels:
    if r.get("draft"):
        continue
    for a in r.get("assets", []):
        if re.search(sys.argv[2], a["name"]):
            sig = next((s["url"] for s in r["assets"] if s["name"] == a["name"] + ".sig"), "")
            print("\t".join([r["tag_name"], a["name"], a["url"], a.get("digest") or "", sig]))
            sys.exit(0)
' "$1" "$PKG_RE"
  else
    die "Reading GitHub's answer needs jq or python3. Install one (apt install jq / dnf install jq), or use --package FILE." \
        "Ler a resposta do GitHub pede jq ou python3. Instale um (apt install jq / dnf install jq), ou use --package ARQ."
  fi
}

# fetch_package VERSION: downloads this machine's package and its
# signature into $TMPD/pkg. Sets PKG, SIG (may be empty), DIGEST (may be
# empty) and TAG.
fetch_package() {
  need curl "apt install curl / dnf install curl"
  make_tmp
  if [ -n "$1" ]; then
    v=${1#v}
    api="https://api.github.com/repos/$REPO/releases/tags/v$v"
    step "Looking up release v$v of $REPO on GitHub." "Procurando a release v$v do $REPO no GitHub."
  else
    api="https://api.github.com/repos/$REPO/releases?per_page=30"
    step "Looking up the latest release of $REPO on GitHub." "Procurando a release mais recente do $REPO no GitHub."
  fi
  code=$(gh_get "$api" "$TMPD/release.json")
  case "$code" in
    200) ;;
    401) die "GitHub refused the token in GITHUB_TOKEN (401): it is wrong or expired. Make a new one." \
             "O GitHub recusou o token em GITHUB_TOKEN (401): está errado ou expirou. Crie outro." ;;
    403|429) die "GitHub refused the request ($code), likely its rate limit. Wait an hour, or set GITHUB_TOKEN." \
                 "O GitHub recusou o pedido ($code), provavelmente pelo limite de uso. Espere uma hora, ou defina GITHUB_TOKEN." ;;
    404)
      if [ -z "${GITHUB_TOKEN:-}" ]; then
        token_help
        exit 1
      elif [ -n "$1" ]; then
        die "No release v${1#v} in $REPO (or the token cannot see it). The releases: https://github.com/$REPO/releases" \
            "Não há release v${1#v} no $REPO (ou o token não a vê). As releases: https://github.com/$REPO/releases"
      else
        die "The token in GITHUB_TOKEN cannot see $REPO (404): give it access to that repository, Contents: Read-only." \
            "O token em GITHUB_TOKEN não vê o $REPO (404): dê acesso a esse repositório, Contents: Read-only."
      fi ;;
    *) die "GitHub answered $code to $api." "O GitHub respondeu $code para $api." ;;
  esac
  line=$(pick_asset "$TMPD/release.json")
  if [ -z "$line" ] && [ -n "$1" ]; then
    die "Release v${1#v} has no UniVerso package for this machine ($PM, $(uname -m))." \
        "A release v${1#v} não tem pacote do UniVerso para esta máquina ($PM, $(uname -m))."
  elif [ -z "$line" ]; then
    die "No release of $REPO has a UniVerso package for this machine ($PM, $(uname -m)) yet. https://github.com/$REPO/releases" \
        "Nenhuma release do $REPO tem ainda um pacote do UniVerso para esta máquina ($PM, $(uname -m)). https://github.com/$REPO/releases"
  fi
  TAG=$(printf '%s\n' "$line" | cut -f1)
  name=$(printf '%s\n' "$line" | cut -f2)
  url=$(printf '%s\n' "$line" | cut -f3)
  DIGEST=$(printf '%s\n' "$line" | cut -f4)
  sigurl=$(printf '%s\n' "$line" | cut -f5)
  case "$name" in
    */*|.*) die "Unexpected file name in the release: $name" "Nome de arquivo inesperado na release: $name" ;;
  esac
  PKG="$TMPD/pkg/$name"
  step "Downloading $name ($TAG)." "Baixando $name ($TAG)."
  code=$(gh_get "$url" "$PKG" application/octet-stream)
  [ "$code" = 200 ] || die "The download failed (HTTP $code). Run again; if it keeps failing, use --package." \
                           "O download falhou (HTTP $code). Rode de novo; se continuar, use --package."
  chmod 644 "$PKG"
  SIG=
  if [ -n "$sigurl" ]; then
    code=$(gh_get "$sigurl" "$PKG.sig" application/octet-stream)
    if [ "$code" = 200 ]; then SIG="$PKG.sig"; else rm -f "$PKG.sig"; fi
  fi
}

# local_package FILE: a package already on this machine, copied where apt
# can read it. Its signature is FILE.sig when present.
local_package() {
  [ -f "$1" ] || die "No such file: $1" "Arquivo não encontrado: $1"
  case "$1" in
    *.deb) [ "$PM" = deb ] || die "$1 is a .deb, but this machine uses rpm." "$1 é um .deb, mas esta máquina usa rpm." ;;
    *.rpm) [ "$PM" = rpm ] || die "$1 is an .rpm, but this machine uses apt." "$1 é um .rpm, mas esta máquina usa apt." ;;
    *) die "--package takes a .deb or an .rpm: $1" "--package recebe um .deb ou um .rpm: $1" ;;
  esac
  make_tmp
  PKG="$TMPD/pkg/$(basename "$1")"
  if ! cp "$1" "$PKG" || ! chmod 644 "$PKG"; then
    die "Could not copy $1." "Não foi possível copiar $1."
  fi
  SIG=
  [ -f "$1.sig" ] && SIG="$1.sig"
  DIGEST=
  TAG=
  step "Using the package $1." "Usando o pacote $1."
}

# verify: the signature with minisign (Verso's release key, the signed
# comment naming the file), else the sha256 GitHub published, else refuse
# unless --insecure-no-verify.
verify() {
  name=$(basename "$PKG")
  if [ -n "$SIG" ] && command -v minisign >/dev/null 2>&1; then
    step "Checking the signature with minisign and Verso's release key." \
         "Conferindo a assinatura com o minisign e a chave de release do Verso."
    base64 -d < "$SIG" > "$TMPD/file.minisig" 2>/dev/null \
      || die "$SIG is not a signature file of the release (base64 expected)." \
             "$SIG não é um arquivo de assinatura da release (esperado base64)."
    comment=$(minisign -V -Q -P "$PUBKEY" -m "$PKG" -x "$TMPD/file.minisig" 2>&1) \
      || die "THE SIGNATURE DOES NOT MATCH ($comment). Do not install this file: download it again from the release." \
             "A ASSINATURA NÃO CONFERE ($comment). Não instale este arquivo: baixe de novo da release."
    case "$comment" in
      *"file:$name"*) info "Signature good: $name, signed by Verso's release key." \
                           "Assinatura válida: $name, assinado pela chave de release do Verso." ;;
      *) die "The signature is good but names another file ($comment); the package was renamed or swapped. Use the release's own file name." \
             "A assinatura é válida mas nomeia outro arquivo ($comment); o pacote foi renomeado ou trocado. Use o nome de arquivo da própria release." ;;
    esac
    return 0
  fi
  case "$DIGEST" in
    sha256:*)
      need sha256sum "coreutils"
      step "minisign is not installed: checking the sha256 GitHub published for the file instead." \
           "O minisign não está instalado: conferindo o sha256 que o GitHub publicou para o arquivo."
      got=$(sha256sum "$PKG" | cut -d' ' -f1)
      [ "$got" = "${DIGEST#sha256:}" ] || die "THE CHECKSUM DOES NOT MATCH (got $got, expected ${DIGEST#sha256:}). Do not install this file; run again." \
                                              "O CHECKSUM NÃO CONFERE (deu $got, esperado ${DIGEST#sha256:}). Não instale este arquivo; rode de novo."
      info "Checksum good. It proves the download is the file uploaded to the release; the signature (sudo apt install minisign) also proves who made it." \
           "Checksum válido. Prova que o download é o arquivo enviado à release; a assinatura (sudo apt install minisign) prova também quem o fez."
      return 0 ;;
  esac
  if [ "$INSECURE" = 1 ]; then
    warn "********************************************************************" \
         "********************************************************************"
    warn "NOT VERIFIED: --insecure-no-verify. Nothing proves $name is Verso's." \
         "NÃO CONFERIDO: --insecure-no-verify. Nada prova que $name é do Verso."
    warn "Install minisign and use the release's .sig whenever you can." \
         "Instale o minisign e use o .sig da release sempre que puder."
    warn "********************************************************************" \
         "********************************************************************"
    return 0
  fi
  if [ -z "$SIG" ]; then
    die "Nothing to check $name with: no $name.sig beside it and no published checksum. Put the release's .sig beside it, or (not recommended) pass --insecure-no-verify." \
        "Nada com que conferir $name: nenhum $name.sig ao lado e nenhum checksum publicado. Ponha o .sig da release ao lado, ou (não recomendado) passe --insecure-no-verify."
  fi
  die "The signature needs minisign, which is not installed: sudo apt install minisign (or dnf install minisign), then run again." \
      "A assinatura pede o minisign, que não está instalado: sudo apt install minisign (ou dnf install minisign), e rode de novo."
}

# install_pkg MODE: MODE is "new", "same" (reinstall) or "upgrade".
install_pkg() {
  if [ "$PM" = deb ]; then
    step "Installing with apt-get: $(basename "$PKG")." "Instalando com apt-get: $(basename "$PKG")."
    set -- -y -o Dpkg::Options::=--force-confdef -o Dpkg::Options::=--force-confold
    [ "$MODE" = same ] && set -- "$@" --reinstall
    DEBIAN_FRONTEND=noninteractive apt-get install "$@" "$PKG" \
      || die "apt-get could not install the package (above). Fix what it says (often: another apt is running; wait and retry)." \
             "O apt-get não conseguiu instalar o pacote (acima). Corrija o que ele diz (muitas vezes: outro apt rodando; espere e tente de novo)."
  else
    if [ "$MODE" = same ]; then
      step "Reinstalling with dnf: $(basename "$PKG")." "Reinstalando com dnf: $(basename "$PKG")."
      dnf reinstall -y "$PKG" || die "dnf could not reinstall the package (above)." "O dnf não conseguiu reinstalar o pacote (acima)."
    else
      step "Installing with dnf: $(basename "$PKG")." "Instalando com dnf: $(basename "$PKG")."
      dnf install -y "$PKG" || die "dnf could not install the package (above)." "O dnf não conseguiu instalar o pacote (acima)."
    fi
  fi
}

# compare OLD NEW: prints lt, eq or gt (NEW against OLD).
compare() {
  if [ "$PM" = deb ]; then
    if dpkg --compare-versions "$2" lt "$1"; then echo lt
    elif dpkg --compare-versions "$2" eq "$1"; then echo eq
    else echo gt; fi
  else
    for x in "$1" "$2"; do
      case "$x" in *[!A-Za-z0-9.~+_^-]*) echo gt; return 0 ;; esac
    done
    c=$(rpm --eval "%{lua: print(rpm.vercmp('$2', '$1'))}" 2>/dev/null)
    case "$c" in -1) echo lt ;; 0) echo eq ;; *) echo gt ;; esac
  fi
}

# --- the service ------------------------------------------------------------

wait_up() {
  url=$(local_url)
  step "Waiting for the server to answer at $url." "Esperando o servidor responder em $url."
  i=0
  while [ "$i" -lt 30 ]; do
    if curl -fsSk -o /dev/null "$url" 2>/dev/null; then
      info "It answers." "Ele responde."
      return 0
    fi
    i=$((i + 1))
    sleep 1
  done
  warn "No answer in 30 seconds. Its state and last log lines:" \
       "Sem resposta em 30 segundos. O estado e as últimas linhas do log:"
  systemctl --no-pager status "$SERVICE" >&2 || true
  journalctl -u "$SERVICE" -n 20 --no-pager >&2 || true
  die "Read the log above: usually a setting in $ENV_FILE (fix it, then: sudo systemctl restart universo)." \
      "Leia o log acima: em geral uma configuração no $ENV_FILE (corrija e: sudo systemctl restart universo)."
}

next_steps() {
  url=$(env_get VERSO_PUBLIC_URL)
  port=$(listen_port)
  admin=$(env_get VERSO_ADMIN_EMAIL)
  host=
  case "$url" in https://*) host=${url#https://}; host=${host%%/*}; host=${host%%:*} ;; esac
  [ -n "$host" ] || host=notes.example.com
  link=$(journalctl -u "$SERVICE" --no-pager 2>/dev/null | grep -o 'http[^ ]*/setup?token=[^ ]*' | tail -n 1)
  echo
  t "UniVerso is running. Next:" "O UniVerso está rodando. Agora:"
  echo
  t "1. The first admin (section 9 of the guide)." "1. O primeiro admin (seção 9 do manual)."
  if [ -n "$admin" ]; then
    t "   It is $admin, with the password set in $ENV_FILE (VERSO_ADMIN_PASSWORD),
   read on the first start only. Sign in, then remove the password from that file." \
      "   É $admin, com a senha definida no $ENV_FILE (VERSO_ADMIN_PASSWORD),
   lida só na primeira partida. Entre, depois tire a senha desse arquivo."
  elif [ -n "$link" ]; then
    t "   Open this link (valid for one hour, once) and make the admin's account:
     $link
   It was printed in the log (sudo journalctl -u universo). If the hour passes,
   restart the service for a new one: sudo systemctl restart universo" \
      "   Abra este link (vale uma hora, uma vez) e crie a conta do admin:
     $link
   Ele saiu no log (sudo journalctl -u universo). Se a hora passar,
   reinicie o serviço para ter outro: sudo systemctl restart universo"
    case "$link" in
      http://localhost*|http://127.0.0.1*) t "   From another computer, through SSH: ssh -L $port:127.0.0.1:$port <this machine>, then open the link there." \
                                             "   De outro computador, por SSH: ssh -L $port:127.0.0.1:$port <esta máquina>, e abra o link lá." ;;
    esac
  else
    t "   The log prints a one-hour setup link: sudo journalctl -u universo | grep setup" \
      "   O log imprime um link de configuração de uma hora: sudo journalctl -u universo | grep setup"
  fi
  echo
  t "2. HTTPS (section 8). The server signs no one in over plain HTTP from another machine. Either:" \
    "2. HTTPS (seção 8). O servidor não deixa ninguém entrar por HTTP puro de outra máquina. Ou:"
  t "   a. Caddy, with a domain whose DNS points at this machine:" \
    "   a. Caddy, com um domínio cujo DNS aponta para esta máquina:"
  if [ "$PM" = deb ]; then echo "        sudo apt install caddy"; else echo "        sudo dnf install caddy"; fi
  printf "        printf '%%s\\\\n' '%s' 'reverse_proxy 127.0.0.1:%s' | sudo tee /etc/caddy/Caddyfile\n" "$host" "$port"
  echo "        sudo systemctl reload caddy"
  t "      and in $ENV_FILE: VERSO_PUBLIC_URL=https://$host and VERSO_TRUSTED_PROXY=127.0.0.1,
      then: sudo systemctl restart universo" \
    "      e no $ENV_FILE: VERSO_PUBLIC_URL=https://$host e VERSO_TRUSTED_PROXY=127.0.0.1,
      depois: sudo systemctl restart universo"
  t "   b. Tailscale, for your own devices: tailscale serve --bg $port
      and VERSO_PUBLIC_URL=https://<machine>.<tailnet>.ts.net" \
    "   b. Tailscale, para os seus aparelhos: tailscale serve --bg $port
      e VERSO_PUBLIC_URL=https://<máquina>.<tailnet>.ts.net"
  echo
  t "3. Ports. For Caddy, 80 and 443 must reach this machine: sh universo.sh firewall
   opens them here; a cloud also has its own (on Oracle: the VCN's security list).
   Port $port stays closed: Caddy reaches it on this machine." \
    "3. Portas. Para o Caddy, 80 e 443 precisam chegar a esta máquina: sh universo.sh firewall
   abre aqui; uma nuvem tem também as suas (na Oracle: a security list da VCN).
   A porta $port fica fechada: o Caddy chega nela nesta máquina."
  echo
  t "Then connect the app: Settings › Servers, the address $url. Back up with: sh universo.sh backup" \
    "Depois conecte o app: Ajustes › Servidores, o endereço $url. Backup com: sh universo.sh backup"
  t "Guide: $DOCS" "Manual: $DOCS"
}

# --- commands ---------------------------------------------------------------

cmd_install() {
  detect_arch
  detect_pm
  old=$(installed_version)
  [ -z "$old" ] || die "UniVerso $old is already installed. To change version: sh universo.sh update. To change the address: edit $ENV_FILE, then sudo systemctl restart universo." \
                       "O UniVerso $old já está instalado. Para mudar de versão: sh universo.sh update. Para mudar o endereço: edite o $ENV_FILE e sudo systemctl restart universo."
  [ -z "$URL" ] || check_url "$URL"
  if [ -n "$PKGFILE" ]; then local_package "$PKGFILE"; else fetch_package "$VERSION"; fi
  verify
  MODE=new
  install_pkg
  info "(The package's own note above says it is not running yet: this script sets it up and starts it now.)" \
       "(A nota do próprio pacote acima diz que ele ainda não está rodando: este script o configura e liga agora.)"
  if [ -f "$ENV_FILE.rpmsave" ]; then
    step "Your settings from before the removal are in $ENV_FILE.rpmsave: putting them back (the new template kept as $ENV_FILE.rpmnew)." \
         "As suas configurações de antes da remoção estão no $ENV_FILE.rpmsave: devolvendo-as (o modelo novo fica como $ENV_FILE.rpmnew)."
    mv "$ENV_FILE" "$ENV_FILE.rpmnew" && mv "$ENV_FILE.rpmsave" "$ENV_FILE"
  fi
  current=$(env_get VERSO_PUBLIC_URL)
  if [ -z "$URL" ] && [ -n "$current" ]; then
    info "VERSO_PUBLIC_URL is already $current in $ENV_FILE: kept." \
         "O VERSO_PUBLIC_URL já é $current no $ENV_FILE: mantido."
  else
    if [ -z "$URL" ]; then
      echo
      t "The address people will type in the browser, with https (for example
https://notes.example.com). Enter leaves it empty for now: only this machine
can then sign in, and you set it later in $ENV_FILE." \
        "O endereço que as pessoas vão digitar no navegador, com https (por exemplo
https://notas.exemplo.com). Enter deixa vazio por enquanto: só esta máquina
consegue entrar, e você define depois no $ENV_FILE."
      ask "VERSO_PUBLIC_URL: "
      URL=$ANSWER
      [ -z "$URL" ] || check_url "$URL"
    fi
    URL=${URL%/}
    if [ -n "$URL" ]; then
      step "Writing VERSO_PUBLIC_URL=$URL into $ENV_FILE (the other lines untouched)." \
           "Gravando VERSO_PUBLIC_URL=$URL no $ENV_FILE (as outras linhas intocadas)."
      env_set VERSO_PUBLIC_URL "$URL"
    else
      info "VERSO_PUBLIC_URL left empty." "VERSO_PUBLIC_URL deixado vazio."
    fi
  fi
  step "Enabling and starting the service: systemctl enable --now universo." \
       "Habilitando e ligando o serviço: systemctl enable --now universo."
  systemctl enable --now "$SERVICE" || die "systemd could not start it: sudo journalctl -u universo -n 50 says why." \
                                           "O systemd não conseguiu ligá-lo: sudo journalctl -u universo -n 50 diz por quê."
  wait_up
  info "Installed: $(running_version)." "Instalado: $(running_version)."
  next_steps
}

cmd_update() {
  detect_arch
  detect_pm
  old=$(installed_version)
  [ -n "$old" ] || die "UniVerso is not installed here: sh universo.sh install" \
                       "O UniVerso não está instalado aqui: sh universo.sh install"
  oldrun=$(running_version)
  info "Installed now: $oldrun (package $old). Settings and data are kept; a backup first is wise: sh universo.sh backup" \
       "Instalado agora: $oldrun (pacote $old). Configurações e dados ficam; um backup antes é prudente: sh universo.sh backup"
  if [ -n "$PKGFILE" ]; then local_package "$PKGFILE"; else fetch_package "$VERSION"; fi
  verify
  new=$(package_version "$PKG")
  case "$(compare "$old" "$new")" in
    lt) die "The package is $new, older than the installed $old. Going back is not supported: the database may already be newer." \
            "O pacote é $new, mais antigo que o instalado $old. Voltar não é suportado: o banco pode já estar mais novo." ;;
    eq)
      if [ -z "$PKGFILE" ]; then
        step "Already at $new, the release's version: nothing to do." "Já está na $new, a versão da release: nada a fazer."
        return 0
      fi
      MODE=same; info "Same version ($new): reinstalling it." "Mesma versão ($new): reinstalando." ;;
    *) MODE=upgrade ;;
  esac
  install_pkg
  if systemctl is-enabled --quiet "$SERVICE" 2>/dev/null; then
    step "Restarting the service." "Reiniciando o serviço."
    systemctl restart "$SERVICE" || die "systemd could not restart it: sudo journalctl -u universo -n 50 says why." \
                                        "O systemd não conseguiu reiniciá-lo: sudo journalctl -u universo -n 50 diz por quê."
    wait_up
  else
    warn "The service is not enabled, so it was not started: sudo systemctl enable --now universo" \
         "O serviço não está habilitado, então não foi ligado: sudo systemctl enable --now universo"
  fi
  step "Updated: $oldrun → $(running_version)." "Atualizado: $oldrun → $(running_version)."
}

cmd_uninstall() {
  detect_arch
  detect_pm
  old=$(installed_version)
  data=$(env_get VERSO_DATA_DIR)
  folders=$(env_get VERSO_FOLDERS_DIR)
  if [ "$PURGE" = 1 ]; then
    t "This removes UniVerso AND everything it keeps:
  $DATA_ROOT   the accounts, sessions and audit log, and the folders of notes
  $ETC_DIR       the settings
  the universo user and group
There is no undo. A copy first: sh universo.sh backup" \
      "Isto remove o UniVerso E tudo o que ele guarda:
  $DATA_ROOT   as contas, sessões e o log de auditoria, e as pastas de notas
  $ETC_DIR       as configurações
  o usuário e o grupo universo
Não há como desfazer. Uma cópia antes: sh universo.sh backup"
    ask "$(t "Type $DATA_ROOT to confirm: " "Digite $DATA_ROOT para confirmar: ")"
    [ "$ANSWER" = "$DATA_ROOT" ] || die "Not confirmed: nothing was removed." "Não confirmado: nada foi removido."
  fi
  if [ -n "$old" ] || { [ "$PM" = deb ] && dpkg-query -W universo >/dev/null 2>&1; }; then
    if [ "$PM" = deb ]; then
      if [ "$PURGE" = 1 ]; then
        step "Removing the package with its settings: apt-get purge universo." "Removendo o pacote com as configurações: apt-get purge universo."
        DEBIAN_FRONTEND=noninteractive apt-get purge -y universo || die "apt-get could not remove it (above)." "O apt-get não conseguiu removê-lo (acima)."
      else
        step "Removing the package: apt-get remove universo." "Removendo o pacote: apt-get remove universo."
        DEBIAN_FRONTEND=noninteractive apt-get remove -y universo || die "apt-get could not remove it (above)." "O apt-get não conseguiu removê-lo (acima)."
      fi
    else
      step "Removing the package: dnf remove universo." "Removendo o pacote: dnf remove universo."
      dnf remove -y universo || die "dnf could not remove it (above)." "O dnf não conseguiu removê-lo (acima)."
    fi
  else
    info "The package is not installed." "O pacote não está instalado."
  fi
  if [ "$PURGE" = 1 ]; then
    step "Deleting $DATA_ROOT and $ETC_DIR." "Apagando $DATA_ROOT e $ETC_DIR."
    rm -rf "$DATA_ROOT" "$ETC_DIR"
    if getent passwd universo >/dev/null 2>&1; then
      step "Deleting the universo user." "Apagando o usuário universo."
      userdel universo || warn "userdel failed: remove it by hand (userdel universo)." "O userdel falhou: remova à mão (userdel universo)."
    fi
    if getent group universo >/dev/null 2>&1; then
      groupdel universo || warn "groupdel failed: remove it by hand (groupdel universo)." "O groupdel falhou: remova à mão (groupdel universo)."
    fi
    for d in "$data" "$folders"; do
      case "$d" in
        ''|"$DATA_ROOT"/*) ;;
        *) [ -e "$d" ] && warn "$d is outside $DATA_ROOT and was NOT deleted: remove it yourself if you mean to." \
                               "$d fica fora de $DATA_ROOT e NÃO foi apagado: remova você mesmo se quiser." ;;
      esac
    done
    step "UniVerso and its data are gone." "O UniVerso e os dados dele foram removidos."
  else
    t "Left in place, on purpose — they are your data, not the program's:
  $DATA_ROOT   the accounts and the folders of notes
  $ETC_DIR       your settings
  the universo user, who owns those files
Installing again starts from them. To remove them too: sh universo.sh uninstall --purge" \
      "Deixado no lugar, de propósito — são os seus dados, não o programa:
  $DATA_ROOT   as contas e as pastas de notas
  $ETC_DIR       as suas configurações
  o usuário universo, dono desses arquivos
Instalar de novo começa deles. Para removê-los também: sh universo.sh uninstall --purge"
  fi
}

cmd_status() {
  detect_arch
  detect_pm
  ver=$(installed_version)
  if [ -z "$ver" ]; then
    t "UniVerso is not installed." "O UniVerso não está instalado."
    [ -d "$DATA_ROOT" ] && t "Its data is still in $DATA_ROOT." "Os dados dele ainda estão em $DATA_ROOT."
    return 0
  fi
  active=$(systemctl is-active "$SERVICE" 2>/dev/null)
  enabled=$(systemctl is-enabled "$SERVICE" 2>/dev/null)
  listen=$(env_get VERSO_LISTEN); [ -n "$listen" ] || listen=127.0.0.1:7340
  public=$(env_get VERSO_PUBLIC_URL)
  data=$(env_get VERSO_DATA_DIR); [ -n "$data" ] || data=$DATA_ROOT/data
  folders=$(env_get VERSO_FOLDERS_DIR); [ -n "$folders" ] || folders=$DATA_ROOT/folders
  t "Service:      $active, $enabled at boot" "Serviço:      $active, $enabled na partida"
  t "Version:      $(running_version) (package $ver)" "Versão:       $(running_version) (pacote $ver)"
  t "Listens on:   $listen" "Escuta em:    $listen"
  t "Public URL:   ${public:-(not set)}" "URL pública:  ${public:-(não definida)}"
  if curl -fsSk -o /dev/null "$(local_url)" 2>/dev/null; then
    t "Answers:      yes ($(local_url))" "Responde:     sim ($(local_url))"
  else
    t "Answers:      NO ($(local_url))" "Responde:     NÃO ($(local_url))"
  fi
  t "Data:         $(du -sh "$data" 2>/dev/null | cut -f1) in $data" "Dados:        $(du -sh "$data" 2>/dev/null | cut -f1) em $data"
  t "Folders:      $(du -sh "$folders" 2>/dev/null | cut -f1) in $folders" "Pastas:       $(du -sh "$folders" 2>/dev/null | cut -f1) em $folders"
  t "Last log lines:" "Últimas linhas do log:"
  journalctl -u "$SERVICE" -n 5 --no-pager -o short-iso 2>/dev/null | sed 's/^/  /'
}

cmd_logs() {
  if [ "$FOLLOW" = 1 ]; then
    exec journalctl -u "$SERVICE" -f
  fi
  exec journalctl -u "$SERVICE" --no-pager -n 200
}

# kb N: N kilobytes, said in KB or MB.
kb() { if [ "$1" -lt 10240 ]; then echo "$1 KB"; else echo "$(($1 / 1024)) MB"; fi; }

cmd_backup() {
  dir=${BACKUP_DIR:-/var/backups/universo}
  case "$dir" in /*) ;; *) dir="$(pwd)/$dir" ;; esac
  [ -d "$DATA_ROOT" ] || die "Nothing to back up: $DATA_ROOT does not exist." "Nada para copiar: $DATA_ROOT não existe."
  data=$(env_get VERSO_DATA_DIR); [ -n "$data" ] || data=$DATA_ROOT/data
  folders=$(env_get VERSO_FOLDERS_DIR); [ -n "$folders" ] || folders=$DATA_ROOT/folders
  case "$dir/" in
    "$DATA_ROOT"/*|"$data"/*|"$folders"/*|"$ETC_DIR"/*)
      die "The backup cannot go inside what it copies ($dir). Choose another directory." \
          "O backup não pode ir para dentro do que ele copia ($dir). Escolha outra pasta." ;;
  esac
  mkdir -p "$dir" || die "Could not make $dir." "Não foi possível criar $dir."
  # What goes in, as paths relative to / (tar -C /): the data root and the
  # settings, plus each directory of the settings that lies outside them.
  set -- "${DATA_ROOT#/}"
  [ -d "$ETC_DIR" ] && set -- "$@" "${ETC_DIR#/}"
  for d in "$data" "$folders"; do
    case "$d" in "$DATA_ROOT"/*) ;; *) [ -d "$d" ] && set -- "$@" "${d#/}" ;; esac
  done
  need_k=0
  for p in "$@"; do
    k=$(du -sk "/$p" 2>/dev/null | cut -f1)
    need_k=$((need_k + ${k:-0}))
  done
  free_k=$(df -Pk "$dir" | awk 'NR == 2 { print $4 }')
  if [ "${free_k:-0}" -lt "$need_k" ]; then
    die "$dir has $(kb "$free_k") free; the backup may need up to $(kb "$need_k") (before compression). Free space or choose another directory: sh universo.sh backup /other/dir" \
        "$dir tem $(kb "$free_k") livres; o backup pode precisar de até $(kb "$need_k") (antes da compressão). Libere espaço ou escolha outra pasta: sh universo.sh backup /outra/pasta"
  fi
  file="$dir/universo-backup-$(date +%Y%m%d-%H%M%S).tar.gz"
  was_active=0
  if systemctl is-active --quiet "$SERVICE" 2>/dev/null; then
    was_active=1
    step "Stopping the service for a consistent copy." "Parando o serviço para uma cópia consistente."
    systemctl stop "$SERVICE" || die "Could not stop the service." "Não foi possível parar o serviço."
    # Whatever happens next, the service comes back.
    trap 'systemctl start "$SERVICE" >/dev/null 2>&1; cleanup' EXIT
  fi
  step "Packing /$(printf '%s ' "$@" | sed 's/ $//; s# # /#g') into $file." \
       "Empacotando /$(printf '%s ' "$@" | sed 's/ $//; s# # /#g') em $file."
  umask 077
  if ! tar -czpf "$file" -C / "$@"; then
    rm -f "$file"
    die "tar failed (above); the service is started again. Nothing was kept." \
        "O tar falhou (acima); o serviço é ligado de novo. Nada foi guardado."
  fi
  if [ "$was_active" = 1 ]; then
    step "Starting the service again." "Ligando o serviço de novo."
    systemctl start "$SERVICE" || warn "It did not start: sudo journalctl -u universo -n 50" "Ele não ligou: sudo journalctl -u universo -n 50"
    trap cleanup EXIT
  fi
  t "Backup: $file ($(du -h "$file" | cut -f1)), readable by root only.
It holds the accounts, the notes and $ENV_FILE (which may hold a password):
keep it somewhere safe, and copy it off this machine (rclone, scp).
To restore: sudo systemctl stop universo; sudo tar -xzpf $file -C /; sudo systemctl start universo" \
    "Backup: $file ($(du -h "$file" | cut -f1)), legível só pelo root.
Contém as contas, as notas e o $ENV_FILE (que pode ter uma senha):
guarde em lugar seguro, e copie para fora desta máquina (rclone, scp).
Para restaurar: sudo systemctl stop universo; sudo tar -xzpf $file -C /; sudo systemctl start universo"
}

cmd_reset_admin() {
  command -v universo >/dev/null 2>&1 || die "UniVerso is not installed here." "O UniVerso não está instalado aqui."
  email=$EMAIL
  if [ -z "$email" ]; then
    ask "$(t "The admin's e-mail: " "O e-mail do admin: ")"
    email=$ANSWER
  fi
  case "$email" in
    *@*) ;;
    *) die "That is not an e-mail address: $email" "Isso não é um endereço de e-mail: $email" ;;
  esac
  step "Running, as the universo user: universo admin reset $email (section 10 of the guide)." \
       "Rodando, como o usuário universo: universo admin reset $email (seção 10 do manual)."
  # The command of section 10, with the address passed as an argument
  # instead of inside the quoted script.
  # shellcheck disable=SC2016 # $1 is expanded by the inner sh, on purpose.
  if command -v sudo >/dev/null 2>&1; then
    sudo -u universo -H sh -c 'set -a; . /etc/universo/universo.env; exec universo admin reset "$1"' sh "$email"
  else
    runuser -u universo -- env HOME="$DATA_ROOT" sh -c 'set -a; . /etc/universo/universo.env; exec universo admin reset "$1"' sh "$email"
  fi || die "The reset failed (above). Is the address the admin's?" "A redefinição falhou (acima). O endereço é o do admin?"
  t "Open that link once to choose a new password; the account's sessions were ended." \
    "Abra esse link uma vez para escolher uma senha nova; as sessões da conta foram encerradas."
}

# iptables_open TOOL: an ACCEPT for 80 and 443 before the chain's first
# REJECT or DROP (Oracle's Ubuntu images end INPUT with a REJECT).
iptables_open() {
  for p in 80 443; do
    if "$1" -C INPUT -p tcp -m state --state NEW --dport "$p" -j ACCEPT 2>/dev/null; then
      info "$1: port $p already open." "$1: porta $p já aberta."
      continue
    fi
    pos=$("$1" -L INPUT --line-numbers -n | awk '$2 == "REJECT" || $2 == "DROP" { print $1; exit }')
    [ -n "$pos" ] || pos=1
    step "$1 -I INPUT $pos -p tcp -m state --state NEW --dport $p -j ACCEPT" \
         "$1 -I INPUT $pos -p tcp -m state --state NEW --dport $p -j ACCEPT"
    "$1" -I INPUT "$pos" -p tcp -m state --state NEW --dport "$p" -j ACCEPT \
      || die "$1 failed (above)." "O $1 falhou (acima)."
  done
}

cmd_firewall() {
  if command -v ufw >/dev/null 2>&1 && ufw status 2>/dev/null | grep -q 'Status: active'; then
    step "ufw is active: allowing 80/tcp and 443/tcp." "O ufw está ativo: liberando 80/tcp e 443/tcp."
    if ! ufw allow 80/tcp || ! ufw allow 443/tcp; then
      die "ufw failed (above)." "O ufw falhou (acima)."
    fi
  elif command -v firewall-cmd >/dev/null 2>&1 && firewall-cmd --state >/dev/null 2>&1; then
    step "firewalld is running: adding the http and https services, permanently." \
         "O firewalld está rodando: adicionando os serviços http e https, de forma permanente."
    if ! firewall-cmd --permanent --add-service=http || ! firewall-cmd --permanent --add-service=https \
      || ! firewall-cmd --reload; then
      die "firewall-cmd failed (above)." "O firewall-cmd falhou (acima)."
    fi
  elif command -v iptables >/dev/null 2>&1; then
    step "No ufw or firewalld active: opening 80 and 443 with iptables." \
         "Nenhum ufw ou firewalld ativo: abrindo 80 e 443 com iptables."
    iptables_open iptables
    command -v ip6tables >/dev/null 2>&1 && iptables_open ip6tables
    if command -v netfilter-persistent >/dev/null 2>&1; then
      step "Saving the rules for the next boot: netfilter-persistent save." \
           "Salvando as regras para a próxima partida: netfilter-persistent save."
      netfilter-persistent save || warn "netfilter-persistent failed: the rules last until the next reboot." \
                                        "O netfilter-persistent falhou: as regras valem até o próximo reboot."
    else
      warn "netfilter-persistent is not installed: these rules last until the next reboot. To keep them: sudo apt install iptables-persistent" \
           "O netfilter-persistent não está instalado: estas regras valem até o próximo reboot. Para mantê-las: sudo apt install iptables-persistent"
    fi
  else
    info "No firewall found on this machine (ufw, firewalld, iptables): nothing to open here." \
         "Nenhum firewall encontrado nesta máquina (ufw, firewalld, iptables): nada a abrir aqui."
  fi
  echo
  t "On a cloud the provider's firewall is separate and must be opened too.
On Oracle Cloud: Console › Networking › Virtual cloud networks › your VCN ›
Security Lists › Default Security List › Add Ingress Rules: source
0.0.0.0/0, IP protocol TCP, destination port range 80,443.
Port 7340 stays closed: Caddy reaches it on this machine." \
    "Numa nuvem o firewall do provedor é separado e precisa ser aberto também.
Na Oracle Cloud: Console › Networking › Virtual cloud networks › a sua VCN ›
Security Lists › Default Security List › Add Ingress Rules: origem
0.0.0.0/0, protocolo IP TCP, intervalo de portas de destino 80,443.
A porta 7340 fica fechada: o Caddy chega nela nesta máquina."
}

# --- arguments --------------------------------------------------------------

[ "$#" -gt 0 ] || { usage; exit 1; }
for a in "$@"; do
  case "$a" in -h|--help) usage; exit 0 ;; esac
done
CMD=$1
case "$CMD" in
  help|-h|--help) usage; exit 0 ;;
  install|update|uninstall|status|logs|backup|reset-admin|firewall) need_root "$@" ;;
  *) t "Unknown command: $CMD" "Comando desconhecido: $CMD" >&2; usage >&2; exit 1 ;;
esac
shift

VERSION='' PKGFILE='' URL='' INSECURE=0 PURGE=0 FOLLOW=0 BACKUP_DIR='' EMAIL=
while [ "$#" -gt 0 ]; do
  case "$CMD:$1" in
    install:--version|update:--version) [ "$#" -ge 2 ] || die "--version needs a value." "--version precisa de um valor."; VERSION=$2; shift ;;
    install:--package|update:--package) [ "$#" -ge 2 ] || die "--package needs a file." "--package precisa de um arquivo."; PKGFILE=$2; shift ;;
    install:--url) [ "$#" -ge 2 ] || die "--url needs an address." "--url precisa de um endereço."; URL=$2; shift ;;
    install:--insecure-no-verify|update:--insecure-no-verify) INSECURE=1 ;;
    uninstall:--purge) PURGE=1 ;;
    logs:-f|logs:--follow) FOLLOW=1 ;;
    backup:-*) die "Unknown option for backup: $1" "Opção desconhecida para backup: $1" ;;
    backup:*) BACKUP_DIR=$1 ;;
    reset-admin:-*) die "Unknown option for reset-admin: $1" "Opção desconhecida para reset-admin: $1" ;;
    reset-admin:*) EMAIL=$1 ;;
    *) die "Unknown option for $CMD: $1 (sh universo.sh --help)" "Opção desconhecida para $CMD: $1 (sh universo.sh --help)" ;;
  esac
  shift
done

case "$CMD" in
  install) cmd_install ;;
  update) cmd_update ;;
  uninstall) cmd_uninstall ;;
  status) cmd_status ;;
  logs) cmd_logs ;;
  backup) cmd_backup ;;
  reset-admin) cmd_reset_admin ;;
  firewall) cmd_firewall ;;
esac
