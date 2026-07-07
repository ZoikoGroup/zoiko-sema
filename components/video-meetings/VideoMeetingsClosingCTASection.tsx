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

export default function VideoMeetingsClosingCTASection() {
  const { ref: cardRef, inView: cardIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes vctaFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vcta-hidden  { opacity: 0; transform: translateY(32px); }
        .vcta-visible { animation: vctaFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .vcta-item { opacity: 0; transform: translateY(16px); }
        .vcta-card.vcta-visible .vcta-item {
          animation: vctaFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .vcta-btn-primary { transition: transform .25s ease, box-shadow .25s ease; }
        .vcta-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,0.25); }

        .vcta-btn-outline { transition: transform .25s ease, background-color .25s ease; }
        .vcta-btn-outline:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.08); }

        @media (prefers-reduced-motion: reduce) {
          .vcta-hidden, .vcta-visible, .vcta-item { opacity: 1 !important; transform: none !important; animation: none !important; }
          .vcta-btn-primary:hover, .vcta-btn-outline:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Closing call to action"
        className="w-full bg-white pb-16 sm:pb-20 md:pb-24 px-5 sm:px-8"
      >
        <div
          ref={cardRef}
          className={`vcta-card vcta-hidden ${cardIn ? "vcta-visible" : ""} mx-auto w-full max-w-6xl rounded-3xl px-6 py-14 sm:px-12 sm:py-16 text-center`}
          style={{ backgroundColor: "#151030" }}
        >
          <h2 className="vcta-item text-[clamp(22px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-white mb-5">
            Turn every meeting into decisions and follow-through.
          </h2>

          <p
            className="vcta-item text-[14px] sm:text-[15px] leading-[1.75] text-white/60 max-w-[620px] mx-auto mb-9"
            style={{ animationDelay: "0.08s" }}
          >
            Host secure video meetings, collaborate in real time, and let AI
            capture decisions and action items — all connected to your Zoiko
            Sema workspace.
          </p>

          <div
            className="vcta-item flex flex-col sm:flex-row items-center justify-center gap-3 mb-7"
            style={{ animationDelay: "0.16s" }}
          >
            <button className="vcta-btn-primary rounded-full px-6 py-3 text-[14px] font-semibold text-gray-900 bg-white">
              Start free
            </button>
            <button className="vcta-btn-outline rounded-full px-6 py-3 text-[14px] font-semibold text-white border border-white/25">
              Get a demo
            </button>
            <button className="vcta-btn-outline rounded-full px-6 py-3 text-[14px] font-semibold text-white border border-white/25">
              Explore ZoikoTime integration
            </button>
          </div>

          <p
            className="vcta-item text-[12px] text-white/35"
            style={{ animationDelay: "0.22s" }}
          >
            Built for individuals, teams, businesses, and enterprise
            environments.
          </p>
        </div>
      </section>
    </>
  );
}