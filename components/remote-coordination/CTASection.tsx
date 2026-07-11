"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function CTASection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section className="w-full h-[464px] flex items-center justify-center bg-gradient-to-br from-violet-600 to-indigo-800 font-sans antialiased overflow-hidden">
      <div 
        ref={ref} 
        className={`w-full max-w-[1248px] px-6 md:px-10 flex flex-col items-center text-center transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        
        <h2 className="w-full max-w-[807.66px] text-white text-4xl font-bold font-['Inter'] leading-10 tracking-tight">
          Ready to coordinate remote work with less<br className="hidden md:block"/>friction?
        </h2>
        
        <p className="w-full max-w-[806.01px] text-purple-200 text-base font-normal font-['Inter'] leading-7 mt-[18px]">
          See how Zoiko Sema keeps updates, meetings, handoffs, summaries, and follow-ups connected across<br className="hidden md:block"/>time zones &mdash; with governance built in.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-[21.3px] mt-[35.25px]">
          <button className="w-36 h-12 bg-white text-indigo-800 rounded-full flex items-center justify-center text-base font-bold font-['Inter'] hover:bg-slate-50 hover:scale-105 transition-all">
            Get a demo
          </button>
          <button className="w-32 h-12 bg-white/10 outline outline-1 outline-white/40 text-white rounded-full flex items-center justify-center text-base font-bold font-['Inter'] hover:bg-white/20 hover:scale-105 transition-all">
            Start free
          </button>
          <a href="#" className="w-24 h-12 flex items-center justify-center border-b-[0.80px] border-white/50 text-white text-base font-bold font-['Inter'] hover:border-white transition-colors ml-4">
            Talk to sales
          </a>
        </div>

        <p className="text-violet-200 text-sm font-normal font-['Inter'] mt-[26.8px]">
          For remote, hybrid, and multi-location teams.
        </p>
        
      </div>
    </section>
  );
}
