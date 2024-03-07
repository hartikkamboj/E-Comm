const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("api called");
});

app.listen(3001, () => {
  console.log("started");
});
