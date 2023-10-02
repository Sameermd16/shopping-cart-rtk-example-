import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import thunkSlice from "./thunkSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: thunkSlice
    }
})