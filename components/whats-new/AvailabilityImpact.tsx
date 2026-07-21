const cards = [
  {
    title: "Plan & platform",
    description: "Shown per update — never assumed universal.",
  },
  {
    title: "Workspace policy",
    description: "If your admin has restricted it, the card explains why.",
  },
  {
    title: "Impact marker",
    description: "No action, Review, Admin action, Migration, or Breaking.",
  },
];

export default function AvailabilityImpact() {
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

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="fade-up text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
              Availability and Impact
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[34px]">
              Every card states exactly who it applies to.
            </h2>
          </div>

          <div
            className="fade-up mt-10 overflow-hidden rounded-2xl shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ animationDelay: ".1s" }}
          >
            <img
              src="/whats-new/availability-impact.png"
              alt="Reviewing update availability"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
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
