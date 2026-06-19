"use client";

import React from "react";

export default function PricingHeroSection() {
  return (
    <>
      <style>{`
        @keyframes phFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes phDotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(71,71,135,0.4); }
          50%      { box-shadow: 0 0 0 5px rgba(71,71,135,0); }
        }

        .ph-enter-1 { animation: phFadeUp 0.5s cubic-bezier(.22,1,.36,1) 0.02s both; }
        .ph-enter-2 { animation: phFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.10s both; }
        .ph-enter-3 { animation: phFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.20s both; }
        .ph-enter-4 { animation: phFadeUp 0.5s cubic-bezier(.22,1,.36,1) 0.30s both; }

        .ph-badge-dot { animation: phDotPulse 2.2s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .ph-enter-1, .ph-enter-2, .ph-enter-3, .ph-enter-4 {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
          .ph-badge-dot { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Simple pricing for clearer communication"
        className="w-full bg-white py-20 md:py-24"
        style={{ background: "#ECF3FF" }}
      >
        <div className="mx-auto w-full max-w-4xl px-6 md:px-10 text-center">

          {/* ── Badge ── */}
          <div className="ph-enter-1 flex items-center justify-center gap-2 mb-6">
            <span className="ph-badge-dot w-1.5 h-1.5 rounded-full bg-[#474787] flex-shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#474787]">
              Pricing
            </span>
          </div>

          {/* ── Heading ── */}
          <h1
            className="ph-enter-2 font-bold leading-[1.15] tracking-tight text-[#15131F] mb-7"
            style={{ fontSize: "35px" }}
          >
            Simple pricing for clearer communication
          </h1>

          {/* ── Sub-copy ── */}
          <p className="ph-enter-3 text-[15px] leading-[1.75] text-[#5C5870] max-w-[640px] mx-auto mb-5">
            Start free. Upgrade when Sema becomes part of how you work. Business and
            Enterprise plans are built for teams that need accountable
            communication, AI-assisted follow-up, and governed deployment options.
          </p>

          {/* ── Fine print ── */}
          <p className="ph-enter-4 text-[12.5px] leading-relaxed text-[#9CA3AF] max-w-[560px] mx-auto">
            Free plan available. No credit card required. Currency selection
            affects displayed prices and checkout where supported.
          </p>

        </div>
      </section>
    </>
  );
}