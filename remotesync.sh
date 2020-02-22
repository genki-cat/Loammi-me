#!/bin/bash
yarn run build
rsync -avr --delete-after dist/* root@39.107.75.255:/var/www/Loammi-me
