"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across every section on this page. */
function useInView(threshold = 0.1) {
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

const STATUS_STYLES: Record<string, { color: string; bg: string }> = {
  Connected: { color: "#16A34A", bg: "#DCFCE7" },
  "Requires setup": { color: "#D97706", bg: "#FEF3C7" },
  "Enterprise setup": { color: "#D97706", bg: "#FEF3C7" },
  Available: { color: BRAND, bg: "#E6E9FB" },
};

const integrations = [
  { initials: "GC", name: "Google Calendar", description: "Meeting prep & focus blocks", status: "Connected" },
  { initials: "SF", name: "Salesforce", description: "Client notes & follow-up", status: "Requires setup" },
  { initials: "GD", name: "Google Drive", description: "Files in notes & prep", status: "Available" },
  { initials: "OD", name: "OneDrive", description: "Storage & docs", status: "Available" },
  { initials: "S", name: "Slack", description: "Priority inbox signals", status: "Available" },
  { initials: "M365", name: "Microsoft 365", description: "Calendar & mail", status: "Connected" },
  { initials: "J", name: "Jira / Asana", description: "Action items as tracked work", status: "Available" },
  { initials: "Ok", name: "Okta", description: "Identity & security", status: "Enterprise setup" },
];

export default function IndividualProductivityIntegrationsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes ipiFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ipi-hidden  { opacity: 0; transform: translateY(32px); }
        .ipi-visible { animation: ipiFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ipi-card { opacity: 0; transform: translateY(22px); }
        .ipi-card.ipi-card-in {
          animation: ipiFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ipi-card {
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
        }
        .ipi-card:hover {
          transform: translateY(-4px);
          background: #ffffff;
          box-shadow: 0 16px 32px -20px rgba(15,23,42,0.2);
        }

        .ipi-badge { transition: transform .25s ease; }
        .ipi-card:hover .ipi-badge { transform: scale(1.08); }

        @media (prefers-reduced-motion: reduce) {
          .ipi-hidden, .ipi-card { opacity: 1 !important; transform: none !important; }
          .ipi-visible, .ipi-card-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Integrations"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`ipi-hidden ${headIn ? "ipi-visible" : ""} text-center mb-10`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: BRAND }}
            >
              Integrations
            </p>
            <h2 className="text-[clamp(24px,3.2vw,32px)] font-bold tracking-tight text-gray-900 mb-4">
              Works with the tools that shape your day.
            </h2>
            <p className="mx-auto max-w-[620px] text-[14.5px] leading-relaxed text-gray-500">
              Connect calendar, email, storage, documents, tasks, CRM,
              identity, and workflow tools so daily work stays connected.
            </p>
          </div>

          {/* Panel */}
          <div className="rounded-3xl p-6 md:p-8">
            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {integrations.map((tool, i) => {
                const status = STATUS_STYLES[tool.status];
                return (
                  <div
                    key={tool.name}
                    className={`ipi-card ${gridIn ? "ipi-card-in" : ""} rounded-2xl p-5`}
                    style={{
                      background: "#F3F2FD",
                      border: "1px solid #E7E8F0",
                      animationDelay: `${(i % 4) * 0.08 + Math.floor(i / 4) * 0.05}s`,
                    }}
                  >
                    <div
                      className="ipi-badge w-9 h-9 rounded-lg flex items-center justify-center mb-4 bg-[#DFE3F2]"
                    >
                      <span className="text-[11px] font-bold" style={{ color: "#464686" }}>
                        {tool.initials}
                      </span>
                    </div>

                    <h3 className="text-[14.5px] font-bold text-gray-900 mb-1.5">
                      {tool.name}
                    </h3>
                    <p className="text-[12.5px] leading-relaxed text-gray-500 mb-4">
                      {tool.description}
                    </p>

                    <div
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
                      style={{ background: status.bg }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: status.color }}
                      />
                      <span
                        className="text-[10.5px] font-medium"
                        style={{ color: status.color }}
                      >
                        {tool.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}