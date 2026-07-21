"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Scroll Reveal Animation Hook for Element-Level Floating Effects ---
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
      { threshold: 0.02, rootMargin: "0px 0px -40px 0px" }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function CorporateGovernancePortal() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <OrganizationIdentity />
      <VisualShowcaseFrame />
      <HighRiskWorkflow />
    </div>
  );
}

/* ==========================================================================
   1. ORGANIZATION IDENTITY SECTION
   ========================================================================== */
function OrganizationIdentity() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="w-full py-16 lg:py-20 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-gray-950 dark:text-white"
    >
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* Header Stack */}
        <div className="flex flex-col justify-start items-start space-y-2">
          <h2
            className={`text-2xl sm:text-3xl font-semibold    leading-tight transition-all duration-700 ease-out transform delay-75 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Organization Identity
          </h2>
          <p
            className={`text-zinc-700 dark:text-gray-400 text-sm sm:text-base font-normal    transition-all duration-700 ease-out transform delay-150 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Global corporate profile and departmental structure.
          </p>
        </div>

        {/* Dynamic Image Panel */}
        <div
          className={`w-full aspect-[1200/560] rounded-[20px] overflow-hidden shadow-lg border border-neutral-200/40 dark:border-neutral-800 transition-all duration-1000 ease-out transform delay-300 hover:-translate-y-1.5 hover:shadow-2xl ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.01]"
            src="/settings/Frame 566.png"
            alt="Corporate layout tree and organizational setup workspace configuration interface blueprint"
          />
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   2. VISUAL SHOWCASE FRAME (Dynamic Accent Break)
   ========================================================================== */
function VisualShowcaseFrame() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="w-full py-12 lg:py-16 px-4 sm:px-8 lg:px-28 bg-violet-50 dark:bg-gray-950/40"
    >
      <div
        className={`max-w-[1200px] mx-auto aspect-[1200/464] rounded-[20px] overflow-hidden shadow-xl border border-neutral-300/25 dark:border-neutral-800/60 transition-all duration-1000 ease-out transform hover:-translate-y-2 hover:shadow-2xl ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <img
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
          src="/settings/Frame 567.png"
          alt="Technical framework architecture console setup blueprint graphic layout dashboard"
        />
      </div>
    </section>
  );
}

/* ==========================================================================
   3. HIGH-RISK CHANGE WORKFLOW SECTION
   ========================================================================== */
function HighRiskWorkflow() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="w-full py-16 lg:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-gray-950 dark:text-white"
    >
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Centered Descriptive Header Text Stack */}
        <div className="max-w-[768px] mx-auto text-center space-y-4">
          <h2
            className={`text-2xl sm:text-3xl font-semibold    leading-tight transition-all duration-700 ease-out transform delay-75 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            High-Risk Change Workflow
          </h2>
          <p
            className={`text-zinc-700 dark:text-gray-400 text-sm sm:text-base font-normal    leading-relaxed transition-all duration-700 ease-out transform delay-150 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Changes to critical security settings trigger an institutional-grade approval sequence, ensuring no unauthorized modifications reach production.
          </p>
        </div>

        {/* Main Interface Action Interactive Screenshot Container */}
        <div
          className={`w-full aspect-[1200/600] rounded-[20px] overflow-hidden shadow-xl border border-neutral-200/60 dark:border-neutral-800 transition-all duration-1000 ease-out transform delay-300 hover:-translate-y-2 hover:shadow-2xl ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.01]"
            src="/settings/High-Risk Change Workflow Visualization.png"
            alt="High-Risk Change system authentication console security rules tracker layout overview"
          />
        </div>
      </div>
    </section>
  );
}