import { useEffect, useState } from 'react';
import axios from 'axios';
import { Order } from "../types";

export default function OrderCard({ order }: { order: Order }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [status, setStatus] = useState(order.status);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleStatusChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;
    setStatus(newStatus);

    try {
      await axios.post('/api/update-order-status', { orderId: order._id, status: newStatus });
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  return (
    <>
      <div className={`bg-white shadow flex flex-row items-center cursor-pointer ${isExpanded ? 'rounded-t-lg' : 'rounded-lg'} ${status === 'new' && 'ring-2 ring-amber-500/50'}`}>
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
          <span className={`px-2 py-1 rounded-md ${status === 'shipped' ? 'bg-green-200' : status === 'cancelled' ? 'bg-red-200' : status === 'processing' ? 'bg-sky-200' : status === 'new' ? 'bg-amber-200' : ''}`}>
            <select value={status} onChange={handleStatusChange} className='focus:outline-none cursor-pointer'>
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
            <div>
              {order.items.map((item, index) => (
                <div key={index}>
                  {item.quantity}x {item.name}
                </div>
              ))}
            </div>
            <div>
              <strong>Address:</strong>
              <div>
                {order.address.street}, {order.address.street2 && ` ${order.address.street2},`}
              </div>
              <div>
                {order.address.city}, {order.address.state}, {order.address.zip}
              </div>
              {order.address.pickup && (
                <div className='flex items-center gap-1 text-sm text-primary'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  <div>Pickup</div>
                </div>
              )}
            </div>
            <div>
              <strong>Contact:</strong>
              <div>{order.email}</div>
              <div>{order.phone}</div>
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