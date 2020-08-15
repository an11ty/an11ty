#!/usr/bin/env bash

# Make all the installed CLI tools available.
# PATH=$PATH:./node_modules/.bin

WHEREISTHIS=`echo "console.log(require.resolve('a11ty'))" | node`

echo $WHEREISTHIS

WHEREISTHIS=`echo "console.log(require.resolve('ncp'))" | node`

echo $WHEREISTHIS

pwd

ls -l ./node_modules/.bin

ncp --version
