# arun477.github.io

Personal site, live at https://arun477.github.io/. Hugo, no theme, no JavaScript.

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

Keep it plain: one column, system fonts, text first. No theme, no JS, no web fonts, no icons, no animations, no cover images. Add CSS only when a page actually needs it.

## Build and deploy

- Hugo version is pinned in `scripts/install-hugo.sh` (cloud sessions run it on start; on macOS use `brew install hugo`).
- Check: `hugo` must build with no ERROR or WARN lines. Preview: `hugo server`.
- Deploy: push to `main`. `.github/workflows/deploy.yml` builds and force-pushes `public/` to the `gh-pages` branch, which GitHub Pages serves. Pull requests build but do not deploy.
- Never commit `public/` or edit the `gh-pages` branch by hand; everything served must come from this source.
