"use client"
import React, { useEffect, useRef, useState } from 'react';

// --- CUSTOM INTERSECTION OBSERVER HOOK FOR FLOATING REVEAL EFFECTS ---
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
        rootMargin: '0px 0px -40px 0px' 
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function ZoikoSemaSecurityOverview() {
  const [sectionRef, sectionVisible] = useScrollReveal();

  const overviewRows = [
    { label: 'Secure communication', policy: 'Security Policy', dotColor: 'bg-blue-500' },
    { label: 'Admin-governed controls', policy: 'Admin Console', dotColor: 'bg-violet-600' },
    { label: 'Responsible AI', policy: 'AI Use Policy', dotColor: 'bg-teal-600' },
    { label: 'Privacy and data', policy: 'Privacy & Data / DPA', dotColor: 'bg-green-500' },
    { label: 'Reliability and incidents', policy: 'System Status', dotColor: 'bg-amber-500' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300 border-b border-slate-100 dark:border-gray-900"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Content & Policy Links Matrix Column */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Header Title Text Stack Reveal */}
          <div className={`space-y-4 transition-all duration-1000 transform ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-2">
              <span className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-sans">
                Security Center Overview
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans leading-tight text-slate-900 dark:text-white">
              The central hub connecting trust topics, evidence, and controls.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-sans leading-relaxed">
              Zoiko Sema approaches security across communication workflows — meetings, messages, channels, AI summaries, admin controls, integrations, and data governance — with a shared-responsibility model between the platform and workspace admins.
            </p>
          </div>

          {/* Interactive Stacked Rows Reveal Container */}
          <div className={`space-y-3 transition-all duration-1000 delay-200 transform ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'}`}>
            {overviewRows.map((row, idx) => (
              <div 
                key={idx}
                className="group flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-slate-200/60 dark:border-gray-800 rounded-xl shadow-[0px_2px_6px_rgba(18,19,43,0.01)] hover:border-violet-200 dark:hover:border-gray-700 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className={`size-2 rounded-full shrink-0 ${row.dotColor}`} />
                  <span className="text-sm font-semibold font-sans text-slate-900 dark:text-gray-200 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    {row.label}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold font-sans text-violet-600 dark:text-violet-400 group-hover:underline">
                  <span>{row.policy}</span>
                  <span className="text-sm font-normal opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">→</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Media Showcase Card Mockup Column */}
        <div className={`lg:col-span-6 flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <div className="w-full max-w-[660px] aspect-[660/487] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-gray-800 shadow-[0px_30px_60px_-30px_rgba(20,22,60,0.12)] group relative">
            
            {/* Ambient Overlay Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/5 to-transparent pointer-events-none z-10" />
            
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
              src="/security-center/image 81.png" 
              alt="Central information hub dashboard visual preview" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}