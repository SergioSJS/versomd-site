import { getCollection, type CollectionEntry } from "astro:content";
import meta from "../content/wiki/_meta.json";
import { wikiText, type WikiLang } from "../i18n/wiki";

export const SITE = "https://versomd.com";
export const wikiMeta = meta as { version: string; commit: string; pages: Record<WikiLang, number> };
export type WikiEntry = CollectionEntry<"wikiPt">;
export const GROUP_ORDER = ["start", "organize", "boards", "tools", "server", "rpg"] as const;

export async function wikiPages(lang: WikiLang): Promise<WikiEntry[]> {
  const all = (await getCollection(lang === "pt" ? "wikiPt" : "wikiEn")) as WikiEntry[];
  const rank = (e: WikiEntry) => GROUP_ORDER.indexOf(e.data.group) * 100 + e.data.order;
  return all.sort((a, b) => rank(a) - rank(b) || a.data.order - b.data.order);
}

export const pagePath = (lang: WikiLang, slug: string) => `${wikiText[lang].base}${slug}/`;
export const mdPath = (lang: WikiLang, slug: string) => `${wikiText[lang].base}${slug}.md`;
export const abs = (p: string) => new URL(p, SITE).href;

/** The page as Markdown for an assistant: links absolute, pointing at the
 *  other pages' .md files, so a model following one stays in plain text. */
export function markdownBody(lang: WikiLang, body: string): string {
  return body
    .replace(/\]\((\/(?:en\/)?wiki\/)([a-z0-9-]+)\/(#[^)]*)?\)/g, (_, b, slug) => `](${abs(`${b}${slug}.md`)})`)
    .replace(/\]\((\/wiki-assets\/[^)]+)\)/g, (_, p) => `](${abs(p)})`);
}

export function pageMarkdown(lang: WikiLang, e: WikiEntry): string {
  const t = wikiText[lang];
  return `# ${e.data.title}\n\nSource: ${abs(pagePath(lang, e.data.slug))}\n\n${t.writtenFor(wikiMeta.version)}\n\n${markdownBody(lang, e.body ?? "")}`;
}

/** Most characters in one llms-full part: common fetchers cut a file near
 *  100,000 characters, so each part stays well under that. */
export const PART_MAX = 78000;

/** The whole wiki of a language as parts, cut only between pages. */
export async function fullParts(lang: WikiLang): Promise<{ text: string; pages: WikiEntry[] }[]> {
  const t = wikiText[lang];
  const pages = await wikiPages(lang);
  const groups: WikiEntry[][] = [[]];
  let size = 0;
  for (const e of pages) {
    const len = pageMarkdown(lang, e).length + 10;
    if (size + len > PART_MAX - 600 && groups[groups.length - 1].length) { groups.push([]); size = 0; }
    groups[groups.length - 1].push(e);
    size += len;
  }
  return groups.map((g, i) => {
    const head =
      lang === "pt"
        ? `# Wiki do Verso (documentação completa), parte ${i + 1} de ${groups.length}\n\n${t.writtenFor(wikiMeta.version)}. Índice de todas as páginas: ${abs("/llms.txt")}. Esta parte traz: ${g.map((p) => p.data.title).join("; ")}.\n`
        : `# Verso wiki (full documentation), part ${i + 1} of ${groups.length}\n\n${t.writtenFor(wikiMeta.version)}. Index of every page: ${abs("/llms.txt")}. This part holds: ${g.map((p) => p.data.title).join("; ")}.\n`;
    return { text: [head, ...g.map((p) => pageMarkdown(lang, p))].join("\n\n---\n\n"), pages: g };
  });
}

/** The short file at the old /llms-full.txt address: it lists the parts. */
export async function fullIndex(lang: WikiLang): Promise<string> {
  const t = wikiText[lang];
  const parts = await fullParts(lang);
  const list = parts
    .map((p, i) => `- [${lang === "pt" ? "Parte" : "Part"} ${i + 1}](${abs(t.llmsPart(i + 1))}) (${p.text.length} ${lang === "pt" ? "caracteres" : "characters"}): ${p.pages.map((x) => x.data.title).join("; ")}`)
    .join("\n");
  return lang === "pt"
    ? `# Wiki do Verso (documentação completa, em partes)\n\nA wiki inteira é grande demais para um só arquivo: está dividida em partes de até ${PART_MAX} caracteres, cortadas entre páginas. Para uma dúvida, comece pelo índice ${abs("/llms.txt")} e abra só as páginas .md que interessam; ou abra a parte que cobre o assunto.\n\n${list}\n`
    : `# Verso wiki (full documentation, in parts)\n\nThe whole wiki is too big for one file: it is split into parts of at most ${PART_MAX} characters, cut between pages. For a question, start from the index ${abs("/llms.txt")} and open only the .md pages that matter; or open the part that covers the topic.\n\n${list}\n`;
}

/** llms.txt (llmstxt.org). */
export async function llmsTxt(): Promise<string> {
  const section = async (lang: WikiLang, heading: string) => {
    const pages = await wikiPages(lang);
    const parts = await fullParts(lang);
    const partLines = parts
      .map((p, i) => `- [${lang === "pt" ? "Parte" : "Part"} ${i + 1} (${lang === "pt" ? "todas as páginas, em partes" : "pages in bulk"})](${abs(wikiText[lang].llmsPart(i + 1))}): ${p.pages.map((x) => x.data.title).join("; ")}`)
      .join("\n");
    return `## ${heading}\n\n${pages
      .map((e) => `- [${e.data.title}](${abs(mdPath(lang, e.data.slug))}): ${e.data.description}`)
      .join("\n")}\n\n### ${lang === "pt" ? "Em partes (a wiki inteira, cada parte com até 78 mil caracteres)" : "In parts (the whole wiki, each part at most 78,000 characters)"}\n\n${partLines}\n`;
  };
  return `# Verso

> Verso is a Markdown note environment: local-first, working on plain files in Obsidian-compatible folders, with a self-hosted server named UniVerso for syncing, editing together and running role-playing tables (dice, oracles, statblocks, a shared log). It is in testing, with no public download yet. The documentation below is the official wiki, one Markdown page per topic, written for Verso ${wikiMeta.version}; the same pages exist for people at ${abs("/en/wiki/")} (English) and ${abs("/wiki/")} (Português).

For assistants: Verso is a Markdown note app (local-first, Obsidian-compatible folders) with a self-hosted server called UniVerso and tools for role-playing tables. Each line below links to one Markdown page; open the pages that match the question rather than reading everything, and answer only from them. Pages for the most common questions: inviting players: "Rodando uma Mesa" / "Running a Table" (and "Verso num Servidor" / "Verso on a Server"); installing the server: "Instalar o seu UniVerso, Passo a Passo" / "Installing Your UniVerso, Step by Step" (and the free Oracle server page); 3D dice: "Dados e Tabelas Sorteadas" / "Dice and Random Tables"; version history: "Arquivos e Pastas" / "Files and Folders", section "O Histórico de Versões"; opening a single .md without a folder: "Abrir um Arquivo Avulso" / "Open a Single File"; Obsidian compatibility: "Bem-vindo ao Verso" / "Welcome to Verso" and "Arquivos e Pastas". Cite the page you used, and say so when the pages do not cover the question.

${await section("en", "English")}
${await section("pt", "Português (pt-BR)")}`;
}
