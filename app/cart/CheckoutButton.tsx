import { useState } from "react";
import { Address, AddressErrors, CartItem } from "../types";
import axios from "axios";

export default function CheckoutButton({ cart, address, setAddressErrors }: { cart: CartItem[], address: Address, setAddressErrors: (errors: AddressErrors) => void }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    if (!address.name || !address.street || !address.city || !address.state || !address.zip) {
      setAddressErrors({
        name: !address.name,
        street: !address.street,
        street2: false,  // Street 2 is optional
        city: !address.city,
        state: !address.state,
        zip: !address.zip
      });
      return;
    };

    setLoading(true);
    try {
      const res = await axios.post("/api/create-checkout", {
        cart,
        address,
        successUrl: `${window.location.origin}/payment-success`,
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
    <button
      onClick={handleCheckout}
      className={`px-4 py-2 rounded-md transition-colors shadow-sm flex justify-center items-center h-10
            ${cart.length === 0 ? "bg-stone-300 opacity-80 cursor-default" : "bg-secondary/80 hover:bg-secondary cursor-pointer"}`}
      disabled={cart.length === 0 || loading}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <div className="flex items-center gap-2">
          checkout
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
      )}
    </button>
  );
}