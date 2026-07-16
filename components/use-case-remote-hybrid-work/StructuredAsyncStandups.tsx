export default function StructuredAsyncStandups() {
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

      <section id="async-standups" className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div
            className="fade-up overflow-hidden rounded-2xl border border-[#ECECF4] shadow-lg"
          >
            <img
              src="/use-cases/remote-hybrid-work/async-standups.png"
              alt="Structured async standup dashboard"
              className="w-full object-cover"
            />
          </div>

          <div className="fade-up" style={{ animationDelay: ".15s" }}>
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#5B5FEF]">
              Async First
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Structured Async Standups
            </h2>

            <p className="mt-5 max-w-lg text-[17px] leading-8 text-[#6B7280]">
              Replace hour-long morning calls with structured, low-friction
              daily updates. Track blockers visually and trigger manager
              reviews automatically when tasks hit 100% completion.
            </p>

            <a
              href="#async-standups"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B5FEF] transition hover:text-[#4B4FE0]"
            >
              Explore standup automation
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
