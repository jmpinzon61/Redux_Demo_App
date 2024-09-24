import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../reducers/user/userSlice";
import cartReducer from "../reducers/card/cartSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;