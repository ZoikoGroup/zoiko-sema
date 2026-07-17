export default function FinalCta() {
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

      <section className="bg-[#4F63F0] px-6 py-20 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="fade-up text-3xl font-bold text-white md:text-[38px]">
            Ready for role-scoped workforce visibility?
          </h2>

          <p className="fade-up mx-auto mt-4 max-w-xl text-[17px] leading-8 text-white/85" style={{ animationDelay: ".1s" }}>
            Start free with one team, or request a demo for a governed,
            enterprise-wide rollout.
          </p>

          <div className="fade-up mt-8 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: ".2s" }}>
            <a
              href="/start-free"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#4F63F0] transition hover:bg-gray-100"
            >
              Start free
            </a>

            <a
              href="/get-a-demo"
              className="rounded-full bg-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
            >
              Request a demo
            </a>

            <a
              href="#top"
              className="rounded-full bg-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
            >
              Open Workforce Overview
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
