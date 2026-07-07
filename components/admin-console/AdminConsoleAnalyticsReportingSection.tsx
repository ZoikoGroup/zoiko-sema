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

const columns = [
  {
    title: "Adoption",
    desc: "Active users, engagement, channel & meeting usage.",
  },
  {
    title: "Administration",
    desc: "Pending invites, role changes, access requests.",
  },
  {
    title: "Security",
    desc: "MFA adoption, failed sign-ins, guest exceptions.",
  },
  {
    title: "AI Usage",
    desc: "Summaries generated, action items, policy exceptions.",
  },
];

export default function AdminConsoleAnalyticsReportingSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: cardRef, inView: cardIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes acarFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acar-hidden  { opacity: 0; transform: translateY(28px); }
        .acar-visible { animation: acarFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .acar-hidden, .acar-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Analytics and reporting"
        className="w-full bg-[#F4F7FF] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`acar-hidden ${badgeIn ? "acar-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Analytics &amp; Reporting
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`acar-hidden ${headIn ? "acar-visible" : ""} text-center mb-4`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 max-w-[560px] mx-auto">
              Understand adoption, usage, risk, and workspace health.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`acar-hidden ${headIn ? "acar-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-gray-500 max-w-[580px] mx-auto mb-10 sm:mb-14`}
            style={{ animationDelay: "0.14s" }}
          >
            Visibility into how communication spaces are being used, where policies need attention, and how teams are adopting structured communication.
          </p>

          {/* Browser card */}
          <div
            ref={cardRef}
            className={`acar-hidden ${cardIn ? "acar-visible" : ""} rounded-2xl border border-gray-100 bg-white shadow-[0_20px_50px_rgba(15,31,78,0.08)] overflow-hidden`}
            style={{ animationDelay: "0.1s" }}
          >
            {/* Browser bar */}
            <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-gray-100">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 p-6 sm:p-8">
              {columns.map((col, i) => (
                <div key={i}>
                  <h3 className="text-[14px] sm:text-[14.5px] font-bold text-gray-900 mb-2">
                    {col.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] leading-[1.65] text-gray-500">
                    {col.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}