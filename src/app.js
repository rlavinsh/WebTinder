const express = require("express");

const app = express();

// app.use("/", (req, res) => {
//   res.send("Hello Hello Hello");
// });
// app.use("/kaise", (req, res) => {
//   res.send("server toh yha bhi chalu hein");
// });

// this will only handle get call to /user
app.get("/user", (req, res) => {
  res.send({
    firstName: "Lavinsh",
    lastName: "Rathor",
    phone: "51454646546",
    isAdmin: "false",
  });
});

app.post("/user", (req, res) => {
  // console.log("Save data to the database");
  res.send("Data saved sucessfully");
});

app.delete("/user", (req, res) => {
  res.send("Delete the user successfully");
});
// this will match all the http methods API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, (req, res) => {
  //   res.end("Hello");
  console.log("server chal rha hein port number 3000 per");
});
