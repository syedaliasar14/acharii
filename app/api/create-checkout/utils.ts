import { Address } from "@/app/types";
import Stripe from "stripe";

export function getShippingOptions(shippingCost: number, address: Address): Stripe.Checkout.SessionCreateParams.ShippingOption[] {
  const shipping_options: Stripe.Checkout.SessionCreateParams.ShippingOption[] = [];
  
  if (address.localDelivery) {
    return [{
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 0,
          currency: 'usd',
        },
        display_name: 'Local Delivery/Pickup (CT)',
      },
    }]
  } else {
    shipping_options.push(
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: shippingCost*100,
            currency: 'usd',
          },
          display_name: 'Shipping',
        },
      }
    );
  }

  return shipping_options;
}