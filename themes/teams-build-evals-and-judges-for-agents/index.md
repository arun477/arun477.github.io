---
title: "Teams build evals and judges for agents"
rank: 9
status: rising
first_seen: 2026-10-14
last_updated: 2026-11-27
url: https://arun477.github.io/themes/teams-build-evals-and-judges-for-agents/
author: Arun Arumugam
---

# Teams build evals and judges for agents

Engineering teams are publishing how they test systems whose output is open-ended. Netflix aligns production LLM judges with human ratings, Ramp lifted judge agreement from 54% to 94% by letting judges deliberate, and Hugging Face published a guide to building and maintaining agent benchmarks. Spotify cautions that offline evals alone hold only under strong assumptions, and Google Research shows assistants reason worse about people when they hear only the user's side. Reliable evaluation is becoming its own engineering discipline, and a prerequisite for shipping agents with confidence.

## Evidence

- [Google Research: assistants reason worse about people when they only hear the user's side](https://research.google/blog/verifiable-social-reasoning-for-llm-assistants/) (Google Research, blog, 2026-11-27): Multi-agent simulations with hidden motives give verifiable ground truth; across 12 LLMs, models adopt the user's biased framing and longer chats don't help. Framework and 20K-example dataset are open.
- [How to build and maintain an agentic evaluation](https://huggingface.co/blog/agentic-evals) (Hugging Face, blog, 2026-11-24): A practical guide to designing, validating and open-sourcing agent benchmarks, including how public review caught broken tasks and a worked example from a physics lab deployment.
- [Spotify: when you can ship an AI change on offline evals alone](https://engineering.atspotify.com/2026/11/when-can-you-ship-on-offline-evals-alone/) (Spotify Engineering, blog, 2026-11-19): A careful look at skipping A/B tests for LLM features: it only works under strong, drifting assumptions, and judge noise can make a 60% offline-online link look like 24%.
- [Ramp: making LLM judges agree when grading coding agents](https://builders.ramp.com/post/building-llm-judges-to-judge-llms) (Ramp Engineering, blog, 2026-11-18): Ramp replaced tests with LLM judges for its internal SWE benchmark. Splitting 'list the differences' from 'do they matter', then letting judges deliberate, lifted agreement from 54% to 94%, and engineers backed about 90% of verdicts.
- [Vercel: how to build end-to-end evals for agents using your API or CLI](https://vercel.com/blog/agent-evals) (Vercel, blog, 2026-11-16): A worked method for testing software whose users are agents: a test pyramid by LLM-call count, seeded task environments, per-constraint verifiers, and choosing pass@k versus pass^k by what a failure costs.
- [The lifecycle of LLM-as-a-judge: building, aligning and monitoring at scale](https://netflixtechblog.com/the-lifecycle-of-llm-as-a-judge-building-aligning-and-monitoring-at-scale-c95bd8283508) (Netflix Tech Blog, blog, 2026-10-14): Netflix covers running LLM judges in production, from building them to aligning them with human judgment and monitoring them over time. Useful for anyone evaluating agents.
