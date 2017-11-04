#!/usr/bin/env bash

rootDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"

cd $rootDir
echo "Building dist files..."
docker-compose run --rm website npm run build
echo "Done."
