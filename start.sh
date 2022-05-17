#!/bin/bash
cd $PWD/server && ./run.sh & 
cd $PWD/app && ./node_modules/.bin/serve -s build