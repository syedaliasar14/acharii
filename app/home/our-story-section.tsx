import Image from "next/image";

export default function OurStory() {
  return (
    <section id="our-story" className="site-shell grid gap-10 py-18 md:grid-cols-[0.92fr_1.08fr] md:gap-16 md:py-24">
      <div className="relative min-h-[420px] overflow-hidden border border-primary/10 md:min-h-[560px]">
        <Image
          src="/ourstory.jpg"
          alt="The Acharii story rooted in home cooking and tradition"
          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center">
        <p className="eyebrow">Our story</p>
        <h2 className="section-title mt-5 text-foreground">From our family kitchen to your everyday table.</h2>
        <div className="section-copy mt-8 flex flex-col gap-5">
          <p>
            Acharii started with the kind of recipes that live in memory before they ever live on paper. In a Pakistani home, achaar is not an accessory to the meal. It is part of the identity of the table.
          </p>
          <p>
            We make each jar with the same care passed down through generations so you get authentic flavor, dependable quality, and that familiar taste of home.
          </p>
          <p>
            Homemade with heart, spiced with soul. That is our promise in every order you place.
          </p>
        </div>

        <div className="surface-card mt-8 max-w-xl p-6 md:p-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-secondary">Our promise</p>
          <p className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Rich Pakistani flavor, handcrafted care, and jars made to bring people together.
          </p>
        </div>
      </div>
    </section>
  );
}