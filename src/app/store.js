import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart"
import carouselReducer from "./features/carousel";

export const store = configureStore({
    reducer:{
         cart: cartReducer,
         carousel:carouselReducer,
    },

})
