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
    <section className="w-full bg-violet-50 py-10 lg:py-12 overflow-hidden flex flex-col items-center justify-center font-sans antialiased relative">
      <div ref={ref} className={`transition-all duration-700 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} w-full max-w-[1248px] mx-auto px-6 flex flex-col items-center gap-8`}>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wide text-center">
          Trusted by teams that turn individual context into shared execution
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          {companies.map((company, i) => (
            <div key={i} className="h-12 flex items-center gap-3 bg-white rounded-xl pl-4 pr-6 outline outline-1 outline-offset-[-1px] outline-violet-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className={`size-6 ${company.bg} rounded-md flex items-center justify-center shrink-0`}>
                <span className={`${company.text} text-xs font-bold`}>{company.initial}</span>
              </div>
              <span className="text-slate-500 font-bold text-sm whitespace-nowrap">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
