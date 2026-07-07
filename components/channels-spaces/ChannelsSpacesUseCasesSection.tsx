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
    title: "Project teams",
    desc: "Keep discussion, files, and decisions attached to the work.",
  },
  {
    title: "Client delivery",
    desc: "Controlled external spaces for client collaboration.",
  },
  {
    title: "Customer support",
    desc: "Escalation threads with full audit trail.",
  },
  {
    title: "Enterprise departments",
    desc: "Structured spaces with retention and access governance.",
  },
];

export default function ChannelsSpacesUseCasesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes csucFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .csuc-hidden  { opacity: 0; transform: translateY(28px); }
        .csuc-visible { animation: csucFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .csuc-card { opacity: 0; transform: translateY(24px); }
        .csuc-grid.csuc-visible .csuc-card {
          animation: csucFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .csuc-hidden, .csuc-visible, .csuc-card { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Use cases"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`csuc-hidden ${badgeIn ? "csuc-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Use Cases
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`csuc-hidden ${headIn ? "csuc-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,3.6vw,32px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Structured for every kind of team.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`csuc-grid ${gridIn ? "csuc-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="csuc-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="h-full rounded-2xl border border-gray-100 p-5 sm:p-6">
                  <h3 className="text-[14.5px] sm:text-[15px] font-bold text-gray-900 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] leading-[1.6] text-gray-500">
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