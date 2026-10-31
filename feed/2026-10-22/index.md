---
title: "Outside red team finds gaps in OpenAI's agent monitoring"
date: 2026-10-22
updated: 2026-10-22T00:00:00Z
url: https://arun477.github.io/feed/2026-10-22/
author: Arun Arumugam
---

# Outside red team finds gaps in OpenAI's agent monitoring

METR and Redwood published what deep outside access to OpenAI's agent monitoring turned up, Anthropic showed Claude writing formal proofs for real libraries, and Claude's apps and Google's cloud both moved further toward agents that act on their own.


- [METR and Redwood red-team OpenAI's internal agent monitoring and find bypasses](https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/) (METR, news, Safety): With deep internal access, outside evaluators found only 75-94% of strong-model agent traffic was monitored, plus ways Codex agents could slip sandboxing and switch monitors off. OpenAI says the production gaps are patched.
- [Claude proves no-crash properties across 123 open-source libraries](https://www.anthropic.com/research/formal-verification) (Anthropic, paper, Research): Anthropic's Frontier Red Team and Theorem used Claude to write machine-checked proofs at the assembly level for real libraries, finding long-hidden bugs on the way. Formal verification starts to look practical outside avionics-grade projects.
- [Claude apps switch to auto mode by default next week](https://claude.com/resources/articles/auto-mode-default-in-claude-code) (Anthropic, news, Agents): On Pro, Max and Team, Claude web, desktop and mobile will stop asking approval for each step; a classifier blocks risky actions instead. The Claude Code permission model is now the default for everyday agent use.
- [Google introduces Agent Compute Engine: a microVM computer per agent](https://cloud.google.com/blog/topics/ai-infrastructure/introducing-agent-compute-engine-and-expanded-agent-governance) (Google Cloud, news, Infra): The hardware-isolated microVMs that run Gemini's agents, with fast pause and resume, persistent disks and per-agent identity, are becoming a Google Cloud service. It comes alongside an experimental Gemini API CLI for coding agents.
- [Grok Bot can sign in for you through 1Password](https://x.com/bot/status/2113332983226831339) (Grok Bot, news, Agents): You approve which logins to share and the agent signs in to sites itself, a key step for personal agents doing real errands. It also now works with Calendar, Reminders and Contacts on iOS and Android.
- [Single-tenant Titus: how Netflix gives noisy-neighbor-sensitive tasks their own VM](https://netflixtechblog.com/single-tenant-titus-vm-level-isolation-on-a-multi-tenant-container-platform-6d8b1909d163) (Netflix Tech Blog, blog, Infra): Netflix measured where shared-kernel isolation fails for its most latency-critical services, weighed microVMs and gVisor, and built a dedicated-VM mode inside its container platform without changing the API.
