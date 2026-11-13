---
title: "AI-found PHP flaws patched; Anthropic launches Claude Duet"
date: 2026-10-21
updated: 2026-10-21T22:39:29Z
url: https://arun477.github.io/feed/2026-10-21/
author: Arun Arumugam
---

# AI-found PHP flaws patched; Anthropic launches Claude Duet

OpenAI coordinated fixes for critical PHP vulnerabilities its models helped find, so PHP sites should upgrade now. Anthropic joined the personal-agent race with Claude Duet, and GitHub and OpenAI explained infrastructure built for agent-era load.


- **Spike.** [AI-found critical flaws in PHP are now patched: upgrade your PHP sites](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities) (OpenAI, news, Security, 22:39 UTC): Calif found the bugs with GPT-5.6 Sol and Wiz found them independently; PHP maintainers shipped an engine-level fix after two months of coordinated prep. Upgrade PHP now; OpenAI expects many more AI-found bugs like this.
- [Anthropic opens a research preview of Claude Duet, a proactive personal agent](https://claude.com/resources/articles/claude-duet) (Anthropic, release, Agents): Anthropic's entry into always-on personal agents: Duet surfaces what needs attention, keeps working when you step away and asks before acting. Waitlist for US Pro and Max users, on iOS, Android and claude.ai.
- [OpenAI models and Codex are coming to Google Cloud](https://openai.com/index/openai-models-google-cloud) (OpenAI, news, Infra, 13:42 UTC): OpenAI's frontier models and Codex will land in Google Cloud's Model Garden in the coming weeks, sold via Google Cloud Marketplace, and later in Antigravity and Gemini Agent. Google Cloud teams get OpenAI models on their existing bill.
- [How GitHub moved almost every Git repository to Azure under agent-driven load](https://github.blog/engineering/architecture-optimization/the-bridge-to-agent-scale-git-infrastructure/) (GitHub Engineering, blog, Infra): Agent traffic pushed GitHub's data centers to their power limits. A detailed account of replicating 99.99999% of repos into Azure and changing quorum writes so the busiest ones can follow.
- [How OpenAI built ChatGPT's ad stack around an LLM orchestrator](https://openai.com/index/building-chatgpt-ad-stack) (OpenAI, blog, Infra): A post-trained LLM calls retrieval, ranking, relevance and auction tools across multi-turn sessions, in a service kept separate from answer generation. A concrete design for putting ranking systems inside agentic chat.
