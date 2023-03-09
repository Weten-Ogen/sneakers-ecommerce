import { createSlice } from "@reduxjs/toolkit";
const images =[
    {
        id:1,
        image:"image-product-1.jpg",
        thumbnail: "image-product-1-thumbnail.jpg"
    },
    {
        id:2,
        image:"image-product-2.jpg",
        thumbnail: "image-product-2-thumbnail.jpg"
    },{
        id:3,
        image:"image-product-3.jpg",
        thumbnail: "image-product-3-thumbnail.jpg"
    },{
        id:4,
        image:"image-product-4.jpg",
        thumbnail: "image-product-4-thumbnail.jpg"
    },
]

const initialState = {
    images :images,
    active: "image-product-1.jpg",
}
const carouselSlice = createSlice({
   name: 'carousel',
   initialState,
   reducers:{
    handleChange: (state,{payload}) =>{
        console.log(state)
        const pic = state.images.filter(img => payload.image === img.image)
        
        return

    }
   }
})


export const { handleChange } = carouselSlice.actions; 
export default carouselSlice.reducer;
