const pillars = [
  {
    title: "Homemade recipes",
    copy: "Our achaar is inspired by traditional family methods, prepared in small batches for true homemade character.",
  },
  {
    title: "Bold, balanced spice",
    copy: "Every jar is made to bring tang, heat, and depth together so each spoonful upgrades simple meals.",
  },
  {
    title: "Made to be shared",
    copy: "Serve it at home, gift it to loved ones, or keep it as your go-to pantry favorite for everyday flavor.",
  },
];

export default function BrandPillarsSection() {
  return (
    <section className="site-shell py-18 md:py-24">
      <div className="grid border border-foreground/5 bg-foreground/2 md:grid-cols-3 cursor-default">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="bg-white p-7 md:p-8 border border-foreground/5 hover:border-secondary/80 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10">
            <p className="eyebrow">Why Acharii</p>
            <h2 className="mt-5 font-serif text-4xl leading-none text-foreground">{pillar.title}</h2>
            <p className="section-copy mt-5">{pillar.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}