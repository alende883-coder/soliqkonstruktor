type LeadBody = {
  name?: unknown;
  phone?: unknown;
  website?: unknown;
  source?: unknown;
  locale?: unknown;
};

const NAME_PATTERN = /^[\p{L}\s'’-]{2,60}$/u;
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10; // generous: a real person submits ~once — only abuse trips this
const MAX_BODY_BYTES = 2048; // a real payload is ~100 bytes; 2 KB is huge headroom

// Best-effort in-memory rate limit (per serverless instance).
// A durable limiter (Upstash / Vercel KV) can replace this when traffic warrants.
const hits = new Map<string, { count: number; start: number }>();

function rateLimited(ip: string) {
  const now = Date.now();
  // Prune expired entries so the map can't grow unbounded.
  for (const [key, rec] of hits) {
    if (now - rec.start > WINDOW_MS) hits.delete(key);
  }
  const rec = hits.get(ip);
  if (!rec) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_PER_WINDOW;
}

// Blocks obvious cross-site submissions without ever blocking same-site users:
// allow when Origin is absent (some legitimate clients omit it) or its host matches.
function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === request.headers.get("host");
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return Response.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return Response.json({ ok: false, error: "too_large" }, { status: 413 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: real users never fill this. Pretend success, drop silently.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  // Clamp lengths defensively, then validate.
  const name = (typeof body.name === "string" ? body.name : "").trim().slice(0, 60);
  const digits = (typeof body.phone === "string" ? body.phone : "")
    .replace(/\D/g, "")
    .slice(0, 15);
  const nameOk = NAME_PATTERN.test(name);
  const phoneOk =
    digits.length === 9 || (digits.length === 12 && digits.startsWith("998"));

  if (!nameOk || !phoneOk) {
    return Response.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const lead = {
    name,
    phone: `+998${digits.slice(-9)}`,
    source: typeof body.source === "string" ? body.source.slice(0, 40) : "unknown",
    locale: body.locale === "ru" ? "ru" : "uz",
    receivedAt: new Date().toISOString(),
  };

  // TODO: forward `lead` to Bitrix24 (inbound webhook) and/or Telegram (bot token),
  // both server-side via env vars (no NEXT_PUBLIC_). Full name + phone go to those
  // destinations — NOT to logs. The log below is redacted (no PII).
  console.log("[lead]", {
    source: lead.source,
    locale: lead.locale,
    phone: `+998•••••${digits.slice(-2)}`,
    at: lead.receivedAt,
  });

  return Response.json({ ok: true });
}
