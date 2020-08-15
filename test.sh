#!/usr/bin/env bash

# Make all the installed CLI tools available.
# PATH=$PATH:./node_modules/.bin


DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
echo $DIR

# ls -l $DIR

cd $DIR
cd ..
cd lib
cd node_modules
ls -l

# /Users/saibotsivad/.npm/_npx/16933/bin

# PATH=$PATH:$DIR


# WHEREISTHIS=`echo "console.log(require.resolve('a11ty'))" | node`

# echo $WHEREISTHIS

# WHEREISTHIS=`echo "console.log(require.resolve('ncp'))" | node`

# echo $WHEREISTHIS

# pwd

# ls -l ./node_modules/.bin

# ncp --version
