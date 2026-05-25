import Image from "next/image";
import { CartItem, Product } from "../types";
import { useState } from "react";
import ProductDetailsPopup from "./product-details-popup";

export default function ProductCard({ product, type, onClick }: { product: Product | CartItem; type: "product" | "cart"; onClick?: () => void }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <article key={product.id} className="surface-card overflow-hidden flex-shrink-0">
        <div className={`relative overflow-hidden bg-foreground/5 cursor-pointer ${type === "cart" ? "h-[100px]" : "h-[280px]"}`} onClick={() => setShowPopup(true)}>
          {product.image ? (
            <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.24em] text-foreground/45">
              {product.name}
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-serif text-3xl leading-none text-foreground">{product.name}</p>
              <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-foreground/50">{product.size}</p>
            </div>
            {type === "cart" ? (
              <p className="text-lg font-semibold text-secondary flex-shrink-0">Qty: {(product as CartItem).quantity}</p>
            ) : (
            <p className="text-lg font-semibold text-secondary">${product.price.toFixed(2)}</p>
            )}
          </div>
          {type === "product" && (
            <p className="section-copy mt-5 line-clamp-3 min-h-[84px]">{product.description || "Rich spice, balanced acidity, and a finish that lifts the whole meal."}</p>
          )}
          <button onClick={onClick} className="btn mt-6 w-full">
            {type === "cart" ? "Remove" : "Add to Cart"}
          </button>
        </div>
      </article>

      {showPopup && (
        <ProductDetailsPopup
          product={product}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}