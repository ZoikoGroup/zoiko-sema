export default function SecurityComplianceHero() {
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
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#8FA3FF]">
              Security & Compliance
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-white md:text-[44px]">
              Enterprise security and governance built into every workspace.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#C8C8C8]">
              Show how Zoiko Sema helps organizations manage identity,
              access, communication security, AI governance, compliance
              workflows, audit readiness, and operational trust from one
              unified control layer.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/start-free"
                className="rounded-full bg-[#4F63F0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
              >
                Start free
              </a>

              <a
                href="/get-a-demo"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#11163C] transition hover:bg-gray-100"
              >
                Get a demo
              </a>
            </div>
          </div>

          <div className="fade-up delay-1 overflow-hidden">
            <img
              src="/security-compliance/hero.webp"
              alt="Enterprise security and governance"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
