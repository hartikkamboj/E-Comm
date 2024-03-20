import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
};

export const productDataSeter = createSlice({
  name: "currentProductData",
  initialState,
  reducers: {
    addProductData: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { addProductData } = productDataSeter.actions;

export default productDataSeter.reducer;
