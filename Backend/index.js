const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { HomeRouter } = require("./Routes/HomeRouter");


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", HomeRouter);
// app.use("/", userVerifier, HomeRouter);

app.listen(3001, () => {
  console.log("started");
});
