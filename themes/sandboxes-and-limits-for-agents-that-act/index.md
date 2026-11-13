---
title: "Sandboxes and limits for agents that act"
rank: 8
status: rising
first_seen: 2026-10-03
last_updated: 2026-11-11
url: https://arun477.github.io/themes/sandboxes-and-limits-for-agents-that-act/
author: Arun Arumugam
---

# Sandboxes and limits for agents that act

As agents run code and touch production, containment is getting real engineering. Vercel's sandbox challenge surfaced a kernel zero-day, Codex on Windows moved to a container sandbox, Google offers a microVM per agent, and Figma built Nimbus to run tens of thousands of isolated sandboxes for untrusted code. Testing the walls is maturing too: Perplexity had 12 models try to escape its agent VM and found capture-the-flag setups can steer agents away from the boundary under test, and security-tuned models did no better. Isolation at scale, checked by adversarial testing, is becoming the default control.

## Evidence

- [Perplexity red-teams its agent sandbox with 12 models](https://www.perplexity.ai/hub/blog/escaping-space-part-ii) (Perplexity, paper, 2026-11-11): Models tried to escape the VM and bypass network policy. Findings: standard capture-the-flag setups can steer agents away from the boundary being tested, and security-tuned models did not do better.
- [How Figma built Nimbus to run tens of thousands of AI sandboxes](https://www.figma.com/blog/how-figma-manages-sandboxes-at-scale/) (Figma, blog, 2026-11-05): Figma's AI products need many isolated sandboxes for untrusted code; Nimbus is the internal platform that makes them fast, reliable and operable at that scale.
- [How Vercel Agent gets scoped access to production](https://vercel.com/blog/how-vercel-agent-accesses-production-safely) (Vercel, blog, 2026-10-23): A practical design for agent permissions: the agent turns intent into a plan, each task requests explicit scopes, and anything beyond read-only waits for approval as a whole, enforced by real credentials.
- [Google introduces Agent Compute Engine: a microVM computer per agent](https://cloud.google.com/blog/topics/ai-infrastructure/introducing-agent-compute-engine-and-expanded-agent-governance) (Google Cloud, news, 2026-10-22): The hardware-isolated microVMs that run Gemini's agents, with fast pause and resume, persistent disks and per-agent identity, are becoming a Google Cloud service. It comes alongside an experimental Gemini API CLI for coding agents.
- [Claude apps switch to auto mode by default next week](https://claude.com/resources/articles/auto-mode-default-in-claude-code) (Anthropic, news, 2026-10-22): On Pro, Max and Team, Claude web, desktop and mobile will stop asking approval for each step; a classifier blocks risky actions instead. The Claude Code permission model is now the default for everyday agent use.
- [Findings from the $1M Vercel Sandbox challenge](https://vercel.com/blog/findings-from-the-1-million-dollar-vercel-sandbox-challenge) (Vercel, blog, 2026-10-17): An open challenge to break out of Vercel's agent sandbox drew 1,285 reports, found a Linux kernel zero-day and paid $242K. Real data on how well agent isolation holds up.
- [Codex on Windows gets a new sandbox built on Microsoft Execution Containers](https://x.com/OpenAIDevs/status/2108573188703781190) (OpenAI Developers, release, 2026-10-09): Faster setup and stronger network enforcement for agents running code on Windows, which matters for safely letting agents act locally.
- [We are going to need default hard budget caps on pretty much everything](https://simonwillison.net/2026/Oct/3/default-hard-budget-caps/) (Simon Willison, blog, 2026-10-03): As agents call paid APIs on their own, runaway bills become a real risk. Willison makes the case that hard spending limits should be on by default.
