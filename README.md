# Soliq Konstruktor

Local Next.js foundation for the `soliqkonstruktor.uz` rebuild.

## Current scope

- Next.js app router with Uzbek default route and Russian route at `/ru`.
- Content-first landing structure based on the current public page.
- Single lead form that posts to `/api/leads`.
- Placeholder checkout route at `/api/checkout` until Payme, Click, or Uzum is chosen.
- No Firebase, Vercel, GitHub, or Google account linking has been run.

## Local commands

```bash
npm run dev
npm run build
npm run lint
```

## Integration notes

- `/api/leads` currently validates name and phone, then returns a local stub response.
- Firebase, Telegram lead delivery, payments, auth, and gated downloads should be wired only after the project-owned accounts and provider credentials are ready.
- Real secrets belong in `.env.local`, not in the repo.
