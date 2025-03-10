import { NextRequest, NextResponse } from 'next/server';
import { CartItem, Product } from '../../types';
import stripe from '@/lib/stripe';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  try {
    const { cart } = await req.json();
    const productIds = cart.map((item: { id: string }) => item.id);
    if (productIds.length === 0) {
      return NextResponse.json([]);
    }

    const products = await stripe.products.list({ active: true, ids: productIds });
    products.data.sort((a, b) => (a.created < b.created ? -1 : 1));
    const mappedProducts = await Promise.all(products.data.map(p => mapStripeProducts(p, cart)));
    return NextResponse.json(mappedProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

async function mapStripeProducts(stripeProduct: Stripe.Product, cart: { id: string, quantity: number }[]): Promise<CartItem> {
  const price = await stripe.prices.list({ product: stripeProduct.id });
  const cartItem = cart.find(item => item.id === stripeProduct.id);

  return {
    id: stripeProduct.id,
    name: stripeProduct.name,
    size: stripeProduct.metadata.size || '',
    description: stripeProduct.description || '',
    price: (price?.data[0]?.unit_amount || 0) / 100,
    priceId: price?.data[0]?.id || '',
    image: stripeProduct.images[0] || '',
    quantity: cartItem ? cartItem.quantity : 0,
  };
}