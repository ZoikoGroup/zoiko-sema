import React from "react";

import { Clapperboard, Palette } from "lucide-react";

export default function AutomatedGovernance() {
  return (
    <section className="bg-[#F3F2FD] text-[#1E293B] px-6 py-20 relative overflow-hidden animate-fade-up-ag">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUpAG {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up-ag {
          animation: fadeUpAG 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy Panel */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#4F46E5] uppercase block mb-2">
              AUTOMATED GOVERNANCE
            </span>
            <h2 className="text-3xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-[1.2]">
              Enterprise-grade multi-stage approval engine.
            </h2>
          </div>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg">
            Stop chasing approvals in Slack. Set standardized chains across
            Brand, Legal, Accessibility, and Executive tiers. Ensure every asset
            is compliant before it ever hits a live feed.
          </p>

          {/* Bulleted Feature Badges */}
          <div className="space-y-3 pt-2">
            <div className="bg-white px-5 py-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-[#4A47D2]">
                <Clapperboard size={18} strokeWidth={2} />
              </span>
              <span className="text-xs font-bold text-[#1E293B]">
                One-click Legal & Compliance sign-off
              </span>
            </div>

            <div className="bg-white px-5 py-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-[#4A47D2]">
                <Palette size={18} strokeWidth={2} />
              </span>
              <span className="text-xs font-bold text-[#1E293B]">
                Full immutable audit history for every asset
              </span>
            </div>
          </div>
        </div>

        {/* Right Empty Image Space */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-lg rounded-3xl p-3 border border-slate-100">
            <div className="">
              <img
                src="/marketing/pc.png"
                alt="Multi-stage approval interface mockup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
