import { AppThunk } from "@/redux/store";
import { getProducts, getSingleProducts } from "@/services/productServices";
import {
    getSingleProductFailure,
    getSingleProductStart,
    getSingleProductSuccess,
} from "./getSingleProduct";
import {
    getProductsFailure,
    getProductsStart,
    getProductsSuccess,
} from "./productSlice";

export const fetchProducts = (): AppThunk => async (dispatch) => {
    try {
        dispatch(getProductsStart());
        const products = await getProducts();
        dispatch(getProductsSuccess(products));
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "An error occurred";
        dispatch(getProductsFailure(errorMessage));
    }
};

export const fetchProductDetails =
    (id: string): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(getSingleProductStart());
            const product = await getSingleProducts(id);
            dispatch(getSingleProductSuccess(product));
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "An error occurred";
            dispatch(getSingleProductFailure(errorMessage));
        }
    };
