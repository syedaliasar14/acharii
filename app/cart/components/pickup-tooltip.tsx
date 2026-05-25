import { InfoIcon } from "lucide-react";
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
      <InfoIcon className="size-5 cursor-pointer" onClick={() => setShowPopup(true)} />

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white shadow-lg p-6 max-w-md w-full relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
            >
              ✕
            </button>

            {/* Popup Content */}
            <h2 className="text-2xl font-semibold mb-4">Pickup Information</h2>
            <p className="text-gray-700">
              Choose this option if you can pick up your order in Newington, CT. We will contact you to arrange a convenient date and time. No shipping fees will apply.
            </p>
          </div>
        </div>
      )}
    </>
  );
}