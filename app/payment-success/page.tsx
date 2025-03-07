"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function PaymentSuccess() {
  useEffect(() => localStorage.removeItem("cart"), []);

  return (
    <main className="flex flex-col justify-center items-center text-center gap-4 min-h-full my-auto">
      <div className="text-xl flex flex-col">
        <div>Thank you for ordering acharii!</div>
        <div>🌶️✨</div>
      </div>
      <div className="text-sm">You should receive an email confirmation shortly.</div>
      <Link href="/" className="mt-12 px-4 py-2 w-xs md:w-md flex justify-center gap-2 items-center rounded-md cursor-pointer transition-colors shadow-sm bg-secondary/80 hover:bg-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        back to home
      </Link>
      <Link href="/products" className="px-4 py-2 w-xs md:w-md flex justify-center gap-2 items-center rounded-md cursor-pointer transition-colors shadow-sm bg-primary/80 hover:bg-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        new order
      </Link>
    </main>
  );
}