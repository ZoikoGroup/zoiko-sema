"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

// --- Custom Intersection Observer Hook for Entrance Float-up Animations ---
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

// ==========================================
// 1. INTEGRATIONS AND REPORTING SECTION
// ==========================================
function IntegrationsAndReporting() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-20 bg-violet-50/50 dark:bg-slate-950/80 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1136px] mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-widest">
              INTEGRATIONS AND REPORTING
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-snug sm:leading-10 max-w-2xl">
            Approved source links, identity, storage, tasks, and reporting.
          </h2>
        </div>

        {/* Dashboard Mockup Showcase */}
        <div className="w-full aspect-[1136/384] rounded-[20px] overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-md group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            src="/usecase-healthcare/image 92.png"
            alt="Reporting dashboard showcasing integrations metrics tools"
          />
        </div>

        {/* Action Redirect Link */}
        <div className="flex justify-center pt-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold font-['Inter'] group transition-colors"
          >
            <span>See reporting</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. GET STARTED / FINAL CTA SECTION
// ==========================================
function GetStartedCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-20 relative bg-slate-900 dark:bg-gray-950 overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      {/* Dynamic Radial Backdrop Core */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-[at_20%_15%] from-indigo-600/35 to-indigo-600/0 to-60% pointer-events-none" />
      
      {/* Decorative Matrix Tile Overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-black pointer-events-none" />

      <div className="max-w-[1136px] mx-auto flex flex-col items-center text-center relative z-10 space-y-8">
        {/* Upper Tag Indicator */}
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-indigo-400 rounded-full" />
          <span className="text-indigo-400 text-xs font-bold font-['Inter'] uppercase tracking-widest">
            GET STARTED
          </span>
        </div>

        {/* Pitch Headline */}
        <h2 className="text-white dark:text-slate-100 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Inter'] leading-tight sm:leading-[1.15] max-w-3xl">
          Give care teams a governed way to stay aligned.
        </h2>

        {/* Supporting Caption */}
        <p className="text-white/70 dark:text-gray-400 text-sm sm:text-base lg:text-lg font-normal font-['Inter'] leading-relaxed max-w-xl">
          See a guided demo, talk to sales, or review security and privacy controls first.
        </p>

        {/* Primary and Secondary Action Triggers */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
          <button className="w-full sm:w-auto px-8 h-12 bg-blue-600 text-white font-semibold text-sm font-['Inter'] rounded-full shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
            Get a demo
          </button>
          <button className="w-full sm:w-auto px-8 h-12 border border-white/30 text-white font-semibold text-sm font-['Inter'] rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
            Talk to sales
          </button>
        </div>

        {/* Core Compliance Redirect Link */}
        <div className="pt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-semibold font-['Inter'] transition-colors group"
          >
            <span>Explore security & compliance</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMBINED PAGE CONTAINER ROOT
// ==========================================
export default function HealthcareReportingCTASegment() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-gray-900">
      <IntegrationsAndReporting />
      <GetStartedCTA />
    </div>
  );
}