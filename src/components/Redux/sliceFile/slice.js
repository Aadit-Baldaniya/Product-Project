import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  number: 10,
};
const cake = createSlice({
  name: "Phone",
  initialState,

  reducers: {
    buyPhone: (prestate, action) => {
      if (prestate.number > 0) {
        prestate.number -= 1;
      }
    },
    sellPhone: (prestate, action) => {
      prestate.number += 2;
    },
  },
});

export const { buyPhone, sellPhone } = cake.actions;

export default cake.reducer;
