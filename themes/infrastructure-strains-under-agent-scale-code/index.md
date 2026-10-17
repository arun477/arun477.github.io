---
title: "Infrastructure strains under agent-scale code"
rank: 5
status: rising
first_seen: 2026-10-06
last_updated: 2026-10-17
url: https://arun477.github.io/themes/infrastructure-strains-under-agent-scale-code/
author: Arun Arumugam
---

# Infrastructure strains under agent-scale code

Agents now write code faster than Git hosting was built for. GitHub reworked its Git storage and Anthropic built its own source control after merges grew more than tenfold. Teams building with agents should expect tooling built for human pace to become the bottleneck.

## Evidence

- [Redesigning source control at Anthropic](https://www.anthropic.com/engineering/redesigning-source-control) (Anthropic Engineering, blog, 2026-10-17): Merges grew more than tenfold as agents took on more work, so a seven-person team replaced Git with an in-house version control system in five months.
- [How Meta built Forum with AI-native engineering](https://engineering.fb.com/2026/10/15/ml-applications/how-meta-built-forum-ai-native-engineering/) (Meta Engineering, blog, 2026-10-15): How a Meta team built a new app with AI agents in its engineering workflow from day one. Practice at real scale, not a demo.
- [Building Git infrastructure for agent-scale development](https://github.blog/engineering/architecture-optimization/building-git-infrastructure-for-agent-scale-development/) (GitHub Engineering, blog, 2026-10-06): Agent-driven writes are straining shared Git storage. GitHub explains the architecture changes it is making to keep up.
