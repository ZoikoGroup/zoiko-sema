'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs: FAQItem[] = [
    {
      question: "What is Zoiko Sema Business Communication?",
      answer: "Zoiko Sema Business Communication is a workspace for business messaging, meetings, channels, AI-assisted recaps, task follow-up, secure collaboration, integrations, and administration."
    },
    {
      question: "How is Zoiko Sema different from chat or video meeting tools?",
      answer: "Unlike disconnected single-purpose chat apps, Zoiko Sema bridges structured channels, live discussions, meeting summaries, and operational dashboards into one secure workspace linked directly to workflow execution tracking."
    },
    {
      question: "Can teams use Zoiko Sema for both internal and external communication?",
      answer: "Yes. With tailored multi-tenant controls and expiring external guest permissions, teams can bring in clients, vendors, or contractors to explicit collaboration streams without revealing sensitive core internal directory structures."
    },
    {
      question: "Does Zoiko Sema support AI meeting summaries?",
      answer: "Absolutely. Integrated AI processing models generate rich, automated conversational recaps, distill multi-speaker action items, and create structured meeting notes linked contextually right into the relevant project space channels."
    },
    {
      question: "Does Zoiko Sema support business administration and security?",
      answer: "Yes, fully built with administrative compliance framework tools including Single Sign-On (SSO), data retention policy systems, audit log access pipelines, Multi-Factor Authentication (MFA), and deep automated compliance parameters."
    },
    {
      question: "Can Zoiko Sema connect with calendars, storage, and workflow tools?",
      answer: "Yes, it features production-ready integrations linking native workplace calendar engines, cloud storage databases, tracking tools, and custom webhooks into centralized action streams."
    },
    {
      question: "What is ZoikoTime integration for business communication?",
      answer: "ZoikoTime integration directly ties active chat threads, channels, and assigned calendar actions to real-time resource allocations and accurate performance dashboards, maintaining clear focus timelines automatically."
    },
    {
      question: "Is Zoiko Sema suitable for growing businesses and enterprises?",
      answer: "Yes. It offers tiered service configurations engineered to comfortably adapt from agile startups mapping structural growth up to globally scaling enterprise entities requiring extensive governance control grids."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-20 lg:py-24 font-sans antialiased transition-colors duration-300">
      <div className="max-w-[756px] mx-auto px-6 flex flex-col items-center">
        
        {/* Title Element */}
        <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold tracking-tight text-center mb-12">
          Frequently asked questions
        </h2>

        {/* Accordion List Wrapper */}
        <div className="w-full divide-y divide-slate-200 dark:divide-slate-800 border-b border-slate-200 dark:border-slate-800">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="w-full py-1.5 transition-colors duration-200"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left py-4 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-slate-900 dark:text-slate-100 text-base font-bold tracking-tight pr-4 transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">
                    {faq.question}
                  </span>
                  <span 
                    className={`text-violet-600 dark:text-violet-400 text-2xl font-light leading-none select-none transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Animated Expandable Content Body */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-6 max-w-[668px]">
                      {faq.answer}
                    </p>
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