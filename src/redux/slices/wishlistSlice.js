import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[], // To store more than one value
    reducers:{
        // Actions
        // Function to add items to the state
        addToWishlist : (state,action)=>{
            state.push(action.payload)
        },
        removeFromWishlist : (state,action)=>{
            // Filter returns a new array based on the given condition
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer