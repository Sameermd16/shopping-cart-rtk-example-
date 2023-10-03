import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    data: [],
    //loading, error...
}

const thunkSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(products.fulfilled, (state, action) => {
            state.data = action.payload
        })
        // builder.addCase(products.pending, (store, action) => {
        //     state.isLoading = true 
        // })
    }
})

console.log(thunkSlice)

export const products = createAsyncThunk('product/get', async () => {
    const {data} = await axios.get("https://fakestoreapi.com/products")
    return data  
})

// export function products() {
//     return async function getProductsThunk(dispatch) {
//         const {data} = await axios.get("https://fakestoreapi.com/products")
//         return dispatch(fetchProducts(data))
//     }
// }
console.log(products()) 

export const { fetchProducts } = thunkSlice.actions  
export default thunkSlice.reducer 