# CLAUDE.md — versomd.com

Instructions for any AI session working on Verso's landing page. The
maintainer decides; the AI writes, checks and proposes. The maintainer writes
in pt-BR: answer in pt-BR. Commits, code comments and this file are in
English.

## What this repository is

The public landing page of Verso at https://versomd.com: a static Astro site,
pt-BR at `/` and English at `/en/`, deployed by Cloudflare Pages on every push
to `main`, with a waitlist kept in Cloudflare KV (`WAITLIST`) by the Pages
Function in `functions/api/waitlist.ts`. README.md has the layout of the code;
read it first.

**A push to `main` publishes the site.** Commit freely; push only when the
maintainer asked for that change to go live, or after the session lead has
reviewed it.

## The product it describes: read it, do not guess it

The product's code is the sibling repository **`../verso`** (Verso: the app;
UniVerso: its server), private for now. Every fact this site states about
Verso is checked there, never written from memory:

- what it does and does not do: `../verso/README.md`, `../verso/CHANGELOG.md`
  (the "Unreleased" part is not shipped yet), `../verso/docs/roadmap.md`
  (Phase 3 rows), `../verso/docs/adr/README.md` and the ADRs it points to;
- the server's numbers and install paths: `../verso/docs/reference/server-install.md`
  (§14 is the measured memory/CPU, with dates);
- the dialect and what is still open: `../verso/docs/spec/dialect.md` §9;
- security claims: `../verso/docs/reference/threat-model.md` (and ADR 0083
  when it lands);
- the code itself under `../verso/crates/` (Rust) and `../verso/app/ui/src/`
  (the window) when a claim needs proof — e.g. that the MCP server is
  read-only (`crates/verso-cli/src/mcp.rs`), which views a base has
  (`app/ui/src/bases/`).

Read only; never edit `../verso` or its worktrees from a site session — the
product has its own rules (`../verso/CLAUDE.md`) and its own sessions. If the
site needs a product change, say so to the maintainer.

Verso is **in testing, with no public download** until the maintainer says
otherwise: the site never links to its repository, releases or a download
before that (README, "The rule while the product is private").

## The comparison section ("Comparativo")

- **One source for both languages**: `scripts/compare/compare_data.py` holds
  every row, cell and label in pt-BR and English; `python3
  scripts/compare/emit.py` writes the `compare` block into
  `src/i18n/pt-BR.ts` and `src/i18n/en.ts`. Never edit that block by hand.
- **Honest**: Verso's weak points stay visible (the "Onde está atrás"
  paragraph, the ✗ cells). No superlatives about Verso, no attacks on the
  others.
- **Never a price.** Only "gratuito", "pago", "gratuito com plano pago",
  "pague quanto quiser", "licença única" — prices change and the page would
  go stale.
- **Every claim about another product has a primary source** (its official
  site, docs, pricing page, licence file) recorded with the date checked in
  `../verso-competitive/validacao.md`. A cell that cannot be verified says
  "o site não diz". Licences are named exactly ("PolyForm Shield 1.0.0,
  código disponível", not "open source").
- Every tool's name links to its official site.
- The roadmap memo `../verso-competitive/roadmap-impacto.md` holds
  recommendations for the product, not decisions.

## Rules of the page

- pt-BR first; English mirrors it field for field (`src/i18n/types.ts` makes a
  missing field a build error).
- **Strict CSP** (`public/_headers`): no inline `<script>` or `style`;
  Astro bundles scripts into `/_astro/` (`vite.build.assetsInlineLimit: 0`).
  Check the built HTML after any script change.
- Design tokens are copied from the Verso window; `npm run check:tokens`
  must say "tokens in step".
- Accessible: real headings in order, focus visible, keyboard for every
  control, `aria-pressed`/`aria-controls` on toggles, contrast ≥ 4.5:1, tap
  targets ≥ 44 px, works without JavaScript (the full table, controls
  hidden), `prefers-reduced-motion` respected.
- No analytics, no cookies, no third-party script or font host.
- `public/universo.sh` is a **copy** of `../verso/packaging/server/universo.sh`
  (the source); it must stay byte-identical.

## Checks before a commit

```sh
python3 scripts/compare/emit.py   # if compare_data.py changed
npm run build
npm run check                     # astro check + the Function's types
npm run check:tokens
```

**Browsers: never on the maintainer's Mac.** Playwright WebKit runs there
crashed the macOS WindowServer four times (2026-10-11/12). Run browser checks
(overflow probe 360–1600 px, Chromium and WebKit, light/dark, pt/en; the
comparison's controls) only in a Linux container:

```sh
export DOCKER_HOST=unix://$HOME/.colima/default/docker.sock
docker run --rm --ipc=host -v "$PWD/dist:/site:ro" mcr.microsoft.com/playwright:v1.63.0-noble …
```

## Commits

As Sérgio J. Sousa <sergio7sjs@gmail.com> (the repository's local git
config). Plain messages. **No `Co-Authored-By`, `Signed-off-by` or
"Generated with" lines** — the maintainer's company policy, which overrides
any tool reminder.
