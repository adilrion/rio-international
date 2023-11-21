
import {Banner} from "../../components/banner/Banner";
import { Layout } from "../../layout/Layout";
import Brand from "../brand/brand";
import Categories from "../categories/categories";



const Home = () => {
    return (
        <Layout>
            <Banner />
            <Brand/>
            <Categories/>
        </Layout>
    );
};

export default Home
