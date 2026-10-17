---
title: "Meta and Reflection ship big open-weight models; agents go parallel"
date: 2026-10-17
updated: 2026-10-17T04:40:00Z
url: https://arun477.github.io/feed/2026-10-17/
author: Arun Arumugam
---

# Meta and Reflection ship big open-weight models; agents go parallel

Two large US open-weight models landed within a day: Meta's Muse Spark Open and Reflection's Apache-licensed Beam. OpenAI moved ChatGPT toward parallel multi-agent work and upgraded Voice, while Tencent open-sourced a dedicated agent memory model and Anthropic opened its safety practices to outside auditors.


- **Spike.** [Meta releases Muse Spark Open, an 816B open-weight model for coding and agents](https://x.com/AIatMeta/status/2110779754274292212) (AI at Meta, news, Models, 17:08 UTC): 816B total, 42B active, 1M-token context. Artificial Analysis ranks it the top US open-weight model, though the licence requires attribution and a deal for providers over $20M.
- [Reflection releases Beam with open weights under Apache 2.0](https://x.com/reflection_ai/status/2111079965529968798) (Reflection, news, Open source): A second large open model in a day, but with a fully permissive licence: weights, tokenizer, reference code and FP8/NVFP4 builds, so teams can self-host and ship commercially with no strings.
- [ChatGPT Pro can now run multiple agents on one task in parallel](https://x.com/OpenAI/status/2111192259073094035) (OpenAI, news, Agents): GPT-6 Pro splits a task across agents you can monitor and review individually, a sign that parallel multi-agent workflows are moving from dev tools into the mainstream chat product.
- [Tencent open-sources Hy Memory 2.0, a model just for agent memory](https://x.com/TencentHunyuan/status/2111027329816465435) (Tencent Hy, news, Agents): A 30B (3B active) model, framework and cross-tool sync for deciding what agents should remember. Memory is becoming its own layer of the agent stack rather than a prompt trick.
- [Anthropic gives METR employee-like access to audit its safety practices](https://x.com/AnthropicAI/status/2110784662071398807) (Anthropic, news, Safety): Moves third-party evaluation from testing finished models to inspecting how a lab actually works internally, a possible template for other labs and regulators.
- [OpenAI upgrades ChatGPT Voice with GPT-Live-1.1](https://x.com/OpenAI/status/2110797830361436604) (OpenAI, news, Models): New voices and accents, including Hindi, and less stalling, rolling out to all users with API access next. Part of a wider voice race that also saw Grok Voice 3.0 top a reliability benchmark.
- [Simons Foundation, OpenAI and Anthropic commit $15M to AI in maths research](https://x.com/SimonsFdn/status/2110740786169979088) (Simons Foundation, news, Research): Workshops and free compute to help mathematicians verify and build on AI-generated results, after OpenAI's batch of 700 AI-written papers unsettled the field.
- [Redesigning source control at Anthropic](https://www.anthropic.com/engineering/redesigning-source-control) (Anthropic Engineering, blog, Infra): Merges grew more than tenfold as agents took on more work, so a seven-person team replaced Git with an in-house version control system in five months.
- [Pi Durable on Cloudflare](https://earendil.com/posts/pi-durable-on-cloudflare/) (Earendil, blog, Agents): A worked build of long-running pi agents: one session per Durable Object with SQLite storage, hibernation when idle, alarm wakeups and a search subagent.
- [Findings from the $1M Vercel Sandbox challenge](https://vercel.com/blog/findings-from-the-1-million-dollar-vercel-sandbox-challenge) (Vercel, blog, Security): An open challenge to break out of Vercel's agent sandbox drew 1,285 reports, found a Linux kernel zero-day and paid $242K. Real data on how well agent isolation holds up.
