# Publishing to the Feed: guide for the feed agent

You keep the feed at https://arun477.github.io/feed/: one stream of tech news and engineering writing (company engineering blogs, papers, releases), newest first. The site is static (Hugo on GitHub Pages), so publishing is just committing one Markdown file per day to this repository and pushing to `main`. A deploy runs on every push; the page is live a minute or two later.

Before each run, read the newest entries of https://arun477.github.io/changelog/index.md: every change to URLs, schema or rules lands there first.

Files still live in `content/news/` (the folder name did not change when the section was renamed to Feed).

## The one rule: signal, not volume

The reader opens this page to get up to date without the noise. Every item must earn its place.

- **Up to about 10 news items and 5 blog posts a day.** Fewer is fine. A quiet day can have 2. The build rejects more than 20 items in a day.
- **Engineering blog posts** (`kind: "blog"`) are for writing worth reading in full: how a team built, scaled, debugged or measured something real. Skip product marketing, hiring posts and announcements already covered as news.
- **One item per story.** Merge coverage of the same event into one item and link the best primary source (the announcement, paper, advisory or repo), not an aggregator.
- **The summary says why it matters**, not what the headline already said. One or two plain sentences, under 280 characters. No hype words, no emoji, no "In a groundbreaking move".
- **Rank by importance.** The order in the file is the order on the page (spikes are always moved first).
- **Spike** (`spike: true`) is for the rare thing the reader should know *today*: a major release, a security issue to act on, an outage, a big policy change. At most one or two a day (the build rejects a third); most days have none.
- Skip rumours, funding rounds without product news, listicles, and anything you cannot link to a source.

## File

One file per day: `content/news/YYYY-MM-DD.md` (UTC date). Template: `archetypes/news.md`, or `hugo new news/2026-10-18.md`.

```yaml
---
title: "MCP gets streaming results; a sandbox escape to patch"   # required. The day's headline, under 70 characters.
date: 2026-10-18                                                  # required. Same date as the filename.
lastmod: 2026-10-18T14:20:00Z                                     # optional. Set it whenever you update the day; shows as "Updated 14:20 UTC".
description: "Two or three sentences: what the day meant overall."  # recommended. The day's brief, shown under the headline and in feeds.
items:                                                            # required, at least one.
  - title: "Agent framework X patches a sandbox escape in tool calls"  # required. Plain, factual, sentence case.
    url: "https://example.com/advisory"                           # required. http(s), primary source.
    summary: "Tool calls could read host files. Upgrade to 2.4.1 before running untrusted tools."  # required. Why it matters.
    kind: "news"                                                  # optional. news (default), blog, paper or release. Anything else fails the build.
    source: "X Security"                                          # optional. Defaults to the URL's domain.
    topic: "Security"                                             # optional. One short word or two: Models, Agents, Security, Infra, Research, Protocols, Policy, Open source...
    spike: true                                                   # optional. See above.
    time: "14:20"                                                 # optional. HH:MM UTC, mainly for spikes.
  - title: "How we cut p99 latency by moving to cells"
    url: "https://example.com/engineering/cells"
    summary: "A clear write-up of splitting one service into independent cells, with the failure cases that justified it."
    source: "Example Engineering"                                 # for blogs, the blog's name
    kind: "blog"
    topic: "Infra"
---
```

News, blog posts, papers and releases for a day all go in the same file, as items in one list. Readers can filter the feed by kind.

Nothing goes after the closing `---`: a day file is front matter only. Everything you write is shown as plain text, so do not use Markdown or HTML inside values.

Use only these fields. Quote every string value. Do not add `tags` (the site's tag pages are for posts), and do not add `example`.

## Daily flow

1. **Morning digest.** Create `content/news/<today>.md` with the day's news and blog posts, commit, push to `main`.
2. **Spike during the day.** Re-read today's file from `main`, add the new item with `spike: true` and `time`, set `lastmod` to now, and push. If today's file does not exist yet, create it with that one item. Do not edit past days except to fix an error.
3. **Avoid repeats.** Before publishing, fetch https://arun477.github.io/feed/index.json: it lists every day and item already published. Do not re-post a URL or story that is already there unless there is genuinely new information (then say what is new).

Commit message: `Feed: YYYY-MM-DD` (or `Feed: YYYY-MM-DD spike`).

## What the site does with it

- `/feed/`: a filter (All, News, Blogs, ... for kinds present), spikes from the last two days at the top, then the days, newest first, 7 per page. Each day shows its headline and brief, then its posts.
- `/feed/YYYY-MM-DD/`: one day. Spikes lead and carry the accent marker; other items keep your order.
- Home page: the newest day in the Latest block, plus its headline, recent spikes and top three items further down.
- Feeds: `/feed/index.xml` (RSS, one entry per day), `/feed/index.json` (everything, with each item's `kind`), `/feed/YYYY-MM-DD/index.md` (clean Markdown), and the `/llms.txt` index. Old `/news/` links redirect to `/feed/`.

## If something is wrong

A missing `title`, `url` or `summary`, a URL that is not http(s), an unknown `kind`, a day with no items, more than 20 items or 2 spikes, or any text after the front matter fails the build, so the live site keeps its last good version. Check the "deploy" workflow run in GitHub Actions after you push; its log names the file and item number. If you can run Hugo, `hugo` must print no ERROR or WARN lines.
