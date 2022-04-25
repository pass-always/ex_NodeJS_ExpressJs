// EventEmitter is used to listen for user's action, such as hover, click or something like that.
const EventEmitter = require("events");
const customEmitter = new EventEmitter();

// You can add as many functions as you want here.
// If the customEmitter.emit is above on the functions of customEmitter.on, nothing will happen.
// customEmitter.emit('response'); If located here, nothing will happen.
// Pass as parameter's sequence, you can name whatever you want.  ${name} ${id} or what.
customEmitter.on("response", (name, num) => {
  console.log(`data recieved. name: ${name}, num: ${num}`);
});

customEmitter.on("response", () => {
  console.log("do other logic");
});

// You can pass arguments to functions above when emitting.
customEmitter.emit("response", "harry", 1);
