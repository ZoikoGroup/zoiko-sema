export default function InfiniteScale() {
  return (
    <section className="bg-white px-6 py-24 md:px-16">
      <style>{`
        @keyframes scaleFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        .scale-heading {
          opacity: 0;
          animation: scaleFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .scale-heading-delay { animation-delay: 0.1s; }
        .scale-image {
          opacity: 0;
          animation: scaleFadeIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.2s;
        }
        @media (prefers-reduced-motion: reduce) {
          .scale-heading, .scale-image {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-6xl text-center">
        <h2 className="scale-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Engineered for Infinite Scale.
        </h2>
        <p className="scale-heading scale-heading-delay mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-500">
          Our distributed multi-tenant architecture handles millions of
          concurrent connections with sub-10ms latency overhead, ensuring
          your critical data flows uninterrupted.
        </p>

        <div className="scale-image mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl shadow-xl">
          <img src="/integration-scalability/scale.png"
            alt="image"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
