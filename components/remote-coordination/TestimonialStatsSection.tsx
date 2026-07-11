"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function TestimonialStatsSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.2);

  const stats = [
    {
      value: "48%",
      desc: "fewer status meetings by shifting updates to async coordination."
    },
    {
      value: "2.1\u00d7",
      desc: "faster handoff response between regions and shifts."
    },
    {
      value: "3\u00d7",
      desc: "higher update visibility with shared, reviewed context."
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div 
        ref={sectionRef}
        className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-10 xl:gap-[112px] items-center lg:items-start"
      >
        
        {/* Left: Testimonial Card */}
        <div className={`w-full lg:w-[644px] h-auto lg:h-72 bg-gradient-to-br from-violet-600 to-indigo-800 rounded-3xl p-10 flex flex-col justify-between shrink-0 transition-all duration-1000 transform ${sectionIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <div>
            <span className="text-white opacity-50 text-5xl font-extrabold font-['Inter'] leading-none">
              &quot;
            </span>
            <p className="text-white text-xl font-semibold font-['Inter'] leading-8 mt-2 max-w-[520px]">
              Zoiko Sema gave our distributed team one place for updates, meetings, and handoffs. Work moves across time zones without anyone chasing status.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <div className="size-10 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-white text-base font-bold font-['Inter']">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-bold font-['Inter'] leading-tight">Maya Rodrigues</span>
              <span className="text-violet-200 text-xs font-normal font-['Inter'] mt-0.5">Head of Remote Operations &middot; Northline</span>
            </div>
          </div>
        </div>

        {/* Right: Stats list */}
        <div className={`flex-1 w-full flex flex-col gap-4 mt-6 lg:mt-0 transition-all duration-1000 delay-200 transform ${sectionIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
          {stats.map((stat, i) => (
            <div key={i} className="w-full h-auto min-h-[80px] bg-white rounded-2xl outline outline-1 outline-violet-100 flex items-center p-6 gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 shrink-0 flex items-center">
                <span className="text-violet-600 text-3xl font-extrabold font-['Inter']">
                  {stat.value}
                </span>
              </div>
              <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-5 max-w-[320px]">
                {stat.desc}
              </p>
            </div>
          ))}
          <p className="text-slate-400 text-xs font-normal font-['Inter'] mt-3 pl-1">
            Directional metrics for illustration; validated figures shown at publication.
          </p>
        </div>

      </div>
    </section>
  );
}
