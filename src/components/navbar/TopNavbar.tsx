import { useState } from "react";
import './Style.css'

import { Link } from "react-router-dom";
import SearchInput from "../searchBar/SearchBar";
import { assets } from "../../assets";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Heart, ShoppingCart } from "lucide-react";

const navItem = [
    { title: "Fashion", href: "/fashion" },
    { title: "Groceries", href: "/groceries" },
    { title: "Health & Beauty", href: "/health-beauty" },
    { title: "Home & Lifestyle", href: "/home-life-style" },
    { title: "Mobiles & Tablets", href: "/mobiles-tablets" },
    { title: "Automobiles", href: "/automobiles" },
];

export const TopNavBar = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    function toggleMobileMenu() {
        setMobileMenuVisible(!mobileMenuVisible);
    }
    return (
        <nav className="bg-[#CCE3DE] w-full mx-auto">
            <div className="max-w-screen-xl mx-auto  p-2 md:px-5">
                <div className="flex flex-col items-center justify-between screenSize border-b md:border-none border-[#CCE3DE]">
                    <div className="w-full flex justify-between items-center">
                        <a href="/" className="basis-1/6 text-gray-800">
                            <img
                                className="w-16"
                                src={assets?.logo}
                                alt="Workflow"
                            />
                        </a>
                        {/* search Form */}
                        <div className="basis-2/4 hidden md:block w-full">
                            <SearchInput></SearchInput>
                        </div>

                        <div className="basis-1/4 ">
                            <div className="flex gap-3 justify-end items-center">
                                <Sheet>
                                    <SheetTrigger>
                                        <span className="relative">
                                            <Heart className="text-[25px] md:text-[30px] text-[#457B9D] " />
                                            <span className="absolute top-[0px] right-[0px] translate-x-[50%] translate-y-[-50%] text-[6px] md:text-[10px] md:p-2 bg-[#457B9D] text-white rounded-full w-3 md:w-4 h-3 md:h-4  inline-flex justify-center items-center">
                                                64
                                            </span>
                                        </span>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <h1>ddd</h1>
                                    </SheetContent>
                                </Sheet>

                                <Link to="/cart">
                                    <button className="relative">
                                        <ShoppingCart className="text-[25px] md:text-[30px] text-[#457B9D] " />

                                        <span className="absolute top-[0px] right-[0px] translate-x-[50%] translate-y-[-50%] text-[6px] md:text-[10px] md:p-2 bg-[#457B9D] text-white rounded-full w-3 md:w-4 h-3 md:h-4  inline-flex justify-center items-center">
                                            24
                                        </span>
                                    </button>
                                </Link>

                                <div className="capitalize ml-2 w-fit h-fit shadow-inner shadow-[#457B9D] border border-[#457B9D] text-[10px] font-semibold rounded">
                                    <Link to="/login">
                                        <button className="tracking-wide px-3 md:px-4 py-1 md:py-2  text-gray-800">
                                            Login
                                        </button>
                                    </Link>
                                    <Link to="/sign-up">
                                        <button className="tracking-wide bg-[#457B9D] text-white first-line:px-3 md:px-4 py-1 md:py-2">
                                            Sign up
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* for large device */}
            <div className=" bg-[#EAF4F4] hidden md:block">
                <div className="max-w-screen-xl p-2 md:px-5 flex mx-auto">
                    {navItem.map((data, index) => {
                        return (
                            <Link
                                key={index}
                                to={data?.href}
                                className="link px-3  first:pl-0"
                            >
                                {data.title}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* For Mobile menu */}

            <div className="flex justify-between md:hidden p-2 bg-[#EAF4F4]">
                <button
                    type="button"
                    className=" inline-flex items-center justify-center  rounded text-gray-400 focus:text-[#457B9D] hover:text-[#457B9D]  transition duration-150 ease-in-out " /* hover:bg-[#457B9D] focus:outline-none focus:bg-[#457B9D] focus:text-white */
                    id="main-menu"
                    aria-label="Main menu"
                    aria-haspopup="true"
                    onClick={toggleMobileMenu}
                >
                    <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
                <div className="block md:hidden">
                    <SearchInput></SearchInput>
                </div>
            </div>
            <div
                className={`md:hidden ${
                    mobileMenuVisible ? "block bg-[#EAF4F4]" : "hidden"
                }`}
                id="mobile-menu"
            >
                <div className="">
                    {navItem.map((data, index) => {
                        return (
                            <a
                                key={index}
                                href="/"
                                className="block py-1 text-[10px] p-2 font-medium text-gray-800  focus:outline-none focus:text-white focus:bg-[#457B9D]  hover:text-[#ffffff]  transition duration-150 ease-in-out"
                            >
                                {data.title}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};
