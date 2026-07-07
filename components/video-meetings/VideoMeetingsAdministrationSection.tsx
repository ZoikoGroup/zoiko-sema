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

type StatusType = "active" | "review" | "enterprise";

const policies: {
  policy: string;
  scope: string;
  status: string;
  statusType: StatusType;
  owner: string;
}[] = [
  {
    policy: "External participant lobby",
    scope: "Org-wide",
    status: "Active",
    statusType: "active",
    owner: "Priya M.",
  },
  {
    policy: "Recording retention — 90 days",
    scope: "Client Services",
    status: "Active",
    statusType: "active",
    owner: "Daniel K.",
  },
  {
    policy: "AI summary — guest exclusion",
    scope: "Legal Space",
    status: "Needs review",
    statusType: "review",
    owner: "Ana R.",
  },
  {
    policy: "Transcript export restriction",
    scope: "Org-wide",
    status: "Enterprise only",
    statusType: "enterprise",
    owner: "—",
  },
];

const statusStyles: Record<StatusType, string> = {
  active: "bg-emerald-50 text-emerald-700",
  review: "bg-orange-50 text-orange-700",
  enterprise: "bg-gray-50 text-gray-600 border border-gray-200",
};

export default function VideoMeetingsAdministrationSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: tableRef, inView: tableIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes vadFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vad-hidden  { opacity: 0; transform: translateY(32px); }
        .vad-visible { animation: vadFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .vad-row { opacity: 0; transform: translateY(14px); }
        .vad-frame.vad-visible .vad-row {
          animation: vadFadeUp .45s cubic-bezier(.22,1,.36,1) forwards;
        }

        .vad-frame { transition: box-shadow .35s ease; }
        .vad-frame:hover { box-shadow: 0 30px 60px rgba(15,15,40,0.12); }

        .vad-row-hover {
          transition: background-color .2s ease;
        }
        .vad-row-hover:hover {
          background-color: color-mix(in srgb, var(--brand) 4%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .vad-hidden, .vad-visible, .vad-row { opacity: 1 !important; transform: none !important; animation: none !important; }
          .vad-frame:hover, .vad-row-hover:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Meeting administration"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`vad-hidden ${badgeIn ? "vad-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Meeting Administration
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`vad-hidden ${headIn ? "vad-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900 max-w-[640px] mx-auto">
              Scale meetings responsibly across the organization.
            </h2>
          </div>

          {/* Table frame */}
          <div
            ref={tableRef}
            className={`vad-frame vad-hidden ${tableIn ? "vad-visible" : ""} rounded-2xl border border-gray-100 shadow-[0_20px_50px_rgba(15,15,40,0.08)] overflow-hidden`}
            style={{ animationDelay: "0.15s" }}
          >
            {/* Top bar */}
            <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-gray-100">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gray-200" />
                <span className="w-2 h-2 rounded-full bg-gray-200" />
                <span className="w-2 h-2 rounded-full bg-gray-200" />
              </div>
              <span className="text-[12.5px] text-gray-400 ml-1">
                Meeting Policy Center
              </span>
            </div>

            {/* Scrollable table wrapper — handles small screens */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
                      Policy
                    </th>
                    <th className="text-left px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
                      Scope
                    </th>
                    <th className="text-left px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
                      Status
                    </th>
                    <th className="text-left px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
                      Owner
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {policies.map((p, i) => (
                    <tr
                      key={i}
                      className={`vad-row vad-row-hover ${
                        i !== policies.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                      style={{ animationDelay: `${0.25 + i * 0.08}s` }}
                    >
                      <td className="px-6 py-4 text-[13.5px] text-gray-800">
                        {p.policy}
                      </td>
                      <td className="px-6 py-4 text-[13.5px] text-gray-500">
                        {p.scope}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block rounded-full px-2.5 py-1 text-[11.5px] font-medium ${statusStyles[p.statusType]}`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[13.5px] text-gray-500">
                        {p.owner}
                      </td>
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