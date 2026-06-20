"use client";

import { Fragment, useEffect, useState } from "react";

/**
 * StartRouteComparisonSection
 * Two stacked blocks:
 * 1. "Start free or get a demo?" — two route cards (light "Free" card, dark "Demo" card)
 * 2. "What makes you upgrade?" — plan comparison table with the Starter column
 *    highlighted by a background band that only has a top + bottom border
 *    (no side borders), sitting behind a dark indigo header row.
 */

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth={1.8} />
      <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Route cards data ---------- */

const FREE_POINTS = [
  "Want to try Sema yourself, right now",
  "Have a team of 1–50 users",
  "Want to evaluate before buying",
  "Don't need SSO, SCIM, or compliance controls yet",
  "Need fast workspace activation in 90 seconds",
];

const DEMO_POINTS = [
  "Have 50+ users to onboard",
  "Need SSO, SAML, SCIM, or security review",
  "Operate in a regulated sector (health, legal, finance)",
  "Need compliance, audit, or procurement support",
  "Want ZoikoTime workforce context and integration",
];

/* ---------- Comparison table data ---------- */

type CellValue = string | boolean | null; // true = check, null = dash

interface Row {
  feature: string;
  free: CellValue;
  starter: CellValue;
  business: CellValue;
  boldBusiness?: boolean;
  boldStarter?: boolean;
}

const ROWS: Row[] = [
  { feature: "Messaging & channels", free: true, starter: true, business: true },
  { feature: "HD audio & video calls", free: "1:1 unlimited", starter: "Group", business: "Advanced", boldBusiness: true },
  { feature: "AI meeting summaries", free: "10/month", starter: "Unlimited", business: "Unlimited", boldStarter: true },
  { feature: "Message history", free: "30 days", starter: "Extended", business: "Custom" },
  { feature: "Guest access", free: null, starter: true, business: true },
  { feature: "Admin console", free: null, starter: true, business: "Advanced", boldBusiness: true },
  { feature: "SSO / SAML / SCIM", free: null, starter: null, business: true },
  { feature: "Audit logs & export", free: null, starter: null, business: true },
  { feature: "Compliance controls", free: null, starter: null, business: true },
  { feature: "ZoikoTime integration", free: null, starter: null, business: true },
  { feature: "Integrations", free: "2", starter: "Priority access", business: "Full + API" },
  { feature: "Support", free: "Community", starter: "Priority", business: "Security / compliance path" },
];

function Cell({ value, bold }: { value: CellValue; bold?: boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center text-indigo-700">
        <CheckIcon className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (value === null) {
    return <span className="text-slate-300">—</span>;
  }
  const startsWithCheck = typeof value === "string" && value.startsWith("✓");
  return (
    <span className={bold ? "font-semibold text-slate-900" : "text-slate-500"}>
      {startsWithCheck ? value : value}
    </span>
  );
}

function TableSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-slate-100">
      <div className="h-12 w-full bg-slate-100" />
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="flex gap-4 border-t border-slate-100 px-6 py-4">
          <div className="h-3 w-1/4 rounded bg-slate-100" />
          <div className="h-3 w-1/6 rounded bg-slate-100" />
          <div className="h-3 w-1/6 rounded bg-slate-100" />
          <div className="h-3 w-1/6 rounded bg-slate-100" />
        </div>
      ))}
    </div>
  );
}

