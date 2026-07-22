"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other sections/pages. */
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

const PANEL_PURPLE = "#5B52E8";

const cards = [
  {
    title: "Approved outputs only",
    description: "Only summaries, decisions, and follow-ups approved by policy connect to ZoikoTime.",
    iconBg: "#16A34A",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    title: "Verified work signals",
    description: "AI-assisted communication context maps to verified work context for authorized orgs.",
    iconBg: "rgba(255,255,255,0.16)",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "Admin-configured",
    description: "Integration is permissioned and configurable by authorized administrators only.",
    iconBg: "#D97706",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 9.9-1" />
      </svg>
    ),
  },
];

export default function SemaAiZoikoTimeBridgeSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.3);
  const { ref: copyRef, inView: copyIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);
  const { ref: footRef, inView: footIn } = useInView(0.3);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes sazbFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sazb-hidden  { opacity: 0; transform: translateY(26px); }
        .sazb-visible { animation: sazbFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .sazb-card { opacity: 0; transform: translateY(20px); }
        .sazb-card.sazb-card-in {
          animation: sazbFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sazb-card {
          transition: transform .25s ease, background .25s ease;
        }
        .sazb-card:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.1);
        }

        .sazb-icon { transition: transform .25s ease; }
        .sazb-card:hover .sazb-icon { transform: scale(1.1); }

        .sazb-btn-primary {
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .sazb-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -10px rgba(0,0,0,0.35);
        }

        .sazb-btn-secondary {
          border: 1px solid rgba(255,255,255,0.35);
          transition: transform .2s ease, background .2s ease;
        }
        .sazb-btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.1);
        }

        @media (prefers-reduced-motion: reduce) {
          .sazb-hidden, .sazb-card { opacity: 1 !important; transform: none !important; }
          .sazb-visible, .sazb-card-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="ZoikoTime bridge"
        className="w-full py-20 md:py-24"
        style={{ background: PANEL_PURPLE }}
      >
        <div className="mx-auto w-full max-w-5xl px-6 md:px-10 text-center">

          <p
            ref={eyebrowRef}
            className={`sazb-hidden ${eyebrowIn ? "sazb-visible" : ""} text-[11px] font-semibold uppercase tracking-[0.14em] mb-3`}
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            ZoikoTime Bridge
          </p>
          <h2
            ref={headingRef}
            className={`sazb-hidden ${headingIn ? "sazb-visible" : ""} text-[clamp(22px,3.4vw,32px)] font-bold leading-[1.3] tracking-tight text-white mb-4 max-w-[640px] mx-auto`}
            style={{ animationDelay: "0.05s" }}
          >
            Approved AI outputs can become work context — only where policy allows.
          </h2>
          <p
            ref={copyRef}
            className={`sazb-hidden ${copyIn ? "sazb-visible" : ""} text-[13.5px] leading-relaxed mb-10 max-w-[600px] mx-auto`}
            style={{ color: "rgba(255,255,255,0.75)", animationDelay: "0.1s" }}
          >
            Summaries, decisions, owners, and follow-ups connect to verified
            work signals for authorized organizations. Workforce data is
            never exposed to ordinary users.
          </p>

          {/* Cards */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`sazb-card ${gridIn ? "sazb-card-in" : ""} rounded-2xl p-5`}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="sazb-icon w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: card.iconBg }}
                >
                  {card.icon}
                </div>
                <h3 className="text-[14px] font-bold text-white mb-1.5">
                  {card.title}
                </h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p
            ref={footRef}
            className={`sazb-hidden ${footIn ? "sazb-visible" : ""} text-[12.5px] mb-6`}
            style={{ color: "rgba(255,255,255,0.65)", animationDelay: "0.15s" }}
          >
            ZoikoTime integration is permissioned, policy-governed, and
            configurable by authorized administrators.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`sazb-hidden ${ctaIn ? "sazb-visible" : ""} flex flex-wrap items-center justify-center gap-3`}
            style={{ animationDelay: "0.2s" }}
          >
            <a href="/sema-zoikotime" className="sazb-btn-primary bg-white text-gray-900 text-[13.5px] font-semibold rounded-full px-6 py-3">
              Explore Sema + ZoikoTime
            </a>
            <a href="/get-a-demo" className="sazb-btn-secondary text-white text-[13.5px] font-semibold rounded-full px-6 py-3">
              Request Integration Demo
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
