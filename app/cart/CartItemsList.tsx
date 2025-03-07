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
          <p className="text-lg opacity-70">looks like your cart is empty</p>
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