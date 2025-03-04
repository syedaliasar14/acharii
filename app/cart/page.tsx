"use client";

import { useEffect, useState } from "react";
import { CartItem } from "../types";
import axios from "axios";

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
      <h1 className="text-6xl">Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart.map((item, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <p className="text-lg">{item.size}</p>
            <p>{item.description}</p>
            <p className="text-xl font-semibold">${item.price.toFixed(2)}</p>
            <p className="text-lg">Quantity: {item.quantity}</p>
            <button
              onClick={() => handleDelete(index)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleCheckout}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        disabled={cart.length === 0}
      >
        Checkout
      </button>
    </main>
  );
}