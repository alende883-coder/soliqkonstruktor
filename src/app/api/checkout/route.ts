export async function POST() {
  return Response.json(
    {
      ok: false,
      mode: "provider-not-selected",
      next: "Wire Payme, Click, or Uzum after the merchant account is chosen.",
    },
    { status: 501 },
  );
}
