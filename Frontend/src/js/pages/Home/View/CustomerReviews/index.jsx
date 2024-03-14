import React, { useRef } from "react";
import CustomerReviewCard from "../../../../components/CustomerReviewCard";
import LeftArrow from "../../../../../assets/leftArrow.png";
import RightArrow from "../../../../../assets/RightArrow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomersReviewsView() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="w-full flex p-6">
        <div className=" w-2/5 flex justify-center p-4 item-center">
          <h1 className="text-4xl font-black ">OUR HAPPY CUSTOMERS </h1>
        </div>
        <div className="flex w-2/3 justify-end p-6">
          <img src={RightArrow} alt="RightArrow" className="w-8 h-8" />
          <img src={LeftArrow} alt="leftArrow" className="w-8 h-8" />
        </div>
      </div>
      <div className="w-88">
        <Slider {...settings}>
          <CustomerReviewCard />
          <CustomerReviewCard />
          <CustomerReviewCard />
          <CustomerReviewCard />
          <CustomerReviewCard />
          <CustomerReviewCard />
          <CustomerReviewCard />
          <CustomerReviewCard />
          <CustomerReviewCard />
        </Slider>
      </div>
    </>
  );
}

export default CustomersReviewsView;
