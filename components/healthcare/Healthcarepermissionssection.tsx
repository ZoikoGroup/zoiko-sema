"use client";

import React, { useEffect, useRef, useState } from "react";

// Reusable scroll-in-view hook. Generic over the element type so the ref can be
// attached to any element (div, ul, section, ...) without a type mismatch.
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
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

const ROLE_COLUMNS = [
  "Owner",
  "Org Admin",
  "Security",
  "Privacy",
  "Care Ops",
  "Records",
  "AI Gov",
  "Auditor",
];

type Row = { module: string; cells: string[] };

const ROWS: Row[] = [
  { module: "Overview", cells: ["Full", "Full", "View", "View", "View", "View", "View", "View"] },
  { module: "Workspaces", cells: ["Full", "Full", "View", "View", "Review", "View", "View", "View"] },
  { module: "Handoffs / Reviews", cells: ["Full", "Manage", "View", "Review", "Full", "View", "Limited", "View"] },
  { module: "Retention / Holds", cells: ["Full", "View", "View", "Full", "No", "Full", "Limited", "View"] },
  { module: "AI Governance", cells: ["Full", "View", "No", "View", "Review", "Limited", "Full", "View"] },
  { module: "Exports", cells: ["Full", "Limited", "Sec logs", "Approve", "No", "Create", "AI only", "Permitted"] },
];

// Colour-coded permission tokens. Full-access values are plain green/blue text;
// elevated / attention values get a subtle pill.
const GREEN = "text-[#16A34A] dark:text-[#4ADE80] font-medium";
const BLUE = "text-[#4F5BD5] dark:text-[#8C95F2]";
const BLUE_PILL = "text-[#4F5BD5] dark:text-[#8C95F2] bg-[#4F5BD5]/10 dark:bg-[#4F5BD5]/20 rounded-md px-2 py-0.5";
const PURPLE_PILL = "text-[#7C3AED] dark:text-[#A78BFA] bg-[#7C3AED]/10 dark:bg-[#7C3AED]/20 rounded-md px-2 py-0.5";
const AMBER_PILL = "text-[#D97706] dark:text-[#FBBF24] bg-[#D97706]/10 dark:bg-[#D97706]/20 rounded-md px-2 py-0.5";
const RED_PILL = "text-[#EF4444] dark:text-[#F87171] bg-[#EF4444]/10 dark:bg-[#EF4444]/20 rounded-md px-2 py-0.5";

const CELL_STYLE: Record<string, string> = {
  Full: GREEN,
  Create: GREEN,
  Permitted: GREEN,
  View: BLUE,
  Manage: BLUE_PILL,
  Review: BLUE_PILL,
  "Sec logs": BLUE_PILL,
  "AI only": BLUE_PILL,
  Approve: PURPLE_PILL,
  Limited: AMBER_PILL,
  No: RED_PILL,
};

export function HealthcarePermissionsSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView<HTMLParagraphElement>(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: subRef, inView: subIn } = useInView<HTMLParagraphElement>(0.3);
  const { ref: tableRef, inView: tableIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes hpFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hpRise {
          from { opacity: 0; transform: translateY(36px) scale(.99); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .hp-hidden  { opacity: 0; transform: translateY(28px); }
        .hp-visible { animation: hpFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .hp-hidden-r  { opacity: 0; transform: translateY(36px) scale(.99); }
        .hp-visible-r { animation: hpRise .8s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .hp-hidden, .hp-visible, .hp-hidden-r, .hp-visible-r { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Roles and permissions — separation of duties"
        className="w-full bg-[#EEF0FA] py-20 dark:bg-[#0D0B24] sm:py-24"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`hp-hidden ${eyebrowIn ? "hp-visible" : ""} mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              Roles &amp; Permissions
            </p>
            <h2
              ref={headRef}
              className={`hp-hidden ${headIn ? "hp-visible" : ""} mb-4 text-[clamp(26px,4vw,38px)] font-bold tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Separation of duties, built in.
            </h2>
            <p
              ref={subRef}
              className={`hp-hidden ${subIn ? "hp-visible" : ""} mx-auto max-w-lg text-[15px] leading-[1.7] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.16s" }}
            >
              Named roles with explicit permission sets across every module. No
              broad 'all healthcare staff' access.
            </p>
          </div>

          {/* Permissions table */}
          <div
            ref={tableRef}
            className={`hp-hidden-r ${tableIn ? "hp-visible-r" : ""} mt-12 overflow-hidden rounded-2xl border border-gray-100 bg-white dark:border-white/10 dark:bg-[#151233]`}
          >
            {/* Horizontal scroll on small screens — a 9-column matrix can't fit a phone */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[780px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-white/10">
                    <th className="px-4 py-4 text-[11px] font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Module
                    </th>
                    {ROLE_COLUMNS.map((col) => (
                      <th
                        key={col}
                        className="px-4 py-4 text-[12px] font-semibold text-gray-500 dark:text-gray-400"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr
                      key={row.module}
                      className="border-b border-gray-50 transition-colors last:border-0 hover:bg-gray-50/60 dark:border-white/[0.06] dark:hover:bg-white/[0.03]"
                    >
                      <td className="whitespace-nowrap px-4 py-3.5 text-[13px] font-medium text-gray-800 dark:text-gray-100">
                        {row.module}
                      </td>
                      {row.cells.map((cell, ci) => (
                        <td key={ci} className="px-4 py-3.5 text-[13px]">
                          <span
                            className={`inline-block ${CELL_STYLE[cell] ?? "text-gray-500 dark:text-gray-400"}`}
                          >
                            {cell}
                          </span>
                        </td>
                      ))}
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

export default HealthcarePermissionsSection;