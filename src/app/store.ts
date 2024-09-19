import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../reducers/user/userSlice";
import cartReducer from "../reducers/card/cartSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
})