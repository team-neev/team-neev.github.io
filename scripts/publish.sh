#!/usr/bin/env bash

rootDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../.." && pwd )"

if [ ! -d "${rootDir}/team-neev.github.io" ]; then
    echo "Unable to locate the \"team-neev.github.io\" repo. Please clone it at the same dir level as the website repo."
    exit 1
fi

cd $rootDir
rsync -av --delete --exclude README.md --exclude .gitignore ${rootDir}/website/dist/* ${rootDir}/team-neev.github.io/