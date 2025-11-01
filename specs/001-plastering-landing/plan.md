# Implementation Plan: Plastering Contractor Landing Page

**Branch**: `001-plastering-landing` | **Date**: 2025-11-01 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-plastering-landing/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Single-page marketing site for FarosPlus showcasing a flagship plastering project, four featured engagements, service overview, and streamlined tap-to-call CTA. Delivery targets a static Next.js build with minimal dependencies, mobile-first accessibility, and payload kept under 150 KB while preserving high-impact visuals.

## Technical Context

**Language/Version**: TypeScript 5.x targeting ECMAScript 2022  
**Primary Dependencies**: Next.js 15 (app router, static export), React 19, React DOM 19, next-sitemap (static XML), optional Sharp for image optimization 
**Framework Exception (approved)**: Next.js 15 static export + React 19, justified by pre-rendered HTML output, zero client-side routing, and verified runtime bundle under 35 KB. 
**Storage**: N/A (content sourced from local JSON/TS modules)  
**Testing**: Playwright component tests, @testing-library/react, Lighthouse CI for budgets  
**Target Platform**: Static hosting on Vercel (SSG export) or equivalent CDN-backed static host  
**Project Type**: web (single static marketing page)  
**Performance Goals**: LCP ≤ 2.0s on mobile 4G, CLS < 0.1, payload ≤ 150 KB gzipped critical path  
**Constraints**: Approved Next.js static export variance (runtime JS < 35 KB), no runtime API calls, progressive enhancement only    
**Scale/Scope**: ~1 public landing page with hero + 4 project cards + service summary + trust/footer blocks

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*
- Lightweight Delivery: Dependencies restricted to Next.js core trio; hero and featured imagery compressed via Sharp to AVIF/WebP with responsive sizes; enforce runtime JS under 35 KB and HTML+CSS payload within 150 KB gzipped. Approved static-export exception recorded (no client-side routing, runtime JS audit documented in CI).
- Authentic Craftsmanship Story: Content map defines hero flagship narrative, four featured project cards (service, location, testimonial/metric), services overview, and mirrored tap-to-call CTA in hero/footer.
- Accessible Responsiveness: Layout planned for 320/768/1024/1440 px breakpoints, color palette checked against WCAG AA, interactive elements keyboard navigable, Lighthouse mobile targets ≥ 90 Accessibility/Performance locked into CI budgets.
- Operational Simplicity: Static export deployed to Vercel, GitHub Actions runs lint, Playwright smoke, Lighthouse CI, and broken-link checker; marketing content maintained in `app/content/*.ts` modules as single source of truth.

**Status**: PASS (2025-11-01)

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
app/
├── layout.tsx
├── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── FeaturedProjects.tsx
│   ├── ServicesOverview.tsx
│   ├── TrustSignals.tsx
│   └── ContactFooter.tsx
├── content/
│   ├── flagshipProject.ts
│   ├── featuredProjects.ts
│   ├── services.ts
│   └── contact.ts
├── styles/
│   └── globals.css
└── theme/
    └── palette.ts

public/
└── images/
    ├── flagship/
    └── featured/

tests/
├── unit/
│   ├── Hero.test.tsx
│   ├── FeaturedProjects.test.tsx
│   └── ContactFooter.test.tsx
└── accessibility/
    └── page.a11y.spec.ts

scripts/
└── lighthouse/
    └── run-budget.mjs
```

**Structure Decision**: Next.js app-router layout with typed content modules keeps runtime dependencies minimal, enables static export, and isolates themed UI components for testing. Public images remain optimized under `public/images`, while dedicated test and script directories enforce accessibility and Lighthouse budgets.

## Phase 0: Research Backlog

- R0.1 Document Next.js static export configuration for tap-to-call CTA and zero-runtime data fetching.
- R0.2 Validate WCAG AA color palette and gradient/technical line background approach with automated contrast tools.
- R0.3 Establish Sharp image optimization presets (sizes, formats) that keep hero + four featured assets under payload budget.
- R0.4 Evaluate Lighthouse CI budget thresholds and integrate with GitHub Actions workflow.

## Phase 1: Design & Contracts

### Data Modeling
- Define TypeScript content modules for flagship project, featured projects (exactly four entries), service offerings, contact channels, and theme palette.
- Enforce schema validation using generated JSON Schema to prevent content regressions.

### Contracts
- Publish `contracts/content-schema.json` to describe required content structure for static modules.
- Provide sample content stub for tests ensuring CTA and featured projects render correctly.

### Quickstart & Tooling
- Document PNPM-based workflow, including image generation, lint/test commands, and Lighthouse/link checks.
- Codify background pattern creation (SVG/gradient) within theme utilities while keeping assets under 2 KB.

## Phase 2 Preview (for /speckit.tasks)
- Break work into setup (Next.js scaffolding, lint/test config), content module implementation, component development, styling/theming, and QA passes (a11y, Lighthouse, bundle analysis).
- Reserve buffer tasks for mobile polish and payload regression fixes triggered by Lighthouse CI.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| *None* | — | — |
