# AgentOS — Demo Spec-Driven + Design-First

Projeto demonstração aplicando **Spec-Driven Development** e **DESIGN.md** no workflow Next.js + Termux + Vercel.

## Arquitetura de Documentos

| Arquivo           | Propósito                              | Padrão            |
|-------------------|----------------------------------------|-------------------|
| `CONSTITUTION.md` | Princípios que regem todo o projeto    | Superpowers       |
| `SPEC.md`         | O que e por que (cenários, regras)     | Spec Kit          |
| `DESIGN.md`       | Como deve parecer (tokens visuais)     | Awesome DESIGN.md |
| `AGENTS.md`       | Como construir (stack, ordem, regras)  | Superpowers       |

## Features

- Landing page pública com hero + feature cards
- Login via GitHub OAuth (manual, sem NextAuth)
- Dashboard protegido com sidebar fixa 240px
- Tabela de agentes com status badges e ações
- Mobile-first: sidebar vira overlay em telas pequenas
- Dark theme "Void" inspirado em VoltAgent
- Token design centralizado em `lib/design.ts`

## Estrutura

```
demo-spec-design/
├── CONSTITUTION.md
├── SPEC.md
├── DESIGN.md
├── AGENTS.md
├── src/
│   ├── app/
│   │   ├── (marketing)/          — Páginas públicas
│   │   │   ├── layout.tsx        — Layout limpo, sem sidebar
│   │   │   └── page.tsx          — Landing page
│   │   ├── (app)/                — Páginas protegidas
│   │   │   ├── layout.tsx        — Dashboard shell (sidebar + topbar)
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx      — Visão geral com cards
│   │   │   └── agents/
│   │   │       └── page.tsx      — Tabela de agentes
│   │   └── api/
│   │       └── auth/
│   │           ├── login/
│   │           │   └── route.ts  — Inicia OAuth
│   │           ├── callback/
│   │           │   └── route.ts  — Callback + JWT session
│   │           └── logout/
│   │               └── route.ts  — Limpa cookie
│   ├── components/
│   │   ├── ui/                   — Primitives: Button, Card, Badge
│   │   ├── layout/               — Sidebar, TopBar, DashboardShell
│   │   └── marketing/            — Hero, FeatureCard, Footer
│   └── lib/
│       ├── design.ts             — Tokens sincronizados com DESIGN.md
│       ├── auth.ts               — JWT sign/verify/session
│       ├── github.ts             — OAuth helpers
│       └── utils.ts              — cn() helper
├── middleware.ts                 — Protege rotas /(app)
├── tailwind.config.ts            — Cores mapeadas de DESIGN.md
└── package.json
```

## Como rodar

1. Instalar dependências:
   ```bash
   npm install
   ```

2. Configurar variáveis de ambiente em `.env.local`:
   ```
   GITHUB_CLIENT_ID=seu_client_id
   GITHUB_CLIENT_SECRET=seu_client_secret
   JWT_SECRET=um_segredo_forte_de_32_chars
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

3. Rodar dev server:
   ```bash
   npm run dev
   ```

## Como deployar

```bash
# Automatico: git init → commit → gh repo create --public --source=. --push → vercel --yes --prod
git init
git add .
git commit -m "init: spec-driven + design-first demo"
gh repo create --public --source=. --push
vercel --yes --prod
```

## Créditos

- **Spec-Driven Development**: github/spec-kit
- **DESIGN.md pattern**: VoltAgent/awesome-design-md
- **Superpowers methodology**: obra/superpowers
- **Caveman mode**: JuliusBrussee/caveman
- **Hermes Agent**: NousResearch/hermes-agent
