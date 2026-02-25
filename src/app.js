const express = require("express");

const app = express();

const { authAdmin, userAuth } = require("./middleware/auth");

// Handle auth middleware for all request
app.use("/admin", authAdmin);

app.get("/user/login", (req, res) => {
  res.send("User Login successfully");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("user data load successfully");
});
app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Delete the User");
});
// GET // users =>

// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("handling the route");
//     next();
//     // res.send("Response!!");
//   },
//   // second handler
//   (req, res) => {
//     console.log("handling the second route");
//     res.send("Response 2!!");
//   },
// );

// Another way of route handling

// app.get("/user",(req,res,next)=>{
//   console.log("first route handler");
//   next();
// })

// app.get("/user",(req,res,next)=>{
//   console.log("second route handler");
//   res.send("2nd route handler")
// })
app.listen(3000, (req, res) => {
  //   res.end("Hello");
  console.log("server chal rha hein port number 3000 per");
});
