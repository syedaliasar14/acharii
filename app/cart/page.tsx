"use client";

import { useEffect, useState } from "react";
import { CartItem } from "../types";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleDelete = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/create-checkout", {
        cart,
        successUrl: `${window.location.origin}/`,
        cancelUrl: `${window.location.origin}/cart`,
      });
      window.location.href = res.data.url;
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("An error occurred during checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col gap-8">
      <h1 className="text-5xl md:text-6xl">Cart</h1>
      <div className="flex flex-col md:flex-row gap-8">
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

        <div className="w-full md:w-2/3 flex flex-col gap-8 items-stretch items-center self-stretch md:px-20 lowercase">
          <div className="flex flex-col justify-between items-center p-4 bg-stone-200">
            <div className="flex flex-col w-full">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 border-b border-stone-300">
                  <span className="mr-2">{item.quantity}x {item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between self-stretch items-center mt-4 p-2">
              <h2 className="text-2xl">Subtotal</h2>
              <p className="text-2xl">${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className={`px-4 py-2 rounded-md transition-colors shadow-sm
            ${cart.length === 0 ? "bg-stone-300 opacity-80 cursor-default" : "bg-secondary/80 hover:bg-secondary cursor-pointer"}`}
            disabled={cart.length === 0}
          >
            checkout
          </button>
        </div>
      </div>
    </main >
  );
}