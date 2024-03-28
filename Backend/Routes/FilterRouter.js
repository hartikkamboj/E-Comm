const express = require("express");
const { products } = require("../dummyData");
const filterRouter = express.Router();

filterRouter.get("/", (req, res) => {
  console.log(req.headers);
  //   {
  //     dressType: [ 'T-shirts', 'Shorts' ],
  //     minPrice: 266,
  //     maxPrice: 1000,
  //     size: [ 'XX-Small', 'Small' ],
  //     dressStyle: 'Casual'
  //   }

  res.end();
});

module.exports = { filterRouter };
