import Image from "next/image";
import { CartItem, Product } from "../types";
import { useState } from "react";
import ProductDetailsPopup from "./ProductDetailsPopup";

export default function ProductCard({ product, type, onClick }: { product: Product | CartItem; type: "product" | "cart"; onClick?: () => void }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="rounded-xl shadow-md bg-white max-w-md w-full">
        {product.image && (
          <div onClick={() => setShowPopup(true)} className="relative w-full h-[200px] md:h-[300px] overflow-hidden rounded-t-xl cursor-pointer">
            <Image
              src={product.image}
              alt={product.name}
              objectFit="cover"
              width={500}
              height={500}
              className="w-full translate-y-[-40%] absolute top-1/2"
            />
          </div>
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          {type === "cart" ? (
            <p className="text-lg text-gray-700 mt-2">Qty: {(product as CartItem).quantity}</p>
          ) : (
            <p className="text-lg text-gray-700 mt-2">${product?.price?.toFixed(2)}</p>
          )}
          <button onClick={onClick}
            className={`mt-4 btn ${type === "cart" ? "!bg-primary/80 hover:!bg-primary !text-white" : "!bg-secondary/80 hover:!bg-secondary"}`}>
            {type === "cart" ? "Remove" : "+ Add to Cart"}
          </button>
        </div>
      </div>

      {showPopup && (
        <ProductDetailsPopup
          product={product}
          onClose={() => setShowPopup(false)}
          onAddToCart={onClick || (() => { })}
        />
      )}
    </>
  );
}