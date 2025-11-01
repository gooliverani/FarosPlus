# Research: Plastering Contractor Landing Page

## Summary

Focused on a static Next.js delivery that balances visual impact with strict payload and accessibility budgets. Researched theme, asset strategy, and CI tooling to enforce constitution gates for lightweight delivery and operational simplicity.

## Findings

### Decision: Next.js static export with TypeScript
- **Rationale**: Native image optimization, routing, and incremental adoption keep dependencies constrained while supporting static hosting and CI integration. TypeScript ensures content modules remain type-safe.
- **Alternatives considered**: Astro (lighter runtime but less integrated image pipeline), Plain HTML + Vite (lean build but higher maintenance for routing/assets), Eleventy (minimal but weaker React component reuse).

### Decision: CSS Modules with design tokens
- **Rationale**: Keeps bundle size low without global utility frameworks, allows scoped styling per component, and supports theming via a centralized palette for consistent brand colors that meet WCAG AA.
- **Alternatives considered**: Tailwind CSS (fast iteration but adds dependency weight), Styled Components (runtime cost), Plain global CSS (risk of name collisions without tooling).

### Decision: Sharp-driven AVIF/WebP asset pipeline
- **Rationale**: Pre-generates responsive image sets with high compression efficiency, keeping hero + featured imagery within payload budget while preserving quality.
- **Alternatives considered**: Manual Photoshop exports (harder to automate), Next/Image on-the-fly optimization (requires server runtime), SVG-only approach (insufficient for photo showcases).

### Decision: Lighthouse CI with budgets + Playwright accessibility smoke
- **Rationale**: Automates enforcement of ≥90 Accessibility/Performance scores and keyboard navigation checks, aligning with constitution gate verification.
- **Alternatives considered**: WebPageTest manual runs (slower feedback), Pa11y CLI alone (a11y only, no performance), Percy visual diff (visual focus but no performance metrics).

### Decision: Thematic styling with subtle technical line background
- **Rationale**: Combines modern minimal layout with brand-recognizable accent colors and SVG/gradient overlays that remain under 2 KB and do not disrupt contrast ratios.
- **Alternatives considered**: Solid color background (less distinctive), Heavy textures (risk exceeding payload and reducing readability), Full-bleed photography (competes with project imagery).

## Outstanding Questions

- None
