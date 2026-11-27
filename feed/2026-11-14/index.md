---
title: "Cursor breach traced to a leaked vendor key and agent traces"
date: 2026-11-14
updated: 2026-11-14T00:00:00Z
url: https://arun477.github.io/feed/2026-11-14/
author: Arun Arumugam
---

# Cursor breach traced to a leaked vendor key and agent traces

A quiet Saturday for releases. Cursor published the root cause of its October breach: agent traces shared with a training vendor carried credentials that opened the door to its internal tools and the fake Claude Code extension.


- [Cursor traces its breach to a leaked Fireworks key and old agent traces](https://cursor.com/blog/security-incident-update) (Cursor, news, Security, 13:52 UTC): Agent traces shared with a training vendor held unredacted credentials, which let the attacker reach Cursor tools and plant the fake Claude Code extension. A clear case for scrubbing secrets from agent logs before they leave your systems.
