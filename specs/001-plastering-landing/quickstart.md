# Quickstart: Plastering Contractor Landing Page

## Prerequisites

- Node.js 20 LTS with Corepack enabled
- PNPM 9.x (via `corepack enable pnpm`) to keep deterministic installs
- Sharp build prerequisites (libvips) for local image optimization

## Setup

```bash
pnpm install
pnpm run generate:images   # prepares AVIF/WebP variants
```

## Development

```bash
pnpm dev         # Local Next.js dev server at http://localhost:3000
pnpm lint        # ESLint + stylelint rules
pnpm test        # @testing-library/react + Playwright component smoke
```

## Accessibility & Performance Checks

```bash
pnpm test:a11y            # Playwright axe-core sweep on key sections
pnpm lighthouse:ci        # Lighthouse CI against local build (budgets enforced)
pnpm check:links          # Broken link checker over `.next/export`
```

## Build & Export

```bash
pnpm build             # Next.js production build and static export (outputs to `out/`)
```

## Deployment Verification

1. Upload `out/` directory to Vercel static deployment or equivalent CDN host.
2. Re-run Lighthouse CI against deployed URL and confirm scores ≥ 90 (Performance, Accessibility).
3. Manually verify tap-to-call CTA, email link, and hero/featured imagery load on mobile and desktop.
4. Confirm payload remains under 150 KB gzipped via `pnpm analyze:bundle` report.
