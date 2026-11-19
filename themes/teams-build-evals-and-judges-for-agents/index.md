---
title: "Teams build evals and judges for agents"
rank: 10
status: rising
first_seen: 2026-10-14
last_updated: 2026-11-18
url: https://arun477.github.io/themes/teams-build-evals-and-judges-for-agents/
author: Arun Arumugam
---

# Teams build evals and judges for agents

Engineering teams are publishing how they test systems whose output is open-ended. Netflix runs LLM judges in production and aligns them with human ratings over time, Vercel lays out an agent test pyramid with seeded task environments and per-constraint verifiers, and Ramp replaced tests with deliberating LLM judges for its internal coding benchmark, lifting judge agreement from 54% to 94%. Reliable evaluation is becoming its own engineering discipline, and a prerequisite for shipping agents with confidence.

## Evidence

- [Ramp: making LLM judges agree when grading coding agents](https://builders.ramp.com/post/building-llm-judges-to-judge-llms) (Ramp Engineering, blog, 2026-11-18): Ramp replaced tests with LLM judges for its internal SWE benchmark. Splitting 'list the differences' from 'do they matter', then letting judges deliberate, lifted agreement from 54% to 94%, and engineers backed about 90% of verdicts.
- [Vercel: how to build end-to-end evals for agents using your API or CLI](https://vercel.com/blog/agent-evals) (Vercel, blog, 2026-11-16): A worked method for testing software whose users are agents: a test pyramid by LLM-call count, seeded task environments, per-constraint verifiers, and choosing pass@k versus pass^k by what a failure costs.
- [The lifecycle of LLM-as-a-judge: building, aligning and monitoring at scale](https://netflixtechblog.com/the-lifecycle-of-llm-as-a-judge-building-aligning-and-monitoring-at-scale-c95bd8283508) (Netflix Tech Blog, blog, 2026-10-14): Netflix covers running LLM judges in production, from building them to aligning them with human judgment and monitoring them over time. Useful for anyone evaluating agents.
