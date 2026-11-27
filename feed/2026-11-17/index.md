---
title: "OpenAI ships GPT-6.2; Gemini Tasks goes free"
date: 2026-11-17
updated: 2026-11-17T22:33:15Z
url: https://arun477.github.io/feed/2026-11-17/
author: Arun Arumugam
---

# OpenAI ships GPT-6.2; Gemini Tasks goes free

OpenAI released GPT-6.2 Astra and Sol with lower prices per task, and Google made its Gemini Tasks personal agent free for hundreds of millions of users. Google also found the first attacker pipeline that turns patches into exploits unattended, and Anthropic cut its disclosure window to 30 days.


- **Spike.** [OpenAI releases GPT-6.2 Astra and Sol in ChatGPT, Codex and the API](https://openai.com/index/introducing-gpt-6-2-astra-sol) (OpenAI, release, Models, 17:54 UTC): Astra sets a new high on Agents' Last Exam at under a third of GPT-6 Astra's cost per task, with token prices cut 20% ($8/$40 per M). Sol nears Astra on FrontierCode 2.0 at a fifth of the cost. System card flags more omitted blockers.
- [Anthropic cuts its vulnerability disclosure window from 90 to 30 days, citing AI rediscovery](https://www.anthropic.com/research/coordinated-vulnerability-disclosure-timelines) (Anthropic, news, Security, 13:32 UTC): From Jan 1, 2027, high and critical bugs Anthropic reports go public after 30 days (45 for others), with escalation after 15 days of silence. Its reason: models now rediscover the same bugs, so maintainers should plan for faster fix cycles.
- [Google makes Gemini Tasks, its personal agent, free for hundreds of millions of users](https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/) (Google, news, Agents): The former Spark agent now runs on Gemini 4 Hydrogen without a subscription in six countries; US users get calls to businesses, Google Pay purchases and email or text hand-off. Each task runs in a dedicated, hardware-isolated VM.
- [Google finds the first attacker framework that turns patches into exploits with no human in the loop](https://cloud.google.com/blog/topics/threat-intelligence/agentic-threat-activity-crosses-a-significant-threshold) (Google Threat Intelligence, news, Security): GTIG found exploit_agent, a multi-agent LLM pipeline that diffs web-app patches, drafts exploits and runs them automatically. Google expects simple fully autonomous attacks within three months, so the window to patch n-days keeps shrinking.
- [Netflix: engineering the agent harness behind AI Discover](https://netflixtechblog.com/engineering-ai-discover-e244944cdc38) (Netflix Tech Blog, blog, Agents): How Netflix fits LLMs into a TV recommender without losing speed or safety: the harness plans each request, keeps picks grounded in real catalog titles, treats model output as untrusted and replays past requests to test prompt or model changes.
- [GitHub: building the Agent Host Protocol so agent sessions follow you across devices](https://github.blog/engineering/engineering-principles/building-the-agent-host-protocol-for-sessions-that-continue-across-devices/) (GitHub Engineering, blog, Protocols): Why a 400k-line editor extension gave way to an open protocol with reducer-based channel state, and what two independent hosts (TypeScript in VS Code, Rust at GitHub) revealed about its gaps. Libraries ship in six languages.
- [How SpaceXSI runs five Grok Bots that each own an accounting job end to end](https://x.ai/news/grok-bot-accounting) (xAI, blog, Agents): A concrete playbook for agents owning business processes: structured internal apps, a read-only operating manual per bot, approval gates for refunds, and a three-week onboarding. Invoicing went from about 24 hours to minutes.
