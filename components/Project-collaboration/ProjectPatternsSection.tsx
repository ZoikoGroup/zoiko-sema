"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function ProjectPatternsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  const patterns = [
    {
      before: "Scattered",
      after: "Project room",
      title: "Project rooms",
      desc: "Dedicated spaces for campaigns, launches, client work, internal programs, and operational initiatives.",
      descBr: "internal programs, and operational initiatives."
    },
    {
      before: "Tasks",
      after: "Milestones",
      title: "Milestone boards",
      desc: "Track owners, due dates, status, blockers, and dependencies across project phases.",
      descBr: "dependencies across project phases."
    },
    {
      before: "Meeting",
      after: "Actions",
      title: "Meeting follow-up",
      desc: "Turn project meetings into summaries, decisions, tasks, and stakeholder updates.",
      descBr: "and stakeholder updates."
    },
    {
      before: "Decisions",
      after: "Logged",
      title: "Decision logs",
      desc: "Keep approvals, rationale, evidence, and source context easy to find.",
      descBr: "easy to find."
    },
    {
      before: "Files",
      after: "Linked",
      title: "File context",
      desc: "Link project documents to meetings, messages, tasks, and decisions.",
      descBr: "and decisions."
    },
    {
      before: "Progress",
      after: "Update",
      title: "Stakeholder updates",
      desc: "Share reviewed project summaries with internal leaders or clients.",
      descBr: "or clients."
    }
  ];

  return (
    <section className="w-full bg-slate-100 py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        {/* Header */}
        <div ref={headRef} className={`flex flex-col items-center text-center gap-4 transition-all duration-700 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-600 text-xs font-bold uppercase tracking-widest font-['Inter']">
            PROJECT PATTERNS
          </span>
          <h2 className="text-slate-900 text-4xl font-bold font-['Inter'] w-[611.25px] max-w-full leading-[1.15]">
            Built for the way real projects actually<br/>run.
          </h2>
        </div>

        {/* 3x2 Grid */}
        <div ref={gridRef} className={`w-full max-w-[1200px] mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center xl:place-items-start transition-all duration-500 transform ${gridIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {patterns.map((p, i) => (
            <div 
              key={i} 
              className="w-full max-w-96 xl:w-96 h-40 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 flex flex-col px-[24.8px] py-[24.8px]"
            >
              <div className="flex items-center gap-[9.3px]">
                <div className="h-6 bg-violet-50 rounded-lg px-[11px] flex items-center justify-center">
                  <span className="text-slate-900 text-xs font-bold font-['Inter']">{p.before}</span>
                </div>
                <span className="text-violet-600 text-sm font-normal font-['Inter']">&rarr;</span>
                <div className="h-6 bg-violet-600 rounded-lg px-[11px] flex items-center justify-center">
                  <span className="text-white text-xs font-bold font-['Inter']">{p.after}</span>
                </div>
              </div>
              <div className="mt-[15.2px]">
                <h3 className="text-slate-900 text-base font-bold font-['Inter']">{p.title}</h3>
              </div>
              <div className="mt-[8.6px]">
                <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-5">
                  {p.desc.replace(p.descBr, '')}<br className="hidden md:block"/>{p.descBr}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
