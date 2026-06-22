"use client";

import React from "react";
import Link from "next/link";

export default function UseCasesCTASection() {
  return (
    <>
      <style>{`
        @keyframes ucFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ucBlobDrift1 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(24px,16px) scale(1.05); }
        }
        @keyframes ucBlobDrift2 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(-20px,-14px) scale(1.04); }
        }

        .uc-enter-1 { animation: ucFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.02s both; }
        .uc-enter-2 { animation: ucFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.14s both; }
        .uc-enter-3 { animation: ucFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.26s both; }

        .uc-blob-1 { animation: ucBlobDrift1 11s ease-in-out infinite alternate; }
        .uc-blob-2 { animation: ucBlobDrift2 14s ease-in-out infinite alternate-reverse; }

        /* primary pill — shimmer sweep */
        .uc-btn-primary {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease;
        }
        .uc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.28);
        }
        @keyframes ucShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .uc-btn-primary::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(71,71,135,0.18) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .uc-btn-primary:hover::after { animation: ucShimmer .65s ease forwards; }
        .uc-btn-primary:active { transform: translateY(0) scale(0.98); }
        .uc-btn-arrow { display: inline-block; transition: transform .2s ease; }
        .uc-btn-primary:hover .uc-btn-arrow { transform: translateX(4px); }

        /* secondary pill — outline / play icon */
        .uc-btn-secondary {
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, border-color .22s ease, background-color .22s ease;
        }
        .uc-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0,0,0,0.20);
          border-color: rgba(255,255,255,0.5);
        }
        .uc-btn-secondary:active { transform: translateY(0) scale(0.98); }
        .uc-play-icon { transition: transform .22s ease; }
        .uc-btn-secondary:hover .uc-play-icon { transform: scale(1.15); }

        @media (prefers-reduced-motion: reduce) {
          .uc-enter-1, .uc-enter-2, .uc-enter-3 { animation: none !important; opacity: 1 !important; transform: none !important; }
          .uc-blob-1, .uc-blob-2 { animation: none !important; }
          .uc-btn-primary:hover, .uc-btn-secondary:hover { transform: none; }
        }
      `}</style>

      <section
        aria-label="Three CTAs. One decision"
        className="relative w-full overflow-hidden py-20 md:py-24"
        style={{ backgroundColor: "#474787" }}
      >
        {/* ── Ambient blobs ── */}
        <div
          aria-hidden="true"
          className="uc-blob-1 pointer-events-none absolute -top-28 -left-20 w-[380px] h-[380px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "#a5b4fc" }}
        />
        <div
          aria-hidden="true"
          className="uc-blob-2 pointer-events-none absolute bottom-[-90px] right-[-50px] w-[340px] h-[340px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "#2563eb" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-10 lg:px-16 text-center">

          {/* ── Heading ── */}
          <h2
            className="uc-enter-1 font-bold leading-[1.15] tracking-tight text-white mb-5"
            style={{ fontSize: "35px" }}
          >
            Three CTAs. One decision
          </h2>

          {/* ── Sub-copy ── */}
          <p className="uc-enter-2 text-[15px] leading-[1.75] max-w-[700px] mx-auto mb-10" style={{ color: "#c7caed" }}>
            Start free if you want to try the workflows for yourself. Get a demo if
            you&apos;re evaluating for a team or business. Explore Sema + ZoikoTime if
            workforce truth is part of the picture.
          </p>

          {/* ── CTAs ── */}
          <div className="uc-enter-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/start-free/"
              className="uc-btn-primary inline-flex items-center gap-2 rounded-full px-20 py-3.5 text-[15px] font-semibold"
              style={{ background: "#F4F6FE", color: "#15131F" }}
            >
              Start free
              <span aria-hidden="true" className="uc-btn-arrow">→</span>
            </Link>

            <Link
              href="/get-a-demo/"
              className="uc-btn-secondary inline-flex items-center gap-2.5 rounded-full border px-20 py-3 text-[15px] font-medium text-white"
              style={{ borderColor: "rgba(255,255,255,0.4)", background: "transparent" }}
            >
              <span
                aria-hidden="true"
                className="uc-play-icon flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/15"
              >
                <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden="true">
                  <path d="M1 1l7 4.5-7 4.5V1z" fill="#fff" />
                </svg>
              </span>
              Get a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}