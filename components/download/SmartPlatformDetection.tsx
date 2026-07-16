"use client";

import React, { useEffect, useState, useRef } from 'react';

export default function SmartPlatformDetection() {
  const [hasEntered, setHasEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Intersection observer to handle scroll-driven entrance transformations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // System attributes matrix configuration mapping icons to content parameters
  const systemSpecs = [
    {
      label: "ARCHITECTURE",
      value: "ARM64 (M-Series)",
      icon: "/download/Image1 (7).png"
    },
    {
      label: "BROWSER SUPPORT",
      value: "Safari 17.4+ Certified",
      icon: "/download/Image1 (8).png"
    },
    {
      label: "COMPATIBILITY",
      value: "Enterprise Ready",
      icon: "/download/Image1 (9).png"
    },
    {
      label: "CHANNEL",
      value: "Stable (Prod)",
      icon: "/download/Image1 (10).png"
    }
  ];

  return (
    <section
      ref={containerRef}
      className={`w-full py-20 px-4 sm:px-8 lg:px-20 bg-white dark:bg-gray-950 transition-all duration-1000 ease-out transform ${
        hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="max-w-[512px] flex flex-col gap-3 text-left">
          <h2 className="text-black dark:text-white text-3xl font-semibold  leading-tight tracking-tight">
            Smart Platform Detection
          </h2>
          <p className="text-zinc-700 dark:text-gray-400 text-base font-normal  leading-relaxed">
            We've automatically detected your system configuration for the best installation experience.
          </p>
        </div>

        {/* 4-Column Responsive Grid Blocks */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemSpecs.map((spec, index) => {
            const IconComponent = spec.icon;
            return (
              <div
                key={index}
                className="p-6 bg-white/70 dark:bg-gray-900/60 backdrop-blur-[6px] rounded-xl border border-slate-950/[0.05] dark:border-slate-800/80 shadow-[0px_4px_20px_0px_rgba(10,17,40,0.03)] flex flex-col items-start gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-indigo-600/30 dark:hover:border-indigo-500/40 group cursor-default"
              >
                {/* Feature Status indicator Icon wrapper container */}
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <img className="size-5 shrink-0" src={spec.icon}/>
                </div>
                
                <div className="w-full space-y-1">
                  <span className="text-zinc-500 dark:text-gray-400 text-xs font-semibold  uppercase tracking-wider block">
                    {spec.label}
                  </span>
                  <div className="text-zinc-900 dark:text-white text-lg font-semibold  leading-snug">
                    {spec.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}