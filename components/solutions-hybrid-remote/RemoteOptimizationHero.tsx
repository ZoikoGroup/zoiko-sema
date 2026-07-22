"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Scroll Reveal Animation Hook ---
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

export default function RemoteOptimizationHero() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`w-full py-16 lg:py-24 px-4 sm:px-8 lg:px-28 bg-slate-900 dark:bg-gray-950 text-white relative overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      {/* Dynamic Background Glow Layer */}
      <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] -translate-y-1/2 rounded-full opacity-35 bg-radial from-sky-500/20 to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Typography & Action Content Stack */}
        <div className="lg:col-span-5 flex flex-col items-start gap-5">
          <div className="flex flex-col items-start">
            <span className="text-sky-400 dark:text-sky-300 text-xs font-bold   uppercase leading-5 tracking-widest">
              Remote Optimization
            </span>
          </div>
          
          <h1 className="text-white text-3xl sm:text-3xl lg:text-4xl font-bold leading-[1.15px] sm:leading-[40px] ">
            Coordinate hybrid and remote teams without losing momentum.
          </h1>
          
          <p className="text-slate-300 dark:text-gray-300 text-base sm:text-lg font-normal  leading-relaxed max-w-[520px]">
            One governed workspace where async updates, meetings, AI summaries, handoffs, and follow-ups remain connected across every time zone.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
            <a href="/start-free" className="w-full sm:w-auto px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white text-sm font-bold   rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 active:translate-y-0 inline-flex items-center justify-center">
              Start free
            </a>
            <a href="/get-a-demo" className="w-full sm:w-auto px-6 py-3 bg-white text-slate-900 text-sm font-bold   rounded-full border border-transparent transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-lg active:translate-y-0 inline-flex items-center justify-center">
              Get a demo
            </a>
          </div>
        </div>

        {/* Right Interface Graphic Block */}
        <div className="lg:col-span-7 w-full relative group">
          {/* Subtle image ambient layer */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
          
          <div className="w-full aspect-[742/416] relative rounded-2xl overflow-hidden shadow-[0px_36px_72px_-17px_rgba(0,0,0,0.55)] border border-neutral-300/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-neutral-300/20">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" 
              src="/solutions-hybrid-remote/image (10).png" 
              alt="Workspace orchestration application framework showing contextual timezones metadata timelines" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
