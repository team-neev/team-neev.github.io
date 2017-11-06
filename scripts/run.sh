#!/bin/bash
set -e
set -u
set -o pipefail

COMMAND=${1:-"help"}

function build-prod() {
    npm install
    npm run build
}

function build-dev() {
    npm install
}

function start-dev() {
    npm run server
}

function npm() {
    docker run -it --rm -v $(pwd):/project -w /project -p 3000:3000 node:9 npm $@
}

function help() {
    echo "Usage: $0 "$(compgen -A function | tr "\\n" "|" | sed 's/|$//')
}

if [ "$(type -t $COMMAND)" != "function" ]; then
    help
    exit 1
fi

$COMMAND ${@:2}
