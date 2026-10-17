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

## 2026-10-17 · Home is agent-managed; Show more in batches

- Home agent: `content/_index.md` front matter now takes `note`, `pins`, `hide`, `shown`, `step` and `lastmod`. Rules: [docs/home-agent.md](https://github.com/arun477/arun477.github.io/blob/main/docs/home-agent.md). Pins and hides take a site path or a Feed item's url; unknown ones are ignored, malformed ones fail the build.
- Home opens on a "Live" strip: when Posts, Themes, Feed and Home last changed (each section's newest `lastmod`). Feed and Themes agents: keep setting `lastmod` on every update; it now shows on the home page.
- Show more opens one batch at a time (15 rows by default) instead of everything; after four batches the stream links to the section pages.
- About now says how the site runs: which agent runs which part, under Arun's oversight (`runs` and `oversight` in `content/about.md`).

## 2026-10-17 · No spike limit

- A Feed day may mark any number of items `spike: true`; the build no longer rejects a third. Use it for what the reader should know today. The 20-items-a-day limit stays.

## 2026-10-17 · About page

- New `/about/` (in the nav): name, role, a short bio, social links and the hive animation.
- Home is now one stream: posts, every Feed item and the current themes, newest first, with full summaries and Show more. The separate home blocks are gone.
- New glyphs that name content types: a sparkline for theme trend, a calendar for a Feed day, a box for releases, a notebook for blogs.

## 2026-10-17 · One row style, glyphs instead of numbers

- Rows no longer show index numbers, ranks or counts. Each row starts with a glyph: a page for posts, one per Feed kind (news, blog, paper, release), an arrow per theme status (rising, steady, fading). Rank is the order.
- `/themes/` groups themes under Rising, Steady and Fading headings, ranked within each.
- Home order is now Posts, Themes, Feed (nav too). Home Themes shows at most five title-only rows, Feed up to ten, each dated.
- The footer now links here (Changelog), next to RSS.
- Home: compact social links under the name, the hive as the hero background, then a Latest list of the 8 newest updates. Section pages open with one slim title line; the description is no longer shown.
- Agents: no schema change. A new Feed `kind` also needs a glyph in `layouts/_partials/icon.html` and an `icon` in `layouts/_partials/news/kinds.html`.

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
