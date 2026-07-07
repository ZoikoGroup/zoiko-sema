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

const rows = [
  {
    role: "Workspace Owner",
    purpose: "Full control of workspace and commercial settings",
    access: "All workspace settings",
  },
  {
    role: "Organization Admin",
    purpose: "Day-to-day organization administration",
    access: "Users, groups, workspaces, settings",
  },
  {
    role: "Security Admin",
    purpose: "Identity, MFA, SSO, session, and device controls",
    access: "Security settings and logs",
  },
  {
    role: "Compliance Admin",
    purpose: "Retention, legal hold, exports, and audit evidence",
    access: "Compliance and audit areas",
  },
  {
    role: "Billing Admin",
    purpose: "Seats, plan, invoices, and billing contacts",
    access: "Billing and subscription",
  },
  {
    role: "Integration Admin",
    purpose: "Apps, APIs, webhooks, and Zoiko ecosystem connections",
    access: "Integration settings",
  },
  {
    role: "AI Governance Admin",
    purpose: "AI summaries, action capture, and automation rules",
    access: "AI policy controls",
  },
  {
    role: "Auditor / Viewer",
    purpose: "Read-only oversight for reporting and governance review",
    access: "Reports and audit logs",
  },
];

export default function AdminConsoleRoleBasedSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: tableRef, inView: tableIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes acrbFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acrb-hidden  { opacity: 0; transform: translateY(28px); }
        .acrb-visible { animation: acrbFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .acrb-hidden, .acrb-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Role-based administration"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`acrb-hidden ${badgeIn ? "acrb-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Role-Based Administration
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`acrb-hidden ${headIn ? "acrb-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Separation of duties, built in.
            </h2>
          </div>

          {/* Table */}
          <div
            ref={tableRef}
            className={`acrb-hidden ${tableIn ? "acrb-visible" : ""} rounded-2xl border border-gray-100 overflow-hidden`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-[11px] font-semibold tracking-[0.06em] uppercase text-gray-400 px-6 py-4 w-[22%]">
                      Role
                    </th>
                    <th className="text-left text-[11px] font-semibold tracking-[0.06em] uppercase text-gray-400 px-6 py-4">
                      Purpose
                    </th>
                    <th className="text-left text-[11px] font-semibold tracking-[0.06em] uppercase text-gray-400 px-6 py-4 w-[22%]">
                      Typical Access
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr
                      key={i}
                      className={i !== rows.length - 1 ? "border-b border-gray-100" : ""}
                    >
                      <td className="px-6 py-4 text-[13.5px] font-semibold text-gray-900">
                        {r.role}
                      </td>
                      <td className="px-6 py-4 text-[13.5px] text-gray-500">{r.purpose}</td>
                      <td className="px-6 py-4 text-[13.5px] text-gray-500">{r.access}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}