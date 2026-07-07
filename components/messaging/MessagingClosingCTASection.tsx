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

export default function MessagingClosingCTASection() {
  const { ref: cardRef, inView: cardIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes mctaFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mcta-hidden  { opacity: 0; transform: translateY(32px); }
        .mcta-visible { animation: mctaFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .mcta-item { opacity: 0; transform: translateY(16px); }
        .mcta-card.mcta-visible .mcta-item {
          animation: mctaFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .mcta-btn-primary { transition: transform .25s ease, box-shadow .25s ease; }
        .mcta-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,0.25); }

        .mcta-btn-outline { transition: transform .25s ease, background-color .25s ease; }
        .mcta-btn-outline:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.08); }

        @media (prefers-reduced-motion: reduce) {
          .mcta-hidden, .mcta-visible, .mcta-item { opacity: 1 !important; transform: none !important; animation: none !important; }
          .mcta-btn-primary:hover, .mcta-btn-outline:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Closing call to action"
        className="w-full bg-white pb-16 sm:pb-20 md:pb-24 px-5 sm:px-8"
      >
        <div
          ref={cardRef}
          className={`mcta-card mcta-hidden ${cardIn ? "mcta-visible" : ""} mx-auto w-full max-w-6xl rounded-3xl px-6 py-14 sm:px-12 sm:py-16 text-center`}
          style={{ backgroundColor: "#15132B" }}
        >
          <h2 className="mcta-item text-[clamp(22px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-white mb-5">
            Bring every conversation into one structured workspace.
          </h2>

          <p
            className="mcta-item text-[14px] sm:text-[15px] leading-[1.75] text-white/60 max-w-[620px] mx-auto mb-9"
            style={{ animationDelay: "0.08s" }}
          >
            Start with fast messaging for people and teams, then scale into
            channels, AI summaries, admin controls, security policies, and
            enterprise governance.
          </p>

          <div
            className="mcta-item flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{ animationDelay: "0.16s" }}
          >
            <button className="mcta-btn-primary rounded-full px-6 py-3 text-[14px] font-semibold text-gray-900 bg-white">
              Start free
            </button>
            <button className="mcta-btn-outline rounded-full px-6 py-3 text-[14px] font-semibold text-white border border-white/25">
              Get a demo
            </button>
            <button className="mcta-btn-outline rounded-full px-6 py-3 text-[14px] font-semibold text-white border border-white/25">
              Explore channels and spaces
            </button>
          </div>
        </div>
      </section>
    </>
  );
}