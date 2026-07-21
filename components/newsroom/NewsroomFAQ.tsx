"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

// --- Custom Intersection Observer Hook for Entrance Animations ---
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function NewsroomFAQ() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Where can I find official Zoiko Sema announcements?",
      answer: "All official press releases, product updates, and governance news are published directly to our central news feed instantly upon verified approval."
    },
    {
      question: "How can journalists contact Zoiko Sema?",
      answer: "Journalists can submit requests through our press inquiry workflow. Inquiries are automatically routed directly to media relations and regional specialists rather than sales lines."
    },
    {
      question: "Can I download the Zoiko Sema logo and screenshots?",
      answer: "Yes, fully cleared visual marks, primary/reversed logos, and synthetic-data product screenshots are downloadable inside our Media Kit and Asset Library."
    },
    {
      question: "How does Zoiko Sema verify newsroom claims?",
      answer: "Every fact sheet, product statement, and spokesperson profile undergoes multi-party internal validation to guarantee clear ownership and auditability."
    },
    {
      question: "How are corrections handled?",
      answer: "Corrections maintain their original URL with a clear public notice. We flag materials transparently as either Clarified, Corrected, or Withdrawn without executing silent rewrites."
    },
    {
      question: "What if there are no published press releases yet?",
      answer: "The repository houses active boilerplate copies, company media assets, and historical roadmap milestones for structural reference at any point."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 md:px-24 lg:px-80 bg-violet-50 dark:bg-gray-950 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="w-full max-w-[820px] mx-auto flex flex-col justify-start items-center gap-8">
        
        {/* Section Heading Header Block */}
        <div className="w-full max-w-[680px] flex flex-col justify-start items-center gap-3 text-center">
          <div className="flex items-center justify-center gap-2 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl font-extrabold font-['Inter_Tight'] leading-snug sm:leading-10 tracking-tight">
            Questions about the Newsroom
          </h2>
        </div>

        {/* Accordion Interface Wrapper */}
        <div className="w-full flex flex-col gap-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="w-full bg-white dark:bg-gray-900 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 shadow-[0px_4px_12px_rgba(18,19,43,0.02)] transition-all duration-300 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left gap-4 outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold font-['Inter'] leading-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {item.question}
                  </span>
                  
                  {/* Icon Toggle Box */}
                  <div className="size-5 shrink-0 flex items-center justify-center relative text-blue-600 dark:text-blue-400">
                    {isOpen ? (
                      <Minus className="size-4 stroke-[3px] transition-transform duration-300 rotate-180" />
                    ) : (
                      <Plus className="size-4 stroke-[3px] transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {/* Collapsible Panel Content Container */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 border-t border-slate-100 dark:border-slate-800/60' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 py-4 text-slate-600 dark:text-gray-400 text-xs sm:text-sm font-normal font-['Inter'] leading-relaxed">
                    {item.answer}
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