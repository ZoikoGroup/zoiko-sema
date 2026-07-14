"use client";

import Link from "next/link";

/**
 * PricingFinalCTASection
 * Closing CTA band — full-bleed meeting-room photo with a dark overlay,
 * centered eyebrow/heading/copy, and two CTAs.
 */

export default function PricingFinalCTASection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center px-4 py-20 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/Images/sales-meeting.webp')" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,10,26,0.88) 0%, rgba(8,10,26,0.82) 55%, rgba(8,10,26,0.92) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8FA6FF]">
          Get started
        </p>

        <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-tight text-white sm:text-[36px]">
          Find the plan that fits how your team works.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#C7CCE8]">
          Start free today, or talk to sales about Business and Enterprise
          deployment.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/start-free/"
            className="w-full max-w-xs rounded-full bg-[#3B5BFF] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#2E4BE0] hover:shadow-md active:scale-[0.98] sm:w-auto"
          >
            Start free
          </Link>

          <Link
            href="/get-a-demo/"
            className="w-full max-w-xs rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 active:scale-[0.98] sm:w-auto"
          >
            Get a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
