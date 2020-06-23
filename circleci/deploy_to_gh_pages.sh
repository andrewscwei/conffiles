#!/bin/bash

# This script deploys a target directory from the working branch to a new
# `gh-pages` branch. Note that this would require you to have set up a user key
# in the project settings of CircleCI.

# Required environment variables:
# - GH_USER: Name of GitHub user to use for the commit
# - GH_PAGES_DIR: Directory (relative to project root) to deploy to GitHub Pages

GH_PAGES_DIR=${GH_PAGES_DIR:-.gh-pages}
GH_USER=${GH_USER:-$CIRCLE_PROJECT_USERNAME}
ORIGIN_URL=`git config --get remote.origin.url`

# Checkout new branch.
if [ `git branch | grep gh-pages` ]; then git branch -D gh-pages; fi
git checkout -b gh-pages

# Build and move generated files to root, then delete everything else.
npm run pages
find . -maxdepth 1 ! -name '.' ! -name '..' ! -name ${GH_PAGES_DIR} ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv ${GH_PAGES_DIR}/* .
rm -R ${GH_PAGES_DIR}/

# Push to gh-pages.
git config user.name "$GH_USER"
git config user.email "$GH_USER@users.noreply.github.com"
git add -fA
git commit --allow-empty -m "[SKIP CI] $(git log -1 --pretty=%B)"
git push -f $ORIGIN_URL gh-pages

echo "Successfully published docs to GitHub Pages"
