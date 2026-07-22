"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HealthcareHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (targetRef.current) observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, []);

  const featurePills = [
    "Care-team coordination",
    "Minimum-necessary access",
    "Human-reviewed AI"
  ];

  return (
    <section 
      ref={targetRef}
      className={`w-full min-h-[870px] py-16 lg:py-24 px-4 sm:px-8 lg:px-20 relative bg-slate-900 dark:bg-gray-950 overflow-hidden flex items-center transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      {/* Dynamic Radial Ambient Light Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-[at_20%_15%] from-indigo-600/30 to-indigo-600/0 to-60% pointer-events-none" />

      <div className="max-w-[1232px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Information Panel */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Badge Label Header */}
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-indigo-400 rounded-full" />
            <span className="text-indigo-400 text-xs font-bold font-['Inter'] uppercase tracking-widest leading-none">
              HEALTHCARE COMMUNICATION
            </span>
          </div>

          {/* Heading Title Block */}
          <h1 className="text-white dark:text-slate-100 text-3xl sm:text-4xl lg:text-[46px] font-extrabold font-['Inter'] leading-tight lg:leading-[56px] tracking-tight">
            Keep care teams aligned without losing control of sensitive information.
          </h1>

          {/* Core Descriptive Context */}
          <p className="text-white/70 dark:text-gray-400 text-sm sm:text-base font-normal font-['Inter'] leading-7 max-w-xl">
            Bring care-team messages, virtual huddles, operational handoffs, reviewed AI summaries, tasks, approvals, files, and audit evidence into one governed workspace built for healthcare operations.
          </p>

          {/* CTA Action Hub Trigger Controls */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="/get-a-demo" className="h-12 px-7 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold font-['Inter'] rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-98 shadow-lg shadow-blue-600/20 inline-flex items-center justify-center">
              Get a demo
            </a>
            
            <a href="/contact-sales" className="h-12 px-7 text-white text-sm font-semibold font-['Inter'] rounded-full border border-white/30 hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 active:scale-98 inline-flex items-center justify-center">
              Talk to sales
            </a>
          </div>

          {/* Secondary Inline Document Redirect */}
          <div className="pt-2">
            <a 
              href="/security-compliance" 
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-semibold font-['Inter'] transition-colors group"
            >
              <span>Explore security & compliance</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Context Dynamic Feature Tags Grid */}
          <div className="flex flex-wrap gap-3 pt-4">
            {featurePills.map((pill, idx) => (
              <div 
                key={idx} 
                className="px-4 py-2.5 bg-white/5 dark:bg-gray-900/40 rounded-full border border-white/25 dark:border-slate-800 backdrop-blur-md text-white/90 text-xs font-semibold font-['Inter'] shadow-sm"
              >
                {pill}
              </div>
            ))}
          </div>

          {/* Legal Compliance Disclaimer Footer Block */}
          <p className="text-white/40 dark:text-gray-500 text-[11px] font-normal font-['Inter'] leading-relaxed max-w-xl pt-4">
            Zoiko Sema supports controlled healthcare communication workflows. It is not an EHR, clinical decision-support tool, emergency service, or automatic compliance guarantee.
          </p>

        </div>

        {/* Right Dashboard Visualization Screen Preview Mockup Frame */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[540px] aspect-[540/597] bg-white dark:bg-gray-900 rounded-[20px] shadow-[0px_30px_80px_0px_rgba(0,0,0,0.45)] border border-white/10 overflow-hidden relative group transition-transform duration-500 hover:scale-[1.01]">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
              src="/usecase-healthcare/image 85.png" 
              alt="Healthcare workspace case escalation communication pipeline display interface screen" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
