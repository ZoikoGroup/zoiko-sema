"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Scroll Reveal Animation Hook ---
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
      { threshold: 0.02 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function DistributedWorkspaceSuite() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 overflow-x-hidden">
      <DistributedDrift />
      <AsyncStandups />
      <TimelineMapping />
    </div>
  );
}

/* ==========================================================================
   1. STOP THE DISTRIBUTED DRIFT (Grid Feature Cards)
   ========================================================================== */
function DistributedDrift() {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    {
      link:"/solutions-hybrid-remote/image (2).png",  
      title: "Time-zone Coordination",
      desc: "Eliminate the guesswork of availability with intelligent overlap mapping and quiet hour protection."
    },
    {
      link:"/solutions-hybrid-remote/image (1).png", 
      title: "Missed Handoffs",
      desc: "Automated task transitions ensure that when London logs off, New York is ready to pick up the baton."
    },
    {
      link:"/solutions-hybrid-remote/image (3).png", 
      title: "Scattered Context",
      desc: "Unify messages, meetings, and files into a single governed workspace that lives across time zones."
    }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-zinc-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-zinc-900 dark:text-zinc-100 text-3xl sm:text-4xl font-semibold    tracking-tight">
            Stop the distributed drift
          </h2>
          <p className="text-zinc-700 dark:text-gray-400 text-base font-normal   max-w-[672px] mx-auto leading-relaxed">
            Siloed communication and time-zone friction cost enterprise teams thousands of hours annually. We solve for the gap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white/70 dark:bg-gray-950 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200/80 dark:outline-slate-800/80 backdrop-blur-[6px] flex flex-col justify-start items-start gap-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              <div className="w-full aspect-[327/158] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden border border-neutral-300/20">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={feat.link}
                  alt={`${feat.title} context breakdown matrix dashboard representation`}
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-zinc-900 dark:text-zinc-100 text-xl sm:text-2xl font-semibold    group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-zinc-700 dark:text-gray-400 text-sm font-normal   leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   2. ASYNC STANDUPS FOR VELOCITY (Image Left, Content Right)
   ========================================================================== */
function AsyncStandups() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-28 bg-violet-50 dark:bg-gray-950/40 text-zinc-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1184px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Graphic Console */}
        <div className="lg:col-span-6 w-full order-2 lg:order-1 group">
          <div className="w-full aspect-[514/288] rounded-xl overflow-hidden shadow-xl border border-neutral-300/30 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl">
            <img
              className="w-full h-full object-cover"
              src="/solutions-hybrid-remote/image (5).png"
              alt="Async Standups velocity management control board display"
            />
          </div>
        </div>

        {/* Right Side: Details Stack */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <h2 className="text-zinc-900 dark:text-zinc-100 text-2xl sm:text-3xl font-semibold    tracking-tight">
            Async Standups for Velocity
          </h2>
          <p className="text-zinc-700 dark:text-gray-400 text-base sm:text-lg font-normal   leading-relaxed">
            Replace draining daily calls with structured async updates. View progress bars, blockers, and manager reviews without needing everyone on a single call.
          </p>
          
          <div className="space-y-4 pt-2">
         {[
  "Auto-compiled daily reports",
  "Blocker escalation workflows"
].map((text, idx) => (
  <div key={idx} className="flex items-center gap-4 group/item">
    {/* Replaced the square placeholder box with the native SVG icon */}
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-sky-700 dark:text-sky-500 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M8 12L11 15L16 9" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
    <span className="text-zinc-900 dark:text-zinc-200 text-base font-normal font-['Inter']">
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

/* ==========================================================================
   3. PRECISION TIMELINE MAPPING (Content Left, Image Right)
   ========================================================================== */
function TimelineMapping() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-zinc-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1184px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content Box */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-zinc-900 dark:text-zinc-100 text-2xl sm:text-3xl font-semibold    tracking-tight">
            Precision Timeline Mapping
          </h2>
          <p className="text-zinc-700 dark:text-gray-400 text-base sm:text-lg font-normal   leading-relaxed">
            Visualize the entire team's day. See at a glance where shifts overlap for critical collaborative windows and where work is being handed off.
          </p>

          {/* Embedded Subcard Engine element */}
          <div className="p-6 bg-white/70 dark:bg-gray-950 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200/80 dark:outline-slate-800/80 backdrop-blur-[6px] space-y-4 shadow-sm transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="size-10 bg-indigo-100 dark:bg-indigo-950/60 rounded-full flex justify-center items-center flex-shrink-0">
                <img className="size-5"  src="/solutions-hybrid-remote/image (7).png"/>
              </div>
              <h4 className="text-zinc-900 dark:text-zinc-100 text-sm font-semibold    tracking-wide">
                Dynamic Overlap Engine
              </h4>
            </div>
            <p className="text-zinc-800 dark:text-gray-300 text-sm font-normal   leading-relaxed">
              Our AI predicts the best 30-minute window for a global sync based on historical team activity and local time zones.
            </p>
          </div>
        </div>

        {/* Right Side: Large Framework Preview Display */}
        <div className="lg:col-span-6 w-full group">
          <div className="w-full aspect-[514/288] rounded-xl overflow-hidden shadow-xl border border-neutral-300/30 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl">
            <img
              className="w-full h-full object-cover"
              src="/solutions-hybrid-remote/image (13).png"
              alt="Precision timeline mapping overlap algorithm matrix console view"
            />
          </div>
        </div>
      </div>
    </section>
  );
}