"use client";

import { useState } from "react";
import { Check, Plus, Minus } from "lucide-react";

/**
 * PricingComparisonSection
 * Feature-by-feature plan comparison table (Free / Pro / Business / Enterprise)
 * Matches the "Every feature, side by side" design — Core Communication expanded
 * by default, remaining groups collapsible accordions.
 */

type CellValue = string | boolean; // true = check, false = dash, string = text

interface FeatureRow {
  label: string;
  free: CellValue;
  pro: CellValue;
  business: CellValue;
  enterprise: CellValue;
  highlightBusiness?: boolean; // bold value (e.g. "250 participants")
}

interface FeatureGroup {
  id: string;
  name: string;
  featureCount: number;
  rows: FeatureRow[];
}

const CORE_COMMUNICATION: FeatureGroup = {
  id: "core-communication",
  name: "Core Communication",
  featureCount: 7,
  rows: [
    { label: "Direct messaging", free: true, pro: true, business: true, enterprise: true },
    { label: "Channels and spaces", free: "Up to 5", pro: true, business: true, enterprise: true },
    { label: "Audio calls", free: "40 min limit", pro: true, business: true, enterprise: true },
    {
      label: "Video meetings",
      free: "40 min · 4 ppl",
      pro: "100 participants",
      business: "250 participants",
      enterprise: "Custom",
      highlightBusiness: true,
    },
    { label: "Screen sharing", free: true, pro: true, business: true, enterprise: true },
    {
      label: "File sharing",
      free: "5GB total",
      pro: "50GB",
      business: "100GB / user",
      enterprise: "Custom",
      highlightBusiness: true,
    },
    { label: "Mobile and desktop apps", free: true, pro: true, business: true, enterprise: true },
  ],
};

const OTHER_GROUPS: Omit<FeatureGroup, "rows">[] = [
  { id: "ai-assistance", name: "AI Assistance", featureCount: 7 },
  { id: "collaboration", name: "Collaboration", featureCount: 7 },
  { id: "administration", name: "Administration", featureCount: 6 },
  { id: "security-compliance", name: "Security and Compliance", featureCount: 9 },
  { id: "integrations-api", name: "Integrations and API", featureCount: 6 },
  { id: "support-onboarding", name: "Support and Onboarding", featureCount: 6 },
];

function Cell({
  value,
  highlight,
}: {
  value: CellValue;
  highlight?: boolean;
}) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center text-indigo-700">
        <Check className="h-4 w-4" strokeWidth={2.5} />
      </span>
    );
  }
  if (value === false) {
    return <span className="text-slate-300">—</span>;
  }
  return (
    <span className={highlight ? "font-semibold text-slate-900" : "text-slate-600"}>
      {value}
    </span>
  );
}

function CoreCommunicationTable() {
  return (
    <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
      {CORE_COMMUNICATION.rows.map((row, i) => (
        <RowGrid key={row.label} row={row} index={i} />
      ))}
    </div>
  );
}

function RowGrid({ row, index }: { row: FeatureRow; index: number }) {
  return (
    <div className="group col-span-5 grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr] transition-colors duration-200 hover:bg-slate-50/80">
      <div className="flex items-center border-t border-slate-100 px-6 py-3.5 text-sm text-slate-700">
        {row.label}
      </div>
      <div className="flex items-center justify-center border-t border-slate-100 px-4 py-3.5 text-center text-sm">
        <Cell value={row.free} />
      </div>
      <div className="flex items-center justify-center border-t border-slate-100 px-4 py-3.5 text-center text-sm">
        <Cell value={row.pro} />
      </div>
      {/* Business column — persistent light highlight per design */}
      <div className="flex items-center justify-center border-t border-indigo-100 bg-indigo-50/70 px-4 py-3.5 text-center text-sm transition-colors duration-200 group-hover:bg-indigo-50">
        <Cell value={row.business} highlight={row.highlightBusiness} />
      </div>
      <div className="flex items-center justify-center border-t border-slate-100 px-4 py-3.5 text-center text-sm">
        <Cell value={row.enterprise} />
      </div>
    </div>
  );
}

function GroupHeaderRow({
  name,
  featureCount,
  expanded,
  onToggle,
  loading,
}: {
  name: string;
  featureCount: number;
  expanded: boolean;
  onToggle: () => void;
  loading?: boolean;
}) {
  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between border-t border-slate-100 px-6 py-4 text-left transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
      aria-expanded={expanded}
    >
      <span className="flex items-center gap-2">
        <span className="text-sm font-semibold text-slate-900">{name}</span>
        <span className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
          {featureCount} features
        </span>
      </span>

      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-200">
        {loading ? (
          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-indigo-300 border-t-indigo-600" />
        ) : expanded ? (
          <Minus className="h-3.5 w-3.5 transition-transform duration-200" />
        ) : (
          <Plus className="h-3.5 w-3.5 transition-transform duration-200" />
        )}
      </span>
    </button>
  );
}

export default function PricingComparisonSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
      return;
    }
    // brief simulated-load animation when opening a group (no real data yet)
    setLoadingId(id);
    setTimeout(() => {
      setLoadingId(null);
      setExpandedId(id);
    }, 450);
  };

  return (
    <section className="bg-[#ECF3FF] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
          Compare plans
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Every feature, side <span className="font-serif italic font-medium">by side</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
          Core Communication is shown by default. Expand any group to see exact limits
          and feature boundaries — no important details are hidden in tooltips.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        {/* Caption bar */}
        <div className="border-b border-slate-100 px-6 py-4">
          <p className="text-sm text-slate-700">
            <span className="font-semibold text-slate-900">Sema plan comparison.</span>{" "}
            Feature-by-feature view across Free, Pro, Business and Enterprise.
            &ldquo;Unlimited&rdquo; entries are subject to a fair-use policy.
          </p>
        </div>

        {/* Plan header row */}
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr] bg-[#4B4789]">
          <div className="px-6 py-4 text-sm font-semibold text-white">Feature</div>
          <div className="px-4 py-4 text-center text-sm font-semibold text-white">Free</div>
          <div className="px-4 py-4 text-center text-sm font-semibold text-white">Pro</div>
          <div className="px-4 py-4 text-center text-sm font-semibold text-white">Business</div>
          <div className="px-4 py-4 text-center text-sm font-semibold text-white">Enterprise</div>
        </div>

        {/* Core Communication — expanded by default */}
        <div className="bg-indigo-50/40 px-6 py-2.5 text-left">
          <span className="text-sm font-semibold text-slate-900">Core Communication</span>{" "}
          <span className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
            7 features
          </span>
        </div>
        <CoreCommunicationTable />

        {/* Collapsible groups */}
        {OTHER_GROUPS.map((group) => (
          <div key={group.id}>
            <GroupHeaderRow
              name={group.name}
              featureCount={group.featureCount}
              expanded={expandedId === group.id}
              loading={loadingId === group.id}
              onToggle={() => handleToggle(group.id)}
            />
            {expandedId === group.id && (
              <div className="animate-[fadeIn_0.25s_ease-out] border-t border-slate-100 bg-slate-50/60 px-6 py-5 text-sm text-slate-400">
                Feature details for {group.name.toLowerCase()} go here.
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
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