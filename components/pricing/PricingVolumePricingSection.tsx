"use client";

/**
 * VolumePricingSection
 * Single large rounded lavender card on a white page background.
 * Left = eyebrow, heading, copy. Right = three stacked white tier cards
 * + full-width dark "Get a custom quote" CTA.
 */

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface Tier {
  label: string;
  description: string;
}

const TIERS: Tier[] = [
  { label: "50–250 USERS", description: "Volume discount available on Business pricing" },
  { label: "250+ USERS", description: "Enterprise tier with custom deployment" },
  {
    label: "MULTI-REGION OR ZOIKOTIME",
    description: "Routed to Enterprise sales for governed deployment",
  },
];

export default function PricingVolumePricingSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#ECF3FF] p-8 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left column */}
          <div className="max-w-md">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-indigo-700">
              Larger teams
            </p>
            <h2 className="mt-3 text-[1.9rem] font-bold leading-tight tracking-tight text-slate-900">
              Volume pricing for teams of 50+
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-slate-500">
              Business pricing applies up to 50 users. Teams of 50–250 may qualify
              for volume discounts on Business pricing. Organizations with 250+
              users, multi-region needs, compliance requirements, or
              ZoikoTime-connected deployments should use Enterprise.
            </p>
          </div>

          {/* Right column — tier cards + CTA */}
          <div className="flex flex-col gap-3">
            {TIERS.map((tier) => (
              <div
                key={tier.label}
                className="group rounded-xl bg-white px-5 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-[11px] font-bold uppercase tracking-wide text-indigo-700 transition-colors duration-200 group-hover:text-indigo-800">
                  {tier.label}
                </p>
                <p className="mt-1 text-[13.5px] text-slate-600">{tier.description}</p>
              </div>
            ))}

            <button className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#4B4789] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-800 hover:shadow-md active:scale-[0.99]">
              Get a custom quote
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}