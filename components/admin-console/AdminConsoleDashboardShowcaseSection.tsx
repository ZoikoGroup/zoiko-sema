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

const stats = [
  { label: "Guests", value: "37", color: "text-gray-900" },
  { label: "Pending invites", value: "14", color: "text-gray-900" },
  { label: "Policy alerts", value: "3", color: "text-amber-500" },
  { label: "Healthy workspaces", value: "39 / 42", color: "text-emerald-600" },
];

const rows = [
  {
    admin: "Priya M.",
    action: "Updated MFA policy",
    object: "Growth Workspace",
    time: "2h ago",
    status: "Logged",
  },
  {
    admin: "Daniel K.",
    action: "Invited 12 users",
    object: "Client Services",
    time: "Yesterday",
    status: "Logged",
  },
  {
    admin: "System",
    action: "Connected Google Calendar",
    object: "Org-wide",
    time: "2 days ago",
    status: "Logged",
  },
  {
    admin: "Ana R.",
    action: "Retention policy missing",
    object: "Legal Space",
    time: "3 days ago",
    status: "Needs review",
  },
];

function StatusPill({ status }: { status: string }) {
  const isReview = status === "Needs review";
  return (
    <span
      className={
        isReview
          ? "inline-flex items-center rounded-full bg-amber-50 text-amber-600 text-[11.5px] font-semibold px-3 py-1"
          : "inline-flex items-center rounded-full bg-emerald-50 text-emerald-600 text-[11.5px] font-semibold px-3 py-1"
      }
    >
      {status}
    </span>
  );
}

export default function AdminConsoleDashboardShowcaseSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: cardRef, inView: cardIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes acdsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acds-hidden  { opacity: 0; transform: translateY(28px); }
        .acds-visible { animation: acdsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .acds-hidden, .acds-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Admin overview dashboard showcase"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`acds-hidden ${badgeIn ? "acds-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Product Showcase
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`acds-hidden ${headIn ? "acds-visible" : ""} text-center mb-4`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              The Admin Overview dashboard.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`acds-hidden ${headIn ? "acds-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-gray-500 max-w-[560px] mx-auto mb-10 sm:mb-14`}
            style={{ animationDelay: "0.14s" }}
          >
            Centralized control, security visibility, AI governance, and ZoikoTime workforce-context integration in one screen.
          </p>

          {/* Dashboard card */}
          <div
            ref={cardRef}
            className={`acds-hidden ${cardIn ? "acds-visible" : ""} rounded-2xl border border-gray-100 bg-white shadow-[0_20px_50px_rgba(15,31,78,0.08)] overflow-hidden`}
            style={{ animationDelay: "0.1s" }}
          >
            {/* Browser bar */}
            <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              </div>
              <span className="text-[13px] text-gray-500">
                Admin Console &mdash; Workspace Health
              </span>
            </div>

            <div className="p-5 sm:p-7">
              {/* Stat cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-6">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-100 px-4 py-4 sm:px-5 sm:py-5"
                  >
                    <p className="text-[12px] text-gray-400 mb-1.5">{s.label}</p>
                    <p className={`text-[20px] sm:text-[22px] font-bold ${s.color}`}>
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Table */}
              <div className="rounded-xl border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b border-gray-100">
                        {["Admin", "Action", "Object", "Time", "Status"].map((h) => (
                          <th
                            key={h}
                            className="text-left text-[11px] font-semibold tracking-[0.06em] uppercase text-gray-400 px-5 py-3"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((r, i) => (
                        <tr
                          key={i}
                          className={i !== rows.length - 1 ? "border-b border-gray-100" : ""}
                        >
                          <td className="px-5 py-3.5 text-[13.5px] text-gray-900">{r.admin}</td>
                          <td className="px-5 py-3.5 text-[13.5px] text-gray-700">{r.action}</td>
                          <td className="px-5 py-3.5 text-[13.5px] text-gray-500">{r.object}</td>
                          <td className="px-5 py-3.5 text-[13.5px] text-gray-400">{r.time}</td>
                          <td className="px-5 py-3.5">
                            <StatusPill status={r.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}