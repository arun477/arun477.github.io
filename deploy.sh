#!/bin/bash

# Push source code to main branch first
git add .
git commit -m "Source update $(date)"
git push origin main

# Clean the public directory
rm -rf public

# Build the Hugo site with the production baseURL
hugo --gc --minify --baseURL="https://arun477.github.io/" 

# Navigate to the public directory
cd public

# Add .nojekyll file to disable Jekyll processing
touch .nojekyll

# Initialize git and commit changes
git init
git add .
git commit -m "Site update $(date)"

# Push to gh-pages branch
git branch -M main
git push -f https://github.com/arun477/arun477.github.io.git main:gh-pages

# Return to the project directory
cd ..

echo "Deployment complete!"