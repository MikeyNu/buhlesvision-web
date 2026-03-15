# Wrapper and Container Audit

Date: 2026-03-15

## Current wrapper tree (post-fix)

1. `app/layout.tsx`
2. Route layouts:
   - `app/(public)/layout.tsx` -> `SiteHeader` + `main.min-w-0` + `SiteFooter`
   - `app/admin/(auth)/layout.tsx`
   - `app/admin/(protected)/layout.tsx`
3. Shared wrappers:
   - Header outer row -> `.site-container`
   - Header mobile nav -> `.site-container`
   - Footer main wrapper -> `.site-container`
   - Public pages -> `.site-container`, `.site-container-wide`, `.site-container-reading`
   - Admin shell -> `.site-container`

## Container primitive system introduced

Defined in `app/globals.css`:

- `--site-max: 80rem`
- `--site-max-wide: 87.5rem`
- `--site-max-reading: 56rem`
- `--site-inline: 1rem` (base, scales to `1.5rem` at `sm+`)
- Safe-area-aware inline padding:
  - `padding-left: max(var(--site-inline), env(safe-area-inset-left))`
  - `padding-right: max(var(--site-inline), env(safe-area-inset-right))`

Utility classes:

- `.site-container`
- `.site-container-wide`
- `.site-container-reading`
- `.section-space-y`
- `.section-space-y-tight`

## Container inventory snapshot

- `site-container*` usage in `app/` + `components/`: **41 references**
- `max-w-7xl` references in `app/` + `components/`: **0**
- `overflow-x-auto` references: **1** (services comparison table; intentional)

## Pre-fix conflict patterns (resolved)

1. Nested wrappers mixing `mx-auto`, `max-w-*`, and repeated `px-*` per section.
2. Different max-width logic between header/footer/pages/admin.
3. Reading pages not using a dedicated reading-width pattern.
4. Mobile menu using a separate, duplicated container recipe.

## Residual non-problematic exceptions

1. Content constraints like `max-w-2xl` on paragraphs remain for readability.
2. One `max-w-5xl` usage in portfolio composition remains intentional.
3. One wide table (`min-w-[880px]`) remains intentional and scroll-contained.

## Wrapper coherence decision

Global decision: all route surfaces use the same container primitives, and section spacing is tokenized.  
Result: wrapper behavior is predictable across pages and breakpoints, with far fewer one-off width and padding implementations.
