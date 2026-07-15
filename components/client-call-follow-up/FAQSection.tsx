"use client";

import React, { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24 flex justify-center">
      <div className="w-full max-w-[800px] px-6 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-3">
          <h3 className="text-blue-600 text-xs font-bold font-['Inter'] uppercase tracking-widest">
            FAQ
          </h3>
          <h2 className={`${plusJakartaSans.className} text-slate-900 text-3xl font-extrabold`}>
            Answers for client-facing and IT teams
          </h2>
        </div>
        
        <div className="w-full flex flex-col gap-4">
          {[
            { q: "What is Zoiko Sema Client Call Follow-Up?", a: "It's a Zoiko Sema use-case that helps client-facing teams convert external calls into clear recaps, commitments, owners, follow-up drafts, reminders, and client context." },
            { q: "Can Zoiko Sema draft follow-up messages after client calls?", a: "Yes, it can generate automated follow-up drafts based on meeting summaries." },
            { q: "Can client commitments be assigned to internal owners?", a: "Absolutely. Commitments can be automatically or manually assigned to team members." },
            { q: "Can client follow-ups sync with CRM or project tools?", a: "Yes, it integrates with major CRMs to log notes and follow-ups securely." },
            { q: "Can external sharing be governed?", a: "Yes, you have full control over what leaves the workspace with strict sharing and review policies." },
            { q: "Is Client Call Follow-Up only for sales teams?", a: "No, it's used by Customer Success, Consulting, Onboarding, and any client-facing team." }
          ].map((faq, i) => (
            <div key={i} className={`w-full border ${openIndex === i ? 'border-blue-200 bg-white shadow-sm' : 'border-slate-200 bg-white'} rounded-xl overflow-hidden`}>
              <div 
                className="p-5 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => toggleFaq(i)}
              >
                <span className={`${plusJakartaSans.className} text-slate-900 font-bold`}>{faq.q}</span>
                <div className="w-6 h-6 rounded-full bg-slate-100 flex justify-center items-center text-blue-600 shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={openIndex === i ? "M6 18L18 6M6 6l12 12" : "M12 6v6m0 0v6m0-6h6m-6 0H6"} />
                  </svg>
                </div>
              </div>
              {openIndex === i && (
                <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
