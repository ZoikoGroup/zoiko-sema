"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across every section on this page. */
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

const BRAND = "#3457E8";

const cards = [
  {
    iconBg: "#4B4A78",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Focus on what matters",
    description:
      "Bring priorities, messages, meetings, and tasks into one calm daily view.",
    tag: "One daily view",
    tagColor: "#22C55E",
  },
  {
    iconBg: "#1E9E7C",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    title: "Move faster after meetings",
    description:
      "Turn notes, decisions, and discussions into follow-ups without manual rework.",
    tag: "Meeting → Follow-up",
    tagColor: BRAND,
  },
  {
    iconBg: "#17171F",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Keep context organized",
    description:
      "Save files, summaries, decisions, and work history where they belong.",
    tag: "Searchable context",
    tagColor: "#7C6FE0",
  },
];

export default function IndividualProductivityWhySection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes ipwFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ipw-hidden  { opacity: 0; transform: translateY(32px); }
        .ipw-visible { animation: ipwFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ipw-card { opacity: 0; transform: translateY(28px); }
        .ipw-card.ipw-card-in {
          animation: ipwFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ipw-card {
          transition: transform .3s ease, box-shadow .3s ease, background .3s ease;
        }
        .ipw-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px -18px rgba(52,87,232,0.35);
          background: #e9ecfb;
        }

        .ipw-icon {
          transition: transform .3s cubic-bezier(.22,1,.36,1);
        }
        .ipw-card:hover .ipw-icon {
          transform: scale(1.08) rotate(-4deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .ipw-hidden, .ipw-card { opacity: 1 !important; transform: none !important; }
          .ipw-visible, .ipw-card-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Why Zoiko Sema for individual productivity"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`ipw-hidden ${headIn ? "ipw-visible" : ""} text-center mb-12`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: BRAND }}
            >
              Why Individual Productivity
            </p>
            <h2 className="text-[clamp(24px,3.2vw,32px)] font-bold tracking-tight text-gray-900">
              Why Zoiko Sema for Individual Productivity
            </h2>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`ipw-card ${gridIn ? "ipw-card-in" : ""} rounded-2xl p-7`}
                style={{
                  background: "#EEF0FC",
                  animationDelay: `${i * 0.12}s`,
                }}
              >
                <div
                  className="ipw-icon w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: card.iconBg }}
                >
                  {card.icon}
                </div>

                <h3 className="text-[16.5px] font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-gray-500 mb-5">
                  {card.description}
                </p>

                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: card.tagColor }}
                  />
                  <span
                    className="text-[12.5px] font-medium"
                    style={{ color: card.tagColor }}
                  >
                    {card.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}