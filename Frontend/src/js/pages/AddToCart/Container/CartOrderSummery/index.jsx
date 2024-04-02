import React, { useEffect, useMemo, useState } from "react";
import CartOrderSummeryView from "../../View/CartOrderSummery/index";

function CartOrderSummeryContainer({ state }) {
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const orderSummeryCalculator = () => {
    let subTotalPrice = 0;
    let totalPrice = 0;
    let discountPrice = 0;
    state?.cartData.map((data) => {
      totalPrice = totalPrice + Number(data.offerPrice) * Number(data.count);
      subTotalPrice = subTotalPrice + Number(data.price) * Number(data.count);
      discountPrice = subTotalPrice - totalPrice;
    });
    setTotal(totalPrice + 15);
    setDiscount(discountPrice);
    setSubTotal(subTotalPrice);
  };

  useEffect(() => {
    orderSummeryCalculator();
  }, [state.cartData.length]);

  let stateWrapper = {
    total,
    discount,
    subTotal,
  };

  return (
    <div>
      <CartOrderSummeryView stateWrapper={stateWrapper} />
    </div>
  );
}

export default CartOrderSummeryContainer;
