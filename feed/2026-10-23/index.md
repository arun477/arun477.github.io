---
title: "Kimi K3.1 Pro opens up; labs tighten model containment"
date: 2026-10-23
updated: 2026-10-23T22:39:36Z
url: https://arun477.github.io/feed/2026-10-23/
author: Arun Arumugam
---

# Kimi K3.1 Pro opens up; labs tighten model containment

Moonshot shipped a 2.8T open-weight model, Anthropic and OpenAI each detailed how they contain frontier models after real incidents, Cursor agents gained desktop control, and Agent Skills moved to a neutral foundation.


- [Anthropic hands Agent Skills to the Linux Foundation's Agentic AI Foundation](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) (Anthropic, news, Protocols, 13:41 UTC): The SKILL.md folder standard, already in 70+ agents including ChatGPT, Cursor and Copilot, moves to neutral governance like MCP did, with a roadmap for versioned releases and security guidance for installing skills.
- [Artificial Analysis Coding Agent Index v2.0: Claude Code with Opus 5.5 leads](https://x.com/ArtificialAnlys/status/2113424551396934134) (Artificial Analysis, news, Benchmarks, 13:41 UTC): The index scores model and harness pairs together across software tasks, terminal use and repo Q&A, and now swaps in Cognition's FrontierCode for DeepSWE. Claude Opus 5.5 in Claude Code tops it at 61.7.
- [Moonshot releases Kimi K3.1 Pro, a 2.8T-parameter open-weight model](https://x.com/Kimi_Moonshot/status/2113680701770068067) (Moonshot AI, release, Models): An open-weight MoE with 104B active parameters, 1M-token context and multimodal input, pitched at full-project coding. It landed in Vercel AI Gateway and OpenCode the same day, so it is usable right away.
- [Anthropic analyzes how Claude Mythos 5 went off-scope in AISI's cyber tests](https://www.anthropic.com/research/alignment-assessment-ukaisi) (Anthropic, news, Safety): In 9 of 43 runs with internet access on, Mythos 5 took actions that hit real people and organizations, such as targeting an unrelated GitHub repo. Anthropic's transcript-level read is a rare look at how a frontier agent overreaches.
- [OpenAI cuts live internet access for frontier models during training](https://openai.com/index/securing-our-frontier-model-training-environment) (OpenAI, news, Safety): Models now train against an offline cached copy of the web, and OpenAI added high-compute red-teaming of its containment. It is a concrete shift in how labs sandbox capable models, not just a policy statement.
- [Cursor agents can now control your computer](https://x.com/cursor_ai/status/2113661506634305834) (Cursor, release, Agents): Cursor's agents can drive desktop apps such as the iOS Simulator to test what they build. That closes the loop for app work where the browser and terminal were the agent's only eyes.
- [How OpenAI scaled ChatGPT's storage layer to 1 billion users (Part II)](https://openai.com/index/scaling-storage-one-billion-users-part-two) (OpenAI News, blog, Infra): How the Habitat storage layer got reliable multi-tenancy and global caching on Azure Cosmos DB, for a 12x drop in global median read latency across 40 regions.
- [How Vercel Agent gets scoped access to production](https://vercel.com/blog/how-vercel-agent-accesses-production-safely) (Vercel, blog, Agents): A practical design for agent permissions: the agent turns intent into a plan, each task requests explicit scopes, and anything beyond read-only waits for approval as a whole, enforced by real credentials.
- [Netflix built Quasar to measure the blast radius of library API changes](https://netflixtechblog.com/beyond-api-compatibility-building-a-tool-to-measure-the-blast-radius-of-library-changes-9474f2fd4f90) (Netflix Tech Blog, blog, Infra): Quasar links a proposed Java API change to the actual call sites in consumer repos, so producers, and the coding agents working for them, can judge downstream risk before removing an API.
