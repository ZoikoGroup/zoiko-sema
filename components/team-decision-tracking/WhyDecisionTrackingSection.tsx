"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function WhyDecisionTrackingSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.2);

  return (
    <section className="w-full bg-white pt-10 pb-24 font-sans antialiased overflow-hidden">
      <div 
        ref={sectionRef} 
        className={`max-w-[1136px] mx-auto px-6 md:px-8 flex flex-col items-center transition-all duration-1000 transform ${sectionIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <span className="text-violet-600 text-xs font-bold uppercase tracking-wide font-['Inter'] mb-6">
          WHY DECISION TRACKING
        </span>
        <h2 className="text-slate-900 text-4xl font-bold font-['Inter'] text-center leading-[1.15] mb-20 max-w-[640px]">
          Decisions shouldn't disappear after the<br className="hidden md:block"/>meeting.
        </h2>

        {/* 3 Column Features Box */}
        <div className="w-full bg-white rounded-[20px] outline outline-1 outline-violet-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
          
          {/* Card 1 */}
          <div className="flex-1 p-8 md:p-10 flex flex-col">
            <div className="size-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-violet-600 text-xl font-normal font-['Cambria_Math']">&#9713;</span>
            </div>
            <h3 className="text-slate-900 text-lg font-bold font-['Inter'] mb-3">
              Reduce alignment risk
            </h3>
            <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-6">
              Replace scattered verbal agreements with<br className="hidden xl:block"/>visible decision records everyone can see.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 p-8 md:p-10 flex flex-col border-t md:border-t-0 md:border-l border-violet-100">
            <div className="size-12 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-sky-700 text-xl font-normal font-['Cambria_Math']">&#9678;</span>
            </div>
            <h3 className="text-slate-900 text-lg font-bold font-['Inter'] mb-3">
              Improve accountability
            </h3>
            <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-6">
              Every decision has an owner, status, date,<br className="hidden xl:block"/>and a clear follow-up path.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 p-8 md:p-10 flex flex-col border-t md:border-t-0 md:border-l border-violet-100">
            <div className="size-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
              <span className="text-green-600 text-xl font-normal font-['Segoe_UI_Symbol']">&#9919;</span>
            </div>
            <h3 className="text-slate-900 text-lg font-bold font-['Inter'] mb-3">
              Support governed work
            </h3>
            <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-6">
              Keep evidence available for approved teams<br className="hidden xl:block"/>&mdash; without surveillance or activity tracking.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
