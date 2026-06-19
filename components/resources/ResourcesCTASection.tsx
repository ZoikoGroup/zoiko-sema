"use client";

import React from "react";
import Link from "next/link";

export default function ResourcesCTASection() {
  return (
    <>
      <style>{`
        @keyframes rcFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes rcBlobDrift1 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(22px,14px) scale(1.05); }
        }
        @keyframes rcBlobDrift2 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(-18px,-12px) scale(1.04); }
        }

        .rc-enter-1 { animation: rcFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.02s both; }
        .rc-enter-2 { animation: rcFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.12s both; }
        .rc-enter-3 { animation: rcFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.22s both; }

        .rc-blob-1 { animation: rcBlobDrift1 11s ease-in-out infinite alternate; }
        .rc-blob-2 { animation: rcBlobDrift2 14s ease-in-out infinite alternate-reverse; }

        /* primary pill — white, shimmer sweep */
        .rc-btn-primary {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease;
        }
        .rc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.28);
        }
        @keyframes rcShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .rc-btn-primary::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(71,71,135,0.18) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .rc-btn-primary:hover::after { animation: rcShimmer .65s ease forwards; }
        .rc-btn-primary:active { transform: translateY(0) scale(0.98); }
        .rc-btn-arrow { display: inline-block; transition: transform .2s ease; }
        .rc-btn-primary:hover .rc-btn-arrow { transform: translateX(4px); }

        /* secondary pill — outline */
        .rc-btn-secondary {
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, border-color .22s ease, background-color .22s ease;
        }
        .rc-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0,0,0,0.20);
          border-color: rgba(255,255,255,0.6);
          background-color: rgba(255,255,255,0.06);
        }
        .rc-btn-secondary:active { transform: translateY(0) scale(0.98); }

        @media (prefers-reduced-motion: reduce) {
          .rc-enter-1, .rc-enter-2, .rc-enter-3 { animation: none !important; opacity: 1 !important; transform: none !important; }
          .rc-blob-1, .rc-blob-2 { animation: none !important; }
          .rc-btn-primary:hover, .rc-btn-secondary:hover { transform: none; }
        }
      `}</style>

      <section
        aria-label="Ready to see how Sema works?"
        className="relative w-full overflow-hidden py-16 md:py-20"
        style={{ backgroundColor: "#474787" }}
      >
        {/* ── Ambient blobs ── */}
        <div
          aria-hidden="true"
          className="rc-blob-1 pointer-events-none absolute -top-24 -left-16 w-[340px] h-[340px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "#a5b4fc" }}
        />
        <div
          aria-hidden="true"
          className="rc-blob-2 pointer-events-none absolute bottom-[-80px] right-[-40px] w-[300px] h-[300px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "#2563eb" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-2xl px-6 md:px-10 text-center">

          {/* ── Heading ── */}
          <h2
            className="rc-enter-1 font-bold leading-[1.15] tracking-tight text-white mb-4"
            style={{ fontSize: "35px" }}
          >
            Ready to see how Sema works?
          </h2>

          {/* ── Sub-copy ── */}
          <p className="rc-enter-2 text-[15px] leading-[1.75] mb-9" style={{ color: "#c7caed" }}>
            Start with the free plan, or request a tailored demo for your team or
            business.
          </p>

          {/* ── CTAs — stacked, full-ish width ── */}
          <div className="rc-enter-3 flex flex-col items-center gap-3 max-w-[380px] mx-auto">
            <Link
              href="#get-demo"
              className="rc-btn-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold w-full"
              style={{ background: "#F4F6FE", color: "#15131F" }}
            >
              Get a demo
              <span aria-hidden="true" className="rc-btn-arrow">→</span>
            </Link>

            <Link
              href="#start-free"
              className="rc-btn-secondary inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-[15px] font-medium text-white w-full"
              style={{ borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}
            >
              Start free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}