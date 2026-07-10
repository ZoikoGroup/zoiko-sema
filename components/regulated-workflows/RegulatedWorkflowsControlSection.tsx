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
    title: "Policy-first spaces",
    desc: "Apply the right retention, access, and AI controls before sensitive work begins.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 6 6 1-4.5 4.5L17.5 20 12 17l-5.5 3 1-6.5L3 9l6-1z" />
      </svg>
    ),
  },
  {
    title: "Evidence in context",
    desc: "Keep decisions, files, summaries, and approvals together as a single record.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
      </svg>
    ),
  },
  {
    title: "Audit-ready output",
    desc: "Export the proof chain — who did what, when, and under which policy — without rebuilding it manually.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="4" y1="14" x2="20" y2="14" />
        <line x1="4" y1="20" x2="14" y2="20" />
      </svg>
    ),
  },
];

export default function RegulatedWorkflowsControlSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes rwcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rwc-hidden  { opacity: 0; transform: translateY(28px); }
        .rwc-visible { animation: rwcFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .rwc-card { opacity: 0; transform: translateY(24px); }
        .rwc-grid.rwc-visible .rwc-card {
          animation: rwcFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .rwc-card-inner {
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .rwc-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(71,71,222,0.1);
        }

        .rwc-icon {
          transition: transform .3s ease;
        }
        .rwc-card-inner:hover .rwc-icon {
          transform: scale(1.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .rwc-hidden, .rwc-visible, .rwc-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .rwc-card-inner:hover, .rwc-card-inner:hover .rwc-icon { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Why regulated workflows"
        className="w-full bg-[#F7F8FD] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`rwc-hidden ${badgeIn ? "rwc-visible" : ""} text-center mb-4`}
          >
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#4B47E5]">
              Why Regulated Workflows
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`rwc-hidden ${headIn ? "rwc-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,3.8vw,32px)] font-bold leading-[1.25] tracking-tight text-gray-900 max-w-[620px] mx-auto">
              Control before the work starts. Evidence while it happens. Proof when it ends.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`rwc-grid ${gridIn ? "rwc-visible" : ""} grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={c.title}
                className="rwc-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="rwc-card-inner h-full rounded-2xl bg-[#EAEDFB] p-6 sm:p-7">
                  <span className="rwc-icon inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white text-[#4B47E5] mb-4">
                    {c.icon}
                  </span>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}