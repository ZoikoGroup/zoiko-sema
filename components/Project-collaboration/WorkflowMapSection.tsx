"use client";

import React, { useState } from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function WorkflowMapSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { num: 1, title: "Create project space", eyebrow: "STEP 1 · PROJECT SETUP", desc: "Set the project name, purpose, team, client or department, visibility, owner, and starting template." },
    { num: 2, title: "Plan milestones", eyebrow: "STEP 2 · PLANNING", desc: "Break the project down into phases, assign owners, set due dates, and map dependencies." },
    { num: 3, title: "Collaborate in context", eyebrow: "STEP 3 · EXECUTION", desc: "Keep all messages, meetings, and files connected directly to the work they support." },
    { num: 4, title: "Capture decisions", eyebrow: "STEP 4 · ALIGNMENT", desc: "Log approvals, rationale, and evidence so everyone understands why a direction was chosen." },
    { num: 5, title: "Track delivery", eyebrow: "STEP 5 · REPORTING", desc: "Generate reviewed stakeholder updates to keep clients and leadership in the loop." },
    { num: 6, title: "Close with evidence", eyebrow: "STEP 6 · HANDOFF", desc: "Archive the project space with a complete audit trail of every decision, task, and file." }
  ];

  return (
    <section className="w-full bg-slate-50 py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        {/* Header */}
        <div ref={headRef} className={`flex flex-col items-center text-center gap-6 max-w-[700px] transition-all duration-700 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-600 text-xs font-bold uppercase tracking-widest">
            WORKFLOW MAP
          </span>
          <h2 className="text-slate-900 text-4xl font-bold font-['Inter'] w-[643.36px] max-w-full">
            From kickoff to a clean, evidence-ready<br/>close.
          </h2>
          <p className="text-slate-500 text-base font-normal font-['Inter']">
            Six steps that keep every project organized, owned, and auditable.
          </p>
        </div>

        {/* Timeline */}
        <div className="w-full max-w-[1060px] mt-16 relative">
          {/* Connector Line */}
          <div className="absolute top-6 left-[10%] right-[10%] sm:left-[8%] sm:right-[8%] h-[2px] bg-slate-200 -z-0" />
          
          <div className="flex justify-between relative z-10">
            {steps.map((step) => {
              const isActive = activeStep === step.num;
              return (
                <div 
                  key={step.num} 
                  className="flex flex-col items-center cursor-pointer group flex-1"
                  onClick={() => setActiveStep(step.num)}
                >
                  <div className={`size-12 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-violet-600 text-white shadow-[0px_12px_26px_-10px_rgba(108,79,224,0.60)]' : 'bg-white text-violet-600 border-2 border-violet-100 group-hover:border-violet-300'}`}>
                    <span className="text-base font-extrabold">{step.num}</span>
                  </div>
                  <span className={`mt-4 text-[11px] sm:text-xs font-bold text-center transition-colors ${isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Card */}
        <div className="w-full max-w-[1060px] h-auto lg:h-[420px] mt-12 bg-white rounded-[24px] shadow-[0px_30px_64px_-34px_rgba(20,22,60,0.08)] outline outline-1 outline-violet-100 flex flex-col lg:flex-row overflow-hidden relative">
          
          {/* Left Content */}
          <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center">
            <div className="bg-violet-50 rounded-full px-4 py-1.5 self-start mb-6">
              <span className="text-violet-600 text-[10px] font-bold tracking-widest uppercase">
                {steps[activeStep - 1].eyebrow}
              </span>
            </div>
            
            <h3 className="text-slate-900 text-[32px] font-bold mb-4 font-['Inter'] tracking-tight">
              {steps[activeStep - 1].title}
            </h3>
            
            <p className="text-slate-500 text-[15px] leading-6 max-w-[380px] min-h-[72px] font-['Inter']">
              {steps[activeStep - 1].desc}
            </p>

            <div className="flex items-center gap-3 mt-8">
              <button 
                onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                disabled={activeStep === 1}
                className="size-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-slate-600"
              >
                &larr;
              </button>
              <button 
                onClick={() => setActiveStep(Math.min(6, activeStep + 1))}
                disabled={activeStep === 6}
                className="size-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-slate-600"
              >
                &rarr;
              </button>
              <span className="text-slate-400 text-xs font-bold ml-2">
                {activeStep} / 6
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[540px] h-auto lg:h-full flex items-center justify-center shrink-0 p-4 lg:p-0">
            <img 
              src="/Project/three.png" 
              alt="UI Mockup" 
              className="w-[516px] h-80 object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
