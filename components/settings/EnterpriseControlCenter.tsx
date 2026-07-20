"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Scroll Reveal Hook for Sequential Element Animation ---
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
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function EnterpriseControlCenter() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="w-full py-16 lg:py-24 px-4 sm:px-8 lg:px-28 bg-violet-50 dark:bg-gray-950/40 text-gray-950 dark:text-white transition-colors duration-300 overflow-x-hidden"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Typography & Actions Stack */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Badge Label */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1 bg-indigo-100 dark:bg-indigo-950/60 rounded-full transition-all duration-700 ease-out transform delay-75 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="w-2.5 h-3 bg-indigo-700 dark:bg-indigo-400 rounded-sm" />
            <span className="text-indigo-700 dark:text-indigo-300 text-xs font-bold    tracking-wide">
              Enterprise Settings Control Center
            </span>
          </div>
          
          {/* Main Heading Headline */}
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold    leading-tight tracking-tight transition-all duration-700 ease-out transform delay-150 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Manage every workspace setting from one governed control center.
          </h1>
          
          {/* Core Descriptive Copy Paragraph */}
          <p
            className={`text-zinc-700 dark:text-gray-300 text-base font-normal    leading-relaxed max-w-[576px] transition-all duration-700 ease-out transform delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Present one centralized Settings experience where organization identity, defaults, localization, notifications, billing, usage, personal preferences, lifecycle safeguards, approvals, ownership, audit history, and governance remain connected inside a secure enterprise workspace.
          </p>
          
          {/* Action Trigger Options Buttons */}
          <div
            className={`flex flex-wrap items-center gap-4 pt-4 transition-all duration-700 ease-out transform delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <button className="group/btn flex items-center gap-2 px-8 py-4 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-base font-bold    rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800 dark:hover:bg-neutral-100 active:translate-y-0 shadow-md">
              <span>Open Control Center</span>
              <span className="transform transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
            </button>
            
            <button className="px-8 py-4 bg-transparent text-zinc-900 dark:text-white text-base font-bold    rounded-xl border border-neutral-300 dark:border-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-100/50 dark:hover:bg-gray-900 active:translate-y-0">
              Documentation
            </button>
          </div>
        </div>

        {/* Right Interface Media Graphics Container */}
        <div className="lg:col-span-6 w-full relative group pt-8 lg:pt-0">
          
          {/* Primary Product Snapshot Display Frame */}
          <div
            className={`w-full aspect-[584/326] rounded-[20px] overflow-hidden shadow-xl border border-neutral-300/15 dark:border-neutral-800/80 transition-all duration-1000 ease-out transform delay-500 group-hover:-translate-y-1.5 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              src="/settings/ZoikoTime Master Control Interface.png"
              alt="Centralized workspace control center interface preview metric console grid dashboard context"
            />
          </div>

          {/* Floated Status Overlay Chip */}
          <div
            className={`absolute -left-4 sm:-left-8 bottom-6 p-4 bg-white dark:bg-gray-950 rounded-xl border border-neutral-200 dark:border-slate-800 shadow-2xl flex items-center gap-4 transition-all duration-700 ease-out transform delay-700 group-hover:-translate-y-3 ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-6 opacity-0 scale-95'
            }`}
          >
            <div className="size-12 bg-indigo-500 rounded-full flex justify-center items-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              {/* Internal SVG Check Symbol Icon element */}
              <img className='h-5 w-5 ' src="/settings/Icon (4).png"  />
            </div>
            <div className="space-y-0.5 pr-4">
              <span className="block text-zinc-400 dark:text-gray-400 text-[10px] font-bold    uppercase tracking-wider">
                GLOBAL STATUS
              </span>
              <span className="block text-gray-950 dark:text-white text-base font-bold   ">
                Compliant
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}