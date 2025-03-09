import Image from "next/image";

export default function OurStory() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start relative py-30 px-8 md:px-16 overflow-hidden">
      <Image
        src="/ourstory.jpg"
        alt="acharii"
        className="absolute top-0 right-0 md:block hidden max-w-3xl w-1/2 overflow-hidden"
        width={1000}
        height={1000}
      />
      <div className="md:hidden h-[300px] overflow-hidden">
        <Image src="/ourstory.jpg" alt="acharii" width={300} height={300} />
      </div>
      <div className="flex flex-col md:pr-20 items-center md:w-1/2 md:items-start md:text-left">
        <h1 className="mt-12 md:mt-0 md:text-7xl text-6xl font-semibold relative">Our Story</h1>
        <div className="text-md mt-8 relative flex flex-col gap-4">
          <p>{`
            Acharii was born out of a deep love for homemade food and the traditions that come with it. Growing up in a Pakistani household, our kitchen was always filled with the rich aroma of slow-cured spices and the comforting warmth of family meals. Achar wasn't just something we ate—it was a connection to our roots, a piece of heritage lovingly prepared by our elders.
          `}</p>
          <p>{`
            What started as a family recipe, perfected over generations, soon became a passion to share the authentic taste of homemade achar with the world. Every jar of acharii is crafted with the same care and dedication, using hand-picked ingredients and traditional techniques to ensure every bite is packed with flavor and nostalgia.
          `}</p>
          <p>{`
            From our kitchen to yours, we hope Acharii brings a taste of home, a dash of tradition, and just the right amount of spice to your table.🌶️
          `}</p>
        </div>
      </div>
    </div>
  );
}