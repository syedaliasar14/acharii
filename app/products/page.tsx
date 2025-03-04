"use client";

import { useEffect, useState } from "react";
import { CartItem, Product } from "../types";
import axios from "axios";

export default function Products() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    axios.post("/api/get-products").then(response => {
      setProducts(response.data);
      setLoading(false);
    });
  }, []);

  // Load cart from local storage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart as string));
    }
  }, []);

  const addToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    let updatedCart;

    if (existingProductIndex >= 0) {
      updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 } as CartItem];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`Added to Cart! \n${product.name}`);
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
            <p className="text-xl font-semibold">${product?.price?.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}