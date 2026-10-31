---
title: "Infrastructure strains under agent-scale code"
rank: 6
status: rising
first_seen: 2026-10-06
last_updated: 2026-10-29
url: https://arun477.github.io/themes/infrastructure-strains-under-agent-scale-code/
author: Arun Arumugam
---

# Infrastructure strains under agent-scale code

Agents now write code faster than Git hosting and review were built for. GitHub moved almost every repository to Azure under agent-driven load, Anthropic built its own source control after merges grew more than tenfold, and agent hours now outnumber staff hours six to one, leaving human review as the bottleneck. Teams are answering with automation: Cloudflare cut its per-review cost by 68% after it doubled, and Meta now has LLMs write just-in-time tests for every diff, catching 74 serious privacy bugs before they landed. Tooling built for human pace is giving way first.

## Evidence

- [How Meta runs LLM-generated just-in-time tests on every diff, catching 74 serious privacy bugs](https://engineering.fb.com/2026/10/29/security/catching-bugs-before-they-land-jittestings-human-on-the-loop-approach-at-full-scale/) (Meta Engineering, blog, 2026-10-29): Meta moved its Catching JiTTests from research into production infrastructure: LLMs write tests targeted at each code change before it lands, with engineers reporting a 60% true-positive rate. In the first half of 2026 it helped cut privacy SEVs by 20%.
- [How GitHub moved almost every Git repository to Azure under agent-driven load](https://github.blog/engineering/architecture-optimization/the-bridge-to-agent-scale-git-infrastructure/) (GitHub Engineering, blog, 2026-10-21): Agent traffic pushed GitHub's data centers to their power limits. A detailed account of replicating 99.99999% of repos into Azure and changing quorum writes so the busiest ones can follow.
- [How Cloudflare cut its AI code reviewer's cost by 68%](https://blog.cloudflare.com/obsessive-inference-optimization/) (Cloudflare, blog, 2026-10-19): Per-review cost doubled as models got better and diffs got bigger; Cloudflare traced where the tokens went and brought a review from $2.43 to $0.77 and median time from 4 minutes to 92 seconds. Useful numbers for anyone running agents at scale.
- [How employment is changing at Anthropic as agent hours pass human hours](https://www.anthropic.com/research/employment-at-anthropic) (Anthropic Research, paper, 2026-10-18): Internal data shows agent hours outnumbering employee hours six to one, output per person rising after people adopt coding agents, and fewer junior technical hires. Human attention to review agent work is now the bottleneck.
- [Redesigning source control at Anthropic](https://www.anthropic.com/engineering/redesigning-source-control) (Anthropic Engineering, blog, 2026-10-17): Merges grew more than tenfold as agents took on more work, so a seven-person team replaced Git with an in-house version control system in five months.
- [How Meta built Forum with AI-native engineering](https://engineering.fb.com/2026/10/15/ml-applications/how-meta-built-forum-ai-native-engineering/) (Meta Engineering, blog, 2026-10-15): How a Meta team built a new app with AI agents in its engineering workflow from day one. Practice at real scale, not a demo.
- [Building Git infrastructure for agent-scale development](https://github.blog/engineering/architecture-optimization/building-git-infrastructure-for-agent-scale-development/) (GitHub Engineering, blog, 2026-10-06): Agent-driven writes are straining shared Git storage. GitHub explains the architecture changes it is making to keep up.
