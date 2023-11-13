
import {Banner} from "../../components/banner/Banner";
import { Layout } from "../../layout/Layout";
import Categories from "../categories/categories";



const Home = () => {
    return (
        <Layout>
            <Banner />
            <Categories/>
        </Layout>
    );
};

export default Home
