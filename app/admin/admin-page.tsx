import connectMongo from "@/lib/mongoose";
import { Order as OrderType } from "../types";
import Order from "@/models/Order";
import AdminOrders from "./components/admin-orders";

export default async function AdminPage() {
  await connectMongo();
  let orders = await Order.find().sort({ createdAt: -1 }) as OrderType[];
  orders = JSON.parse(JSON.stringify(orders));

  return (
    <main className="flex flex-col px-8 mt-18 mb-8">
      <h1 className="!font-sans mt-4 text-5xl md:text-6xl">Orders</h1>

      {orders.length === 0 && (
        <div className="flex justify-center items-center mt-20">
          <p>No orders found.</p>
        </div>
      )}

      <AdminOrders initialOrders={orders} />
    </main>
  );
}