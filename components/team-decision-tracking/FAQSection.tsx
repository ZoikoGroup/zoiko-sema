"use client";

import React, { useState } from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function FAQSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.2);

  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      q: "What is team decision tracking in Zoiko Sema?",
      a: "It turns decisions into records with owners, evidence, due dates, status, and follow-ups \u2014 connected to the meeting or thread they came from, with a full audit trail."
    },
    {
      q: "Can Zoiko Sema capture decisions from meetings and chats?",
      a: "Yes. Our AI can automatically detect likely decisions from your connected calendar meetings, chat threads, and project channels, suggesting them for human confirmation."
    },
    {
      q: "Can admins control AI decision capture?",
      a: "Absolutely. Admins can restrict AI capture to specific workspaces, require human approval for all records, and completely exclude sensitive spaces from AI processing."
    },
    {
      q: "Is Zoiko Sema just another task manager?",
      a: "No. Task managers track work execution. Zoiko Sema is a governance layer that tracks the decisions dictating that work, securely connecting them back to the original strategic discussions."
    },
    {
      q: "Is it suitable for regulated and enterprise teams?",
      a: "Yes. We provide enterprise-grade governance including granular role-based access controls, complete audit trails, data retention policies, and export restrictions."
    }
  ];

  return (
    <section className="w-full bg-white py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div 
        ref={sectionRef}
        className={`max-w-[1080px] mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-16 lg:gap-24 transition-all duration-1000 transform ${sectionIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        
        {/* Left Col */}
        <div className="w-full md:w-96 shrink-0">
          <span className="text-violet-600 text-xs font-bold uppercase tracking-wide font-['Inter'] mb-6 block">
            FAQ
          </span>
          <h2 className="text-slate-900 text-3xl font-bold font-['Inter'] leading-9 mb-6">
            Decision tracking, AI, and<br/>governance.
          </h2>
          <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-6 mb-8 w-64">
            Still have questions? Our team can walk<br/>you through it.
          </p>
          <button className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-colors">
            Talk to sales
          </button>
        </div>

        {/* Right Col (Accordion) */}
        <div className="flex-1 flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="w-full border-b border-slate-200">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-slate-900 text-base font-bold font-['Inter'] group-hover:text-violet-600 transition-colors pr-8">
                  {faq.q}
                </span>
                <span className="text-violet-600 text-xl shrink-0 font-light">
                  {openIndex === i ? "\u00D7" : "+"}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-6">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
