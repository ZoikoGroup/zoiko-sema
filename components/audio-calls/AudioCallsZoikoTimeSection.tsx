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

const cards = [
  {
    title: "Connection status",
    desc: "See whether ZoikoTime is disconnected, available, pending setup, or active.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 9V5a2 2 0 0 0-2-2h-4M9 3H5a2 2 0 0 0-2 2v4m0 6v4a2 2 0 0 0 2 2h4m6 0h4a2 2 0 0 0 2-2v-4" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    title: "Workspace mapping",
    desc: "Map calls from selected Sema workspaces to ZoikoTime teams, departments, or projects.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Policy alignment",
    desc: "Align eligible calls with approved work sessions, attendance context, or operational workflows.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Privacy modes",
    desc: "Apply jurisdiction-aware privacy controls and limit visible workforce-context signals.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Exception reporting",
    desc: "Flag policy gaps, unmapped workspaces, failed syncs, or missing consent settings.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Verified call context",
    desc: "Show occurrence, time window, workspace, and policy state within governance rules.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function AudioCallsZoikoTimeSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes ztFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zt-hidden  { opacity: 0; transform: translateY(28px); }
        .zt-visible { animation: ztFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .zt-card { opacity: 0; transform: translateY(24px); }
        .zt-grid.zt-visible .zt-card {
          animation: ztFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .zt-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, background-color .3s ease;
        }
        .zt-card-inner:hover {
          transform: translateY(-5px);
          background-color: rgba(255,255,255,0.08);
          box-shadow: 0 16px 32px rgba(0,0,0,0.2);
        }

        .zt-btn-primary { transition: transform .25s ease, box-shadow .25s ease; }
        .zt-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,0.25); }

        .zt-btn-secondary { transition: transform .25s ease, background-color .25s ease; }
        .zt-btn-secondary:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.12); }

        @media (prefers-reduced-motion: reduce) {
          .zt-hidden, .zt-visible, .zt-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .zt-card-inner:hover, .zt-btn-primary:hover, .zt-btn-secondary:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="ZoikoTime integration"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{ backgroundColor: "#4B4880" }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`zt-hidden ${badgeIn ? "zt-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white">
                ZoikoTime Integration
              </span>
            </div>
          </div>

          {/* Heading + subtext */}
          <div
            ref={headRef}
            className={`zt-hidden ${headIn ? "zt-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,4vw,32px)] font-bold leading-[1.2] tracking-tight text-white max-w-[720px] mx-auto mb-4">
              Connect calls to workforce context when accountability matters.
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-white/70 max-w-[620px] mx-auto">
              Show call occurrence, time window, workspace, participants, and
              policy state — without turning content into employee
              monitoring.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`zt-grid ${gridIn ? "zt-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10`}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="zt-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="zt-card-inner h-full rounded-2xl bg-white/10 p-6 sm:p-7">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 text-white mb-4">
                    {c.icon}
                  </span>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-white/65">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`zt-hidden ${ctaIn ? "zt-visible" : ""} flex flex-col sm:flex-row items-center justify-center gap-3`}
          >
            <button className="zt-btn-primary rounded-full px-6 py-3 text-[14px] font-semibold text-gray-900 bg-white">
              Explore ZoikoTime integration
            </button>
            <button className="zt-btn-secondary rounded-full px-6 py-3 text-[14px] font-semibold text-white border border-white/25">
              Talk to sales
            </button>
          </div>
        </div>
      </section>
    </>
  );
}