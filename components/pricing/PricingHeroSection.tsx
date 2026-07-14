"use client";

export default function PricingHeroSection() {
  return (
    <>
      <style>{`
        @keyframes phFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes phDotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(108,140,255,0.4); }
          50%      { box-shadow: 0 0 0 5px rgba(108,140,255,0); }
        }

        .ph-enter-1 { animation: phFadeUp 0.5s cubic-bezier(.22,1,.36,1) 0.02s both; }
        .ph-enter-2 { animation: phFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.10s both; }
        .ph-enter-3 { animation: phFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.20s both; }

        .ph-badge-dot { animation: phDotPulse 2.2s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .ph-enter-1, .ph-enter-2, .ph-enter-3 {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
          .ph-badge-dot { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Plans for individuals, teams, and enterprises"
        className="relative w-full overflow-hidden pt-20 pb-[110px] md:pt-24"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.05) 0%, transparent 35%), linear-gradient(135deg, #232C5C 0%, #1B2246 55%, #141A38 100%)",
        }}
      >
        <div className="relative mx-auto w-full max-w-4xl px-6 md:px-10 text-center">
          {/* ── Badge ── */}
          <div className="ph-enter-1 flex items-center justify-center gap-2 mb-6">
            <span className="ph-badge-dot w-1.5 h-1.5 rounded-full bg-[#6C8CFF] flex-shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8FA6FF]">
              Pricing
            </span>
          </div>

          {/* ── Heading ── */}
          <h1
            className="ph-enter-2 font-bold leading-[1.15] tracking-tight text-white mb-6"
            style={{ fontSize: "clamp(30px, 4.4vw, 44px)" }}
          >
            Plans for individuals, teams,
            <br className="hidden sm:block" /> and enterprises.
          </h1>

          {/* ── Sub-copy ── */}
          <p className="ph-enter-3 text-[15px] leading-[1.75] text-[#B8BFE0] max-w-[640px] mx-auto">
            One secure workspace for meetings, messaging, calls, mail, calendar,
            files, AI summaries, and governance — priced for how your
            organization actually grows.
          </p>
        </div>
      </section>
    </>
  );
}
