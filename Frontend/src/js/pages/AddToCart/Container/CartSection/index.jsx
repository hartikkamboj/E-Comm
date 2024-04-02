import React from "react";
import CartSectionView from "../../View/CartSection";
import { useSelector } from "react-redux";
import CartOrderSummeryContainer from "../CartOrderSummery";

function CartSectionContainer() {
  const cartData = useSelector((state) => state.cartData);
  const state = {
    cartData,
  };
  return (
    <div>
      <div className=" text-center lg:w-1/5 py-5">
        <h1 className="font-black text-4xl">Your Cart</h1>
      </div>
      <div className=" lg:flex w-full justify-center">
        <div className="lg:w-1/2 w-full">
          <CartSectionView state={state} />
        </div>
        <div className="lg:w-1/3 w-full lg:p-0 p-4">
          <CartOrderSummeryContainer state={state} />
        </div>
      </div>
    </div>
  );
}

export default CartSectionContainer;
