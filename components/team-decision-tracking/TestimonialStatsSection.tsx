"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function TestimonialStatsSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section className="w-full bg-[#0F1123] py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div 
        ref={ref} 
        className={`max-w-[900px] mx-auto px-6 md:px-8 flex flex-col items-center transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <span className="text-violet-400 text-5xl font-extrabold font-['Inter'] opacity-30 leading-none mb-6">
          &quot;
        </span>
        
        <h2 className="text-white text-3xl md:text-4xl font-bold font-['Inter'] text-center leading-[1.3] mb-12 max-w-[800px]">
          We stopped re-litigating decisions. Every choice has an owner, a reason, and the thread it came from.
        </h2>

        <div className="flex items-center gap-4 mb-16">
          <div className="size-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-base font-bold font-['Inter']">P</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-sm font-bold font-['Inter']">Priya Nair</span>
            <span className="text-slate-300 text-xs font-normal font-['Inter']">VP Operations &middot; Summit</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="w-full border-t border-violet-400/25 pt-10 flex flex-col md:flex-row justify-between gap-10 md:gap-4">
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="text-white text-3xl font-extrabold font-['Inter'] mb-3">Fewer</div>
            <p className="text-slate-300 text-xs font-normal font-['Inter'] leading-5 max-w-[224px]">
              repeated decision discussions once records are visible.
            </p>
          </div>
          
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="text-white text-3xl font-extrabold font-['Inter'] mb-3">Faster</div>
            <p className="text-slate-300 text-xs font-normal font-['Inter'] leading-5 max-w-[208px]">
              follow-through after meetings with owners and dates attached.
            </p>
          </div>
          
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="text-white text-3xl font-extrabold font-['Inter'] mb-3">Clearer</div>
            <p className="text-slate-300 text-xs font-normal font-['Inter'] leading-5 max-w-[240px]">
              ownership across teams with status on every decision.
            </p>
          </div>
        </div>

        <div className="mt-16 text-slate-500 text-xs font-normal font-['Inter'] text-center">
          Directional outcomes for illustration; validated figures shown at publication.
        </div>

      </div>
    </section>
  );
}
