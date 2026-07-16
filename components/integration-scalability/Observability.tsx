const stats = [
  { label: "Uptime", value: "99.998%" },
  { label: "Avg. Latency", value: "14.2ms" },
];

export default function Observability() {
  return (
    <section className="bg-[#0B0E2E] px-6 py-20 md:px-16">
      <style>{`
        @keyframes observFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes observFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .observ-image {
          opacity: 0;
          animation: observFadeIn 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .observ-anim {
          opacity: 0;
          animation: observFadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .observ-anim-delay-1 { animation-delay: 0.1s; }
        .observ-stat {
          opacity: 0;
          animation: observFadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .observ-stat:nth-child(1) { animation-delay: 0.25s; }
        .observ-stat:nth-child(2) { animation-delay: 0.35s; }
        @media (prefers-reduced-motion: reduce) {
          .observ-image, .observ-anim, .observ-stat {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left column */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/integration-scalability/operational.png"
            alt="Image"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Right column */}
        <div>
          <h2 className="observ-anim text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
            Real-time observability at every layer.
          </h2>

          <p className="observ-anim observ-anim-delay-1 mt-4 max-w-md text-[15px] leading-relaxed text-slate-400">
            Don&apos;t fly blind. Monitor the health of every connection with
            granular status indicators, error tracing, and proactive alerting.
          </p>

          <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="observ-stat rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  {label}
                </span>
                <p className="mt-1 text-2xl font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
