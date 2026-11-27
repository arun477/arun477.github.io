---
title: "Neurons as an interpretability unit; a year of coding-agent inflectio"
date: 2026-11-25
updated: 2026-11-25T22:30:36Z
url: https://arun477.github.io/feed/2026-11-25/
author: Arun Arumugam
---

# Neurons as an interpretability unit; a year of coding-agent inflectio

Mostly reads rather than launches: Anthropic Fellows on readable neurons, Simon Willison on a year of coding agents, and Anthropic on moving its Messages API to Rust with Claude agents checking parity. Cloudflare also lets any site expose a search endpoint for agents.


- [Anthropic Fellows: individual neurons are more readable than assumed, and useful for safety](https://alignment.anthropic.com/2026/neuron-basis-theory/) (Anthropic Alignment, paper, Research, 13:28 UTC): Neurons rarely mix unrelated concepts and keep their meaning across layers. Untrained neuron detectors rival trained steering and expose that most unlearning methods hide hazardous knowledge rather than remove it.
- [Simon Willison: three LLM inflection points in twelve months](https://simonwillison.net/2026/Nov/24/llm-inflection-points/) (Simon Willison, blog, Agents, 13:28 UTC): A year after Opus 4.5, a builder's account of when coding agents became reliable daily tools and what changed with Fable-class models, useful for calibrating what agents can be trusted with now.
- [How Anthropic moved its Messages API from Python to Rust with Claude agents verifying parity on live traffic](https://www.anthropic.com/research/migrating-api-to-rust) (Anthropic Research, blog, Infra): Production Python served as the verifier: diffs on real traffic were dispatched to Claude agents to fix. Result: about 70% less CPU per request and 20% faster median time to first token, with no downtime.
- [Cloudflare launches Search for Agents: a one-toggle site search endpoint agents can discover](https://blog.cloudflare.com/search-for-agents/) (Cloudflare, release, Agents): Any Cloudflare zone can now expose /.well-known/search returning Markdown results, advertised to agents via page meta tags, including on the Free plan. Agents can query a site instead of crawling it.
- [A coding agent hill-climbs Inkling 2 Mini serving on one RTX PRO 6000](https://huggingface.co/blog/inkling-2-mini-inference-hillclimb) (Hugging Face, blog, Infra): An agent with a control-bracketed benchmark protocol took single-user decode from 136 to 190 tok/s via vLLM nightly plus DSpark speculation, near the bandwidth ceiling, and logs what failed and why.
