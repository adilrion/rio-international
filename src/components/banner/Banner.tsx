// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banner.css";

const banner = [
    {
        img: "https://cdn.shopify.com/s/files/1/0070/7032/files/diy-product-photography.jpg?v=1599161908",
        title: "Fashion",
        href: "",
    },
    {
        img: "https://i0.wp.com/d2s30hray1l0uq.cloudfront.net/frontend/prepare-for-product-photography.jpg?fit=1024%2C512&ssl=1",
        title: "Groceries",
        href: "",
    },
    {
        img: "https://media.istockphoto.com/id/944910150/photo/flat-lay-of-spa-treatment-set.jpg?s=612x612&w=0&k=20&c=OzCePzf89RylS3Dcp_09K5vkqNwGLQXA6Bt81TAIFUE=",
        title: "Health & Beauty",
        href: "",
    },
    {
        img: "https://thumbs.dreamstime.com/b/personal-care-28022840.jpg",
        title: "Home & Lifestyle",
        href: "",
    },
    {
        img: "https://pathedits.com/cdn/shop/articles/image29.jpg?v=1610384205",
        title: "Mobiles & Tablets",
        href: "",
    },
    {
        img: "https://inboostr.com/wp-content/uploads/2021/09/photography-amazon.jpg",
        title: "Automobiles",
        href: "",
    },
];
export const Banner = () => {
    return (
        <div className="topGradient">
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper w-full h-[350px] md:h-[450px]  bg-[#EAF4F4]"
            >
                {banner.map((data, index) => {
                    return (
                        <SwiperSlide key={index} className="h-full relative">
                            <img
                                width="100%"
                                height="100%"
                                className="object-cover h-full"
                                src={data?.img}
                            />
                            <h1 className="z-50 text-[30px] text-[#457b9d] absolute bottom-0 right-0 p-8">
                                {data?.title}
                            </h1>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
