// POST /api/waitlist — the waitlist, with no third party.
//
// Takes `email`, `lang` ("pt-BR" | "en") and `website` (a trap for robots:
// people leave it empty) as a form or as JSON. Stores { email, lang, at } in
// the KV namespace bound as WAITLIST, under `email:<sha256 of the lowercased
// e-mail>`, so the same address twice is one entry and the second answer is
// the same as the first. Limits each network address to LIMIT attempts an
// hour with a second key, `rate:<sha256 of the address and the hour>`; the
// address itself is never stored.
//
// Answers JSON when asked for it (Accept: application/json — the page's
// script does), else a 303 to the thank-you page or to the "could not save"
// page in the form's language, so the form works without JavaScript.
//
// KV is eventually consistent: two attempts within a few seconds from two
// places may both pass the limit. For a waitlist that is enough.

interface Env {
  WAITLIST?: KVNamespace;
}

type Lang = "pt-BR" | "en";
type Failure = "invalid_email" | "rate_limited" | "bad_request" | "forbidden" | "too_large" | "unavailable";

const LIMIT = 5;
const WINDOW_SECONDS = 60 * 60;
const MAX_BODY_BYTES = 4096;

const PAGES: Record<Lang, { ok: string; failed: string }> = {
  "pt-BR": { ok: "/obrigado/", failed: "/lista/nao-deu/" },
  en: { ok: "/en/thanks/", failed: "/en/waitlist/failed/" },
};

const STATUS: Record<Failure, number> = {
  invalid_email: 400,
  bad_request: 400,
  forbidden: 403,
  too_large: 413,
  rate_limited: 429,
  unavailable: 503,
};

// One @, a local part without spaces or the characters that break an
// address, a domain of labels with a dot. Letters of any script are allowed.
const EMAIL =
  /^[^\s@<>()[\]\\,;:"]{1,64}@[\p{L}\p{N}](?:[\p{L}\p{N}-]{0,61}[\p{L}\p{N}])?(?:\.[\p{L}\p{N}](?:[\p{L}\p{N}-]{0,61}[\p{L}\p{N}])?)+$/u;

function isEmail(value: string): boolean {
  return value.length >= 3 && value.length <= 254 && EMAIL.test(value);
}

async function sha256(text: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

interface Fields {
  email: string;
  lang: Lang;
  website: string;
}

async function readFields(request: Request): Promise<Fields | null> {
  const type = request.headers.get("Content-Type") ?? "";
  let raw: Record<string, unknown>;
  try {
    if (type.includes("application/json")) {
      const body: unknown = await request.json();
      if (!body || typeof body !== "object") return null;
      raw = body as Record<string, unknown>;
    } else if (type.includes("application/x-www-form-urlencoded") || type.includes("multipart/form-data")) {
      raw = Object.fromEntries(await request.formData());
    } else {
      return null;
    }
  } catch {
    return null;
  }
  const text = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  return {
    email: text(raw.email),
    lang: text(raw.lang) === "en" ? "en" : "pt-BR",
    website: text(raw.website),
  };
}

function wantsJson(request: Request): boolean {
  const accept = request.headers.get("Accept") ?? "";
  return accept.includes("application/json") || (request.headers.get("Content-Type") ?? "").includes("application/json");
}

function answer(request: Request, lang: Lang, outcome: { ok: true } | { ok: false; error: Failure }): Response {
  const headers = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" };
  if (wantsJson(request)) {
    const status = outcome.ok ? 200 : STATUS[outcome.error];
    const extra: Record<string, string> = outcome.ok || outcome.error !== "rate_limited" ? {} : { "Retry-After": String(WINDOW_SECONDS) };
    return Response.json(outcome, { status, headers: { ...headers, ...extra } });
  }
  const page = outcome.ok ? PAGES[lang].ok : PAGES[lang].failed;
  return new Response(null, { status: 303, headers: { ...headers, Location: new URL(page, request.url).href } });
}

async function overLimit(kv: KVNamespace, address: string): Promise<boolean> {
  const hour = Math.floor(Date.now() / 1000 / WINDOW_SECONDS);
  const key = `rate:${await sha256(`${address}|${hour}`)}`;
  const count = Number((await kv.get(key)) ?? "0");
  if (count >= LIMIT) return true;
  // A key's TTL must be at least 60 s; an hour and a minute outlives its hour.
  await kv.put(key, String(count + 1), { expirationTtl: WINDOW_SECONDS + 60 });
  return false;
}

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed\n", { status: 405, headers: { Allow: "POST", "Cache-Control": "no-store" } });
  }

  // A form on another site posting here: refused. (Browsers send Origin on POST.)
  const origin = request.headers.get("Origin");
  if (origin && origin !== "null" && new URL(origin).host !== new URL(request.url).host) {
    return answer(request, "pt-BR", { ok: false, error: "forbidden" });
  }

  const length = Number(request.headers.get("Content-Length") ?? "0");
  if (length > MAX_BODY_BYTES) return answer(request, "pt-BR", { ok: false, error: "too_large" });

  const fields = await readFields(request);
  if (!fields) return answer(request, "pt-BR", { ok: false, error: "bad_request" });
  const { email, lang, website } = fields;

  if (!isEmail(email)) return answer(request, lang, { ok: false, error: "invalid_email" });

  const kv = env.WAITLIST;
  if (!kv) {
    console.error("waitlist: the WAITLIST KV binding is missing (Pages project › Settings › Bindings)");
    return answer(request, lang, { ok: false, error: "unavailable" });
  }

  try {
    const address = request.headers.get("CF-Connecting-IP") ?? "unknown";
    if (await overLimit(kv, address)) return answer(request, lang, { ok: false, error: "rate_limited" });

    // The trap was filled: a robot. Same answer as a person gets, nothing kept.
    if (website) return answer(request, lang, { ok: true });

    const key = `email:${await sha256(email.toLowerCase())}`;
    if ((await kv.get(key)) === null) {
      await kv.put(key, JSON.stringify({ email, lang, at: new Date().toISOString() }));
    }
    return answer(request, lang, { ok: true });
  } catch (error) {
    console.error("waitlist: KV failed", error instanceof Error ? error.message : String(error));
    return answer(request, lang, { ok: false, error: "unavailable" });
  }
};
