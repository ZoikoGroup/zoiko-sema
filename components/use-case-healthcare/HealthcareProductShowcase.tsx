"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Custom Intersection Observer Hook for Entrance Animations ---
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
// 1. OUTCOME STRIP SECTION
// ==========================================
function OutcomeStrip() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-20 bg-white dark:bg-gray-900 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1136px] mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 relative">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-widest">
              OUTCOME STRIP
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-snug sm:leading-10 max-w-2xl">
            Aligned teams, controlled handoffs, audit-ready governance.
          </h2>
        </div>

        {/* Visual Mockup Showcase */}
        <div className="w-full aspect-[1136/421] rounded-[20px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            src="/usecase-healthcare/image 86.png"
            alt="Operational dashboards reflecting team alignment and audit-ready pipelines"
          />
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. HEALTHCARE COORDINATION HUB SECTION
// ==========================================
function HealthcareCoordinationHub() {
  const { ref, isVisible } = useScrollReveal();

  const hubs = [
    {
      title: "Handoff queue",
      description: "Source unit, receiving role, due time, and acknowledgement."
    },
    {
      title: "Huddle review panel",
      description: "Source coverage, draft status, reviewer, and retention."
    },
    {
      title: "Operational escalation",
      description: "Issue type, owner, response status, and linked evidence."
    },
    {
      title: "Policy status",
      description: "AI eligibility, guest policy, retention, and system health."
    }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-20 bg-violet-50/50 dark:bg-slate-950/80 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1136px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-widest">
              HEALTHCARE COORDINATION HUB
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-snug sm:leading-10 max-w-2xl">
            Handoffs, huddles, escalations, and policy state — in one screen.
          </h2>
        </div>

        {/* Dashboard Mockup Image View */}
        <div className="w-full aspect-[1136/384] rounded-[20px] overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-lg group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            src="/usecase-healthcare/image 87.png"
            alt="Sema Healthcare dashboard workflow monitoring panel"
          />
        </div>

        {/* Dynamic Context Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-[20px] border border-slate-200/80 dark:border-slate-700/80 shadow-[0px_8px_24px_0px_rgba(18,19,43,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-slate-900 dark:text-white text-sm font-bold font-['Inter'] leading-5 mb-2">
                {hub.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-xs font-normal font-['Inter'] leading-relaxed">
                {hub.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer Statement */}
        <p className="text-gray-400 dark:text-gray-500 text-[11px] font-normal font-['Inter'] leading-none">
          Public mockups use synthetic, de-identified demonstration data only — no real patient information.
        </p>
      </div>
    </section>
  );
}

// ==========================================
// 3. WORKFLOW MAP SECTION
// ==========================================
function WorkflowMap() {
  const { ref, isVisible } = useScrollReveal();

  const steps = [
    { number: "1", title: "Update posted", color: "bg-blue-600" },
    { number: "2", title: "Handoff created", color: "bg-indigo-600" },
    { number: "3", title: "Acknowledged", color: "bg-teal-600" },
    { number: "4", title: "Reviewed & published", color: "bg-amber-700" },
    { number: "5", title: "Retained & audited", color: "bg-slate-950 dark:bg-slate-700" }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-20 bg-white dark:bg-gray-900 transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1136px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-widest">
              WORKFLOW MAP
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-extrabold font-['Inter'] leading-snug sm:leading-10 max-w-3xl">
            The complete handoff, huddle, and escalation lifecycle.
          </h2>
        </div>

        {/* Visual Map Mockup Image */}
        <div className="w-full aspect-[1136/384] rounded-[20px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            src="/usecase-healthcare/image 90.png"
            alt="Comprehensive lifecycle steps map visualizer"
          />
        </div>

        {/* Step Flow Card Row Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-[20px] border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between aspect-[1.6]"
            >
              <div className={`size-7 rounded-2xl flex items-center justify-center text-white text-xs font-extrabold font-['Inter'] ${step.color}`}>
                {step.number}
              </div>
              <div className="text-slate-900 dark:text-white text-xs font-bold font-['Inter'] leading-5 pt-4">
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// MAIN COMBINED CONTAINER COMPONENT
// ==========================================
export default function HealthcareProductShowcase() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-gray-900">
      <OutcomeStrip />
      <HealthcareCoordinationHub />
      <WorkflowMap />
    </div>
  );
}