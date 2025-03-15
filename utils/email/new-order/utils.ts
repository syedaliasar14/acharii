import path from "path";
import fs from "fs";
import { sendEmail } from "../sendEmail";
import { Order } from "@/app/types";

export async function sendNewOrderEmail(order: Order) {
  const subject = "New Acharii Order";
  const templatePath = path.join(process.cwd(), "utils/email/new-order/NewOrderTemplate.html");
  let html = fs.readFileSync(templatePath, "utf-8");

  html = html.replace("{{orders}}", order.items.map((item) => `${item.quantity} x ${item.name}`).join("<br>"));

  const attachments = [{
    filename: "logo.svg",
    path: path.join(process.cwd(), "utils/email/new-order/logo.svg"),
    cid: "logo",
  }]

  const to = "sa.asar14@gmail.com, so.asar@gmail.com, asaradeeba@gmail.com";

  await sendEmail(to, subject, html, undefined, attachments);
}