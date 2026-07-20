"use client";

import React, { useState } from "react";

export function PrivacyFAQ() {
  const faqs = [
    "What is ZoikoTime Privacy & Data Protection?",
    "What workforce data does ZoikoTime process?",
    "Does ZoikoTime monitor employees?",
    "Can workers see and correct their data?",
    "How long is workforce data retained?",
    "Does ZoikoTime guarantee GDPR or other legal compliance?"
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-violet-50 py-24">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-sm" />
            <span className="text-blue-600 text-xs font-bold font-['Inter'] uppercase leading-5 tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold font-['Inter'] leading-tight max-w-2xl">
            Questions about Privacy & Data Protection
          </h2>
        </div>

        {/* Image Container */}
        <div className="w-full rounded-[20px] overflow-hidden shadow-md border border-slate-200/50 relative aspect-[756/216] max-w-[756px] mb-12">
          <img 
            className="w-full h-full object-cover" 
            src="/privacy-data/faq-header.png" 
            alt="FAQ lock icon illustration" 
          />
        </div>

        {/* FAQ List */}
        <div className="w-full max-w-[756px] flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 p-6 flex flex-col cursor-pointer transition-colors hover:bg-slate-50"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-slate-900 text-base font-bold font-['Inter'] leading-6">
                    {faq}
                  </h3>
                  <div className="relative w-3.5 h-3.5 flex items-center justify-center flex-shrink-0 ml-4">
                    <div className="absolute w-3.5 h-0.5 bg-blue-600 rounded-xs" />
                    {!isOpen && <div className="absolute w-0.5 h-3.5 bg-blue-600 rounded-xs" />}
                  </div>
                </div>
                {isOpen && (
                  <div className="mt-4 text-slate-600 text-sm font-normal font-['Inter'] leading-5 pr-8">
                    Content for {faq} will go here based on the detailed privacy FAQs provided by ZoikoTime.
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
