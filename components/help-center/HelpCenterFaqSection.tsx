"use client";
import { useState } from "react";

export function HelpCenterFaqSection() {
  const faqs = [
    {
      question: "How do I export meeting summaries to Notion?",
      answer: "Go to Settings > Integrations and select 'Notion'. Authorize your workspace, then toggle the 'Auto-Export AI Recaps' option. You can choose specific databases for different channels."
    },
    {
      question: "Is my data used to train Zoiko's AI models?",
      answer: "No. Your data is isolated to your organization and is not used to train our base AI models. We maintain a strict zero-data retention policy for AI processing."
    },
    {
      question: "What is the uptime guarantee for Enterprise plans?",
      answer: "Our Enterprise plans include a 99.99% financially backed uptime guarantee (SLA). We provide 24/7 prioritized support for any critical disruptions."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white flex justify-center py-20 px-8 lg:px-12">
      <div className="w-full max-w-[1000px] flex flex-col items-center gap-10">
        <h2 className="text-center text-zinc-900 text-3xl font-semibold font-['Hanken_Grotesk'] leading-10">
          Frequently Asked Questions
        </h2>
        
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="w-full bg-white rounded-xl border border-neutral-300 flex flex-col overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button 
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 flex justify-between items-center text-left focus:outline-none focus-visible:bg-slate-50 transition-colors hover:bg-slate-50"
                >
                  <span className="text-zinc-900 text-lg sm:text-xl md:text-2xl font-semibold font-['Hanken_Grotesk'] pr-4">
                    {faq.question}
                  </span>
                  <div className={`transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L8 8L15 1" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
