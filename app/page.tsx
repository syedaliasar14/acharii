"use client";

import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import WhatIsAchar from "./components/WhatIsAchar";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 md:gap-42">
      <Hero />
      <OurStory />
      <WhatIsAchar />
    </main>
  );
}
