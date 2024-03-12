import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../../../../assets/cartIcon.png";
import UserAccountIcon from "../../../../assets/userAccountIcon.png";
import SearchIcon from "../../../../assets/searchBarIcon.png";
import MenuIcon from "../../../../assets/menuIcon.png";

function HeaderView() {
  return (
    <div className=" w-full flex justify-center items-center pt-4">
      <div className="w-full flex justify-center h-12">
        <div className=" w-1/12 flex justify-center items-center lg:hidden">
          <img src={MenuIcon} alt="" />
        </div>
        <div className=" w-1/7 mr-2 flex justify-center items-center">
          <h1 className=" text-3xl font-black">SHOP.CO</h1>
        </div>
        <div className="w-1/4 m-4 hidden lg:block">
          <ul className="flex items-center h-full w-full">
            <li className="w-1/4 text-center text-base">
              <Link>On sale</Link>
            </li>
            <li className="w-1/3 text-center text-base">
              <Link className="w-full">New Arivals</Link>
            </li>
            <li className="w-1/4 text-center text-base ">
              <Link>Brand</Link>
            </li>
          </ul>
        </div>
        <div className="flex lg:w-1/3 w-fit">
          <div className="flex lg:w-full lg:border rounded-3xl mr-2 lg:bg-[#F0F0F0]">
            <label htmlFor="">
              <img src={SearchIcon} className=" w-6 m-3" alt="searchIcon" />
            </label>
            <input
              className="w-full rounded-3xl lg:block hidden focus:outline-none h-full bg-[#F0F0F0]"
              type="text"
              name="SearchBox"
              id=""
              placeholder="Search for products..."
            />
          </div>
        </div>
        <div className="flex w-20 justify-start m-2 items-center">
          <img className="mr-3 w-6 h-6" src={CartIcon} alt="cartIcon" />
          <img
            className="mr-3 w-6 h-6"
            src={UserAccountIcon}
            alt="userAccountIcon"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderView;
