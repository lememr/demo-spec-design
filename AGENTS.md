# AGENTS.md — Build Instructions

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS v4
- Language: TypeScript
- Auth: Manual GitHub OAuth 2.0 + `jose` for JWT
- Icons: `lucide-react`
- Font: Inter via `next/font/google`

## File Organization
```
src/
  app/
    (marketing)/
      page.tsx          — Landing page (S1)
      layout.tsx        — Clean layout, no sidebar
    (app)/
      layout.tsx        — Dashboard shell: sidebar + main
      dashboard/
        page.tsx        — Dashboard home (S3)
      agents/
        page.tsx        — Agent list table (S4)
    api/
      auth/
        callback/
          route.ts      — OAuth callback handler (S2)
  components/
    ui/                 — Reusable UI primitives (Button, Card, Badge, Input)
    layout/             — Sidebar, TopBar, DashboardShell
    marketing/          — Hero, FeatureCard, Footer
  lib/
    auth.ts             — JWT sign/verify, session helpers
    github.ts           — GitHub OAuth URL builder, token exchange
    design.ts           — Tailwind config tokens synced with DESIGN.md
```

## Build Order
1. `lib/design.ts` + `tailwind.config.ts` — tokens from DESIGN.md
2. `lib/github.ts` + `lib/auth.ts` — OAuth + JWT logic
3. `components/ui/*` — primitives (Button, Card, Badge)
4. `components/layout/*` — Sidebar, TopBar
5. `app/(marketing)/page.tsx` — landing page
6. `app/api/auth/callback/route.ts` — OAuth flow
7. `app/(app)/layout.tsx` — dashboard shell
8. `app/(app)/dashboard/page.tsx` — dashboard home
9. `app/(app)/agents/page.tsx` — agent list
10. `middleware.ts` — protect /(app) routes

## Rules
- Every component must use tokens from `lib/design.ts`. No hex codes inline.
- All user-facing strings in PT-BR.
- All identifiers in English.
- `fetch` calls must have `{ next: { revalidate: 0 } }` or be server actions.
- JWT secret from `process.env.JWT_SECRET` — fail fast if missing.
