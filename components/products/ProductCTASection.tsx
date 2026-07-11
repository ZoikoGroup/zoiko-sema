"use client";

import React, { useEffect, useRef, useState } from "react";

// ── Intersection-observer hook ─────────────────────────────
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
  const { ref: sectionRef, inView: sectionIn } = useInView(0.15);
  const { ref: cardRef, inView: cardIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes atcFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes atcCardIn {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes atcBlobDrift1 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(26px,16px) scale(1.05); }
        }
        @keyframes atcBlobDrift2 {
          from { transform: translate(0,0) scale(1); }
          to   { transform: translate(-22px,-14px) scale(1.04); }
        }

        .atc-card { opacity: 0; transform: translateY(30px) scale(0.98); }
        .atc-card.on { animation: atcCardIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .atc-anim-1, .atc-anim-2, .atc-anim-3, .atc-anim-4 { opacity: 0; }
        .atc-in .atc-anim-1 { animation: atcFadeUp .6s cubic-bezier(.22,1,.36,1) .15s forwards; }
        .atc-in .atc-anim-2 { animation: atcFadeUp .6s cubic-bezier(.22,1,.36,1) .28s forwards; }
        .atc-in .atc-anim-3 { animation: atcFadeUp .6s cubic-bezier(.22,1,.36,1) .40s forwards; }
        .atc-in .atc-anim-4 { animation: atcFadeUp .6s cubic-bezier(.22,1,.36,1) .50s forwards; }

        .atc-blob-1 { animation: atcBlobDrift1 11s ease-in-out infinite alternate; }
        .atc-blob-2 { animation: atcBlobDrift2 14s ease-in-out infinite alternate-reverse; }

        /* primary pill — shimmer sweep */
        .atc-btn-primary {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease;
        }
        .atc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(71,71,222,0.45);
        }
        @keyframes atcShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .atc-btn-primary::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .atc-btn-primary:hover::after { animation: atcShimmer .65s ease forwards; }
        .atc-btn-primary:active { transform: translateY(0) scale(0.98); }

        /* secondary pill — outline */
        .atc-btn-secondary {
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, background-color .22s ease, border-color .22s ease;
        }
        .atc-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0,0,0,0.22);
          border-color: rgba(255,255,255,0.5);
          background-color: rgba(255,255,255,0.08);
        }
        .atc-btn-secondary:active { transform: translateY(0) scale(0.98); }

        @media (prefers-reduced-motion: reduce) {
          .atc-anim-1, .atc-anim-2, .atc-anim-3, .atc-anim-4, .atc-card { opacity: 1 !important; animation: none !important; transform: none !important; }
          .atc-blob-1, .atc-blob-2 { animation: none !important; }
          .atc-btn-primary:hover, .atc-btn-secondary:hover { transform: none; }
        }
      `}</style>

      <section
        ref={sectionRef}
        aria-label="Start with better conversations"
        className="w-full py-16 md:py-20 bg-[#F3F2FD]"
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16">
          <div
            ref={cardRef}
            className={`atc-card ${cardIn ? "on atc-in" : ""} relative overflow-hidden rounded-[32px] py-16 md:py-20 px-6`}
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

            <div className="relative z-10 mx-auto w-full max-w-3xl text-center">

              {/* ── Heading ── */}
              <h2
                className="atc-anim-1 font-extrabold leading-[1.25] tracking-tight text-white mb-5"
                style={{ fontSize: "clamp(22px,3.2vw,32px)" }}
              >
                Start with conversations. Add intelligence. Connect workforce truth when you need it.
              </h2>

              {/* ── Sub-copy ── */}
              <p
                className="atc-anim-2 text-[14px] leading-[1.75] max-w-[600px] mx-auto mb-9"
                style={{ color: "#a6a8cf" }}
              >
                Use Sema as an individual, a growing team, or a business. Message, call, and meet — and add AI clarity and ZoikoTime integration when your organization needs more context.
              </p>

              {/* ── CTAs ── */}
              <div className="atc-anim-3 flex flex-wrap items-center justify-center gap-3 mb-7">
                <a
                  href="/start-free/"
                  className="atc-btn-primary inline-flex items-center justify-center rounded-full px-7 py-3 text-[14px] font-semibold text-white"
                  style={{ background: "#4B47DE" }}
                >
                  Start free
                </a>

                <a
                  href="/get-a-demo/"
                  className="atc-btn-secondary inline-flex items-center justify-center rounded-full border px-7 py-3 text-[14px] font-semibold text-white"
                  style={{ borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.04)" }}
                >
                  Get a demo
                </a>
              </div>

              {/* ── Footnote ── */}
              <p
                className="atc-anim-4 text-[12px] leading-[1.7]"
                style={{ color: "#6b6d94" }}
              >
                Free for individuals and small teams &middot; Business and Enterprise plans for organizations that need governance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}