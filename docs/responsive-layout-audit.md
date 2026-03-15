# Responsive Layout Audit

Date: 2026-03-15  
Scope: Public site, shared shell, design system page, admin shell/auth surfaces

## Audit method

- Reviewed root layouts, shared wrappers, and every major page route.
- Ran pattern scans for wrapper/container usage, overflow-risk utilities, hardcoded sizing, and spacing utilities.
- Verified no inline style overrides in `app/` and `components/` via `rg -n "style=\{"`.
- Validated post-refactor health with:
  - `npm run lint`
  - `npm run build`

## Forensic findings by area

| Area | Pre-fix symptom | Root cause | Severity | Fix status | Primary files |
| --- | --- | --- | --- | --- | --- |
| App shell | Some child sections could overflow due to flex/grid content in nested pages | `main` had no explicit shrink guard | Medium | Fixed | `app/(public)/layout.tsx` |
| Global containers | Inconsistent wrapper stack (`mx-auto max-w-7xl px-6`, `max-w-5xl`, `max-w-[1400px]`) per section/page | No single container primitive | High | Fixed systemically | `app/globals.css`, all public pages, header/footer |
| Global section rhythm | Page-to-page vertical spacing drift on mobile and tablet | Repeated per-section hardcoded `py-*` values with no shared token | High | Fixed systemically | `app/globals.css`, all public pages |
| Safe-area handling | Potential edge collision on devices with display cutouts | Horizontal padding not safe-area aware | Medium | Fixed systemically | `app/globals.css` |
| Header/nav | Desktop wrapper and mobile-menu wrapper used separate hardcoded container logic | Duplicate width/padding classes, no shared container | High | Fixed | `components/site/site-header.tsx` |
| Footer | Footer links could crowd/wrap poorly on small widths; large vertical footprint on mobile | Desktop-first spacing and non-wrapping legal row | Medium | Fixed | `components/site/site-footer.tsx` |
| Home page | Oversized hero typography and CTA sizing on mobile, sticky block too aggressive | Desktop typography and sticky behavior applied too early | High | Fixed | `app/(public)/page.tsx` |
| Services page | Header scale too large on small screens; table behavior needed explicit overflow policy | Mixed spacing/width patterns and no intentional mobile table handling | High | Fixed | `app/(public)/services/page.tsx` |
| Portfolio index | Hero scale and filter controls cramped on small widths; decorative blob could intrude | Desktop-first control row and large decorative absolute layer | High | Fixed | `app/(public)/portfolio/page.tsx` |
| Portfolio detail | Title/call-to-action scale and spacing too desktop-biased | Legacy wrapper and non-fluid CTA behavior | Medium | Fixed | `app/(public)/portfolio/[slug]/page.tsx` |
| About page | Section spacing and heading scale drift; service rows crowded on mobile | Mixed container widths and desktop-first row alignment | High | Fixed | `app/(public)/about/page.tsx` |
| Contact page | Hero/contact text and form card too large/dense on smaller widths | Desktop-first type/padding values | High | Fixed | `app/(public)/contact/page.tsx`, `components/site/contact-form.tsx`, `components/site/studio-map.tsx` |
| TikTok trial page | Hero, CTA, and section headings too large on phones; decorative heading overlap risk | Desktop-first scale values and unguarded decorative text | High | Fixed | `app/(public)/tiktok-trial/page.tsx` |
| Legal pages | Reading layout was wider and less controlled than desired on mobile | No shared reading-width primitive | Medium | Fixed | `app/(public)/privacy-policy/page.tsx`, `app/(public)/terms-of-service/page.tsx` |
| Admin shell/login | Auth and admin wrappers used separate local width systems | Legacy `px` + `max-w` wrappers with duplicated logic | Medium | Fixed | `components/admin/admin-shell.tsx`, `app/admin/(auth)/login/page.tsx` |
| Design system page | Used standalone container logic and mobile typography drift | Isolated page-level wrapper style not aligned to global primitives | Medium | Fixed | `app/design-system/page.tsx` |

## Confirmed overflow sources and disposition

| Source | Location | Disposition |
| --- | --- | --- |
| Horizontal table overflow | `services` comparison table | Kept intentionally with `overflow-x-auto` + `min-w-[880px]`; this is controlled, not accidental page overflow |
| Large decorative absolute blob (`w-[800px]`) | Portfolio hero | Kept but hidden below `md` to prevent mobile intrusion |
| Large display text values (`text-[9rem]`, `text-[10rem]`, `text-[12rem]`) | Home/portfolio hero and decorative elements | Kept for desktop parity; guarded with smaller mobile steps and visibility gating |

## Repeated anti-patterns identified and corrected

1. Repeated local wrapper classes replaced with shared container primitives.
2. Desktop-first heading scales now have stepped mobile and small-tablet values.
3. CTA button rows now use full-width mobile behavior where appropriate.
4. Sticky behavior constrained to larger breakpoints (`lg`) where needed.
5. Footer/legal rows now wrap cleanly on small screens.
6. Form controls reduced to `text-base` on small screens, scaling up on larger breakpoints.

## Post-fix verification summary

- `eslint` passed.
- `next build` passed.
- No inline style overrides in audited source folders.
- No unintended `overflow-x-hidden` masking introduced.
