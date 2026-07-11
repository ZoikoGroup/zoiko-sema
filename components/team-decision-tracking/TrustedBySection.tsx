"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function TrustedBySection() {
  const { ref, inView } = useInView(0.1);

  const companies = [
    { name: "Northline", width: "w-20" },
    { name: "BrightPath", width: "w-24" },
    { name: "Summit", width: "w-16" },
    { name: "Vertex", width: "w-16" },
    { name: "Bluewave", width: "w-20" },
    { name: "Pioneer", width: "w-20" },
  ];

  return (
    <section className="w-full bg-white font-sans antialiased overflow-hidden pt-12 pb-8">
      <div 
        ref={ref}
        className={`max-w-[1116px] mx-auto px-6 md:px-10 transition-all duration-700 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="w-full h-auto min-h-[64px] py-4 lg:py-0 border-t-[0.80px] border-b-[0.80px] border-violet-100 flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 gap-4 lg:gap-8">
          
          <div className="flex-shrink-0 text-center lg:text-left text-slate-400 text-xs font-bold font-['Inter'] uppercase tracking-wide whitespace-nowrap">
            Trusted by teams that turn discussion into decisions
          </div>
          
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 lg:gap-8">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className={`text-gray-400 text-base font-extrabold font-['Inter'] text-center hover:text-gray-600 transition-colors cursor-pointer shrink-0 ${company.width}`}
              >
                {company.name}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
