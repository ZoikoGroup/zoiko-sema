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

const steps = [
  {
    number: 1,
    title: "Understand",
    description:
      "Reads permitted context across meetings, messages, calls, mail, calendar, and files.",
  },
  {
    number: 2,
    title: "Summarize",
    description: "Produces clear summaries, decisions, and next steps.",
  },
  {
    number: 3,
    title: "Draft",
    description: "Drafts follow-ups, replies, and action notes for review.",
  },
  {
    number: 4,
    title: "Search",
    description: "Helps users find answers with source context.",
  },
  {
    number: 5,
    title: "Govern",
    description:
      "Respects roles, policies, Confidential Mode, and audit settings.",
  },
];

export default function SemaAiOperatingModelSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: rowRef, inView: rowIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes saomFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .saom-hidden  { opacity: 0; transform: translateY(28px); }
        .saom-visible { animation: saomFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .saom-number { opacity: 0; transform: scale(.6); }
        .saom-number.saom-number-in {
          animation: saomNumberIn .45s cubic-bezier(.22,1,.36,1) forwards;
        }
        @keyframes saomNumberIn {
          from { opacity: 0; transform: scale(.6); }
          to   { opacity: 1; transform: scale(1); }
        }

        .saom-line { transform: scaleX(0); transform-origin: left; }
        .saom-line.saom-line-in {
          animation: saomLineIn .5s ease forwards;
        }
        @keyframes saomLineIn {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        .saom-text { opacity: 0; transform: translateY(16px); }
        .saom-text.saom-text-in {
          animation: saomFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .saom-col:hover .saom-num-box { transform: scale(1.1); }
        .saom-num-box { transition: transform .25s ease; }

        @media (prefers-reduced-motion: reduce) {
          .saom-hidden, .saom-number, .saom-text { opacity: 1 !important; transform: none !important; }
          .saom-visible, .saom-number-in, .saom-text-in { animation: none !important; }
          .saom-line { transform: scaleX(1) !important; }
        }
      `}</style>

      <section
        aria-label="AI operating model"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`saom-hidden ${headIn ? "saom-visible" : ""} text-center mb-16`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: BRAND }}
            >
              AI Operating Model
            </p>
            <h2 className="text-[clamp(24px,3.4vw,34px)] font-bold leading-[1.25] tracking-tight text-gray-900">
              Permitted context becomes governed output.
            </h2>
          </div>

          {/* Connected steps */}
          <div ref={rowRef} className="relative">
            {/* continuous connecting line, centered under the number row */}
            <div
              className={`saom-line ${rowIn ? "saom-line-in" : ""} hidden md:block absolute h-px bg-gray-200`}
              style={{ top: "22px", left: "10%", right: "10%" }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-4 relative">
              {steps.map((step, i) => (
                <div key={step.number} className="saom-col flex flex-col items-center text-center px-2">
                  <div
                    className={`saom-number ${rowIn ? "saom-number-in" : ""} saom-num-box w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mb-5`}
                    style={{ background: BRAND, animationDelay: `${i * 0.12}s` }}
                  >
                    <span className="text-[15px] font-bold text-white">{step.number}</span>
                  </div>

                  <div
                    className={`saom-text ${rowIn ? "saom-text-in" : ""}`}
                    style={{ animationDelay: `${i * 0.1 + 0.15}s` }}
                  >
                    <h3 className="text-[14.5px] font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[12.5px] leading-relaxed text-gray-500 max-w-[160px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}