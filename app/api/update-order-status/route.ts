import connectMongo from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import Order from '@/models/Order';

export async function POST(req: NextRequest) {
  await connectMongo();
  try {
    const { orderId, status } = await req.json();
    await Order.findByIdAndUpdate(orderId, { status });
    return NextResponse.json({ message: 'Order status updated successfully' });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}