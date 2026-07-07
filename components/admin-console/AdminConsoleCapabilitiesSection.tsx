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
    title: "Users & Access",
    desc: "Invite users, assign roles, manage guests, and control access from one place.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Workspace Control",
    desc: "Create, configure, brand, and govern workspaces across teams and departments.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Security Policies",
    desc: "Manage SSO, MFA, sessions, devices, retention, exports, and audit visibility.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "AI Governance",
    desc: "Control where AI summaries, action capture, meeting intelligence, and automation can be used.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M12 8V4" />
        <circle cx="12" cy="3" r="1" />
        <path d="M8 13h.01M16 13h.01" />
      </svg>
    ),
  },
  {
    title: "Integrations",
    desc: "Connect identity, calendar, storage, API, webhook, workflow, and ZoikoTime systems.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6M15 2v6" />
        <path d="M6 8h12l-1 5a5 5 0 0 1-10 0z" />
        <path d="M12 18v4" />
      </svg>
    ),
  },
  {
    title: "Reporting",
    desc: "Track usage, adoption, policy changes, risk signals, and workspace health.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function AdminConsoleCapabilitiesSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.06);

  return (
    <>
      <style>{`
        @keyframes accFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acc-hidden  { opacity: 0; transform: translateY(28px); }
        .acc-visible { animation: accFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .acc-card { opacity: 0; transform: translateY(24px); }
        .acc-grid.acc-visible .acc-card {
          animation: accFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .acc-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .acc-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(15,31,78,0.08);
          border-color: rgba(59,71,222,0.25);
        }

        @media (prefers-reduced-motion: reduce) {
          .acc-hidden, .acc-visible, .acc-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .acc-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Admin capabilities"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`acc-hidden ${badgeIn ? "acc-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Admin Capabilities
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`acc-hidden ${headIn ? "acc-visible" : ""} text-center mb-3`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Every control area, one console.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`acc-hidden ${headIn ? "acc-visible" : ""} text-center text-[14px] sm:text-[15px] text-gray-500 mb-10 sm:mb-14`}
            style={{ animationDelay: "0.14s" }}
          >
            A fast scan of what the Admin Console governs.
          </p>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`acc-grid ${gridIn ? "acc-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="acc-card"
                style={{ animationDelay: `${0.05 + i * 0.07}s` }}
              >
                <div className="acc-card-inner h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 text-brand mb-4">
                    {c.icon}
                  </span>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
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