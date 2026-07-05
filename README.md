# anagha-todalbagi.github.io

Anagha Todalbagi's personal site, hosted on GitHub Pages at [anagha-todalbagi.github.io](https://anagha-todalbagi.github.io/). Visual identity: the **Axiom System** — see [docs/brand-guide.html](docs/brand-guide.html) and [docs/BRAND.md](docs/BRAND.md).

Plain HTML/CSS/JS, no build step, no dependencies, no framework. Edit the files, commit, push — Pages redeploys automatically.

## How this is hosted

GitHub Pages serves this repo's default branch (`master`) directly from the root — whatever is in `master` is what's live. There is no build step: `.nojekyll` disables Jekyll processing since the site doesn't need it. To publish a change, merge it into `master` and push.

There's no `CNAME` file, so the site serves from the default `*.github.io` URL. To point a custom domain at it later: add a `CNAME` file containing the domain, point the domain's DNS at GitHub Pages, and update the absolute URLs in `index.html` (see the note at the bottom of this file).

## Structure

```
index.html       the site (single page)
styles.css       all styling (Axiom System tokens at the top)
main.js          scroll reveals + click-to-play video embeds
assets/          fonts, favicon, brand cards (see below)
docs/            brand guide + design docs — read before changing content or style
serve.py         local dev server: python3 serve.py -> http://127.0.0.1:4173
.nojekyll        tells GitHub Pages to skip Jekyll processing
```

### `assets/`

- `favicon.svg` — the A-over-T monogram on paper.
- `fonts/` — self-hosted latin subsets (woff2, ~96 KB total): Instrument Serif (roman + italic), Manrope (variable), JetBrains Mono (variable).
- `brand/og-card.png` (1200×630) — link-share card, referenced by the Open Graph tags in `index.html`.
- `brand/linkedin-banner.png` (1584×396) — upload directly to LinkedIn (name omitted on purpose; LinkedIn overlays the profile block on the left).
- `brand/touch-icon.png` (180×180) — apple-touch-icon.
- `brand/*.html` — editable sources for the three images above; see "Regenerating the brand cards" below.

### `docs/`

Read these before making non-trivial changes — they're the reasoning behind the site, not just a style guide:

- **[brand-guide.html](docs/brand-guide.html)** — the full Brand Guidelines (v1.0, 2026). Source of truth; open it in a browser.
- **[BRAND.md](docs/BRAND.md)** — working summary: positioning, the monogram, voice rules. Start here if you're touching copy.
- **[DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md)** — how the guide's tokens map onto `styles.css`. Start here if you're touching CSS.
- **[IA.md](docs/IA.md)** — section-by-section content plan and what each section is for.

## Making changes

1. `python3 serve.py` and open `http://127.0.0.1:4173` to preview locally.
2. Edit `index.html` / `styles.css` / `main.js` directly — it's one page, no components to wire up.
3. Append `?flat` to the local URL for a static QA view (no animations) — useful for full-page screenshots.
4. Check both extremes before shipping a content change: the page should read fine as plain text (images/motion stripped) and the story should still land with all text blurred (see docs/IA.md, cross-cutting).
5. Keep mulberry ≤ 10% of any view — it's the rule, the numbers, and hover states, never body copy.
6. Commit and push to `master` to go live.

### Regenerating the brand cards

Edit the HTML source in `assets/brand/`, then render with headless Chrome (the `--allow-file-access-from-files` flag lets the cards load the repo fonts from `file://`):

```sh
cd assets/brand
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
  --force-device-scale-factor=2 --window-size=1200,630 \
  --screenshot=og-card.png "file://$PWD/og-card.html"
sips -z 630 1200 og-card.png
```

Same for the banner (`--window-size=1584,396`, `sips -z 396 1584`) and the touch icon (`--window-size=180,500`, then crop/resize the top 180×180 — headless Chrome enforces a minimum window height).

## Notes

- Print (`⌘P`) renders the page as a short resume with link URLs expanded — recruiters can save it as a PDF.
- The A/T monogram is plain HTML/CSS (two serif letters and a 2px mulberry rule) — no image to regenerate; the favicon approximates it with system serif since SVG favicons can't load webfonts.
- Exact employment months live in `<time>` `title` attributes and the JSON-LD, so the visible career ledger stays clean while remaining verifiable.
- Video embeds load only on click (youtube-nocookie), so the page makes no YouTube requests until a visitor plays a talk.
- Motion is one load sequence (hero rises + the rule drawing in) plus single-fire scroll reveals; all of it is disabled under `prefers-reduced-motion` and `?flat`. With JS disabled, all content is visible.
- If you add a custom domain, add a `CNAME` file and update every absolute URL in `index.html` (canonical link, `og:url`, `og:image`, `twitter:image`, JSON-LD `url`/`image`) to match — OG images must be absolute URLs.
