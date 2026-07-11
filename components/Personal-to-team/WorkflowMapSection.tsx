"use client";

import React from "react";
import { useInView } from "./useInView";

export function WorkflowMapSection() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: timelineRef, inView: timelineIn } = useInView(0.15);
  const { ref: contentRef, inView: contentIn } = useInView(0.1);

  const steps = [
    { num: "1", label: "Capture privately", active: true },
    { num: "2", label: "Organize context", active: false },
    { num: "3", label: "Review before sharing", active: false },
    { num: "4", label: "Create team space", active: false },
    { num: "5", label: "Assign ownership", active: false },
    { num: "6", label: "Retain history", active: false },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-24 font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center gap-14">
        
        <div ref={textRef} className={`ptt-hidden ${textIn ? "ptt-visible" : ""} text-center flex flex-col items-center gap-5`}>
          <span className="text-violet-600 text-xs font-bold uppercase tracking-widest">
            WORKFLOW MAP
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold leading-tight">
            A safe path from private capture to<br className="hidden sm:block" />accountable handoff.
          </h2>
          <p className="text-slate-400 text-base">
            Six steps &mdash; each keeps context intact and sharing intentional.
          </p>
        </div>

        <div className="w-full max-w-[1060px] flex flex-col gap-10 items-center">
          
          {/* Timeline */}
          <div ref={timelineRef} className={`ptt-hidden ${timelineIn ? "ptt-visible" : ""} w-full relative h-24 hidden md:block`}>
            {/* Connecting Line */}
            <div className="absolute top-[24px] left-[40px] right-[40px] h-[3px] bg-violet-100 rounded-full" />
            
            <div className="relative w-full flex justify-between">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-4 w-28 relative z-10" style={{ transform: 'translateX(-50%)', left: `${(i / (steps.length - 1)) * 100}%`, position: 'absolute' }}>
                  <div className={`size-12 rounded-full flex items-center justify-center font-extrabold text-base border-2 ${step.active ? 'bg-violet-600 text-white border-violet-600 shadow-[0px_12px_26px_-10px_rgba(108,79,224,0.60)]' : 'bg-white text-violet-600 border-zinc-200'}`}>
                    {step.num}
                  </div>
                  <span className={`text-center text-xs font-bold leading-4 ${step.active ? 'text-slate-900' : 'text-slate-400'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Panel */}
          <div ref={contentRef} className={`ptt-card ${contentIn ? "ptt-float" : ""} w-full max-w-[1060px] bg-white rounded-3xl shadow-[0px_20px_40px_-20px_rgba(20,22,60,0.15)] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10 mx-auto`}>
            
            {/* Text Side */}
            <div className="flex-1 flex flex-col items-start w-full">
              <div className="bg-violet-50 rounded-full px-4 py-1.5 mb-6">
                <span className="text-violet-600 text-xs font-bold tracking-widest uppercase">
                  STEP 1 &middot; PERSONAL HUB
                </span>
              </div>
              <h3 className="text-slate-900 text-3xl font-bold leading-8 mb-4">Capture privately</h3>
              <p className="text-gray-500 text-base leading-6 mb-10 max-w-[384px]">
                Collect notes, drafts, meeting takeaways, tasks, files, and<br/>personal follow-ups in one private space.
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <button className="size-11 rounded-full border border-zinc-200 flex items-center justify-center text-slate-900 hover:bg-slate-50 transition-colors">
                  ←
                </button>
                <button className="size-11 rounded-full border border-zinc-200 flex items-center justify-center text-slate-900 hover:bg-slate-50 transition-colors">
                  →
                </button>
                <span className="text-slate-400 text-xs font-bold ml-2">1 / 6</span>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-[516px] h-64 sm:h-80 bg-gray-50 rounded-2xl overflow-hidden relative shrink-0">
               <img src="/Personal/two.png" className="absolute top-0 left-0 w-full h-full object-cover" alt="Personal Hub Workflow" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
