import React from "react";
import CartCardContainer from "../../Container/CartCard";

function CartSectionView({ state }) {
  return (
    <div className="px-5">
      <div className="w-full border rounded-xl p-2">
        {state.cartData.map((data) => {
          return (
            <>
              <CartCardContainer cartData={data} />
            </>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default CartSectionView;
