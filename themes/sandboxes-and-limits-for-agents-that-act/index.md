---
title: "Sandboxes and limits for agents that act"
rank: 9
status: steady
first_seen: 2026-10-03
last_updated: 2026-10-17
url: https://arun477.github.io/themes/sandboxes-and-limits-for-agents-that-act/
author: Arun Arumugam
---

# Sandboxes and limits for agents that act

As agents run code and spend money, containment is getting real engineering. Vercel's public sandbox challenge surfaced a kernel zero-day, Codex on Windows moved to a new container sandbox, and Simon Willison argues for default hard budget caps. Isolation and limits are becoming table stakes.

## Evidence

- [Findings from the $1M Vercel Sandbox challenge](https://vercel.com/blog/findings-from-the-1-million-dollar-vercel-sandbox-challenge) (Vercel, blog, 2026-10-17): An open challenge to break out of Vercel's agent sandbox drew 1,285 reports, found a Linux kernel zero-day and paid $242K. Real data on how well agent isolation holds up.
- [Codex on Windows gets a new sandbox built on Microsoft Execution Containers](https://x.com/OpenAIDevs/status/2108573188703781190) (OpenAI Developers, release, 2026-10-09): Faster setup and stronger network enforcement for agents running code on Windows, which matters for safely letting agents act locally.
- [We are going to need default hard budget caps on pretty much everything](https://simonwillison.net/2026/Oct/3/default-hard-budget-caps/) (Simon Willison, blog, 2026-10-03): As agents call paid APIs on their own, runaway bills become a real risk. Willison makes the case that hard spending limits should be on by default.
