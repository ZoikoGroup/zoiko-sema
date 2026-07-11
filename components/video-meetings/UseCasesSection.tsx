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
    tag: "Team standups",
    title: "Recap daily meetings, capture blockers",
    desc: "Keep async updates visible even for the people who couldn't join.",
    icon: "🎥",
    accentBg: "bg-blue-600/10",
    iconColor: "text-blue-600",
  },
  {
    tag: "Client meetings",
    title: "Turn client calls into follow-up plans",
    desc: "Share summaries, decisions, and next steps client-side in minutes.",
    icon: "📞",
    accentBg: "bg-indigo-600/10",
    iconColor: "text-indigo-600",
  },
  {
    tag: "Leadership reviews",
    title: "Use structured recaps for governance",
    desc: "Executive-ready summaries with decision and access history.",
    icon: "📊",
    accentBg: "bg-blue-600/10",
    iconColor: "text-blue-600",
  },
  {
    tag: "Sales & onboarding",
    title: "Onboard customers with less repetition",
    desc: "Recorded sessions and searchable transcripts speed up ramp-up.",
    icon: "🚀",
    accentBg: "bg-indigo-600/10",
    iconColor: "text-indigo-600",
  },
];

export default function UseCasesSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes ucFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .uc-hidden  { opacity: 0; transform: translateY(30px); }
        .uc-visible { animation: ucFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .uc-card { opacity: 0; transform: translateY(25px); }
        .uc-grid.uc-visible .uc-card {
          animation: ucFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .uc-card-interactive {
          transition: transform .3s cubic-bezier(.25, 1, .5, 1), box-shadow .3s ease, border-color .3s ease;
        }
        .uc-card-interactive:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px color-mix(in srgb, var(--brand, #3457e8) 6%, transparent);
          border-color: color-mix(in srgb, var(--brand, #3457e8) 20%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .uc-hidden, .uc-visible, .uc-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .uc-card-interactive:hover { transform: none !important; }
        }
      `}</style>

      <section className="w-full bg-violet-50 py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 lg:px-16">
          
          {/* Header Block */}
          <div
            ref={headRef}
            className={`uc-hidden ${headIn ? "uc-visible" : ""} text-center mb-12 md:mb-16 max-w-2xl mx-auto`}
          >
            <span className="block text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
              USE CASES
            </span>
            <h2 className="text-[clamp(24px,4.5vw,36px)] font-extrabold leading-[1.2] text-slate-900 tracking-tight">
              Meetings that fit how your team actually works.
            </h2>
          </div>

          {/* Use Cases Dashboard Grid */}
          <div
            ref={gridRef}
            className={`uc-grid ${gridIn ? "uc-visible" : ""} grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6`}
          >
            {useCases.map((item, i) => (
              <div
                key={i}
                className="uc-card"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="uc-card-interactive h-full bg-white rounded-[20px] border border-violet-100 p-6 sm:p-8 flex justify-between gap-4 items-start shadow-sm">
                  
                  {/* Copy Content Block */}
                  <div className="flex-1 min-w-0">
                    <span className="block text-gray-400 text-xs font-bold tracking-wide uppercase mb-2">
                      {item.tag}
                    </span>
                    <h3 className="text-base sm:text-[17px] font-bold text-slate-900 mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Icon Block */}
                  <div className={`flex shrink-0 size-11 items-center justify-center rounded-xl ${item.accentBg} ${item.iconColor} text-xl select-none`}>
                    <span role="img" aria-label={item.tag}>
                      {item.icon}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}