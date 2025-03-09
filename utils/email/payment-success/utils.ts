import path from "path";
import fs from "fs";
import { sendEmail } from "../sendEmail";
import { fileURLToPath } from "url";
import { Order } from "@/app/types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function sendPaymentSuccessEmail(to: string, order: Order) {
  const subject = "Acharii Order Confirmation";
  const templatePath = path.join(__dirname, "PaymentSuccessTemplate.html");
  let html = fs.readFileSync(templatePath, "utf-8");
  const address = order.address;

  html = html.replace("{{orders}}", order.items.map((item) => `${item.quantity} x ${item.name} -- $${item.price.toFixed(2)}`).join("<br>"));
  html = html.replace("{{shippingFee}}", getShippingFee(order).toFixed(2));
  html = html.replace("{{totalAmount}}", order.totalAmount.toFixed(2));
  html = html.replace("{{shippingDetails}}", `${
    address.localDelivery ? "We'll reach out to you for local delivery or pickup." : "Your order will be processed and shipped within 3-5 business days."
  }`);
  html = html.replace("{{address}}", `${address.name}<br>${address.street}${address.street2 && `<br>${address.street2}`}<br>${address.city}, ${address.state} ${address.zip}`);
  html = html.replace("{{paidAmount}}", order.totalAmount.toFixed(2));

  const attachments = [{
    filename: "logo.svg",
    path: path.join(__dirname, "logo.svg"),
    cid: "logo",
  }]

  await sendEmail(to, subject, html, undefined, attachments);
}

function getShippingFee(order: Order) {
  const total = order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = order.totalAmount - total;
  return shippingFee;
}