import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

function getlocalStorage(str, defaultValue) {
  const getcart = JSON.parse(localStorage.getItem(str));
  if (!getcart) {
    return defaultValue;
  }
  return getcart;
}
function setlocalStorege(state) {
  localStorage.setItem("cartStore", JSON.stringify(state.cartStore));
  localStorage.setItem("text", JSON.stringify(state.text));
  localStorage.setItem("total", JSON.stringify(state.total));
  localStorage.setItem("subtotal", JSON.stringify(state.subtotal));
}
function totalcalc(state) {
  let text = 0;
  let total = 0;
  let subtotal = 0;

  for (const product of state.cartStore) {
    subtotal += product.price * product.quntity;
  }
  text = Number(subtotal * (state.textrate / 100).toFixed(2));
  total = subtotal + text;

  state.total = total;
  state.subtotal = subtotal;
  state.text = text;
}

const cart = createSlice({
  name: "cart",
  initialState: {
    cartStore: [],
    text: 0,
    textrate: 18,
    subtotal: 0,
    total: 0,
  },
  reducers: {
    add: (state, action) => {
      if (
        state.cartStore.find((value) => {
          return value.id === action.payload.id;
        })
      ) {
        const increse = state.cartStore.map((value) => {
          if (value.id === action.payload.id) {
            return { ...value, quntity: value.quntity + 1 };
          }
          return value;
        });
        state.cartStore = increse;
      } else {
        state.cartStore.push(action.payload);
      }
      totalcalc(state);
    },
    remove: (state, action) => {
      const cartDelete = state.cartStore.filter((value) => {
        return value.id !== action.payload;
      });
      state.cartStore = cartDelete;
      totalcalc(state);
    },
    increment: (state, action) => {
      const increse = state.cartStore.map((value) => {
        if (value.id === action.payload) {
          return { ...value, quntity: value.quntity + 1 };
        }
        return value;
      });
      state.cartStore = increse;
      totalcalc(state);
    },
    decrement: (state, action) => {
      let desrese = state.cartStore.map((value) => {
        if (value.id === action.payload) {
          if (value.quntity > 1) {
            return { ...value, quntity: value.quntity - 1 };
          } else {
            return null;
          }
        }
        return value;
      });
      desrese = desrese.filter((value) => {
        if (value !== null) {
          return true;
        }
        return false;
      });

      state.cartStore = desrese;
      totalcalc(state);
    },
  },
});

export const { add, remove, increment, decrement } = cart.actions;
export default cart.reducer;
