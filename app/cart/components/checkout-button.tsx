import { useState } from "react";
import { Address, AddressErrors, CartItem } from "../../types";
import axios from "axios";
import { CircleCheck, LoaderCircle } from "lucide-react";

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
      let shippingCost = 0;
      if (!address.pickup) {
        shippingCost = (await axios.post("/api/calculate-shipping", { cart, address })).data.shippingCost;
      }

      const res = await axios.post("/api/create-checkout", {
        cart,
        address,
        shippingCost,
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
      className={`btn flex justify-center items-center h-10
            ${cart.length === 0 ? "bg-stone-300 opacity-80 cursor-default" : "bg-secondary/80 hover:bg-secondary cursor-pointer"}`}
      disabled={cart.length === 0 || loading}
    >
      {loading ? (
        <LoaderCircle className="animate-spin h-5 w-5" />
      ) : (
        <div className="flex items-center gap-2">
          Checkout
          <CircleCheck className="size-5" />
        </div>
      )}
    </button>
  );
}