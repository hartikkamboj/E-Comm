import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userEmail: "",
  Count: {},
  cartData: [],
};

export const productDataSeter = createSlice({
  name: "currentProductData",
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setCount: (state, action) => {},
    setCartData: (state, action) => {
      state.cartData.push(action.payload);
    },
    deleteCartData: (state, action) => {
      state.cartData = action.payload;
    },
  },
});

export const { setUserEmail, setCount, setCartData, deleteCartData } =
  productDataSeter.actions;

export default productDataSeter.reducer;
