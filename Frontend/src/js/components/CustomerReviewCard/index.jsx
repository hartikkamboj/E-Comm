import React from "react";
import ReactStars from "react-rating-stars-component";
import GreenTickIcon from "../../../assets/GreenTickIcon.png";

function CustomerReviewCard({ review }) {
  return (
    <div className=" border focus:blur-0 border-gray-200 rounded-lg m-4 p-4 mt-6 mb-6">
      <div className="flex">
        <ReactStars
          size={20}
          emptyIcon={<i className="far fa-star"></i>}
          readonly={true}
          allowFraction={true}
          count={5}
          isHalf={true}
          value={2}
        />
      </div>
      <div className="flex mt-2 mb-2">
        <h1>{review.name}</h1>
        <img src={GreenTickIcon} alt="greenTick  " />
      </div>
      <div>
        <p className="text-xs text-gray-500 w-full">{review.body}</p>
      </div>
    </div>
  );
}

export default CustomerReviewCard;
