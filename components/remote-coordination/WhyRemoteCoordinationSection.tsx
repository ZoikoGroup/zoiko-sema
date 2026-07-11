"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function WhyRemoteCoordinationSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.2);

  const steps = [
    {
      num: "1",
      title: "Reduce context loss",
      icon: "▦",
      desc: "Keep updates, files, meetings, summaries, and tasks visible across locations and time zones.",
      bg: "bg-violet-100",
      text: "text-violet-600"
    },
    {
      num: "2",
      title: "Speed up handoffs",
      icon: "⇄",
      desc: "Give every region, shift, or teammate the context needed to continue work without waiting.",
      bg: "bg-sky-100",
      text: "text-sky-700"
    },
    {
      num: "3",
      title: "Support secure growth",
      icon: "⚿",
      desc: "Control guest access, AI summaries, retention, exports, and administration as teams scale.",
      bg: "bg-emerald-50",
      text: "text-green-600"
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-24 lg:py-32 font-sans antialiased">
      <div 
        ref={sectionRef} 
        className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-16 xl:gap-[112px] items-start"
      >
        
        {/* Left column */}
        <div className={`flex flex-col max-w-[475px] transition-all duration-1000 transform ${sectionIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <span className="text-violet-600 text-xs font-bold tracking-widest uppercase mb-6 font-['Inter']">
            WHY REMOTE COORDINATION
          </span>
          <h2 className="text-slate-900 text-4xl lg:text-[40px] font-bold leading-[1.1] mb-8 font-['Inter'] tracking-tight">
            Turn scattered remote<br className="hidden md:block" />work into aligned, visible<br className="hidden md:block" />coordination.
          </h2>
          <p className="text-gray-500 text-base leading-6 mb-12 font-['Inter'] max-w-[400px]">
            Three shifts that keep distributed teams moving without adding meetings.
          </p>
          <a href="#" className="flex items-center gap-2 text-violet-600 text-sm font-bold border-b border-violet-200 pb-1 w-max hover:border-violet-600 transition-colors">
            See how it works <span className="text-base leading-none">&rarr;</span>
          </a>
        </div>

        {/* Right column */}
        <div className={`flex-1 w-full flex flex-col transition-all duration-1000 delay-200 transform ${sectionIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 py-10 border-t border-slate-200 first:border-t-0 lg:first:border-t lg:first:pt-10 first:pt-0">
              <div className={`size-14 rounded-2xl flex items-center justify-center shrink-0 ${step.bg}`}>
                <span className={`text-xl font-extrabold ${step.text} font-['Inter']`}>
                  {step.num}
                </span>
              </div>
              <div className="flex flex-col justify-start pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-slate-900 text-xl font-bold font-['Inter']">{step.title}</h3>
                  <span className={`${step.text} text-lg`}>{step.icon}</span>
                </div>
                <p className="text-gray-500 text-base leading-6 font-['Inter'] max-w-[480px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
