import React from "react";
import CustomerReviewCard from "../../../../components/CustomerReviewCard";
import ReviewButtonIcon from "../../../../../assets/ReviewButtonIcon.png";

function RatingAndReviewsView({ state, handlers }) {
  return (
    <>
      <div>
        <div className="flex pl-16 pr-16">
          <div className="flex items-center w-1/3 lg:text-lg text-xs">
            <p>All Reviews</p>
            <p className="text-xs">({state.productDetailGlobalData.length})</p>
          </div>
          <div className="w-2/3">
            <div className="flex justify-end">
              <button className=" bg-Background-color p-2 rounded-2xl mr-2">
                <img src={ReviewButtonIcon} alt="icon" />
              </button>
              <div className="lg:flex hidden">
                <select
                  name=""
                  id=""
                  className=" bg-Background-color p-3 rounded-full mr-2  "
                >
                  <option value="">Latest</option>
                  <option value="">older</option>
                  <option value="">custom</option>
                </select>
              </div>
              <button className="bg-black text-white lg:text-lg text-xs rounded-full p-1 pl-3 pr-3">
                Write a review
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:flex flex-wrap">
          {state.productDetailGlobalData?.map((productReview) => {
            return (
              <div className="md:w-1/2">
                <CustomerReviewCard review={productReview} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-center pt-5">
        <button className="border border-gray-300 rounded-full p-3 text-sm">
          Load more reviews
        </button>
      </div>
    </>
  );
}

export default RatingAndReviewsView;
