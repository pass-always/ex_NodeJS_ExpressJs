// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> for mac

// package.json - manifest file stores important info about project/package
// manual approach, create package.json in the root, create properties etc
// npm init (step by step, press enter to skip)
// npm init -y (all default)

// easy to share with other developers.

//Create .gitignore and add /node_modules, when you want to push your project to GitHub repo.

// To publish your project on GitHub.
// 1~ git init 2~ git add . 3~ git commit -m "first commit". 4~ git remote add origin <url>. 5~ git branch -M main. 6~ git push -u origin main.

// After clone other's code from GitHub to local, then run "npm install". It will install all node modules based on the package.json.
// To create dev-dependencies, run "npm i <dependencyName> -D"
// In the package.json, about the "scripts" part, it is for you to setup some commands.
// Such as "start": "node app.js", hwen you type "npm start", the project will run app.js

// nodemon only used in devevlopment process, so we can install it in "dvedependencies". Then, it will not show up in the production.
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
