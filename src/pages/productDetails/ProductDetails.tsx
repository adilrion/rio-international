import { Layout } from "@/layout/Layout";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useParams } from "react-router-dom";
import {useEffect} from 'react'
import { fetchProductDetails } from "@/redux/features/products/productThunks";
import ProductLoading from "@/components/loading/ProductLoading";

const ProductDetails = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch();
    const productDetails = useAppSelector((state) => state.productDetails.data);
    const loading = useAppSelector((state) => state.productDetails.loading);
    const error = useAppSelector((state) => state.productDetails.error);

    console.log(productDetails);
    useEffect(() => {
          const fetchData = async () => {
              await dispatch(fetchProductDetails(String(id)));
          };

          fetchData();

    }, [dispatch, id]);

    if (loading) {
        return (
            <Layout>
                <ProductLoading />
            </Layout>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Layout>
            <header>
                <h1 className="text-[26px] font-mono antialiased font-medium tracking-wide ">
                    {productDetails.title}
                </h1>

                <img src={productDetails.image} alt="" />
            </header>
        </Layout>
    );
};

export default ProductDetails;