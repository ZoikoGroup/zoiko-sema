"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other sections/pages. */
function useInView(threshold = 0.1) {
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

const ACCENT = "#8FA3FF";

const cards = [
  {
    title: "Admin AI controls",
    description: "Configure AI availability by workspace, role, meeting type, and content class.",
    iconBg: "#2A2C4E",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Human approval",
    description: "Require approval before drafted follow-ups, replies, or action outputs are used.",
    iconBg: "#16A34A",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    title: "Confidential Mode boundary",
    description: "Disables AI processing for end-to-end encrypted Confidential Mode content.",
    iconBg: "#2A2C4E",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Audit trail",
    description: "Records AI generation, edits, approvals, and policy decisions where required.",
    iconBg: "#D97706",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="18" rx="2" />
        <path d="M9 4h6v3H9z" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    title: "Data boundaries",
    description: "Respects tenant isolation, retention settings, and permissions.",
    iconBg: "#2A2C4E",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14a8 3 0 0 0 16 0V5" />
        <path d="M4 12a8 3 0 0 0 16 0" />
      </svg>
    ),
  },
  {
    title: "No hidden decisioning",
    description: "AI assists users; it does not replace business judgment.",
    iconBg: "#2A2C4E",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <line x1="5.5" y1="18.5" x2="18.5" y2="5.5" />
      </svg>
    ),
  },
];

export default function SemaAiGovernanceSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes sagFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sag-hidden  { opacity: 0; transform: translateY(28px); }
        .sag-visible { animation: sagFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .sag-card { opacity: 0; transform: translateY(22px); }
        .sag-card.sag-card-in {
          animation: sagFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sag-card {
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
        }
        .sag-card:hover {
          transform: translateY(-4px);
          background: #1C1E42;
          box-shadow: 0 16px 32px -20px rgba(0,0,0,0.5);
        }

        .sag-icon { transition: transform .25s ease; }
        .sag-card:hover .sag-icon { transform: scale(1.1); }

        .sag-btn {
          border: 1px solid rgba(255,255,255,0.2);
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
        }
        .sag-btn:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.4);
        }

        @media (prefers-reduced-motion: reduce) {
          .sag-hidden, .sag-card { opacity: 1 !important; transform: none !important; }
          .sag-visible, .sag-card-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Governance and responsible AI"
        className="w-full py-20 md:py-24"
        style={{ background: "#0D0E24" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`sag-hidden ${headIn ? "sag-visible" : ""} text-center mb-12`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: ACCENT }}
            >
              Governance and Responsible AI
            </p>
            <h2 className="text-[clamp(22px,3.2vw,32px)] font-bold leading-[1.3] tracking-tight text-white max-w-[700px] mx-auto">
              Sema AI is not a consumer assistant or an ungoverned note tool.
            </h2>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
          >
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`sag-card ${gridIn ? "sag-card-in" : ""} rounded-2xl p-6`}
                style={{
                  background: "#15162E",
                  border: "1px solid rgba(255,255,255,0.06)",
                  animationDelay: `${(i % 3) * 0.1 + Math.floor(i / 3) * 0.08}s`,
                }}
              >
                <div
                  className="sag-icon w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: card.iconBg }}
                >
                  {card.icon}
                </div>
                <h3 className="text-[14.5px] font-bold text-white mb-1.5">
                  {card.title}
                </h3>
                <p className="text-[12.5px] leading-relaxed" style={{ color: "#9CA0C4" }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`sag-hidden ${ctaIn ? "sag-visible" : ""} flex flex-wrap items-center justify-center gap-3`}
          >
            <a href="/ai-use-policy" className="sag-btn text-white text-[13.5px] font-semibold rounded-full px-6 py-3">
              Explore AI Governance
            </a>
            <a href="/trust-center" className="sag-btn text-white text-[13.5px] font-semibold rounded-full px-6 py-3">
              Visit Trust Center
            </a>
          </div>

        </div>
      </section>
    </>
  );
}