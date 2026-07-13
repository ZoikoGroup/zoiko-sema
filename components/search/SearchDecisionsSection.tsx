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

const items = [
  {
    title: "Decision search",
    desc: "Find what was agreed, when it was agreed, and who was involved.",
  },
  {
    title: "Owner search",
    desc: "Find responsibilities assigned to a person or team.",
  },
  {
    title: "Due date search",
    desc: "Find deadlines mentioned in meetings, messages, mail, and notes.",
  },
  {
    title: "Follow-up search",
    desc: "Recover next steps after calls, meetings, or client discussions.",
  },
  {
    title: "Source trace",
    desc: "Open the original meeting, message, note, mail thread, or file.",
  },
];

export default function SearchDecisionsSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes sdsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sds-hidden  { opacity: 0; transform: translateY(28px); }
        .sds-visible { animation: sdsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .sds-card { opacity: 0; transform: translateY(24px); }
        .sds-grid.sds-visible .sds-card {
          animation: sdsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sds-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .sds-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px color-mix(in srgb, var(--brand) 12%, transparent);
          border-color: color-mix(in srgb, var(--brand) 24%, transparent);
        }

        .sds-btn-primary {
          transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease;
        }
        .sds-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px color-mix(in srgb, var(--brand) 30%, transparent);
        }
        .sds-btn-secondary {
          transition: transform .2s ease, border-color .2s ease, background-color .2s ease;
        }
        .sds-btn-secondary:hover {
          transform: translateY(-2px);
          border-color: color-mix(in srgb, var(--brand) 40%, transparent);
          background-color: color-mix(in srgb, var(--brand) 4%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .sds-hidden, .sds-visible, .sds-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .sds-card-inner:hover, .sds-btn-primary:hover, .sds-btn-secondary:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Decisions and action items"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`sds-hidden ${badgeIn ? "sds-visible" : ""} flex justify-center mb-5`}
          >
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-brand">
              Decisions and Action Items
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`sds-hidden ${headIn ? "sds-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900 max-w-[780px] mx-auto">
              Find what was decided, not just the words that were said.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`sds-grid ${gridIn ? "sds-visible" : ""} flex flex-wrap justify-center gap-4 sm:gap-5 mb-10 sm:mb-12`}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="sds-card w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="sds-card-inner h-full bg-white rounded-2xl border border-gray-200 p-6 sm:p-7">
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`sds-hidden ${ctaIn ? "sds-visible" : ""} flex flex-wrap items-center justify-center gap-3`}
            style={{ animationDelay: "0.15s" }}
          >
            <button
              type="button"
              className="sds-btn-primary inline-flex items-center justify-center rounded-full bg-brand text-white text-[14px] font-semibold px-6 py-3"
            >
              Search decisions and action items
            </button>
            <button
              type="button"
              className="sds-btn-secondary inline-flex items-center justify-center rounded-full bg-white text-gray-900 text-[14px] font-semibold px-6 py-3 border border-gray-300"
            >
              Explore AI Meeting Summaries
            </button>
          </div>
        </div>
      </section>
    </>
  );
}