import { calculateShippingCost } from "@/utils/shippingUtils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { cart, address } = await req.json();
    const shippingCost = await calculateShippingCost(cart, address);
    return NextResponse.json({ shippingCost });
  } catch (error) {
    console.error('Error calculating shipping cost:', error);
    return NextResponse.json({ error: 'Failed to calculate shipping cost' }, { status: 500 });
  }
}