"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "What are Tasks & To-dos in Zoiko Sema?",
    answer: "Tasks and to-dos are actionable items deeply linked with their originating contexts—such as meeting transcripts, workspace documents, or chat messages—to maintain transparent continuity across operations."
  },
  {
    question: "Can tasks have owners and due dates?",
    answer: "Yes. Every task features dedicated architecture for assigning specific owners, co-contributors, and deterministic target completion milestones."
  },
  {
    question: "Can I create a task from a message or meeting?",
    answer: "Absolutely. Tasks can be explicitly designated by a human or suggested via ambient AI context extraction platforms during collaborative sessions."
  },
  {
    question: "Does AI automatically assign tasks?",
    answer: "No. AI platforms solely deliver suggestions. Bounded human review authorization protocols are mandatory before updates apply globally."
  },
  {
    question: "Can guests collaborate on tasks?",
    answer: "Yes, within restricted operational perimeters. System settings keep guest scopes tightly authorization-checked without cascading wider document permissions."
  },
  {
    question: "Which task views are available?",
    answer: "The environment supports multiple tracking systems including standard lists, projects, interactive boards, visual timelines, and calendar matrices."
  },
  {
    question: "How are task changes audited?",
    answer: "Every operational change—from ownership handoffs to description updates—is permanently cataloged inside a secure, historic tracking timeline."
  },
  {
    question: "How does ZoikoTime connect to tasks?",
    answer: "ZoikoTime maps system hours seamlessly to active action items, creating structured validation loops between project milestones and exact task records."
  }
];

export default function FAQSection() {
  const [revealed, setRevealed] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setRevealed(true);
    }, { threshold: 0.05 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 px-4 sm:px-6 lg:px-16 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden font-sans"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <div className={`text-center space-y-3 max-w-xl transition-all duration-1000 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-block px-3 py-1 bg-blue-600/10 dark:bg-blue-950/50 rounded-full">
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wide">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Sema Tasks FAQ
          </h2>
        </div>

        {/* Interactive Accordion Stack */}
        <div className="w-full flex flex-col gap-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`w-full rounded-2xl border border-violet-100 dark:border-slate-800 bg-white dark:bg-slate-950/40 overflow-hidden transition-all duration-500 transform hover:shadow-sm dark:hover:shadow-none ${
                  revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${100 + idx * 50}ms` }}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 flex justify-between items-center text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-slate-900 dark:text-slate-200 text-sm font-semibold leading-relaxed group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-gray-400 dark:text-slate-500 transform transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                    }`} 
                  />
                </button>

                {/* Smooth Height Reveal Transition Container */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-xs text-gray-500 dark:text-slate-400 font-normal leading-relaxed border-t border-slate-50 dark:border-slate-900/60">
                      {item.answer}
                    </div>
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