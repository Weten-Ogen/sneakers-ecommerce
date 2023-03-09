import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";

const initialState = {
    images :data,
    active: "image-product-1.jpg",
}
const carouselSlice = createSlice({
   name: 'carousel',
   initialState,
   reducers: {
      handleChange: (state,{payload}) =>{
        console.log(state.images)
      }
   }
})


export const { handleChange } = carouselSlice.actions; 
export default carouselSlice.reducer;
