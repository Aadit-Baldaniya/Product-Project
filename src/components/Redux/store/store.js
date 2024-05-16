import { configureStore } from "@reduxjs/toolkit";
import cakeshope from "../sliceFile/slice";
import cartStore from "../sliceFile/cart";
const storeData = configureStore({
  reducer: {
    cake: cakeshope,
    cart: cartStore,
  },
});
export default storeData;
