import { IProductItem } from "@/interfaces/product.interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";



interface ProductState {
    data: IProductItem[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    data: [],
    loading: false,
    error: null,
};



const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProductsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getProductsSuccess: (state, action: PayloadAction<IProductItem[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        getProductsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getProductsStart, getProductsSuccess, getProductsFailure } =
    productSlice.actions;

export default productSlice.reducer;