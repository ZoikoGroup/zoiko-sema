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
    title: "Administrative control",
    desc: "Centralized controls for users, roles, workspaces, policies, integrations, and exports.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="8 12 11 15 16 9" />
      </svg>
    ),
  },
  {
    title: "Security readiness",
    desc: "SSO, MFA, session controls, audit logs, and access governance for business and enterprise teams.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    title: "Compliance support",
    desc: "Retention policies, legal hold, compliance exports, and audit visibility for governed communication.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Privacy-respecting design",
    desc: "Governed administration without turning team communication into surveillance.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="8 12 11 15 16 9" />
      </svg>
    ),
  },
];

export default function AdminConsoleEnterpriseTrustSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes acetFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acet-hidden  { opacity: 0; transform: translateY(28px); }
        .acet-visible { animation: acetFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .acet-card { opacity: 0; transform: translateY(24px); }
        .acet-grid.acet-visible .acet-card {
          animation: acetFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .acet-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .acet-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(15,31,78,0.08);
          border-color: rgba(59,71,222,0.2);
        }

        @media (prefers-reduced-motion: reduce) {
          .acet-hidden, .acet-visible, .acet-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .acet-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Enterprise trust"
        className="w-full bg-white pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`acet-hidden ${badgeIn ? "acet-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Enterprise Trust
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`acet-hidden ${headIn ? "acet-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Calm, precise, and credible by design.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`acet-grid ${gridIn ? "acet-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="acet-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="acet-card-inner h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand/10 text-brand mb-4">
                    {c.icon}
                  </span>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 mb-2 leading-[1.25]">
                    {c.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] leading-[1.65] text-gray-500">
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