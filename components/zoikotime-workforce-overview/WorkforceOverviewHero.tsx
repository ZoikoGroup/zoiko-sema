export default function WorkforceOverviewHero() {
  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(40px);
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

        .delay-1{animation-delay:.15s;}
      `}</style>

      <section id="top" className="bg-[#11163C] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8FA3FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8FA3FF]" />
              Workforce Overview
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-white md:text-[42px]">
              Know what needs attention. See the evidence behind it.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#C8C8C8]">
              ZoikoTime brings verified time, workforce status, approvals,
              exceptions, policy health, and data freshness into one
              role-scoped view built for responsible operational decisions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/get-a-demo"
                className="rounded-full bg-[#4F63F0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
              >
                Request a demo
              </a>

              <a
                href="/start-free"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#11163C] transition hover:bg-gray-100"
              >
                Start free
              </a>

              <a
                href="#product-showcase"
                className="text-sm font-semibold text-[#C8C8C8] underline underline-offset-4 transition hover:text-white"
              >
                See how it works
              </a>
            </div>

            <p className="mt-6 max-w-lg text-xs leading-6 text-[#7D869F]">
              A recorded session or exception is not a productivity verdict.
              Consequential decisions require authorized human review.
            </p>
          </div>

          <div
            className="fade-up delay-1 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          >
            <img
              src="/zoikotime/workforce-overview/hero.png"
              alt="Workforce overview dashboard on wall display"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
