import { Action, ThunkAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import productReducer from "./features/products/productSlice";
import productDetailsSlice from './features/products/getSingleProduct'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        productDetails: productDetailsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    null,
    Action<string>
>;

// Ensure ThunkDispatch uses null as the third parameter
export type MyThunkDispatch = ThunkDispatch<RootState, null, Action<string>>;



export default store;