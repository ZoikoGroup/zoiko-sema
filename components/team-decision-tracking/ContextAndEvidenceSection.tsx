"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function ContextAndEvidenceSection() {
  const { ref, inView } = useInView(0.2);

  const features = [
    "Rationale and alternatives considered",
    "Linked meeting, chat, and file evidence",
    "Owner, accountable team, and due date",
    "Full approval and change history"
  ];

  return (
    <section className="w-full bg-white pt-24 pb-12 lg:pt-32 lg:pb-16 font-sans antialiased overflow-hidden">
      <div 
        ref={ref} 
        className={`max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        
        {/* Left: UI Mockup */}
        <div className="flex-1 w-full flex justify-center lg:justify-start">
          <div className="w-full max-w-[674px] bg-white rounded-[20px] shadow-[0px_40px_80px_-40px_rgba(20,22,60,0.28)] outline outline-1 outline-violet-100 overflow-hidden flex flex-col">
            
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2.5 py-0.5 bg-violet-100 text-violet-600 text-[10px] font-bold rounded-lg font-['Inter']">Confirmed</span>
                <span className="px-2.5 py-0.5 bg-sky-100 text-sky-700 text-[10px] font-bold rounded-lg font-['Inter']">From meeting</span>
                <span className="px-2.5 py-0.5 bg-emerald-50 text-green-600 text-[10px] font-bold rounded-lg font-['Inter']">Approved</span>
              </div>
              <h3 className="text-slate-900 text-lg font-bold font-['Inter'] leading-6 mb-3">
                Ship v2 onboarding to all regions on Aug 12
              </h3>
              <div className="flex items-center gap-3">
                <div className="size-6 bg-violet-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold font-['Inter']">AC</div>
                <span className="text-gray-500 text-xs font-semibold font-['Inter']">Ava Chen &middot; Owner</span>
                <span className="text-slate-400 text-xs font-semibold font-['Inter'] ml-4">Due Aug 12</span>
              </div>
            </div>

            {/* Middle Grid */}
            <div className="flex flex-col md:flex-row">
              {/* Rationale Col */}
              <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col gap-5">
                <div>
                  <h4 className="text-slate-400 text-xs font-bold tracking-tight uppercase mb-1.5 font-['Inter']">Rationale</h4>
                  <p className="text-slate-600 text-xs font-normal leading-5 font-['Inter']">
                    Aligns launch with the platform release and<br/>reduces peak-season support load.
                  </p>
                </div>
                <div>
                  <h4 className="text-slate-400 text-xs font-bold tracking-tight uppercase mb-1.5 font-['Inter']">Alternatives</h4>
                  <p className="text-slate-600 text-xs font-normal leading-5 font-['Inter']">
                    Ship regionally in phases; hold until Q4.
                  </p>
                </div>
                <div>
                  <h4 className="text-slate-400 text-xs font-bold tracking-tight uppercase mb-1.5 font-['Inter']">Accountable</h4>
                  <p className="text-slate-600 text-xs font-normal leading-5 font-['Inter']">
                    Product & Onboarding
                  </p>
                </div>
                <div>
                  <h4 className="text-slate-400 text-xs font-bold tracking-tight uppercase mb-1.5 font-['Inter']">Impact Area</h4>
                  <p className="text-slate-600 text-xs font-normal leading-5 font-['Inter']">
                    All regions &middot; Onboarding
                  </p>
                </div>
              </div>

              {/* Evidence Col */}
              <div className="flex-1 p-6 border-b border-gray-100 md:border-b-0 flex flex-col gap-4">
                <h4 className="text-slate-400 text-xs font-bold tracking-wide uppercase mb-1 font-['Inter']">Evidence</h4>
                
                <div className="flex items-center gap-3 p-2.5 rounded-lg outline outline-1 outline-violet-100">
                  <div className="px-1.5 py-0.5 bg-violet-100 rounded-md text-violet-600 text-[8px] font-bold font-['Inter']">REC</div>
                  <span className="text-slate-900 text-xs font-semibold leading-4 font-['Inter']">Weekly sync — recording</span>
                </div>
                
                <div className="flex items-center gap-3 p-2.5 rounded-lg outline outline-1 outline-violet-100">
                  <div className="px-1.5 py-0.5 bg-sky-100 rounded-md text-sky-700 text-[8px] font-bold font-['Inter']">CHT</div>
                  <span className="text-slate-900 text-xs font-semibold leading-4 font-['Inter']">#launch-planning thread</span>
                </div>
                
                <div className="flex items-center gap-3 p-2.5 rounded-lg outline outline-1 outline-violet-100">
                  <div className="px-1.5 py-0.5 bg-emerald-50 rounded-md text-green-600 text-[8px] font-bold font-['Inter']">DOC</div>
                  <span className="text-slate-900 text-xs font-semibold leading-4 font-['Inter']">Launch_plan_v2.pdf</span>
                </div>
              </div>
            </div>

            {/* Audit Trail */}
            <div className="p-6 bg-gray-50/50">
              <h4 className="text-slate-400 text-xs font-bold tracking-wide uppercase mb-4 font-['Inter']">Audit Trail</h4>
              <div className="flex flex-wrap gap-4">
                <div className="px-3 py-2 bg-gray-50 rounded-[10px] outline outline-1 outline-violet-100 flex items-start gap-2">
                  <div className="size-2 mt-1 bg-slate-300 rounded-sm shrink-0"></div>
                  <div>
                    <div className="text-slate-900 text-xs font-bold font-['Inter']">Created from AI</div>
                    <div className="text-slate-400 text-[10px] font-normal font-['Inter']">Ava &middot; Jul 9</div>
                  </div>
                </div>
                <div className="px-3 py-2 bg-gray-50 rounded-[10px] outline outline-1 outline-violet-100 flex items-start gap-2">
                  <div className="size-2 mt-1 bg-violet-600 rounded-sm shrink-0"></div>
                  <div>
                    <div className="text-slate-900 text-xs font-bold font-['Inter']">Owner assigned</div>
                    <div className="text-slate-400 text-[10px] font-normal font-['Inter']">Jul 9, 10:26</div>
                  </div>
                </div>
                <div className="px-3 py-2 bg-gray-50 rounded-[10px] outline outline-1 outline-violet-100 flex items-start gap-2">
                  <div className="size-2 mt-1 bg-green-500 rounded-sm shrink-0"></div>
                  <div>
                    <div className="text-slate-900 text-xs font-bold font-['Inter']">Approved</div>
                    <div className="text-slate-400 text-[10px] font-normal font-['Inter']">Priya &middot; Jul 10</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 w-full max-w-[500px]">
          <span className="text-violet-600 text-xs font-bold uppercase tracking-wide font-['Inter'] mb-6 block">
            DECISION RECORD
          </span>
          <h2 className="text-slate-900 text-4xl font-bold font-['Inter'] leading-[1.1] mb-6">
            Every decision, with the<br className="hidden lg:block"/>context that made it.
          </h2>
          <p className="text-gray-500 text-base font-normal font-['Inter'] leading-6 mb-10">
            Open any decision to see its rationale, owner, evidence, follow-ups, and full change history &mdash; connected to the meeting or thread it came from.
          </p>

          <div className="flex flex-col gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="size-6 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-green-600 text-xs font-bold">&#10003;</span>
                </div>
                <span className="text-slate-600 text-sm font-semibold font-['Inter']">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
