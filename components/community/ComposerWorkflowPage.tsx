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

export default function ComposerWorkflowPage() {
  const { ref, isVisible } = useScrollReveal();

  const steps = [
    { num: "1", color: "bg-blue-600", label: "Choose type" },
    { num: "2", color: "bg-indigo-600", label: "Duplicate check" },
    { num: "3", color: "bg-teal-600", label: "Add context" },
    { num: "4", color: "bg-yellow-700", label: "Sensitive-data check" },
    { num: "5", color: "bg-red-700", label: "Set visibility" },
    { num: "6", color: "bg-slate-900 dark:bg-slate-800", label: "Publish" }
  ];

  return (
    <main className="w-full min-h-screen bg-white dark:bg-gray-900 text-slate-900 dark:text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
      <section
        ref={ref}
        className={`max-w-7xl mx-auto space-y-12 transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
              COMPOSER AND POSTING WORKFLOW
            </span>
          </div>
          <h1 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-[700px] mx-auto leading-snug sm:leading-10">
            Guided from the first keystroke — including a warning before you overshare.
          </h1>
        </div>

        <div className="w-full aspect-[1136/325] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
          <img 
            className="w-full h-full object-cover" 
            src="/community/image 306.png" 
            alt="Advanced user composer interface with dynamic data fields warning module checks representation" 
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="group p-5 bg-white dark:bg-gray-950 rounded-[20px] border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700"
            >
              <div className={`size-7 flex items-center justify-center text-white text-xs font-extrabold rounded-full ${step.color} mb-4 shadow-sm`}>
                {step.num}
              </div>
              <h2 className="text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-bold transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {step.label}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}