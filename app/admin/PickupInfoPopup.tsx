import { useState } from "react";
import { Order } from "../types";

export default function PickupInfoPopup({ order }: { order: Order }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowPopup(false);
    }
  };

  return (
    <>
      <div className='flex items-center gap-1 text-primary ring-2 ring-primary/50 p-2 rounded-md bg-primary/10 cursor-pointer' onClick={() => setShowPopup(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
        </svg>
        <div>Order for Pickup</div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative mx-4" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 cursor-pointer">✕</button>

            {/* Popup Content */}
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              Order for Pickup
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-primary">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
            </h2>
            <p className="text-gray-700 mb-6">
              Text <strong>{order.customerName}</strong> at <strong>{order.phone}</strong> to coordinate pickup.
            </p>

          </div>
        </div>
      )}
    </>
  );
}