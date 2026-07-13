"use client";

import React, { useState } from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function FAQSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: faqRef, inView: faqIn } = useInView(0.1);

  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      q: "How does Zoiko Sema help remote teams coordinate work?",
      a: "It brings chat, meetings, shared spaces, summaries, files, handoffs, and follow-ups into one governed workspace."
    },
    {
      q: "Can teams use Zoiko Sema for async standups?",
      a: "Yes. Teammates can post async updates, blockers, and files in a shared space without needing to schedule a live meeting."
    },
    {
      q: "Does Zoiko Sema support time-zone coordination?",
      a: "Yes. It respectfully shows overlap windows and response expectations based on local time zones without tracking employee activity."
    },
    {
      q: "Can AI summarize remote-team updates?",
      a: "Yes. AI drafts coordination summaries covering status, blockers, and next actions, which a person then reviews and confirms."
    },
    {
      q: "Can external clients or partners join remote spaces?",
      a: "Yes. You can invite guests to specific spaces with strictly scoped access, expiry rules, and permissions."
    },
    {
      q: "Is Zoiko Sema suitable for enterprise remote teams?",
      a: "Yes. It includes robust governance controls like SSO, retention policies, and role-based access for large, regulated organizations."
    }
  ];

  return (
    <section className="w-full bg-slate-50 pt-8 pb-24 lg:pt-12 lg:pb-32 font-sans antialiased overflow-hidden">
      <div className="max-w-[756px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        <div ref={headRef} className={`flex flex-col items-center text-center transition-all duration-700 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-slate-900 text-3xl font-bold font-['Inter']">
            Remote coordination, security, and AI
          </h2>
        </div>

        <div ref={faqRef} className={`w-full mt-9 flex flex-col transition-all duration-1000 delay-200 transform ${faqIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {faqs.map((faq, i) => (
            <div key={i} className="w-full border-b border-slate-200">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
              >
                <span className="text-slate-900 text-base font-bold font-['Inter'] group-hover:text-violet-600 transition-colors pr-8">
                  {faq.q}
                </span>
                <span className="text-violet-600 text-xl font-light shrink-0">
                  {openIndex === i ? "\u00d7" : "+"}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-6 pr-8">
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
