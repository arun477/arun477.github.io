# arun477.github.io

Personal site, live at https://arun477.github.io/. Hugo, no theme, almost no JavaScript (only the theme toggle).

## Layout

- `content/<section>/` — one Markdown file per page (`posts`, `utilities`). Front matter is only `title`, `date`, optional `description`, `tags`.
- `content/_index.md` — home page intro.
- `layouts/` — the whole theme: `baseof.html`, `home.html`, `section.html`, `page.html`, `taxonomy.html`, `term.html`, `404.html`.
- `assets/style.css` — the only stylesheet.
- `static/images/`, `static/audio/` — media, referenced as `/images/x.png`.

## Writing

- Publish a post: add `content/posts/<slug>.md` and push to `main`. That is the whole process.
- New section (e.g. `notes`): create `content/notes/_index.md` with a `title`. Nav and home page pick it up automatically; no template changes.
- Unpublish without deleting: add `draft: true` to front matter.
- Display math: `$$ ... $$` on its own lines. It is rendered to MathML at build time; inline `$` math is not enabled.
- Raw HTML is allowed in Markdown (e.g. `<audio controls src="/audio/x.wav"></audio>`).
- Images: `![alt](/images/x.png)` or `{{< figure src="/images/x.png" caption="..." >}}`.

## Design rules

Swiss-style minimal: strict alignment, symmetry, sharp edges. One 44rem column (`main` and `.in`); header and footer are full-width bars whose contents align to that column.

- Edges: zero border-radius everywhere (enforced globally in `style.css`). Hairline rules, not boxes.
- Alignment: every element starts and ends on the column edges. Hover fills may bleed past them (negative margin), text never does.
- Type: Newsreader (self-hosted in `static/fonts/`) for headings, reading text and list titles; system sans in uppercase tracking for UI (header, footer, labels, chips); system mono for data (indices, dates, counts) and code.
- Home: hero (role kicker from `content/_index.md` `role`, large name, a build-time generated waveform of 96 bars in `home.html`, tagline + links), then one numbered index per section.
- Colour: tokens at the top of `style.css`; dark tokens appear twice (system preference and `[data-theme="dark"]`); change both.
- Theme toggle is the only JS (inline in `baseof.html`).
- Motion is CSS-only: view transitions between pages, staggered list entrance (`--i`), the pulsing waveform (faster on hover), inverted sweep on list rows, scroll-driven progress bar. All disabled under `prefers-reduced-motion`.

## Build and deploy

- Hugo version is pinned in `scripts/install-hugo.sh` (cloud sessions run it on start; on macOS use `brew install hugo`).
- Check: `hugo` must build with no ERROR or WARN lines. Preview: `hugo server`.
- Deploy: push to `main`. `.github/workflows/deploy.yml` builds and force-pushes `public/` to the `gh-pages` branch, which GitHub Pages serves. Pull requests build but do not deploy.
- Never commit `public/` or edit the `gh-pages` branch by hand; everything served must come from this source.
