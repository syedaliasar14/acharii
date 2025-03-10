import Image from "next/image";
import { CartItem, Product } from "../types";

export default function ProductCard({ product, type, onClick }: { product: Product | CartItem; type: "product" | "cart"; onClick?: () => void }) {
  return (
    <div className="rounded-xl shadow-md lowercase bg-white max-w-md w-full">
      {product.image && (
        <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden rounded-t-xl">
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
        <h2 className="text-xl">{product.name}</h2>
        {type === "cart" ? (
          <p className="text-lg">qty: {(product as CartItem).quantity}</p>
        ) : (
          <p className="text-lg">${product?.price?.toFixed(2)}</p>
        )}
        <button onClick={onClick}
          className={`w-full mt-4 px-4 py-2 rounded-md cursor-pointer transition-colors shadow-sm active:scale-95 transition-transform
            ${type === "cart" ? "bg-primary/80 hover:bg-primary text-white" : "bg-secondary/80 hover:bg-secondary"}`}>
          {type === "cart" ? "remove" : "+ add to cart"}
        </button>
      </div>
    </div>
  );
}