---
title: "Directory Tree Generator"
date: 2025-03-15
description: "A Python utility to recursively generate directory tree structures and save them to text files"
summary: "Efficiently traverse directories, exclude specified folders like node_modules and __pycache__, and generate a clean tree visualization in a text file."
tags: ["python", "utility", "filesystem", "directory", "tree"]
categories: ["utilities", "python", "llm assisted generation"]
ShowToc: true
TocOpen: true
ShowCodeCopyButtons: true
weight: 1
---

# Directory Tree Generator

This Python utility recursively traverses directories starting from a specified root folder and generates a clean tree structure visualization. It's designed to be both efficient and user-friendly, with options to exclude specific directories and customize the output file.

## Features

- 🌳 **Clean Visualization**: Creates a human-readable/llm directory tree with proper indentation and connecting lines
- 🚫 **Exclusion Filters**: Easily exclude directories like `node_modules`, `__pycache__`, `.git`, etc.
- 💾 **File Output**: Saves the tree structure to a text file instead of just console output
- ⚡ **Performance Optimized**: Uses efficient data structures and minimizes filesystem operations

## The Code

Save this as `dirtree.py`:

```python
import os
import argparse
from typing import Set, TextIO

def write_directory_tree(file: TextIO, root_dir: str, exclude_dirs: Set[str], prefix: str = ""):
    """
    Write a directory tree structure to a file, excluding specified directories.
    """
    try:
        # Get items in the directory, excluding those in exclude_dirs
        items = []
        for item in sorted(os.listdir(root_dir)):
            if item in exclude_dirs:
                continue
            
            path = os.path.join(root_dir, item)
            is_dir = os.path.isdir(path)
            items.append((item, path, is_dir))
    except PermissionError:
        file.write(f"{prefix}[Permission Denied]\n")
        return
    except FileNotFoundError:
        file.write(f"{prefix}[Directory Not Found]\n")
        return
    
    # Process each item
    for i, (item, path, is_dir) in enumerate(items):
        is_last = i == len(items) - 1
        
        # Write the item with appropriate connectors
        connector = "└── " if is_last else "├── "
        file.write(f"{prefix}{connector}{item}" + ("/" if is_dir else "") + "\n")
        
        # If it's a directory, recursively write its contents
        if is_dir:
            # Set the prefix for the next level
            next_prefix = prefix + ("    " if is_last else "│   ")
            write_directory_tree(file, path, exclude_dirs, next_prefix)

def main():
    # Parse command line arguments
    parser = argparse.ArgumentParser(description="Generate a directory tree structure")
    parser.add_argument("--root", default=".", help="Root directory to start from (default: current directory)")
    parser.add_argument("--exclude", nargs="+", default=["node_modules", "__pycache__", ".git", "venv"], 
                        help="Directories to exclude (default: node_modules, __pycache__, .git, venv)")
    parser.add_argument("--output", default="directory_tree.txt", 
                        help="Output file name (default: directory_tree.txt)")
    args = parser.parse_args()
    
    # Convert exclude_dirs to a set for O(1) lookups
    exclude_dirs = set(args.exclude)
    
    # Determine absolute path for root directory
    root_dir = os.path.abspath(args.root)
    
    # Get the directory name
    dir_name = os.path.basename(root_dir)
    if not dir_name:  # Handle case of root directory
        dir_name = root_dir
    
    # Write the tree to the specified file
    with open(args.output, 'w', encoding='utf-8') as f:
        f.write(f"Directory Tree for: {root_dir}\n")
        f.write(f"Excluding: {', '.join(sorted(exclude_dirs))}\n")
        f.write("-" * 50 + "\n")
        f.write(f"{dir_name}/\n")
        write_directory_tree(f, root_dir, exclude_dirs)
    
    print(f"Directory tree has been saved to: {args.output}")

if __name__ == "__main__":
    main()
```

## Usage

The script is designed to be straightforward to use. Here are some common usage patterns:

### Basic Usage

Run from your current directory, using all default settings:

```bash
python dirtree.py
```

This will:
- Start from the current directory
- Exclude `node_modules`, `__pycache__`, `.git`, and `venv` directories
- Save the tree to `directory_tree.txt` in the current directory

### Custom Root Directory

Specify a different starting directory:

```bash
python dirtree.py --root /path/to/your/project
```

### Custom Exclusions

Exclude specific directories (replaces the default exclusions):

```bash
python dirtree.py --exclude node_modules dist .cache build
```

### Custom Output File

Save the tree to a specific file:

```bash
python dirtree.py --output project_structure.txt
```

### Combining Options

You can combine all options as needed:

```bash
python dirtree.py --root /path/to/project --exclude node_modules __pycache__ .git dist --output project_map.txt
```

## How It Works

The script works by:

1. Processing command-line arguments to determine the root directory, exclusions, and output file
2. Converting the exclusion list to a set for efficient lookups
3. Opening the output file and writing the header information
4. Recursively traversing the directory structure:
   - For each directory level, it sorts the contents alphabetically
   - It skips any directories that match the exclusion criteria
   - It uses special characters to create the tree visualization (├──, └──, │, etc.)
   - It appends a "/" to directory names for clarity