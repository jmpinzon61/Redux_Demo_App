import { createSlice } from '@reduxjs/toolkit'


export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface CartState {
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
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload;
      state.totalCount -= 1;
      state.productList = state.productList.filter(product => product.id !== productId);
    },
  }
})

// Action creators are generated for each case reducer function and exporting
export const { addProductToCart, removeProductFromCart } = cartSlice.actions

export default cartSlice.reducer