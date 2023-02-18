import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import { products, IProducts } from "../../mockData/product";

interface IProductType {
    data: IProducts[],
    price: number,
    scoreCart: number,
    savedScoreCart: number,
    isModalCart: boolean
}
const initialState: IProductType = {
    data: products,
    price: 0,
    scoreCart: 0,
    savedScoreCart: 0,
    isModalCart: false
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        increment: (state) => {
            state.scoreCart += 1
        },
        decrement: (state) => {
            if (state.scoreCart !== 0) {
                state.scoreCart -= 1
            }
        },
        savedScoreCart: (state, action: PayloadAction<number>) => {
            state.savedScoreCart = action.payload
            state.scoreCart = 0
        },
        deleteSavedScoreCart: (state) => {
            state.savedScoreCart = 0
        },
        toggleModalCart: (state) => {
            state.isModalCart = !state.isModalCart
        }
    }

})

export const {
    increment,
    decrement,
    savedScoreCart,
    deleteSavedScoreCart,
    toggleModalCart } = productSlice.actions;

export default productSlice.reducer;