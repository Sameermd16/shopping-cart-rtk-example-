import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            // console.log(action)
            state.push(action.payload)
        },
        remove: (state, action) => {
            const newState = state.filter((item) => {
                return item.id !== action.payload.id 
            })
            return newState
        }
    }
})
// console.log(cartSlice)

export const { add, remove } = cartSlice.actions 
export default cartSlice.reducer 