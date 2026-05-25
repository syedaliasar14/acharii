"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Order } from "../types";
import OrderCard from "./components/order-card";
import { LoaderCircle } from "lucide-react";

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      setLoading(true);
      try {
        const response = await axios.post('/api/get-orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
      setLoading(false);
    }

    fetchOrders();
  }, []);

return (
  <main className="flex flex-col px-8 mt-18 mb-8">
    <h1 className="!font-sans mt-4 text-5xl md:text-6xl">Orders</h1>
    {loading && <LoaderCircle className="animate-spin mx-auto flex justify-center items-center mt-20 text-secondary" />}

    {!loading && orders.length === 0 && (
      <div className="flex justify-center items-center mt-20">
        <p>No orders found.</p>
      </div>
    )}

    <div className='mt-4 flex flex-col gap-4'>
      {orders.map((order) => (
        <OrderCard key={order._id} order={order} setOrder={(updatedOrder: Order) => setOrders(orders.map((o) => o._id === updatedOrder._id ? updatedOrder : o))} />
      ))}
    </div>
  </main>
);
}