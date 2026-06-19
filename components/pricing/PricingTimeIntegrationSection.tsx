"use client";

import { useEffect, useState } from "react";

/**
 * ZoikoTimeIntegrationSection
 * Two-column "integration story" section matching the Figma frame 1:1 —
 * left = eyebrow pill, heading, copy, pricing-clarity callout, CTAs
 * right = white card with a flow diagram (Sema -> Governed integration -> ZoikoTime)
 *
 * Includes a skeleton-shimmer loading state for the diagram card on mount,
 * plus a staggered fade-up entrance for the left column.
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

function ArrowDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 5v14M5 13l7 7 7-7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DiagramSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center gap-3">
        <div className="h-[58px] flex-1 rounded-xl bg-slate-100" />
        <div className="h-3 w-3 flex-shrink-0 rounded-full bg-slate-200" />
        <div className="h-[58px] flex-1 rounded-xl bg-slate-100" />
      </div>
      <div className="flex justify-center py-3">
        <div className="h-3 w-3 rounded-full bg-slate-200" />
      </div>
      <div className="h-[58px] w-full rounded-xl bg-slate-100" />
      <div className="mt-5 flex justify-center">
        <div className="h-6 w-48 rounded-full bg-slate-100" />
      </div>
    </div>
  );
}

export default function PricingTimeIntegrationSection() {
  const [diagramLoaded, setDiagramLoaded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const t = setTimeout(() => setDiagramLoaded(true), 650);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-[#EEF1FB] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
        {/* Left column */}
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold tracking-wide text-indigo-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            SEMA + ZOIKOTIME
          </span>

          <h2 className="mt-5 text-[40px] font-bold leading-[1.15] tracking-tight text-slate-900">
            Sema connects with ZoikoTime where workforce truth{" "}
            <span className="font-serif italic font-medium text-indigo-700">matters</span>.
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "#475569" }}>
            Sema is a complete communication platform on its own. For organizations
            that need conversations to tie back to verified workforce activity —
            billing accuracy, audit-ready evidence, manager review workflows — Sema
            integrates with ZoikoTime through a governed, permissioned,
            customer-configured pathway.
          </p>

          <div className="mt-6 rounded-lg border-l-4 border-indigo-700 bg-white px-5 py-4 shadow-sm transition-shadow duration-200 hover:shadow-md">
            <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
              <span className="font-semibold text-slate-900">Pricing clarity.</span>{" "}
              ZoikoTime integration design is included in Enterprise. Business
              plans can add integration configuration where approved. ZoikoTime
              itself is a separate ZoikoTime subscription.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-4">
            <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#4B4789] px-5 py-3 text-center text-sm font-semibold leading-snug text-white shadow-sm transition-all duration-200 hover:bg-indigo-800 hover:shadow-md active:scale-[0.98]">
              <span>Talk to sales about ZoikoTime</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <a
              href="#"
              className="group inline-flex  items-center gap-1.5 text-sm font-semibold leading-snug text-indigo-700 transition-colors duration-200 hover:text-indigo-900"
            >
              <span>Learn how Sema and ZoikoTime work together</span>
              <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Right column — flow diagram card */}
        <div
          className={`rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgba(76,71,137,0.08)] transition-all duration-700 ease-out hover:shadow-[0_12px_36px_rgba(76,71,137,0.12)] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          {!diagramLoaded ? (
            <DiagramSkeleton />
          ) : (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <div className="flex items-center gap-3">
                {/* Sema box */}
                <div className="flex-1 rounded-xl bg-[#EEF1FB] px-4 py-3.5 transition-colors duration-200 hover:bg-indigo-100/70">
                  <p className="text-[13.5px] font-semibold text-slate-900">Sema</p>
                  <p className="mt-0.5 text-[12px] text-slate-500">
                    Communication platform
                  </p>
                </div>

                <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-400" />

                {/* Governed integration box */}
                <div className="flex-1 rounded-xl bg-[#4B4789] px-4 py-3.5 text-white shadow-sm transition-transform duration-200 hover:scale-[1.02]">
                  <p className="text-[13.5px] font-semibold">Governed integration</p>
                  <p className="mt-0.5 text-[12px] leading-snug text-indigo-100">
                    Permissioned · customer-configured
                  </p>
                </div>
              </div>

              <div className="flex justify-center py-3">
                <ArrowDown className="h-4 w-4 text-slate-400" />
              </div>

              {/* ZoikoTime box */}
              <div className="rounded-xl bg-[#0E2A2B] px-5 py-3.5 text-center text-white shadow-sm transition-transform duration-200 hover:scale-[1.01]">
                <p className="text-[13.5px] font-semibold">ZoikoTime</p>
                <p className="mt-0.5 text-[12px] text-slate-300">
                  Workforce truth · separate subscription
                </p>
              </div>

              <div className="mt-5 flex justify-center">
                <span className="rounded-full bg-[#EEF1FB] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-indigo-700">
                  Customer controls every step
                </span>
              </div>
            </div>
          )}
        </div>
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