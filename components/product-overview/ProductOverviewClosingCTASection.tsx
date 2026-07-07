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

export default function ProductOverviewClosingCTASection() {
  const { ref: cardRef, inView: cardIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes poctaFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pocta-hidden  { opacity: 0; transform: translateY(32px); }
        .pocta-visible { animation: poctaFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .pocta-item { opacity: 0; transform: translateY(16px); }
        .pocta-card.pocta-visible .pocta-item {
          animation: poctaFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pocta-btn-primary { transition: transform .25s ease, box-shadow .25s ease; }
        .pocta-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,0.25); }

        .pocta-btn-outline { transition: transform .25s ease, background-color .25s ease; }
        .pocta-btn-outline:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.08); }

        @media (prefers-reduced-motion: reduce) {
          .pocta-hidden, .pocta-visible, .pocta-item { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pocta-btn-primary:hover, .pocta-btn-outline:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Closing call to action"
        className="w-full bg-white pb-16 sm:pb-20 md:p-24 px-5 sm:px-8"
      >
        <div
          ref={cardRef}
          className={`pocta-card pocta-hidden ${cardIn ? "pocta-visible" : ""} mx-auto w-full max-w-6xl rounded-3xl px-6 py-14 sm:px-12 sm:py-16 text-center`}
          style={{ backgroundColor: "#15132B" }}
        >
          <h2 className="pocta-item text-[clamp(22px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-white mb-5">
            Bring every conversation into one structured platform.
          </h2>

          <p
            className="pocta-item text-[14px] sm:text-[15px] leading-[1.75] text-white/60 max-w-[620px] mx-auto mb-9"
            style={{ animationDelay: "0.08s" }}
          >
            Start with messaging, calls, and meetings. Scale into AI
            summaries, channels, spaces, administration, and ZoikoTime
            workforce-context integration as your organization grows.
          </p>

          <div
            className="pocta-item flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{ animationDelay: "0.16s" }}
          >
            <button className="pocta-btn-primary rounded-full px-6 py-3 text-[14px] font-semibold text-gray-900 bg-white">
              Start free
            </button>
            <button className="pocta-btn-outline rounded-full px-6 py-3 text-[14px] font-semibold text-white border border-white/25">
              Get a demo
            </button>
            <button className="pocta-btn-outline rounded-full px-6 py-3 text-[14px] font-semibold text-white border border-white/25">
              Explore ZoikoTime
            </button>
          </div>
        </div>
      </section>
    </>
  );
}