export default function StartRouteComparisonSection() {
  const [tableLoaded, setTableLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTableLoaded(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      {/* ---------- Block 1: Route cards ---------- */}
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
          Find your route
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Start free or get a demo?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[14.5px] text-slate-500">
          Both paths lead to Sema. Choose the one that matches where your team is right now.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Free card */}
        <div className="flex flex-col rounded-2xl bg-[#EEF1FB] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-[10px] font-bold text-white shadow-sm">
            <ZapIcon className="h-4 w-4" />
          </span>
          <h3 className="mt-4 text-lg font-bold text-slate-900">Start free if you…</h3>

          <ul className="mt-4 flex-1 space-y-2.5">
            {FREE_POINTS.map((point) => (
              <li key={point} className="text-[13.5px] leading-relaxed text-slate-600">
                {point}
              </li>
            ))}
          </ul>

          <button className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md active:scale-[0.98]">
            Start free
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Demo card */}
        <div className="flex flex-col rounded-2xl bg-[#332F6B] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white shadow-sm">
            <CalendarIcon className="h-4.5 w-4.5" />
          </span>
          <h3 className="mt-4 text-lg font-bold text-white">Get a demo if you…</h3>

          <ul className="mt-4 flex-1 space-y-2.5">
            {DEMO_POINTS.map((point) => (
              <li key={point} className="text-[13.5px] leading-relaxed text-indigo-200">
                {point}
              </li>
            ))}
          </ul>

          <button className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-white/25 active:scale-[0.98]">
            Book a 20-minute demo
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* ---------- Block 2: Comparison table ---------- */}
      <div className="mx-auto mt-20 max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
          Plan comparison
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          What makes you upgrade.
        </h2>
      </div>

      <div className="mx-auto mt-10 max-w-6xl">
        {!tableLoaded ? (
          <TableSkeleton />
        ) : (
          <div
            className="relative grid overflow-hidden rounded-2xl border border-slate-100"
            style={{
              gridTemplateColumns: "1.6fr 1fr 1fr 1.2fr",
              gridTemplateRows: `auto repeat(${ROWS.length}, auto)`,
            }}
          >
            {/* Starter column highlight band — spans every body row, same grid track,
                so it is always perfectly aligned. bg + top/bottom border only, no sides. */}
            <div
              className="pointer-events-none border-t-2 border-b-2 border-indigo-200 bg-indigo-50/60"
              style={{ gridColumn: "3 / 4", gridRow: `2 / ${ROWS.length + 2}` }}
            />

            {/* Header row — 4 cells, row 1 */}
            <div className="bg-[#332F6B] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white" style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>
              Feature
            </div>
            <div className="bg-[#332F6B] px-3 py-3.5 text-center text-[13px] font-semibold uppercase tracking-wide text-white" style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>
              Free · $0
            </div>
            <div className="bg-[#332F6B] px-3 py-3.5 text-center text-[13px] font-semibold uppercase tracking-wide text-white" style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>
              Starter · $6/user
            </div>
            <div className="bg-[#332F6B] px-3 py-3.5 text-center text-[13px] font-semibold uppercase tracking-wide text-white" style={{ gridColumn: "4 / 5", gridRow: "1 / 2" }}>
              Business · $14/user
            </div>

            {/* Body rows — each cell placed explicitly on its grid row/column */}
            {ROWS.map((row, i) => {
              const gridRow = `${i + 2} / ${i + 3}`;
              return (
                <Fragment key={row.feature}>
                  <div
                    className="border-t border-slate-100 bg-white px-6 py-3 text-[13.5px] text-slate-700 transition-colors duration-200 hover:bg-slate-50/70"
                    style={{
                      gridColumn: "1 / 2",
                      gridRow,
                      animation: "fadeIn 0.4s ease-out both",
                      animationDelay: `${i * 35}ms`,
                    }}
                  >
                    {row.feature}
                  </div>
                  <div
                    className="border-t border-slate-100 bg-white px-3 py-3 text-center text-[13px] transition-colors duration-200 hover:bg-slate-50/70"
                    style={{
                      gridColumn: "2 / 3",
                      gridRow,
                      animation: "fadeIn 0.4s ease-out both",
                      animationDelay: `${i * 35}ms`,
                    }}
                  >
                    <Cell value={row.free} />
                  </div>
                  <div
                    className="px-3 py-3 text-center text-[13px]"
                    style={{
                      gridColumn: "3 / 4",
                      gridRow,
                      animation: "fadeIn 0.4s ease-out both",
                      animationDelay: `${i * 35}ms`,
                    }}
                  >
                    <Cell value={row.starter} bold={row.boldStarter} />
                  </div>
                  <div
                    className="border-t border-slate-100 bg-white px-3 py-3 text-center text-[13px] transition-colors duration-200 hover:bg-slate-50/70"
                    style={{
                      gridColumn: "4 / 5",
                      gridRow,
                      animation: "fadeIn 0.4s ease-out both",
                      animationDelay: `${i * 35}ms`,
                    }}
                  >
                    <Cell value={row.business} bold={row.boldBusiness} />
                  </div>
                </Fragment>
              );
            })}
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}