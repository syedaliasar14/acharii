"use client";

import { useEffect, useState } from "react";
import { CartItem, Product } from "../types";
import axios from "axios";
import ProductCard from "../components/product-card";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoaderCircle } from "lucide-react";

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
    toast.success(`Added to cart!`, {
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
    <main className="site-shell flex flex-col gap-8 px-8 mt-18 mb-12">
      <h2 className="!font-sans mt-4 text-5xl md:text-6xl">Shop</h2>
      {loading && (<LoaderCircle className="animate-spin h-8 w-8 mx-auto text-secondary" />)}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} type="product" onClick={() => addToCart(product)} />
        ))}
      </div>
      <ToastContainer />
    </main>
  );
}