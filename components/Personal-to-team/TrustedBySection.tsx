"use client";

import React from "react";
import { useInView } from "./useInView";

export function TrustedBySection() {
  const { ref, inView } = useInView(0.1);

  const companies = [
    { name: "Northline", initial: "N", bg: "bg-violet-100", text: "text-violet-600" },
    { name: "BrightPath", initial: "B", bg: "bg-sky-100", text: "text-sky-700" },
    { name: "Summit", initial: "S", bg: "bg-emerald-50", text: "text-green-600" },
    { name: "Vertex", initial: "V", bg: "bg-yellow-50", text: "text-yellow-600" },
    { name: "Bluewave", initial: "B", bg: "bg-violet-100", text: "text-indigo-800" },
    { name: "Pioneer", initial: "P", bg: "bg-violet-100", text: "text-violet-600" }
  ];

  return (
    <section className="w-full bg-slate-900 py-10 overflow-hidden flex flex-col items-center justify-center font-sans antialiased border-t border-slate-800">
      <div ref={ref} className={`ptt-hidden ${inView ? "ptt-visible" : ""} w-full max-w-[1248px] mx-auto px-6 flex flex-col items-center gap-8`}>
        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest text-center">
          Trusted by teams that turn individual context into shared execution
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {companies.map((company, i) => (
            <div key={i} className="h-10 flex items-center gap-3 bg-slate-800 rounded-full pl-2 pr-5 border border-slate-700 hover:bg-slate-700/50 transition-colors">
              <div className={`size-6 ${company.bg} rounded-md flex items-center justify-center shrink-0`}>
                <span className={`${company.text} text-[11px] font-bold`}>{company.initial}</span>
              </div>
              <span className="text-slate-400 font-bold text-sm whitespace-nowrap">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
