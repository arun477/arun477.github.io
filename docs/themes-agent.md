# Publishing Themes: guide for the themes agent

https://arun477.github.io/themes/ synthesizes the running Feed into the few overarching storylines that keep coming back. The Feed answers "what happened"; Themes answers "what is going on, and why it matters". Read docs/feed-agent.md first: every theme is built only from Feed items.

Before each update, read the newest entries of https://arun477.github.io/changelog/index.md: every change to URLs, schema or rules lands there first.

## Files

- `content/themes/YYYY-MM-DD.md`: one front-matter-only snapshot per update (UTC date). The site shows the **newest** snapshot; older ones stay as history and are never rendered as pages.
- Each theme in the newest snapshot gets its own page at `/themes/<slug>/` (also `index.md`), with its evidence grouped by Feed day; `/themes/` is a paginated index of them, 10 per page. `content/themes/_content.gotmpl` makes those pages. Snapshots (not a data file) match the Feed's one-file-per-day pattern, keep history in git, and get the same build-time validation.
- Template: `archetypes/themes.md`. Layouts: `layouts/themes/`, `layouts/_partials/themes/`.

```yaml
---
title: "Themes"
date: 2026-10-18
lastmod: 2026-10-18T05:00:00Z
themes:                                   # ranked: the order here is the order on the page. Max 12.
  - title: "Open-weight models reach the frontier"   # required, under 70 characters, sentence case
    summary: "Two to four plain sentences: what is happening across the items, and why it matters."  # required
    status: "rising"                      # required: rising | steady | fading
    first_seen: 2026-10-06                # required: date of the oldest evidence item
    last_updated: 2026-10-17              # required: date of the newest evidence item
    slug: "open-weight-models"            # optional: pins /themes/<slug>/; default is the title, urlized. Set it to keep the URL when you retitle a theme.
    items:                                # required: Feed item URLs, exactly as in /feed/index.json
      - "https://x.com/AIatMeta/status/2110779754274292212"
---
```

Titles, sources, kinds and dates of evidence are pulled from the Feed at build time, so store only URLs. The kind mix is computed.

The build fails on: no themes, more than 12, a missing field, a title over 70 characters, a duplicate title, a duplicate or malformed slug (lowercase words joined by hyphens), a status other than rising/steady/fading, an item URL not in the Feed, or body text.

## Quality rules

- **A theme is a storyline, not a story.** It needs at least 3 Feed items across at least 2 days. One big launch is a Feed item (maybe a spike), not a theme.
- **Zero duplicates.** Before creating a theme, try to merge into an existing one. Two themes overlap if they share a slug, most keywords/entities, or evidence. Overlap means merge, keeping the older `first_seen`.
- **Each Feed item is main evidence for at most one theme.**
- **The summary synthesizes.** Say what the items have in common and why it matters. Don't list headlines. No hype, no emoji, nothing the items don't support.
- **Status:** `rising` while new evidence keeps arriving and momentum is building; `steady` at a normal pace; `fading` after 7 days with no new evidence. Retire (drop) a theme after 21 days without evidence, or when it's lowest-ranked over the limit of 12.
- **Rank** rising first, then by breadth of evidence. Aim for 5 to 10 sharp themes.

## How to update

Use `themes.py` in the agent store (`newsfeed/`), which keeps `themes-ledger.json` (id, slug, title, aliases, keywords, evidence, status history, first_seen, last_updated):

1. Write proposals, JSON `[{title, summary, keywords, items, theme?}]`, from the Feed items added since the last update.
2. `python3 themes.py check proposals.json` reports merge or new for each proposal, plus any overlapping themes.
3. `python3 themes.py update proposals.json` merges evidence, creates only distinct, well-backed themes, ages themes, enforces the limit of 12, and writes `content/themes/DATE.md`.
4. `python3 themes.py validate`, then run `hugo` locally if layouts changed. If you change the snapshot format, add an entry to `content/changelog.md`.
5. `python3 themes.py publish` commits `Themes: YYYY-MM-DD` and pushes.

Never edit `content/news/`; that belongs to the feed agent.
