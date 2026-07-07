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

const cards = [
  {
    title: "Workspace owners & permissions",
    desc: "Channel permissions, guest controls, moderation, and admin roles.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Private & public spaces",
    desc: "Set visibility, external access restrictions, and DLP-ready controls.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Retention & audit logs",
    desc: "Retention policy, AI summary settings, and full audit visibility per channel.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function ChannelsSpacesGovernanceSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes csgsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .csgs-hidden  { opacity: 0; transform: translateY(28px); }
        .csgs-visible { animation: csgsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .csgs-card { opacity: 0; transform: translateY(24px); }
        .csgs-grid.csgs-visible .csgs-card {
          animation: csgsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .csgs-hidden, .csgs-visible, .csgs-card { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Administration and governance"
        className="w-full bg-[#0E0A24] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`csgs-hidden ${badgeIn ? "csgs-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/70">
                Administration &amp; Governance
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`csgs-hidden ${headIn ? "csgs-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-white max-w-[640px] mx-auto">
              Give teams freedom with the right controls.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`csgs-grid ${gridIn ? "csgs-visible" : ""} grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="csgs-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 sm:p-7">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.06] text-white/80 mb-4">
                    {c.icon}
                  </span>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-white/45">
                    {c.desc}
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