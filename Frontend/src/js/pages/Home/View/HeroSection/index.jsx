import React from "react";
import HeroImage from "../../../../../assets/HeroIconImage.jpeg";
import StarImg1 from "../../../../../assets/starImg1.png";
import StarImg2 from "../../../../../assets/starImg1.png";
import Calvin from "../../../../../assets/CalvinKleinImg.png";
import Gucci from "../../../../../assets/gucci-logo.png";
import Prada from "../../../../../assets/prada-logo.png";
import Versace from "../../../../../assets/VersaceImg.png";
import Zara from "../../../../../assets/ZaraImg.png";
function HomeView() {
  return (
    <>
      <div className="mt-4 lg:w-full lg:flex bg-Background-color  pt-10 block ">
        <div className=" w-full lg:w-1/2 flex  justify-center items-center bg-Background-color h-fit p-1">
          <div className="w-full lg:w-2/3 pl-4 pr-4 lg:p-0">
            <h1 className=" text-5xl mb-2 font-black">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[#00000099] text-xs text-normal mb-5">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="border-2 border-black w-full h-14 lg:w-40 rounded-full bg-black text-white text-xs lg:h-9 p-2">
              Shop Now
            </button>
            <div className="flex pt-10 flex-wrap lg:flex-nowrap justify-center">
              <div className="border-r border-gray-300 pl-5 pr-5">
                <h2 className="text-4xl">200+</h2>
                <p className="text-xs text-gray-400 ">International Brands</p>
              </div>

              <div className="border-r border-gray-300 pl-5 pr-5">
                <h2 className="text-4xl">2000+</h2>
                <p className="text-xs text-gray-400 ">High-Quality Products</p>
              </div>
              <div className="lg:border-r border-gray-300 pl-5 pr-5">
                <h2 className="text-4xl">30000+</h2>
                <p className="text-xs text-gray-400 ">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 flex justify-center pr-10 relative">
          <img
            src={StarImg1}
            alt=""
            className=" w-1/12 h-1/12 absolute top-1/2 left-[10%]"
          />
          <img src={HeroImage} alt="" className="w-8/12" />
          <img
            src={StarImg2}
            alt=""
            className="w-1/5 h-1/4 absolute right-[15%]"
          />
        </div>
      </div>
      <div className="w-full bg-black flex justify-center p-6 flex-wrap">
        <div className=" w-11/12 flex justify-between  bg-black ">
          <img src={Versace} className="w-1/6 h-4/5" alt="" />
          <img src={Zara} className="w-1/12 h-4/5" alt="" />
          <img src={Gucci} alt="" className=" w-1/12 h-4/5" />
          <img src={Prada} className="w-1/6 h-4/5" alt="" />
          <img src={Calvin} alt="" className=" w-2/12 h-4/5" />
        </div>
      </div>
    </>
  );
}

export default HomeView;
