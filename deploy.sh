#!/bin/bash
cd dist

sudo git init

git remote add github git@github.com:TimPulin/sk8.github.io.git

git checkout -b production

git add -A

git commit -m 'deploy'

sudo git push -f github HEAD
