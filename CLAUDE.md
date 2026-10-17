# arun477.github.io

Personal site, live at https://arun477.github.io/. Hugo, no theme, minimal JavaScript (theme toggle, plus the home-page hive banner).

## Layout

- `content/posts/` — one Markdown file per post (writing, projects and tools all live here). Old `/utilities/` URLs redirect via `aliases`. Front matter is only `title`, `date`, optional `description`, `tags`.
- `content/_index.md` — home page intro.
- `content/news/` — daily tech news, published by an outside agent: one `YYYY-MM-DD.md` per day with an `items` list in front matter. Schema and rules for that agent: `docs/news-agent.md` (keep it in step with the templates). Templates: `layouts/news/` (`section.html`, `page.html`, `page.md`, `section.json`) and `layouts/_partials/news/`; `items.html` validates each item and fails the build on a bad one. News is the one exception to the front-matter rule above, stays out of the main feed (own feed at `/news/index.xml`) and gets its own block on the home page.
- `layouts/` — the whole theme: `baseof.html`, `home.html`, `section.html`, `page.html`, `taxonomy.html`, `term.html`, `404.html`, plus `news/` for the news section.
- Agent/crawler outputs, all generated: `layouts/robots.txt` (allow all + sitemap), `layouts/home.llms.txt` (`/llms.txt` index), `layouts/page.md` (every post also at `<url>/index.md`), `layouts/rss.xml` (full-content feed), `layouts/_partials/jsonld.html` (Person / BlogPosting JSON-LD). New posts appear in all of them automatically.
- `assets/style.css` — the only stylesheet.
- `assets/images/` — images, referenced as `/images/x.png`; processed at build time. `static/audio/` — audio files.

## Writing

- Publish a post: add `content/posts/<slug>.md` and push to `main`. That is the whole process.
- Section order (nav and home) follows `weight` in each section's `_index.md`: Posts 1, News 2.
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
- Home: hero banner = the hive as a background (soft-faded edges, no box), with the role kicker and name floating freely over its sky: no border, shadow or panel, only a feathered backdrop blur behind the letters (static above the scene on phones) (role from `content/_index.md` `role`); the hive (`assets/hive.js`, home page only): five agent bees take a request, brief, work together face to face, deliver, remember and dream in a 36s loop; pauses off-screen, shows a still frame under reduced motion, `?hive=<seconds>` freezes a moment for checking), then a two-column Latest (newest post with its description) / Elsewhere block, then one numbered index per section. Role and links live in `content/_index.md` front matter (`role`, `links`).
- Colour: tokens at the top of `style.css`; dark tokens appear twice (system preference and `[data-theme="dark"]`); change both.
- Accent is signal orange, used only as a signal (REC marker, waveform playhead, reading-progress bar, news spike marker). Never for links or text: links stay ink with an underline, so nothing reads as "link blue".
- Row hovers stay exactly within the column rules; content slides inward (transform) instead of anything bleeding outward.
- JS is limited to the theme toggle (inline in `baseof.html`) and `assets/hive.js` on the home page. The bee characters, palette and choreography live in that one file.
- Motion is CSS-only except the hive banner: view transitions between pages, staggered list entrance (`--i`), an ink rule drawn along the bottom of hovered list rows (no fill or colour inversion: it would flash in the view-transition snapshot on click; hover is mouse-only, touch gets the rule on tap), scroll-driven progress bar. All disabled under `prefers-reduced-motion`.

## Build and deploy

- Hugo version is pinned in `scripts/install-hugo.sh` (and `HUGO_VERSION` in `netlify.toml`; change both) (cloud sessions run it on start; on macOS use `brew install hugo`).
- Check: `hugo` must build with no ERROR or WARN lines. Preview: `hugo server`.
- Deploy: push to `main`. `.github/workflows/deploy.yml` builds and force-pushes `public/` to the `gh-pages` branch, which GitHub Pages serves. Pull requests build but do not deploy; Netlify builds a preview of each from `netlify.toml`.
- Never commit `public/` or edit the `gh-pages` branch by hand; everything served must come from this source.
