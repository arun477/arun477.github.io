---
title: "Jupyter to LLM Extractor"
date: 2025-03-27
lastmod: 2025-03-27
description: "A Chrome extension that extracts content from Jupyter notebooks for more effective interactions with large language models"
summary: "Extract and format Jupyter notebook content for LLMs with support for cell filtering, templates, and selective extraction."
tags: ["jupyter", "chrome-extension", "llm", "data-science", "productivity", "developer-tools"]
categories: ["tools", "chrome-extensions", "llm"]
ShowToc: true
TocOpen: true
ShowCodeCopyButtons: true
weight: 1
---

A Chrome extension that extracts content from Jupyter notebooks for use with large language models.

## Features

- Extract both code and markdown cells
- Filter out empty cells
- Apply prompt templates 
- Select specific cells for extraction
- Copy to clipboard or download as text file
- Dark mode support

## Installation

> **Note:** This extension is not yet available on the Chrome Web Store.

### Manual Installation (Currently the only option)
1. Download the repository as a ZIP file and extract it
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top-right corner)
4. Click "Load unpacked" and select the extracted folder

## Usage

1. Navigate to any Jupyter notebook
2. Click the extension icon in your toolbar
3. Choose your extraction options:
   - Select which cell types to include
   - Choose a prompt template (optional)
   - Select specific cells (optional)
4. Click "Copy to Clipboard" or "Download as File"

## Development

The extension consists of four main components:

- `popup.html/js`: User interface
- `content.js`: Extracts notebook content from the page
- `background.js`: Handles file downloads
- `manifest.json`: Extension configuration


## Privacy Note

All content extraction happens locally in your browser. No notebook content is ever sent to any server. The extension only requires permissions to access the current tab and handle downloads.

## Source Code

The complete source code is available on [GitHub](https://github.com/arun477/notebook_extractor). Contributions, issues, and feature requests are welcome.
