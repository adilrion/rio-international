import { IProductItem } from "@/interfaces/product.interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface ProductState {
    data: IProductItem;
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    data: {} as IProductItem,
    loading: false,
    error: null,
};




const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers: {
        getSingleProductStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getSingleProductSuccess: (
            state,
            action: PayloadAction<IProductItem>
        ) => {
            state.loading = false;
            state.data = action.payload;
        },
        getSingleProductFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    getSingleProductStart,
    getSingleProductSuccess,
    getSingleProductFailure,
} = productDetailsSlice.actions;

export default productDetailsSlice.reducer;