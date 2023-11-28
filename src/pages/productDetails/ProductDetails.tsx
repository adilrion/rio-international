import { Layout } from "@/layout/Layout";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProductDetails } from "@/redux/features/products/productThunks";
import ProductLoading from "@/components/loading/ProductLoading";
import { renderStars } from "@/lib/renderStars";
import { Minus, Plus } from "lucide-react";
import Products from "../prdocuts/products";
import Comments from "@/components/comments/Comments";

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const product = useAppSelector((state) => state.productDetails.data);
    const loading = useAppSelector((state) => state.productDetails.loading);
    const error = useAppSelector((state) => state.productDetails.error);

    console.log(product);
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
            <section>
                <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto my-5 p-5 shadow rounded">
                    <div className="max-h-[500px]">
                        <img
                            src={product.image}
                            className="w-full h-full object-center"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-sans font-medium">
                            {product.title}
                        </h1>
                        <p>{product.description}</p>
                        <div className="flex justify-between items-center py-2">
                            <p className="text-gray-500">
                                Brand Name:
                                <span className="rounded-[0.27rem] bg-[#457B9D] px-[0.65em] py-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-gray-200 ml-2">
                                    Rio International
                                </span>
                            </p>
                            <p className="inline-flex items-center text-[13px] text-orange-500">
                                {" "}
                                {renderStars(product?.rating?.rate)}
                                <span className="text-gray-800 text-[12px] ml-2 font-thin">
                                    {" "}
                                    ({product?.rating?.count})
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <Link to="comments">123 Comments</Link>
                            <Link to="review">500 Review</Link>
                        </div>
                        <div className="flex gap-3 justify-start items-end mt-5">
                            <h1 className="text-gray-500">
                                Price:
                                <span className="text-[#457B9D] font-mono font-bold text-4xl inline-flex  items-center ml-2">
                                    ${product.price}
                                </span>
                            </h1>
                            <h2>
                                (
                                <span className="text-gray-500 font-mono font-bold inline-flex  items-center line-through">
                                    $40
                                </span>
                                -58%)
                            </h2>
                        </div>

                        <div className="flex py-5 items-center gap-2">
                            <p className="text-gray-500">Quantity:</p>
                            <div className="flex divide-x divide-[#457B9D] border border-[#457B9D]">
                                <button className="w-[50px] h-[35px] bg-gray-100 flex justify-center items-center text-5xl ">
                                    <Minus />
                                </button>
                                <p className="w-[50px] h-[35px]  flex justify-center items-center text-xl ">
                                    2
                                </p>
                                <button className="w-[50px] h-[35px] bg-gray-100 flex justify-center items-center text-5xl ">
                                    <Plus />
                                </button>
                            </div>

                            <p>Only 2 items left</p>
                        </div>

                        <div className="flex gap-2">
                            <button className="basis-1/2 bg-[#457B9D] text-white py-3 rounded">
                                Buy Now
                            </button>
                            <button className="basis-1/2 bg-[#45489d] text-white py-3 rounded">
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <h1 className="text-[16px] text-gray-500 border-b py-2">
                            Ratings & Reviews
                        </h1>

                        <div>
                            <Comments/>
                            <Comments/>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h1 className="text-[26px] font-mono antialiased font-medium tracking-wide ">
                    Related Product
                </h1>

                <Products></Products>
            </section>
        </Layout>
    );
};

export default ProductDetails;
