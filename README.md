# versomd.com

The landing page of [Verso](https://versomd.com): Markdown notes in
Obsidian-compatible folders, local-first, with a self-hosted server named
UniVerso. Static [Astro](https://astro.build) site in pt-BR (at `/`) and
English (at `/en/`), served by Cloudflare Pages, with a waitlist kept in
Cloudflare KV by a Pages Function. No analytics, no cookies, no third party.

## The rule while the product is private

Verso's own repository is private. This site does not link to it, to its
releases or to any download until it opens. The section "what it does not do
yet" says so, and the waitlist is how people hear when it changes. When the
product opens, the download section comes in its own pull request.

## Run it

```sh
npm install
npm run dev            # http://localhost:4321
npm run build          # static site in dist/
npm run check          # astro check + the Function's types
npm run check:tokens   # design tokens against the Verso window (below)
```

Node 22 or newer.

To try the waitlist locally, with a throwaway KV namespace:

```sh
npm run build
npx wrangler pages dev dist --kv WAITLIST
```

## What is where

| Path | What it is |
|---|---|
| `src/i18n/pt-BR.ts`, `src/i18n/en.ts` | Every word of the site. pt-BR is written first; en mirrors it field for field (`src/i18n/types.ts`). |
| `src/components/Landing.astro` | The landing page, for either language: hero, "in short" strip, value cards, how it works in three steps, the numbers, the recordings as tabs, what it does not do yet, how it compares (one table, Verso first, then twelve note, worldbuilding and solo-play tools; checked against each product's official pages, no prices), questions, waitlist. |
| `src/pages/` | `/` and `/en/`; `/obrigado/` and `/en/thanks/`; `/lista/nao-deu/` and `/en/waitlist/failed/`; `404`; `sitemap.xml`. |
| `src/styles/tokens.css` | Colours, fonts and measure copied from the Verso window. |
| `src/styles/site.css` | The page's layout. |
| `public/media/` | Screenshots and the four recordings (GIF; a PNG poster of each for reduced motion; an animated WebP where it is smaller). |
| `public/fonts/` | Fraunces, Literata, Instrument Sans (SIL OFL 1.1, licences beside them). |
| `public/waitlist.js` | Sends the form with `fetch` and answers in place. |
| `<script>` in `Landing.astro` | The recordings as tabs (one at a time, arrow keys; "play" under reduced motion). Bundled into `/_astro/` as a file, never inlined, for the Content-Security-Policy. Without JavaScript the four recordings stand stacked. |
| second `<script>` in `Landing.astro` | The comparison's controls: shortcuts, a chip per tool, a chip per capability group, "only what differs", a polite count and "show everything"; the view in the address (`#comparativo?f=…&g=…&diff=1`, `#compare?…` in English) and, as a convenience, in `localStorage`; and a copy of the tools' row that stays at the top of the screen while the table's own header is above it, kept to its column widths and sideways scroll. Bundled into `/_astro/` like the first. Without JavaScript the whole table stands and the controls stay hidden. |
| `public/_headers` | Content-Security-Policy and caching on Cloudflare Pages. |
| `functions/api/waitlist.ts` | The waitlist's endpoint (Cloudflare Pages Function). |
| `scripts/check-tokens.mjs` | The tokens' drift check. |
| `scripts/compare/` | The comparison's one source for both languages (`compare_data.py`) and the emitter that writes it into the two locale files (`emit.py`). |
| `CLAUDE.md` | How an AI session works on this site: where the product's facts come from, the comparison's rules, checks, commits. |

## Design tokens

`src/styles/tokens.css` holds, between its `BEGIN copied` and `END copied`
lines, the custom properties of the Verso window's first `:root` block
(`app/ui/css/base.css` in the product repository), character for character,
and names the product commit they were copied at. The window's layout widths
(`--side-w`, `--ribbon-w`, `--rail-w`) are left out; the radii are the site's
own, since the window has no radius variables.

`npm run check:tokens` compares them with the product checked out beside this
repository (`../verso`, or `--product <path>`, or `VERSO_REPO`): every copied
token must exist in the product with the same value, every product token but
the three above must be copied, and every font file in `public/fonts` must be
byte-equal to the window's. It exits 1 on drift, 2 when the product cannot be
found. To update: copy the values again and change the commit in the
`BEGIN` line.

In CI the product is private: with a repository secret `VERSO_READ_TOKEN` (a
fine-grained token with read-only *Contents* on `SergioSJS/verso`) the workflow
checks the product out and compares for real; without it the step warns and
passes.

## The waitlist

`POST /api/waitlist` takes `email`, `lang` (`pt-BR` or `en`) and `website`
(a hidden trap; people leave it empty), as a form or as JSON.

- The e-mail must look like one (at most 254 characters, one `@`, a domain
  with a dot); otherwise `400 invalid_email`.
- Each network address gets 5 attempts an hour, counted under
  `rate:<sha256 of the address and the hour>` with a one-hour TTL; past that,
  `429 rate_limited`. The address itself is never stored. KV is eventually
  consistent, so the limit is approximate, which is enough here.
- A valid address is stored as `{ "email", "lang", "at" }` under
  `email:<sha256 of the lowercased e-mail>`. The same address again changes
  nothing and gets the same answer, so the answer does not reveal who is on
  the list. A filled trap gets the same answer and stores nothing.
- A POST from another site's page (a foreign `Origin`) gets `403`; a body over
  4 KB gets `413`; a missing binding or a KV failure gets `503 unavailable`.
- With `Accept: application/json` (the page's script) the answer is
  `{ "ok": true }` or `{ "ok": false, "error": "…" }`. Without it (no
  JavaScript) the answer is a `303` to the thank-you page or to the "could not
  save" page, in the form's language.

Reading the list:

```sh
npx wrangler kv key list --namespace-id <id> --prefix email: --remote
npx wrangler kv key get --namespace-id <id> "email:<hash>" --remote
```

## Deploy on Cloudflare Pages

1. **Workers & Pages → Create → Pages → Connect to Git**, pick this
   repository. Production branch `main`. Framework preset *Astro*, or by hand:
   build command `npm run build`, output directory `dist`. Under
   *Environment variables* set `NODE_VERSION` to `22`.
2. **The KV namespace**: *Storage & Databases → KV → Create* (for instance
   `versomd-waitlist`), or `npx wrangler kv namespace create versomd-waitlist`.
3. **The binding**: in the Pages project, *Settings → Bindings → Add → KV
   namespace*, variable name **`WAITLIST`**, the namespace above, for
   *Production* (and *Preview* if previews should accept sign-ups — a
   separate namespace keeps test addresses out of the real list). Redeploy
   once after adding it. Without the binding the form answers "could not
   save" and the Function logs why.
4. **Custom domains**: *Custom domains → Set up a domain*, add `versomd.com`
   and `www.versomd.com`.
   - With the domain's DNS on Cloudflare (the zone added to the account),
     Pages creates both records itself.
   - With DNS at the registrar: `www` is a `CNAME` to the project's
     `<project>.pages.dev` host. The apex cannot be a CNAME at most
     registrars: either move the domain's nameservers to Cloudflare (then
     Pages handles the apex), or point the apex at `www` with the
     registrar's redirect.
   - Optionally a *Redirect Rule* (or *Bulk Redirects*) sends `www` to the
     apex, so there is one address.

There is no `wrangler.toml` on purpose: once a Pages project has one, that
file becomes the source of truth for its settings and bindings and the
dashboard can no longer change them. If you prefer configuration as code,
add one with `pages_build_output_dir = "dist"` and a `[[kv_namespaces]]`
entry (`binding = "WAITLIST"`, `id = "<the namespace id>"` — an identifier,
not a secret), and stop setting the binding in the dashboard.

Nothing here is a secret. The only one the project uses is the optional
`VERSO_READ_TOKEN` in GitHub Actions, kept as a repository secret.

## CI

`.github/workflows/check.yml` runs on pull requests only: `npm ci`, build,
`astro check` and the Function's types, then the tokens check. One Linux job;
Cloudflare Pages builds `main` by itself.

## Licence and authenticity

- **The site's code** (everything under `src/`, `functions/`, `scripts/`,
  `public/*.js`, the configuration) is under the Mozilla Public License 2.0,
  the same licence as Verso: see `LICENSE`.
- **The text, the screenshots and recordings, the icon and the names
  Verso and UniVerso** are © 2026 Sérgio J. Sousa, all rights reserved. They
  are not covered by the MPL: a copy of this site under another address may
  not reuse them.
- **The fonts** are under the SIL Open Font License 1.1, with their licences
  beside them in `public/fonts/`.

The official site is **https://versomd.com**; its source is this repository.
Verso's builds and UniVerso's packages come only from the releases of
**github.com/SergioSJS/verso**, signed with minisign:

```
RWS1zv2nvs/ng1hA0YspwOg7wGda98zkXjVfx8m9CtT5obRW5zabNHaT
```

The app checks that signature before it updates itself; `universo.sh`
checks it before it installs. `public/universo.sh` is a copy of
`packaging/server/universo.sh` in the product repository, which is the
source.
