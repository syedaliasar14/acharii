import { CartItem } from "@/app/types";
import stripe from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { cart, address, successUrl, cancelUrl } = await req.json();
    const line_items = cart.map((item: CartItem) => ({
      price: item.priceId,
      quantity: item.quantity,
    }));

    const metadata = { 
      address: JSON.stringify(address),
      cart: JSON.stringify(
        cart.map((item: CartItem) => ({
          productId: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        }))
      ),
    };

    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: successUrl,
      cancel_url: cancelUrl,
      phone_number_collection: { enabled: true },
      metadata,
    });

    return NextResponse.json({ url: stripeSession.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}