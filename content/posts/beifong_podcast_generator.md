---
title: "Beifong: AI-Powered Content Curation and Podcast Generation"
date: 2025-06-07T00:00:00.000Z
draft: false
categories: [projects]
tags: [ai, automation, podcast, content-curation, python, social-media]
cover: {image: images/beifong/image.png, alt: Beifong Banner, caption: Beifong - AI Content Curation Platform, hiddenInList: true}
ShowToc: true
TocOpen: true
ShowCodeCopyButtons: true
---

## What It Does

**Beifong** is an AI content curation platform that monitors your feeds, analyzes content, and generates podcasts from the stuff you actually care about. Named after Toph Beifong.

It handles RSS feeds, social media scraping, content analysis, and converts everything into audio content. Basically automates the process of finding good content and turning it into podcasts.

{{< rawhtml >}}
<div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGoUfv8ICM/L34r-foQtTps02XXeUOUYA/watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
{{< /rawhtml >}}

**Demo:** [Watch on YouTube](https://www.youtube.com/watch?v=dB8FZY3x9EY)

## Core Features

### AI Content Processing
- Semantic search using FAISS
- Content analysis and categorization
- Social media monitoring (X.com, Facebook)
- Sentiment analysis

{{< figure src="/images/beifong/image (1).png" alt="Podcasts Library" caption="Podcasts Library" >}}

### Content Collection
- RSS feed monitoring
- Social media scraping
- Web page processing
- Browser automation with Playwright

### Podcast Generation
- AI script generation from curated content
- Multiple TTS engines (OpenAI, ElevenLabs, Kokoro)
- Automatic cover generation
- Audio processing
- Chat assistant for interactive podcast creation

### Social Media Analysis
- Sentiment tracking
- Topic categorization
- Engagement insights
- Trend detection

### Voice Options
- **Commercial**: OpenAI TTS, ElevenLabs
- **Open Source**: Kokoro, with more engines planned

## Awards

Beifong was part of the [Global Agent Hackathon (May 2025)](https://github.com/global-agent-hackathon/global-agent-hackathon-may-2025/pull/129) and won:
- **🥉 3rd Place Overall Agent**
- **🥇 1st Prize Browser Use Agent**

## Usage

Three interaction methods:
1. Web UI for content management
2. API for custom integrations
3. Automated scheduling for hands-off processing

## Key Components

### Content Workflow
1. Content discovery from RSS/social feeds
2. AI analysis for quality and relevance
3. Automatic curation and organization
4. Podcast script generation and audio production

### Social Media Monitoring
- Authenticated browser sessions for platform access
- Real-time feed analysis
- Content categorization and sentiment tracking
- Scheduled collection and insights generation

## Get Started

For installation, setup, and technical details, check the repository:

**Repository**: [https://github.com/arun477/beifong](https://github.com/arun477/beifong)

Cloud version with additional features coming soon.