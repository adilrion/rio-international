import { fetchProducts } from "@/redux/features/products/productThunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

export const Product = () => {

  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.data);
    const loading = useAppSelector((state) => state.product.loading);
    const error = useAppSelector((state) => state.product.error);


   useEffect(() => {
       dispatch(fetchProducts());
   }, [dispatch]);
  

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


  return (
      <div>
          <h2>Product List</h2>
          <ul>
              {products.map((product) => (
                  <li key={product.id}>
                      {product.title} - ${product.price}
                  </li>
              ))}
          </ul>
      </div>
  );
}
