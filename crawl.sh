#!/usr/bin/env bash

if [ -d ./docs ]; then
        rm -r ./docs && echo "./docs erased!"
fi
echo -n "./docs/ <= Download..."
./node_modules/casperjs/bin/casperjs --verbose --cookies-file=cookies.txt app.js
