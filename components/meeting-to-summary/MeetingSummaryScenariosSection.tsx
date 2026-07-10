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
    title: "Daily standup recap",
    desc: "Summarize blockers, owners, deadlines, and missed updates so the team stays aligned without repeat meetings.",
    tag: "Fewer status meetings",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Client meeting recap",
    desc: "Capture customer asks, decisions, commitments, and next steps — client-safe to share.",
    tag: "Better follow-up",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
  {
    title: "Leadership review",
    desc: "Summarize decisions, risks, escalations, and owners for clear evidence and follow-through.",
    tag: "Leadership clarity",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Project planning meeting",
    desc: "Convert discussion into milestones, tasks, dependencies, and decision records.",
    tag: "Plan to execution",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>
    ),
  },
  {
    title: "Remote team sync",
    desc: "Help people who missed the meeting catch up quickly with a searchable recap.",
    tag: "Remote continuity",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Sensitive meeting recap",
    desc: "Control AI summaries for sensitive workspaces and restrict sharing by policy.",
    tag: "Enterprise ready",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
];

export default function MeetingSummaryScenariosSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.06);

  return (
    <>
      <style>{`
        @keyframes mssFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mss-hidden  { opacity: 0; transform: translateY(28px); }
        .mss-visible { animation: mssFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .mss-card { opacity: 0; transform: translateY(24px); }
        .mss-grid.mss-grid-visible .mss-card {
          animation: mssFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .mss-card-inner {
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .mss-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(30,27,75,0.16);
        }

        .mss-header {
          transition: transform .4s ease;
        }
        .mss-card-inner:hover .mss-header {
          transform: scale(1.03);
        }

        @media (prefers-reduced-motion: reduce) {
          .mss-hidden, .mss-visible, .mss-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .mss-card-inner:hover, .mss-card-inner:hover .mss-header { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Meeting summary scenarios"
        className="w-full bg-[#F1F3FB] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`mss-hidden ${badgeIn ? "mss-visible" : ""} text-center mb-4`}
          >
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#4B47E5]">
              Meeting Summary Scenarios
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`mss-hidden ${headIn ? "mss-visible" : ""} text-center mb-3`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900">
              Recognize your team&apos;s meetings
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`mss-hidden ${headIn ? "mss-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-gray-500 max-w-[560px] mx-auto mb-10 sm:mb-14`}
            style={{ animationDelay: "0.14s" }}
          >
            From daily standups to leadership reviews and sensitive discussions, summaries adapt to each meeting type.
          </p>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`mss-grid ${gridIn ? "mss-grid-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={c.title}
                className="mss-card"
                style={{ animationDelay: `${0.04 + i * 0.06}s` }}
              >
                <div className="mss-card-inner h-full rounded-2xl bg-white overflow-hidden">
                  {/* Dark header band */}
                  <div
                    className="mss-header px-5 pt-5 pb-8 flex flex-col"
                    style={{
                      background: "linear-gradient(135deg, #2E2A6E 0%, #1E1B4B 100%)",
                    }}
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-white mb-6">
                      {c.icon}
                    </span>
                    <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-white/10 text-emerald-300 text-[11px] font-semibold px-3 py-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {c.tag}
                    </span>
                  </div>

                  {/* White body */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 mb-2">
                      {c.title}
                    </h3>
                    <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}