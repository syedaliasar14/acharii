"use client";

import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import WhatIsAchaar from "./components/WhatIsAchaar";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 md:gap-42">
      <Hero />
      <OurStory />
      <WhatIsAchaar />
    </main>
  );
}
