const express = require("express");

const app = express();

app.use("/kaise", (req, res) => {
  res.send("server toh yha bhi chalu hein");
});
app.use("/tute", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, (req, res) => {
  //   res.end("Hello");
  console.log("server chal rha hein port number 3000 per");
});
