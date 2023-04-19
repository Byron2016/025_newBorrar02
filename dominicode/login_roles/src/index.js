// index.js
const express = require("express");

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`aaaAPI listening on PORT ${PORT} `);
});

// Routes
app.get("/", (req, res) => {
  res.send("Hey this is my API running 🐸🐸🐼");
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

app.get("/test", (req, res) => {
  return res.send("NewBorrar_01 Express Typescript on Vercel");
});

app.get("/ping", (req, res) => {
  return res.send("MNewBorrar_01 pong.. --> 🏓");
});

// Export the Express API
module.exports = app;
