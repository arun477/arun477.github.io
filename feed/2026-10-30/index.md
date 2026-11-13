---
title: "Malicious Claude Code extension hits Cursor's marketplace"
date: 2026-10-30
updated: 2026-10-30T22:36:09Z
url: https://arun477.github.io/feed/2026-10-30/
author: Arun Arumugam
---

# Malicious Claude Code extension hits Cursor's marketplace

A tampered Claude Code extension in Cursor's marketplace tried to install an SSH backdoor on up to 5,000 machines; affected users should update and check for compromise.


- **Spike.** [Cursor pulls a malicious Claude Code extension from its marketplace](https://cursor.com/blog/claude-code-extension-security-notice) (Cursor, news, Security, 13:33 UTC): A tampered Anthropic.claude-code 2.1.313 sat in Cursor's extension marketplace for about 11 hours and tried to plant an SSH backdoor; up to 5,000 users got it. Update to 2.1.314 and check the listed indicators.
- [OpenAI and Anthropic models each claim a refutation of the Exponential Time Hypothesis](https://github.com/openai/math/blob/main/lean/docs/378.md) (OpenAI, paper, Research): Both labs say internal models independently found a subexponential algorithm for counting 3-SAT solutions on Oct 16, with Lean proofs. Impagliazzo, Paturi and Williams are now leading an open review; the result is asymptotic only, with no practical speedup.
- [Anthropic drops the 5-hour usage limit for verified Claude Ultra accounts and renames its Max plans](https://x.com/claudeai/status/2116220869479428500) (Claude, news, Agents): The $200 plan, now called Ultra, loses the 5-hour session cap for verified accounts while weekly limits stay. Heavy Claude Code users can run long agent sessions without hitting the rolling window.
- [OpenAI launches Private Intelligence, with Private Inference on confidential computing in API preview](https://openai.com/business/private-intelligence/) (OpenAI, news, Infra): Bundles zero data retention, agent permission and approval controls, and a new confidential-computing inference path into one offering. It targets teams that could not send sensitive data to frontier models before.
- [OpenAI will honor a shared robots.txt signal for opting out of AI training](https://openai.com/index/helping-websites-express-ai-training-preferences) (OpenAI, news, Policy): Built on the IETF AI Preferences work, one rule in robots.txt will tell all participating providers whether a site's content can be used for foundation model training, instead of per-crawler rules. OpenAI plans to implement it in the coming months.
- [Tracking exploitation and patching of eMudhra's weak CA keys](https://blog.cloudflare.com/emudhra-patching/) (Cloudflare, blog, Security): Cloudflare saw forged certificates within hours of disclosure and, from 50 million probes, found many bots, WebViews and large networks still trust the trivially recoverable keys. AI-assisted code analysis mapped affected systems in four hours.
