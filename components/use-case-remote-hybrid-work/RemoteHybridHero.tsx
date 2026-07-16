export default function RemoteHybridHero() {
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
        .delay-2{animation-delay:.25s;}
      `}</style>

      <section className="bg-[#F3F2FD] px-6 pt-20 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <span className="fade-up inline-block rounded-full bg-[#E7E8FD] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5B5FEF]">
            Remote & Hybrid Work
          </span>

          <h1 className="fade-up delay-1 mt-6 text-4xl font-bold leading-tight text-[#1F2937] md:text-[46px]">
            Coordinate <span className="text-[#5B5FEF]">remote</span> teams
            <br />
            without losing <span className="text-[#5B5FEF]">momentum</span>.
          </h1>

          <p className="fade-up delay-2 mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-[#6B7280]">
            Unified workspace designed for the asynchronous era. Align
            distributed teams with AI-driven summaries, time-zone
            intelligence, and seamless handoffs.
          </p>

          <div className="fade-up delay-2 mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/get-a-demo"
              className="rounded-full bg-[#5B5FEF] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4B4FE0]"
            >
              Launch Remote Hub
            </a>

            <a
              href="/customer-stories"
              className="rounded-full border border-[#5B5FEF] px-7 py-3 text-sm font-semibold text-[#5B5FEF] transition hover:bg-[#EEEEFE]"
            >
              View Demo Case
            </a>
          </div>
        </div>

        <div
          className="fade-up mx-auto mt-14 max-w-6xl overflow-hidden rounded-3xl"
          style={{ animationDelay: ".35s" }}
        >
          <img
            src="/use-cases/remote-hybrid-work/hero-dashboard.webp"
            alt="Remote coordination dashboard"
            className="w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
