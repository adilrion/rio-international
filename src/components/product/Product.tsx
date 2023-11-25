// Product.tsx
import { renderStars } from "@/lib/renderStars";
import { IProductItem } from "@/redux/features/products/productSlice";
import { DollarSign } from "lucide-react";
import React from "react";

const Product: React.FC<{ data: IProductItem[] }> = ({ data }) => {
     // Check if there's a half star

   
    console.log(data)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 pt-2 ">
            {data?.map((product) => {
                const fullStars:number = Math.floor(product.rating.rate);
                const hasHalfStar:boolean = product.rating.rate - fullStars >= 0.5;
                return (
                    <div
                        key={product.id}
                        className=" shadow bg-gray-100 border rounded overflow-hidden hover:bg-gray-200 group"
                    >
                        <div className="w-[100%] h-[250px] overflow-hidden">
                            <img
                                src={product.image}
                                alt=""
                                className="w-full h-full object-fill group-hover:scale-105 transition ease-in-out delay-150"
                            />
                        </div>
                        <div className=" p-4">
                            <h1 className="line-clamp-1">{product.title} </h1>
                            <h1 className="text-[#457B9D] font-mono font-bold text-2xl inline-flex  items-center">
                                <DollarSign />
                                {product.price}
                            </h1>
                            <div>
                                <div className="flex justify-between items-center">
                                    <p className="rounded-[0.27rem] bg-[#457B9D] px-[0.65em] py-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-gray-200">
                                        Brand Name
                                    </p>
                                    <p className="inline-flex items-center text-[13px] text-orange-500">
                                        {" "}
                                        {renderStars(fullStars, hasHalfStar)}
                                        <span className="text-gray-800 text-[12px] ml-2 font-thin">
                                            {" "}
                                            ({product.rating.count})
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Product;
