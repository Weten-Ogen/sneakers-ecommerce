import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],
    amount : 3,
    price :125,
    total : 0,
    discount:50,
    showItems:false,

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
})

export default cartSlice.reducer; 