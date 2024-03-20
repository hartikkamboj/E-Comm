import React, { useState } from "react";
import ProductDetailsInBottemTabContainer from "../../Container/ProductDetailsInBottemTabs";
import RatingAndReviewsContainer from "../../Container/RatingAndReviews";
import FaqsContainer from "../../Container/FAQs";

function BottemTabsView({ state, handlers }) {
  return (
    <>
      <div>
        <div className="w-full flex p-8">
          <button
            onClick={handlers.changeStyle}
            name="ProductsDetails"
            className={state.productsDetailsStyle}
          >
            Products Details
          </button>
          <button
            onClick={handlers.changeStyle}
            name="RatingAndReviews"
            className={state.ratingAndReviewsStyle}
          >
            Rating & Reviews
          </button>
          <button
            name="FAQs"
            onClick={handlers.changeStyle}
            className={state.fAQsStyle}
          >
            FAQs
          </button>
        </div>
      </div>
      <div>
        {state.componentStateChecker == "ProductsDetails" ? (
          <ProductDetailsInBottemTabContainer />
        ) : state.componentStateChecker == "RatingAndReviews" ? (
          <RatingAndReviewsContainer />
        ) : (
          <FaqsContainer />
        )}
      </div>
    </>
  );
}

export default BottemTabsView;
