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
    title: "Discuss",
    desc: "Threaded discussions, mentions, reactions, polls, events, and pinned posts keep conversation focused.",
  },
  {
    title: "Decide",
    desc: "Turn a thread into a decision record, assign follow-ups, and keep ownership visible.",
  },
  {
    title: "Preserve",
    desc: "Bookmarks, pinned files, and channel templates keep context ready for the next person.",
  },
];

export default function ChannelsSpacesCollaborationSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes ccsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ccs-hidden  { opacity: 0; transform: translateY(28px); }
        .ccs-visible { animation: ccsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ccs-card { opacity: 0; transform: translateY(24px); }
        .ccs-grid.ccs-visible .ccs-card {
          animation: ccsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .ccs-hidden, .ccs-visible, .ccs-card { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Collaboration experience"
        className="w-full bg-[#F4F7FF] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`ccs-hidden ${badgeIn ? "ccs-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Collaboration Experience
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`ccs-hidden ${headIn ? "ccs-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Discuss. Decide. Preserve.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`ccs-grid ${gridIn ? "ccs-visible" : ""} grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="ccs-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="h-full bg-white rounded-2xl p-6 sm:p-7 shadow-sm">
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-gray-900 mb-2">
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