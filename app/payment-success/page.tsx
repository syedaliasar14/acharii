"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function PaymentSuccess() {
  useEffect(() => localStorage.removeItem("cart"), []);

  return (
    <main className="site-shell flex flex-col pt-16 flex-grow justify-center items-center text-center gap-4 min-h-full bg-primary">
      <div className="flex flex-col gap-4 my-auto py-12 section-copy">
        <div className="text-xl flex flex-col text-white">
          <div>Thank you for ordering acharii!</div>
          <div>🌶️✨</div>
        </div>
        <div className="text-sm text-white">You should receive an email confirmation shortly.</div>
        <Link href="/" className="btn-secondary mt-12 !w-xs md:!w-md flex justify-center gap-2 items-center">
          Back to Home
        </Link>
        <Link href="/products" className="btn-secondary !w-xs md:!w-md flex justify-center gap-2 items-center">
          New Order
        </Link>
      </div>
    </main>
  );
}