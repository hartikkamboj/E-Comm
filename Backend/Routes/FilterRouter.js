const express = require("express");
const { products } = require("../dummyData");
const filterRouter = express.Router();

const dressTypeFilterHandler = (
  dataThroughtWhichFilterationApplied,
  dataOnWhichFilterationApplied
) => {
  let filteredDressStyleData = [];
  if (dataThroughtWhichFilterationApplied[0] === "All") {
    filteredDressStyleData = dataOnWhichFilterationApplied;
  } else {
    dataThroughtWhichFilterationApplied.forEach((dress) => {
      dataOnWhichFilterationApplied.forEach((product) => {
        if (product.DressType === dress) {
          filteredDressStyleData.push(product);
        }
      });
    });
  }
  return filteredDressStyleData;
};

const sizeFilterhandler = (
  dataThroughtWhichFilterationApplied,
  dataOnWhichFilterationApplied
) => {
  let newData = [];
  if (dataThroughtWhichFilterationApplied[0] == "All") {
    newData = dataOnWhichFilterationApplied;
  } else {
    let counter = 0;
    dataThroughtWhichFilterationApplied.forEach((size) => {
      dataOnWhichFilterationApplied.forEach((product) => {
        if (product.Size.includes(size)) {
          newData.forEach((data) => {
            if (data.Id === product.Id) {
              counter = 1;
            }
          });
          if (counter == 0) {
            newData.push(product);
          }
        }
      });
    });
  }
  return newData;
};

const priceFilterHandler = (
  minPriceValue,
  maxPriceValue,
  dataOnWhichFilterationApplied
) => {
  let priceFilteredData = [];
  if (minPriceValue == 0 && maxPriceValue == 1000) {
    priceFilteredData = dataOnWhichFilterationApplied;
  } else {
    priceFilteredData = dataOnWhichFilterationApplied.filter(
      (data) =>
        data.offerPrice >= minPriceValue && data.offerPrice <= maxPriceValue
    );
  }
  return priceFilteredData;
};

const dressStyleFilterHandler = (
  dataThroughtWhichFilterationApplied,
  dataOnWhichFilterationApplied
) => {
  let dressStyleFilteredData = dataOnWhichFilterationApplied.filter(
    (data) => data.DressStyle === dataThroughtWhichFilterationApplied
  );
  return dressStyleFilteredData;
};

filterRouter.post("/", (req, res) => {
  console.log(req.body);
  const derssStyleFilteredData = dressTypeFilterHandler(
    req.body.DataRequiredForFilteration.dressType,
    products
  );

  const sizeFilteredData = sizeFilterhandler(
    req.body.DataRequiredForFilteration.size,
    derssStyleFilteredData
  );

  const priceFilteredData = priceFilterHandler(
    req.body.DataRequiredForFilteration.minPrice,
    req.body.DataRequiredForFilteration.maxPrice,
    sizeFilteredData
  );

  const dressStyleFilteredData = dressStyleFilterHandler(
    req.body.DataRequiredForFilteration.dressStyle,
    sizeFilteredData
  );
  console.log(dressStyleFilteredData);
  res.json(dressStyleFilteredData);
});

module.exports = { filterRouter };
