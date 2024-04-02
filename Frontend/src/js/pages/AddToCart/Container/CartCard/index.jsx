import React, { useEffect, useState } from "react";
import CartCardView from "../../View/CartCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartData } from "../../../../core/Redux/features/productData";

function CartCardContainer({ cartData }) {
  const compeletCartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  const itemDeleteFromCarthandler = (productId) => {
    dispatch(
      deleteCartData(
        compeletCartData.filter((data) => data.product_Id != productId)
      )
    );
  };
  const state = {};
  const handlers = {
    dispatch,
    deleteCartData,
    itemDeleteFromCarthandler,
  };
  return (
    <div>
      <CartCardView cartData={cartData} state={state} handlers={handlers} />
    </div>
  );
}

export default CartCardContainer;
