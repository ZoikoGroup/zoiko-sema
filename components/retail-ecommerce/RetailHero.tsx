import React from "react";

export default function RetailHero() {
  return (
    <section className="relative bg-[#F3F2FD] text-[#0F172A] px-6 py-16 md:py-24 overflow-hidden animate-fade-up-rh">
      {/* Inline Animation Style */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpRH {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-rh {
          animation: fadeUpRH 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy Panel */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <div>
            <span className="inline-block bg-[#E5E2F8] text-[#4F46E5] text-xs font-bold px-3 py-1.5 rounded-md tracking-wide">
              Retail & eCommerce Solution
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#0F172A]">
            Keep every store, channel, and customer-facing team aligned.
          </h1>

          <p className="text-[#475569] text-sm md:text-base leading-relaxed max-w-lg">
            Show one governed workspace connecting campaigns, launches, store
            handoffs, operational issues, and AI-driven summaries across every
            retail location.
          </p>

          <div className="pt-2">
            <button className="bg-[#000000] hover:bg-slate-900 text-white font-bold text-sm px-7 py-4 rounded-xl transition-all shadow-md">
              Explore the Hub
            </button>
          </div>
        </div>

        {/* Right Empty Image Space */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <div className="w-full max-w-[640px] rounded-2xl overflow-hidden aspect-[1.48/1]">
            <img
              src="/retail-ecommerce/hero.png"
              alt="Retail Operations Hub Dashboard Mockup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
