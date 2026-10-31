---
title: "DeepSeek opens its inference stack; TypeScript gets a Rust port"
date: 2026-10-20
updated: 2026-10-20T22:34:52Z
url: https://arun477.github.io/feed/2026-10-20/
author: Arun Arumugam
---

# DeepSeek opens its inference stack; TypeScript gets a Rust port

DeepSeek released the engine that serves V4.1-Flash, OpenAI published an open eval showing large gains on COBOL and Fortran, and Cloudflare and VoidZero unveiled a Rust port of the TypeScript compiler.


- [DeepSeek open-sources DeepInfer, the inference stack behind V4.1-Flash](https://github.com/deepseek-ai/DeepInfer) (DeepSeek, release, Infra, 13:42 UTC): DeepSeek's production serving engine is now Apache-2.0, with expert parallelism, draft-token decoding and deterministic sampling on Nvidia SM100 and Huawei Ascend 950. KV cache and disaggregation are not included.
- [OpenAI open-sources MultiLangBench and reports big gains on COBOL and Fortran](https://openai.com/index/low-resource-programming-languages/) (OpenAI, news, Models, 13:42 UTC): GPT-6 Astra passes 87% of a build-SQLite-from-scratch test across 20 languages (GPT-5.6 Sol: 27%), and GPT-6.1 Sol hits 98% on COBOL migration. The eval suite is public, so you can check your own language.
- [Cloudflare and VoidZero port the TypeScript compiler to Rust](https://blog.cloudflare.com/typescript-rust-port/) (Cloudflare, release, Dev tools, 13:42 UTC): tsrs type-checks up to 8x faster than TypeScript 7.0 with about 70% less memory, built with the TypeScript team, and runs in Wasm. Agents will keep it in sync with upstream, the same way Cloudflare maintains Vinext.
- [Mistral releases Voxtral 3 speech models and a voice agent SDK](https://mistral.ai/news/voxtral-3/) (Mistral AI, release): New speech-to-text and text-to-speech models plus an SDK that streams listening, reasoning, tool calls and speech in one real-time pipeline in 50+ languages, on Mistral's EU API or self-hosted.
- [Building Laminar, Ramp's in-house managed agents platform](https://builders.ramp.com/post/building-laminar) (Ramp Engineering, blog): After trying provider agent SDKs, managed agent APIs and open-source frameworks, Ramp built its own harness, which now runs its accounting, SMS assistant and coding agents. A candid case for owning the agent loop.
- [IBM's ALTK-Evolve tops τ²-bench with learned memory instead of a frontier model](https://huggingface.co/blog/ibm-research/altk-evolve-bc) (Hugging Face, blog): A basic GPT-4.1 ReAct agent learns guidelines from past runs and beats the retail entries on τ²-bench without weight updates. It measures the cost: more tokens, not more turns.
