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
    title: "Mail",
    desc: "Create meetings from email threads; keep mail attached to the event.",
  },
  {
    title: "Meetings",
    desc: "Sema Meet links, waiting rooms, guest rules, and meeting options.",
  },
  {
    title: "AI Summaries",
    desc: "Attach summary, decisions, owners, and next steps after the meeting.",
  },
  {
    title: "Files",
    desc: "Keep pre-read documents and post-meeting assets connected.",
  },
  {
    title: "Search",
    desc: "Make events, notes, mail, and decisions searchable.",
  },
];

export default function CalendarSystemIntegrationSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes csiFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .csi-hidden  { opacity: 0; transform: translateY(28px); }
        .csi-visible { animation: csiFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .csi-card { opacity: 0; transform: translateY(24px); }
        .csi-grid.csi-visible .csi-card {
          animation: csiFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .csi-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .csi-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15, 15, 42, 0.08);
          border-color: rgba(75, 71, 229, 0.24);
        }

        @media (prefers-reduced-motion: reduce) {
          .csi-hidden, .csi-visible, .csi-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .csi-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Calendar connects to the wider Sema product system"
        className="w-full bg-[#F3F2FD] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`csi-hidden ${badgeIn ? "csi-visible" : ""} flex items-center justify-center gap-2 mb-4`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-brand">
              Mail, Meetings and Follow-up
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`csi-hidden ${headIn ? "csi-visible" : ""} text-center mb-10 sm:mb-12`}
            style={{ animationDelay: "0.06s" }}
          >
            <h2 className="text-[clamp(22px,4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900 mb-2.5">
              Calendar connects to the wider Sema product system.
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-gray-500">
              Email thread becomes calendar event, then AI-assisted follow-up.
            </p>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`csi-hidden ${imgIn ? "csi-visible" : ""} mb-6 sm:mb-8`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Images/CalendarSystemIntegrationSection.webp"
                alt="Team reviewing a video call with multiple remote participants on a large screen"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Feature grid */}
          <div
            ref={gridRef}
            className={`csi-grid ${gridIn ? "csi-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4`}
          >
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="csi-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="csi-card-inner h-full bg-white rounded-2xl border border-gray-200 p-5 sm:p-6">
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