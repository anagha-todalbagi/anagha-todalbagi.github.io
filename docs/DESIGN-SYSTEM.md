# Design System v3.1 — anaghatodalbagi.com

Subordinate to [BRAND.md](BRAND.md): the arrow (→) is the brand device, `a→t` the monogram, converging streamlines the one motion. Changes from v3: hero mist becomes convergence (paths gather into a single resolving line); work-row proof links are written as arrows ("private preview → GA+"); favicon/OG/banner derive from the ink surface + static streamline frame; print stylesheet renders the page as a one-page resume.

Direction distilled from the actual references (viewed, not summarized):
- **logartis.info** — one full-screen atmospheric monochrome scene, name in light type, one button. A single immersive visual carries everything.
- **vanschneider.com** — black-and-white imagery, one mark, zero chrome.
- **ambrosino.io** — a warm-gray void, a name, and a sparse ledger of companies/roles/years. ~80% negative space.

**The rules they share: monochrome. One idea per screen. Massive negative space. Quiet type. Proof, not decoration.**

## 1. Palette — monochrome, warm

| Token | Value | Use |
|---|---|---|
| `--paper` | `#EBEAE5` | Page background (ambrosino warm gray) |
| `--ink` | `#161613` | Text, the only "color" |
| `--gray` | `#6E6E68` | Secondary text, dates, tags (AA on paper) |
| `--faint` | `#9C9C95` | Hairline-adjacent labels, ≥13px only |
| `--line` | `#D8D7D0` | Hairline rules |

No accent color. Hierarchy comes from size, weight, and space. Links are ink with a hairline underline; hover darkens the underline. **All imagery is rendered grayscale** (CSS `filter: grayscale(1)` with gentle contrast) so photos and video stills sit inside the monochrome world; color returns only when a video actually plays.

## 2. The one visual (hero)

A single, barely-there atmospheric animation behind the name — thin monochrome streamlines drifting across the paper like mist (logartis atmosphere, but abstract: her real-time data domain rendered as weather, not as a dashboard). Ink at 4–7% opacity, canvas-drawn, ≤ 120 paths, paused off-screen, static frame under `prefers-reduced-motion`. It should be felt more than noticed. Nothing else on the page moves except reveals.

## 3. Typography

One family: **Inter** (variable, self-hosted) with system fallback. Two weights only: 400 and 500.

| Role | Size | Weight |
|---|---|---|
| Name | clamp(3rem, 9vw, 6.5rem), −0.03em | 500 |
| Tagline | clamp(1.125rem, 2vw, 1.5rem) | 400, `--gray` |
| Section label | 0.8125rem, +0.08em, uppercase | 500, `--faint` |
| Entry title (company / work) | clamp(1.375rem, 2.5vw, 2rem), −0.02em | 500 |
| Body | 1rem / 1.65, max 58ch | 400 |
| Meta (dates, tags, stacks) | 0.8125rem, tabular numerals | 400, `--gray` |

Prose budget: the entire site under 300 words. No sentence a skimmer must read twice.

## 4. Space & layout

- One column. `max-width: 720px` for text, media may extend to 960px. Left-aligned (ambrosino), not centered.
- Section gap: `clamp(112px, 16vh, 200px)`. Within-section rhythm: 8px base scale.
- No cards, no borders around content, no chips except stage tags (plain small-caps text, no outline). Hairline rules only where a table needs them.
- Nav: none beyond a fixed, tiny top-right "Contact" link and the name top-left after scroll. The page is short enough to scroll.

## 5. Components (six, total)

1. **Hero** — mist canvas, name, one tagline line, two quiet links (email, LinkedIn).
2. **Work row** — for impact: title (what shipped), one line (what it means), proof link. Separated by hairlines, ledger-style.
3. **Career ledger** — company (entry title size) · role · years · stage in small caps (`SEED · 5TH ENG HIRE`). One line of detail + stack in meta gray. No logos, no nodes — the names carry weight on their own.
4. **Still row** — talks: two grayscale video stills (real GopherCon frames), click-to-play facade (iframe on demand, color on play). Small ledger of remaining venues/links beneath.
5. **Fact line** — single-line entries for TEDx, mentoring, Jagriti, publication, book club.
6. **Footer** — "Say hello." + email + LinkedIn, one warm sentence.

## 6. Motion

- Hero mist: the only ambient motion.
- Reveals: opacity 0→1, rise 10px, 500ms, once, no stagger theatrics.
- Hover: underline/opacity shifts, 150ms. Nothing lifts, tilts, or counts up.
- `prefers-reduced-motion`: static mist frame, instant reveals. JS-off: everything visible.

## 7. Voice

Unchanged and stricter: evidence over assertion, every claim resolves to a link/number/date/name. Banned: proven, passionate, innovative, visionary. The design's restraint is itself the credibility signal — a person with this record doesn't need to raise her voice.
