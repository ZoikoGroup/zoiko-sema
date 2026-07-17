import React from "react";
import Image from "next/image";

export function ProductWorkerTransparency() {
  const steps = [
    {
      num: "01",
      title: "Pre-deployment notice",
      desc: "Purpose, data categories, sources, retention, rights, and jurisdiction-specific information.",
    },
    {
      num: "02",
      title: "In-product indicator",
      desc: "Visible state when session assurance or optional collection is active — no hidden mode.",
    },
    {
      num: "03",
      title: "Worker personal view",
      desc: "Own records, source, policy applied, exception explanation, and corrections.",
    },
    {
      num: "04",
      title: "Challenge & correction",
      desc: "Accessible submission, acknowledgment, status, independent escalation, and audit.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="text-teal-700 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest mb-4">
            06 — Worker Transparency
          </div>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight max-w-2xl">
            Every worker sees their own record, notice, and challenge route.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col gap-2 ${
                idx !== steps.length - 1 ? "lg:border-r border-slate-100 pr-8" : ""
              }`}
            >
              <div className="text-slate-400 text-xs font-normal font-['JetBrains_Mono'] mb-2">
                {step.num}
              </div>
              <h3 className="text-slate-900 text-sm font-bold font-['Inter']">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Wide Image */}
        <div className="w-full h-72 md:h-80 lg:h-96 bg-slate-900 rounded-3xl overflow-hidden relative shadow-sm">
          <img 
            src="/product-management/worker-transparency.png" 
            alt="Worker transparency view"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
