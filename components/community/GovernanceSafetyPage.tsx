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

export default function GovernanceSafetyPage() {
  const { ref, isVisible } = useScrollReveal();

  const blocks = [
    { title: "Triage", desc: "Severity, safety, and specialist routing before any action." },
    { title: "Human decision", desc: "No final removal, restriction, or appeal denial by AI alone." },
    { title: "Appeal", desc: "Independent review where practical, with a stated rationale." }
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
              MODERATION, SAFETY, AND AI GOVERNANCE
            </span>
          </div>
          <h1 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-[700px] mx-auto leading-snug sm:leading-10">
            Proportionate action. A human decides. You can always appeal.
          </h1>
        </div>

        <div className="w-full aspect-[1136/503] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg">
          <img 
            className="w-full h-full object-cover" 
            src="/community/image 309.png" 
            alt="Safety reporting console moderation pipeline metrics framework structural view" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((item, idx) => (
            <div 
              key={idx}
              className="group p-6 bg-white dark:bg-gray-950 rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-[0px_8px_24px_rgba(18,19,43,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              <h2 className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}