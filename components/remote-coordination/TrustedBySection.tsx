"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

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
    <section className="w-full bg-slate-50 pb-16 font-sans overflow-hidden">
      <div 
        ref={ref}
        className={`max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8 text-center font-['Inter']">
          Trusted by distributed teams and business workspaces
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
          {companies.map((company, i) => (
            <div 
              key={i}
              className="h-12 px-5 bg-white rounded-xl outline outline-1 outline-violet-100 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div className={`size-6 rounded-md flex items-center justify-center ${company.bg}`}>
                <span className={`text-[11px] font-bold ${company.text} font-['Inter']`}>
                  {company.initial}
                </span>
              </div>
              <span className="text-slate-500 text-sm font-bold font-['Inter'] tracking-tight">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
