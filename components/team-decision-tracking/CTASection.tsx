"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function CTASection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="w-full bg-gradient-to-br from-violet-600 to-indigo-800 py-24 font-sans antialiased overflow-hidden">
      <div 
        ref={ref}
        className={`max-w-[800px] mx-auto px-6 flex flex-col items-center text-center transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <h2 className="text-white text-3xl md:text-4xl lg:text-[40px] font-bold font-['Inter'] leading-tight mb-6">
          Ready to make every decision<br className="hidden md:block"/>clear and accountable?
        </h2>
        
        <p className="text-violet-200 text-base font-normal font-['Inter'] leading-7 mb-10 max-w-[680px]">
          See how Zoiko Sema captures decisions from real collaboration and keeps<br className="hidden md:block"/>owners, evidence, and follow-ups connected &mdash; with governance built in.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button className="px-8 py-3.5 bg-white text-indigo-800 rounded-full font-bold text-base hover:bg-slate-50 hover:scale-105 transition-all shadow-sm">
            Get a demo
          </button>
          <button className="px-8 py-3.5 bg-white/10 text-white rounded-full outline outline-1 outline-white/30 font-bold text-base hover:bg-white/20 transition-all">
            Start free
          </button>
          <button className="px-8 py-3.5 text-white font-bold text-base hover:text-violet-200 transition-colors">
            Talk to sales
          </button>
        </div>

        <p className="text-violet-300 text-xs font-normal font-['Inter']">
          For leadership, project, client, remote, operations, and regulated teams.
        </p>
      </div>
    </section>
  );
}
