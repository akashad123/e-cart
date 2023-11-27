import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState : [],
    reducers : {
        // Actions
        // Functions to add items to cart
        addToCart : (state,action)=>{
            state.push(action.payload)
        },
        removeFromCart : (state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        emptyCart : (state)=>{
            state = []
        }
    }
})

export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions

export default cartSlice.reducer