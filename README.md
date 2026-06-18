# NUROST — Global IT & Financial Services

A world-class company profile website for **NUROST**, a global IT and financial services firm.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **motion/react**.

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Animation** — Framer Motion + motion/react
- **Icons** — Lucide React
- **Fonts** — Inter (body) + Syne (display) via next/font

## Project Structure

```
app/
  layout.tsx        # Fonts, metadata, SEO
  page.tsx          # Section assembly
  globals.css       # Design tokens, Tailwind theme
components/
  logo.tsx          # SVG logo component
  sections/         # Hero, Services, Stats, Process, Portfolio,
                    # Testimonials, Pricing, Team, Blog, CTA, Contact, Footer
  shared/           # Navbar, MagneticButton, AnimatedCounter,
                    # SectionReveal, PixelCanvas
  ui/               # card, spotlight, splite, testimonials-columns-1
lib/
  utils.ts          # cn() helper
  data/             # services, testimonials, team, portfolio, pricing, blog
```

## Build

```bash
pnpm build
```
