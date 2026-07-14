"use client";

/**
 * PricingComparisonSection
 * Flat feature-by-feature plan comparison table (Free / Pro / Business / Enterprise).
 */

type CellValue = string | boolean; // true = check, false = dash, string = text

interface FeatureRow {
  label: string;
  free: CellValue;
  pro: CellValue;
  business: CellValue;
  enterprise: CellValue;
}

const ROWS: FeatureRow[] = [
  { label: "Meetings & messaging", free: true, pro: true, business: true, enterprise: true },
  { label: "Mail & Calendar", free: true, pro: true, business: true, enterprise: true },
  { label: "AI Meeting Summaries", free: "Basic", pro: "Full", business: "Full", enterprise: "Full + custom policy" },
  { label: "Sema Notes & Search", free: "Limited", pro: true, business: true, enterprise: true },
  { label: "Admin Console", free: false, pro: false, business: true, enterprise: "Advanced" },
  { label: "Confidential Mode", free: false, pro: false, business: true, enterprise: true },
  { label: "SSO / SAML / SCIM", free: false, pro: false, business: false, enterprise: true },
  { label: "ZoikoTime integration", free: false, pro: false, business: "Add-on", enterprise: true },
];

function Cell({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[#15131F]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
          <path d="M2.5 7.2l3 3 6-6.4" stroke="#22A06B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="hidden sm:inline">Included</span>
      </span>
    );
  }
  if (value === false) {
    return <span className="text-gray-300">—</span>;
  }
  const isHighlight = value === "Advanced";
  return (
    <span
      className={
        isHighlight
          ? "font-semibold text-[#3B5BFF]"
          : value === "Full" || value === "Full + custom policy"
          ? "inline-flex items-center gap-1.5 text-[#15131F] font-medium"
          : "text-gray-400"
      }
    >
      {(value === "Full" || value === "Full + custom policy") && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
          <path d="M2.5 7.2l3 3 6-6.4" stroke="#22A06B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {value === "Advanced" && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
          <path d="M2.5 7.2l3 3 6-6.4" stroke="#3B5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {value}
    </span>
  );
}

export default function PricingComparisonSection() {
  return (
    <section id="comparison" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#3B5BFF]">
          Feature comparison
        </p>
        <h2 className="mt-3 text-[32px] font-bold tracking-tight text-[#15131F] sm:text-[36px]">
          Every feature, side by side.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-gray-500">
          Meetings, messaging, mail, calendar, files, search, AI, and governance
          mapped to each plan.
        </p>
      </div>

      {/* Banner image */}
      <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl">
        <img
          src="/Images/Featured-Image-Replacement.png"
          alt="Sema meeting governance workspace on a laptop"
          className="w-full h-auto block"
          style={{ maxHeight: 340, objectFit: "cover" }}
        />
      </div>

      {/* Comparison table */}
      <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border border-gray-100 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <div className="overflow-x-auto">
          <div className="min-w-[640px]">
            {/* header */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr] border-b border-gray-100 bg-[#FAFBFF]">
              <div className="px-6 py-4 text-[13px] font-semibold text-gray-400">Feature</div>
              <div className="px-4 py-4 text-center text-[13px] font-semibold text-gray-500">Free</div>
              <div className="px-4 py-4 text-center text-[13px] font-semibold text-gray-500">Pro</div>
              <div className="px-4 py-4 text-center text-[13px] font-semibold text-gray-500">Business</div>
              <div className="px-4 py-4 text-center text-[13px] font-semibold text-gray-500">Enterprise</div>
            </div>

            {/* rows */}
            {ROWS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr] border-b border-gray-100 last:border-b-0 transition-colors duration-150 hover:bg-gray-50/70"
              >
                <div className="flex items-center px-6 py-4 text-[13.5px] font-medium text-[#15131F]">
                  {row.label}
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center text-[13px]">
                  <Cell value={row.free} />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center text-[13px]">
                  <Cell value={row.pro} />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center text-[13px]">
                  <Cell value={row.business} />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center text-[13px]">
                  <Cell value={row.enterprise} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
