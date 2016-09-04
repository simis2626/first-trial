#!/bin/bash
systemctl stop node-server
mv first-trial/node_modules /root/
rm -r first-trial
echo -n "Enter the branch name > "
read text
git clone --branch $text https://github.com/simis2626/first-trial.git
mv /root/node_modules first-trial/
cd first-trial
npm install
cd ..
chmod -R 777 *
cd first-trial
npm run postinstall
npm run tsc
sed -i 's/3000/80/g' bin/www
systemctl start node-server
echo "Process Complete"
