"use client";

import { useEffect, useState } from "react";
import { Product, products } from "./productList";

export default function Products() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart as string));
    }
  }, []);

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <main className="flex flex-col gap-8">
      <h1 className="text-6xl">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-lg">{product.size}</p>
            <p>{product.description}</p>
            <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}