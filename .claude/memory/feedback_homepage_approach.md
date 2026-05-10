---
name: Homepage Build Approach Validated
description: The component-based homepage build approach was confirmed as correct by the user
type: feedback
---

The homepage build approach was confirmed as perfect by the user.

**Why:** User reviewed the live homepage and approved it without any change requests.

**How to apply:** For subsequent pages (About, Approach, Services, Contact), follow the same patterns established in the homepage build:
- CSS-only animations via keyframes in globals.css + utility classes
- All components are Server Components (no "use client" needed for static/animated sections)
- Inline styles only for complex one-off values (gradients, clamp() font sizes, specific rgba colors); Tailwind for everything standard
- `::before` pseudo-elements replaced with sibling divs when gradient content is needed
- `next/image` with `fill` inside a sized container for circular logo placements
- `next/image` with explicit width/height + `h-auto` for full logo banner
- Real Next.js routes (`/about`, etc.) rather than hash anchors
- Custom CSS variables (`var(--text-dark)`, `var(--text-mid)`) via inline style prop for the two prose gray tones not in Tailwind config
