import { assets } from "@/assets";
import { renderStars } from "@/lib/renderStars";
import { Minus, Plus, X } from "lucide-react";

const CartItem = () => {
    return (
        <div className="grid gap-2 grid-cols-12 border-b py-4">
            <div className="col-span-2 shadow rounded overflow-hidden">
                <img
                    className="w-full h-full"
                    src={assets.card}
                    alt=""
                />
            </div>
            <div className="col-span-8 flex flex-col gap-y-1">
                <h1 className="line-clamp-1">
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                </h1>
                <h1 className="text-[#457B9D] font-mono font-bold text-2xl inline-flex  items-center">
                    $200
                </h1>
                <div>
                    <div className="flex justify-start gap-4 items-center">
                        {/* <p className="rounded-[0.27rem] bg-[#457B9D] px-[0.65em] py-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-gray-200">
                            Brand Name
                        </p> */}
                        <p className="inline-flex items-center text-[13px] text-orange-500">
                            {" "}
                            {renderStars(5.2)}
                            <span className="text-gray-800 text-[12px] ml-2 font-thin">
                                {" "}
                                (100)
                            </span>
                        </p>
                    </div>
                </div>
                <button className="text-gray-400 inline-flex justify-center items-center gap-1 rounded border px-1  text-xs w-fit">
                    Remove <X className="text-red-400 w-[20px]" />
                </button>
            </div>
            <div className="col-span-2 flex flex-col justify-between items-end">
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

                <h1 className="text-[#457B9D] font-mono font-bold text-4xl inline-flex  items-center ml-2">
                    $400
                </h1>
            </div>
        </div>
    );
};

export default CartItem;