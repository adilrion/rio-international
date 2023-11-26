import Pagination from "@/components/pagination/Pagination";
import Product from "@/components/product/Product";
import { fetchProducts } from "@/redux/features/products/productThunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

const Products = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.product.data);
    const loading = useAppSelector((state) => state.product.loading);
    const error = useAppSelector((state) => state.product.error);

    console.log(products)
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="py-6">
            <Product data={products} />
            <Pagination></Pagination>
        </div>
    );
};

export default Products;