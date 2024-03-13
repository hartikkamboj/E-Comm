import React from "react";
import CustomerReviewCard from "../../../../components/CustomerReviewCard";
import LeftArrow from "../../../../../assets/leftArrow.png";
import RightArrow from "../../../../../assets/RightArrow.png";

function CustomersReviewsView() {
  return (
    <>
      <div className="w-full flex p-6">
        <div className=" w-2/5 flex justify-center p-4``">
          <h1 className="text-4xl font-black">OUR HAPPY CUSTOMERS </h1>
        </div>
        <div className="flex w-2/3 justify-end p-6">
          <img src={RightArrow} alt="RightArrow" className="w-8 h-8" />
          <img src={LeftArrow} alt="leftArrow" className="w-8 h-8" />
        </div>
      </div>
      <div className=" lg:flex flex-wrap justify-evenly">
        <CustomerReviewCard />
        <CustomerReviewCard />
        <CustomerReviewCard />
      </div>
    </>
  );
}

export default CustomersReviewsView;
