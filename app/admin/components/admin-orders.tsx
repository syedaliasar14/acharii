'use client';

import { useState } from 'react';
import { Order } from '../../types';
import OrderCard from './order-card';

export default function AdminOrders({ initialOrders }: { initialOrders: Order[] }) {
  const [orders, setOrders] = useState(initialOrders);

  const handleOrderUpdate = (updatedOrder: Order) => {
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order._id === updatedOrder._id ? updatedOrder : order
      )
    );
  };

  return (
    <div className='mt-4 flex flex-col gap-4'>
      {orders.map((order) => (
        <OrderCard
          key={order._id}
          order={order}
          setOrder={handleOrderUpdate}
        />
      ))}
    </div>
  );
}