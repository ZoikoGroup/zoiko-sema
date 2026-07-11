"use client";

import React from "react";
import { useInView } from "./useInView";

export function TestimonialStatsSection() {
  const { ref: containerRef, inView: containerIn } = useInView(0.2);

  return (
    <section className="w-full bg-slate-50 py-20 md:py-24 font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        <div ref={containerRef} className={`ptt-group ${containerIn ? "ptt-group-in" : ""} w-full max-w-[1140px] flex flex-col lg:flex-row items-center gap-8 lg:gap-10`}>
          
          {/* Left Testimonial Card */}
          <div className="ptt-item flex-1 bg-gradient-to-br from-violet-600 to-indigo-800 rounded-3xl p-10 relative flex flex-col justify-start min-h-[288px]">
            <div>
              <span className="text-white text-5xl font-extrabold opacity-50 absolute top-10 left-10 leading-10">"</span>
              <p className="text-white text-xl font-semibold leading-8 mt-[38.4px] relative z-10 max-w-full lg:whitespace-nowrap">
                Zoiko Sema helped our team turn individual notes and<br/>follow-ups into shared action — without losing privacy or<br/>context.
              </p>
            </div>
            
            <div className="flex items-center gap-[14px] mt-[33.6px] relative z-10">
              <div className="size-10 rounded-full border-2 border-white/40 overflow-hidden bg-white/20 shrink-0">
                <img src="/Personal/four.jpg" alt="Maya Reyes" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-bold leading-tight">Maya Reyes</span>
                <span className="text-violet-200 text-xs mt-0.5">Operations Lead &middot; Northline</span>
              </div>
            </div>
          </div>

          {/* Right Stats Cards */}
          <div className="w-full lg:w-[527px] flex flex-col gap-4 shrink-0">
            <div className="ptt-item bg-white rounded-2xl h-20 px-[24.8px] flex items-center gap-6 outline outline-1 outline-offset-[-1px] outline-violet-100" style={{ animationDelay: "0.1s" }}>
              <span className="text-violet-600 text-3xl font-extrabold shrink-0 w-[92px]">2.8&times;</span>
              <p className="text-gray-500 text-sm font-normal leading-5">
                faster team handoff from personal capture to shared<br/>follow-up.
              </p>
            </div>
            
            <div className="ptt-item bg-white rounded-2xl h-20 px-[24.8px] flex items-center gap-6 outline outline-1 outline-offset-[-1px] outline-violet-100" style={{ animationDelay: "0.2s" }}>
              <span className="text-violet-600 text-3xl font-extrabold shrink-0 w-[92px]">41%</span>
              <p className="text-gray-500 text-sm font-normal leading-5">
                fewer missed follow-ups after notes become owner-<br/>assigned tasks.
              </p>
            </div>
            
            <div className="ptt-item bg-white rounded-2xl h-20 px-[24.8px] flex items-center gap-6 outline outline-1 outline-offset-[-1px] outline-violet-100" style={{ animationDelay: "0.3s" }}>
              <span className="text-violet-600 text-3xl font-extrabold shrink-0 w-[92px]">99.9%</span>
              <p className="text-gray-500 text-sm font-normal leading-5">
                enterprise-grade availability and reliable access for<br/>team workflows.
              </p>
            </div>
            
            <p className="text-slate-400 text-[10px] mt-2 ptt-item" style={{ animationDelay: "0.4s" }}>
              Directional metrics for illustration; validated figures shown at publication.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
