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
    title: "Team standups",
    desc: "Run quick daily meetings, capture blockers, and keep action items connected to the workspace.",
    linkLabel: "Start Free",
  },
  {
    title: "Client meetings",
    desc: "Meet with external guests, share files, record outcomes, and retain a clean meeting history.",
    linkLabel: "Start Free",
  },
  {
    title: "Leadership reviews",
    desc: "Use structured agendas, decisions, summaries, and secure recording controls.",
    linkLabel: "Get a Demo",
  },
  {
    title: "Sales & onboarding",
    desc: "Host customer calls, capture next steps, share recaps, and keep follow-up accountable.",
    linkLabel: "Start Free",
  },
  {
    title: "Customer support",
    desc: "Escalate from chat to video, review issues live, and preserve notes in the workspace.",
    linkLabel: "Get a Demo",
  },
  {
    title: "Operations & workforce governance",
    desc: "Connect meetings to operational context with ZoikoTime where governance requires it.",
    linkLabel: "Explore ZoikoTime",
  },
];

export default function VideoMeetingsUseCasesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes vucFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vuc-hidden  { opacity: 0; transform: translateY(28px); }
        .vuc-visible { animation: vucFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .vuc-card { opacity: 0; transform: translateY(22px); }
        .vuc-grid.vuc-visible .vuc-card {
          animation: vucFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .vuc-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .vuc-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px color-mix(in srgb, var(--brand) 12%, transparent);
          border-color: color-mix(in srgb, var(--brand) 28%, transparent);
        }

        .vuc-link {
          transition: gap .2s ease, color .2s ease;
        }
        .vuc-link:hover {
          gap: 8px;
          color: var(--brand-dark);
        }

        @media (prefers-reduced-motion: reduce) {
          .vuc-hidden, .vuc-visible, .vuc-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .vuc-card-inner:hover { transform: none !important; }
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
            className={`vuc-hidden ${badgeIn ? "vuc-visible" : ""} flex justify-center mb-6`}
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
            className={`vuc-hidden ${headIn ? "vuc-visible" : ""} text-center mb-10 sm:mb-12`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900">
              Meetings that fit how your team actually works.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`vuc-grid ${gridIn ? "vuc-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {useCases.map((u, i) => (
              <div
                key={i}
                className="vuc-card"
                style={{ animationDelay: `${0.05 + i * 0.07}s` }}
              >
                <div className="vuc-card-inner h-full bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm flex flex-col">
                  <h3 className="text-[14.5px] sm:text-[15px] font-bold text-gray-900 mb-2">
                    {u.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500 mb-4">
                    {u.desc}
                  </p>
                  <a
                    href="#"
                    className="vuc-link mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand"
                  >
                    {u.linkLabel}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}