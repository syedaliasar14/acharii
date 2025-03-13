import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center md:items-start bg-[url('/hero.jpg')] bg-cover bg-center relative py-20 px-8 md:px-16">
      <div className="absolute inset-0 md:bg-gradient-to-r from-primary via-primary to-transparent bg-gradient-to-b"></div>
      <div className="flex flex-col items-center md:w-1/2 md:items-start">
        <h1 className="md:text-6xl text-5xl font-semibold text-white relative">Homemade with Heart, <br />Spiced with Soul</h1>
        <div className="text-md text-white mt-8 relative flex flex-col gap-4">
          <p>{`
            At acharii, we believe that every jar of achar is more than just a condiment—it's a story of tradition, warmth, and bold flavors passed down through generations. Inspired by homemade recipes from our family kitchen, our achar is crafted with hand-picked ingredients, slow-cured to perfection, and packed with love.
          `}</p>
          <p>{`
            Whether you enjoy it with a warm roti, mix it into your rice, or savor it straight from the jar (we won't judge!), our achar brings a little nostalgia and a lot of spice to every meal.✨
          `}</p>
        </div>
        <Link href="/products" className="btn !w-max !bg-secondary flex flex-row items-center gap-2 mt-20 !px-8 !shadow-md text-lg relative">
          Order Now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}