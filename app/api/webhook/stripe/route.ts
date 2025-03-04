import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-02-24.acacia',
  typescript: true,
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature") as string;
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error(`Webhook signature verification failed. ${error}`);
    return NextResponse.json({ error: error }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const stripeObject: Stripe.Checkout.Session = event.data.object as Stripe.Checkout.Session;
        const customerEmail = stripeObject.customer_details?.email || stripeObject.customer_email || '';
        const orderId = stripeObject.client_reference_id;

        console.log(`Stripe Object: ${JSON.stringify(stripeObject)}`);
        console.log(`Payment for order ${orderId} received from ${customerEmail}`);

        // Send a confirmation email
        // await sendOrderConfirmationEmail(order);

        break;
      }

      // Handle other event types as needed

      default:
        // Unexpected event type
    }
  } catch (error) {
    console.error('Stripe Webhook Error:', error);
  }

  return NextResponse.json({});
}