export default function PartnersHero() {
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
              Company / Partners
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-white md:text-[44px]">
              Partner with Zoiko Sema to bring{" "}
              <span className="text-[#8FA3FF]">
                governed business communication to more teams
              </span>
              .
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#C8C8C8]">
              Join the Zoiko Sema ecosystem to build integrations, support
              deployments, refer qualified customers, guide enterprise
              adoption, and help teams communicate with context, security,
              and AI governance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="rounded-full bg-[#4F63F0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
              >
                Become a Partner
              </a>

              <a
                href="#partner-types"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#11163C] transition hover:bg-gray-100"
              >
                Explore Partner Types
              </a>
            </div>

            <p className="mt-6 text-xs leading-6 text-[#7D869F]">
              Applications are reviewed for partner fit, customer value,
              operational readiness, and brand alignment.
            </p>
          </div>

          <div className="fade-up delay-1 overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/partners/Partners-banner.webp"
              alt="Partner with Zoiko Sema"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
