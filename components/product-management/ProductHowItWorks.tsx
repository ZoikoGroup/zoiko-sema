import React from "react";

export function ProductHowItWorks() {
  const steps = [
    {
      title: "Purpose and scope are approved",
      desc: "Business purpose, affected workforce, jurisdictions, lawful basis, data categories, roles, retention, and prohibited uses are recorded.",
    },
    {
      title: "Approved sources connect",
      desc: "Identity, session, time, device, project, payroll, HRIS, calendar, or contextual signals are scoped to minimum necessary permissions.",
    },
    {
      title: "Data quality is evaluated",
      desc: "Freshness, completeness, conflict, duplicate, missing, and source-of-truth rules are applied before insight generation.",
    },
    {
      title: "Policy and context are applied",
      desc: "Role, employment type, schedule, location policy, jurisdiction, exception threshold, and comparison group are resolved.",
    },
    {
      title: "AI or rules assist classification",
      desc: "The system produces an explainable confidence, source list, policy reference, caveat, and recommended review priority.",
    },
    {
      title: "Authorized human reviews",
      desc: "Reviewer may confirm, correct, dismiss, request more information, reassign, redact, or escalate.",
    },
    {
      title: "Worker transparency and challenge",
      desc: "The person can see relevant data, explanation, correction route, and challenge status.",
    },
    {
      title: "Evidence is recorded",
      desc: "Inputs, policy version, model/rule version, reviewer, rationale, outcome, timestamps, retention, and export events are captured.",
    },
    {
      title: "Controls are reviewed",
      desc: "Policy effectiveness, false positives, bias, challenge outcomes, data gaps, and integration health inform governance changes.",
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="text-teal-400 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest mb-4">
            03 — How it works
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight max-w-2xl">
            Approved signal → context → AI assistance → human review → evidence.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Steps */}
          <div className="w-full lg:w-7/12 flex flex-col gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-5">
                {/* Number Badge */}
                <div className="w-6 h-6 flex-shrink-0 bg-slate-900 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400 flex items-center justify-center mt-0.5">
                  <span className="text-teal-400 text-[10px] font-normal font-['JetBrains_Mono'] leading-none">
                    {idx + 1}
                  </span>
                </div>
                {/* Content */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white text-sm font-bold font-['Inter']">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Images */}
          <div className="w-full lg:w-5/12 flex flex-col gap-8 relative">
            <div className="sticky top-24 flex flex-col gap-8">
              <div className="w-full h-80 lg:h-96 bg-white rounded-3xl overflow-hidden relative shadow-2xl">
                <img 
                  src="/product-management/how-it-works-1.png"
                  alt="Process illustration 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-80 lg:h-96 bg-white rounded-3xl overflow-hidden relative shadow-2xl">
                <img 
                  src="/product-management/how-it-works-2.png"
                  alt="Process illustration 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
