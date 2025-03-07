import connectMongo from '@/lib/mongoose';
import Order from '@/models/Order';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  await connectMongo();
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}