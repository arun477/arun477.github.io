---
title: "ChatGPT Wallet lets agents pay; llama.cpp hits 1.0"
date: 2026-11-13
updated: 2026-11-13T00:00:00Z
url: https://arun477.github.io/feed/2026-11-13/
author: Arun Arumugam
---

# ChatGPT Wallet lets agents pay; llama.cpp hits 1.0

Agent payments got a real rail with ChatGPT Wallet, DeepSeek folded its app features into the API, and llama.cpp committed to a stable 1.0. Plus a 4-bit training write-up and a warning on AI pentest swarms.


- [OpenAI launches ChatGPT Wallet so agents can pay without seeing your card](https://openai.com/index/introducing-chatgpt-wallet) (OpenAI, news, Agents): Built with Amex, Mastercard and Visa: agents get tokenized cards and every purchase needs a security check. A concrete payments rail for agent checkout, starting with Pro users in the US.
- [DeepSeek API gets the app's search, files, voice, OCR, ASR and TTS](https://x.com/deepseek_ai/status/2121247896918253875) (DeepSeek, release, Models): Built-in tools switch on with a few parameters, and OCR, speech and TTS are also offered as standalone APIs, so developers get app-level features from one cheap provider.
- [llama.cpp and ggml reach v1.0.0 with a stable API and ABI](https://huggingface.co/blog/ggml-org/llama-cpp-v1) (Hugging Face, release, Open source): After 3.5 years, the core local-inference library commits to semantic versioning, so apps built on it can upgrade without surprise breakage.
- [Grok Bot can now join meetings](https://x.com/bot/status/2121320089920430181) (Grok Bot, news, Agents): The bot sits in calls, answers questions, takes on assigned work and tracks team decisions, following Claude Meetings a day earlier into the same space.
- [Google opens Antigravity's /teamwork multi-agent tools after results on open problems](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/) (Google Research, news, Agents): Google Research reports Gemini 4 multi-agent workflows producing results in math, formal verification, chemistry and kernel optimization, and is making /teamwork available to outside researchers.
- [Cloudflare sees 50+ AI pentest framework families scanning its customers](https://blog.cloudflare.com/adapting-to-ai-penetration-testing-orchestrators/) (Cloudflare, blog, Security): Forks of the withdrawn ARTEX agent now run from thousands of IPs. Cloudflare measures the traffic and explains how defenses must change for autonomous, high-volume attacks.
- [How Thinking Machines trained Inkling 2 Small end to end in 4-bit](https://thinkingmachines.ai/blog/end-to-end-4-bit-training) (Thinking Machines, blog, Research): A detailed account of using NVFP4 in the forward pass from the first pretraining step through RL, and how they kept quantization error from hurting learning.
- [Anthropic's 10 recommendations for building safety evaluations](https://www.anthropic.com/research/building-strong-safety-evaluations) (Anthropic Research, blog, Safety): Practical lessons on designing, running and reporting safety evals, since claims that a model is safer are only as sound as the evals behind them.
- [How Meta brought Android's Cuttlefish emulator to Apple silicon Macs](https://engineering.fb.com/2026/11/13/android/cuttlefish-on-mac/) (Meta Engineering, blog, Infra): Reality Labs ported Cuttlefish and its QEMU backend to macOS so AI-glasses developers can test against high-fidelity virtual devices instead of scarce hardware.
