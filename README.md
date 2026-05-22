# Meridian Construction Management

A premium, production-grade single-page marketing site for an elite construction project
management brand. Built with Next.js 15, Tailwind v4, Framer Motion, GSAP, and Lenis.

---

## Stack

- **Framework** — Next.js 15 (App Router) + React 19
- **Language** — TypeScript (strict)
- **Styling** — Tailwind CSS v4 (`@theme`-driven design tokens)
- **Animation** — Framer Motion, GSAP, Lenis smooth scrolling
- **UI primitives** — Hand-rolled, shadcn-style (Button, Input, Textarea, Select, Label)
- **Forms** — React Hook Form + Zod
- **Icons** — Lucide
- **SEO** — `next/metadata`, OpenGraph, Twitter cards, JSON-LD (Organization + GeneralContractor)
- **Accessibility** — Skip link, focus ring, reduced-motion support, semantic landmarks, ARIA
- **Performance** — `next/image` w/ AVIF + WebP, `next/font` self-hosted, lazy below-fold motion

## Getting started

```bash
# 1. Install dependencies (Node 20+ recommended)
npm install

# 2. Copy environment template
cp .env.local.example .env.local

# 3. Run dev
npm run dev

# 4. Type-check & lint
npm run type-check
npm run lint

# 5. Production build
npm run build && npm run start
```

Open http://localhost:3000.

## Project structure

```
construction-site/
├── app/
│   ├── api/contact/route.ts     # Validated form submission endpoint (Zod + rate limit)
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── contact/page.tsx
│   ├── globals.css              # Tailwind v4 @theme + design tokens + animations
│   ├── layout.tsx               # Root layout: fonts, SEO, JSON-LD, header/footer/CTA
│   ├── page.tsx                 # Home — composes all 10 sections
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── animated/                # Reveal, StatCounter, Marquee, Magnetic, BlueprintGrid
│   ├── layout/                  # Header, Footer, MobileStickyCta, SmoothScroll (Lenis)
│   ├── sections/                # The 10 sections of the page
│   └── ui/                      # Button, Input, Textarea, Select, Label
├── lib/
│   ├── data.ts                  # All site content (projects, team, reviews, services…)
│   ├── schema.ts                # Zod contact-form schema
│   ├── seo.ts                   # Metadata + JSON-LD helpers
│   └── utils.ts                 # cn() and formatters
├── public/
│   └── favicon.svg
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## The 10 sections

1. **Hero** — cinematic Pexels-hosted construction video, animated stats, blueprint grid overlay
2. **Trust bar** — animated logo marquee + three credibility badges
3. **Services** — six service cards with hover spotlights and micro-interactions
4. **Featured projects** — filterable card grid with 3D-tilt hover + status pills
5. **Future projects** — scroll-progress timeline that paints the roadmap as you read
6. **Team** — large portrait cards with LinkedIn affordance
7. **Reviews** — auto-advancing testimonial carousel with quantitative trust metrics
8. **Why choose us** — five-step process with scroll-progress connector
9. **About** — leadership story + values grid
10. **Contact** — RHF + Zod form, static map, direct call/email/booking CTAs

## Content

All copy and assets live in `lib/data.ts`. Swap projects, team, reviews, and brand details from a
single file. Images reference Unsplash / Pexels via `next.config.ts` `remotePatterns`.

## Forms

`POST /api/contact` validates with the shared Zod schema. Submissions are rate-limited per IP and
logged structured. To wire to a real email provider, replace the `console.log` in
[`app/api/contact/route.ts`](app/api/contact/route.ts) with a Resend / Postmark / SendGrid call.

## Accessibility & motion

- All animations respect `prefers-reduced-motion`.
- Lenis smooth scroll is disabled on touch devices and reduced-motion users.
- All interactive elements have focus-visible rings.
- Form inputs are labeled, error-announced, and use `aria-invalid`.

## Deploy

Push to GitHub, import into Vercel, and click deploy. Set
`NEXT_PUBLIC_SITE_URL` for absolute URLs in OpenGraph and sitemap output.

## License

Proprietary — © Meridian Construction Management.
