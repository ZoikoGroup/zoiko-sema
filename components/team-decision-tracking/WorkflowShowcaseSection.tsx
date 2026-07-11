"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function WorkflowShowcaseSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.2);

  const steps = [
    {
      num: "1",
      title: "Discussion starts",
      tag: "DISCUSSION",
      tagColor: "bg-violet-100 text-violet-600",
      desc: "A decision signal appears in a meeting, chat, channel, file comment, or project thread.",
      iconBg: "bg-violet-600",
      shadow: "shadow-[0px_12px_24px_-12px_rgba(108,79,224,1.00)]"
    },
    {
      num: "2",
      title: "AI detects the signal",
      tag: "AI DETECTS",
      tagColor: "bg-sky-100 text-sky-700",
      desc: "Zoiko Sema suggests a possible decision with its source evidence attached.",
      iconBg: "bg-sky-700",
      shadow: "shadow-[0px_12px_24px_-12px_rgba(42,111,176,1.00)]"
    },
    {
      num: "3",
      title: "A person confirms",
      tag: "HUMAN CONFIRMS",
      tagColor: "bg-emerald-50 text-green-600",
      desc: "An authorized user reviews, edits, approves, or rejects the decision record.",
      iconBg: "bg-green-600",
      shadow: "shadow-[0px_12px_24px_-12px_rgba(31,138,91,1.00)]"
    },
    {
      num: "4",
      title: "Decision is recorded",
      tag: "RECORDED",
      tagColor: "bg-yellow-50 text-yellow-600",
      desc: "It appears in board or list view with owner, due date, status, and evidence.",
      iconBg: "bg-yellow-600",
      shadow: "shadow-[0px_12px_24px_-12px_rgba(183,121,31,1.00)]"
    },
    {
      num: "5",
      title: "Follow-ups stay attached",
      tag: "FOLLOW-UP",
      tagColor: "bg-violet-100 text-indigo-800",
      desc: "Tasks, files, meeting summaries, and related comments remain linked.",
      iconBg: "bg-indigo-800",
      shadow: "shadow-[0px_12px_24px_-12px_rgba(75,58,158,1.00)]"
    },
    {
      num: "6",
      title: "Audit trail remains",
      tag: "AUDIT",
      tagColor: "bg-pink-100 text-pink-500",
      desc: "Permitted users can review changes and export evidence where allowed.",
      iconBg: "bg-pink-500",
      shadow: "shadow-[0px_12px_24px_-12px_rgba(192,81,138,1.00)]"
    }
  ];

  return (
    <section className="w-full bg-[#F8F9FC] py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div 
        ref={sectionRef} 
        className={`max-w-[800px] mx-auto px-6 md:px-8 flex flex-col items-center transition-all duration-1000 transform ${sectionIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <span className="text-violet-600 text-xs font-bold uppercase tracking-wide font-['Inter'] mb-6">
          WORKFLOW SHOWCASE
        </span>
        <h2 className="text-slate-900 text-4xl font-bold font-['Inter'] text-center leading-[1.15] mb-20 max-w-[560px]">
          From discussion to a decision that<br className="hidden md:block"/>sticks.
        </h2>

        <div className="relative w-full max-w-[760px] mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-[28px] bottom-[28px] w-0.5 bg-violet-200 hidden md:block"></div>

          <div className="flex flex-col gap-8 w-full relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start gap-6 group">
                {/* Step Number */}
                <div className={`size-14 rounded-2xl ${step.iconBg} ${step.shadow} flex items-center justify-center shrink-0 z-10 mx-auto md:mx-0`}>
                  <span className="text-white text-xl font-extrabold font-['Inter']">
                    {step.num}
                  </span>
                </div>
                
                {/* Content Card */}
                <div className="w-full bg-white rounded-2xl p-6 outline outline-1 outline-violet-100 hover:outline-violet-300 transition-colors shadow-sm relative top-0 md:top-[-4px]">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-slate-900 text-base font-bold font-['Inter']">
                      {step.title}
                    </h3>
                    <div className={`px-2 py-0.5 rounded-md ${step.tagColor} flex items-center justify-center`}>
                      <span className="text-[9.5px] font-bold font-['Inter'] tracking-wide uppercase">
                        {step.tag}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-5">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
