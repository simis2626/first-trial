#!/bin/bash
systemctl stop node-server
rm -r first-trial
echo -n "Enter the branch name > "
read text
git clone --branch $text https://github.com/simis2626/first-trial.git
cd first-trial
apt-get update
apt-get install
apt-get upgrade
npm install
cd ..
chmod -R 777 *
cd first-trial
npm run tsc
systemctl start node-server
echo "Process Complete"