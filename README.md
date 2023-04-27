# shawandpartners-
API Challenge


After the repository was cloned:
npm i
npm start to run
If any extension tool is missing, you can manually install it like below


Stack
Install npm;
On PowerShell, execute this command:


Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))


and this command:


choco install nodejs


*Sametimes this comand install node to, if you can not see the version of node (node -v)you can install node.js from the oficial site https://nodejs.org/en or try to use yarn commands


dependencies
Install the Express framework (npm install express)
Install request lib (npm install request)
Install aixos (npm install axios)
Install jast (npm install jest --save-dev)
Get jest on the global path (npm install -g jest)
Install the github CLI (winget install --id GitHub.cli)
Login on the github CLI (gh auth login)
Api GH solicitation (gh api repos/octocat/Spoon-Knife/issues)
Install request lib (npm install --save request)
Install node moon (npm install -g nodemon)


if you are using Windows, you need to restart the system after installing dependencies to configure paths.


API info
route 0: /api/*
Intance app


route 1: /api/users
Endpoint to list GitHub users by page


Route 2: /api/users/:username/details
endpoint to get user details from GitHub


Route 3: /api/users/:username/repos
Endpoint to list GitHub user repositories



Unit tests
On the root project, use the command on the terminal (JEST) or execute from node modules in case of error (node_modules/.bin/jest)