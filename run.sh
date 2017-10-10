#!/bin/bash
set -e
set -u
set -o pipefail

COMMAND=${1:-"help"}

function start() {
    docker-compose up -d

    echo " ---- Browse to http://localhost:80 --- "
}

function stop() {
    docker-compose stop
}

function help() {
    echo "Usage: $0 "$(compgen -A function | tr "\\n" "|" | sed 's/|$//')
}

if [ "$(type -t $COMMAND)" != "function" ]; then
    help
    exit 1
fi

$COMMAND ${@:2}
