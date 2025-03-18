import axios from "axios";
import { useState } from "react";
import { Order } from "../types";

export default function SendEmailButton({ order, setOrder }: { order: Order, setOrder: (updatedOrder: Order) => void }) {
  const [sendingEmail, setSendingEmail] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const sendOrderShippedEmail = async () => {
    setSendingEmail(true);
    try {
      await axios.post('/api/send-shipped-email', { orderId: order._id });
      setOrder({ ...order, status: 'shipped', sentShippedEmail: true });
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setSendingEmail(false);
      setShowPopup(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowPopup(false);
    }
  };

  return (
    <>
      <button onClick={() => setShowPopup(true)}
        className={`btn text-sm mt-2 flex justify-center items-center ${order.sentShippedEmail && '!bg-gray-200 !cursor-default'}`}
        disabled={sendingEmail || order.sentShippedEmail}
      >
        {order.sentShippedEmail ? 'Sent Shipped Email' : 'Send Shipped Email'}
      </button>

      {showPopup && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 cursor-pointer">✕</button>

            {/* Popup Content */}
            <h2 className="text-lg font-semibold mb-4">Send Shipped Email 📦</h2>
            <p className="text-gray-700 mb-6">
              Let {order.customerName} know that their order has been shipped?
            </p>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <button onClick={sendOrderShippedEmail} className="btn text-sm mt-2 flex justify-center items-center" disabled={sendingEmail}>
                {sendingEmail ? (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'Send Email'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}