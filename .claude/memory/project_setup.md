---
name: Project Setup
description: Initial Next.js 15 project configuration for Boundless Summits Coaching Co. website
type: project
---

Next.js 15.5.18 with TypeScript, Tailwind CSS, and App Router — scaffolded manually (create-next-app couldn't run due to existing files in directory).

**Why:** Coaching business website for Boundless Summits Coaching Co., built page by page.

**How to apply:** When adding features, follow the App Router convention (`app/<route>/page.tsx`). All new components go in `components/`. The `design-reference/boundless-summits-homepage.html` file contains the reference design.

## Color palette (Tailwind tokens)
- `cream` / `cream-deep` / `cream-warmer` — background tones
- `navy` / `navy-deep` / `navy-darker` — text and dark surfaces
- `copper` / `copper-light` — accent
- `sage` — secondary accent

## Fonts
- `font-fraunces` → Fraunces (serif, italic available, weights 400/500/600) — headings
- `font-inter` → Inter (sans-serif, weights 300/400/500/600) — body

## Pages
- `/` → `app/page.tsx`
- `/about` → `app/about/page.tsx`
- `/approach` → `app/approach/page.tsx`
- `/services` → `app/services/page.tsx`
- `/contact` → `app/contact/page.tsx`

All currently show a `ComingSoon` placeholder (`components/ComingSoon.tsx`).
