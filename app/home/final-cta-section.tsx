import Link from "next/link";
import Image from "next/image";

export default function FinalCtaSection() {
  return (
    <section className="site-shell pt-18 md:pt-24">
      <div className="border border-primary bg-primary px-6 py-12 text-white sm:px-8 md:px-12 md:py-16">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-secondary/90">Bring home Acharii</p>
        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-5xl leading-none md:text-6xl">Ready to add bold flavor to your meals?</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 md:text-base">
              Browse our collection and order your favorite jars today. Homemade with heart, spiced with soul.
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-6 w-full">
            <Image
              src="/cta-image.jpg"
              alt="A collection of achaar jars with vibrant colors and rich textures, showcasing the bold flavors of acharii products."
              width={400} height={400}
              className="w-full object-cover h-[200px]"
            />
            <Link href="/products" className="btn btn-secondary border-white/20 bg-white text-foreground hover:border-white hover:bg-primary hover:text-white sm:w-auto sm:px-8">
              Shop Acharii Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}