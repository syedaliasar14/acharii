"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Order } from '../types';
import OrderCard from './OrderCard';

export default function Admin() {
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
    <main className="flex flex-col px-8">
      <h1 className="text-5xl md:text-6xl">Orders</h1>
      {loading && (
        <div className="flex justify-center items-center mt-20">
          <svg className="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      <div className='mt-8 flex flex-col gap-4'>
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </main>
  );
}