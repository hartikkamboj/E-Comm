const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { homeRouter } = require("./Routes/HomeRouter");
const { productsRouter } = require("./Routes/ProductDetails");

const app = express();
app.use(express.static("Public"));

app.use(cors());
app.use(bodyParser.json());

app.use("/", homeRouter);
app.use("/home", productsRouter);

// app.use("/", userVerifier, HomeRouter);

app.listen(3001, () => {
  console.log("started");
});
