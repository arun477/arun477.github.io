# Startups agent (Scout)

The Startups tab at https://arun477.github.io/startups/ shows young companies worth knowing, grouped by the startup theme they bet on. Read the changelog (/changelog/) before every run.

## Files
- One front-matter-only snapshot per update: `content/startups/YYYY-MM-DD.md`. The newest (by `date`) is the one shown. No body text.
- Template: `archetypes/startups.md`. Data out: `/startups/index.json`.
- Commit message: `Startups: YYYY-MM-DD`. Push to `main`; GitHub Pages deploys on push.

## Schema
```yaml
---
title: Startups
date: 2026-10-18
lastmod: 2026-10-18T04:00:00Z      # now, UTC, on every update
themes:                            # <= 12, shown grouped by status (rising, steady, fading), then in this order
- title: "Agents that run your browser"
  slug: agents-that-run-your-browser   # lowercase words joined by hyphens, unique, never changes once used
  status: rising                   # rising | steady | fading
  summary: "One or two plain sentences on the bet these companies share."
  startups:
  - name: "Acme"                   # required
    url: "https://acme.com"        # required, the company's own site
    pitch: "One line: what it does, for whom."   # required
    yc_batch: "F26"                # optional; omit for non-YC companies (rendered "YC F26")
    round: "$4M seed"              # optional
    round_source: "https://..."    # required if round is set
    confidence: confirmed          # required if round is set: confirmed (primary source: the company, investor or filing) | reported (press report; shown with a "reported" marker)
    theme_id: personal-agents-get-their-own-computers-accounts-and-money   # optional; a slug from the Themes section, links to /themes/<slug>/
    first_seen: 2026-10-18         # required, YYYY-MM-DD, date you first spotted it; never changes. Within 7 days of the build = "New this week"
    sources: ["https://..."]       # required, at least one URL where the company was spotted/verified
    home: true                     # optional; show on the home page Startups block (see below)
---
```

## Home page (`home: true`)
Flag at most 3 rows `home: true` across the snapshot (more fails the build). Bar: a confirmed round of $50M or more, or 3+ independent sources. Home shows flagged rows newest `first_seen` first under a Startups block after Latest; no flags = no block. The home agent's `hide` (by startup url) removes a row; a `pin` that is a startup url puts it first in the block.

## Working copy
Use your own clone (e.g. `/workspace/site-scout`), not the shared `/workspace/site`, so other agents' uncommitted edits never block your pull.

## Build checks
Fail the build: missing required theme or startup field, bad or duplicate theme slug, bad status, more than 12 themes, body text, a company appearing twice in the snapshot (same name or same domain), a `round` without `round_source`, a `round` without `confidence` confirmed|reported, a non-http `url`, a malformed `first_seen`.
Warn only: `theme_id` that matches no slug in the newest `content/themes` snapshot (themes change daily). The row then shows no Theme link. Check https://arun477.github.io/themes/index.json for current slugs.

## Rules
- One row per company across the whole snapshot. Pick the single best theme for it.
- Update in place: each snapshot is the full current list. Copy the previous snapshot, edit rows, keep `first_seen` and slugs stable.
- Never invent companies, numbers, batches or links. Every row needs real `sources`; every round needs `round_source`. If unsure about a round, use `confidence: reported` with the report's URL, or leave the round out.
- Keep it to about 12 themes or fewer (aim for 5-10), each with real companies; merge overlapping themes, drop dead ones (or mark `fading`).
- No ranks or counts are shown; order within a theme is the order you write.
- Optional Feed cross-link (`startup:` on Feed items) is not built yet.
