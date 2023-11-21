
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
];

const Brand = () => {
  return (
      <section>
          <div className="flex gap-5 overflow-x-auto">
              {brand.map((data, index)=> (
                  <div
                      key={index}
                      className="flex w-fit justify-center items-center shadow bg-gray-200"
                  >
                      <img
                          src={data.img}
                          alt={data.title}
                          className="w-[50px] h-[50px] rounded-full"
                      />
                      <p className="ml-2 whitespace-nowrap">company name</p>
                  </div>
              ))}
          </div>
      </section>
  );
}

export default Brand