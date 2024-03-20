import { configureStore } from "@reduxjs/toolkit";
import currentProductReducer from "../features/productData/index";

export const store = configureStore({
  reducer: currentProductReducer,
});
