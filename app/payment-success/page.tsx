"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function PaymentSuccess() {
  useEffect(() => localStorage.removeItem("cart"), []);

  return (
    <main className="flex flex-col justify-center items-center text-center gap-4 min-h-full my-auto">
      <div className="text-xl">thank you for ordering acharii!</div>
      <div className="text-sm">you should receive an email confirmation shortly.</div>
      <Link href="/" className="mt-12 px-4 py-2 w-xs md:w-md flex justify-center rounded-md cursor-pointer transition-colors shadow-sm bg-secondary/80 hover:bg-secondary">
        back to home
      </Link>
      <Link href="/products" className="px-4 py-2 w-xs md:w-md flex justify-center rounded-md cursor-pointer transition-colors shadow-sm bg-primary/80 hover:bg-primary">
        new order
      </Link>
    </main>
  );
}