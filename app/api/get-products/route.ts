import { NextRequest, NextResponse } from 'next/server';
import { Product } from '../../types';
import stripe from '@/lib/stripe';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  try {
    const products = await stripe.products.list({ active: true });
    products.data.sort((a, b) => (a.created < b.created ? -1 : 1));
    const mappedProducts = await Promise.all(products.data.map(p => mapStripeProducts(p)));
    return NextResponse.json(mappedProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

async function mapStripeProducts (stripeProduct: Stripe.Product): Promise<Product> {
  const price = await stripe.prices.list({ product: stripeProduct.id});

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