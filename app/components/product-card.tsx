import Image from "next/image";
import { CartItem, Product } from "../types";
import { useState } from "react";
import ProductDetailsPopup from "./product-details-popup";

export default function ProductCard({ product, type, onClick }: { product: Product | CartItem; type: "product" | "cart"; onClick?: () => void }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* <div className="rounded-xl shadow-md bg-white max-w-md w-full">
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
      </div> */}

      <article key={product.id} className="surface-card overflow-hidden flex-shrink-0">
        <div className="relative h-[280px] overflow-hidden bg-accent cursor-pointer" onClick={() => setShowPopup(true)}>
          {product.image ? (
            <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.24em] text-foreground/45">
              Product image
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-serif text-3xl leading-none text-foreground">{product.name}</p>
              <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-foreground/50">{product.size || "Small-batch jar"}</p>
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
            {type === "cart" ? "Remove" : "+ Add to Cart"}
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