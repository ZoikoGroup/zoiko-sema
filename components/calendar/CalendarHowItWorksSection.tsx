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

const steps = [
  {
    number: 1,
    color: "bg-blue-600",
    title: "Request",
    desc: "A meeting need begins from mail, chat, call, or calendar.",
  },
  {
    number: 2,
    color: "bg-violet-600",
    title: "Find slot",
    desc: "Usable times across guests and time zones, without exposing private details.",
  },
  {
    number: 3,
    color: "bg-emerald-600",
    title: "Apply policy",
    desc: "Workspace rules apply before creation.",
  },
  {
    number: 4,
    color: "bg-amber-600",
    title: "Meet",
    desc: "Join from Calendar or Sema Meet with one click.",
  },
  {
    number: 5,
    color: "bg-red-600",
    title: "Summarize",
    desc: "AI creates summary, decisions, owners, and next steps.",
  },
  {
    number: 6,
    color: "bg-gray-900",
    title: "Follow up",
    desc: "Mail, notes, files, and ZoikoTime context stay connected.",
  },
];

export default function CalendarHowItWorksSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes hiwFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hiw-hidden  { opacity: 0; transform: translateY(28px); }
        .hiw-visible { animation: hiwFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .hiw-card { opacity: 0; transform: translateY(24px); }
        .hiw-grid.hiw-visible .hiw-card {
          animation: hiwFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .hiw-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .hiw-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15, 15, 42, 0.08);
          border-color: rgba(75, 71, 229, 0.24);
        }

        @media (prefers-reduced-motion: reduce) {
          .hiw-hidden, .hiw-visible, .hiw-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .hiw-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="How it works"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`hiw-hidden ${badgeIn ? "hiw-visible" : ""} flex items-center justify-center gap-2 mb-4`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-brand">
              How It Works
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`hiw-hidden ${headIn ? "hiw-visible" : ""} text-center mb-12 sm:mb-14`}
            style={{ animationDelay: "0.06s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 max-w-[680px] mx-auto mb-3">
              Calendar as the planning layer from request to accountability.
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-gray-500">
              Every step connects meeting creation to follow-up and follow-through.
            </p>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`hiw-hidden ${imgIn ? "hiw-visible" : ""} mb-6 sm:mb-8`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Images/HOW_IT_WORKS_MEETING.webp"
                alt="Team in a meeting reviewing a scheduling and workflow dashboard"
                className="w-full h-auto object-cover"
              />
             
            </div>
          </div>

          {/* Steps grid */}
          <div
            ref={gridRef}
            className={`hiw-grid ${gridIn ? "hiw-visible" : ""} grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4`}
          >
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="hiw-card"
                style={{ animationDelay: `${0.04 + i * 0.06}s` }}
              >
                <div className="hiw-card-inner h-full bg-white rounded-2xl border border-gray-200 p-4 sm:p-5">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold text-white mb-3 ${step.color}`}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-[13.5px] font-bold text-gray-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[12px] leading-[1.6] text-gray-500">
                    {step.desc}
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