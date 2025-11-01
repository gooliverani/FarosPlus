<!--
Sync Impact Report:
- Version: 1.0.0 → 2.0.0
- Principles Modified:
  * I. Quality First → I. Lightweight Delivery
  * II. User-Centric Design → II. Authentic Craftsmanship Story
  * III. Test-Driven Development → III. Accessible Responsiveness
  * IV. Security by Default → IV. Operational Simplicity
  * V. Maintainability → merged into Operational Simplicity & Development Standards
- Added Sections:
  * Development Standards › Performance & SEO Assurance
- Removed Sections:
  * Development Standards › Observability
- Templates:
  * ✅ .specify/templates/plan-template.md
  * ✅ .specify/templates/spec-template.md (alignment confirmed)
  * ✅ .specify/templates/tasks-template.md (alignment confirmed)
- Follow-up TODOs: None
-->

# FarosPlus Constitution

## Core Principles

### I. Lightweight Delivery
All delivery MUST preserve a minimal dependency footprint:
- The public site MUST render with static HTML, CSS, and vanilla JS only; adding runtime frameworks requires documented approval in the implementation plan.
- Third-party scripts, fonts, or analytics MUST be justified and MUST keep the critical-path payload ≤ 150 KB gzipped.
- Build tooling MUST remain reproducible via a single npm script and MUST avoid globally installed CLIs.

**Rationale**: A lightweight stack keeps hosting costs low, maximizes performance, and reduces maintenance overhead for a single-page marketing site.

### II. Authentic Craftsmanship Story
Content MUST foreground plastering and soundproofing expertise:
- Primary copy MUST describe the contractor’s plastering and soundproofing services, typical project types, and service area in plain language.
- The page MUST feature at least one trust signal (testimonials, certifications, portfolio highlights) with accessible alt text.
- A primary call-to-action (phone, email, or booking form) MUST be visible on first load and repeated near the footer.

**Rationale**: Clear messaging and trust builders convert visitors into leads and reflect the craftsmanship focus of the business.

### III. Accessible Responsiveness
The experience MUST be inclusive and performant across devices:
- Layout MUST remain functional without horizontal scrolling from 320 px to 1440 px viewports.
- Lighthouse Accessibility and Performance scores MUST each reach ≥ 90 on mobile emulation before release.
- Interactive elements MUST include keyboard focus, semantic markup, and WCAG 2.1 AA color contrast.

**Rationale**: Accessibility and responsive design broaden the audience, comply with regulations, and protect search ranking.

### IV. Operational Simplicity
Delivery pipeline MUST stay transparent and maintainable:
- Deployment MUST target static hosting with automated preview builds for every pull request.
- CI MUST run link checking and Lighthouse budget audits on each pull request; failures block merges.
- Content updates MUST come from a single maintained source (e.g., data file or modular HTML partials) without changing build tooling.

**Rationale**: A simple operational model keeps the site maintainable for non-engineering stakeholders and reduces breakage risk.

## Development Standards

### Lightweight Stack
- Prefer standards-based HTML, CSS, and minimal vanilla JS modules.
- NPM dependencies MUST be listed explicitly with justification; unused packages MUST be removed before release.
- Asset generation (images, fonts) MUST use lossless or high-efficiency formats with documented source locations.

### Front-End Quality
- Semantic HTML elements MUST structure every content block to aid screen readers and SEO.
- CSS MUST follow a utility-first or BEM-style naming convention captured in project docs.
- JavaScript enhancements MUST be progressive, keeping core content usable without scripts.

### Content Governance
- Copy updates MUST pass editorial review for tone, accuracy, and service coverage.
- Contact details MUST be validated before each release (phone, email, business hours).
- Visual assets MUST include descriptive alt text and usage rights confirmation.

### Performance & SEO Assurance
- Largest Contentful Paint MUST stay under 2.0 seconds on 4G throttled Lighthouse runs.
- All links MUST resolve with 200-level responses; redirects MUST be intentional and documented.
- Metadata (title, description, Open Graph) MUST be present and reflect plastering and soundproofing services.

## Development Workflow

### Change Process
1. All changes MUST be raised through pull requests with linked issue or spec.
2. At least one reviewer MUST confirm compliance with principles before merge.
3. CI pipeline MUST pass (build, lint, link check, Lighthouse budgets).
4. Changes affecting messaging or assets MUST include updated content source files.
5. Post-deployment verification MUST cover call-to-action functionality and contact channels.

### Quality Gates
- Pre-commit: Run formatters and linting (`npm run lint` / `npm run format`).
- Pre-push: Execute local Lighthouse script or HTML validation (`npm run test`).
- PR Review: Verify dependency count, payload budgets, accessibility metrics, and content accuracy.
- Pre-merge: CI ensures static build, link checker, Lighthouse ≥ 90 for Accessibility/Performance.
- Post-deployment: Manual cross-browser check (latest Chrome, Safari/Edge) and CTA validation within 24 hours.

## Governance

This constitution defines the governing principles for the FarosPlus marketing site and MUST be followed by all contributors.

**Amendment Process**:
- Proposed amendments MUST be documented in a tracked issue with rationale and expected version bump.
- Major changes require team consensus and, where possible, stakeholder sign-off.
- Version increments follow semantic versioning relative to governance impact.
- Operational playbooks MUST be updated alongside any breaking governance change.

**Compliance**:
- Pull requests MUST demonstrate adherence via checklist or automated outputs (bundle size, Lighthouse report).
- Deviations MUST include time-bound remediation plans and mitigating controls.
- Quarterly reviews SHOULD audit Lighthouse, dependency drift, and content accuracy.
- Continuous improvement MUST capture lessons learned from audits or incidents.

**Version**: 2.0.0 | **Ratified**: 2025-11-01 | **Last Amended**: 2025-11-01
