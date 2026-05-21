# Project Constitution

## Identifiers
- ALL variables, functions, types, API routes, DB keys, file names MUST be in English.
- UI labels and user-facing text MUST be in PT-BR.

## Architecture
- Next.js 14+ with App Router.
- Route Groups: `(marketing)` for public pages, `(app)` for protected pages.
- Login page must NEVER inherit sidebar/dashboard UI. Clean, centered layout.
- Dashboard pages inherit sidebar + top navigation.

## Design
- Mobile-first responsive.
- DESIGN.md is the single source of truth for all visual decisions.
- No hardcoded magic numbers in CSS — all tokens must reference DESIGN.md.

## Quality
- True red/green TDD where applicable.
- YAGNI — do not add features not traced to SPEC.md.
- DRY — reusable components go in `src/components/`.

## Deployment
- Git init → commit → `gh repo create --public --source=. --push` → `vercel --yes --prod`.
- Never ask the user to manually click vercel.com dashboard unless CLI auth fails.
