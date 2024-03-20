import React, { useState } from "react";
import BottemTabsView from "../../View/BottemTabs";

function BottemTabsContainer() {
  const [componentStateChecker, setComponentStateChecker] =
    useState("ProductsDetails");
  const [productsDetailsStyle, setProductsDetailsStyle] = useState(
    "w-1/3 border-b border-b-blue-300 p-4 text-blue-500"
  );
  const [ratingAndReviewsStyle, setRatingAndReviewsStyle] = useState(
    "w-1/3 border-b border-b-gray-300 p-4 text-gray-500"
  );
  const [fAQsStyle, setFAQsStyle] = useState(
    "w-1/3 border-b border-b-gray-300 p-4 text-gray-500"
  );
  const changeStyle = (e) => {
    if (e.target.name == "ProductsDetails") {
      setProductsDetailsStyle(
        "w-1/3 border-b border-b-blue-300 p-4 text-blue-500"
      );
      setRatingAndReviewsStyle(
        "w-1/3 border-b border-b-gray-300 p-4 text-gray-500"
      );
      setFAQsStyle("w-1/3 border-b border-b-gray-300 p-4 text-gray-500");
      setComponentStateChecker("ProductsDetails");
    } else if (e.target.name == "RatingAndReviews") {
      setProductsDetailsStyle(
        "w-1/3 border-b border-b-gray-300 p-4 text-gray-500"
      );
      setRatingAndReviewsStyle(
        "w-1/3 border-b border-b-blue-300 p-4 text-blue-500"
      );
      setFAQsStyle("w-1/3 border-b border-b-gray-300 p-4 text-gray-500");
      setComponentStateChecker("RatingAndReviews");
    } else {
      setProductsDetailsStyle(
        "w-1/3 border-b border-b-gray-300 p-4 text-gray-500"
      );
      setRatingAndReviewsStyle(
        "w-1/3 border-b border-b-gray-300 p-4 text-gray-500"
      );
      setFAQsStyle("w-1/3 border-b border-b-blue-300 p-4 text-blue-500");
      setComponentStateChecker("FAQs");
    }
  };

  const state = {
    productsDetailsStyle,
    ratingAndReviewsStyle,
    fAQsStyle,
    componentStateChecker,
  };
  const handlers = {
    changeStyle,
    setFAQsStyle,
    setProductsDetailsStyle,
    setRatingAndReviewsStyle,
  };

  return (
    <div>
      <BottemTabsView state={state} handlers={handlers} />
    </div>
  );
}

export default BottemTabsContainer;
