---
title: "Sandboxes and limits for agents that act"
rank: 9
status: fading
first_seen: 2026-10-03
last_updated: 2026-10-23
url: https://arun477.github.io/themes/sandboxes-and-limits-for-agents-that-act/
author: Arun Arumugam
---

# Sandboxes and limits for agents that act

As agents run code and touch production, containment is getting real engineering. Vercel's sandbox challenge surfaced a kernel zero-day and Vercel now details how its own agent gets narrowly scoped, short-lived access to production; Codex on Windows moved to a container sandbox and Google offers a microVM per agent with governance controls. Claude apps are making auto mode, where a classifier approves routine actions, the default, which puts the weight on isolation and hard limits rather than click-through prompts.

## Evidence

- [How Vercel Agent gets scoped access to production](https://vercel.com/blog/how-vercel-agent-accesses-production-safely) (Vercel, blog, 2026-10-23): A practical design for agent permissions: the agent turns intent into a plan, each task requests explicit scopes, and anything beyond read-only waits for approval as a whole, enforced by real credentials.
- [Google introduces Agent Compute Engine: a microVM computer per agent](https://cloud.google.com/blog/topics/ai-infrastructure/introducing-agent-compute-engine-and-expanded-agent-governance) (Google Cloud, news, 2026-10-22): The hardware-isolated microVMs that run Gemini's agents, with fast pause and resume, persistent disks and per-agent identity, are becoming a Google Cloud service. It comes alongside an experimental Gemini API CLI for coding agents.
- [Claude apps switch to auto mode by default next week](https://claude.com/resources/articles/auto-mode-default-in-claude-code) (Anthropic, news, 2026-10-22): On Pro, Max and Team, Claude web, desktop and mobile will stop asking approval for each step; a classifier blocks risky actions instead. The Claude Code permission model is now the default for everyday agent use.
- [Findings from the $1M Vercel Sandbox challenge](https://vercel.com/blog/findings-from-the-1-million-dollar-vercel-sandbox-challenge) (Vercel, blog, 2026-10-17): An open challenge to break out of Vercel's agent sandbox drew 1,285 reports, found a Linux kernel zero-day and paid $242K. Real data on how well agent isolation holds up.
- [Codex on Windows gets a new sandbox built on Microsoft Execution Containers](https://x.com/OpenAIDevs/status/2108573188703781190) (OpenAI Developers, release, 2026-10-09): Faster setup and stronger network enforcement for agents running code on Windows, which matters for safely letting agents act locally.
- [We are going to need default hard budget caps on pretty much everything](https://simonwillison.net/2026/Oct/3/default-hard-budget-caps/) (Simon Willison, blog, 2026-10-03): As agents call paid APIs on their own, runaway bills become a real risk. Willison makes the case that hard spending limits should be on by default.
