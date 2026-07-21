export default function ResourceLibraryHero() {
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

      <section className="bg-[#F3F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <h1 className="text-4xl font-bold leading-tight text-[#1F2937] md:text-[44px]">
              Download trusted Zoiko Sema resources whenever you need them.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#6B7280]">
              Design a professional download experience where users can
              access current, version-controlled documentation through one
              trusted Resource Library.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/start-free"
                className="rounded-lg bg-[#4F63F0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
              >
                Get Started
              </a>

              <a
                href="#advanced-circuit-integrity"
                className="rounded-lg border border-[#D1D5DB] bg-white px-6 py-3 text-sm font-semibold text-[#1F2937] transition hover:bg-[#F9FAFB]"
              >
                View Manifest
              </a>
            </div>
          </div>

          <div
            className="fade-up delay-1 overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1"
          >
            <img
              src="/resources/downloads/hero-knowledge-hub.png"
              alt="Zoiko Sema knowledge hub"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
