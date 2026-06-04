type LeadBody = {
  name?: unknown;
  phone?: unknown;
  website?: unknown;
  source?: unknown;
  locale?: unknown;
};

const NAME_PATTERN = /^[\p{L}\s'’-]{2,60}$/u;
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

// Best-effort in-memory rate limit. Resets when the serverless instance recycles,
// which is acceptable for a stub; a durable limiter can replace this later.
const hits = new Map<string, { count: number; start: number }>();

function rateLimited(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.start > WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
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

  // Honeypot: real users never fill this. Pretend success and drop silently.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const digits = typeof body.phone === "string" ? body.phone.replace(/\D/g, "") : "";
  const nameOk = NAME_PATTERN.test(name);
  const phoneOk =
    digits.length === 9 || (digits.length === 12 && digits.startsWith("998"));

  if (!nameOk || !phoneOk) {
    return Response.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const lead = {
    name,
    phone: `+998${digits.slice(-9)}`,
    source: typeof body.source === "string" ? body.source : "unknown",
    locale: typeof body.locale === "string" ? body.locale : "uz",
    receivedAt: new Date().toISOString(),
  };

  // TODO: forward `lead` to the Telegram bot once TELEGRAM_BOT_TOKEN and the
  // target chat id are provided. The token must stay server-side (no NEXT_PUBLIC_).
  console.log("[lead]", lead);

  return Response.json({ ok: true });
}
