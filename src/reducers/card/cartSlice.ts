import { createSlice } from '@reduxjs/toolkit'


interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartState {
    totalCount: number;
    productList: Product[];
}


const initialState: CartState = {
    totalCount: 0,
    productList: [],
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
        state.productList = [...state.productList, action.payload];
        state.totalCount += 1;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addProductToCart } = cartSlice.actions

export default cartSlice.reducer