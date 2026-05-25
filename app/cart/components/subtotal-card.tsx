import { CartItem } from "../../types";

export default function SubtotalCard({ cart }: { cart: CartItem[] }) {
  return (
    <div className="surface-card flex flex-col justify-between items-center p-4 bg-foreground/5">
      <div className="flex flex-col w-full">
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-2 border-b border-stone-300">
            <span className="mr-2">{item.quantity}x {item.name}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-4 self-stretch items-center mt-4 p-2">
        <span className="text-lg font-semibold self-end">Subtotal</span>
        <span className="text-2xl font-semibold">${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
      </div>
    </div>
  )
}