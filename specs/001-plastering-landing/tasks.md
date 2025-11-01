---
description: "Task list for plastering contractor landing page implementation"
---

# Tasks: Plastering Contractor Landing Page

**Input**: Design documents from `/specs/001-plastering-landing/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Include targeted unit and accessibility tests to satisfy success criteria and constitution gates.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Next.js project, package tooling, and repository hygiene.

- [X] T001 Scaffold Next.js 15 app-router project with pnpm config (`package.json`, `pnpm-workspace.yaml`, `app/page.tsx`, `tsconfig.json`).
- [X] T002 Install baseline dependencies (Next.js, React 19, next-sitemap, sharp, testing stack) and wire npm scripts in `package.json`.
- [X] T003 Configure linting/formatting/tooling files (`.eslintrc.cjs`, `.prettierrc`, `stylelint.config.cjs`, `.editorconfig`).

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared theming, content typing, asset automation, and quality gates required by all user stories.

- [X] T004 Create `app/layout.tsx` shell and global stylesheet (`app/styles/globals.css`) with base typography and responsive grid.
- [X] T005 Define theme palette tokens in `app/theme/palette.ts` and document WCAG AA contrast checks.
- [X] T006 Implement typed content interfaces in `app/content/types.ts` reflecting `contracts/content-schema.json`.
- [X] T007 Build Sharp image pipeline script (`scripts/images/generate.ts`) and hook `pnpm run generate:images` in `package.json`.
- [X] T008 Configure quality automation (`scripts/lighthouse/run-budget.mjs`, `lighthouserc.json`, `package.json` scripts for `lighthouse:ci`, `check:links`, and `test:a11y`).

**Checkpoint**: Foundation ready - hero, feature cards, and contact work can now begin.

---

## Phase 3: User Story 1 - Discover the flagship project (Priority: P1) 🎯 MVP

**Goal**: Present the flagship project hero with high-impact visuals, summary, and tap-to-call CTA above the fold.

**Independent Test**: Load the page and confirm the hero renders project summary, metric, and `tel:` CTA without scrolling.

### Implementation

- [X] T009 [US1] Populate flagship content data (`app/content/flagshipProject.ts`) including hero copy, services, metric, and CTA phone number.
- [X] T010 [US1] Add optimized hero background asset (`public/images/patterns/technical-lines.svg`) and references in `app/styles/globals.css`.
- [X] T011 [US1] Build `Hero.module.css` scoped styles and responsive layout for hero section.
- [X] T012 [US1] Implement `app/components/Hero.tsx` consuming flagship data and theme tokens.
- [X] T013 [US1] Compose hero section in `app/page.tsx`, ensuring tap-to-call CTA renders with `tel:` link and accessible labels.
- [X] T014 [P] [US1] Write unit test `tests/unit/Hero.test.tsx` covering summary, metric, and CTA behaviour.

**Checkpoint**: Hero experience functional with independent test.

---

## Phase 4: User Story 2 - Evaluate service offerings (Priority: P2)

**Goal**: Showcase four featured projects, service lineup, and trust indicators to validate expertise.

**Independent Test**: Scroll through featured projects and services, then recall two services and one trust signal accurately.

### Implementation

- [X] T015 [US2] Author featured project dataset (`app/content/featuredProjects.ts`) with exactly four entries, images, and testimonials.
- [X] T016 [US2] Create services copy module (`app/content/services.ts`) listing offerings and benefits.
- [X] T017 [US2] Implement `FeaturedProjects.module.css` and `app/components/FeaturedProjects.tsx` rendering cards with lazy-loaded images.
- [X] T018 [US2] Implement `ServicesOverview.module.css` and `app/components/ServicesOverview.tsx` showing service list with benefits.
- [X] T019 [US2] Implement `TrustSignals.module.css` and `app/components/TrustSignals.tsx` for testimonials/certifications.
- [X] T020 [US2] Integrate featured projects, services, and trust sections into `app/page.tsx` with anchor navigation.
- [X] T021 [P] [US2] Add unit tests `tests/unit/FeaturedProjects.test.tsx` verifying four cards render with alt text and trust details.
- [X] T022 [P] [US2] Add unit tests `tests/unit/ServicesOverview.test.tsx` covering benefits list and headings.

**Checkpoint**: Story 2 delivers independently testable featured content and service overview.

---

## Phase 5: User Story 3 - Initiate contact (Priority: P3)

**Goal**: Provide frictionless contact options including tap-to-call, email, and confirmation flow for inquiry form.

**Independent Test**: Submit the contact form and confirm on-page acknowledgement plus verified phone/email CTA.

### Implementation

- [X] T023 [US3] Define contact channel data (`app/content/contact.ts`) with phone, email, availability messaging.
- [X] T024 [US3] Implement `ContactFooter.module.css` and `app/components/ContactFooter.tsx` with CTA duplication and form layout.
- [X] T025 [US3] Implement static contact form markup in `app/components/ContactFooter.tsx` posting to the chosen form endpoint (e.g., Formspree) with inline thank-you fallback and no custom fetch.
- [X] T026 [US3] Wire footer section into `app/page.tsx`, ensuring hero CTA anchors to same phone number.
- [X] T027 [P] [US3] Add unit test `tests/unit/ContactFooter.test.tsx` asserting CTA numbers match and success message appears after simulated submit.
- [X] T028 [P] [US3] Extend Playwright spec `tests/accessibility/page.a11y.spec.ts` to cover keyboard traversal and form confirmation messaging.

**Checkpoint**: Contact workflow validated with CTA consistency and on-page confirmation.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Harden performance, accessibility, and copy accuracy across the full experience.

- [X] T029 [P] Run `pnpm generate:images` and verify output sizes (<60 KB each) for flagship and featured assets in `public/images/`.
- [X] T030 Execute Lighthouse CI budgets (`pnpm lighthouse:ci`) and tune assets/scripts to keep scores ≥ 90 (update `scripts/lighthouse/run-budget.mjs` if needed).
- [X] T031 Perform manual responsive QA across 320–1440 px viewports, documenting adjustments in `app/styles/globals.css` or component modules.
- [X] T032 Validate content schema by running `pnpm test` (includes schema checks) and update modules to satisfy `contracts/content-schema.json`.
- [X] T033 Refresh copy, contact details, and testimonials via stakeholder review; record approvals in `docs/CHANGELOG.md` entry.

---

## Dependencies & Execution Order

### Phase Dependencies
- Setup (Phase 1): prerequisite for all later work.
- Foundational (Phase 2): depends on Phase 1; blocks all user stories.
- User Story 1 (Phase 3): depends on Phase 2 completion; produces MVP.
- User Story 2 (Phase 4): depends on Phase 3 for shared layout patterns but can reuse foundations.
- User Story 3 (Phase 5): depends on Phase 3 for CTA consistency; can run parallel to late Phase 4 tasks once CTA data established.
- Polish (Phase 6): depends on all story work.

### User Story Dependencies
- US1 → US2: Featured sections reuse theme and page scaffolding from hero work.
- US1 → US3: Contact CTA reuses hero phone number and layout baseline.
- US2 ⟷ US3: Independent once global content types exist; coordinate on shared footer anchor targets.

---

## Parallel Execution Examples

```bash
# After foundational tasks complete:
# Parallel hero efforts
Task: "T011 [US1] Build Hero.module.css"
Task: "T012 [US1] Implement app/components/Hero.tsx"
Task: "T014 [P] [US1] Write unit test tests/unit/Hero.test.tsx"

