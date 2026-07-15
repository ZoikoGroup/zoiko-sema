"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Bell, ArrowRight, ExternalLink } from 'lucide-react';

// --- SHARED HIGH-PERFORMANCE SCROLL REVEAL HOOK ---
function useScrollReveal() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsIntersecting(true);
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function SystemStatusHero() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 lg:py-28 bg-slate-900 dark:bg-gray-950 text-white overflow-hidden transition-colors duration-300 relative flex items-center"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* --- LEFT COLUMN: SYSTEM STATUS INFO --- */}
        <div 
          className={`lg:col-span-7 flex flex-col items-start gap-6 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Status Badge */}
          <div className="px-4 py-1.5 bg-violet-100/10 dark:bg-violet-950/40 border border-violet-500/20 rounded-full inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-violet-400 dark:text-violet-300 text-xs font-bold tracking-wider uppercase font-sans">
              System Status
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-white font-sans max-w-xl">
            Know what is working, what is affected, and what happens next.
          </h1>

          {/* Description Paragraph */}
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl font-sans">
            Track Zoiko Sema service availability, active incidents, planned maintenance, uptime history, and support updates from one clear status center.
          </p>

          {/* Call To Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
            <button className="group w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold font-sans text-sm rounded-full shadow-[0px_8px_24px_-8px_rgba(108,79,224,0.58)] transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5">
              <Bell className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Subscribe to updates</span>
            </button>
            <button className="group w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-bold font-sans text-sm rounded-full transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5">
              <span>View latest incidents</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Subtext Link */}
          <p className="text-sm text-slate-400 mt-4 leading-relaxed font-sans max-w-xl">
            Clear incident communication for messaging, meetings, AI summaries, admin services, integrations, and ZoikoTime-connected workflows.{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 transition-colors group">
              Contact support <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </p>
        </div>

        {/* --- RIGHT COLUMN: INTERACTIVE BROWSER MOCKUP --- */}
        <div 
          className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <div className="group relative w-full max-w-[420px] aspect-[4/5] bg-slate-800 rounded-2xl shadow-[0px_40px_80px_-20px_rgba(20,22,60,0.4)] border border-slate-700/60 overflow-hidden hover:-translate-y-2 transition-transform duration-500">
            
            {/* Mockup Browser Tab Bar */}
            <div className="w-full h-11 bg-white border-b border-slate-700/60 flex items-center px-4 gap-2">
              <div className="flex gap-1.5 shrink-0">
                <div className="size-2.5 bg-red-500/80 rounded-full" />
                <div className="size-2.5 bg-amber-500/80 rounded-full" />
                <div className="size-2.5 bg-emerald-500/80 rounded-full" />
              </div>
              <div className="mx-auto bg-white px-4 py-1 rounded-md text-[10px] sm:text-xs text-slate-400 font-medium select-none tracking-wide truncate max-w-[180px]">
                status.zoikosema.com
              </div>
              <div className="w-8 shrink-0" /> {/* Spacer to center URL */}
            </div>

            {/* Mockup Live Image Container */}
            <div className="w-full h-[calc(100%-44px)] bg-slate-950 overflow-hidden relative">
              <img 
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700" 
                src="/status/image 146.png" 
                alt="System Status Dashboard View" 
              />
              
              {/* Overlay Glass Panel for interactive vibe */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}