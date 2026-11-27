---
title: "OpenAI publishes its pretraining perplexity and proposes limits"
date: 2026-11-22
updated: 2026-11-22T00:00:00Z
url: https://arun477.github.io/feed/2026-11-22/
author: Arun Arumugam
---

# OpenAI publishes its pretraining perplexity and proposes limits

OpenAI's chief scientist put internal perplexity numbers on the record and proposed shared cross-lab limits. Sarvam shipped an agent-tuned open-weight checkpoint, and two engineering write-ups cover RL inside agent harnesses and the Duplex calling stack.


- [OpenAI publishes its internal pretraining perplexity and proposes cross-lab limits on it](https://openai.com/index/perplexity-and-intelligence) (OpenAI, news, Policy): Chief Scientist Jakub Pachocki shares log-perplexity for OpenAI models since GPT-3.5 (now below 0.8) and proposes perplexity as a shared metric, with industry limits labs commit not to cross until monitoring improves.
- [Sarvam releases Sarvam-105B-1711, an Apache-2.0 open-weight model tuned for agents and Indian languages](https://www.sarvam.ai/blogs/sarvam-105b-1711) (Sarvam AI, release, Models): A new checkpoint of the 105B MoE (10.3B active) with big tool-use and instruction-following gains, a 4-bit build that fits one workstation GPU, and notes on doubling training throughput on Blackwell. Benchmarks are Sarvam's own.
- [Training one LoRA per agent harness with RL inside pi, Hermes Agent and OpenCode](https://huggingface.co/blog/harness-adapters-at-scale) (Hugging Face, blog, Agents): Hugging Face ran GRPO on Qwen inside the unmodified harnesses, beat the base model on Terminal-Bench and SWE-bench Pro in each, then merged the three adapters into one; tasks, adapters and trajectories are public.
- [How Google Duplex evolved into the phone-calling agent behind Tasks in Gemini](https://research.google/blog/how-google-duplex-evolved-to-also-call-businesses-for-you-in-gemini/) (Google Research, blog, Agents): Google Research walks through three generations of the Duplex stack, from closed-domain pipelines to a unified Gemini system, and what low-latency turn-taking on live calls demands of a voice agent.
