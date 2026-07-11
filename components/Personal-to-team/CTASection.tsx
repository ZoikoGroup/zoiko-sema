"use client";

import React from "react";
import { useInView } from "./useInView";

export function CTASection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className={`ptt-group ${inView ? "ptt-group-in" : ""} w-full bg-gradient-to-br from-violet-600 to-indigo-800 py-24 font-sans antialiased overflow-hidden`}>
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center">
        
        <h2 className="ptt-item text-white text-4xl md:text-5xl font-bold leading-[1.2] mb-6">
          Ready to turn individual work into team<br/>clarity?
        </h2>
        
        <p className="ptt-item text-violet-200 text-base font-normal leading-7 mb-12 max-w-[800px]">
          See how Zoiko Sema keeps personal context protected while helping teams move forward with shared<br/>summaries, tasks, files, and follow-up.
        </p>
        
        <div className="ptt-item flex flex-col sm:flex-row items-center gap-3.5 mb-14">
          <button className="w-36 h-12 bg-white rounded-full flex items-center justify-center text-indigo-800 text-base font-bold hover:bg-slate-50 transition-colors">
            Get a demo
          </button>
          
          <button className="w-32 h-12 bg-white/10 rounded-full outline outline-1 outline-offset-[-1px] outline-white/40 flex items-center justify-center text-white text-base font-bold hover:bg-white/20 transition-colors">
            Start free
          </button>
          
          <button className="w-32 h-12 border-b-[0.8px] border-white/50 flex items-center justify-center text-white text-base font-bold hover:border-white transition-colors">
            Talk to sales
          </button>
        </div>
        
        <p className="ptt-item text-violet-200 text-sm font-normal">
          Private-by-default capture. Reviewed sharing. Team-ready follow-through.
        </p>

      </div>
    </section>
  );
}
