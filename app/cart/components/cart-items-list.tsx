import Link from "next/link";
import ProductCard from "../../components/product-card";
import { CartItem } from "../../types";
import { LoaderCircle } from "lucide-react";

export default function CartItemsList({ cart, setCart, loading }: { cart: CartItem[], setCart: (cart: CartItem[]) => void, loading: boolean }) {
  const handleDelete = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="flex flex-col w-full md:w-1/3 gap-8 md:h-[calc(100vh)] overflow-y-auto px-1 py-2 items-center">
      {loading && (
        <div className="flex justify-center items-center mt-20">
          <LoaderCircle className="animate-spin h-8 w-8 text-secondary" />
        </div>
      )}
      
      {!loading && cart.length === 0 && (
        <div className="flex flex-col items-center mt-4 w-full gap-4">
          <p className="text-lg opacity-70 flex flex-row items-center gap-2">
            Your cart is empty
          </p>
          <Link href="/products" className="mt-4 btn flex justify-center">
            Shop acharii
          </Link>
        </div>
      )}

      {cart.map((item, index) => (
        <ProductCard key={index} product={item} type="cart" onClick={() => handleDelete(index)} />
      ))}
    </div>
  );
}