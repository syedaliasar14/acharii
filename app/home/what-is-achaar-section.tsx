import Link from "next/link";

export default function WhatIsAchaar() {
  return (
    <section className="site-shell grid gap-8 py-18 md:grid-cols-[0.95fr_1.05fr] md:items-start md:gap-12 md:py-24">
      <div className="surface-card p-7 md:p-9">
        <p className="eyebrow">What is achaar?</p>
        <h2 className="section-title mt-5 text-foreground">A bold, spiced pantry essential with heritage behind it.</h2>
        <div className="section-copy mt-7 flex flex-col gap-5">
          <p>
            Achaar is a traditional South Asian pickle made by preserving fruits or vegetables with oil, salt, and deeply aromatic spices. It is bright, savory, tangy, and designed to sharpen the rest of the meal.
          </p>
          <p>
            If you are trying it for the first time, start with a small spoonful alongside your meal and adjust to taste. A little achaar goes a long way.
          </p>
        </div>
        <Link href="/products" className="btn mt-8 w-full sm:w-auto sm:px-8">
          Explore the Jars
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>

      <div className="grid border border-foreground/5 md:grid-cols-2">
        <div className="bg-white p-7 md:p-8 border border-foreground/5 hover:border-secondary/80 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10">
          <p className="font-serif text-3xl text-foreground">With paratha</p>
          <p className="section-copy mt-3">A classic breakfast pairing that immediately introduces the depth of the spice blend.</p>
        </div>
        <div className="bg-white p-7 md:p-8 border border-foreground/5 hover:border-secondary/80 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10">
          <p className="font-serif text-3xl text-foreground">With rice and yogurt</p>
          <p className="section-copy mt-3">The easiest entry point for first-time buyers who want one spoonful to transform a simple meal.</p>
        </div>
        <div className="bg-white p-7 md:p-8 border border-foreground/5 hover:border-secondary/80 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10">
          <p className="font-serif text-3xl text-foreground">With grilled foods</p>
          <p className="section-copy mt-3">A sharp, savory contrast that makes kebabs, chicken, and roasted vegetables feel more alive.</p>
        </div>
        <div className="bg-foreground/2 p-7 md:p-8 border border-foreground/5 hover:border-secondary/80 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10">
          <p className="font-serif text-3xl text-foreground">As a thoughtful gift</p>
          <p className="section-copy mt-3">A flavorful, unique pantry gift for family gatherings, holidays, and dinner hosting.</p>
        </div>
      </div>
    </section>
  );
}