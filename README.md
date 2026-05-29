# Google × SparkLabs Taiwan AI Accelerator

Next.js 14 landing page for the Google Cloud Taiwan × SparkLabs Taiwan joint accelerator program.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS v3 + custom design system
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Sora, Noto Sans TC (via `next/font/google`)

## Getting Started

You need **Node.js 18.18+** installed. If you don't have it:

```bash
# Recommended — install via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install --lts
nvm use --lts
```

Then install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main landing page composition
│   └── globals.css         # Design tokens + utility classes
├── components/
│   ├── layout/             # Nav, Footer, Sticky mobile CTA
│   ├── sections/           # 9 landing page sections
│   └── ui/                 # Primitives (Button, SectionHeader, etc.)
├── lib/
│   └── utils.ts            # cn() utility
└── tailwind.config.ts      # Custom theme (colors, fonts, animations)
```

## Sections

1. **Hero** — Program tagline + dual-brand lock + dual CTA
2. **Stats** — Animated count-up of accelerator metrics
3. **Program Overview** — Apply → Select → Accelerate flow
4. **Benefits** — Bento-grid of 6 program perks
5. **Who Should Apply** — Eligibility criteria + filters
6. **Timeline** — Cohort 2026 milestone dates
7. **Mentors & Partners** — Mentor grid + marquee logo strip
8. **FAQ** — Accordion-style common questions
9. **Final CTA** — Conversion-optimized closing section

## Design System

| Token | Value |
|-------|-------|
| Background | `#0A1628` (deep navy) |
| Primary | `#4285F4` (Google Blue) |
| Accent | `#FF5C35` (SparkLabs energy) |
| AI Glow | `#34A853` (Google Green) |
| Text | `#F8FAFC` / `#94A3B8` |

Custom utilities in `globals.css`: `.glass`, `.glass-strong`, `.grid-bg`, `.text-gradient-brand`, `.text-gradient-spark`.

## Customization Checklist

Replace these placeholders before going live:

- [ ] Replace mentor names + initials in `components/sections/Mentors.tsx`
- [ ] Update stats in `components/sections/Stats.tsx`
- [ ] Update timeline dates in `components/sections/Timeline.tsx`
- [ ] Replace the SVG dual brand lock in `components/ui/BrandLogos.tsx` with real logos
- [ ] Point `#apply` CTA to the actual application form (Typeform / Google Form)
- [ ] Update contact info + social links in `components/layout/Footer.tsx`
- [ ] Add real OG image at `app/opengraph-image.png` (1200×630)

## Deployment

Deploy to Vercel, Google Cloud Run, or Firebase Hosting.

```bash
npm run build
npm run start
```

For Google Cloud Run (recommended for brand alignment):

```bash
gcloud run deploy gcp-sparklabs-program \
  --source . \
  --region asia-east1 \
  --allow-unauthenticated
```
