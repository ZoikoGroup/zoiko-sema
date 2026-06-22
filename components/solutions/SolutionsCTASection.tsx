"use client";

import React from "react";
import Link from "next/link";

export default function SolutionsCTASection() {
  return (
    <>
      <style>{`
        @keyframes scFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scBlobDrift1 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(22px,14px) scale(1.05); }
        }
        @keyframes scBlobDrift2 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(-18px,-12px) scale(1.04); }
        }

        .sc-enter-1 { animation: scFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.02s both; }
        .sc-enter-2 { animation: scFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.12s both; }
        .sc-enter-3 { animation: scFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.22s both; }
        .sc-enter-4 { animation: scFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.32s both; }

        .sc-blob-1 { animation: scBlobDrift1 11s ease-in-out infinite alternate; }
        .sc-blob-2 { animation: scBlobDrift2 14s ease-in-out infinite alternate-reverse; }

        /* primary pill — shimmer sweep */
        .sc-btn-primary {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease;
        }
        .sc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.28);
        }
        @keyframes scShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .sc-btn-primary::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(71,71,135,0.18) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .sc-btn-primary:hover::after { animation: scShimmer .65s ease forwards; }
        .sc-btn-primary:active { transform: translateY(0) scale(0.98); }
        .sc-btn-arrow { display: inline-block; transition: transform .2s ease; }
        .sc-btn-primary:hover .sc-btn-arrow { transform: translateX(4px); }

        /* secondary pill — outline / play icon */
        .sc-btn-secondary {
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, border-color .22s ease, background-color .22s ease;
        }
        .sc-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0,0,0,0.20);
          border-color: rgba(255,255,255,0.5);
        }
        .sc-btn-secondary:active { transform: translateY(0) scale(0.98); }
        .sc-play-icon { transition: transform .22s ease; }
        .sc-btn-secondary:hover .sc-play-icon { transform: scale(1.15); }

        @media (prefers-reduced-motion: reduce) {
          .sc-enter-1, .sc-enter-2, .sc-enter-3, .sc-enter-4 { animation: none !important; opacity: 1 !important; transform: none !important; }
          .sc-blob-1, .sc-blob-2 { animation: none !important; }
          .sc-btn-primary:hover, .sc-btn-secondary:hover { transform: none; }
        }
      `}</style>

      <section
        aria-label="Found your fit?"
        className="relative w-full overflow-hidden py-20 md:py-24"
        style={{ backgroundColor: "#474787" }}
      >
        {/* ── Ambient blobs ── */}
        <div
          aria-hidden="true"
          className="sc-blob-1 pointer-events-none absolute -top-28 -left-20 w-[380px] h-[380px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "#a5b4fc" }}
        />
        <div
          aria-hidden="true"
          className="sc-blob-2 pointer-events-none absolute bottom-[-90px] right-[-50px] w-[340px] h-[340px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "#2563eb" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 md:px-10 lg:px-16 text-center">

          {/* ── Heading ── */}
          <h2
            className="sc-enter-1 font-bold leading-[1.15] tracking-tight text-white mb-5"
            style={{ fontSize: "35px" }}
          >
            Found your fit?
          </h2>

          {/* ── Sub-copy ── */}
          <p className="sc-enter-2 text-[15px] leading-[1.75] mb-9" style={{ color: "#c7caed" }}>
            Start where you are. Scale when the need is real.
          </p>

          {/* ── CTAs ── */}
          <div className="sc-enter-3 flex flex-wrap items-center justify-center gap-4 mb-7">
            <Link
              href="/start-free/"
              className="sc-btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold"
              style={{ background: "#F4F6FE", color: "#15131F" }}
            >
              Start free
              <span aria-hidden="true" className="sc-btn-arrow">→</span>
            </Link>

            <Link
              href="/get-a-demo/"
              className="sc-btn-secondary inline-flex items-center gap-2.5 rounded-full border px-6 py-3.5 text-[15px] font-medium text-white"
              style={{ borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}
            >
              <span
                aria-hidden="true"
                className="sc-play-icon flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/15"
              >
                <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden="true">
                  <path d="M1 1l7 4.5-7 4.5V1z" fill="#fff" />
                </svg>
              </span>
              Get a demo
            </Link>
          </div>

          {/* ── Fine print ── */}
          <p className="sc-enter-4 text-[12.5px] leading-relaxed max-w-[560px] mx-auto" style={{ color: "#9b9ed4" }}>
            No credit card required for free access. Business, enterprise and
            ZoikoTime integration demos are available for organizations that need
            governance, compliance and workforce intelligence.
          </p>
        </div>
      </section>
    </>
  );
}