"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// Column configs
const cols = [
  { key: "individuals", label: "INDIVIDUALS", headerBg: "#ECF3FF", headerText: "#6b7280",   colBg: "#ECF3FF", colBorder: false },
  { key: "teams",       label: "TEAMS",        headerBg: "#ECF3FF", headerText: "#6b7280",   colBg: "#ECF3FF", colBorder: false },
  { key: "business",    label: "BUSINESS",     headerBg: "#474787",     headerText: "#fff",       colBg: "#f5f4ff",     colBorder: true  },
  { key: "regulated",   label: "REGULATED",    headerBg: "#ECF3FF", headerText: "#6b7280",   colBg: "#ECF3FF", colBorder: false },
  { key: "zoikotime",   label: "ZOIKOTIME",    headerBg: "#1a1a2e",     headerText: "#fff",       colBg: "#ECF3FF", colBorder: false },
  { key: "enterprise",  label: "ENTERPRISE",   headerBg: "#ECF3FF", headerText: "#6b7280",   colBg: "#ECF3FF", colBorder: false },
];

type CellValue = {
  text: string;
  check?: boolean;
  bold?: boolean;
  italic?: boolean;
  muted?: boolean;
  highlight?: string; // bg color for special cells
  highlightText?: string;
  highlightDot?: string;
};

type Row = {
  capability: string;
  cells: { [key: string]: CellValue };
};

const rows: Row[] = [
  {
    capability: "Best for",
    cells: {
      individuals: { text: "Personal, freelancers, professionals", muted: true },
      teams:       { text: "5–50 person teams", muted: true },
      business:    { text: "50–1,000 person orgs", bold: true },
      regulated:   { text: "Compliance-driven orgs", muted: true },
      zoikotime:   { text: "Orgs using ZoikoTime", muted: true },
      enterprise:  { text: "1,000+ or complex orgs", muted: true },
    },
  },
  {
    capability: "Messaging",
    cells: {
      individuals: { text: "Included", check: true },
      teams:       { text: "Included", check: true },
      business:    { text: "Included", check: true, bold: true },
      regulated:   { text: "Included", check: true },
      zoikotime:   { text: "Included", check: true },
      enterprise:  { text: "Included", check: true },
    },
  },
  {
    capability: "Audio & video calls",
    cells: {
      individuals: { text: "Included", check: true },
      teams:       { text: "Included", check: true },
      business:    { text: "Included", check: true, bold: true },
      regulated:   { text: "Included", check: true },
      zoikotime:   { text: "Included", check: true },
      enterprise:  { text: "Included", check: true },
    },
  },
  {
    capability: "AI summaries",
    cells: {
      individuals: { text: "Limited", muted: true },
      teams:       { text: "Included", check: true },
      business:    { text: "Included", check: true, bold: true },
      regulated:   { text: "Included", check: true },
      zoikotime:   { text: "Included", check: true },
      enterprise:  { text: "Custom", muted: true },
    },
  },
  {
    capability: "Action items",
    cells: {
      individuals: { text: "Basic", muted: true },
      teams:       { text: "Included", check: true },
      business:    { text: "Included", check: true, bold: true },
      regulated:   { text: "Included", check: true },
      zoikotime:   { text: "Included", check: true },
      enterprise:  { text: "Custom", muted: true },
    },
  },
  {
    capability: "Admin controls",
    cells: {
      individuals: { text: "Not required", italic: true, muted: true },
      teams:       { text: "Basic", muted: true },
      business:    { text: "Full", bold: true },
      regulated:   { text: "Full + compliance", check: true, bold: true },
      zoikotime:   { text: "Full + integration", muted: true },
      enterprise:  { text: "Custom", muted: true },
    },
  },
  {
    capability: "Retention controls",
    cells: {
      individuals: { text: "Not required", italic: true, muted: true },
      teams:       { text: "Limited", muted: true },
      business:    { text: "Available", bold: true },
      regulated:   { text: "Advanced", check: true, bold: true },
      zoikotime:   { text: "Advanced + workforce", check: true },
      enterprise:  { text: "Custom", muted: true },
    },
  },
  {
    capability: "Audit & compliance",
    cells: {
      individuals: { text: "Not required", italic: true, muted: true },
      teams:       { text: "Limited", muted: true },
      business:    { text: "Available", bold: true },
      regulated:   { text: "Specialized", check: true, bold: true },
      zoikotime:   { text: "Workforce-truth aligned", check: true },
      enterprise:  { text: "Custom", muted: true },
    },
  },
  {
    capability: "ZoikoTime integration",
    cells: {
      individuals: { text: "Not applicable", italic: true, muted: true },
      teams:       { text: "Optional", muted: true },
      business:    { text: "Available", bold: true },
      regulated:   { text: "Available", muted: true },
      zoikotime:   { text: "Core route", highlight: "#474787", highlightText: "#fff", highlightDot: "#a5b4fc" },
      enterprise:  { text: "Designed-in", check: true, bold: true },
    },
  },
  {
    capability: "Workforce truth",
    cells: {
      individuals: { text: "Not applicable", italic: true, muted: true },
      teams:       { text: "Not standard", italic: true, muted: true },
      business:    { text: "Add-on", muted: true },
      regulated:   { text: "Add-on", muted: true },
      zoikotime:   { text: "Differentiator", highlight: "#363670", highlightText: "#a5b4fc", highlightDot: "#a5b4fc" },
      enterprise:  { text: "Custom", muted: true },
    },
  },
  {
    capability: "Deployment",
    cells: {
      individuals: { text: "Self-serve", muted: true },
      teams:       { text: "Self-serve", muted: true },
      business:    { text: "Self-serve or guided", bold: true },
      regulated:   { text: "Guided", muted: true },
      zoikotime:   { text: "Guided", muted: true },
      enterprise:  { text: "Custom", muted: true },
    },
  },
];

