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

const checklist = [
  "Connect ZoikoTime context to communication workflows",
  "Coordinate managers and teams faster",
  "Preserve governance, privacy, and auditability",
];

export default function ZoikoCustomersHeroSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes ztcFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ztc-hidden  { opacity:0; transform:translateY(28px); }
        .ztc-visible { animation: ztcFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ztc-check-item { opacity:0; transform:translateX(-14px); }
        .ztc-check-item.active { animation: ztcSlideIn .45s cubic-bezier(.22,1,.36,1) forwards; }
        @keyframes ztcSlideIn {
          from { opacity:0; transform:translateX(-14px); }
          to   { opacity:1; transform:translateX(0); }
        }

        .ztc-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .ztc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(79,70,229,0.4);
          background-color: #4038C9;
        }

        .ztc-btn-secondary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .ztc-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.25);
          background-color: #F3F4F6;
        }

        .ztc-img-wrap {
          transition: transform .5s cubic-bezier(.22,1,.36,1), filter .5s ease;
        }
        .ztc-img-wrap:hover {
          transform: translateY(-4px) scale(1.01);
          filter: drop-shadow(0 26px 50px rgba(0,0,0,0.5));
        }

        @media (prefers-reduced-motion: reduce) {
          .ztc-hidden, .ztc-check-item { opacity:1!important; transform:none!important; animation:none!important; }
          .ztc-visible { animation:none!important; opacity:1!important; }
          .ztc-btn-primary:hover, .ztc-btn-secondary:hover, .ztc-img-wrap:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="ZoikoTime Customers Hero"
        className="w-full py-20 md:py-28"
        style={{ background: "#0B1032" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

            {/* LEFT — Copy */}
            <div ref={leftRef}>
              <div className={`ztc-hidden ${leftIn ? "ztc-visible" : ""}`}>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
                  style={{ color: "#8C9CFF" }}
                >
                  ZoikoTime Customers
                </p>
              </div>

              <div className={`ztc-hidden ${leftIn ? "ztc-visible" : ""}`} style={{ animationDelay: "80ms" }}>
                <h1 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.15] tracking-tight mb-6 max-w-[520px]">
                  <span className="text-white">Extend ZoikoTime into </span>
                  <span style={{ color: "#8C9CFF" }}>
                    clear, governed team communication.
                  </span>
                </h1>
              </div>

              <div className={`ztc-hidden ${leftIn ? "ztc-visible" : ""}`} style={{ animationDelay: "150ms" }}>
                <p className="text-[14.5px] leading-[1.75] mb-8 max-w-[480px]" style={{ color: "#A7ACC9" }}>
                  Give managers and teams one place to move from workforce
                  context to messages, meetings, handoffs, decisions,
                  AI-assisted summaries, and accountable follow-ups — with
                  privacy-respecting governance.
                </p>
              </div>

              <div
                className={`ztc-hidden ${leftIn ? "ztc-visible" : ""} flex flex-wrap items-center gap-4 mb-8`}
                style={{ animationDelay: "220ms" }}
              >
                <button
                  className="ztc-btn-primary rounded-full px-6 py-3 text-[14.5px] font-semibold text-white"
                  style={{ background: "#4F46E5" }}
                >
                  Get a demo
                </button>
                <button className="ztc-btn-secondary rounded-full px-6 py-3 text-[14.5px] font-semibold text-gray-900 bg-white">
                  Talk to sales
                </button>
              </div>

              <div className="flex flex-col gap-2.5 mb-6">
                {checklist.map((item, i) => (
                  <div
                    key={item}
                    className={`ztc-check-item ${leftIn ? "active" : ""} flex items-start gap-2.5`}
                    style={{ animationDelay: `${300 + i * 90}ms` }}
                  >
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "#22C55E" }}
                    >
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                        <polyline
                          points="2,5 4,7 8,3"
                          stroke="white"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-[13.5px] leading-snug" style={{ color: "#C7CCE8" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className={`ztc-hidden ${leftIn ? "ztc-visible" : ""}`} style={{ animationDelay: "600ms" }}>
                <p className="text-[12px] leading-relaxed" style={{ color: "#5C6089" }}>
                  Built for privacy-respecting workforce context, operational
                  governance, and structured communication.
                </p>
              </div>
            </div>

            {/* RIGHT — Image */}
            <div
              ref={imgRef}
              className={`ztc-hidden ${imgIn ? "ztc-visible" : ""}`}
            >
              <div className="ztc-img-wrap">
                <img
                  src="/Images/ZoikoCustomersHeroSection.webp" /* 👈 add your image URL here */
                  alt="ZoikoTime workforce dashboard extended into team communication"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}