const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { HomeRouter } = require("./Routes/HomeRouter");
const { Products } = require("./dummyData");

const app = express();
app.use(express.static("Public"));

app.use(cors());
app.use(bodyParser.json());

app.use("/", HomeRouter);
// app.use("/", userVerifier, HomeRouter);

app.get("/data", (req, res) => {
  res.json(Products);
});

app.listen(3001, () => {
  console.log("started");
});
