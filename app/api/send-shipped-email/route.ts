import connectMongo from '@/lib/mongoose';
import Order from '@/models/Order';
import { sendOrderShippedEmail } from '@/utils/email/order-shipped/utils';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  connectMongo();
  try {
    const { orderId } = await req.json();
    const order = await Order.findByIdAndUpdate(orderId, { status: 'shipped', sentShippedEmail: true }, { new: true });
    await sendOrderShippedEmail(order.email, order)
    return NextResponse.json({ message: 'Sent Order Shipped Email' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}