# SPEC — AI Agent Dashboard

## Goal
Build a landing page + protected dashboard for managing AI agents. Users sign in via GitHub OAuth and access a dashboard to view agent status, logs, and costs.

## Scenarios

### S1 — Landing Page (public)
- Visitor sees hero section with headline, subtitle, and CTA button "Entrar com GitHub".
- Below hero: 3 feature cards explaining what the platform does.
- Footer with copyright and link to GitHub repo.
- No sidebar. No navigation bar beyond a simple top logo.

### S2 — GitHub OAuth Flow
- Click "Entrar com GitHub" → redirect to GitHub OAuth authorize URL.
- On callback (`/api/auth/callback`) → exchange code for access token → fetch GitHub user → create JWT session → redirect to `/dashboard`.
- If OAuth fails → redirect to `/` with error message in query string.

### S3 — Protected Dashboard
- Authenticated users see sidebar (240px fixed) + scrollable main area.
- Sidebar links: Dashboard, Agentes, Configurações.
- Top bar shows user avatar + name + logout button.
- Dashboard home shows summary cards: total agents, active agents, API cost today, last run.
- Unauthenticated access to `/dashboard/*` → redirect to `/`.

### S4 — Agent List Page
- Table with columns: Nome, Status, Última execução, Custo (USD), Ações.
- Status badges: Online (verde), Offline (cinza), Erro (vermelho).
- Pagination if >10 agents.

## UI Requirements
- Login page: clean, dark theme, centered card with glow effect.
- Dashboard: sidebar dark, main content slightly lighter dark.
- All text in PT-BR.
- Responsive: sidebar collapses to hamburger menu on mobile.

## Constraints
- Next.js App Router, Route Groups `(app)` and `(marketing)`.
- Session via JWT stored in httpOnly cookie.
- No external auth libraries (no NextAuth) — manual OAuth + jose for JWT.
- Deploy via Vercel CLI.
