import React, { useContext } from "react";
import RatingAndReviewsView from "../../View/RatingAndReviews";
import ProductReviewsContext from "../../../../core/Context/ProductReviewsContext";

function RatingAndReviewsContainer() {
  const {productDetailGlobalData} = useContext(ProductReviewsContext);
  const state = { productDetailGlobalData};
  const handlers = {};
  return (
    <div>
      <RatingAndReviewsView state={state} handlers="" />
    </div>
  );
}

export default RatingAndReviewsContainer;
