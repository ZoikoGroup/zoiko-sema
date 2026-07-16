"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Calendar, LogIn, Users, Compass, ShieldAlert } from 'lucide-react';

// Hook to handle viewport scroll entry state updates
function useScrollEntrance() {
  const [hasEntered, setHasEntered] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.08 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return { elementRef, hasEntered };
}

export default function ZoikoSemaProductCapabilities() {
  const diffSection = useScrollEntrance();
  const capSection = useScrollEntrance();

  return (
    <div className="w-full bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
      
      {/* SECTION 1: Why It's Different */}
      <section 
        ref={diffSection.elementRef}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100 dark:border-slate-900 transition-all duration-1000 transform ${
          diffSection.hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="max-w-[1136px] mx-auto flex flex-col items-center gap-10">
          
          {/* Header Typography Group */}
          <div className="text-center space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 justify-center">
              <div className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold  uppercase tracking-widest">
                WHY IT'S DIFFERENT
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold  leading-tight tracking-tight">
              Calls shouldn't disappear when they end.
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-base font-normal  leading-7 max-w-2xl mx-auto">
              Sema Meet keeps what happened in a meeting connected to the work that follows — decisions, owners, files, and follow-ups stay attached to the meeting record.
            </p>
          </div>

          {/* Hero Aspect Image Frame Container */}
          <div className="w-full h-64 sm:h-80 md:h-[400px] rounded-[20px] overflow-hidden shadow-xl border border-slate-200/60 dark:border-slate-800/80 group relative">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
              src="/sema-meet/image 178.png" 
              alt="Zoiko Sema Connected Post-Meeting Workspace Overview interface display"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

        </div>
      </section>

      {/* SECTION 2: Capability Strip */}
      <section 
        ref={capSection.elementRef}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-violet-50/50 dark:bg-gray-900 transition-all duration-1000 delay-155 transform ${
          capSection.hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="max-w-[1136px] mx-auto flex flex-col items-center gap-12">
          
          {/* Header Configuration Context */}
          <div className="text-center space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 justify-center">
              <div className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold  uppercase tracking-widest">
                CAPABILITY STRIP
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold  leading-tight tracking-tight">
              Plan, enter, collaborate, understand, decide,<br className="hidden md:inline"/> govern, continue, scale.
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-base font-normal  leading-7">
              Sema Meet is a connected system, not a list of unrelated features.
            </p>
          </div>

          {/* Core Interactive Large App Viewport Mockup */}
          <div className="w-full h-72 sm:h-96 md:h-[520px] lg:h-[672px] rounded-[20px] overflow-hidden shadow-2xl border border-violet-100 dark:border-slate-800 group relative">
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102" 
              src="/sema-meet/image 179.png" 
              alt="Zoiko Sema meeting suite feature dynamic view presentation panel"
            />
          </div>

          {/* Grid Layout Cards Matrix Footer */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {[
              { title: "Plan", desc: "Scheduling, templates, calendar context, agendas."},
              { title: "Enter", desc: "Links, codes, guest lobby, device preflight." },
              { title: "Collaborate", desc: "Video, screen sharing, chat, captions." },
              { title: "Understand", desc: "Live captions, transcript, chapters, search." }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white dark:bg-gray-950 rounded-[20px] shadow-[0px_8px_24px_0px_rgba(18,19,43,0.03)] border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-start items-start gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/30 group"
              >
                
                <h4 className="text-slate-900 dark:text-white text-sm font-bold  leading-6">
                  {card.title}
                </h4>
                <p className="text-slate-600 dark:text-gray-400 text-xs font-normal  leading-5">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}