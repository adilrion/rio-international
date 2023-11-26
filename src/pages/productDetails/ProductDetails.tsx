import { Layout } from "@/layout/Layout";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const {id } = useParams()

    return <Layout>ProductDetailsPage {id}</Layout>;
};

export default ProductDetails;