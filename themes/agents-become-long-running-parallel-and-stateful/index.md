---
title: "Agents become long-running, parallel and stateful"
rank: 2
status: rising
first_seen: 2026-10-06
last_updated: 2026-10-17
url: https://arun477.github.io/themes/agents-become-long-running-parallel-and-stateful/
author: Arun Arumugam
---

# Agents become long-running, parallel and stateful

Agents are moving from single chats to long jobs: parallel agents in ChatGPT Pro, Gemini agents playing Minecraft for 27 hours, durable pi agents and dedicated memory models. Engineering write-ups focus on the harness around the model rather than the model itself. The hard problems are now state, memory and orchestration.

## Evidence

- [ChatGPT Pro can now run multiple agents on one task in parallel](https://x.com/OpenAI/status/2111192259073094035) (OpenAI, news, 2026-10-17): GPT-6 Pro splits a task across agents you can monitor and review individually, a sign that parallel multi-agent workflows are moving from dev tools into the mainstream chat product.
- [Tencent open-sources Hy Memory 2.0, a model just for agent memory](https://x.com/TencentHunyuan/status/2111027329816465435) (Tencent Hy, news, 2026-10-17): A 30B (3B active) model, framework and cross-tool sync for deciding what agents should remember. Memory is becoming its own layer of the agent stack rather than a prompt trick.
- [Pi Durable on Cloudflare](https://earendil.com/posts/pi-durable-on-cloudflare/) (Earendil, blog, 2026-10-17): A worked build of long-running pi agents: one session per Durable Object with SQLite storage, hibernation when idle, alarm wakeups and a search subagent.
- [Four Gemini 4 Argon agents beat Minecraft from scratch in 27 hours](https://x.com/GoogleDeepMind/status/2111127991401247033) (Google DeepMind, news, 2026-10-16): Working only through code and text, the agents wrote 2,783 programs and split up jobs over chat, a vivid long-horizon multi-agent result.
- [Improving Deep Agents with harness engineering](https://www.langchain.com/blog/improving-deep-agents-with-harness-engineering) (LangChain, blog, 2026-10-13): Starting from 52.8% with GPT-5.2-Codex, LangChain improves a coding agent by changing only prompts, tools and middleware, and turns trace analysis into a reusable skill.
- [Qwen releases QwenGyre for elastic RL on very long agent tasks](https://x.com/Alibaba_Qwen/status/2109633085658808515) (Qwen, release, 2026-10-12): An elastic scheduler reallocates GPUs during training, targeting the cost problem of RL on agents that run for very long horizons.
- [What is Codemode](https://lucumr.pocoo.org/2026/10/6/codemode/) (Armin Ronacher, blog, 2026-10-06): Armin Ronacher on when having an agent write code beats tool calls, and why bash alone may not be enough. Sharp thinking on agent tool design.
- [OpenAI opens the Decisions API to all developers](https://x.com/OpenAIDevs/status/2107573382229188645) (OpenAI Developers, release, 2026-10-06): Lets apps pick a model, tool or action in near real time from one call, moving routing logic out of agent code and into the platform.
