"use client";

import React, { useEffect, useState, useRef } from 'react';

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

export default function LatestVerifiedUpdate() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-7">
        
        {/* Header Stack Content */}
        <div className="max-w-[680px] w-full flex flex-col justify-start items-start gap-3">
          
          {/* Badge Label Header */}
          <div className="flex items-center gap-3.5 h-5 relative">
            <div className="size-1.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest leading-none">
              LATEST VERIFIED UPDATE
            </span>
          </div>

          {/* Typography Headline */}
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl font-extrabold  leading-snug sm:leading-10 tracking-tight">
            Honest by default — even before the first release.
          </h2>

          {/* Core Subtitle Context */}
          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base font-normal   leading-relaxed sm:leading-7">
            Until an approved announcement exists, the newsroom shows verified company facts and media resources instead of a placeholder feed.
          </p>
        </div>

        {/* Dynamic Showcase Media Frame */}
        <div className="w-full aspect-[1136/325] rounded-[20px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
            src="/newsroom/Pre-launch panel.png"
            alt="Verified update panel timeline feed visualization map blueprint"
          />
        </div>

        {/* Interactive Notice Alert Banner Callout */}
        <div className="w-full p-5 bg-violet-50 dark:bg-slate-950/40 border border-violet-100/60 dark:border-slate-800/80 rounded-2xl transition-colors duration-300 hover:bg-violet-100/40 dark:hover:bg-slate-900/60">
          <p className="text-gray-700 dark:text-gray-300 text-sm font-normal   leading-6">
            No public releases have been published yet. Download the verified company fact sheet and media kit, or contact the press team directly.
          </p>
        </div>

      </div>
    </section>
  );
}