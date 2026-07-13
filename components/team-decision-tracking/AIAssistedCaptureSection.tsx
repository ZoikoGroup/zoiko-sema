"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function AIAssistedCaptureSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section className="w-full bg-[#F8F9FC] pt-12 pb-24 lg:pt-16 lg:pb-32 font-sans antialiased overflow-hidden">
      <div 
        ref={ref}
        className={`max-w-[800px] mx-auto px-6 md:px-8 flex flex-col items-center transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <span className="text-violet-600 text-xs font-bold uppercase tracking-wide font-['Inter'] mb-6">
          AI-ASSISTED CAPTURE
        </span>
        <h2 className="text-slate-900 text-4xl font-bold font-['Inter'] text-center leading-[1.15] mb-6">
          AI suggests. A person decides.
        </h2>
        <p className="text-slate-400 text-base font-normal font-['Inter'] leading-6 text-center max-w-[656px] mb-16">
          Zoiko Sema spots likely decisions in meetings and threads and drafts a record &mdash; but nothing<br className="hidden md:block"/>becomes official without human confirmation.
        </p>

        {/* UI Mockup Wrapper */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* Main Card */}
          <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-[0px_30px_64px_-34px_rgba(20,22,60,0.24)] outline outline-1 outline-violet-100 overflow-hidden relative z-10">
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-50 to-gray-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-6 bg-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-[10px] font-extrabold font-['Inter']">AI</span>
                </div>
                <span className="text-slate-900 text-xs font-bold font-['Inter']">Suggested decision</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 bg-emerald-600 rounded-sm"></div>
                <span className="text-green-600 text-xs font-bold font-['Inter']">High confidence</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <h3 className="text-slate-900 text-base font-bold font-['Inter'] leading-6 mb-4">
                Move the pricing launch to Q3 to align with the platform release.
              </h3>
              <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5 mb-6">
                Suggested from <span className="text-violet-600 font-semibold">Weekly sync</span> and <span className="text-violet-600 font-semibold">#pricing</span> channel context. Review before saving as an official decision.
              </p>

              {/* Fields */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1 bg-gray-50 rounded-[10px] outline outline-1 outline-violet-100 p-3">
                  <div className="text-slate-400 text-[10px] font-bold tracking-tight uppercase font-['Inter'] mb-1">PROPOSED OWNER</div>
                  <div className="text-slate-900 text-xs font-bold font-['Inter']">Maya R.</div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-[10px] outline outline-1 outline-violet-100 p-3">
                  <div className="text-slate-400 text-[10px] font-bold tracking-tight uppercase font-['Inter'] mb-1">DUE DATE</div>
                  <div className="text-slate-900 text-xs font-bold font-['Inter']">Jul 30</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="flex-1 min-w-[120px] h-10 bg-blue-600 rounded-[10px] text-white text-xs font-bold font-['Inter'] hover:bg-blue-700 transition-colors">
                  Confirm
                </button>
                <button className="flex-1 min-w-[120px] h-10 bg-white rounded-[10px] outline outline-1 outline-zinc-200 text-slate-900 text-xs font-bold font-['Inter'] hover:bg-gray-50 transition-colors">
                  Edit
                </button>
                <button className="w-20 shrink-0 h-10 bg-white rounded-[10px] outline outline-1 outline-rose-200 text-pink-700 text-xs font-bold font-['Inter'] hover:bg-rose-50 transition-colors">
                  Reject
                </button>
              </div>
            </div>
          </div>

          {/* Setting Pills floating below */}
          <div className="flex flex-col items-center gap-3 mt-10 md:mt-12 relative z-0 w-full px-4">
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 sm:gap-4">
              
              {/* AI suggestions */}
              <div className="w-40 h-8 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-emerald-600 rounded-sm"></div>
                  <span className="text-slate-600 text-xs font-semibold font-['Inter']">AI suggestions</span>
                </div>
                <span className="text-green-600 text-[10px] font-bold font-['Inter']">On</span>
              </div>

              {/* Human confirmation */}
              <div className="w-48 h-8 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-emerald-600 rounded-sm"></div>
                  <span className="text-slate-600 text-xs font-semibold font-['Inter']">Human confirmation</span>
                </div>
                <span className="text-green-600 text-[10px] font-bold font-['Inter']">On</span>
              </div>

              {/* Limit by workspace */}
              <div className="w-48 h-8 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-emerald-600 rounded-sm"></div>
                  <span className="text-slate-600 text-xs font-semibold font-['Inter']">Limit by workspace</span>
                </div>
                <span className="text-green-600 text-[10px] font-bold font-['Inter']">On</span>
              </div>

              {/* Log AI to audit */}
              <div className="w-40 h-8 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-emerald-600 rounded-sm"></div>
                  <span className="text-slate-600 text-xs font-semibold font-['Inter']">Log AI to audit</span>
                </div>
                <span className="text-green-600 text-[10px] font-bold font-['Inter']">On</span>
              </div>
              
            </div>
            
            <div className="flex items-center justify-center">
              {/* Sensitive spaces */}
              <div className="w-44 h-8 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-slate-300 rounded-sm"></div>
                  <span className="text-slate-600 text-xs font-semibold font-['Inter']">Sensitive spaces</span>
                </div>
                <span className="text-slate-400 text-[10px] font-bold font-['Inter']">Off</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
