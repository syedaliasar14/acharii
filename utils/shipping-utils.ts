import { Address, CartItem } from "@/app/types";

const jarWeights: Record<JarSize, number> = {
  "8oz": 1.25,  // lbs
  "12oz": 1.75, // lbs
  "16oz": 2.25  // lbs
};

type JarSize = "8oz" | "12oz" | "16oz";

export function calculateTotalWeight(cart: CartItem[]) {
  let totalWeight = 0;

  cart.forEach(item => {
    totalWeight += (jarWeights[item.size as JarSize] || 0) * item.quantity;
  });

  return totalWeight;
}

export async function calculateShippingCost(cart: CartItem[], address: Address) {
  // Simulate shipping cost calculation based on address and cart weight
  // const weight = calculateTotalWeight(cart);
  // ... TODO

  let shippingCost;
  if (address.state.toUpperCase() === "CT") {
    shippingCost = 5;
  } else {
    shippingCost = 10;
  }

  return shippingCost.toFixed(2);
}