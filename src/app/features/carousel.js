import { createSlice } from "@reduxjs/toolkit";
import {data} from "../../data/data";

const initialState = {
    Imgs:data,
    selected: "image-product-1.jpg",
    showModal: false,
}

const carouselSlice = createSlice({
   name: 'carousel',
   initialState,
   reducers: {
      handleThumbClick: (state,{payload}) => 
      {
       const text = payload.toString()
       state.selected = text;
      }
   }
})


export const { handleThumbClick } = carouselSlice.actions; 
export default carouselSlice.reducer;
