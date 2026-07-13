"use client"
import React, { useEffect, useRef, useState } from "react";

// Hook to trigger scroll entry animations
function useElementOnScreen(options: IntersectionObserverInit) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);
    
    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [options]);

  return [containerRef, isVisible] as const;
}

export default function ZoikoSemaPressHero() {
  const [heroRef, visibleHero] = useElementOnScreen({ threshold: 0.1 });

  return (
    <section 
      ref={heroRef}
      className="w-full bg-slate-900 dark:bg-gray-950 text-white py-16 sm:py-20 md:py-24 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative background radial pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Content Column */}
        <div className={`lg:col-span-7 space-y-6 flex flex-col items-start transform transition-all duration-1000 ease-out ${visibleHero ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}>
          
          <div className="space-y-2 self-stretch">
            <span className="text-blue-400 dark:text-blue-300 text-xs font-bold tracking-widest uppercase block leading-5">
              Company
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Plus_Jakarta_Sans'] text-white dark:text-gray-100 tracking-tight leading-tight">
              Press
            </h1>
          </div>

          <p className="text-slate-300 dark:text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Find approved Zoiko Sema announcements, company facts, product context, media assets, leadership resources, brand guidelines, and press contact information.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a 
              href="#" 
              className="w-full sm:w-auto px-6 py-3 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full shadow-[0px_12px_24px_-12px_rgba(60,60,120,0.6)] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Download Media Kit
            </a>
            
            <a 
              href="#" 
              className="w-full sm:w-auto px-6 py-3 text-center border border-slate-700 dark:border-gray-800 text-white hover:bg-white/5 text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Press Contact
            </a>
          </div>

          {/* Tag Pill Links Row */}
          <div className="flex flex-wrap gap-2 pt-4 w-full max-w-lg">
            {[
              "Latest news", 
              "Company facts", 
              "Media kit", 
              "Leadership", 
              "Brand assets", 
              "Press contact"
            ].map((tag, idx) => (
              <a 
                key={idx}
                href="#"
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 dark:text-gray-300 bg-white/5 dark:bg-gray-900 border border-white/10 dark:border-gray-800 rounded-full hover:bg-white/10 dark:hover:bg-gray-800 hover:text-white transition-all duration-200"
              >
                {tag}
              </a>
            ))}
          </div>

        </div>

        {/* Hero Image Graphic Column */}
        <div className={`lg:col-span-5 w-full flex justify-center lg:justify-end transform transition-all duration-1000 ease-out delay-200 ${visibleHero ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}>
          <div className="w-full max-w-[540px] aspect-[4/3] rounded-[20px] overflow-hidden shadow-2xl group border border-slate-800 dark:border-gray-900">
            <img 
              className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105" 
              src="/press/hero.png" 
              alt="Zoiko Sema press coverage graphics media assets preview layout" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}