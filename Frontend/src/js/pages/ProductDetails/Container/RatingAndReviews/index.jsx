import React from "react";
import RatingAndReviewsView from "../../View/RatingAndReviews";
import { useSelector } from "react-redux";

function RatingAndReviewsContainer() {
  const currentProductReviews = useSelector(
    (state) => state.product[0].Reviews
  );
  const state = {
    currentProductReviews,
  };
  const handlers = {};
  return (
    <div>
      <RatingAndReviewsView state={state} handlers="" />
    </div>
  );
}

export default RatingAndReviewsContainer;
