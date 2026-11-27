---
title: "A Lean-verified proof of the Riemann Hypothesis, built with Claude"
date: 2026-11-20
updated: 2026-11-22T13:27:39Z
url: https://arun477.github.io/feed/2026-11-20/
author: Arun Arumugam
---

# A Lean-verified proof of the Riemann Hypothesis, built with Claude

Levent Alpöge released a Claude-assisted Lean proof of the Riemann Hypothesis, certified by the Lean community a day later. Thinking Machines shipped a small looped open model, and OpenAI explained its defenses against distillation.


- **Spike.** [Levent Alpöge's Claude-assisted proof of the Riemann Hypothesis is certified correct in Lean](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) (Lean community, news, Research, 14:43 UTC): The 17-million-line Lean proof, built with Claude, was checked by Lean's kernel and several independent checkers. It is the clearest case yet of AI plus formal verification settling a major open problem.
- [Thinking Machines releases Inkling 2 Mini, a 26B looped open-weights model for laptops](https://thinkingmachines.ai/news/inkling-2-mini/) (Thinking Machines, release, Models): A 26B MoE (3.4B active) that reruns its middle layers three times per token; it leads open models under 100B on DeepSWE and comes with research on how looping affects chain-of-thought monitoring.
- [OpenAI details how it detects and disrupts adversarial distillation of its models](https://openai.com/index/combatting-adversarial-distillation/) (OpenAI, news, Safety): Explains how capabilities transfer through unauthorized distillation, how OpenAI spots coordinated extraction, and how it now protects hidden reasoning.
