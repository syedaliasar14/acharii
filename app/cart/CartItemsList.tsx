import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { CartItem } from "../types";

export default function CartItemsList({ cart, setCart }: { cart: CartItem[], setCart: (cart: CartItem[]) => void }) {
  const handleDelete = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="flex flex-col w-full md:w-1/3 gap-8 md:h-[calc(100vh-20rem)] overflow-y-auto md:px-8 md:py-2 items-center">
      {cart.length === 0 && (
        <div className="flex flex-col items-center mt-4 w-full gap-4">
          <p className="text-lg opacity-70 flex flex-row gap-2">
            looks like your cart is empty
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </p>
          <Link href="/products"
            className="w-full mt-4 px-4 py-2 flex justify-center rounded-md cursor-pointer transition-colors shadow-sm bg-secondary/80 hover:bg-secondary">
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