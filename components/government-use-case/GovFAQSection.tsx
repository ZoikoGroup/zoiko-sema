'use client';

import React, { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

export const GovFAQSection = () => {
  const faqs: FAQItem[] = [
    {
      question: "What is Zoiko Sema for government teams?",
      answer: "Zoiko Sema is a secure, governed communication workspace tailored for public sector teams to manage mail, meetings, calendars, messages, and files under explicit agency policies and record schedules."
    },
    {
      question: "Is Zoiko Sema FedRAMP authorized?",
      answer: "Sema runs on FedRAMP-authorized cloud infrastructure. Specific agency authorization boundaries and procurement packages are reviewed and provided upon deployment request."
    },
    {
      question: "Can government teams manage records in Zoiko Sema?",
      answer: "Yes. Sema provides records-aware workflows including classification, schedule mapping, retention, legal holds, and disposition reviews to support compliance with federal record acts."
    },
    {
      question: "Can AI summarize government meetings and briefings?",
      answer: "Yes, but with strict controls. All AI-generated meeting summaries, tasks, and briefing updates remain in a draft state and cannot be published or applied without human review and approval."
    },
    {
      question: "Can Sema handle classified or law-enforcement-sensitive data?",
      answer: "Zoiko Sema does not position for classified information, emergency dispatch, public benefit eligibility, or law-enforcement evidence without a separately approved and customized secure deployment."
    },
    {
      question: "Is Sema an emergency dispatch or public warning system?",
      answer: "No. Zoiko Sema is designed for internal administrative coordination, briefings, handoffs, and operational task tracking, and is not a public emergency warning or dispatch system."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-violet-50 flex justify-center w-full overflow-hidden text-slate-900">
      <div className="w-[1440px] h-[763px] relative flex-shrink-0 bg-violet-50">
          <div className="size-1.5 left-[698.61px] top-[94.89px] absolute bg-blue-600 rounded-full"></div>
          
          <div className="w-7 h-5 left-[712.61px] top-[88px] absolute text-center justify-center text-blue-600 text-xs font-bold font-inter uppercase leading-5 tracking-widest">
            FAQ
          </div>
          
          {/* Headline */}
          <div className="w-[635.31px] h-10 left-[402.44px] top-[120.80px] absolute text-center justify-center text-slate-900 text-3xl font-extrabold font-inter leading-10">
            Questions about Government coordination
          </div>
          
          {/* FAQ Accordion container */}
          <div className="w-[756px] left-[342px] top-[209.67px] absolute flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div key={index} className="w-[756px] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
                      <button 
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                      >
                          <span className="text-slate-900 text-base font-bold font-inter leading-6">{faq.question}</span>
                          <div className="relative w-4 h-4 flex items-center justify-center">
                              <div className="w-3.5 h-0.5 bg-blue-600 rounded-sm"></div>
                              <div className={`w-0.5 h-3.5 bg-blue-600 rounded-sm absolute transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0' : 'rotate-0'}`}></div>
                          </div>
                      </button>
                      
                      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-40 border-t border-slate-100' : 'max-h-0'}`}>
                          <div className="p-6 text-slate-600 text-sm font-normal font-inter leading-relaxed bg-slate-50">
                              {faq.answer}
                          </div>
                      </div>
                  </div>
                );
              })}
          </div>
      </div>
    </section>
  );
};
