"use client";

import { useEffect, useState } from "react";
import { CartItem, Product } from "../types";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    toast.success(`added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  return (
    <main className="flex flex-col gap-8 px-8 mb-12">
      <h2 className="text-5xl md:text-6xl">Products</h2>
      {loading && (
        <div className="flex justify-center items-center mt-20">
          <svg className="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} type="product" onClick={() => addToCart(product)} />
        ))}
      </div>
      <ToastContainer />
    </main>
  );
}