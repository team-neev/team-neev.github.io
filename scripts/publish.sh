#!/usr/bin/env sh

set -e
set -x

rootDir=$(dirname $(readlink -f $0))"/.."

cd $rootDir/website/dist

if [ -d ".git" ]; then
    rm -rf .git
fi

git init
git config user.email 'team@team-neev.com'
git config user.name 'Team Neev'
git add .
git commit -m "Build the website"

git push --force --quiet "https://github.com/team-neev/team-neev.github.io.git" master:gh-pages
