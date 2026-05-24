import { useState } from "react";

export default function PickupTooltip() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowPopup(false);
    }
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 cursor-pointer"
        onClick={() => setShowPopup(true)} >
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
      </svg>

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
            >
              ✕
            </button>

            {/* Popup Content */}
            <h2 className="text-lg font-semibold mb-4">Pickup Information</h2>
            <p className="text-gray-700">
              Choose this option if you can pick up your order in Newington, CT. We will contact you to arrange a convenient date and time. No shipping fees will apply.
            </p>
          </div>
        </div>
      )}
    </>
  );
}