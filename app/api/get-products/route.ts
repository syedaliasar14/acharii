import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Product } from '../../types';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-02-24.acacia',
  typescript: true,
});

export async function POST(req: NextRequest) {
  try {
    const products = await stripe.products.list();
    const mappedProducts = await Promise.all(products.data.map(p => mapStripeProducts(p)));
    console.log(mappedProducts);
    return NextResponse.json(mappedProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

async function mapStripeProducts (stripeProduct: Stripe.Product): Promise<Product> {
  const price = await stripe.prices.list({ product: stripeProduct.id });

  return {
    id: stripeProduct.id,
    name: stripeProduct.name,
    size: stripeProduct.metadata.size || '',
    description: stripeProduct.description || '',
    price: (price?.data[0]?.unit_amount || 0) / 100,
    priceId: price?.data[0]?.id || '',
    image: stripeProduct.images[0] || '',
  };
};