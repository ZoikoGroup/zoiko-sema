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

const benefits = [
  {
    title: "Move faster",
    desc: "Reduce switching between chat, calls, meetings, files, and follow-up tools.",
  },
  {
    title: "Create clarity",
    desc: "Keep conversations organized by person, team, project, department, or client.",
  },
  {
    title: "Capture decisions",
    desc: "Turn meetings and discussions into summaries, decisions, and action items.",
  },
  {
    title: "Improve accountability",
    desc: "Better visibility into what was discussed, decided, assigned, and completed.",
  },
  {
    title: "Scale governance",
    desc: "Add roles, policies, admin controls, retention, and reporting as the organization grows.",
  },
  {
    title: "Connect workforce context",
    desc: "Use ZoikoTime integration when communication needs operational context and policy alignment.",
  },
];

export default function ProductOverviewBenefitsSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes pobFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pob-hidden  { opacity: 0; transform: translateY(28px); }
        .pob-visible { animation: pobFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .pob-card { opacity: 0; transform: translateY(22px); }
        .pob-grid.pob-visible .pob-card {
          animation: pobFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pob-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .pob-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px color-mix(in srgb, var(--brand) 12%, transparent);
          border-color: color-mix(in srgb, var(--brand) 28%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .pob-hidden, .pob-visible, .pob-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pob-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Business benefits"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`pob-hidden ${badgeIn ? "pob-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Business Benefits
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`pob-hidden ${headIn ? "pob-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Features that translate into outcomes.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`pob-grid ${gridIn ? "pob-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {benefits.map((b, i) => (
              <div
                key={i}
                className="pob-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="pob-card-inner h-full bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm">
                  <h3 className="text-[14.5px] sm:text-[15.5px] font-bold text-gray-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                    {b.desc}
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