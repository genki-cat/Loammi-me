#!/bin/bash
yarn run build
rsync -avr --delete-after dist/* ubuntu@152.32.175.44:/data/www/Loammi-me
