const http = require("http");

// createServer extend from EventEmitter
const server = http.createServer((req, res) => {
  //req is useful info object. and it is huge
  if (req.url === "/") {
    res.end("Welcom to my home page");
  }
  if (req.url === "/about") {
    res.end("Here is my short history");
  }
  res.end(`
<h1>OOPS!</h1>
<p>We cannot find the page you are looking for.</p>
<a href='/'>Back home</a>`);
});

server.listen(5000);
