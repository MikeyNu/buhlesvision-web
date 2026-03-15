# Responsive Layout System

Date: 2026-03-15

## System goals

1. Preserve desktop visual parity with the approved design language.
2. Remove wrapper/container drift between routes.
3. Make mobile/tablet behavior intentional, not compressed desktop.
4. Prevent accidental horizontal overflow without hiding bugs.

## Layout primitives

Defined in `app/globals.css`:

- Width tokens:
  - `--site-max: 80rem`
  - `--site-max-wide: 87.5rem`
  - `--site-max-reading: 56rem`
- Spacing tokens:
  - `--site-inline: 1rem` (`1.5rem` at `sm+`)
  - `--section-space: 4rem` (`5rem` at `sm+`, `8rem` at `lg+`)
  - `--section-space-tight: 3rem` (`4rem` at `sm+`, `6rem` at `lg+`)
- Utility classes:
  - `.site-container`
  - `.site-container-wide`
  - `.site-container-reading`
  - `.section-space-y`
  - `.section-space-y-tight`

## Stacking and composition rules

1. Route shell controls background and text context; section components should not re-implement global width wrappers.
2. Page sections use one container primitive only (no nested competing max-width wrappers unless intentional composition requires it).
3. Two-column compositions collapse to single-column by default on small screens, then restore at `md`/`lg` depending on density.
4. CTA clusters become vertical and full-width on mobile when more than one action exists.
5. Sticky behavior starts at `lg` unless user testing proves smaller breakpoints can support it without crowding.

## Typography and density rules

1. Display headings keep desktop punch but receive explicit mobile and small-tablet steps.
2. Form fields default to `text-base` on mobile and scale at `sm+`.
3. Long contact/address lines must be breakable.

## Media and decorative rules

1. Decorative absolute layers must be hidden or reduced on narrow screens.
2. Content images use explicit aspect containers with `object-cover`.
3. Wide data tables are treated as scroll regions, not squeezed content.

## Navbar and footer responsive behavior

1. Header desktop and mobile-menu wrappers both use `.site-container`.
2. Brand lockup in header scales from `text-base` to `text-lg` at `sm+`.
3. Footer legal row supports wrapping and tighter gaps on mobile.

## Admin and utility surfaces

1. Admin shell and auth pages use the same container family to avoid divergent behavior.
2. Design system reference page was aligned to container primitives for parity testing consistency.

## Non-goals

1. No aesthetic redesign.
2. No brute-force `overflow-x-hidden` masking.
3. No random breakpoint additions without structural reason.
