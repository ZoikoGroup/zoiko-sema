"use client"
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer?: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: 'What is Zoiko Sema Team Collaboration?',
      answer: 'A secure workspace for team messaging, meetings, channels, files, tasks, AI-assisted summaries, and shared follow-up — all in one place.'
    },
    {
      question: 'How does Zoiko Sema help teams collaborate?'
    },
    {
      question: 'Can Zoiko Sema support remote and hybrid teams?'
    },
    {
      question: 'Does Zoiko Sema support secure collaboration with external partners?'
    },
    {
      question: 'How does AI support collaboration?'
    },
    {
      question: 'What tools can Zoiko Sema integrate with?'
    },
    {
      question: 'Is Zoiko Sema suitable for enterprise teams?'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-20 font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-11">
        
        {/* Header Block Section */}
        <div className="max-w-[720px] w-full text-center flex flex-col items-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block font-['Inter']">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-10 font-['Plus_Jakarta_Sans']">
            Answers for teams and IT
          </h2>
        </div>

        {/* Accordion Container List */}
        <div className="w-full max-w-[820px] flex flex-col gap-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`w-full bg-white dark:bg-slate-900 rounded-xl transition-all duration-200 border ${
                  isOpen 
                    ? 'border-indigo-600 dark:border-indigo-500 shadow-[0px_1px_2px_0px_rgba(16,22,60,0.06)]' 
                    : 'border-slate-200 dark:border-slate-800'
                } overflow-hidden`}
              >
                {/* Trigger Button Row */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left font-['Plus_Jakarta_Sans'] group focus:outline-none"
                >
                  <span className="text-slate-900 dark:text-white text-base font-bold leading-6 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.question}
                  </span>
                  
                  {/* Plus / Minus Indicator Icon Badge */}
                  <div className={`size-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isOpen 
                      ? 'text-indigo-600 dark:text-indigo-400' 
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}>
                    <span className="text-lg font-semibold leading-none select-none">
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {/* Animated Expandable Content Base */}
                <div 
                  className={`transition-all duration-200 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="px-5 pb-5 pt-1 text-slate-500 dark:text-slate-400 text-base font-normal font-['Inter'] leading-6">
                    {item.answer || "Placeholder content detailing specifics, configurations, integration patterns, and operational controls tailored to user collaboration workspaces."}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}