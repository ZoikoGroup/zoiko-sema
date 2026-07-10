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

const BRAND = "#3457E8";

const cards = [
  {
    title: "Identity",
    desc: "SAML, OIDC, SCIM, Microsoft Entra ID, Google Identity, Okta.",
    status: "Connected",
    statusBg: "#D1FAE5",
    statusColor: "#059669",
  },
  {
    title: "Records & storage",
    desc: "SharePoint, OneDrive, Google Drive, Box, Dropbox, secure archive.",
    status: "Available",
    statusBg: "rgba(52,87,232,0.1)",
    statusColor: BRAND,
  },
  {
    title: "Compliance & legal",
    desc: "eDiscovery, legal hold export, records management, case management.",
    status: "Enterprise only",
    statusBg: "#FEF3C7",
    statusColor: "#D97706",
  },
  {
    title: "Security",
    desc: "DLP, SIEM, audit export, device and session signals, risk systems.",
    status: "Enterprise only",
    statusBg: "#FEF3C7",
    statusColor: "#D97706",
  },
  {
    title: "Workflow",
    desc: "CRM, ticketing, project management, approvals, webhooks, APIs.",
    status: "Available",
    statusBg: "rgba(52,87,232,0.1)",
    statusColor: BRAND,
  },
  {
    title: "Zoiko ecosystem",
    desc: "ZoikoTime, ZoikoID, Zoiko Cloud, Zoiko One.",
    status: "Connected",
    statusBg: "#D1FAE5",
    statusColor: "#059669",
  },
];

export default function RegulatedWorkflowsIntegrationsSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.06);

  return (
    <>
      <style>{`
        @keyframes riFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ri-hidden  { opacity: 0; transform: translateY(28px); }
        .ri-visible { animation: riFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ri-card { opacity: 0; transform: translateY(24px); }
        .ri-grid.ri-grid-visible .ri-card {
          animation: riFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ri-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .ri-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(52,87,232,0.1);
          border-color: rgba(52,87,232,0.2);
        }

        @media (prefers-reduced-motion: reduce) {
          .ri-hidden, .ri-visible, .ri-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ri-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Integrations"
        className="w-full bg-[#F3F1FA] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`ri-hidden ${badgeIn ? "ri-visible" : ""} text-center mb-4`}
          >
            <span
              className="text-[11px] font-semibold tracking-[0.1em] uppercase"
              style={{ color: BRAND }}
            >
              Integrations
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`ri-hidden ${headIn ? "ri-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,3.8vw,32px)] font-bold leading-[1.25] tracking-tight text-gray-900 max-w-[620px] mx-auto">
              Fit into the identity, records, and security systems you already run.
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`ri-grid ${gridIn ? "ri-grid-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={c.title}
                className="ri-card"
                style={{ animationDelay: `${0.04 + i * 0.06}s` }}
              >
                <div className="ri-card-inner h-full rounded-2xl bg-white p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900">
                      {c.title}
                    </h3>
                    <span
                      className="shrink-0 rounded-full text-[10.5px] font-semibold px-2.5 py-1"
                      style={{ background: c.statusBg, color: c.statusColor }}
                    >
                      {c.status}
                    </span>
                  </div>
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