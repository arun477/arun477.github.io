---
title: "AI agents find a Brotli RCE; patch Node.js, Bun and Python"
date: 2026-10-24
updated: 2026-10-24T00:00:00Z
url: https://arun477.github.io/feed/2026-10-24/
author: Arun Arumugam
---

# AI agents find a Brotli RCE; patch Node.js, Bun and Python

OpenAI's containment red-team surfaced CVE-2026-111497 in Google's Brotli decoder, now patched across major runtimes.


- [OpenAI's agent red-teaming turned up a Brotli RCE hitting Node.js, Bun and Envoy](https://x.com/OpenAI/status/2113766354386084338) (OpenAI, news, security, 13:39 UTC): Agents probing OpenAI's training sandbox found CVE-2026-111497, a Brotli decoder bug that lets crafted compressed data run code. Anything decoding untrusted br data (Node or Bun fetch, Python with brotli, Envoy) should upgrade to Brotli 1.2.1 or Node 24.22.1.
