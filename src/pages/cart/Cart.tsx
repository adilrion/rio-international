import CartItem from "@/components/cartItem/cartItem"
import { Layout } from "@/layout/Layout"

export const Cart = () => {
  return (
      <Layout>
          <section className="grid gap-5 grid-cols-12 py-4">
              <div className="col-span-8">
                  <h1 className="text-[26px] font-mono antialiased font-medium tracking-wide border-b  pb-4">
                      Review order
                  </h1>
                  <CartItem></CartItem>
                  <CartItem></CartItem>
                  <CartItem></CartItem>
                  <CartItem></CartItem>
              </div>
              <div className="col-span-4">
                  <h1 className="text-[26px] font-mono antialiased font-medium tracking-wide border-b pb-4">
                      Summary
                  </h1>
              </div>
          </section>
      </Layout>
  );
}
