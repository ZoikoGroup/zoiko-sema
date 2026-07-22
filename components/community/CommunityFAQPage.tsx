"use client";

import React, { useEffect, useState, useRef } from 'react';

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
      { threshold: 0.02 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function CommunityFAQPage() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    "What is the Zoiko Sema Community?",
    "Do I need an account?",
    "Is the Community official customer support?",
    "Who can answer questions?",
    "Does AI write community answers?",
    "Can community ideas become product commitments?"
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <main className="w-full min-h-screen bg-violet-50/50 dark:bg-gray-950/40 text-slate-900 dark:text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
      <section
        ref={ref}
        className={`max-w-3xl mx-auto space-y-12 transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
              FAQ
            </span>
          </div>
          <h1 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl font-extrabold tracking-tight">
            Questions about the Community
          </h1>
        </div>

        <div className="space-y-4">
          {faqs.map((q, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-gray-950 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all duration-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-900 dark:text-slate-100 font-bold text-sm sm:text-base hover:bg-slate-50/60 dark:hover:bg-gray-900/40 transition-colors"
                >
                  <span>{q}</span>
                  <div className="relative size-4 flex items-center justify-center ml-4 shrink-0">
                    <div className="w-3.5 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    <div className={`absolute w-0.5 h-3.5 bg-blue-600 dark:bg-blue-400 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : ''}`} />
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 border-t border-slate-100 dark:border-slate-900' : 'max-h-0'}`}>
                  <div className="p-5 text-slate-600 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum rhoncus varius.
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}