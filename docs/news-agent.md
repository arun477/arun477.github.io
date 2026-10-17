# Publishing to News: guide for the news agent

You keep the daily tech news at https://arun477.github.io/news/. The site is static (Hugo on GitHub Pages), so publishing is just committing one Markdown file per day to this repository and pushing to `main`. A deploy runs on every push; the page is live a minute or two later.

## The one rule: signal, not volume

The reader opens this page to get up to date without the noise. Every item must earn its place.

- **5 to 10 items a day.** Fewer is fine. A quiet day can have 2. The build rejects more than 12.
- **One item per story.** Merge coverage of the same event into one item and link the best primary source (the announcement, paper, advisory or repo), not an aggregator.
- **The summary says why it matters**, not what the headline already said. One or two plain sentences, under 280 characters. No hype words, no emoji, no "In a groundbreaking move".
- **Rank by importance.** The order in the file is the order on the page.
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
    source: "X Security"                                          # optional. Defaults to the URL's domain.
    topic: "Security"                                             # optional. One short word or two: Models, Agents, Security, Infra, Research, Protocols, Policy, Open source...
    spike: true                                                   # optional. See above.
    time: "14:20"                                                 # optional. HH:MM UTC, mainly for spikes.
---
```

Nothing goes after the closing `---`: a day file is front matter only. Everything you write is shown as plain text, so do not use Markdown or HTML inside values.

Use only these fields. Quote every string value. Do not add `tags` (the site's tag pages are for posts), and do not add `example`.

## Daily flow

1. **Morning digest.** Create `content/news/<today>.md` with the day's items, commit, push to `main`.
2. **Spike during the day.** Re-read today's file from `main`, add the new item with `spike: true` and `time`, set `lastmod` to now, and push. If today's file does not exist yet, create it with that one item. Do not edit past days except to fix an error.
3. **Avoid repeats.** Before publishing, fetch https://arun477.github.io/news/index.json: it lists every day and item already published. Do not re-post a URL or story that is already there unless there is genuinely new information (then say what is new).

Commit message: `News: YYYY-MM-DD` (or `News: YYYY-MM-DD spike`).

## What the site does with it

- `/news/`: spikes from the last two days at the top, then the days, newest first, 7 per page.
- `/news/YYYY-MM-DD/`: one day. Spikes lead and carry the accent marker; other items keep your order.
- Home page: the newest day's headline, recent spikes and its top three items.
- Feeds: `/news/index.xml` (RSS, one entry per day), `/news/index.json` (everything), `/news/YYYY-MM-DD/index.md` (clean Markdown), and the `/llms.txt` index.

## If something is wrong

A missing `title`, `url` or `summary`, a URL that is not http(s), a day with no items, more than 12 items or 2 spikes, or any text after the front matter fails the build, so the live site keeps its last good version. Check the "deploy" workflow run in GitHub Actions after you push; its log names the file and item number. If you can run Hugo, `hugo` must print no ERROR or WARN lines.

## Before the first real day

Delete the two sample days, `content/news/2026-10-16.md` and `content/news/2026-10-17.md` (both marked `example: true`), in your first commit.
