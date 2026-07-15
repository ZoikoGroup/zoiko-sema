export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0E2E] px-6 py-20 md:px-16 lg:py-28">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .hero-anim {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hero-anim-delay-1 { animation-delay: 0.05s; }
        .hero-anim-delay-2 { animation-delay: 0.15s; }
        .hero-anim-delay-3 { animation-delay: 0.25s; }
        .hero-anim-delay-4 { animation-delay: 0.35s; }
        .hero-image-anim {
          opacity: 0;
          animation: heroFadeIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.2s;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-anim, .hero-image-anim {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Left column */}
        <div className="lg:col-span-5">
          <p className="hero-anim text-xs font-semibold uppercase tracking-[0.14em] text-indigo-400">
            Integration &amp; Scalability
          </p>

          <h1 className="hero-anim hero-anim-delay-1 mt-4 max-w-110 text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-[2.75rem]">
            Connect Zoiko Sema with your existing enterprise ecosystem.
          </h1>

          <p className="hero-anim hero-anim-delay-2 mt-6 max-w-md text-[15px] leading-relaxed text-slate-400">
            Unify disparate data sources, automate complex workflows, and
            scale your global operations with medical-grade precision and
            obsidian-strength security.
          </p>

          <div className="hero-anim hero-anim-delay-3 mt-9 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-indigo-500">
              Start free
            </button>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B0E2E] transition-colors duration-200 hover:bg-slate-200">
              Get a demo
            </button>
          </div>
        </div>

        {/* Right column - image */}
        <div className="hero-image-anim lg:col-span-7">
          <div className="overflow-hidden rounded-2xl">
            <img src="/integration-scalability/hero.png"
              alt="Image"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
