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
    title: "Role-based access",
    desc: "Control who can create workspaces, invite users, manage channels, and configure integrations.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-2a5 5 0 0 1 5-5h1" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M17 21v-1a5 5 0 0 0-3.5-4.77" />
      </svg>
    ),
  },
  {
    title: "Admin governance",
    desc: "Manage users, groups, roles, retention, audit logs, and security settings.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Responsible AI",
    desc: "Controls over AI summaries, action capture, meeting intelligence, and retention.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        <line x1="12" y1="18" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    title: "Compliance support",
    desc: "Auditability, exports, retention policies, and enterprise controls for governed communication.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function ProductOverviewTrustSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes ptrFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ptr-hidden  { opacity: 0; transform: translateY(28px); }
        .ptr-visible { animation: ptrFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ptr-card { opacity: 0; transform: translateY(22px); }
        .ptr-grid.ptr-visible .ptr-card {
          animation: ptrFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ptr-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .ptr-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px color-mix(in srgb, var(--brand) 12%, transparent);
          border-color: color-mix(in srgb, var(--brand) 28%, transparent);
        }
        .ptr-card-inner:hover .ptr-icon {
          transform: scale(1.1);
          color: var(--brand);
        }
        .ptr-icon {
          transition: transform .3s ease, color .3s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .ptr-hidden, .ptr-visible, .ptr-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ptr-card-inner:hover, .ptr-card-inner:hover .ptr-icon { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Trust, security and governance"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`ptr-hidden ${badgeIn ? "ptr-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Trust, Security &amp; Governance
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`ptr-hidden ${headIn ? "ptr-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Ready to scale into serious environments.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`ptr-grid ${gridIn ? "ptr-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5`}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="ptr-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="ptr-card-inner h-full bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm">
                  <span className="ptr-icon inline-flex text-brand mb-4">
                    {f.icon}
                  </span>
                  <h3 className="text-[14.5px] sm:text-[15px] font-bold text-gray-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                    {f.desc}
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