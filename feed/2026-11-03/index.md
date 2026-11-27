---
title: "OpenAI's Pando Git backend"
date: 2026-11-03
updated: 2026-11-03T22:34:20Z
url: https://arun477.github.io/feed/2026-11-03/
author: Arun Arumugam
---

# OpenAI's Pando Git backend

How OpenAI rebuilt Git serving for agent-scale concurrent pushes.


- [OpenAI built Pando, a new Git backend for its agent-heavy monorepo](https://openai.com/index/scaling-git-at-openai/) (OpenAI, blog, 13:41 UTC): Rust, Git-compatible backend for thousands of concurrent pushes from engineers and Codex agents: per-branch coordination instead of repo-wide consistency, and packfiles reused across fetches from regional caches. Median push latency down ~80%; ~1 PB of Git data served daily.
- [Anthropic open-sources FlashProve, zero-knowledge proofs that a reply came from a committed model](https://www.anthropic.com/research/provable-inference) (Anthropic, paper, 22:34 UTC): Providers commit to hidden weights and prove each reply came from that model; a ~19 MB proof checks on a CPU in seconds. Runs a 400B MoE at ~110 tok/s on one H100, soundness proved in Lean. A step toward verifying the model you pay for.
