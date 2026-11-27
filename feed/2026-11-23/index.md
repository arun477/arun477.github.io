---
title: "Claude Ship lets agents approve PRs; OpenAI and Cisco open Shirudo"
date: 2026-11-23
updated: 2026-11-23T00:00:00Z
url: https://arun477.github.io/feed/2026-11-23/
author: Arun Arumugam
---

# Claude Ship lets agents approve PRs; OpenAI and Cisco open Shirudo

Agents move further into the software lifecycle: Anthropic's Claude Ship reviews, fixes and approves pull requests, and OpenAI and Cisco open-source a runtime for agent-written exploit shields. DeepMind shows agents finding formally verified quantum circuits.


- [Anthropic launches Claude Ship: agents that review, fix and approve pull requests](https://claude.com/resources/articles/introducing-claude-ship) (Anthropic, release, Agents): Code Review plus two beta agents, PR Steward and Claude Approvals, carry a PR through review, fixes and an approval decision under team policy. A real step toward agents merging code with no human in the loop.
- [OpenAI and Cisco open-source Shirudo, a runtime for agent-written eBPF shields](https://openai.com/index/introducing-shirudo) (OpenAI, release, Security): Agents write dynamic eBPF controls that block an exploit on a running Linux service without a restart, buying time to patch. In a test a Codex-generated shield stopped an exploit against live Elasticsearch.
- [DeepMind's Gemini 4 agents find cheaper quantum circuits, proved correct in Lean](https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/) (Google DeepMind, paper, Research): Agent teams worked from frozen specs and an external Lean checker, so gains could not come from weakened definitions. Up to 10.9x cheaper simulation circuits; code is open in google-deepmind/formal-quantum-computation.
- [Claude merges connectors and skills into one plugins system](https://x.com/claudeai/status/2124970294523945328) (Claude, news, Agents): One plugin can now bundle tool access and a skill, with a directory of 10,000+. Live on Free to Ultra plans, Team from Nov 30; this is the packaging unit to target if you ship Claude integrations.
- [Probing DNS at Cloudflare](https://blog.cloudflare.com/probing-dns-at-cloudflare/) (Cloudflare, blog, Infra): After a scheduling bug left record changes unpublished for hours while dashboards stayed green, the DNS team extended its Flamingo end-to-end tester to probe propagation from every data center against production.
- [Supercharging transformer residual connections](https://research.google/blog/supercharging-transformer-residual-connections/) (Google Research, blog, Research): DeepCrossAttention replaces plain residual sums with learned, depth-wise cross-attention over earlier layers, reaching the same quality up to 3x faster for a negligible parameter cost.