const ctaRow: { [key: string]: { label: string; style: "primary" | "outline" | "ghost" } } = {
  individuals: { label: "Start free",     style: "outline" },
  teams:       { label: "Start team",     style: "outline" },
  business:    { label: "Get a demo",     style: "primary" },
  regulated:   { label: "Talk to sales",  style: "outline" },
  zoikotime:   { label: "Request demo",   style: "primary" },
  enterprise:  { label: "Contact",        style: "outline" },
};

function CheckIcon({ color = "#4f46e5" }: { color?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
      <polyline points="2,6 5,9 10,3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function SolutionsComparisonSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: tableRef, inView: tableIn } = useInView(0.04);

  return (
    <>
      <style>{`
        @keyframes sctFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .sct-hidden  { opacity:0; transform:translateY(24px); }
        .sct-visible { animation: sctFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .sct-table-wrap { opacity:1; }
        .sct-table-wrap.on {  animation: sctFadeUp .7s cubic-bezier(.22,1,.36,1) .08s forwards; }

        /* row hover */
        .sct-row { transition:background .15s; }
        .sct-row:hover { background:#f8faff!important; }

        /* CTA buttons */
        .sct-btn { transition:opacity .2s,transform .2s; font-size:12.5px; }
        .sct-btn:hover { opacity:.85; transform:translateY(-1px); }
        .sct-btn:active { transform:translateY(0); }

        @media (prefers-reduced-motion:reduce) {
          .sct-hidden,.sct-table-wrap { opacity:1!important; transform:none!important; animation:none!important; }
          .sct-visible { animation:none!important; opacity:1!important; }
          .sct-row:hover { background:transparent!important; }
        }
      `}</style>

      <section
        aria-label="One table to find your fit"
        className="w-full py-20 md:py-24"
        style={{ background: "#ECF3FF" }}
      >
        <div className="mx-auto w-full max-w-[1400] px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div ref={headRef} className={`sct-hidden ${headIn ? "sct-visible" : ""} text-center mb-10`}>
            <h2 className="font-bold leading-[1.1] tracking-tight text-gray-900 mb-4" style={{ fontSize: "35px" }}>
              One table to find your fit
            </h2>
            <p className="mx-auto max-w-[640px] text-[15px] leading-[1.8] text-gray-500">
              Capabilities and packaging across the six routes. Final pricing, AI limits and
              jurisdiction-specific access are confirmed on each dedicated solution page and the{" "}
              <a href="#pricing" className="text-indigo-600 underline underline-offset-2">Pricing page</a>.
            </p>
          </div>

          {/* ── Table ── */}
         <div
  ref={tableRef}
  className={`sct-table-wrap ${tableIn ? "on" : ""} rounded-2xl overflow-hidden`}
  style={{
    background: "#fff",
    border: "1px solid #e5e7eb",
    boxShadow: "0 4px 32px rgba(71,71,135,0.08)",
  }}
>
            {/* Table label bar */}
            <div className="px-6 py-3 border-b border-gray-100 bg-white">
              <p className="text-[12px] text-gray-500">
                <span className="font-semibold text-gray-700">Sema solutions comparison.</span>{" "}
                A capability-by-capability view across six audience routes, including communication features, governance controls and the ZoikoTime integration path.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[780px]" style={{ borderCollapse: "collapse" }}>

                {/* Column headers */}
                <thead>
                  <tr>
                    {/* Capability label */}
                    <th className="text-left px-5 py-4 text-[13.5px] font-bold text-gray-900 w-[160px] align-bottom border-b border-gray-100" style={{ background: "#fff" }}>
                      Capability
                    </th>
                    {cols.map((col) => (
                      <th
                        key={col.key}
                        className="px-3 py-4 text-center align-bottom border-b border-gray-100"
                        style={{
                          background: col.headerBg !== "transparent" ? col.headerBg : "#fff",
                          minWidth: 110,
                        }}
                      >
                        <span
                          className="block text-[10.5px] font-bold uppercase tracking-[0.14em]"
                          style={{ color: col.headerText }}
                        >
                          {col.label}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className="sct-row border-b border-gray-100 last:border-b-0"
                      style={{ background: "#fff" }}
                    >
                      {/* Capability name */}
                      <td className="px-5 py-4 text-[12px] font-semibold text-gray-800 align-middle">
                        {row.capability}
                      </td>

                      {cols.map((col) => {
                        const cell = row.cells[col.key];
                        const isBusinessCol = col.key === "business";

                        if (cell.highlight) {
                          return (
                            <td
                              key={col.key}
                              className="px-3 py-4 text-center align-middle"
                              style={{ background: isBusinessCol ? "#f5f4ff" : "#fff" }}
                            >
                              <span
                                className="inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-semibold"
                                style={{ background: cell.highlight, color: cell.highlightText }}
                              >
                                {cell.highlightDot && (
                                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cell.highlightDot }} />
                                )}
                                {cell.text}
                              </span>
                            </td>
                          );
                        }

                        return (
                          <td
                            key={col.key}
                            className="px-3 py-4 text-center align-middle"
                            style={{ background: isBusinessCol ? "#f5f4ff" : "#fff" }}
                          >
                            <span className={`inline-flex items-center justify-center gap-1.5 text-[12px] ${
                              cell.italic ? "italic" : ""
                            } ${cell.bold && isBusinessCol ? "font-bold text-gray-900" : ""} ${
                              cell.muted ? "text-gray-400" : "text-gray-700"
                            }`}>
                              {cell.check && (
                                <CheckIcon color={isBusinessCol ? "#4f46e5" : col.key === "regulated" ? "#4f46e5" : "#6b7280"} />
                              )}
                              {cell.text}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}

                  {/* Get started row */}
                  <tr className="border-t-2 border-gray-200">
                    <td className="px-5 py-5 text-[13.5px] font-semibold text-gray-800 align-middle">
                      Get started
                    </td>
                    {cols.map((col) => {
                      const cta = ctaRow[col.key];
                      const isPrimary = cta.style === "primary";
                      const isZoiko = col.key === "zoikotime";
                      const isBusiness = col.key === "business";

                      return (
                        <td
                          key={col.key}
                          className="px-3 py-5 text-center align-middle"
                          style={{ background: isBusiness ? "#f5f4ff" : "#fff" }}
                        >
                          <a
                            href={`#${col.key}`}
                            className="sct-btn inline-flex items-center justify-center rounded-full px-4 py-2 font-semibold"
                            style={{
                              background: isPrimary
                                ? isZoiko ? "#474787" : "#474787"
                                : "transparent",
                              color: isPrimary ? "#fff" : "#374151",
                              border: isPrimary ? "none" : "1.5px solid #d1d5db",
                              minWidth: 90,
                            }}
                          >
                            {cta.label}
                          </a>
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}