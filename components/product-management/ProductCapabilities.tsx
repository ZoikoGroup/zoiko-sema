import React from "react";
import Image from "next/image";

export function ProductCapabilities() {
  const capabilities = [
    {
      num: "01",
      title: "Session & Identity Assurance",
      desc: "Identity attribution, session confidence, continuity, device context, review state.",
      link: "Identity Assurance detail →",
    },
    {
      num: "02",
      title: "Time & Activity Verification",
      desc: "Approved time/session signals, coverage, source, gaps, corrections.",
      link: "Time & Activity Verification →",
    },
    {
      num: "03",
      title: "Performance Intelligence",
      desc: "Contextual team/process insights with methodology, coverage, caveats, human review.",
      link: "Performance Analytics →",
    },
    {
      num: "04",
      title: "Policy & Location Context",
      desc: "Policy scope, role, schedule, jurisdiction, optional context, exception handling.",
      link: "Policies & Rules →",
    },
    {
      num: "05",
      title: "Integrity & Anomaly Detection",
      desc: "Explainable deviations with source evidence, confidence, reviewer, outcome.",
      link: "Alerts & Review Queue →",
    },
    {
      num: "06",
      title: "Evidence Capture & Audit Enablement",
      desc: "Source trail, policy version, decision rationale, reviewer, retention, export integrity.",
      link: "Compliance & Audit →",
    },
  ];

  return (
    <section className="relative w-full bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="text-violet-600 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest mb-4">
              02 — Platform
            </div>
            <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
              Six connected assurance and evidence capabilities.
            </h2>
          </div>
          <div className="text-left md:text-right text-slate-600 text-xs font-semibold font-['Inter'] leading-relaxed max-w-xs">
            Every layer produces evidence a reviewer can<br className="hidden md:block" /> trace back to source.
          </div>
        </div>

        {/* List */}
        <div className="border-t border-slate-200 mb-20">
          {capabilities.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row md:items-center py-6 border-b border-slate-200 gap-4 md:gap-8 hover:bg-slate-100 transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="w-8 text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                {item.num}
              </div>
              <div className="md:w-64 text-slate-900 text-sm font-bold font-['Inter']">
                {item.title}
              </div>
              <div className="flex-1 text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                {item.desc}
              </div>
              <div className="md:w-48 text-left md:text-right text-blue-600 text-xs font-semibold font-['Inter'] hover:underline cursor-pointer">
                {item.link}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Image Container */}
        <div className="w-full h-72 md:h-96 bg-slate-900 rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-x-0 -top-[20%] md:-top-[40%] w-full aspect-[16/9]">
            <img
              src="/product-management/showcase.png" // Placeholder
              alt="Assurance Capabilities Overview"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
