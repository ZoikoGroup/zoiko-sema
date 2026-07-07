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
    title: "AI summary permissions",
    desc: "Choose who can generate, view, edit, and share AI meeting summaries.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M12 8V4" />
        <circle cx="12" cy="3" r="1" />
        <path d="M8 13h.01M16 13h.01" />
      </svg>
    ),
  },
  {
    title: "Meeting intelligence controls",
    desc: "Control action item extraction, decision capture, meeting recaps, and follow-up suggestions.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="8 12 11 15 16 9" />
      </svg>
    ),
  },
  {
    title: "Sensitive workspace exclusions",
    desc: "Disable or limit AI features in confidential, legal, executive, HR, or regulated spaces.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "External meeting controls",
    desc: "Define whether AI can be used in meetings with guests or external participants.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "AI retention settings",
    desc: "Set retention rules for AI summaries, action items, transcripts, and generated outputs.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "AI audit visibility",
    desc: "Review when AI features were used, by whom, and in which workspace.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
  },
];

export default function AdminConsoleAiGovernanceSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.06);

  return (
    <>
      <style>{`
        @keyframes acagFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acag-hidden  { opacity: 0; transform: translateY(28px); }
        .acag-visible { animation: acagFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .acag-card { opacity: 0; transform: translateY(24px); }
        .acag-grid.acag-visible .acag-card {
          animation: acagFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .acag-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .acag-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(15,31,78,0.08);
          border-color: rgba(59,71,222,0.22);
        }

        @media (prefers-reduced-motion: reduce) {
          .acag-hidden, .acag-visible, .acag-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .acag-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="AI governance"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`acag-hidden ${badgeIn ? "acag-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                AI Governance
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`acag-hidden ${headIn ? "acag-visible" : ""} text-center mb-4`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 max-w-[620px] mx-auto">
              Control how AI supports communication across your organization.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`acag-hidden ${headIn ? "acag-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-gray-500 max-w-[600px] mx-auto mb-10 sm:mb-14`}
            style={{ animationDelay: "0.14s" }}
          >
            Manage where AI summaries, action items, meeting intelligence, and automation features can be used, who can access them, and how AI-generated content is retained.
          </p>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`acag-grid ${gridIn ? "acag-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="acag-card"
                style={{ animationDelay: `${0.05 + i * 0.07}s` }}
              >
                <div className="acag-card-inner h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 text-brand mb-4">
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