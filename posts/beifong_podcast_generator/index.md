---
title: "Beifong: AI-Powered Content Curation and Podcast Generation"
date: 2025-06-07
description: "Point it at your feeds. It collects RSS and social posts, curates what matters to you and turns it into podcasts you can listen to."
tags: ["ai","automation","podcast","content-curation","python","social-media"]
url: https://arun477.github.io/posts/beifong_podcast_generator/
author: Arun Arumugam
---

# Beifong: AI-Powered Content Curation and Podcast Generation


## What It Does

**Beifong** is an AI content curation platform that monitors your feeds, analyzes content, and generates podcasts from the stuff you actually care about. Named after Toph Beifong.

It handles RSS feeds, social media scraping, content analysis, and converts everything into audio content. Built for the Global Agent Hackathon (May 2025), where it placed 3rd overall and 1st in browser use agent category.

![Beifong podcast player](https://arun477.github.io/images/beifong.jpg)

**Demo:** [Watch on YouTube](https://www.youtube.com/watch?v=dB8FZY3x9EY) · [Slides](https://www.canva.com/design/DAGoUfv8ICM/L34r-foQtTps02XXeUOUYA/watch)

## Core Features

### AI Content Processing
- Semantic search using FAISS
- Content analysis and categorization
- Social media monitoring (X.com, Facebook)
- Sentiment analysis

![Podcasts library](https://arun477.github.io/images/beifong-library.jpg "Podcasts library")

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
