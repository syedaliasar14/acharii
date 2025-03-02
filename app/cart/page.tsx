"use client";

import { useEffect, useState } from "react";
import { Product } from "../products/productList";

export default function Cart() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <main className="flex flex-col gap-8">
      <h1 className="text-6xl">Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart.map((product, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-lg">{product.size}</p>
            <p>{product.description}</p>
            <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}