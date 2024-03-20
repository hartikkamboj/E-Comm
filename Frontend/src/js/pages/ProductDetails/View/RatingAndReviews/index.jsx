import React from "react";
import CustomerReviewCard from "../../../../components/CustomerReviewCard";

function RatingAndReviewsView({ state, handlers }) {
  console.log(state.currentProductReviews);
  return (
    <>
      <div className="w-full flex flex-wrap">
        {state.currentProductReviews.map((productReview) => {
          return (
            <div className="w-1/2">
              <CustomerReviewCard review={productReview} />
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center pt-5">
        <button className="border border-gray-300 rounded-full p-3 text-sm">Load more reviews</button>
      </div>
    </>
  );
}

export default RatingAndReviewsView;
