"use client";

import Link from "next/link";


/**
 * StartFinalCTASection
 * Closing CTA band — solid indigo background, white eyebrow pill,
 * bold heading, two CTA buttons (solid + outlined), and a row of
 * small trust microcopy underneath.
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

const TRUST_POINTS = [
  "No credit card",
  "90 seconds to workspace",
  "Free up to 10 users",
  "Export data anytime",
];

export default function StartFinalCTASection() {
  return (
    <section className="bg-[#4B4789] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-indigo-700 shadow-sm">
          Start free · No credit card
        </span>

        <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          Start with one conversation.
          <br />
          Grow when the need is real.
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-[14.5px] leading-relaxed text-indigo-200">
          Create your free Sema workspace in 90 seconds. Free forever for
          teams up to 10. Upgrade when control, scale, or governance becomes
          necessary.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-400 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4B4789] sm:w-auto">
            Start free — no card needed
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          <Link
            href="/get-a-demo/" className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/70 hover:bg-white/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4B4789] sm:w-auto">
            Get a demo instead
          </Link>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {TRUST_POINTS.map((point) => (
            <span key={point} className="text-[12.5px] text-indigo-300">
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}