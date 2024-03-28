const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { loginRouter } = require("./Routes/LoginRouter");
const { productsRouter } = require("./Routes/ProductDetails");
const { filterRouter } = require("./Routes/FilterRouter");

const app = express();
app.use(express.static("Public"));

app.use(cors());
app.use(bodyParser.json());

app.use("/", loginRouter);
app.use("/home", productsRouter);
app.use("/filters", filterRouter);
// app.use("/", userVerifier, HomeRouter);

app.listen(3001, () => {
  console.log("started");
});
