"use client";

import { useEffect, useState } from "react";
import { Address, AddressErrors, CartItem } from "../types";
import CartItemsList from "./components/cart-items-list";
import SubtotalCard from "./components/subtotal-card";
import CheckoutButton from "./components/checkout-button";
import ShippingAddress from "./components/shipping-address";
import axios from "axios";

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showAddress, setShowAddress] = useState(false);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState<Address>({
    name: "",
    street: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    pickup: false
  });
  const [addressErrors, setAddressErrors] = useState<AddressErrors>({
    name: false,
    street: false,
    street2: false,
    city: false,
    state: false,
    zip: false,
  });

  // Load cart from local storage
  useEffect(() => {
    const fetchCartProducts = async () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        try {
          const response = await axios.post("/api/get-cart-products", { cart: JSON.parse(storedCart as string) });
          setCart(response.data);
        } catch (error) {
          console.error("Failed to fetch cart products:", error);
        }
      }
      setLoading(false);
    };
    fetchCartProducts();
  }, []);

  return (
    <main className="flex flex-col gap-4 mt-18 mb-8 site-shell">
      <h1 className="!font-sans mt-4 text-5xl md:text-6xl">Cart</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <CartItemsList cart={cart} setCart={setCart} loading={loading} />

        <div className="w-full md:w-2/3 flex flex-col gap-8 items-stretch items-center self-stretch max-w-5xl">
          <SubtotalCard cart={cart} />
          {!showAddress && <button onClick={() => setShowAddress(true)} className="mt-4 btn">Checkout</button>}
          <ShippingAddress address={address} setAddress={setAddress} visible={showAddress} addressErrors={addressErrors} setAddressErrors={setAddressErrors} />
          {showAddress && <CheckoutButton cart={cart} address={address} setAddressErrors={setAddressErrors} />}
        </div>
      </div>
    </main>
  );
}