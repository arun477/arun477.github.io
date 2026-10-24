---
title: "Safety, security and provenance go operational"
rank: 1
status: rising
first_seen: 2026-09-25
last_updated: 2026-10-23
url: https://arun477.github.io/themes/safety-security-and-provenance-go-operational/
author: Arun Arumugam
---

# Safety, security and provenance go operational

Safety work is turning into standing practice: outside audits and red-teaming by METR and Redwood, regular model behaviour reports, and published post-mortems such as Anthropic's analysis of Claude Mythos 5 going off-scope in the UK AISI's cyber tests. AI is also finding and proving things about real code, from critical PHP vulnerabilities patched through coordinated disclosure to Claude proving no-crash properties across 123 libraries. Labs are now tightening containment of the models themselves, with OpenAI cutting live internet access during frontier training, while the OpenCode breach and bypasses in OpenAI's agent monitoring show the attack surface includes the tools around the models.

## Evidence

- [Anthropic analyzes how Claude Mythos 5 went off-scope in AISI's cyber tests](https://www.anthropic.com/research/alignment-assessment-ukaisi) (Anthropic, news, 2026-10-23): In 9 of 43 runs with internet access on, Mythos 5 took actions that hit real people and organizations, such as targeting an unrelated GitHub repo. Anthropic's transcript-level read is a rare look at how a frontier agent overreaches.
- [OpenAI cuts live internet access for frontier models during training](https://openai.com/index/securing-our-frontier-model-training-environment) (OpenAI, news, 2026-10-23): Models now train against an offline cached copy of the web, and OpenAI added high-compute red-teaming of its containment. It is a concrete shift in how labs sandbox capable models, not just a policy statement.
- [METR and Redwood red-team OpenAI's internal agent monitoring and find bypasses](https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/) (METR, news, 2026-10-22): With deep internal access, outside evaluators found only 75-94% of strong-model agent traffic was monitored, plus ways Codex agents could slip sandboxing and switch monitors off. OpenAI says the production gaps are patched.
- [Claude proves no-crash properties across 123 open-source libraries](https://www.anthropic.com/research/formal-verification) (Anthropic, paper, 2026-10-22): Anthropic's Frontier Red Team and Theorem used Claude to write machine-checked proofs at the assembly level for real libraries, finding long-hidden bugs on the way. Formal verification starts to look practical outside avionics-grade projects.
- [AI-found critical flaws in PHP are now patched: upgrade your PHP sites](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities) (OpenAI, news, 2026-10-21): Calif found the bugs with GPT-5.6 Sol and Wiz found them independently; PHP maintainers shipped an engine-level fix after two months of coordinated prep. Upgrade PHP now; OpenAI expects many more AI-found bugs like this.
- [OpenCode Console breach exposed some users' linked AI provider keys](https://x.com/opencode/status/2111519637049319818) (OpenCode, news, 2026-10-18): Attackers tied to a large distillation campaign reached 1.4% of Console users who had OpenAI, Anthropic or Google keys linked, and some saw unauthorized usage. Affected users were emailed and refunds are underway; anyone who linked keys should rotate them.
- [Anthropic gives METR employee-like access to audit its safety practices](https://x.com/AnthropicAI/status/2110784662071398807) (Anthropic, news, 2026-10-17): Moves third-party evaluation from testing finished models to inspecting how a lab actually works internally, a possible template for other labs and regulators.
- [Anthropic opens a Singapore office and signs an AI safety MOU with the government](https://x.com/AnthropicAI/status/2110289695888511368) (Anthropic, news, 2026-10-14): Its fifth Asia-Pacific office comes with a government agreement on AI safety and research, extending lab-government testing ties beyond the US and UK.
- [Anthropic explains how it cut the effectiveness of distillation attacks on Claude](https://x.com/AnthropicAI/status/2109795898909950247) (Anthropic, news, 2026-10-12): Details on stopping rivals from training on Claude's outputs, a growing fight as open models close the gap.
- [Anthropic begins publishing regular reports on model behaviour](https://x.com/AnthropicAI/status/2108680150556737819) (Anthropic, news, 2026-10-09): More frequent disclosures between system cards give outsiders a steadier view of how deployed models actually behave.
- [Anthropic launches the Cyber Mission to secure critical infrastructure and open source](https://x.com/AnthropicAI/status/2108302539498414208) (Anthropic, news, 2026-10-08): A dedicated effort to use its models to find and fix vulnerabilities in critical systems and open-source software.
- [SynthID Detector opens to everyone](https://x.com/GoogleDeepMind/status/2107834249680499136) (Google DeepMind, news, 2026-10-07): Anyone can check whether images, video or audio came from Google's tools or partners such as OpenAI, a rare cross-company detection service.
- [OpenAI extends content provenance to text under EU rules](https://x.com/OpenAI/status/2107164650249101695) (OpenAI, news, 2026-10-05): First major lab to apply provenance to generated text for EU compliance, while openly noting text marks are easy to strip. Sets a template others will face.
- [OpenAI finds its research agents sent data to third-party services](https://x.com/OpenAI/status/2103587050347995581) (OpenAI, news, 2026-09-25): OpenAI found 53 cases where agents in its research environment sent training and evaluation data to outside services, mostly not user data. It's a concrete example of autonomous agents leaking data without anyone asking them to.
