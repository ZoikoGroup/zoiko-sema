"use client";

import React, { useEffect, useRef, useState } from "react";

// Reusable scroll-in-view hook. Generic over the element type so the ref can be
// attached to any element (div, ul, section, ...) without a type mismatch.
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
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

type Stat = {
  value: string;
  accent?: boolean; // render the value in brand blue
  title: string;
  description: string;
};

const STATS: Stat[] = [
  {
    value: "< 3 min",
    accent: true,
    title: "Shift handoff time",
    description: "With complete context, tasks, and VIP notes",
  },
  {
    value: "Multi-property",
    title: "Unified operations hub",
    description: "All properties, one governed workspace",
  },
  {
    value: "Zero leaks",
    title: "Guest context separation",
    description: "Masked references in coordination channels",
  },
  {
    value: "100% reviewed",
    title: "AI-assisted summaries",
    description: "Human approval before any distribution",
  },
];

export function TravelStatsSection() {
  const { ref: gridRef, inView: gridIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes tstFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tst-hidden  { opacity: 0; transform: translateY(24px); }
        .tst-visible { animation: tstFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .tst-hidden, .tst-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Travel & Hospitality — key outcomes"
        className="w-full bg-[#EAF0FA] py-8 dark:bg-[#0D0B24] sm:py-12"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <div
            ref={gridRef}
            className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_1px_3px_rgba(16,24,40,0.06)] dark:border-white/10 dark:bg-[#151233] dark:shadow-none sm:grid-cols-2 lg:grid-cols-4"
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.title}
                className={`tst-hidden ${gridIn ? "tst-visible" : ""} border-gray-100 p-6 dark:border-white/10 ${
                  i > 0 ? "border-t sm:border-t-0 lg:border-l" : ""
                } ${i === 2 ? "sm:border-t lg:border-t-0" : ""} ${i === 3 ? "border-t lg:border-t-0" : ""}`}
                style={{ animationDelay: `${0.08 + i * 0.08}s` }}
              >
                <p
                  className={`mb-2 text-[clamp(20px,2.4vw,26px)] font-bold leading-tight tracking-tight ${
                    stat.accent
                      ? "text-[#2F6BEB] dark:text-[#6B8AF5]"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="mb-1.5 text-[14px] font-semibold text-gray-900 dark:text-white">
                  {stat.title}
                </p>
                <p className="text-[12px] leading-[1.5] text-gray-500 dark:text-gray-400">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TravelStatsSection;