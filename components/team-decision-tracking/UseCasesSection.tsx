"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function UseCasesSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.2);

  const useCases = [
    {
      title: "Leadership teams",
      desc: "Track strategic decisions, ownership, rationale, and follow-up commitments.",
      linkText: "Get a leadership demo \u2192",
      icon: "\u25C6", // ◆
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600"
    },
    {
      title: "Project teams",
      desc: "Keep scope, priority, dependency, and launch decisions connected to project work.",
      linkText: "View project flow \u2192",
      icon: "\u25A4", // ▥ - visually similar to horizontal stripes block
      iconBg: "bg-sky-100",
      iconColor: "text-sky-700"
    },
    {
      title: "Client teams",
      desc: "Capture client approvals, commitments, next steps, and evidence after calls.",
      linkText: "Explore client follow-up \u2192",
      icon: "\u260F", // ☏
      iconBg: "bg-emerald-50",
      iconColor: "text-green-600"
    },
    {
      title: "Remote teams",
      desc: "Prevent decisions from getting lost across time zones and async updates.",
      linkText: "See remote workflow \u2192",
      icon: "\u21C4", // ⇄
      iconBg: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      title: "Operations teams",
      desc: "Create clear operational decision records linked to owners and dates.",
      linkText: "Talk to sales \u2192",
      icon: "\u2699", // ⚙
      iconBg: "bg-violet-100",
      iconColor: "text-indigo-800"
    },
    {
      title: "Regulated teams",
      desc: "Support audit-ready decision trails with permissions, retention, and export controls.",
      linkText: "Explore regulated workflows \u2192",
      icon: "\u2696", // ⚖
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500"
    }
  ];

  return (
    <section className="w-full bg-[#F8F9FC] pt-24 pb-16 lg:pt-32 lg:pb-20 font-sans antialiased overflow-hidden">
      <div 
        ref={sectionRef} 
        className={`max-w-[1168px] mx-auto px-6 md:px-8 flex flex-col items-center transition-all duration-1000 transform ${sectionIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <span className="text-violet-600 text-xs font-bold uppercase tracking-wide font-['Inter'] mb-6 text-center">
          USE CASES BY TEAM TYPE
        </span>
        <h2 className="text-slate-900 text-4xl font-bold font-['Inter'] text-center leading-[1.15] mb-20 max-w-[680px]">
          Decision tracking that fits how your team<br className="hidden md:block"/>works.
        </h2>

        {/* 2-Column Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, i) => (
            <div key={i} className="bg-white rounded-2xl p-[23px] outline outline-1 outline-offset-[-1px] outline-violet-100 shadow-sm hover:shadow-md transition-all group flex items-start gap-5">
              
              <div className={`size-12 shrink-0 ${useCase.iconBg} rounded-2xl flex items-center justify-center`}>
                <span className={`${useCase.iconColor} text-xl font-normal font-['Inter']`}>
                  {useCase.icon}
                </span>
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-slate-900 text-base font-bold font-['Inter'] mb-[8px]">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-5 mb-[13px]">
                  {useCase.desc}
                </p>
                
                <div className="text-violet-600 text-xs font-bold font-['Inter'] hover:text-violet-700 transition-colors cursor-pointer w-fit">
                  {useCase.linkText}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
