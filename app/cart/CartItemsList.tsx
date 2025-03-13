import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { CartItem } from "../types";

export default function CartItemsList({ cart, setCart, loading }: { cart: CartItem[], setCart: (cart: CartItem[]) => void, loading: boolean }) {
  const handleDelete = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="flex flex-col w-full md:w-1/3 gap-8 md:h-[calc(100vh-20rem)] overflow-y-auto px-1 md:px-8 py-2 items-center">
      {loading && (
        <div className="flex justify-center items-center mt-20">
          <svg className="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      
      {!loading && cart.length === 0 && (
        <div className="flex flex-col items-center mt-4 w-full gap-4">
          <p className="text-lg opacity-70 flex flex-row items-center gap-2">
            looks like your cart is empty
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </p>
          <Link href="/products"
            className="mt-4 btn flex justify-center">
            + add to cart
          </Link>
        </div>
      )}

      {cart.map((item, index) => (
        <ProductCard key={index} product={item} type="cart" onClick={() => handleDelete(index)} />
      ))}
    </div>
  );
}