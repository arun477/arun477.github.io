---
title: "FireScroll: Short Videos That Teach"
date: 2026-03-23
description: "Say a topic. An agent researches the web, writes a cited script, narrates it and renders a scrollable feed of short vertical videos."
tags: ["ai","agents","voice","video"]
url: https://arun477.github.io/posts/firescroll/
author: Arun Arumugam
---

# FireScroll: Short Videos That Teach


Brain rot, but educational. Say a topic. FireScroll researches it, writes a script with citations, narrates it and renders short vertical videos into a feed you can scroll.

![FireScroll](https://arun477.github.io/images/firescroll.jpg)

**Demos:** [Overview](https://www.youtube.com/watch?v=485MsI5a450) · [Voice agent](https://youtu.be/c6eidnyc-Uo) · [Live](https://www.youtube.com/watch?v=vs4SbNTQTww)

## How it works

1. **Voice in.** An ElevenLabs voice agent takes the topic and calls Firecrawl as a tool.
2. **Research.** Firecrawl searches and scrapes the web. GPT-4o ranks the sources and writes a segmented script with citations.
3. **Narrate.** ElevenLabs voices it in any of 31 languages, over AI-generated music.
4. **Render.** Remotion composes AI backgrounds, slow zooms and word-synced captions (Whisper timestamps) into vertical video.
5. **Scroll.** Videos land in an auto-playing feed.

## Stack

Firecrawl, ElevenLabs, OpenAI (GPT-4o, DALL·E 3, Whisper), Remotion, Celery, SQLite, Docker.

Built for the Firecrawl × ElevenLabs hackathon. Code: [arun477/firescroll](https://github.com/arun477/firescroll) (MIT).

