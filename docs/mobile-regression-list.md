# Mobile Regression List

Date: 2026-03-15  
Status legend: `fixed`, `intentional`, `watch`

| ID | Regression | Affected surfaces | Root cause | Resolution | Status |
| --- | --- | --- | --- | --- | --- |
| MR-001 | Page width and edge padding drift across routes | Public pages, header, footer, admin shell | No global container primitive | Added `.site-container*` + migrated wrappers | fixed |
| MR-002 | Inconsistent vertical rhythm | Public pages | Hardcoded per-section `py-*` with no shared spacing tokens | Added `--section-space*` + `.section-space-y*` and applied | fixed |
| MR-003 | Hero heading overflow risk on phones | Home, portfolio, TikTok trial, about | Desktop-first heading sizes | Added stepped type scales per breakpoint | fixed |
| MR-004 | CTA rows cramped in narrow viewports | Home, services, portfolio, TikTok trial, detail pages | Inline desktop button sizing | Mobile full-width CTA behavior + responsive paddings | fixed |
| MR-005 | Sticky element pressure on small screens | Home "Why Choose" block, design system sidebar | Sticky behavior active too early | Sticky constrained to `lg` breakpoints | fixed |
| MR-006 | Contact form text too large and dense on small devices | Contact form | Inputs/select/textarea fixed at large sizes | Reduced to `text-base` on mobile, upscale at `sm+` | fixed |
| MR-007 | Map/address line potential overflow | Contact map block | Fixed map height and unwrapped address line | Responsive map height + `break-words` on address | fixed |
| MR-008 | Portfolio decorative absolute layer crowding small screens | Portfolio hero | Large decorative element always rendered | Hide decorative blob below `md` | fixed |
| MR-009 | Footer legal links could collide/wrap awkwardly | Footer bottom row | No wrap behavior for legal links | `flex-wrap` + breakpoint gap tuning | fixed |
| MR-010 | Legal pages too wide for comfortable reading on mobile | Privacy/Terms pages | Generic page wrapper width | Migrated to `.site-container-reading` | fixed |
| MR-011 | Admin auth shell not aligned to shared responsive layout | Admin login/shell | Isolated max-width/padding logic | Migrated to shared container primitives | fixed |
| MR-012 | Horizontal overflow in services matrix | Services comparison table | Wide tabular content on small screens | Explicit scroll container + `min-w-[880px]` table | intentional |
| MR-013 | Potential unsafe edge alignment on notched devices | All pages | No safe-area handling in wrappers | Safe-area-aware padding in container classes | fixed |

## Watchlist

1. `min-w-[880px]` table remains intentionally scrollable; monitor if content columns expand.
2. Desktop display values (`text-[9rem]`, `text-[10rem]`, decorative `text-[12rem]`) are intentionally retained for parity and guarded by responsive variants.
