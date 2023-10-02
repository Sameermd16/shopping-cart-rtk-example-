import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    data: []
    //loading, error...
}

const thunkSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        //action creators 
        fetchProducts: (state, action) => {
            state.data = action.payload 
        }
    }
})

console.log(thunkSlice)

export function products() {
    return getProductsThunk = async (dispatch, getState) => {
        const { data } = await axios.get("https://fakestoreapi.com/products")
        return dispatch(fetchProducts(data))
    } 
}

export const {} = thunkSlice.actions 
export default thunkSlice.reducer 