const servingIdeas = [
  {
    title: "Breakfast ritual",
    description: "Enjoy a spoonful with warm paratha and chai for a comforting start to the day.",
  },
  {
    title: "Weeknight upgrade",
    description: "Add it to rice, daal, or simple bowls when you want more flavor without extra cooking.",
  },
  {
    title: "Hosting detail",
    description: "Serve it as a side at family dinners so every guest can add spice and tang to their plate.",
  },
];

export default function ServeSection() {
  return (
    <section className="site-shell py-18 md:py-24">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
        <div>
          <p className="eyebrow">Serving ideas</p>
          <h2 className="section-title mt-5 text-foreground">Easy, delicious ways to enjoy acharii.</h2>
          <p className="section-copy mt-5 max-w-md">
            Whether you are new to achaar or already love it, these pairings make it simple to use at any meal.
          </p>
        </div>

        <div className="grid border border-foreground/5">
          {servingIdeas.map((idea, index) => (
            <div key={idea.title} className="grid gap-4 p-7 md:grid-cols-[120px_1fr] md:items-start md:p-8 border border-foreground/5 hover:border-secondary/80 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10">
              <p className="font-serif text-5xl leading-none text-secondary/80">0{index + 1}</p>
              <div>
                <p className="font-serif text-3xl leading-none text-foreground">{idea.title}</p>
                <p className="section-copy mt-4">{idea.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}