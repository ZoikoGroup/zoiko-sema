"use client";
import React, { useEffect, useRef, useState } from 'react';

// --- CUSTOM SCROLL-REVEAL REUSABLE HOOK ---
function useScrollReveal() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function ReportConcernHero() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-[653px] flex items-center justify-center bg-slate-900 dark:bg-gray-900 text-white transition-colors duration-300 py-16 px-6 lg:px-16 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side Content Column (Fades & Floats Up) */}
        <div 
          className={`flex flex-col items-start gap-6 max-w-xl transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Badge Label */}
          <div className="inline-flex items-center justify-center bg-violet-50 dark:bg-violet-950/50 px-4 py-1.5 rounded-full shadow-sm">
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide uppercase">
              TRUST & SECURITY
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white dark:text-white leading-tight">
            Report a concern <br className="hidden sm:inline" />
            through the right <br className="hidden sm:inline" />
            secure route.
          </h1>

          {/* Paragraph Context */}
          <p className="text-slate-300 dark:text-gray-300 text-base sm:text-lg font-normal leading-relaxed">
            Tell us about security, privacy, AI, accessibility, abuse, legal, or product concerns so the right team can review and respond.
          </p>

          {/* Interactive Button Group */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <button 
              type="button"
              className="w-full sm:w-auto text-center bg-white hover:bg-slate-100 text-slate-900 text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              Report a Concern
            </button>
            <button 
              type="button"
              className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-500 text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Support
            </button>
          </div>
        </div>

        {/* Right Side Visual Block Frame (Fades & Floats Up with Delay + Smooth Hover Lift effect) */}
        <div 
          className={`w-full flex justify-center items-center transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <div className="group relative w-full max-w-[590px] aspect-[590/384] bg-white rounded-3xl shadow-2xl overflow-hidden border border-violet-100/20 transition-all duration-500 ease-out transform hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(80,50,180,0.4)]">
            
            {/* Shadow Inner Ambient Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none z-10" />

            {/* Configured Layout Image with Hover Auto-Zoom Effect */}
            <img 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" 
              src="/report-concern/image 131.png" 
              alt="Security Trust Dashboard Asset"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}