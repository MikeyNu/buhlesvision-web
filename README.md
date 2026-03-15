# Buhle's Vision Web Platform

Reconstructed production implementation from source Stitch exports using:

- Next.js App Router + TypeScript (strict)
- Tailwind CSS
- Supabase (auth, data, storage-ready)
- Vercel deployment-ready structure
- shadcn/ui primitives for admin/CMS surfaces

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and fill:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Supabase Setup

1. Create a Supabase project.
2. Run SQL in `supabase/schema.sql`.
3. Add at least one authenticated admin user (email/password) for `/admin/login`.

## Routes

- `/` home
- `/about`
- `/services`
- `/portfolio`
- `/portfolio/[slug]`
- `/contact`
- `/tiktok-trial`
- `/design-system`
- `/privacy-policy`
- `/terms-of-service`
- `/admin/login`
- `/admin`
- `/admin/projects`
- `/admin/inquiries`

## Build and Lint

```bash
npm run lint
npm run build
```
