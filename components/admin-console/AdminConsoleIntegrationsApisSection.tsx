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
    title: "Identity",
    desc: "SAML, OIDC, SCIM, Microsoft Entra ID, Google Identity, Okta.",
    status: "Enterprise only",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    title: "Calendar",
    desc: "Google Calendar, Microsoft Outlook, Microsoft 365 Calendar.",
    status: "Connected",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Storage",
    desc: "Google Drive, OneDrive, SharePoint, Box, Dropbox.",
    status: "Available",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Workflow & Productivity",
    desc: "CRM systems, project tools, helpdesk platforms, task systems.",
    status: "Requires setup",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Developer Tools",
    desc: "APIs, webhooks, event logs, integration keys.",
    status: "Enterprise only",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0A1.65 1.65 0 0 0 10 3.09V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Zoiko Ecosystem",
    desc: "ZoikoTime, Zoiko One, ZoikoID, ZoikoVertex, Zoiko Cloud.",
    status: "Connected",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6M15 2v6" />
        <path d="M6 8h12l-1 5a5 5 0 0 1-10 0z" />
        <path d="M12 18v4" />
      </svg>
    ),
  },
];

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Connected: "bg-emerald-50 text-emerald-600",
    "Enterprise only": "bg-amber-50 text-amber-600",
    Available: "bg-blue-50 text-blue-600",
    "Requires setup": "bg-gray-100 text-gray-600",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full text-[11px] font-semibold px-3 py-1 whitespace-nowrap ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

export default function AdminConsoleIntegrationsApisSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.06);

  return (
    <>
      <style>{`
        @keyframes aciaFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acia-hidden  { opacity: 0; transform: translateY(28px); }
        .acia-visible { animation: aciaFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .acia-card { opacity: 0; transform: translateY(24px); }
        .acia-grid.acia-visible .acia-card {
          animation: aciaFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .acia-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .acia-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(15,31,78,0.08);
          border-color: rgba(59,71,222,0.2);
        }

        @media (prefers-reduced-motion: reduce) {
          .acia-hidden, .acia-visible, .acia-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .acia-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Integrations and APIs"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`acia-hidden ${badgeIn ? "acia-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Integrations &amp; APIs
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`acia-hidden ${headIn ? "acia-visible" : ""} text-center mb-4`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 max-w-[620px] mx-auto">
              Connect Zoiko Sema to the systems your organization already uses.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`acia-hidden ${headIn ? "acia-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-gray-500 max-w-[600px] mx-auto mb-10 sm:mb-14`}
            style={{ animationDelay: "0.14s" }}
          >
            Administrators can connect identity providers, calendars, file storage, workflow tools, APIs, webhooks, and Zoiko ecosystem services from one controlled integration layer.
          </p>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`acia-grid ${gridIn ? "acia-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="acia-card"
                style={{ animationDelay: `${0.05 + i * 0.07}s` }}
              >
                <div className="acia-card-inner h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-gray-400">{c.icon}</span>
                    <StatusPill status={c.status} />
                  </div>
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