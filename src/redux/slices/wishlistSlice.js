const { createSlice } = require("@reduxjs/toolkit");



const wishlistSlice = createSlice({
    name :'wishlist',
    initialState:[],  // since this state have to hold more than one item
    reducers:{
        //actions
        //function to add items to wishlist array state
        addToWishlist :(state, action)=>{
            state.push(action.payload)
        },
        
        // funtion to remove item from wishlist arr state

        removeFromWishlist : (state,action)=>{
            //it returns a new arr with items satisfying the condition
            return state.filter(item=>item.id!==action.payload)

        }
    }

})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer
