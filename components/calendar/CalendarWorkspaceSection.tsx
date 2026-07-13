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

const features = [
  {
    title: "Join button",
    desc: "One-click join for Sema Meet events.",
  },
  {
    title: "Guest & attendance",
    desc: "Guest list and attendance status visible on the event.",
  },
  {
    title: "Recurring meetings",
    desc: "Recurring support with reschedule and cancel flows.",
  },
  {
    title: "Event context",
    desc: "Messages, mail, notes, files, summaries, and follow-up live on the event page.",
  },
];

export default function CalendarWorkspaceSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes cwsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cws-hidden  { opacity: 0; transform: translateY(28px); }
        .cws-visible { animation: cwsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .cws-card { opacity: 0; transform: translateY(24px); }
        .cws-grid.cws-visible .cws-card {
          animation: cwsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .cws-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .cws-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15, 15, 42, 0.08);
          border-color: rgba(75, 71, 229, 0.24);
        }

        @media (prefers-reduced-motion: reduce) {
          .cws-hidden, .cws-visible, .cws-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .cws-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Calendar workspace"
        className="w-full bg-[#F3F2FD] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`cws-hidden ${badgeIn ? "cws-visible" : ""} flex items-center justify-center gap-2 mb-4`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-brand">
              Calendar Workspace
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`cws-hidden ${headIn ? "cws-visible" : ""} text-center mb-12 sm:mb-14`}
            style={{ animationDelay: "0.06s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 max-w-[680px] mx-auto mb-3">
              The practical calendar experience buyers already expect.
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-gray-500 max-w-[560px] mx-auto">
              Day, week, month, and agenda views meetings, calls, events, reminders, and workspace tasks in one place.
            </p>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`cws-hidden ${imgIn ? "cws-visible" : ""} mb-6 sm:mb-8`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Images/CALENDAR_WORKSPACE_MEETING.webp"
                alt="Team collaborating around a conference table with a presentation on screen"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Feature grid */}
          <div
            ref={gridRef}
            className={`cws-grid ${gridIn ? "cws-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`}
          >
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="cws-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="cws-card-inner h-full bg-white rounded-2xl border border-gray-200 p-5 sm:p-6">
                  <h3 className="text-[14px] sm:text-[14.5px] font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] leading-[1.7] text-gray-500">
                    {feature.desc}
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