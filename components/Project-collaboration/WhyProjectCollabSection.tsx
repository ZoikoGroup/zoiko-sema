"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function WhyProjectCollabSection() {
  const { ref: containerRef, inView: containerIn } = useInView(0.2);

  const steps = [
    {
      num: "1",
      title: "Reduce project sprawl",
      desc: "Keep project messages, meetings, files, tasks, and decisions connected in one place.",
      iconBg: "bg-violet-100",
      numColor: "text-violet-600",
      symbol: "▦"
    },
    {
      num: "2",
      title: "Clarify ownership",
      desc: "Make owners, milestones, due dates, approvals, and blockers visible at a glance.",
      iconBg: "bg-sky-100",
      numColor: "text-sky-700",
      symbol: "◎"
    },
    {
      num: "3",
      title: "Protect delivery context",
      desc: "Control guest access, AI summaries, file sharing, retention, exports, and audit history.",
      iconBg: "bg-emerald-50",
      numColor: "text-emerald-600",
      symbol: "⚿"
    }
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-32 font-sans antialiased overflow-hidden">
      <div 
        ref={containerRef} 
        className={`max-w-[1248px] w-full mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_684px] gap-16 lg:gap-8 items-start transition-all duration-700 transform ${containerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        
        {/* Left Column */}
        <div className="flex flex-col items-start gap-6 pt-4 max-w-[440px]">
          <span className="text-violet-600 text-xs font-bold uppercase tracking-widest">
            WHY PROJECT COLLABORATION
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.15] tracking-tight">
            Turn scattered project work into one source of truth.
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-7">
            Three shifts that move a team from status chasing to shared, accountable delivery.
          </p>
          <a href="#" className="text-violet-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-2">
            See how it works <span>→</span>
          </a>
        </div>

        {/* Right Column */}
        <div className="w-full flex flex-col">
          {steps.map((step, i) => (
            <div key={i} className={`flex items-start gap-6 py-8 ${i === 0 ? "border-t-0 lg:border-t" : "border-t"} border-slate-200 transition-all duration-500 delay-${i * 100} transform ${containerIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              {/* Number Badge */}
              <div className={`size-14 ${step.iconBg} rounded-2xl flex items-center justify-center shrink-0`}>
                <span className={`${step.numColor} text-xl font-extrabold`}>{step.num}</span>
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-2 pt-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-slate-900 text-xl font-bold">{step.title}</h3>
                  <span className={`${step.numColor} text-base opacity-80 leading-none`}>{step.symbol}</span>
                </div>
                <p className="text-gray-500 text-base leading-6 max-w-[510px]">
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
