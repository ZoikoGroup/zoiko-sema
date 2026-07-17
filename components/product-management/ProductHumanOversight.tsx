import React from "react";
import Image from "next/image";

export function ProductHumanOversight() {
  const tableData = [
    {
      title: "AI purpose",
      desc: "Classification, summarization, prioritization, anomaly explanation, or recommendation only within approved scope.",
    },
    {
      title: "Source disclosure",
      desc: "Show source systems, coverage, missing data, policy, rule/model version, and timestamps.",
    },
    {
      title: "Confidence",
      desc: "Present calibrated confidence or uncertainty with a plain-language explanation; never show false precision.",
    },
    {
      title: "Human review",
      desc: "Named authorized reviewer sees relevant sources, caveats, worker challenge, and prior decisions.",
    },
    {
      title: "Permitted outcomes",
      desc: "Confirm, correct, dismiss, request information, reassign, redact, escalate, or no action.",
    },
    {
      title: "Prohibited automation",
      desc: "No automatic discipline, termination, pay denial, promotion, or worker ranking from AI alone.",
    },
    {
      title: "Appeal / challenge",
      desc: "Record worker explanation, reviewer independence, evidence considered, decision, and rationale.",
    },
    {
      title: "Fallback",
      desc: "Manual review and reporting remain usable when AI is disabled, unavailable, or not licensed.",
    },
  ];

  return (
    <section className="relative w-full bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="text-violet-600 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest mb-4">
            05 — Human Oversight
          </div>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight max-w-2xl">
            AI classifies and prioritizes. A named human decides.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Column (Table) */}
          <div className="w-full lg:flex-1 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden shadow-sm flex flex-col">
            {tableData.map((row, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col md:flex-row items-start md:items-center px-6 md:px-8 py-5 gap-2 md:gap-8 ${
                  idx !== tableData.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <div className="w-full md:w-56 flex-shrink-0 text-violet-600 text-sm font-bold font-['Inter']">
                  {row.title}
                </div>
                <div className="text-slate-600 text-sm font-normal font-['Inter'] leading-5 flex-1">
                  {row.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Image) */}
          <div className="w-full lg:w-80 flex-shrink-0 flex">
            <div className="w-full bg-slate-900 rounded-3xl overflow-hidden shadow-sm relative min-h-[400px] lg:min-h-0 aspect-[4/5] lg:aspect-auto">
              <img 
                src="/product-management/human-oversight-1.png" 
                alt="Human Review Dashboard snippet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
