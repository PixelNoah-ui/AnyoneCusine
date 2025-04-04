import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { LoadCartFromLoacl, saveCart } from "../../../utils/helper";

const initialState = LoadCartFromLoacl() || {
  cartitem: [],
  totalPrice: 0,
  deliveryFee: 150,
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newitem = action.payload;
      const existItem = state.cartitem.find(
        (item) =>
          item.id === newitem.id &&
          newitem.size === item.size &&
          JSON.stringify(newitem.extra) === JSON.stringify(item.extra),
      );
      if (existItem) {
        toast.success("You've already added this item");
      } else {
        state.cartitem.push({ ...newitem, quantity: newitem.quantity });
        toast.success("Added to cart");
        state.totalPrice += state.cartitem.reduce(
          (acc, current) => acc + current.actualPrice,
          0,
        );
      }

      saveCart(state);
    },
    increaseQuantity(state, action) {
      const newitem = action.payload;
      const cart = state.cartitem.find(
        (item) =>
          item.id === newitem.id &&
          item.size === newitem.size &&
          JSON.stringify(item.extra) === JSON.stringify(newitem.extra),
      );
      if (cart) {
        cart.quantity += 1;
        cart.actualPrice += newitem.price;
        state.totalPrice += newitem.price;
        saveCart(state);
      }
    },
    decreaseQunatity(state, action) {
      const newItem = action.payload;
      const cart = state.cartitem.find(
        (item) =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          JSON.stringify(item.extra) === JSON.stringify(newItem.extra),
      );
      if (cart) {
        cart.quantity -= 1;
        cart.actualPrice -= newItem.price;
        state.totalPrice -= newItem.price;
        saveCart(state);
      }
    },

    removeCart(state, action) {
      const newItem = action.payload;
      const cartIndex = state.cartitem.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          JSON.stringify(item.extra) === JSON.stringify(newItem.extra),
      );
      if (cartIndex !== -1) {
        const cart = state.cartitem[cartIndex];
        state.totalPrice -= cart.actualPrice;
        state.cartitem.splice(cartIndex, 1);
        saveCart(state);
        toast.success(
          `You have successfully removed ${cart.name} from your cart`,
        );
      } else {
        toast.error("Something wrong");
      }
    },
    clearCart(state) {
      state.cartitem = [];
      state.totalPrice = 0;
      saveCart(state);
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQunatity,
  removeCart,
  clearCart,
} = cartslice.actions;

export default cartslice.reducer;
