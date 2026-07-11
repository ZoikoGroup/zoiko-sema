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
    tag: "Structured recap",
    title: "Stop recap drift",
    desc: "Capture key points, decisions, and owners before context disappears.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    tag: "Owners & due dates",
    title: "Move faster after meetings",
    desc: "Turn summaries into assigned follow-ups and shared context.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    tag: "Policy-aware AI",
    title: "Keep AI governed",
    desc: "Control generation, visibility, sharing, retention, and auditability.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function MeetingSummaryWhySection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes mtswFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .mtsw-hidden  { opacity:0; transform:translateY(28px); }
        .mtsw-visible { animation: mtswFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .mtsw-card { opacity:0; transform:translateY(22px); }
        .mtsw-card.active { animation: mtswFadeUp .5s cubic-bezier(.22,1,.36,1) forwards; }

        .mtsw-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, border-color .3s ease;
        }
        .mtsw-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 32px rgba(79,70,229,0.14);
          border-color: #4F46E5;
        }
        .mtsw-icon-box {
          transition: transform .3s ease, background-color .3s ease;
        }
        .mtsw-card:hover .mtsw-icon-box {
          transform: scale(1.08);
          background-color: rgba(79,70,229,0.16);
        }

        @media (prefers-reduced-motion: reduce) {
          .mtsw-hidden, .mtsw-card { opacity:1!important; transform:none!important; animation:none!important; }
          .mtsw-visible { animation:none!important; opacity:1!important; }
          .mtsw-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Why Meeting to Summary"
        className="w-full py-20 md:py-24"
        style={{ background: "#FFFFFF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`mtsw-hidden ${headIn ? "mtsw-visible" : ""} text-center mb-14`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#4F46E5" }}
            >
              Why Meeting to Summary
            </p>
            <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-5 max-w-[640px] mx-auto">
              Meetings that turn into action, not memory
            </h2>
            <p className="mx-auto max-w-[640px] text-[15px] leading-[1.75] text-gray-500">
              Capture the outcome before context disappears, move faster on
              shared follow-ups, and keep AI governed by workspace policy.
            </p>
          </div>

          {/* Cards */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`mtsw-card ${cardsIn ? "active" : ""} rounded-2xl border border-gray-200 bg-white p-7`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div
                  className="mtsw-icon-box w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(79,70,229,0.10)", color: "#4F46E5" }}
                >
                  {card.icon}
                </div>
                <h3 className="text-[16.5px] font-bold text-gray-900 mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-gray-500 mb-5">
                  {card.desc}
                </p>
                <span
                  className="inline-block rounded-full px-3.5 py-1.5 text-[12px] font-semibold"
                  style={{ background: "rgba(79,70,229,0.10)", color: "#4F46E5" }}
                >
                  {card.tag}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}