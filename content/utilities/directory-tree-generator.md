---
title: "llmdirtree: Directory Visualization and Context Generator for LLM Workflows"
date: 2025-03-15
lastmod: 2025-03-19
description: "A Python CLI tool that generates both directory trees and code context summaries optimized for LLM interactions"
summary: "Enhance your AI coding assistant experience with rich project context that respects privacy and security boundaries."
tags: ["python", "cli", "filesystem", "llm", "developer-tools", "security"]
categories: ["tools", "python", "llm"]
ShowToc: true
TocOpen: true
ShowCodeCopyButtons: true
weight: 1
---

# llmdirtree: Directory Visualization and Context Generator for LLM Workflows

`llmdirtree` is a specialized developer tool with two powerful capabilities:

1. **Directory Tree Visualization** - Creates clean, structured representations of your codebase
2. **LLM Context Generation** - Produces AI-powered summaries of your code while respecting security boundaries

Both features are designed to enhance interactions with Large Language Models when discussing or getting help with your code.

## Installation

Install directly from PyPI:

```bash
pip install llmdirtree
```

## Key Features

### Directory Tree Visualization

- **Clean, standardized output** with Unicode box-drawing characters
- **Intelligent filtering** to exclude irrelevant directories (`node_modules`, `.git`, etc.)
- **Efficient memory usage** by providing structural context without full codebase uploads
- **Full .gitignore integration** ensuring sensitive files are excluded from visualization

### LLM Context Generation

- **AI-powered code analysis** via OpenAI's API
- **Security-focused** with automatic `.gitignore` pattern recognition
- **Rich contextual summaries** of your codebase organized by directory
- **Intelligent large file handling** with automatic chunking and summarization
- **Customizable model selection** to choose your preferred OpenAI model
- **Dependency-free** implementation using system curl instead of heavy libraries

## Usage

### Basic Directory Tree

```bash
# Generate a simple directory tree
llmdirtree --root /path/to/project --output project_structure.txt
```

### With LLM Context Generation

```bash
# Generate both directory tree AND code context
llmdirtree --root /path/to/project --llm-context --openai-key YOUR_API_KEY
```

This creates two files:
- `directory_tree.txt` - Visual structure
- `llmcontext.txt` - AI-generated project overview and file summaries

### Advanced Options

```bash
# Exclude specific directories
llmdirtree --exclude node_modules .git venv dist

# Customize output locations
llmdirtree --output custom_tree.txt --context-output custom_context.txt

# Control file selection for context generation
llmdirtree --max-files 150 --llm-context

# Override gitignore protection (not recommended)
llmdirtree --ignore-gitignore --llm-context

# Specify OpenAI model (skips prompting)
llmdirtree --llm-context --model gpt-4
```

## Example Outputs

### Directory Tree

```
Directory Tree for: /project
Excluding: .git, node_modules, __pycache__, venv
--------------------------------------------------
project/
├── src/
│   ├── main.py
│   └── utils/
│       └── helpers.py
├── tests/
│   └── test_main.py
└── README.md
```

### LLM Context File

```markdown
# project-name

> A React web application for tracking personal fitness goals with a Node.js backend and MongoDB database.

## src/components/

- **Dashboard.jsx**: Main dashboard component that displays user fitness stats, recent activities, and goal progress.
- **WorkoutForm.jsx**: Form for creating and editing workout entries with validation and submission handling.

## src/utils/

- **api.js**: Contains functions for making API calls to the backend, handling authentication and data fetching.
- **formatters.js**: Utility functions for formatting dates, weights, and other fitness metrics consistently.
```

## Example Workflow

### Directory Tree Only

1. Generate your project structure:
   ```bash
   llmdirtree --root /path/to/project --output structure.txt
   ```

2. Include it in your LLM prompt:
   ```
   Here's my project structure:
   
   [paste content from structure.txt]
   
   I need help understanding how the components interact...
   ```

### With Full Context

1. Generate both structure and context:
   ```bash
   llmdirtree --root /path/to/project --llm-context
   ```

2. Include in your LLM prompt:
   ```
   Here's information about my project:
   
   [paste content from llmcontext.txt]
   
   Now I need help with implementing a new feature...
   ```

3. The LLM now has both structural and semantic understanding of your code.


### Large File Handling

One of the challenges when analyzing code for LLM context is dealing with large files that exceed token limits. llmdirtree now intelligently processes large files by:

1. **Automatic file chunking** - Breaking large files into semantically meaningful chunks
2. **Per-chunk summarization** - Analyzing each chunk independently
3. **Cohesive synthesis** - Creating a unified summary that captures the essence of the entire file

This approach ensures even large files like complex modules or extensive configuration are appropriately represented in your context.

### OpenAI Model Selection

llmdirtree offers flexible model selection to balance performance and cost:

- **Interactive selection** - By default, you'll be prompted once per run to select a model
- **Command-line specification** - Skip the prompt with `--model MODEL_NAME`
- **Sensible defaults** - Uses `gpt-3.5-turbo-16k` for batch processing and `gpt-3.5-turbo` for project overview

This flexibility allows you to choose the right model for your specific needs, whether optimizing for speed, token capacity, or analysis quality.

### .gitignore Support

The tool now fully respects .gitignore patterns for both the directory tree visualization and context generation:

- **Complete pattern recognition** - Supports all standard .gitignore syntax including wildcards
- **Directory-level protection** - Skips entire directories that match ignore patterns
- **Consistent application** - Same ignore logic applied to both tree visualization and context generation

This ensures sensitive files or directories are completely excluded from any visualization or analysis.

## Security Features

The tool takes security seriously:

- **Respects .gitignore patterns** to avoid exposing sensitive information
- **Excludes credentials and API keys** automatically
- **Zero dependencies** approach for core functionality
- **Configurable privacy** with options to control what's analyzed


For more implementation details or to contribute, check the [GitHub repository](https://github.com/arun477/llmdirtree).