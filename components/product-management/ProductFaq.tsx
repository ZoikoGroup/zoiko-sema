"use client";

import React, { useState } from "react";

export function ProductFaq() {
  const faqs = [
    {
      q: "What is ZoikoTime?",
      a: "A workforce assurance platform for verified time, policy health, explainable exceptions, and reviewable evidence.",
    },
    { q: "Does ZoikoTime show employees live?", a: "No, ZoikoTime is not a live surveillance tool. It verifies completed work sessions." },
    { q: "Does ZoikoTime rank workers or teams?", a: "No, ZoikoTime does not provide default individual rankings or public leaderboards." },
    { q: "What happens when ZoikoTime finds an exception?", a: "Exceptions are surfaced for contextual human review rather than automatic disciplinary action." },
    { q: "Can workers see or correct their own records?", a: "Yes, worker transparency, correction, and challenge routes are core to the platform." },
    { q: "Is AI used in the product?", a: "Yes, AI is used for classification, summarization, and anomaly explanation within approved scopes." },
    { q: "Can we integrate HRIS, payroll, and scheduling tools?", a: "Yes, ZoikoTime integrates securely with core systems of record while keeping them authoritative." },
    { q: "Can we start with one team?", a: "Yes, the platform supports phased rollouts starting with specific departments or teams." },
    { q: "Is the page real-time?", a: "Data is processed as sessions complete, providing near real-time insights rather than live surveillance." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="text-violet-600 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest mb-4">
            10 — FAQ
          </div>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
            Common questions answered.
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="border-t border-slate-200 py-5 cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-slate-900 text-sm font-bold font-['Inter']">
                    {faq.q}
                  </h3>
                  <span className="text-violet-600 text-lg font-bold font-['Inter']">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <div className="mt-4 text-slate-600 text-xs font-normal font-['Inter'] leading-5 pr-8">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
