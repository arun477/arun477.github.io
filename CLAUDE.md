# arun477.github.io

Personal site, live at https://arun477.github.io/. Hugo, no theme, minimal JavaScript (theme toggle, plus the home-page hive banner).

## Layout

- `content/posts/` — one Markdown file per post (writing, projects and tools all live here). Old `/utilities/` URLs redirect via `aliases`. Front matter is only `title`, `date`, optional `description`, `tags`.
- `content/_index.md` — home page intro.
- `layouts/` — the whole theme: `baseof.html`, `home.html`, `section.html`, `page.html`, `taxonomy.html`, `term.html`, `404.html`.
- `assets/style.css` — the only stylesheet.
- `assets/images/` — images, referenced as `/images/x.png`; processed at build time. `static/audio/` — audio files.

## Writing

- Publish a post: add `content/posts/<slug>.md` and push to `main`. That is the whole process.
- New section (e.g. `notes`): create `content/notes/_index.md` with a `title`. Nav and home page pick it up automatically; no template changes.
- Unpublish without deleting: add `draft: true` to front matter.
- Display math: `$$ ... $$` on its own lines. It is rendered to MathML at build time; inline `$` math is not enabled.
- Raw HTML is allowed in Markdown (e.g. `<audio controls src="/audio/x.wav"></audio>`).
- Images: drop the file in `assets/images/` and write `![alt](/images/x.png "optional caption")` on its own line. `layouts/_markup/render-image.html` handles the rest: full-column width, resize above 1600px, width/height attributes, and a matte sampled from the image's left edge so tall images never show grey bars. A missing image fails the build. Don't use the `figure` shortcode or raw `<img>`.

## Design rules

Swiss-style minimal: strict alignment, symmetry, sharp edges. One 44rem column (`main` and `.in`); header and footer are full-width bars whose contents align to that column.

- Edges: zero border-radius everywhere (enforced globally in `style.css`). Hairline rules, not boxes.
- Alignment: every element, rule and fill starts and ends on the column edges.
- Type: Newsreader (self-hosted in `static/fonts/`) for headings, reading text and list titles; system sans in uppercase tracking for UI (header, footer, labels, chips); system mono for data (indices, dates, counts) and code.
- Home: hero (role kicker from `content/_index.md` `role`, large name, the hive banner (`assets/hive.js`, home page only): five agent bees take a request, brief, work together face to face, deliver, remember and dream in a 36s loop; pauses off-screen, shows a still frame under reduced motion, `?hive=<seconds>` freezes a moment for checking), then a two-column Latest (newest post with its description) / Elsewhere block, then one numbered index per section. Role and links live in `content/_index.md` front matter (`role`, `links`).
- Colour: tokens at the top of `style.css`; dark tokens appear twice (system preference and `[data-theme="dark"]`); change both.
- Accent is signal orange, used only as a signal (REC marker, waveform playhead, reading-progress bar). Never for links or text: links stay ink with an underline, so nothing reads as "link blue".
- Hover fills stay exactly within the column rules; content slides inward (transform) instead of the fill bleeding outward.
- JS is limited to the theme toggle (inline in `baseof.html`) and `assets/hive.js` on the home page. The bee characters, palette and choreography live in that one file.
- Motion is CSS-only: view transitions between pages, staggered list entrance (`--i`), the hive banner, inverted sweep on list rows, scroll-driven progress bar. All disabled under `prefers-reduced-motion`.

## Build and deploy

- Hugo version is pinned in `scripts/install-hugo.sh` (cloud sessions run it on start; on macOS use `brew install hugo`).
- Check: `hugo` must build with no ERROR or WARN lines. Preview: `hugo server`.
- Deploy: push to `main`. `.github/workflows/deploy.yml` builds and force-pushes `public/` to the `gh-pages` branch, which GitHub Pages serves. Pull requests build but do not deploy.
- Never commit `public/` or edit the `gh-pages` branch by hand; everything served must come from this source.
