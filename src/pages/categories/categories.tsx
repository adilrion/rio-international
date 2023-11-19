import { Link } from "react-router-dom";

const categories = [
    {
        img: "https://sportsworld.com.bd/wp-content/uploads/2021/12/Sports-T-Shirt-Deep-Navy-Blue-With-Ash-Texture-F.png",
        title: "T-shirt",
        link: "/t-shirt",
    },
    {
        img: "https://sportsworld.com.bd/wp-content/uploads/2021/12/Sports-T-Shirt-Deep-Navy-Blue-With-Ash-Texture-F.png",
        title: "T-shirt",
        link: "/t-shirt",
    },
    {
        img: "https://sportsworld.com.bd/wp-content/uploads/2021/12/Sports-T-Shirt-Deep-Navy-Blue-With-Ash-Texture-F.png",
        title: "T-shirt",
        link: "/t-shirt",
    },
    {
        img: "https://sportsworld.com.bd/wp-content/uploads/2021/12/Sports-T-Shirt-Deep-Navy-Blue-With-Ash-Texture-F.png",
        title: "T-shirt",
        link: "/t-shirt",
    },
    {
        img: "https://sportsworld.com.bd/wp-content/uploads/2021/12/Sports-T-Shirt-Deep-Navy-Blue-With-Ash-Texture-F.png",
        title: "T-shirt",
        link: "/t-shirt",
    },
    {
        img: "https://sportsworld.com.bd/wp-content/uploads/2021/12/Sports-T-Shirt-Deep-Navy-Blue-With-Ash-Texture-F.png",
        title: "T-shirt",
        link: "/t-shirt",
    },
    {
        img: "https://sportsworld.com.bd/wp-content/uploads/2021/12/Sports-T-Shirt-Deep-Navy-Blue-With-Ash-Texture-F.png",
        title: "T-shirt",
        link: "/t-shirt",
    },
    {
        img: "https://sportsworld.com.bd/wp-content/uploads/2021/12/Sports-T-Shirt-Deep-Navy-Blue-With-Ash-Texture-F.png",
        title: "T-shirt",
        link: "/t-shirt",
    },
    {
        img: "https://sportsworld.com.bd/wp-content/uploads/2021/12/Sports-T-Shirt-Deep-Navy-Blue-With-Ash-Texture-F.png",
        title: "T-shirt",
        link: "/t-shirt",
    },
    {
        img: "https://sportsworld.com.bd/wp-content/uploads/2021/12/Sports-T-Shirt-Deep-Navy-Blue-With-Ash-Texture-F.png",
        title: "T-shirt",
        link: "/t-shirt",
    },
    {
        img: "https://sportsworld.com.bd/wp-content/uploads/2021/12/Sports-T-Shirt-Deep-Navy-Blue-With-Ash-Texture-F.png",
        title: "T-shirt",
        link: "/t-shirt",
    },
    {
        img: "https://sportsworld.com.bd/wp-content/uploads/2021/12/Sports-T-Shirt-Deep-Navy-Blue-With-Ash-Texture-F.png",
        title: "T-shirt",
        link: "/t-shirt",
    },
];
const Categories = () => {
    return (
        <section>
            <p className="underline decoration-wavy">The quick brown fox</p>
            <div className="flex flex-wrap bg-white shadow my-4 rounded divide-x divide-y">
                {categories.map((data, index) => {
                    return (
                        <Link to={data.link} key={index} className=" basis-1/6">
                            <img
                                className="w-[200px] h-[200px] "
                                src={data.img}
                                alt=""
                            />
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Categories;
