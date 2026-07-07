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
    desc: "See whether ZoikoTime is connected, pending setup, or available for enterprise configuration.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6M15 2v6" />
        <path d="M6 8h12l-1 5a5 5 0 0 1-10 0z" />
        <path d="M12 18v4" />
      </svg>
    ),
  },
  {
    title: "Workspace mapping",
    desc: "Map Zoiko Sema workspaces to ZoikoTime teams, departments, or organizational units.",
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
    desc: "Align meeting, communication, attendance, and operational policies where appropriate.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="8 12 11 15 16 9" />
      </svg>
    ),
  },
  {
    title: "Privacy modes",
    desc: "Apply jurisdiction-aware privacy controls and define which workforce-context signals are available.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Sync history",
    desc: "Review sync status, integration health, exceptions, and administrative changes.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Enterprise reporting",
    desc: "Support leadership reporting across communication patterns, team coordination, and operational context.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function AdminConsoleZoikoTimeSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.06);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes acztFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .aczt-hidden  { opacity: 0; transform: translateY(28px); }
        .aczt-visible { animation: acztFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .aczt-card { opacity: 0; transform: translateY(24px); }
        .aczt-grid.aczt-visible .aczt-card {
          animation: acztFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .aczt-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .aczt-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.18);
        }
        .aczt-btn-outline {
          transition: background-color .25s ease, border-color .25s ease;
        }
        .aczt-btn-outline:hover {
          background-color: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.35);
        }

        @media (prefers-reduced-motion: reduce) {
          .aczt-hidden, .aczt-visible, .aczt-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .aczt-btn-primary:hover, .aczt-btn-outline:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="ZoikoTime integration"
        className="w-full bg-[#4B4880] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`aczt-hidden ${badgeIn ? "aczt-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/80">
                ZoikoTime Integration
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`aczt-hidden ${headIn ? "aczt-visible" : ""} text-center mb-4`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-white max-w-[580px] mx-auto">
              Workforce-context governance, when accountability matters.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`aczt-hidden ${headIn ? "aczt-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-white/60 max-w-[600px] mx-auto mb-10 sm:mb-14`}
            style={{ animationDelay: "0.14s" }}
          >
            ZoikoTime integration connects Zoiko Sema with workforce-context governance for organizations that need operational accountability, policy alignment, and privacy-respecting workforce intelligence.
          </p>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`aczt-grid ${gridIn ? "aczt-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12`}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="aczt-card"
                style={{ animationDelay: `${0.04 + i * 0.06}s` }}
              >
                <div className="h-full rounded-2xl border border-white/[0.12] bg-white/[0.06] p-6 sm:p-7">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white mb-4">
                    {c.icon}
                  </span>
                  <h3 className="text-[14.5px] sm:text-[15.5px] font-bold text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-white/55">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`aczt-hidden ${ctaIn ? "aczt-visible" : ""} flex flex-wrap items-center justify-center gap-3`}
            style={{ animationDelay: "0.1s" }}
          >
            <button className="aczt-btn-primary rounded-full bg-white text-[#3A3564] text-[14px] font-semibold px-7 py-3.5">
              Explore Sema + ZoikoTime
            </button>
            <button className="aczt-btn-outline rounded-full border border-white/25 text-white text-[14px] font-semibold px-7 py-3.5">
              Request an integration demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}