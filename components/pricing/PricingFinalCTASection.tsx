"use client";

/**
 * FinalCTASection
 * Closing CTA band — solid indigo background, centered heading + copy,
 * white pill primary button and outlined ghost secondary button.
 */

export default function PricingFinalCTASection() {
  return (
    <section className="bg-[#474889] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Still deciding?
        </h2>

        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-indigo-100">
          Tell us about your team and we will help you choose. 30 minutes, real
          human, no pressure.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3">
          <button className="w-full max-w-sm rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#2A2657] shadow-sm transition-all duration-200 hover:bg-slate-100 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4B4789]">
            Get a demo
          </button>

          <button className="w-full max-w-sm rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/70 hover:bg-white/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4B4789]">
            Start free
          </button>
        </div>
      </div>
    </section>
  );
}