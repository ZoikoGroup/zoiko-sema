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

const useCases = [
  {
    title: "Individuals",
    desc: "Make fast calls from messages, contacts, and calendars without setting up a formal meeting.",
  },
  {
    title: "Small teams",
    desc: "Resolve project questions quickly and share call outcomes back into team spaces.",
  },
  {
    title: "Sales & customer teams",
    desc: "Discuss customer needs, capture next steps, and keep voice context connected to customer workspaces.",
  },
  {
    title: "Operations teams",
    desc: "Coordinate urgent decisions and attach summaries to operational spaces.",
  },
  {
    title: "Leadership teams",
    desc: "Use governed call summaries, controlled retention, and restricted workspaces for sensitive conversations.",
  },
  {
    title: "Enterprise organizations",
    desc: "Apply identity, policy, retention, AI governance, auditability, and ZoikoTime integration where required.",
  },
];

export default function AudioCallsUseCasesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes ucFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .uc-hidden  { opacity: 0; transform: translateY(28px); }
        .uc-visible { animation: ucFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .uc-card { opacity: 0; transform: translateY(22px); }
        .uc-grid.uc-visible .uc-card {
          animation: ucFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .uc-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .uc-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px color-mix(in srgb, var(--brand) 12%, transparent);
          border-color: color-mix(in srgb, var(--brand) 28%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .uc-hidden, .uc-visible, .uc-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .uc-card-inner:hover { transform: none !important; }
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
            className={`uc-hidden ${badgeIn ? "uc-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Use Cases
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`uc-hidden ${headIn ? "uc-visible" : ""} text-center mb-10 sm:mb-12`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900">
              Built for how voice actually gets used.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`uc-grid ${gridIn ? "uc-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {useCases.map((u, i) => (
              <div
                key={i}
                className="uc-card"
                style={{ animationDelay: `${0.05 + i * 0.07}s` }}
              >
                <div className="uc-card-inner h-full bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm">
                  <h3 className="text-[14.5px] sm:text-[15px] font-bold text-gray-900 mb-2">
                    {u.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                    {u.desc}
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