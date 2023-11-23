
import {Banner} from "../../components/banner/Banner";
import { Layout } from "../../layout/Layout";
import Brand from "../brand/brand";
import Categories from "../categories/categories";
import Products from "../prdocuts/products";



const Home = () => {
    return (
        <Layout>
            <Banner />
            <Brand />
            <Categories />
            <div className="">
                <h1 className="text-[26px] font-mono antialiased font-medium tracking-wide pt-4">
                    Just For You
                </h1>
                <div>
                    <Products/>
                </div>
            </div>
        </Layout>
    );
};

export default Home
