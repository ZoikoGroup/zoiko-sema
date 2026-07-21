const badges = [
  "Human-in-command AI",
  "Policy-based assurance",
  "Worker transparency",
  "Audit-ready evidence",
];

export default function ZoikoTimeOverviewHero() {
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

      <section
        className="px-6 py-20 sm:px-10 lg:px-16"
        style={{
          background:
            "linear-gradient(160deg, #11163C 0%, #171B4A 55%, #201A4D 100%)",
        }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#8FA3FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8FA3FF]" />
              ZoikoTime Platform
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-[42px]">
              Workforce assurance with evidence, context, and human oversight.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#C8C8C8]">
              ZoikoTime helps organizations verify approved work sessions,
              apply workforce policies, surface explainable exceptions, and
              preserve reviewable evidence — while giving workers clear
              notice, visibility, and correction routes.
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
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Download free
              </a>

              <a
                href="#why-this-category-exists"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8FA3FF] transition hover:text-white"
              >
                See how it works
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-[#DDE1F0]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-lg text-xs italic leading-6 text-[#7D869F]">
              No automatic employment or payroll decision from AI alone. Data
              collection and visibility depend on approved purpose, policy,
              role, jurisdiction, and worker notice.
            </p>
          </div>

          <div
            className="fade-up delay-1 overflow-hidden rounded-2xl"
          >
            <img
              src="/zoikotime/overview/hero.png"
              alt="Workforce assurance evidence capture"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
