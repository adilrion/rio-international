import { assets } from "@/assets";

const brand = [
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

const Brand = () => {
  return (
      <section>
          <div className="flex flex-nowrap gap-2 overflow-x-auto touch-pan-y snap-x scroll-smooth rounded py-4">
              {brand.map((data, index) => (
                  <div
                      key={index}
                      className=" snap-start flex w-fit justify-center items-center shadow bg-gray-50 rounded-full px-2 min-w-[200px]"
                  >
                      <img
                          src={assets.cl}
                          alt={data.title}
                          className="w-[50px] h-[50px] rounded-full p-1"
                      />
                      <p className=" whitespace-nowrap px-2">company name</p>
                  </div>
              ))}
          </div>
      </section>
  );
}

export default Brand