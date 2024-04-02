import React from "react";
import PromoIcon from "../../../../../assets/addPromoCodeIcon.png";
function CartOrderSummeryView({ stateWrapper }) {
  return (
    <>
      <div className="w-full border rounded-lg p-4">
        <div className="flex w-full justify-between">
          <h1 className="text-2xl font-bold">Order Summery</h1>
        </div>
        <div className="flex w-full justify-between py-3">
          <h1 className="text-xl text-gray-500 font-light">Subtotal</h1>
          <p className="text-xl">${stateWrapper.subTotal}</p>
        </div>
        <div className="flex w-full justify-between py-3">
          <h1 className="text-xl text-gray-500 font-light">Discount</h1>
          <p className="text-xl text-red-600">-${stateWrapper.discount}</p>
        </div>
        <div className="flex w-full justify-between py-3">
          <h1 className="text-xl text-gray-500 font-light ">Delivery Fee</h1>
          <p className="text-xl">$15</p>
        </div>
        <hr />
        <div className="flex w-full justify-between py-3">
          <h1 className="text-xl">Total</h1>
          <p className="text-xl">${stateWrapper.total}</p>
        </div>
        <div>
          <div className="flex w-full">
            <div className="flex w-2/3  justify-center rounded-3xl mr-2 bg-[#F0F0F0]">
              <label htmlFor="">
                <img src={PromoIcon} className=" w-1/2 m-2" alt="searchIcon" />
              </label>
              <input
                className="w-full rounded-3xl pl-1 focus:outline-none h-full bg-[#F0F0F0]"
                type="text"
                name="SearchBox"
                id=""
                placeholder="Add promo code"
              />
            </div>
            <button className=" w-1/3 text-sm  rounded-full bg-black text-white">
              Apply
            </button>
          </div>
        </div>
        <div>
          <button className=" w-full p-3  mt-4 text-sm  rounded-full bg-black text-white">
            Go to checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default CartOrderSummeryView;
