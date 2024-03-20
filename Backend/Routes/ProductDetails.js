const express = require("express");
const productsRouter = express.Router();
const { products, customerReviews } = require("../dummyData");

productsRouter.get("/", (req, res) => {
  res.send(customerReviews);
});
productsRouter.get("/products", (req, res) => {
  const data = products.filter((product) => product.Id === req.headers.id);
  res.send(data);
});
module.exports = { productsRouter };
