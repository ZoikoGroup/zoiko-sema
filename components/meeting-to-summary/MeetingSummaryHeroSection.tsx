"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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

export default function MeetingSummaryHeroSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes mtsFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .mts-hidden  { opacity:0; transform:translateY(28px); }
        .mts-visible { animation: mtsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .mts-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .mts-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(79,70,229,0.4);
          background-color: #4038C9;
        }

        .mts-btn-secondary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .mts-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.25);
          background-color: #F3F4F6;
        }

        .mts-img-wrap {
          transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease;
        }
        .mts-img-wrap:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 28px 56px rgba(0,0,0,0.45);
        }

        @media (prefers-reduced-motion: reduce) {
          .mts-hidden { opacity:1!important; transform:none!important; animation:none!important; }
          .mts-visible { animation:none!important; opacity:1!important; }
          .mts-btn-primary:hover, .mts-btn-secondary:hover, .mts-img-wrap:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Meeting to Summary Hero"
        className="w-full py-20 md:py-28"
        style={{ background: "#0B1031" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

            {/* LEFT — Copy */}
            <div ref={leftRef}>
              <div className={`mts-hidden ${leftIn ? "mts-visible" : ""}`}>
                <p
                  className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] mb-5"
                  style={{ color: "#8C9CFF" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  Use Case · Meeting to Summary
                </p>
              </div>

              <div className={`mts-hidden ${leftIn ? "mts-visible" : ""}`} style={{ animationDelay: "80ms" }}>
                <h1 className="text-[clamp(28px,4.2vw,44px)] font-extrabold leading-[1.15] tracking-tight mb-6 max-w-[520px]">
                  <span className="text-white">Turn every meeting into a clear </span>
                  <span style={{ color: "#8C9CFF" }}>
                    summary, decision record, and follow-up plan.
                  </span>
                </h1>
              </div>

              <div className={`mts-hidden ${leftIn ? "mts-visible" : ""}`} style={{ animationDelay: "150ms" }}>
                <p className="text-[14.5px] leading-[1.75] mb-8 max-w-[480px]" style={{ color: "#A7ACC9" }}>
                  Zoiko Sema helps teams move from live discussion to
                  structured meeting summaries, action owners, decision
                  records, and searchable context — with AI governed by
                  workspace policy.
                </p>
              </div>

              <div
                className={`mts-hidden ${leftIn ? "mts-visible" : ""} flex flex-wrap items-center gap-4 mb-6`}
                style={{ animationDelay: "220ms" }}
              >
                <button
                  className="mts-btn-primary rounded-full px-6 py-3 text-[14.5px] font-semibold text-white"
                  style={{ background: "#4F46E5" }}
                >
                  Get a demo
                </button>
                <button className="mts-btn-secondary rounded-full px-6 py-3 text-[14.5px] font-semibold text-gray-900 bg-white">
                  Talk to sales
                </button>
              </div>

              <div className={`mts-hidden ${leftIn ? "mts-visible" : ""}`} style={{ animationDelay: "290ms" }}>
                <p className="text-[12px] leading-relaxed" style={{ color: "#5C6089" }}>
                  Built for teams that need fewer recap gaps, clearer
                  decisions, and accountable follow-through.
                </p>
              </div>
            </div>

            {/* RIGHT — Image */}
            <div
              ref={imgRef}
              className={`mts-hidden ${imgIn ? "mts-visible" : ""}`}
            >
              <div className="mts-img-wrap rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Images/MeetingSummaryHeroSection.webp" /* 👈 add your image URL here */
                  alt="Zoiko Sema video meeting on desktop monitor with four participants"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}