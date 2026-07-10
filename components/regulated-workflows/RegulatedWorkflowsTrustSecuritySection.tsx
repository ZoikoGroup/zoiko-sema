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
    desc: "Centralize regulated spaces, roles, policies, approvals, legal hold, and exports.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0A1.65 1.65 0 0 0 10 3.09V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Security readiness",
    desc: "SSO, MFA, session governance, role-based access, and secure external collaboration.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21l7.78-7.55 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Compliance support",
    desc: "Retention, legal hold, evidence packs, audit logs, and review-ready export workflows.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
      </svg>
    ),
  },
  {
    title: "Privacy-respecting governance",
    desc: "Govern sensitive collaboration without employee surveillance or productivity policing.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Enterprise support",
    desc: "Route complex compliance, legal, healthcare, and regional requirements to sales-assisted review.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function RegulatedWorkflowsTrustSecuritySection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.06);

  return (
    <>
      <style>{`
        @keyframes rtsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rts-hidden  { opacity: 0; transform: translateY(28px); }
        .rts-visible { animation: rtsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .rts-card { opacity: 0; transform: translateY(24px); }
        .rts-grid.rts-grid-visible .rts-card {
          animation: rtsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .rts-card-inner {
          transition: transform .3s ease, border-color .3s ease, background-color .3s ease;
        }
        .rts-card-inner:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.14);
          background-color: rgba(255,255,255,0.05);
        }

        @media (prefers-reduced-motion: reduce) {
          .rts-hidden, .rts-visible, .rts-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .rts-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Trust and security"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{ background: "#12163A" }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`rts-hidden ${badgeIn ? "rts-visible" : ""} text-center mb-4`}
          >
            <span
              className="text-[11px] font-semibold tracking-[0.1em] uppercase"
              style={{ color: "#8B9CFF" }}
            >
              Trust &amp; Security
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`rts-hidden ${headIn ? "rts-visible" : ""} text-center mb-4`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,3.8vw,32px)] font-bold leading-[1.25] tracking-tight text-white max-w-[560px] mx-auto">
              Built to pass procurement, security, and compliance review.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`rts-hidden ${headIn ? "rts-visible" : ""} text-center text-[13.5px] sm:text-[14px] leading-[1.7] text-white/50 max-w-[560px] mx-auto mb-10 sm:mb-14`}
            style={{ animationDelay: "0.14s" }}
          >
            Zoiko Sema supports compliance workflows and audit readiness through controls and evidence — it does not imply automatic compliance.
          </p>

          {/* Grid: first row of 3 spans full width, second row of 2 is centered */}
          <div
            ref={gridRef}
            className={`rts-grid ${gridIn ? "rts-grid-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.slice(0, 3).map((c, i) => (
              <div
                key={c.title}
                className="rts-card"
                style={{ animationDelay: `${0.04 + i * 0.07}s` }}
              >
                <div className="rts-card-inner h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-7">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.07] text-white/80 mb-4">
                    {c.icon}
                  </span>
                  <h3 className="text-[14.5px] sm:text-[15px] font-bold text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] leading-[1.65] text-white/45">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - centered, max width matching two cards */}
          <div
            className={`rts-grid ${gridIn ? "rts-grid-visible" : ""} grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-[720px] mx-auto mt-4 sm:mt-5`}
          >
            {cards.slice(3, 5).map((c, i) => (
              <div
                key={c.title}
                className="rts-card"
                style={{ animationDelay: `${0.25 + i * 0.07}s` }}
              >
                <div className="rts-card-inner h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-7">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.07] text-white/80 mb-4">
                    {c.icon}
                  </span>
                  <h3 className="text-[14.5px] sm:text-[15px] font-bold text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] leading-[1.65] text-white/45">
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