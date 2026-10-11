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

Modern minimal, modelled on long-lived personal blogs (leerob.com, paco.me, overreacted.io, stephango.com): one ~42rem column, generous whitespace, text first.

- Type: Newsreader (self-hosted in `static/fonts/`, latin subset) for headings, reading text and list titles; system sans for UI (nav, dates, labels, chips, footer); system mono for code. No other web fonts.
- Colour: all colours are tokens at the top of `style.css`. Dark tokens appear twice (system `prefers-color-scheme` and `[data-theme="dark"]` from the toggle); change both together.
- Theme toggle: the only JS. An inline head script applies the saved theme before paint; `toggleTheme()` in `baseof.html` flips it inside a view transition.
- Motion is CSS-only and subtle: cross-page view transitions (post titles morph from list to heading; the site name morphs between home hero and header), staggered list entrance using `--i`, hover details, and a scroll-driven reading-progress bar. Everything is disabled under `prefers-reduced-motion: reduce`.
- No icon sets, cover images, or decorative imagery.

## Build and deploy

- Hugo version is pinned in `scripts/install-hugo.sh` (cloud sessions run it on start; on macOS use `brew install hugo`).
- Check: `hugo` must build with no ERROR or WARN lines. Preview: `hugo server`.
- Deploy: push to `main`. `.github/workflows/deploy.yml` builds and force-pushes `public/` to the `gh-pages` branch, which GitHub Pages serves. Pull requests build but do not deploy.
- Never commit `public/` or edit the `gh-pages` branch by hand; everything served must come from this source.
