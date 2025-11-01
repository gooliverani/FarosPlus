# FarosPlus Plastering Landing Page

Marketing microsite for FarosPlus that showcases flagship plastering work, featured engagements, core services, and multiple contact paths. The site is built as a statically exported Next.js 15 app with React 19, TypeScript 5, and CSS Modules to stay lightweight while preserving accessibility and performance guarantees.

## Highlights

- Flagship hero section with optimized imagery, quantified outcomes, and tap-to-call CTA.
- Featured project grid with testimonials and AVIF/WebP assets generated through a Sharp pipeline.
- Service overview, trust signals, and persistent contact footer with Formspree-backed inquiry form.
- Automated unit tests (Vitest) and accessibility checks (Playwright + axe) aligned with project constitution.
- Lighthouse CI budgets and bundle analysis scripts to keep the experience performant on mobile.

## Tech Stack

- Next.js 15 (App Router, static export)
- React 19 + React DOM 19
- TypeScript 5 targeting ECMAScript 2022
- CSS Modules with shared design tokens
- Sharp image processing pipeline (AVIF/WebP/JPEG)
- Vitest + Testing Library for unit coverage
- Playwright for keyboard and axe-core accessibility sweeps
- Lighthouse CI for performance budgets

## Getting Started

1. **Install prerequisites**
   - Node.js 20 LTS with Corepack enabled (`corepack enable pnpm`).
   - Sharp system dependencies (libvips) if not already installed.

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Generate optimized images**
   ```bash
   pnpm generate:images
   ```
   Place source PNG/JPG assets in `assets/images-src/**`. The script writes AVIF, WebP, JPEG, and blur placeholders to `public/images/**`.

4. **Run the dev server**
   ```bash
   pnpm dev
   ```
   The app is available at `http://localhost:3000`.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start Next.js development server. |
| `pnpm build` | Create the production build and static export (outputs to `out/`). |
| `pnpm test` | Run unit and accessibility test suites. |
| `pnpm test:unit` | Run Vitest unit tests only. |
| `pnpm test:a11y` | Run Playwright accessibility smoke suite. |
| `pnpm lighthouse:ci` | Execute Lighthouse CI against the local static export with budgets. |
| `pnpm check:links` | Scan the exported site for broken links. |
| `pnpm generate:images` | Regenerate AVIF/WebP/JPEG assets from `assets/images-src/`. |
| `pnpm analyze:bundle` | Inspect bundle output using Next.js analyzer. |

## Testing & Quality Gates

- **Unit tests**: Located under `tests/unit/**`, covering each content section.
- **Accessibility tests**: `tests/accessibility/page.a11y.spec.ts` verifies keyboard focus and thank-you visibility.
- **Content schema**: `pnpm test` validates TypeScript content modules against `specs/001-plastering-landing/contracts/content-schema.json`.
- **Performance**: `pnpm lighthouse:ci` enforces ≥90 scores for Performance and Accessibility.

## Content & Theming

- All marketing copy and structured data live in `app/content/**` for quick stakeholder edits.
- Global tokens and layout primitives reside in `app/styles/globals.css` and `app/theme/palette.ts`.
- Component-level styles use CSS Modules under `app/components/*.module.css` to keep bundles minimal.

## Deployment

The project is configured with `output: 'export'`. Running `pnpm build` writes the static site to `out/`, ready for hosting on Vercel’s static mode, Netlify, GitHub Pages, or any CDN. Re-run `pnpm lighthouse:ci` against the deployed URL to confirm budgets hold.

## Project Structure

```
app/
  components/         # UI sections (Hero, FeaturedProjects, ServicesOverview, TrustSignals, ContactFooter)
  content/            # Typed content modules consumed by the page
  styles/             # Global CSS
  theme/              # Design token palette
public/
  images/             # Generated AVIF/WebP/JPEG assets
scripts/
  images/             # Sharp image pipeline
  lighthouse/         # Lighthouse CI runner
specs/001-plastering-landing/
  plan.md             # Implementation plan
  tasks.md            # Phase/task breakdown
  contracts/          # JSON schema for content modules
-tests/
-  unit/              # Vitest suites
-  accessibility/     # Playwright accessibility spec
```

## Contributing

1. Create a feature branch off `main`.
2. Implement changes with corresponding tests.
3. Run `pnpm test` and `pnpm lighthouse:ci` before opening a pull request.
4. Document stakeholder approvals in `docs/CHANGELOG.md` when copy or requirements change.

## License

This project is maintained by FarosPlus. Contact the FarosPlus engineering team for licensing details.
