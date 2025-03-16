import React from "react";
import Image from "next/image";
import { CartItem, Product } from "../types";

interface ProductDetailsPopupProps {
  product: Product | CartItem;
  onClose: () => void;
}

export default function ProductDetailsPopup({ product, onClose }: ProductDetailsPopupProps) {
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Close the popup if the user clicks on the overlay
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div onClick={handleOverlayClick} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl shadow-lg max-w-3xl w-full max-h-[75vh] relative overflow-y-auto">

        <div className="flex flex-col md:flex-row h-full gap-3 md:gap-6 relative">
          {/* Close Button */}
          <button onClick={onClose} className="absolute z-50 shadow-lg top-4 right-4 md:left-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 cursor-pointer"
          >✕</button>

          {/* Product Image */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              objectFit="cover"
              layout="fill"
              className="rounded-t-xl md:rounded-l-xl md:rounded-r-none"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col w-full md:w-1/2 md:h-[400px] p-6 overflow-y-auto">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-lg text-gray-700 mt-2">${product.price?.toFixed(2)}</p>
            <p className="text-gray-600 mt-4">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}