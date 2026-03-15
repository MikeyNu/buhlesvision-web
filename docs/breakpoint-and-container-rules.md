# Breakpoint and Container Rules

Date: 2026-03-15

## Breakpoint strategy

Tailwind breakpoints in use:

- `sm` (`>= 640px`): first expansion step from compact phone layout.
- `md` (`>= 768px`): tablet and large-phone landscape layout transitions.
- `lg` (`>= 1024px`): desktop composition unlocks (sticky, larger display scales).

## Container rules

1. Default page sections: `.site-container` (`max-width: 80rem`).
2. Extra-wide compositions (hero/media only when needed): `.site-container-wide` (`max-width: 87.5rem`).
3. Reading/legal/forms-heavy blocks: `.site-container-reading` (`max-width: 56rem`).
4. All container classes include safe-area-aware inline padding via `env(safe-area-inset-*)`.

## Section spacing rules

Tokenized spacing:

- `section-space-y`: `4rem` base, `5rem` at `sm`, `8rem` at `lg`.
- `section-space-y-tight`: `3rem` base, `4rem` at `sm`, `6rem` at `lg`.

Use:

1. Long-form major sections -> `section-space-y`.
2. Dense blocks (cards/comparison/form bundles) -> `section-space-y-tight`.

## Grid and flex collapse rules

1. Default to single column on mobile.
2. Move to 2+ columns at `md` where card content remains readable.
3. Keep key hero/feature split layouts at `lg` when one side is sticky or content-heavy.
4. Ensure mobile CTA groups use vertical stacking and full-width actions.

## Overflow rules

1. No global `overflow-x-hidden`.
2. Use local overflow containers only for inherently wide content (tables).
3. Decorative absolute elements must be gated by breakpoint when they can collide with content.

## Typography scaling rules

1. Display headings require at least one mobile and one tablet step.
2. Body copy remains readable (`text-base` on compact screens, upscale where design needs it).
3. Form controls avoid oversized mobile text to preserve layout density and avoid clipping.

## Exception rules

Allowed exception patterns:

1. Desktop parity display values (`text-[9rem]`, `text-[10rem]`) with explicit smaller fallback steps.
2. Intentionally scrollable comparison tables with minimum width constraints.
