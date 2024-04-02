import React from "react";
import DeleteBtnIcon from "../../../../../assets/DeleteBtnIcon.png";

function CartCardView({ cartData, state, handlers }) {
  return (
    <div className="w-full flex border-b p-3">
      <div className="w-1/5 mr-3">
        <img
          className="w-full"
          src={`http://localhost:3001/${cartData.image}`}
          alt="img"
        />
      </div>
      <div className="w-full">
        <div className="flex w-full justify-between">
          <h1>{cartData.name}</h1>
          <button
            onClick={() => {
              handlers.itemDeleteFromCarthandler(cartData.product_Id);
            }}
          >
            <img src={DeleteBtnIcon} alt="deleteBtn" />
          </button>
        </div>
        <div>
          <h1>
            Size: <span className="text-gray-400 text-sm">{cartData.size}</span>
          </h1>
          <h1>
            Price:{" "}
            <span className="text-gray-400 text-sm line-through">
              {cartData.price}{" "}
            </span>
          </h1>
        </div>
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">${cartData.offerPrice}</h1>
          <div className="flex border items-center justify-around w-1/6 rounded-full bg-Background-color">
            <button className="w-1/3">-</button>
            <p className="pl-2 pr-2">{cartData.count}</p>
            <button className="w-1/3">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCardView;
