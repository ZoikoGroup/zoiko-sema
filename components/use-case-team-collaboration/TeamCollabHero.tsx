const badges = [
  "Role-based access",
  "Controlled guest collaboration",
  "Admin-governed AI",
  "Audit-ready history",
];

export default function TeamCollabHero() {
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

      <section className="bg-[#11163C] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <span className="inline-block rounded-full bg-[#232B57] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8FA3FF]">
              Team Collaboration
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-white md:text-[44px]">
              Bring every team into one clear workspace.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#C8C8C8]">
              Keep messages, meetings, decisions, files, tasks, and reviewed
              AI follow-up together so teams move forward with shared context
              and clear ownership.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/get-a-demo"
                className="rounded-full bg-[#4F63F0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
              >
                Get a demo
              </a>

              <a
                href="/start-free"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#11163C] transition hover:bg-gray-100"
              >
                Start free
              </a>

              <a
                href="#core-capabilities"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8FA3FF] transition hover:text-white"
              >
                Watch product tour
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-[#C8C8C8]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2ED47A]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="fade-up delay-1 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src="/use-cases/team-collaboration/hero.webp"
              alt="Zoiko Sema team workspace"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
