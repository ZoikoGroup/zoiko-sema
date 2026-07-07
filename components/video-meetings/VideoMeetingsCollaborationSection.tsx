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

const features = [
  {
    title: "Screen sharing",
    desc: "Present work without switching platforms — full screen, window, tab, or application.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Whiteboard",
    desc: "Turn discussion into shared visual thinking, with save-to-space behavior.",
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
    title: "Files",
    desc: "Drag-and-drop file sharing with permission status, kept tied to the meeting.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Meeting chat",
    desc: "In-meeting chat that persists in the related channel or meeting record.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Polls",
    desc: "Quick polling for decisions, prioritization, and sentiment.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Breakout rooms",
    desc: "Host control for creating and managing breakout rooms for workshops and training.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
];

export default function VideoMeetingsCollaborationSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes vcoFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vco-hidden  { opacity: 0; transform: translateY(28px); }
        .vco-visible { animation: vcoFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .vco-card { opacity: 0; transform: translateY(24px); }
        .vco-grid.vco-visible .vco-card {
          animation: vcoFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .vco-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .vco-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px color-mix(in srgb, var(--brand) 14%, transparent);
          border-color: color-mix(in srgb, var(--brand) 28%, transparent);
        }
        .vco-icon-box {
          transition: background-color .3s ease, color .3s ease;
        }
        .vco-card-inner:hover .vco-icon-box {
          background-color: var(--brand);
          color: white;
        }

        @media (prefers-reduced-motion: reduce) {
          .vco-hidden, .vco-visible, .vco-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .vco-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Collaboration experience"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`vco-hidden ${badgeIn ? "vco-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Collaboration Experience
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`vco-hidden ${headIn ? "vco-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900 max-w-[680px] mx-auto">
              Collaborate before, during, and after every meeting.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`vco-grid ${gridIn ? "vco-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="vco-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="vco-card-inner h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm">
                  <span className="vco-icon-box inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-light text-brand mb-4">
                    {f.icon}
                  </span>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                    {f.desc}
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