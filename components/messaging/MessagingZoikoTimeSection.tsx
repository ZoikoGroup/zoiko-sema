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
    title: "Workspace mapping",
    desc: "Map spaces, teams, or departments to ZoikoTime organizational structures.",
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
    title: "Privacy mode",
    desc: "Apply jurisdiction-aware privacy settings to workforce-context visibility.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Sync status",
    desc: "Review sync status and policy alignment for connected workspaces.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function MessagingZoikoTimeSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes mztFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mzt-hidden  { opacity: 0; transform: translateY(28px); }
        .mzt-visible { animation: mztFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .mzt-card { opacity: 0; transform: translateY(24px); }
        .mzt-grid.mzt-visible .mzt-card {
          animation: mztFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .mzt-cta {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .mzt-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.18);
        }

        @media (prefers-reduced-motion: reduce) {
          .mzt-hidden, .mzt-visible, .mzt-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .mzt-cta:hover { transform: none !important; }
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
            className={`mzt-hidden ${badgeIn ? "mzt-visible" : ""} flex justify-center mb-6`}
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
            className={`mzt-hidden ${headIn ? "mzt-visible" : ""} text-center mb-5`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,3.6vw,32px)] font-bold leading-[1.25] tracking-tight text-white max-w-[600px] mx-auto">
              Connect messaging to workforce context when it matters.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`mzt-hidden ${headIn ? "mzt-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-white/60 max-w-[560px] mx-auto mb-10 sm:mb-14`}
            style={{ animationDelay: "0.14s" }}
          >
            Business plans can be ZoikoTime-ready while Enterprise supports full integration — mapping spaces, teams, or departments to ZoikoTime organizational structures.
          </p>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`mzt-grid ${gridIn ? "mzt-visible" : ""} grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12`}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="mzt-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
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

          {/* CTA */}
          <div
            ref={ctaRef}
            className={`mzt-hidden ${ctaIn ? "mzt-visible" : ""} flex justify-center`}
            style={{ animationDelay: "0.1s" }}
          >
            <button className="mzt-cta rounded-full bg-white text-[#3A3564] text-[14px] font-semibold px-7 py-3.5">
              Explore channels and spaces
            </button>
          </div>
        </div>
      </section>
    </>
  );
}