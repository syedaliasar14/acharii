"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { Product } from "../types";

const sectionIcons = [
  { src: "/icons/garlic.svg", alt: "Garlic icon" },
  { src: "/icons/ginger.svg", alt: "Ginger icon" },
  { src: "/icons/jalapeno.svg", alt: "Jalapeno icon" },
  { src: "/icons/lemon.svg", alt: "Lemon icon" },
  { src: "/icons/mango.svg", alt: "Mango icon" },
];

export default function FeaturedProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.post("/api/get-products").then((response) => {
      setProducts(response.data.slice(0, 3));
    }).catch(() => {
      setProducts([]);
    });
  }, []);

  return (
    <section className="site-shell py-18 md:py-24">
      <div className="mb-32 flex items-center justify-between w-full gap-2 overflow-x-auto pb-2 md:gap-8 lg:gap-12">
        {sectionIcons.map((icon) => (
          <div key={icon.src} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-18 sm:w-18">
            <Image src={icon.src} alt={icon.alt} width={34} height={34} className="h-8 w-8 object-contain sm:h-9 sm:w-9 opacity-70" />
          </div>
        ))}
      </div>

      <div className="max-w-2xl flex flex-col text-balance ">
        <p className="eyebrow">Our collection</p>
        <h2 className="section-title mt-5 text-foreground">Shop customer-favorite achaar jars.</h2>
        <p className="section-copy mt-5 max-w-xl">
          Explore our bestselling picks and find the right level of tang, spice, and depth for your table.
        </p>

        <Link href="/products" className="btn mt-6 w-full sm:w-auto sm:px-8">
          Shop All Products
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => (
            <article key={product.id} className="surface-card overflow-hidden">
              <div className="relative h-[280px] overflow-hidden bg-accent">
                {product.image ? (
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
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
                  <p className="text-lg font-semibold text-secondary">${product.price.toFixed(2)}</p>
                </div>
                <p className="section-copy mt-5 line-clamp-3 min-h-[84px]">{product.description || "Rich spice, balanced acidity, and a finish that lifts the whole meal."}</p>
                <Link href="/products" className="btn mt-6 w-full">
                  Buy This Style
                </Link>
              </div>
            </article>
          ))
        ) : (
          [
            {
              title: "Classic house jar",
              note: "A balanced everyday achaar with comforting flavor and a vibrant finish.",
            },
            {
              title: "Citrus-forward option",
              note: "Bright and tangy notes that pair beautifully with rice, paratha, and grilled foods.",
            },
            {
              title: "Gift-ready favorite",
              note: "A bold, crowd-pleasing jar perfect for sharing with family and friends.",
            },
          ].map((item) => (
            <article key={item.title} className="surface-card flex min-h-[380px] flex-col justify-between p-6 md:p-8">
              <div>
                <p className="eyebrow">Featured jar</p>
                <p className="mt-5 font-serif text-4xl leading-none text-foreground">{item.title}</p>
                <p className="section-copy mt-5">{item.note}</p>
              </div>
              <Link href="/products" className="btn mt-8 w-full">
                Shop the Collection
              </Link>
            </article>
          ))
        )}
      </div>
    </section>
  );
}