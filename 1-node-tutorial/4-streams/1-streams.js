const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", { highWaterMark: 90000 });
// Defaut 64kb for the buffer, such as following:
// <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 30 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 32 0a 48 65 6c 6c 6f 20 57 6f ... 65486 more bytes>
// Last buffer - remainder
// highWaterMark - control size

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
