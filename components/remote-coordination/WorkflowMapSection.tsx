"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function WorkflowMapSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  const steps = [
    {
      num: "1",
      eyebrow: "ASYNC UPDATE",
      title: "An update arrives",
      desc: "A teammate posts an async update, blocker, file, or meeting note in a coordination space.",
      colorClass: "bg-violet-600",
      stats: [
        { label: "From", value: "Ava (AMER)", dot: "bg-slate-400", valBg: "bg-gray-100", valText: "text-gray-500" },
        { label: "Type", value: "Status + blocker", dot: "bg-orange-400", valBg: "bg-yellow-50", valText: "text-yellow-600" }
      ]
    },
    {
      num: "2",
      eyebrow: "CONTEXT GROUPED",
      title: "Context is grouped",
      desc: "Zoiko Sema links the update to a channel, meeting, project, owner, file, or client context.",
      colorClass: "bg-sky-700",
      stats: [
        { label: "Channel", value: "#platform", dot: "bg-slate-400", valBg: "bg-gray-100", valText: "text-gray-500" },
        { label: "Project", value: "Q3 Launch", dot: "bg-violet-600", valBg: "bg-violet-100", valText: "text-violet-600" }
      ]
    },
    {
      num: "3",
      eyebrow: "AI SUMMARY",
      title: "AI summarizes status",
      desc: "AI prepares a coordination summary covering status, blockers, risks, decisions, and next actions.",
      colorClass: "bg-green-600",
      stats: [
        { label: "Status", value: "On track", dot: "bg-emerald-600", valBg: "bg-emerald-50", valText: "text-green-600" },
        { label: "Blockers", value: "2 flagged", dot: "bg-orange-400", valBg: "bg-yellow-50", valText: "text-yellow-600" }
      ]
    },
    {
      num: "4",
      eyebrow: "LEAD CONFIRMS",
      title: "Lead confirms priority",
      desc: "The team lead confirms priority, handoff owner, due date, and audience before work moves.",
      colorClass: "bg-yellow-600",
      stats: [
        { label: "Priority", value: "High", dot: "bg-orange-400", valBg: "bg-yellow-50", valText: "text-yellow-600" },
        { label: "Handoff owner", value: "Ravi (APAC)", dot: "bg-slate-400", valBg: "bg-gray-100", valText: "text-gray-500" }
      ]
    },
    {
      num: "5",
      eyebrow: "HANDOFF VISIBLE",
      title: "Handoff stays visible",
      desc: "The next region or teammate receives the relevant context, evidence, and follow-up path.",
      colorClass: "bg-indigo-800",
      stats: [
        { label: "To region", value: "APAC", dot: "bg-slate-400", valBg: "bg-gray-100", valText: "text-gray-500" },
        { label: "Context", value: "Attached", dot: "bg-emerald-600", valBg: "bg-emerald-50", valText: "text-green-600" }
      ]
    },
    {
      num: "6",
      eyebrow: "PROGRESS REVIEW",
      title: "Progress is reviewed",
      desc: "The workspace keeps status, blockers, meeting evidence, task history, and audit events connected.",
      colorClass: "bg-pink-500",
      stats: [
        { label: "Updates", value: "18 this week", dot: "bg-emerald-600", valBg: "bg-emerald-50", valText: "text-green-600" },
        { label: "Handoffs", value: "6 completed", dot: "bg-slate-400", valBg: "bg-gray-100", valText: "text-gray-500" }
      ]
    }
  ];

  return (
    <section className="w-full bg-white py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        {/* Header */}
        <div ref={headRef} className={`flex flex-col items-center text-center gap-6 max-w-[700px] transition-all duration-700 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-600 text-xs font-bold uppercase tracking-widest font-['Inter']">
            WORKFLOW MAP
          </span>
          <h2 className="text-slate-900 text-4xl lg:text-[40px] font-bold font-['Inter'] leading-[1.15]">
            From an update to a clean, time-zone-<br className="hidden md:block"/>aware handoff.
          </h2>
          <p className="text-slate-400 text-base font-normal font-['Inter'] leading-6">
            Six steps that keep distributed work visible, owned, and continuous.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div ref={gridRef} className={`w-full max-w-[1200px] mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 transform ${gridIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {steps.map((step, i) => (
            <div key={i} className="w-full h-auto min-h-[300px] bg-white rounded-2xl outline outline-1 outline-violet-100 overflow-hidden relative flex flex-col pt-7 px-6 pb-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Top colored border bar */}
              <div className={`absolute top-0 left-0 w-full h-1 ${step.colorClass}`}></div>
              
              {/* Icon and Eyebrow */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${step.colorClass}`}>
                  <span className="text-white text-lg font-extrabold font-['Inter']">{step.num}</span>
                </div>
                <span className="text-slate-400 text-xs font-bold tracking-wide font-['Inter'] uppercase">
                  {step.eyebrow}
                </span>
              </div>
              
              {/* Content */}
              <h4 className="text-slate-900 text-base font-bold font-['Inter'] mb-2">
                {step.title}
              </h4>
              <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-5 flex-1 mb-6">
                {step.desc}
              </p>
              
              {/* Stats Footer */}
              <div className="pt-5 border-t border-gray-100 flex flex-col gap-3">
                {step.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <div className={`size-1.5 rounded-sm ${stat.dot}`}></div>
                      <span className="text-slate-900 text-xs font-semibold font-['Inter']">{stat.label}</span>
                    </div>
                    <div className={`px-2 py-0.5 rounded-lg ${stat.valBg}`}>
                      <span className={`${stat.valText} text-[10px] font-bold font-['Inter']`}>{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
