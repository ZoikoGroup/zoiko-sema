const cards = [
  {
    title: "Unverified time",
    description: "Self-reported hours with no source, confidence, or review trail.",
  },
  {
    title: "Fragmented policy",
    description: "Rules applied inconsistently across teams, tools, and jurisdictions.",
  },
  {
    title: "Opaque monitoring",
    description: "Hidden collection erodes trust and invites legal and works-council risk.",
  },
];

export default function WhyCategoryExists() {
  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .fade-up{
          opacity:0;
          animation:fadeUp .8s ease forwards;
        }
      `}</style>

      <section id="why-this-category-exists" className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
              Why This Category Exists
            </span>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-[#1F2937] md:text-[34px]">
              Unverified time, fragmented policy, and opaque monitoring
              don&apos;t scale trust.
            </h2>
          </div>

          <div
            className="fade-up mt-10 overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ animationDelay: ".1s" }}
          >
            <img
              src="/zoikotime/overview/why-category.png"
              alt="Team reviewing a video call wall display"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <h3 className="text-base font-semibold text-[#1F2937]">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