# During User Story 2
Task: "T017 [US2] Implement FeaturedProjects component"
Task: "T018 [US2] Implement ServicesOverview component"
Task: "T021 [P] [US2] Add FeaturedProjects unit test"
Task: "T022 [P] [US2] Add ServicesOverview unit test"

# User Story 3 polishing
Task: "T025 [US3] Implement inquiry form handler"
Task: "T027 [P] [US3] Unit test ContactFooter"
Task: "T028 [P] [US3] Extend Playwright accessibility spec"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phases 1 and 2.
2. Deliver Phase 3 hero experience and verify unit test T014.
3. Deploy/demonstrate MVP with tap-to-call CTA.

### Incremental Delivery
1. Deliver MVP (Phase 3).
2. Add featured projects and services (Phase 4) with corresponding tests.
3. Layer contact workflow (Phase 5) to complete lead funnel.
4. Finish with Phase 6 polish tasks.

### Parallel Team Strategy
- Developer A: Lead hero (US1) and shared layout.
- Developer B: Drive featured projects and services (US2).
- Developer C: Implement contact flow and QA automation (US3 + Phase 6).
- Coordinate via shared content modules to avoid conflicts.

---

## Notes

- [P] tasks operate on distinct files and can execute concurrently after prerequisites.
- Ensure each story remains independently deployable and testable before moving forward.
- Commit after each task or logical group to maintain traceability.
