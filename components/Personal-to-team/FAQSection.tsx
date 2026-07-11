"use client";

import React, { useState } from "react";
import { useInView } from "./useInView";

export function FAQSection() {
  const { ref: containerRef, inView: containerIn } = useInView(0.2);
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      q: "What does Personal-to-Team mean in Zoiko Sema?",
      a: <>You start with private notes, drafts, saved messages, summaries, and tasks — then review and<br/>share only the selected context into team spaces, keeping the rest private.</>
    },
    {
      q: "Are my personal notes visible to my team?",
      a: "No, all content captured in your personal hub remains private to you until you explicitly choose to share it."
    },
    {
      q: "Can AI automatically share my notes?",
      a: "No, AI can suggest follow-ups and draft team updates, but sharing always requires human review and approval."
    },
    {
      q: "Can teams control who sees shared context?",
      a: "Yes, you have full control over audience visibility, role-based access, and optional expiration limits."
    },
    {
      q: "Is this useful for small teams and enterprises?",
      a: "Absolutely. Small teams benefit from faster alignment, while enterprises gain critical governance and audit controls."
    },
    {
      q: "Can shared context be exported or audited?",
      a: "Yes, team-level shared context maintains full audit trails and can be exported for compliance and record-keeping."
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-20 md:py-24 font-sans antialiased overflow-hidden pb-32">
      <div className="max-w-[760px] mx-auto px-6 flex flex-col items-center">
        
        <h2 ref={containerRef} className={`ptt-hidden ${containerIn ? "ptt-visible" : ""} text-slate-900 text-3xl sm:text-4xl font-extrabold mb-14 text-center`}>
          Privacy, sharing, AI, and team adoption
        </h2>

        <div className={`ptt-group ${containerIn ? "ptt-group-in" : ""} w-full flex flex-col`}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="ptt-item border-b border-slate-200">
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full py-6 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors focus:outline-none"
                >
                  <span className="text-slate-900 text-base font-bold pr-8">
                    {faq.q}
                  </span>
                  <span className={`text-xl font-normal transition-transform duration-200 ${isOpen ? 'text-violet-600 rotate-45' : 'text-violet-600'}`}>
                    +
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-500 text-sm leading-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
