"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other sections/pages. */
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

const PANEL_PURPLE = "#513AD8";

const highlights = [
  {
    title: "Faster handoff response",
    description: "Context becomes a handoff in the right workspace",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Fewer missed follow-ups",
    description: "Owners and due dates captured from conversations",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Improved meeting clarity",
    description: "AI recaps saved to the workforce workspace",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
];

export default function ZoikoCustomersExpansionSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.3);
  const { ref: quoteRef, inView: quoteIn } = useInView(0.2);
  const { ref: authorRef, inView: authorIn } = useInView(0.2);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes zceeFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zcee-hidden  { opacity: 0; transform: translateY(28px); }
        .zcee-visible { animation: zceeFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .zcee-card { opacity: 0; transform: translateY(22px); }
        .zcee-card.zcee-card-in {
          animation: zceeFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .zcee-card {
          transition: transform .25s ease, background .25s ease;
        }
        .zcee-card:hover {
          transform: translateY(-3px) translateX(2px);
          background: rgba(255,255,255,0.16);
        }

        .zcee-icon { transition: transform .25s ease; }
        .zcee-card:hover .zcee-icon { transform: scale(1.1); }

        @media (prefers-reduced-motion: reduce) {
          .zcee-hidden, .zcee-card { opacity: 1 !important; transform: none !important; }
          .zcee-visible, .zcee-card-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Account expansion"
        className="w-full py-20 md:py-24"
        style={{ background: PANEL_PURPLE }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">

            {/* LEFT — quote */}
            <div>
              <p
                ref={eyebrowRef}
                className={`zcee-hidden ${eyebrowIn ? "zcee-visible" : ""} text-[11px] font-semibold uppercase tracking-[0.14em] mb-5`}
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Account Expansion
              </p>

              <div
                ref={quoteRef}
                className={`zcee-hidden ${quoteIn ? "zcee-visible" : ""}`}
                style={{ animationDelay: "0.05s" }}
              >
                <span className="text-[40px] leading-none text-white/50 font-serif">
                  &ldquo;
                </span>
                <p className="text-[clamp(20px,2.6vw,26px)] font-bold leading-[1.4] text-white -mt-2 max-w-[540px]">
                  ZoikoTime helped us understand our operations. Zoiko Sema
                  helps our teams coordinate around that context — handoffs,
                  decisions, and follow-ups now live where the work happens.
                </p>
              </div>

              <div
                ref={authorRef}
                className={`zcee-hidden ${authorIn ? "zcee-visible" : ""} flex items-center gap-3 mt-8`}
                style={{ animationDelay: "0.1s" }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #ffffff30, #ffffff10)" }}
                >
                  <span className="text-[13px] font-bold text-white">OD</span>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-white leading-tight">
                    Operations Director
                  </p>
                  <p className="text-[12.5px] leading-tight" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Multi-site retail operator
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — highlight cards */}
            <div ref={cardsRef} className="flex flex-col gap-4">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className={`zcee-card ${cardsIn ? "zcee-card-in" : ""} flex items-center gap-4 rounded-2xl px-5 py-4`}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    animationDelay: `${i * 0.12}s`,
                  }}
                >
                  <div
                    className="zcee-icon w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.14)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[14.5px] font-bold text-white leading-tight mb-1">
                      {item.title}
                    </p>
                    <p className="text-[12.5px] leading-snug" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}