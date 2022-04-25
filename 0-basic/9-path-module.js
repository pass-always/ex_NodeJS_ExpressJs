const path = require("path");

console.log(path.sep);
// the first varibla no matter /content/ or /content, you will have the same result.
const filePath = path.join("/content/", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
