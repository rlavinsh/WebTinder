const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("handling the route");
    next();
    // res.send("Response!!");
  },
  // second handler
  (req, res) => {
    console.log("handling the second route");
    res.send("Response 2!!");
  },
);
app.listen(3000, (req, res) => {
  //   res.end("Hello");
  console.log("server chal rha hein port number 3000 per");
});
