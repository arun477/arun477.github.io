---
title: "Switzerland confirms AI-agent cyberattacks; GigaChat 4 opens"
date: 2026-11-26
updated: 2026-11-26T00:00:00Z
url: https://arun477.github.io/feed/2026-11-26/
author: Arun Arumugam
---

# Switzerland confirms AI-agent cyberattacks; GigaChat 4 opens

A quiet US holiday, with one turning point: Swiss authorities confirmed the first successful cyberattacks run with AI agents. Also: a GPT-6.2 billing fix that tightens Codex limits, Sber's 708B open-weight GigaChat 4, and Tencent's open drafter for sparse-attention models.


- [Swiss NCSC confirms first cyberattacks run with AI agents, all of them successful](https://www.bacs.admin.ch/en/26-ki-agenten-1-en) (Swiss NCSC (BACS), news, Security): Attackers used agentic offensive frameworks against critical-infrastructure operators in at least two sectors, and every known case compromised the target. NCSC expects more fast attacks; cut internet exposure and patch now.
- [OpenAI fixes a GPT-6.2 billing bug: Codex and ChatGPT limits now hit about 40% sooner](https://x.com/thsottiaux/status/2125784147889393806) (OpenAI (Tibo Sottiaux), news, Models): GPT-6.2 Astra and Sol usage had been wrongly discounted since launch. The same work now uses more of your plan, so budget heavy Codex sessions accordingly; past overuse will not be charged.
- [Sber releases GigaChat 4 open weights: 708B-A41B MoE with 1M context](https://huggingface.co/ai-sage/GigaChat4-708B-A41B) (Sber (Hugging Face), release, Models): A new large open-weight model outside the US and China, mixing MoE with DeepSeek Sparse Attention and Gated DeltaNet, with instant and reasoning modes in one checkpoint. FP8, BF16, base and GGUF weights are all published.
- [Tencent open-sources DFly2, a speculative drafter for sparse-attention models](https://github.com/Tencent/AngelSpec) (Tencent Hunyuan, release, Infra): The drafter reuses the target model's sparse KV cache, so long contexts stay cheap: up to 81% more serving throughput for DeepSeek-V4.1-Flash at 64K. Training code and drafters for Hy4 flash, DeepSeek and GLM flash models are out.
- [Swarms, flocks, gangs: training small models to work as a multi-agent system](https://huggingface.co/blog/training-swarms) (Hugging Face, blog, Agents): Part one of a hands-on series on why adding agents does not help by itself and how to train them to communicate, with a reproducible run on Hugging Face Jobs that costs about $50.
