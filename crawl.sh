#!/usr/bin/env bash

if [ "./docs" ]; then
        rm -r ./docs
fi
./node_modules/casperjs/bin/casperjs --verbose --cookies-file=cookies.txt app.js
