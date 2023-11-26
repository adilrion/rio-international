import { Layout } from "@/layout/Layout";
import Products from "../prdocuts/products";

const Automobiles = () => {
  return (
      <Layout>
          <header>
              <h1 className="text-[26px] font-mono antialiased font-medium tracking-wide ">
                  Automobiles
              </h1>
      </header>
      <div>
        <Products></Products>
      </div>
      </Layout>
  );
}

export default Automobiles