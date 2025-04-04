import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "../Components/cart/cartslice";

export const store = configureStore({
  reducer: {
    cart: cartreducer,
  },
});
