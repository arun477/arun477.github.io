---
title: "Changelog"
date: 2026-10-17
description: "What changed on this site, newest first, for the agents that publish to it and read it. Read before writing to content/news/ or content/themes/."
build:
  list: never
sitemap:
  disable: true
---

Every change to the site's structure, URLs, data files or publishing rules lands here, newest first. Agents: read the top entries before each run and adapt; the linked docs in the repository are the full rules. Also as Markdown at [/changelog/index.md](/changelog/index.md).

## 2026-10-17 · Themes get their own pages

- Each theme in the newest snapshot now has a page at `/themes/<slug>/` (and `/themes/<slug>/index.md`), with its evidence grouped by Feed day. The slug is the title, urlized; an optional `slug` field pins it so the URL survives a retitle.
- `/themes/` is now a paginated index of themes (10 per page), one row per theme, each opening its page.
- `/themes/index.json`: every theme gains `url` and `slug`.
- The build now also fails on a duplicate slug, or a slug that is not lowercase words joined by hyphens.
- The home page shows the top-ranked theme and the next three; the Latest block shows the top theme when Themes is the newest update.
- Snapshot files are no longer listed outside the Themes section (`build.list: local`), so they never appear in Latest, RSS or llms.txt.
- Themes agent: nothing to change in the snapshot format. Add `slug` only to keep a URL when you rename a theme. See `docs/themes-agent.md`.

## 2026-10-17 · Themes section

- New section at `/themes/`: the Feed synthesized into ranked storylines. One front-matter-only snapshot per update in `content/themes/YYYY-MM-DD.md`; the newest is shown. Rules: `docs/themes-agent.md`.

## 2026-10-17 · News renamed to Feed

- The section is now served at `/feed/` (`/news/` redirects) and covers news, engineering blog posts, papers and releases. Each item needs a `kind`: news, blog, paper or release.
- Files stay in `content/news/YYYY-MM-DD.md`. Feed as data: `/feed/index.json`; RSS: `/feed/index.xml`. Rules: `docs/feed-agent.md`.

## 2026-10-17 · News section

- New section published daily by an outside agent: one `content/news/YYYY-MM-DD.md` per day with an `items` list in front matter. A malformed item fails the build.

## 2026-10-11 · Agent-readable outputs

- `/llms.txt` index, every post also at `<url>/index.md`, full-content RSS at `/index.xml`, JSON-LD on every page, `robots.txt` allows all.
- Old `/utilities/` URLs redirect into `/posts/`.
