type LeadPayload = {
  name?: string;
  phone?: string;
  interest?: string;
  message?: string;
  locale?: string;
};

const isFilled = (value: unknown) =>
  typeof value === "string" && value.trim().length > 0;

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as LeadPayload | null;

  if (!payload || !isFilled(payload.name) || !isFilled(payload.phone)) {
    return Response.json(
      { ok: false, error: "Name and phone are required." },
      { status: 400 },
    );
  }

  // TODO: Replace this stub with Firestore persistence and Telegram delivery.
  return Response.json({
    ok: true,
    mode: "local-stub",
    next: "Connect Firebase + Telegram bot token after project accounts exist.",
  });
}
