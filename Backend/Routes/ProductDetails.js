const express = require("express");
const productsRouter = express.Router();
const { products, customerReviews } = require("../dummyData");
const { cartData } = require("../Cart");

productsRouter.get("/", (req, res) => {
  res.send(customerReviews);
});
productsRouter.get("/products", (req, res) => {
  const data = products.filter((product) => product.Id === req.headers.id);
  res.send(data);
});
// productsRouter.post("/products/cart", (req, res) => {
//   const email = req.body.email;
//   const productId = req.body.productId;
//   cartData.userCarts.push({
//     email: productId,
//   });
//   cartData.count++;
//   res.json(cartData.userCarts);
// });
module.exports = { productsRouter };
