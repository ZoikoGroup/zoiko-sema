"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other sections/pages. */
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

const items = [
  {
    title: "Source label",
    description: "Message, meeting, mail, file, calendar, note, decision, or action item.",
  },
  {
    title: "Preview",
    description: "Short snippet with the matching text highlighted.",
  },
  {
    title: "Metadata",
    description: "Date, owner, channel/space, meeting, or file location.",
  },
  {
    title: "Action chips",
    description: "Open, copy link, share, create task, or add follow-up where allowed.",
  },
];

export default function SearchContextRichSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes scrFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .scr-hidden  { opacity: 0; transform: translateY(26px); }
        .scr-visible { animation: scrFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .scr-card { opacity: 0; transform: translateY(20px); }
        .scr-card.scr-card-in {
          animation: scrFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .scr-card {
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
        }
        .scr-card:hover {
          transform: translateY(-4px);
          border-color: #c7cff9;
          box-shadow: 0 14px 28px -20px rgba(52,87,232,0.28);
        }

        @keyframes scrCursorPop {
          0%   { transform: scale(0) rotate(-10deg); opacity: 0; }
          60%  { transform: scale(1.15) rotate(-10deg); opacity: 1; }
          100% { transform: scale(1) rotate(-10deg); opacity: 1; }
        }
        .scr-cursor {
          opacity: 0;
          animation: scrCursorPop .5s cubic-bezier(.22,1,.36,1) forwards;
          animation-delay: 0.35s;
        }

        @keyframes scrSparkle {
          0%, 100% { opacity: .3; transform: scale(.8); }
          50%      { opacity: 1; transform: scale(1.15); }
        }
        .scr-sparkle { animation: scrSparkle 1.6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .scr-hidden, .scr-card, .scr-cursor { opacity: 1 !important; transform: none !important; }
          .scr-visible, .scr-card-in { animation: none !important; }
          .scr-sparkle { animation: none !important; }
        }
      `}</style>

      <section aria-label="Context-rich results" className="w-full bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">

          {/* Heading */}
          <div
            ref={headRef}
            className={`scr-hidden ${headIn ? "scr-visible" : ""} text-center mb-12`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: BRAND }}
            >
              Context-Rich Results
            </p>
            <h2 className="relative inline-flex items-center text-[clamp(24px,3.6vw,34px)] font-bold tracking-tight text-gray-900">
              Useful before you even click.
              <svg
                className="scr-cursor ml-3 -mb-2"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill={BRAND}
                stroke="white"
                strokeWidth="1"
              >
                <path d="M4 2l5.5 15 2-6 6-2z" strokeLinejoin="round" />
              </svg>
              <span className="scr-sparkle absolute -top-1 right-[-6px] w-1.5 h-1.5 rounded-full" style={{ background: "#6EE7B7" }} />
              <span className="scr-sparkle absolute top-3 right-[-16px] w-1 h-1 rounded-full" style={{ background: BRAND, animationDelay: "0.4s" }} />
            </h2>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`scr-card ${gridIn ? "scr-card-in" : ""} rounded-2xl border border-gray-200 px-5 py-5`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-[14.5px] font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-[12.5px] leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}