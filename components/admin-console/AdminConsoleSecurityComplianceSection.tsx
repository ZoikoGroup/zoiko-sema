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
    title: "SSO & MFA",
    desc: "Configure single sign-on, enforce multi-factor authentication, and manage identity policies.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    title: "Session management",
    desc: "Review sessions, manage device access, and revoke access when needed.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Audit logs",
    desc: "Track administrative actions, access changes, policy updates, and integration activity.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
  },
  {
    title: "Retention policies",
    desc: "Define how long messages, files, meeting records, AI summaries, and audit logs are retained.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Legal hold",
    desc: "Preserve selected communication records for legal, compliance, or investigation workflows.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Compliance exports",
    desc: "Export required records for security review, internal audit, and compliance reporting.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Data controls",
    desc: "Set rules for files, external sharing, guest access, AI-generated content, and workspace exceptions.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0A1.65 1.65 0 0 0 10 3.09V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Security alerts",
    desc: "Highlight policy gaps, suspicious access patterns, inactive admins, and unresolved exceptions.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M12 8V4" />
        <circle cx="12" cy="3" r="1" />
        <path d="M8 13h.01M16 13h.01" />
      </svg>
    ),
  },
];

export default function AdminConsoleSecurityComplianceSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.06);

  return (
    <>
      <style>{`
        @keyframes acscFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acsc-hidden  { opacity: 0; transform: translateY(28px); }
        .acsc-visible { animation: acscFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .acsc-card { opacity: 0; transform: translateY(24px); }
        .acsc-grid.acsc-visible .acsc-card {
          animation: acscFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .acsc-card-inner {
          transition: transform .3s ease, border-color .3s ease, background-color .3s ease;
        }
        .acsc-card-inner:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.14);
          background-color: rgba(255,255,255,0.05);
        }

        @media (prefers-reduced-motion: reduce) {
          .acsc-hidden, .acsc-visible, .acsc-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .acsc-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Security and compliance"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{
          background: "linear-gradient(180deg, #1B1642 0%, #0E0A24 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`acsc-hidden ${badgeIn ? "acsc-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/70">
                Security &amp; Compliance
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`acsc-hidden ${headIn ? "acsc-visible" : ""} text-center mb-4`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-white max-w-[600px] mx-auto">
              Controls built into communication administration.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`acsc-hidden ${headIn ? "acsc-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-white/50 max-w-[600px] mx-auto mb-10 sm:mb-14`}
            style={{ animationDelay: "0.14s" }}
          >
            Manage access, protect data, review activity, enforce policies, and support compliance workflows across communication spaces.
          </p>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`acsc-grid ${gridIn ? "acsc-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="acsc-card"
                style={{ animationDelay: `${0.04 + i * 0.06}s` }}
              >
                <div className="acsc-card-inner h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-7">
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