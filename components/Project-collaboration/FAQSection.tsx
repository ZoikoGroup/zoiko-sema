"use client";

import React, { useState } from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function FAQSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does Zoiko Sema support project collaboration?",
      a: "It brings project messages, meetings, files, tasks, decisions, summaries, and stakeholder updates into one governed workspace."
    },
    {
      q: "Can teams create dedicated project spaces?",
      a: "Yes. You can invite guests to specific project rooms with granular access controls. They'll only see what you allow them to see, and you can require reviews before any AI summaries are shared with them."
    },
    {
      q: "Can Zoiko Sema turn project meetings into follow-ups?",
      a: "Our AI reads across your project's chat, documents, and meetings to generate accurate, chronological summaries. It highlights risks, identifies action items, and drafts stakeholder updates that you can review and edit before sending."
    },
    {
      q: "Can external clients or partners join projects?",
      a: "Yes. You can invite external clients, contractors, agencies, and partners with project scope, expiry, approval, and revocation."
    },
    {
      q: "Can project decisions be tracked?",
      a: "Yes, you can track decisions, keep approvals, rationale, evidence, and source context easy to find."
    },
    {
      q: "Is Zoiko Sema suitable for enterprise project teams?",
      a: "Yes, Zoiko Sema is built for enterprise scale, providing governance, retention rules, and privacy-respecting visibility without employee tracking."
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div className="max-w-[700px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        <div ref={headRef} className={`flex flex-col items-center text-center transition-all duration-700 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="self-stretch h-10 text-center justify-center text-slate-900 text-3xl font-bold font-['Inter']">
            Project collaboration, security, and AI
          </h2>
        </div>

        <div className="w-full mt-16 flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-slate-100 last:border-0">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-5 flex items-center justify-between text-left transition-colors focus:outline-none"
                >
                  <h4 className="text-slate-900 text-sm font-bold font-['Inter'] pr-8">{faq.q}</h4>
                  <span className={`text-violet-600 text-lg transition-transform duration-300`}>
                    {isOpen ? '×' : '+'}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-500 text-xs font-normal font-['Inter'] leading-5 pr-8">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
