"use client";

import React, { useEffect, useRef, useState } from "react";

// ── Intersection-observer hook (matches HeroSection style) ─────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function ProductCTASection() {
  const { ref, inView } = useInView(0.25);

  return (
    <>
      <style>{`
        @keyframes atcFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes atcBlobDrift1 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(26px,16px) scale(1.05); }
        }
        @keyframes atcBlobDrift2 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(-22px,-14px) scale(1.04); }
        }

        .atc-anim-1, .atc-anim-2, .atc-anim-3 { opacity: 0; }
        .atc-in .atc-anim-1 { animation: atcFadeUp .6s cubic-bezier(.22,1,.36,1) .05s forwards; }
        .atc-in .atc-anim-2 { animation: atcFadeUp .6s cubic-bezier(.22,1,.36,1) .18s forwards; }
        .atc-in .atc-anim-3 { animation: atcFadeUp .6s cubic-bezier(.22,1,.36,1) .30s forwards; }

        .atc-blob-1 { animation: atcBlobDrift1 11s ease-in-out infinite alternate; }
        .atc-blob-2 { animation: atcBlobDrift2 14s ease-in-out infinite alternate-reverse; }

        /* primary pill — shimmer sweep */
        .atc-btn-primary {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease;
        }
        .atc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.30);
        }
        @keyframes atcShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .atc-btn-primary::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(71,71,135,0.18) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .atc-btn-primary:hover::after { animation: atcShimmer .65s ease forwards; }
        .atc-btn-primary:active { transform: translateY(0) scale(0.98); }
        .atc-btn-arrow { display: inline-block; transition: transform .2s ease; }
        .atc-btn-primary:hover .atc-btn-arrow { transform: translateX(4px); }

        /* secondary pill — outline / play icon */
        .atc-btn-secondary {
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, background-color .22s ease, border-color .22s ease;
        }
        .atc-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0,0,0,0.22);
          border-color: rgba(255,255,255,0.5);
        }
        .atc-btn-secondary:active { transform: translateY(0) scale(0.98); }
        .atc-play-icon { transition: transform .22s ease; }
        .atc-btn-secondary:hover .atc-play-icon { transform: scale(1.15); }

        @media (prefers-reduced-motion: reduce) {
          .atc-anim-1, .atc-anim-2, .atc-anim-3 { opacity: 1 !important; animation: none !important; }
          .atc-blob-1, .atc-blob-2 { animation: none !important; }
          .atc-btn-primary:hover, .atc-btn-secondary:hover { transform: none; }
        }
      `}</style>

      <section
        ref={ref}
        aria-label="Start with better conversations"
        className={`atc-in relative w-full overflow-hidden py-20 md:py-24 ${inView ? "" : ""}`}
        style={{
          background:
            "radial-gradient(circle at 30% 20%, #2a2650 0%, #15131f 55%, #0c0a16 100%)",
        }}
      >
        {/* ── Ambient blobs ── */}
        <div
          aria-hidden="true"
          className="atc-blob-1 pointer-events-none absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full opacity-25 blur-[100px]"
          style={{ background: "#5b5bd6" }}
        />
        <div
          aria-hidden="true"
          className="atc-blob-2 pointer-events-none absolute bottom-[-100px] right-[-60px] w-[380px] h-[380px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "#2563eb" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-10 lg:px-16 text-center">

          {/* ── Heading ── */}
          <h2
            className="atc-anim-1 font-bold leading-[1.18] tracking-tight text-white mb-5"
            style={{ fontSize: "clamp(24px,3.4vw,38px)" }}
          >
            Start with conversations. Add intelligence.
Connect workforce truth  when you need it.
          </h2>

          {/* ── Sub-copy ── */}
          <p className="atc-anim-2 text-[15px] leading-[1.75] max-w-[700px] mx-auto mb-10" style={{ color: "#c2c4e0" }}>
            Use Sema as an individual, a team or a business. Message, call, meet,
summarize, coordinate — and grow into governed communication when your needs become more complex.
          </p>

          {/* ── CTAs ── */}
          <div className="atc-anim-3 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/start-free/"
              className="atc-btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold"
              style={{ background: "#F4F6FE", color: "#15131F" }}
            >
              Start free
              <span aria-hidden="true" className="atc-btn-arrow">→</span>
            </a>

            <a
              href="/get-a-demo/"
              className="atc-btn-secondary inline-flex items-center gap-2.5 rounded-full border px-6 py-3.5 text-[15px] font-medium text-white"
              style={{ borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.06)" }}
            >
              <span
                aria-hidden="true"
                className="atc-play-icon flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/15"
              >
                <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden="true">
                  <path d="M1 1l7 4.5-7 4.5V1z" fill="#fff" />
                </svg>
              </span>
              Get a demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}