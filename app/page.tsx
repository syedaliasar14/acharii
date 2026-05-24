"use client";

import Hero from "./home/hero-section";
import OurStory from "./home/our-story-section";
import WhatIsAchaar from "./home/what-is-achaar-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 md:gap-42">
      <Hero />
      <OurStory />
      <WhatIsAchaar />
    </main>
  );
}
