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
    title: "User invitations",
    desc: "Invite users individually, by domain, by CSV, or through provisioning.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
  {
    title: "Groups",
    desc: "Create groups for departments, functions, regions, projects, or permission sets.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Roles",
    desc: "Assign workspace, security, compliance, billing, integration, AI governance, and read-only roles.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Guest management",
    desc: "Approve guests, restrict access, set expiry dates, and review external collaboration.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function AdminConsoleUsersAccessSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes acuaFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acua-hidden  { opacity: 0; transform: translateY(28px); }
        .acua-visible { animation: acuaFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .acua-card { opacity: 0; transform: translateY(24px); }
        .acua-grid.acua-visible .acua-card {
          animation: acuaFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .acua-card-inner {
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .acua-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(15,31,78,0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .acua-hidden, .acua-visible, .acua-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .acua-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Users, groups and access"
        className="w-full bg-[#F4F7FF] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`acua-hidden ${badgeIn ? "acua-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Users, Groups &amp; Access
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`acua-hidden ${headIn ? "acua-visible" : ""} text-center mb-4`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 max-w-[680px] mx-auto">
              Manage users, groups, roles, guests, and access with precision.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`acua-hidden ${headIn ? "acua-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-gray-500 max-w-[620px] mx-auto mb-10 sm:mb-14`}
            style={{ animationDelay: "0.14s" }}
          >
            Zoiko Sema helps administrators control who can access the platform, what they can do, where they can collaborate, and how external users are governed.
          </p>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`acua-grid ${gridIn ? "acua-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="acua-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="acua-card-inner h-full bg-white rounded-2xl p-6 sm:p-7 shadow-sm">
                  <span className="inline-flex text-brand mb-4">{c.icon}</span>
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