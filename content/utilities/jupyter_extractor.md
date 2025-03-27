---
title: "Jupyter to LLM Extractor: Streamlining Notebook Content for AI Workflows"
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

## The Problem: Feeding Notebooks to LLMs

Working with Jupyter notebooks and large language models often involves several manual steps:

1. Copying cell contents while excluding outputs
2. Cleaning up formatting issues
3. Removing empty cells and boilerplate
4. Creating appropriate prompts for context

This process can be time-consuming, especially for large notebooks or when working with multiple files.

## Jupyter to LLM Extractor

Jupyter to LLM Extractor is a Chrome extension that automatically processes Jupyter notebook content into formats optimized for LLM consumption. It creates clean, formatted text that can be directly copied to any LLM or downloaded for later use.

The extension supports classic Jupyter notebooks, JupyterLab, and raw `.ipynb` files displayed in browsers (like GitHub or Gist views).

## Key Features

- **Smart Cell Extraction**: Extract code and markdown cells while skipping outputs
- **Cell Filtering**: Choose to include or exclude code/markdown cells 
- **Clean Format**: Automatically removes empty cells and preserves code formatting
- **Prompt Templates**: Apply pre-defined templates like "Explain this code" or create custom ones
- **Cell Selection**: Manually select specific cells for targeted questions
- **Copy or Download**: Direct to clipboard or download as text file
- **Dark Mode Support**: Works seamlessly in light or dark environments

## How It Works

The extension uses DOM manipulation and pattern detection to identify and extract content from Jupyter notebooks in different interfaces. It can:

1. Extract directly from rendered Jupyter UI elements
2. Parse raw JSON from `.ipynb` files
3. Fall back to generic code/text block detection when needed

Simplified workflow:

```
User clicks extension → Select extraction options → Extension scans page for notebook content → Processes and formats cells → Delivers as clipboard content or text file
```

## Practical Use Cases

### Debugging Complex Code

When a deep learning model is failing mysteriously, extract only the relevant model definition and training cells to send to an LLM for debugging suggestions.

### Understanding Legacy Notebooks

For complex analysis notebooks, extract the entire content and ask an LLM to explain the approach and methodology.

### Learning New Techniques

Extract interesting notebooks implementing unfamiliar techniques and ask an LLM to break down how they work, step by step.

### Improving Code Quality

Extract notebook code and use the "Improve this code" template to get refactoring suggestions while maintaining the original functionality.

## Installation & Setup

### From Chrome Web Store

1. Visit the [Chrome Web Store page](#) (coming soon)
2. Click "Add to Chrome"

### Manual Installation (Developer Mode)

For installation from source:

1. Clone the [GitHub repository](https://github.com/arun477/notebook_extractor)
2. Open Chrome's Extension Management page (`chrome://extensions/`)
3. Enable Developer Mode
4. Click "Load unpacked" and select the extension directory

## Privacy Note

All content extraction happens locally in your browser. No notebook content is ever sent to any server. The extension only requires permissions to access the current tab and handle downloads.

## Source Code

The complete source code is available on [GitHub](https://github.com/arun477/notebook_extractor). Contributions, issues, and feature requests are welcome.
