import path from "path";
import fs from "fs";
import { sendEmail } from "../sendEmail";
import { Order } from "@/app/types";

export async function sendOrderShippedEmail(to: string, order: Order) {
  const subject = "Acharii Order Shipped";
  const templatePath = path.join(process.cwd(), "utils/email/order-shipped/Order-Shipped.html");
  let html = fs.readFileSync(templatePath, "utf-8");
  const address = order.address;

  html = html.replace("{{orders}}", order.items.map((item) => `${item.quantity} x ${item.name}`).join("<br>"));
  html = html.replace("{{shippingAddress}}", `
    <br>${address.name}<br>${address.street}${address.street2 && `<br>${address.street2}`}<br>${address.city}, ${address.state} ${address.zip}
  `);

  const attachments = [{
    filename: "logo.svg",
    path: path.join(process.cwd(), "public/logo.svg"),
    cid: "logo",
  }]

  await sendEmail(to, subject, html, undefined, attachments);
}