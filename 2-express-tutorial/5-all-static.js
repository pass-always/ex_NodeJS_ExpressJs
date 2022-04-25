const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware, you can create a new folder to hold all static resource that means
// all things in the folder no need to be changed. Not like http functins, you need to create every path.
// static asset means that server does not have to change it.
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./2-express-tutorial/navbar-app/index.html")
  );
});

app.all("*", (req, res) => {
  res.status(404), send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening port 5000");
});
