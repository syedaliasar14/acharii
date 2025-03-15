import Link from "next/link";

export default function WhatIsAchaar() {
  return (
    <div className="flex flex-col items-center md:items-end bg-[url('/whatisachaar.jpg')] bg-cover bg-start md:bg-center relative py-20 px-8 md:px-16">
      <div className="absolute inset-0 md:bg-gradient-to-l from-stone-900 to-transparent bg-gradient-to-b"></div>
      <div className="flex flex-col md:pl-8 items-center md:w-1/2 md:items-end md:text-right">
        <h1 className="md:text-6xl text-5xl font-semibold text-white relative">What is Achaar?</h1>
        <div className="text-md text-white mt-8 relative flex flex-col gap-4">
          <p>{`
            Achaar is a staple in Pakistani households—a vibrant, spiced pickle that transforms any meal with its bold flavors. Made by preserving fruits and vegetables in a rich blend of spices, oil, and salt, achaar strikes the perfect balance of tangy, spicy, and savory. Whether it's the fiery heat of chili, the zesty punch of lemon, or the deep, earthy notes of mixed vegetables, every bite is a burst of tradition and taste.
          `}</p>
          <p>{`
            More than just a condiment, achaar is a cherished part of Pakistani cuisine, passed down through generations. It's the finishing touch to a home-cooked meal, the secret ingredient to elevate simple dishes, and a nostalgic reminder of family gatherings around the dinner table.
          `}</p>
          <h3 className="mt-2 text-xl font-semibold">How to Eat Achaar</h3>
          <p>{`
            Achaar pairs beautifully with a variety of dishes, adding a punch of flavor to even the simplest meals. Enjoy it alongside warm, fluffy parathas or bread for a classic breakfast, mix it into plain rice with yogurt for a comforting bite, or serve it with lentils and curries to enhance their depth. It also makes a great companion to grilled meats and kebabs, offering a spicy contrast that awakens the taste buds. However you eat it, a little goes a long way—just a spoonful can elevate an entire dish.
          `}</p>
        </div>
        <Link href="/products" className="btn !w-max !bg-secondary flex flex-row items-center gap-2 mt-20 !px-8 !shadow-md text-lg relative">
          See Products
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>
    </div>
  );
}