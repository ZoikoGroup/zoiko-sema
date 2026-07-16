export default function DeveloperExperience() {
  return (
    <section className="bg-[#F3F2FD] px-6 py-24 md:px-16">
      <style>{`
        @keyframes devFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes devFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .dev-anim {
          opacity: 0;
          animation: devFadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .dev-anim-delay-1 { animation-delay: 0.08s; }
        .dev-anim-delay-2 { animation-delay: 0.16s; }
        .dev-image {
          opacity: 0;
          animation: devFadeIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.22s;
        }
        @media (prefers-reduced-motion: reduce) {
          .dev-anim, .dev-image {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="dev-anim text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              A Developer Experience like no other.
            </h2>
            <p className="dev-anim dev-anim-delay-1 mt-4 text-[15px] leading-relaxed text-slate-500">
              Clean SDKs, interactive sandbox environments, and documentation
              that actually makes sense. We prioritize your time.
            </p>
          </div>

          <div className="dev-anim dev-anim-delay-2 flex shrink-0 items-center gap-3">
            <button className="rounded-lg bg-[#0058BE] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-indigo-500">
              Explore Docs
            </button>
            <button className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50">
              Get API Key
            </button>
          </div>
        </div>

        <div className="dev-image mt-12 overflow-hidden rounded-2xl shadow-xl">
          <img src="/integration-scalability/exp.png"
            alt="Image"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
