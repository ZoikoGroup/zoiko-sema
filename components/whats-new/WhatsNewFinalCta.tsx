export default function WhatsNewFinalCta() {
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
          background:
            "radial-gradient(circle at 50% 30%, #2A2F7A 0%, #14163C 45%, #0B0D26 100%)",
        }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <span className="fade-up inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#8FA3FF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8FA3FF]" />
            Keep Exploring
          </span>

          <h2 className="fade-up mt-4 text-3xl font-bold leading-tight text-white md:text-[36px]">
            See it for yourself, or bring your team along.
          </h2>

          <p className="fade-up mx-auto mt-4 max-w-lg text-[15px] leading-7 text-[#9AA3C0]">
            Start free, get a guided demo, or talk to sales about rolling
            this out.
          </p>

          <div className="fade-up mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/start-free"
              className="rounded-full bg-[#4F63F0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
            >
              Start free
            </a>

            <a
              href="/get-a-demo"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get a demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
