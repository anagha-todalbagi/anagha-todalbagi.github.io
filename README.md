# anagha-todalbagi.github.io

Anagha Todalbagi's personal site, hosted on GitHub Pages at [anagha-todalbagi.github.io](https://anagha-todalbagi.github.io/).

Plain HTML/CSS/JS, no build step, no dependencies, no framework. Edit the files, commit, push — Pages redeploys automatically.

## How this is hosted

GitHub Pages serves this repo's default branch (`master`) directly from the root — whatever is in `master` is what's live. There is no build step: `.nojekyll` disables Jekyll processing since the site doesn't need it. To publish a change, merge it into `master` and push.

There's no `CNAME` file, so the site serves from the default `*.github.io` URL. To point a custom domain at it later: add a `CNAME` file containing the domain, point the domain's DNS at GitHub Pages, and update the absolute URLs in `index.html` (see the note at the bottom of this file).

## Structure

```
index.html       the site (single page)
styles.css       all styling
main.js          hero canvas animation + click-to-play video embeds
assets/          fonts, favicon, brand cards, company logos (see below)
docs/            design docs — read these before changing content or style
serve.py         local dev server: python3 serve.py -> http://127.0.0.1:4173
.nojekyll        tells GitHub Pages to skip Jekyll processing
```

### `assets/`

- `favicon.svg` — the `a→t` mark.
- `fonts/Inter-latin.woff2` — self-hosted Inter, latin subset, weights 400–500.
- `brand/og-card.png` (1200×630) — link-share card, referenced by the Open Graph tags in `index.html`.
- `brand/linkedin-banner.png` (1584×396) — upload directly to LinkedIn.
- `brand/*.html` — editable sources for the two cards above; see "Regenerating the brand cards" below.
- `brand/touch-icon.png` — apple-touch-icon.
- `logos/` — grayscale company logos (from Google's favicon service, 128px) used in the career ledger.

### `docs/`

Read these before making non-trivial changes — they're the reasoning behind the site, not just a style guide:

- **[BRAND.md](docs/BRAND.md)** — positioning, the "arrow" brand device, voice rules, banned words. Start here if you're touching copy.
- **[DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md)** — palette, type scale, spacing, components, motion rules. Start here if you're touching CSS.
- **[IA.md](docs/IA.md)** — section-by-section content plan and what each section is for.

## Making changes

1. `python3 serve.py` and open `http://127.0.0.1:4173` to preview locally.
2. Edit `index.html` / `styles.css` / `main.js` directly — it's one page, no components to wire up.
3. Append `?flat` to the local URL for a static QA view (animation off, hero unpinned) — useful for full-page screenshots.
4. Check both extremes before shipping a content change: the page should read fine as plain text (images/motion stripped) and the story should still land with all text blurred (see BRAND.md §5).
5. Commit and push to `master` to go live.

### Regenerating the brand cards

Edit the HTML source in `assets/brand/`, then render with headless Chrome:

```sh
cd assets/brand
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1200,630 --screenshot=og-card.png "file://$PWD/og-card.html"
sips -z 630 1200 og-card.png
```

Same for the banner, with `--window-size=1584,396` and `sips -z 396 1584`.

## Notes

- Print (`⌘P`) renders the page as a short resume with link URLs expanded — recruiters can save it as a PDF.
- The loop panels and work-row glyphs are inline SVG line art in the hero's visual language; edit them directly in `index.html`.
- Exact employment months live in `<time>` `title` attributes and the JSON-LD, so the visible career ledger stays clean while remaining verifiable.
- Video embeds load only on click (youtube-nocookie), so the page makes no YouTube requests until a visitor plays a talk.
- The hero animation pauses off-screen and renders a static frame under `prefers-reduced-motion`. With JS disabled, all content is visible; only the animation is absent.
- If you add a custom domain, add a `CNAME` file and update every absolute URL in `index.html` (canonical link, `og:url`, `og:image`, `twitter:image`, JSON-LD `url`/`image`) to match — OG images must be absolute URLs.
