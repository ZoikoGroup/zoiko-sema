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
    title: "Authentication",
    desc: "SSO and MFA support on business and enterprise plans, plus authenticated join options.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Waiting room",
    desc: "Lobby for guests and external participants with host admit controls.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-2a5 5 0 0 1 5-5h1" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M17 21v-1a5 5 0 0 0-3.5-4.77" />
      </svg>
    ),
  },
  {
    title: "Meeting lock",
    desc: "Hosts can lock meetings after participants join.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Recording control",
    desc: "Role-based recording, visible status, retention rules, and download restrictions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "External access",
    desc: "Domain restrictions, guest labels, invite expiry, and external sharing rules.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Auditability",
    desc: "Administrative changes and sensitive events are logged for review.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function VideoMeetingsSecuritySection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes vsecFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vsec-hidden  { opacity: 0; transform: translateY(28px); }
        .vsec-visible { animation: vsecFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .vsec-card { opacity: 0; transform: translateY(24px); }
        .vsec-grid.vsec-visible .vsec-card {
          animation: vsecFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .vsec-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .vsec-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px color-mix(in srgb, var(--brand) 14%, transparent);
          border-color: color-mix(in srgb, var(--brand) 28%, transparent);
        }
        .vsec-card-inner:hover .vsec-icon {
          transform: scale(1.1);
          color: var(--brand);
        }
        .vsec-icon {
          transition: transform .3s ease, color .3s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .vsec-hidden, .vsec-visible, .vsec-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .vsec-card-inner:hover, .vsec-card-inner:hover .vsec-icon { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Security and trust"
        className="w-full bg-[#F4F7FF] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`vsec-hidden ${badgeIn ? "vsec-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Security &amp; Trust
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`vsec-hidden ${headIn ? "vsec-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900 max-w-[640px] mx-auto">
              Secure meetings without slowing teams down.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`vsec-grid ${gridIn ? "vsec-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="vsec-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="vsec-card-inner h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm">
                  <span className="vsec-icon inline-flex text-brand mb-4">
                    {f.icon}
                  </span>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 mb-2">
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