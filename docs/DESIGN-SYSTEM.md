# Design System — Axiom, as implemented on the site

Subordinate to [BRAND.md](BRAND.md) and [brand-guide.html](brand-guide.html). This documents how the guide's tokens map onto `styles.css`.

## 1. Color — warm neutrals + one accent

| Token | Value | Use |
|---|---|---|
| `--paper` | `#FCFBF9` | Primary background |
| `--ink` | `#1C1B1A` | Text; footer surface (statement moment) |
| `--fog` | `#96938C` | Secondary text, mono labels, small meta |
| `--greige` | `#E2E0D9` | Hairline rules, panels, soft fills |
| `--mulberry` | `#7B3550` | Signature accent, ≤ 10% of any view |

Usage ratio from the guide: paper 64 · ink 26 · accent 10. Mulberry appears only as: the monogram rule, section numbers, step numbers, stat numerals, link-hover underlines, the Beyond blockquote rule, and selection highlight. Never long body copy (it clears AA only for large/UI text). Graphite on paper clears AAA.

## 2. Typography — serif · sans · mono

Self-hosted latin subsets in `assets/fonts/` (Google Fonts woff2, ~96 KB total).

| Role | Face | Where |
|---|---|---|
| Display | Instrument Serif 400 (+ italic) | Name, section-entry titles, stats, quotes |
| Text | Manrope 400–600 (variable) | Body, UI, captions — line-height 1.7 |
| Evidence | JetBrains Mono | Kickers, dates, stages, proof links, colophon — small, uppercase, +0.14em |

Scale: H1 `clamp(3.25rem, 8.5vw, 6rem)` · lede `clamp(1.375rem, 2.6vw, 1.75rem)` · entry titles `~1.5–2rem` · body `0.9375rem` · mono labels `0.625–0.6875rem`.

## 3. Structure — the site reads as a numbered document

Every section opens with a guide-style header row: mono kicker left (`01 — HOW I WORK`, the number in mulberry), quiet right-aligned mono note, hairline underneath. The page is the flagship application of the same system as the brand guide — same furniture, same numbering.

Components: hero lockup (monogram → kicker → name → lede → links → stat strip) · four-step loop (numbered: it is a sequence) · work ledger rows (kicker / serif title / one line / mono proof link) · career ledger (serif company, mono years + stage; exact months live in `title` attrs and JSON-LD) · alumni text row (no logos — the system is typographic) · grayscale click-to-play stills (the only imagery; color returns on play) · fact list · graphite footer with reversed monogram and colophon.

## 4. Motion — one orchestrated moment

- On load: hero elements rise in sequence (500ms, 60–100ms stagger) and the monogram's mulberry rule draws in left → right. That is the signature; nothing else animates ambiently.
- On scroll: single-fire reveals (opacity + 10px rise, 500ms).
- Hover: underline color shifts only, 150ms. Nothing lifts, tilts, or counts up.
- `prefers-reduced-motion`: everything static. `?flat` query param: same, for QA screenshots. JS off: all content visible.

## 5. Print

`⌘P` renders the page as a short resume: monogram/stats/stills hidden, link URLs expanded inline, ink on white.
