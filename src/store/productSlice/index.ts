import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import { products, IProducts } from "../../mockData/product";

interface IProductType {
    data: IProducts[],
    price: number,
    scoreCart: number,
    savedScoreCart: number,
    isModalCart: boolean,
    isModal: boolean
}
const initialState: IProductType = {
    data: products,
    price: 0,
    scoreCart: 0,
    savedScoreCart: 0,
    isModalCart: false,
    isModal: false,
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
            if(state.scoreCart !== 0){
                state.savedScoreCart = action.payload
                state.scoreCart = 0
                state.isModal = true
            }
        },
        deleteSavedScoreCart: (state) => {
            state.savedScoreCart = 0
        },
        toggleModalCart: (state) => {
            state.isModalCart = !state.isModalCart
        },
        toggleModal: (state) => {
            state.isModal = false
        },
    }

})

export const {
    increment,
    decrement,
    savedScoreCart,
    deleteSavedScoreCart,
    toggleModalCart,
    toggleModal } = productSlice.actions;

export default productSlice.reducer;