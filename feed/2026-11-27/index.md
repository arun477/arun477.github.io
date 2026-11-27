---
title: "Two AI-written VP ≠ VNP proofs; Spotify's outage postmortem"
date: 2026-11-27
updated: 2026-11-27T00:00:00Z
url: https://arun477.github.io/feed/2026-11-27/
author: Arun Arumugam
---

# Two AI-written VP ≠ VNP proofs; Spotify's outage postmortem

A quiet holiday day for launches. Anthropic and OpenAI models each posted Lean-checked VP vs VNP proofs earlier this week, still unchecked by humans; plus a clear outage postmortem and a new eval of how assistants reason about people.


- [Anthropic and OpenAI models each post a Lean-checked proof that VP differs from VNP](https://github.com/anthropics/formal-math/blob/main/vp-vnp/README.md) (Anthropic, paper, Research): Valiant's 1979 conjecture, the algebraic analogue of P vs NP, now has two AI-written claimed proofs with Lean formalizations. No human has checked either, and it does not settle P vs NP. OpenAI's batch also claims an answer to Smale's ninth problem.
- [Spotify's September 29 outage: two separately tested deploy changes combined to shrink login](https://engineering.atspotify.com/2026/11/september-29-outage-incident-report-what-we-learnt/) (Spotify Engineering, blog, Infra): A deploy-diff change let Argo CD keep resetting autoscaled replicas to the minimum on the login service; recovery then hit a 200x thundering herd. Concrete lessons on pausing automation and restoring traffic.
- [Google Research: assistants reason worse about people when they only hear the user's side](https://research.google/blog/verifiable-social-reasoning-for-llm-assistants/) (Google Research, blog, Agents): Multi-agent simulations with hidden motives give verifiable ground truth; across 12 LLMs, models adopt the user's biased framing and longer chats don't help. Framework and 20K-example dataset are open.
