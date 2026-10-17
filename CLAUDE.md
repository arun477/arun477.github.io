# arun477.github.io

Personal site, live at https://arun477.github.io/. Hugo, no theme, minimal JavaScript (theme toggle, plus the home-page hive banner).

## Layout

- `content/posts/` — one Markdown file per post (writing, projects and tools all live here). Old `/utilities/` URLs redirect via `aliases`. Front matter is only `title`, `date`, optional `description`, `tags`.
- `content/_index.md` — home page intro.
- `content/news/` — the Feed (served at `/feed/`; `/news/` redirects): tech news and engineering blog posts, published daily by an outside agent. One `YYYY-MM-DD.md` per day with an `items` list in front matter; each item has a `kind` (news, blog, paper, release; list in `layouts/_partials/news/kinds.html`). The folder keeps the name `news` because the agent writes there. Schema and rules for that agent: `docs/feed-agent.md` (keep it in step with the templates). Templates: `layouts/news/` (`section.html`, `page.html`, `page.md`, `section.json`) and `layouts/_partials/news/`; `items.html` validates each item and fails the build on a bad one. The kind filter on `/feed/` is CSS-only (radio buttons + `:has`); its rules sit in `style.css`. The Feed is the one exception to the front-matter rule above, stays out of the main RSS feed (own feed at `/feed/index.xml`) and gets its own block on the home page.
- `content/themes/` — Themes (`/themes/`): the Feed synthesized into ranked storylines by an outside agent. One front-matter-only snapshot `YYYY-MM-DD.md` per update; only the newest counts. `_content.gotmpl` turns each of its themes into a page at `/themes/<slug>/`; `/themes/` paginates them. Snapshots are `build.list: local`, so they never reach Latest, RSS or llms.txt. Rules for that agent: `docs/themes-agent.md`. Templates: `layouts/themes/`, `layouts/_partials/themes/` (`themes.html` validates and fails the build on a bad snapshot).
- `content/changelog.md` — `/changelog/`: what changed, newest first, for agents that publish to or read the site. Unlisted (no nav, home, RSS or sitemap); linked only from the footer copyright (a quiet link with no hover cue) and `/llms.txt`. Add an entry whenever URLs, schemas, data files or publishing rules change.
- `layouts/` — the whole theme: `baseof.html`, `home.html`, `section.html`, `page.html`, `taxonomy.html`, `term.html`, `404.html`, plus `news/` for the Feed.
- Agent/crawler outputs, all generated: `layouts/robots.txt` (allow all + sitemap), `layouts/home.llms.txt` (`/llms.txt` index), `layouts/page.md` (every post also at `<url>/index.md`), `layouts/rss.xml` (full-content feed), `layouts/_partials/jsonld.html` (Person / BlogPosting JSON-LD). New posts appear in all of them automatically.
- `assets/style.css` — the only stylesheet.
- `assets/images/` — images, referenced as `/images/x.png`; processed at build time. `static/audio/` — audio files.

## Writing

- Publish a post: add `content/posts/<slug>.md` and push to `main`. That is the whole process.
- Section order (nav and home) follows `weight` in each section's `_index.md`: Posts 1, Themes 2, Feed 3 (synthesis before the raw stream).
- New section (e.g. `notes`): create `content/notes/_index.md` with a `title`. Nav and home page pick it up automatically; no template changes.
- Unpublish without deleting: add `draft: true` to front matter.
- Display math: `$$ ... $$` on its own lines. It is rendered to MathML at build time; inline `$` math is not enabled.
- Raw HTML is allowed in Markdown (e.g. `<audio controls src="/audio/x.wav"></audio>`).
- Images: drop the file in `assets/images/` and write `![alt](/images/x.png "optional caption")` on its own line. `layouts/_markup/render-image.html` handles the rest: full-column width, resize above 1600px, width/height attributes, and a matte sampled from the image's left edge so tall images never show grey bars. A missing image fails the build. Don't use the `figure` shortcode or raw `<img>`.

## Design rules

Swiss-style minimal: strict alignment, symmetry, sharp edges. One 44rem column (`main` and `.in`); header and footer are full-width bars whose contents align to that column.

- Edges: zero border-radius everywhere (enforced globally in `style.css`). Hairline rules, not boxes.
- Alignment: every element, rule and fill starts and ends on the column edges.
- Type: Newsreader (self-hosted in `static/fonts/`) for headings, reading text and list titles; system sans in uppercase tracking for UI (header, footer, labels, chips); system mono for data (dates) and code.
- Home: a short hero (15rem): the hive (`assets/hive.js`, home page only) fills it as a background anchored bottom-right; the role kicker, name and a compact row of social links (`content/_index.md` `role`, `links`) float over its sky at the left with only a feathered backdrop blur (on phones the scene sits faded under them). The hive: five agent bees take a request, brief, work together face to face, deliver, remember and dream in a 36s loop; pauses off-screen, shows a still frame under reduced motion, `?hive=<seconds>` freezes a moment for checking. Then Latest (`_partials/latest.html`: the 8 newest updates across sections, a post or feed day at its date, Themes once as the top theme), then one block per section: a label with its date, at most five title-only rows, and a "more" row (Feed and Themes rows use the `compact` list option).
- Section pages (Posts, Themes, Feed, Tags) open with one slim `.sechead` line: title, date, chips. No intro paragraph: the description lives in the meta tags only.
- Header: on phones the nav folds behind a two-rule menu button (CSS-only checkbox) and opens as a full-width panel; the theme toggle stays visible.
- Colour: tokens at the top of `style.css`; dark tokens appear twice (system preference and `[data-theme="dark"]`); change both.
- Rows: one grammar everywhere: glyph, meta line, title, then (on section and detail pages only) the summary. The glyph comes from `layouts/_partials/icon.html` (post, feed kind via `news/kinds.html`, theme status). No index numbers, ranks or counts on rows or labels: the lists change daily, so a number means nothing; order carries rank. Themes index groups rows under Rising / Steady / Fading.
- Accent is signal orange, used only as a signal (REC marker, waveform playhead, reading-progress bar, feed spike marker and glyph square, rising-theme marker and glyph). Never for links or text: links stay ink with an underline, so nothing reads as "link blue".
- Row hovers stay exactly within the column rules; content slides inward (transform) instead of anything bleeding outward.
- JS is limited to the theme toggle (inline in `baseof.html`) and `assets/hive.js` on the home page. The bee characters, palette and choreography live in that one file.
- Motion is CSS-only except the hive banner: view transitions between pages, staggered list entrance (`--i`), an ink rule drawn along the bottom of hovered list rows (no fill or colour inversion: it would flash in the view-transition snapshot on click; hover is mouse-only, touch gets the rule on tap), scroll-driven progress bar. All disabled under `prefers-reduced-motion`.

## Build and deploy

- Hugo version is pinned in `scripts/install-hugo.sh` (and `HUGO_VERSION` in `netlify.toml`; change both) (cloud sessions run it on start; on macOS use `brew install hugo`).
- Check: `hugo` must build with no ERROR or WARN lines. Preview: `hugo server`.
- Deploy: push to `main`. `.github/workflows/deploy.yml` builds and force-pushes `public/` to the `gh-pages` branch, which GitHub Pages serves. Pull requests build but do not deploy; Netlify builds a preview of each from `netlify.toml`.
- Never commit `public/` or edit the `gh-pages` branch by hand; everything served must come from this source.
