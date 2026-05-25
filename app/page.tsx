import Hero from "./home/hero-section";
import BrandPillarsSection from "./home/brand-pillars-section";
import FeaturedProductsSection from "./home/featured-products-section";
import FinalCtaSection from "./home/final-cta-section";
import OurStory from "./home/our-story-section";
import ServeSection from "./home/serve-section";
import WhatIsAchaar from "./home/what-is-achaar-section";

export default function Home() {
  return (
    <main className="flex flex-col pb-20 md:pb-28">
      <Hero />
      <FeaturedProductsSection />
      <BrandPillarsSection />
      <OurStory />
      <WhatIsAchaar />
      <ServeSection />
      <FinalCtaSection />
    </main>
  );
}
