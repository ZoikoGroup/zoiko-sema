"use client";

import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const PERMISSION_FEATURES = [
  "Source access is re-checked on every open",
  "Restricted content is never exposed through task labels",
  "Source state is shown when moved, deleted, or archived",
  "Multiple sources shown as an ordered trail"
];

export default function SourceTraceability() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-16 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden  "
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase Frame */}
          <div 
            className={`w-full aspect-[572/458] bg-slate-900 dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl transition-all duration-1000 transform group ${
              revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <img 
              src="/tasks-todo/image 160.png" 
              alt="Interactive visualization demonstrating task origin source trail mapping" 
              className="w-full h-full object-cover opacity-95 dark:opacity-85 transition-transform duration-500 group-hover:scale-[1.025]"
            />
          </div>

          {/* Right Column: Copy & Checklist Tracks */}
          <div 
            className={`flex flex-col items-start transition-all duration-1000 delay-200 transform ${
              revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Tag Badge */}
            <div className="mb-4 inline-block px-3 py-1 bg-blue-600/10 dark:bg-blue-950/50 rounded-full">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wide">
                Source Traceability
              </span>
            </div>

            {/* Section Main Title */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Open the work that created the task.
            </h2>

            {/* Explanatory Paragraph Block */}
            <p className="mt-5 text-gray-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              Every task carries a permission-safe source trail back to the message, meeting, decision, or document that created it. Access is checked independently — task visibility never expands source authorization.
            </p>

            {/* Audit Checklist Cluster */}
            <div className="mt-8 space-y-3.5 w-full">
              {PERMISSION_FEATURES.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 group/item transition-transform duration-200 hover:translate-x-1"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  </div>
                  <span className="text-gray-500 dark:text-slate-400 text-sm font-normal leading-5">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}