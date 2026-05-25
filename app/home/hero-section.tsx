import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="site-shell !px-0 flex flex-col-reverse gap-10 py-16 md:flex-row md:gap-0">
      <div className="flex flex-col justify-center px-6 py-10 sm:px-8 md:px-10 lg:px-12">
        <Image src="/logo.svg" alt="acharii" width={100} height={50} className='w-64 md:w-78 md:mt-20' />
        <p className="eyebrow mt-4 text-balance">Homemade with heart, spiced with soul</p>
        <p className="section-copy mt-6 max-w-xl text-base md:text-lg">
          Discover handcrafted achaar inspired by family recipes and made to bring bold flavor to everyday meals. From breakfast to dinner, each jar adds a rich, comforting kick you will keep reaching for.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/products" className="btn sm:w-auto sm:px-8">
            Shop the Collection
          </Link>
          <Link href="/#our-story" className="btn-secondary sm:w-auto sm:px-8">
            Discover the Brand
          </Link>
        </div>

        <div className="mt-10 grid gap-6 border-t border-primary/10 pt-8 sm:grid-cols-3">
          <div>
            <p className="font-serif text-3xl text-foreground">Handmade</p>
            <p className="mt-2 text-sm !text-muted eyebrow">Motherly touch</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-foreground">Bold flavor</p>
            <p className="mt-2 text-sm !text-muted eyebrow">Thoughtful spice blends</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-foreground">Fresh quality</p>
            <p className="mt-2 text-sm !text-muted eyebrow">Packed with care</p>
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 overflow-hidden min-h-[280px] md:min-h-[380px] lg:min-h-[560px]">
        <Image
          src="/hero.jpg"
          alt="Acharii jars"
          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover"
        />
      </div>

    </section>
  );
}