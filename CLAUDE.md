# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start development server (http://localhost:3000)
npm run build    # production build
npm run lint     # run ESLint
```

No test framework is configured.

## Architecture

**Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4.

**Data flow:** All portfolio content lives in `data/portfolio.json`. `lib/data.ts` defines TypeScript interfaces (`PersonalInfo`, `Experience`, `TechCategory`, etc.) and re-exports the JSON with proper types. Section components import from `lib/data.ts` — never directly from the JSON.

**Component hierarchy:**
- `app/layout.tsx` — root shell; mounts `Header` and `Footer` around page content
- `app/page.tsx` — home page; composes `Hero`, `Experience`, `TechStack`, `Contact` in order
- `components/ui/` — primitive building blocks (`Badge`, `Button`, `Card`, `IconWrapper`)

**Client vs Server components:** Only `Header` is a Client Component (`'use client'`; needs scroll detection and mobile menu state). Everything else is a Server Component by default — keep it that way unless interactivity requires otherwise.

**Styling:** Tailwind CSS v4 loaded via `@import "tailwindcss"` in `app/globals.css`. Design tokens (primary color `#C9A876`, background `#1C1917`, custom animations `fade-in`/`slide-up`) are defined as CSS custom properties in `globals.css`. There is no `tailwind.config.js` — v4 does not use one.

**Path alias:** `@/*` resolves to the project root (e.g. `@/components/Header`).

---