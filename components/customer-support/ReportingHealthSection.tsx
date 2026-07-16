"use client";

import React, { useEffect, useState, useRef } from 'react';
import { BarChart3, HelpCircle } from 'lucide-react';

export default function ReportingHealthSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.05 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      title: "Case volume",
      value: "284",
      change: "+12%",
      isPositive: true,
      subtitle: "By source, category, product, segment"
    },
    {
      title: "First response",
      value: "38 min",
      change: "–6 min",
      isPositive: true, 
      subtitle: "Excludes waiting-customer pauses"
    },
    {
      title: "SLA health",
      value: "91%",
      change: "Within target",
      isPositive: true,
      subtitle: "Formula, scope, and freshness visible"
    },
    {
      title: "Escalation rate",
      value: "8.3%",
      change: "–1.2%",
      isPositive: true,
      subtitle: "By destination team and severity"
    },
    {
      title: "Knowledge reuse",
      value: "61%",
      change: "+9%",
      isPositive: true,
      subtitle: "Version match required"
    },
    {
      title: "AI review rate",
      value: "100%",
      change: "Required",
      isPositive: true,
      subtitle: "Corrections and rejections audited"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`w-full py-20 px-4 sm:px-8 lg:px-20 bg-slate-900 dark:bg-gray-950 text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1232px] mx-auto space-y-14">
        
        {/* Header Block */}
        <div className="w-full flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 bg-violet-400/10 rounded-full border border-violet-400/25">
            <span className="text-violet-400 text-xs font-semibold  uppercase tracking-wide">
              REPORTING AND SERVICE HEALTH
            </span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold   leading-tight tracking-tight max-w-3xl">
            Operational visibility — without employee surveillance.
          </h2>
          <p className="max-w-2xl text-slate-300 dark:text-gray-400 text-base font-normal ">
            Every metric has an exact definition, source, freshness indicator, and permission scope. No hidden individual scoring.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="p-5 bg-white/5 dark:bg-gray-900/40 rounded-2xl border border-white/5 dark:border-slate-800 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.08] dark:hover:bg-gray-900/80 hover:shadow-2xl hover:border-white/10 group"
            >
              <div>
                <div className="w-full flex justify-between items-start mb-3">
                  <span className="text-slate-400 dark:text-gray-400 text-xs font-semibold ">
                    {metric.title}
                  </span>
                  <HelpCircle className="size-3.5 text-slate-500 transition-colors group-hover:text-slate-300 cursor-help" />
                </div>
                
                <div className="text-white text-3xl font-extrabold   tracking-tight">
                  {metric.value}
                </div>
              </div>

              <div className="mt-4 space-y-1">
                <span className="text-teal-400 text-xs font-medium  block">
                  {metric.change}
                </span>
                <span className="text-slate-500 dark:text-gray-500 text-[10px] font-normal  block">
                  {metric.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Analytics Plot Element */}
        <div className="w-full aspect-[1232/496] max-h-[496px] bg-white/5 dark:bg-gray-900/40 rounded-2xl border border-white/5 dark:border-slate-800 overflow-hidden group shadow-lg">
          <div className="w-full h-full relative">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.015]" 
              src="/customer-support/image 211.png" 
              alt="Analytics pipeline metric chart summary details display screen" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}