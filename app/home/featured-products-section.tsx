"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const sectionIcons = [
  { src: "/icons/garlic.svg", alt: "Garlic icon" },
  { src: "/icons/ginger.svg", alt: "Ginger icon" },
  { src: "/icons/jalapeno.svg", alt: "Jalapeno icon" },
  { src: "/icons/lemon.svg", alt: "Lemon icon" },
  { src: "/icons/mango.svg", alt: "Mango icon" },
];

const productImages = [
  "/products/IMG_4324.jpeg",
  "/products/IMG_5610.jpeg",
  "/products/IMG_5853.jpeg",
  "/products/IMG_5902.jpeg",
  "/products/IMG_5976.jpeg",
  "/products/IMG_6755.jpeg",
  "/products/IMG_6844.jpeg",
  "/products/IMG_6854.jpeg",
  "/products/IMG_7853.JPG",
  "/products/IMG_7854.JPG",
  "/products/IMG_7855.JPG",
  "/products/IMG_7856.JPG",
  "/products/IMG_7857.JPG",
  "/products/IMG_7860.JPG",
];

export default function FeaturedProductsSection() {
  return (
    <section className="site-shell py-18 md:py-24">
      <div className="mb-32 flex items-center justify-between w-full gap-2 overflow-x-auto pb-2 md:gap-8 lg:gap-12">
        {sectionIcons.map((icon) => (
          <div key={icon.src} className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-18 sm:w-18">
            <Image src={icon.src} alt={icon.alt} width={34} height={34} className="h-8 w-8 object-contain sm:h-9 sm:w-9 opacity-70" />
          </div>
        ))}
      </div>

      <div className="max-w-2xl flex flex-col text-balance ">
        <p className="eyebrow">Our collection</p>
        <h2 className="section-title mt-5 text-foreground">Shop all your favorite achaar flavors.</h2>
        <p className="section-copy mt-5 max-w-xl">
          Explore our bestselling picks and find the right level of tang, spice, and depth for your table.
        </p>

        <Link href="/products" className="btn mt-6 w-full sm:w-auto sm:px-8">
          Shop All Products
        </Link>
      </div>

      <div className="mt-12 -mx-6 sm:-mx-10 lg:-mx-12">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.4}
          spaceBetween={12}
          centeredSlides
          breakpoints={{
            640: {
              slidesPerView: 1.6,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.1,
              spaceBetween: 18,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 2.8,
              spaceBetween: 22,
              centeredSlides: false,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 24,
              centeredSlides: false,
            },
          }}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
        >
          {productImages.map((imageSrc) => (
            <SwiperSlide key={imageSrc}>
              <div className="relative h-[420px]">
                <Image
                  src={imageSrc}
                  alt="Featured achaar product"
                  fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}