"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Scroll Reveal Animation Hook for Sentences ---
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
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

// --- Animated Counter Hook for Numbers ---
function useCounter(target: number, duration: number = 2000, trigger: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration, trigger]);

  return count;
}

export default function ArchitectureGovernanceSuite() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <ConnectedArchitecture />
      <EnterpriseGovernance />
    </div>
  );
}

/* ==========================================================================
   1. A TRULY CONNECTED ARCHITECTURE SECTION (With Animated Stats)
   ========================================================================== */
function ConnectedArchitecture() {
  const { ref, isVisible } = useScrollReveal();
  
  // Counter logic tied to the scroll reveal trigger
  const uptimeCount = useCounter(99, 1500, isVisible);
  const integrationCount = useCounter(500, 1800, isVisible);

  return (
    <section
      ref={ref}
      className="w-full py-16 lg:py-24 px-4 sm:px-8 lg:px-28 bg-violet-50 dark:bg-gray-950/40 text-zinc-900 dark:text-white"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Content Stack */}
        <div className="lg:col-span-6 space-y-6">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-semibold    leading-tight transition-all duration-700 ease-out transform delay-75 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            A truly connected architecture
          </h2>
          
          <p
            className={`text-zinc-700 dark:text-gray-300 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed transition-all duration-700 ease-out transform delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Zoiko Sema doesn't just sit on top of your work; it bridges it. Every message, meeting, and file is indexed for context-aware collaboration.
          </p>

          {/* Stats Counters Grid Container */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            {/* Uptime Metric */}
            <div
              className={`space-y-1 transition-all duration-700 ease-out transform delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="text-sky-700 dark:text-sky-400 text-2xl sm:text-3xl font-semibold    tracking-tight transition-transform duration-300 hover:scale-105 inline-block origin-left">
                {uptimeCount}.9%
              </div>
              <div className="text-zinc-700 dark:text-gray-400 text-xs font-medium    uppercase tracking-wider">
                Uptime SLA
              </div>
            </div>

            {/* Integrations Metric */}
            <div
              className={`space-y-1 transition-all duration-700 ease-out transform delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="text-sky-700 dark:text-sky-400 text-2xl sm:text-3xl font-semibold    tracking-tight transition-transform duration-300 hover:scale-105 inline-block origin-left">
                {integrationCount}+
              </div>
              <div className="text-zinc-700 dark:text-gray-400 text-xs font-medium    uppercase tracking-wider">
                Integrations
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Media Frame */}
        <div
          className={`lg:col-span-6 w-full group transition-all duration-1000 ease-out transform delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="w-full aspect-[648/362] rounded-xl overflow-hidden shadow-xl border border-neutral-300/30 dark:border-neutral-800 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              src="/solutions-hybrid-remote/image (9).png"
              alt="Connected microservices workspace architecture schema platform overview"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ==========================================================================
   2. ENTERPRISE-GRADE GOVERNANCE SECTION
   ========================================================================== */
function EnterpriseGovernance() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="w-full py-16 lg:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-zinc-900 dark:text-white"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Media Frame */}
        <div
          className={`lg:col-span-6 w-full group order-2 lg:order-1 transition-all duration-1000 ease-out transform delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="w-full aspect-[600/335] rounded-xl overflow-hidden shadow-xl border border-neutral-300/30 dark:border-neutral-800 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              src="/solutions-hybrid-remote/image (12).png"
              alt="Enterprise governance dashboard secure control parameters module console"
            />
          </div>
        </div>

        {/* Right Side Content Stack */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-semibold    leading-tight transition-all duration-700 ease-out transform delay-75 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Enterprise-grade Governance
          </h2>
          
          <p
            className={`text-zinc-700 dark:text-gray-300 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed transition-all duration-700 ease-out transform delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Maintain total control over your global data with sophisticated permissions, confidential modes, and audit-ready logs.
          </p>

          {/* Compliance List Badges */}
          <div className="space-y-3 pt-2">
            {[
              "SOC2 Type II & GDPR Compliant",
              "End-to-end encrypted 'Confidential Mode'"
            ].map((text, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 p-3 bg-slate-50 dark:bg-gray-950/60 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all duration-300 transform group/item ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + idx * 100}px` }}
              >
                <div className="flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
<img 
        className="size-3.5 object-contain" 
        src={idx === 0 ? "/solutions-hybrid-remote/Container.png" : "/solutions-hybrid-remote/Icon (3).png"} 
        alt=""
      />                </div>
                <span className="text-zinc-900 dark:text-zinc-200 text-sm sm:text-base font-normal font-['Inter']">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}