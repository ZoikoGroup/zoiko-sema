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

const rows = [
  {
    title: "Team availability",
    desc: "Show suitable time slots across invited guests.",
    tag: "No private titles shown",
    tagStyle: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Working hours",
    desc: "Respect configured working hours and time zones.",
    tag: "Availability state only",
    tagStyle: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Rest rules",
    desc: "Respect ZoikoTime policies when enabled.",
    tag: "Authorized contexts only",
    tagStyle: "bg-amber-50 text-amber-700",
  },
  {
    title: "External guests",
    desc: "Support public availability links and guest invites.",
    tag: "Internal calendars stay private",
    tagStyle: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Conflict handling",
    desc: "Warn when a selected slot conflicts with availability.",
    tag: "Reasons stay permissioned",
    tagStyle: "bg-indigo-50 text-indigo-700",
  },
];

export default function CalendarAvailabilitySection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: listRef, inView: listIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes casFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cas-hidden  { opacity: 0; transform: translateY(28px); }
        .cas-visible { animation: casFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .cas-row { opacity: 0; transform: translateY(16px); }
        .cas-list.cas-visible .cas-row {
          animation: casFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .cas-row-inner {
          transition: background-color .2s ease;
        }
        .cas-row-inner:hover {
          background-color: rgba(75, 71, 229, 0.03);
        }

        @media (prefers-reduced-motion: reduce) {
          .cas-hidden, .cas-visible, .cas-row { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Availability and time zones"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`cas-hidden ${badgeIn ? "cas-visible" : ""} flex items-center justify-center gap-2 mb-4`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-brand">
              Availability and Time Zones
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`cas-hidden ${headIn ? "cas-visible" : ""} text-center mb-10 sm:mb-12`}
            style={{ animationDelay: "0.06s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 max-w-[640px] mx-auto">
              Find the right time without exposing more than necessary.
            </h2>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`cas-hidden ${imgIn ? "cas-visible" : ""} mb-6 sm:mb-8`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative rounded-3xl overflow-hidden ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Images/CalendarAvailabilitySection.webp"
                alt="Team in a video conference meeting reviewing multiple remote participants"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Policy rows */}
          <div
            ref={listRef}
            className={`cas-list ${listIn ? "cas-visible" : ""} bg-white rounded-3xl border border-gray-200 shadow-[0_1px_2px_rgba(15,15,42,0.04)] overflow-hidden`}
          >
            {rows.map((row, i) => (
              <div
                key={row.title}
                className="cas-row"
                style={{ animationDelay: `${0.04 + i * 0.06}s` }}
              >
                <div
                  className={`cas-row-inner flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-6 sm:px-8 py-5 ${
                    i !== rows.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <span className="text-[14px] font-bold text-gray-900 sm:w-[180px] shrink-0">
                    {row.title}
                  </span>
                  <span className="text-[13px] text-gray-500 flex-1 sm:text-center">
                    {row.desc}
                  </span>
                  <span
                    className={`shrink-0 self-start sm:self-center text-[11.5px] font-semibold px-3 py-1.5 rounded-full ${row.tagStyle}`}
                  >
                    {row.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}