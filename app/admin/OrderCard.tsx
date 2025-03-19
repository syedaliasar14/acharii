import { useState } from 'react';
import axios from 'axios';
import { Order } from "../types";
import SendEmailButton from './SendEmailButton';
import PickupInfoPopup from './PickupInfoPopup';

export default function OrderCard({ order, setOrder }: { order: Order, setOrder: (updatedOrder: Order) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleStatusChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;
    setOrder({ ...order, status: newStatus });

    try {
      await axios.post('/api/update-order-status', { orderId: order._id, status: newStatus });
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  return (
    <>
      <div className={`bg-white shadow flex flex-row items-center cursor-pointer ${isExpanded ? 'rounded-t-lg' : 'rounded-lg'} ${order.status === 'new' && 'ring-2 ring-amber-500/50'}`}>
        <div onClick={toggleExpand} className='p-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className={`size-5 transform transition-transform ${isExpanded && 'rotate-180'}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div className='flex-1 py-4' onClick={toggleExpand}>
          <div className='overflow-hidden'>
            {order.address.name}
          </div>
        </div>
        <div className='p-4'>
          <span className={`px-2 py-1 rounded-md ${order.status === 'shipped' ? 'bg-green-200' : order.status === 'cancelled' ? 'bg-red-200' : order.status === 'processing' ? 'bg-sky-200' : order.status === 'new' ? 'bg-amber-200' : ''}`}>
            <select value={order.status} onChange={handleStatusChange} className='focus:outline-none cursor-pointer'>
              <option value="new">new</option>
              <option value="processing">processing</option>
              <option value="shipped">shipped</option>
              <option value="cancelled">cancelled</option>
            </select>
          </span>
        </div>
      </div>
      {isExpanded && (
        <div className='bg-stone-100 rounded-b-lg p-4 shadow flex flex-col -mt-4'>
          <div className='flex flex-col md:flex-row gap-4'>
            <strong>
              {order.items.map((item, index) => (
                <div key={index}>
                  {item.quantity}x {item.name}
                </div>
              ))}
            </strong>
            <div>
              {order.address.pickup ? (
                <PickupInfoPopup order={order} />
              ) : (
                <>
                  <strong>Address:</strong>
                  <div>
                    {order.address.street}, {order.address.street2 && ` ${order.address.street2},`}
                  </div>
                  <div>
                    {order.address.city}, {order.address.state}, {order.address.zip}
                  </div>
                </>
              )}
            </div>
            <div>
              <strong>Contact:</strong>
              <div>{order.email}</div>
              <div>{order.phone}</div>
              {!order.address.pickup && <SendEmailButton order={order} setOrder={setOrder} />}
            </div>
            <div className='text-sm opacity-80'>
              Ordered: {new Date(order.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}