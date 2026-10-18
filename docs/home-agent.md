# Managing the home page: guide for the home agent

https://arun477.github.io/ is one stream, newest first, of everything the site publishes: posts, every Feed item and the current themes. It fills itself: a new post, Feed day or Themes snapshot appears there on its own. Your job is the editorial layer on top: what leads, what is noise, and one line on what is going on. You never add rows yourself and never edit posts, Feed days or snapshots.

Before each run, read the newest entries of https://arun477.github.io/changelog/index.md: every change to URLs, schema or rules lands there first. Arun reviews what you ship and can roll back any change.

## The file

Everything you control lives in the front matter of `content/_index.md`. Leave `title`, `date`, `role` and `links` alone (Arun's).

```yaml
---
title: "Arun Arumugam"
date: 2026-01-01                       # leave as is.
lastmod: 2026-10-18T09:00:00Z          # required on every edit: now, UTC. Never a future time.
note: "One plain sentence on what is going on this week."   # optional. Under 280 characters. Shown above the stream. Remove it when it goes stale.
pins:                                  # optional, at most 3. Rows moved to the top, in this order, marked Pinned.
  - "/themes/agents-get-computers/"    # a site path (post or theme page)...
  - "https://example.com/advisory"     # ...or a Feed item's exact url.
hide:                                  # optional. Rows dropped from the stream (still on their section pages).
  - "https://example.com/duplicate"
shown: 15                              # optional, 5-30. Rows shown before "Show more". Default 15.
step: 15                               # optional, 5-30. Rows each "Show more" opens. Default 15.
role: ...
links: ...
---
```

## How to manage it

- **Pin sparingly.** A pin is for something that should stay on top past its date: a spike the reader must act on, a theme that is the story of the week, a new post. Unpin when it stops being true. Pins outrank spikes.
- **Hide only noise.** Duplicates of the same story across days, an item that turned out wrong, a theme that is now covered by another. Do not hide to shorten the page; Show more already does that.
- **The note** says what ties the top of the stream together, in the Feed's voice: plain, factual, no hype, no emoji. If you have nothing to say, leave it out.
- **Tidy up:** remove pins and hides whose rows are gone (a theme that left the snapshot, an item an agent removed). They are ignored, but they clutter the file.
- Commit message: `Home: <what changed>`. Re-read the file from `main` just before editing; other agents push to the same repo.

## What the site does with it

- The page opens on one line, "Managed by agents".
- Then your note, then pins, then everything else newest first. The first `shown` rows show; each "Show more" opens the next `step`. After four batches the stream stops and links to the section pages, which paginate, so the page stays the same size however much is published.

## If something is wrong

A note over 280 characters, more than 3 pins, a pin or hide that is not a site path (`/...`) or an http(s) URL, or `shown`/`step` outside 5-30 fails the build, so the live site keeps its last good version. Check the "deploy" workflow run in GitHub Actions after you push. If you can run Hugo, `hugo` must print no ERROR or WARN lines.


## Startups block
After Latest, home shows up to 3 startups the startups agent flagged `home: true` in the newest `content/startups` snapshot (bar: confirmed round >= $50M or 3+ independent sources; rules in docs/startups-agent.md), newest `first_seen` first. Hidden when none are flagged. `hide` with a startup's url removes it; a `pin` with a startup's url puts it first in the block (and counts toward the 3 pins).

Work in your own clone (e.g. `/workspace/site-<agent>`), not the shared `/workspace/site`.
