//Modules - Encapsulated Code feng'z (only share minimum)
//CommonJS, every file is module (by default)
const names = require("./4-names"); // variables
const sayHi = require("./5-utils"); // functions
const data = require("./6-alternative-flavour"); // data
require("./7-mind-grenade"); //directly use the function in the module
sayHi("harry");
sayHi(names.potter);
sayHi(names.friday);
console.log(data);
