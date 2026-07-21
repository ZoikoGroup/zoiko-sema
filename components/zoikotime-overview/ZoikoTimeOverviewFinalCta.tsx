export default function ZoikoTimeOverviewFinalCta() {
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

      <section
        className="px-6 py-20 sm:px-10 lg:px-16"
        style={{
          background: "linear-gradient(160deg, #171B4A 0%, #11163C 50%, #201A4D 100%)",
        }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <span className="fade-up inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#8FA3FF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8FA3FF]" />
            Get Started
          </span>

          <h2 className="fade-up mt-4 text-3xl font-bold leading-tight text-white md:text-[34px]">
            See workforce assurance with evidence, not assumptions.
          </h2>

          <p className="fade-up mx-auto mt-4 max-w-lg text-[15px] leading-7 text-[#9AA3C0]">
            Request a guided demo, download free to explore, or open your
            dashboard if you&apos;re already a customer.
          </p>

          <div className="fade-up mt-8 flex flex-wrap items-center justify-center gap-4">
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
          </div>

          <a
            href="/zoikotime/workforce-overview"
            className="fade-up mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8FA3FF] transition hover:text-white"
            style={{ animationDelay: ".1s" }}
          >
            Open ZoikoTime Dashboard
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
