import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Product } from '../../types';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-02-24.acacia',
  typescript: true,
});

const mapStripeProducts = (stripeProduct: Stripe.Product): Product => {
  return {
    id: stripeProduct.id,
    name: stripeProduct.name,
    size: stripeProduct.metadata.size || '',
    description: stripeProduct.description || '',
    price: stripeProduct.metadata.price ? parseFloat(stripeProduct.metadata.price) : 0,
    image: stripeProduct.images[0] || '',
  };
};

export async function POST(req: NextRequest) {
  const products = await stripe.products.list();
  const mappedProducts = products.data.map(mapStripeProducts);
  return NextResponse.json(mappedProducts);
}