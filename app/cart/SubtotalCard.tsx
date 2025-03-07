import { CartItem } from "../types";

export default function SubtotalCard({ cart }: { cart: CartItem[] }) {
  return (
    <div className="flex flex-col justify-between items-center p-4 bg-stone-200">
      <div className="flex flex-col w-full">
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-2 border-b border-stone-300">
            <span className="mr-2">{item.quantity}x {item.name}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between self-stretch items-center mt-4 p-2">
        <h2 className="text-2xl">Subtotal</h2>
        <p className="text-2xl">${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
      </div>
    </div>
  )
}