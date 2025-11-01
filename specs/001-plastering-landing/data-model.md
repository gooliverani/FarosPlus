# Data Model: Plastering Contractor Landing Page

## Overview

Content is sourced from static TypeScript modules to enable a single source of truth for the landing page. Entities map directly to content sections described in the specification so copy revisions do not require code restructuring.

## Entities

### FlagshipProject
| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| id | string | Yes | Stable identifier for internal references | Must be `"flagship"` |
| title | string | Yes | Project headline displayed in hero | 40 character max to fit hero layout |
| location | string | Yes | City/region of the project | Title case |
| services | string[] | Yes | Plastering/soundproofing services applied | At least 1 entry |
| summary | string | Yes | 2-3 sentence outcome summary | 320 characters max |
| heroImage | ImageAsset | Yes | Primary hero image | See ImageAsset |
| resultMetric | string | Yes | Quantified outcome (e.g., "Noise reduced by 45 dB") | Must include unit |
| testimonial | Testimonial | Optional | Client quote supporting credibility | If present, author must be set |
| primaryCta | CtaLink | Yes | Tap-to-call action configuration | `type` must be `"phone"` |

### FeaturedProject
| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| id | string | Yes | Unique slug for the project card | Kebab-case |
| title | string | Yes | Project name used in card heading | 60 character max |
| location | string | Yes | City/region displayed on card | Title case |
| serviceCategory | "plastering" \| "soundproofing" \| "hybrid" | Yes | Dominant service delivered | — |
| description | string | Yes | 2 sentence outcome description | 240 characters max |
| highlight | string | Optional | Metric or credential to spotlight | ≤ 80 characters |
| testimonial | Testimonial | Optional | Supporting quote | If present, author required |
| image | ImageAsset | Yes | Project image tile | AVIF/WebP pair with fallback |

### ServiceOffering
| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| id | string | Yes | Identifier for linking | snake_case |
| name | string | Yes | Service title (e.g., "Acoustic Plaster") | ≤ 40 characters |
| description | string | Yes | Short value statement | 200 characters max |
| benefits | string[] | Yes | Bullet list of client benefits | 3-5 entries |

### ContactChannel
| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| type | "phone" \| "email" | Yes | Channel type | Primary must be phone |
| label | string | Yes | Display label (e.g., "Call Now") | ≤ 20 characters |
| value | string | Yes | Actual phone number or email | Phone in international format; email RFC5322 |
| availability | string | Optional | Response window (“Mon–Fri 8–18h”) | ≤ 30 characters |

### ImageAsset
| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| src | string | Yes | Path under `public/images` | Must start with `/images/` |
| alt | string | Yes | Accessibility description | Non-empty, ≤ 120 characters |
| width | number | Yes | Intrinsic width in pixels | >0 |
| height | number | Yes | Intrinsic height in pixels | >0 |
| placeholder | string | Optional | Base64 or blur hash | ≤ 2 KB |

### Testimonial
| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| quote | string | Yes | Client quote | 280 characters max |
| author | string | Yes | Speaker name & role | Format: "Name, Role" |
| projectRole | string | Optional | Relationship description | ≤ 40 characters |

### ThemePalette
| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| primary | string | Yes | Brand accent for CTAs | Hex format; contrast ratio ≥ 4.5:1 on white |
| secondary | string | Yes | Supporting accent for backgrounds | Hex format |
| neutral | string | Yes | Base neutral tone for copy | Hex format |
| gradient | string | Optional | Subtle background gradient specification | CSS linear-gradient/URL ≤ 2 KB |
| technicalLines | string | Optional | Reference to SVG asset for technical lines | Points to `/images/patterns/technical-lines.svg` |

## Relationships

- `FlagshipProject.primaryCta` references a `ContactChannel` with `type = "phone"`.
- `FeaturedProject` cards reference `ImageAsset` and optional `Testimonial` entities.
- Every `ServiceOffering` is surfaced within the services overview; there is no nested hierarchy.
- `ThemePalette` is imported into component styling to ensure consistent colors and backgrounds across all sections.

## Validation Rules

- Total featured projects list MUST contain exactly four entries.
- Contact channel set MUST include at least one phone and one email entry.
- Image assets must provide AVIF and WebP variants with fallback JPEG under 60 KB each.
- Any testimonial linked to a project must include explicit consent note stored internally (tracked in content comments; not exposed on page).
