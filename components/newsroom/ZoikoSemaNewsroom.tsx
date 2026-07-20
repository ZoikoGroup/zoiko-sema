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

export default function ZoikoSemaNewsroom() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-20 relative bg-slate-900 dark:bg-gray-950 overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      {/* Background Radial Spot Flare Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-[at_20%_15%] from-indigo-600/35 to-indigo-600/0 to-60% pointer-events-none" />
      
      {/* Micro Grid Ambient Texture */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-black pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10 space-y-6">
        
        {/* Core Content Splitting Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Block Stack */}
          <div className="space-y-6">
            
            {/* Upper Badge Tag */}
            <div className="flex items-center gap-2">
              <div className="size-1.5 bg-indigo-400 rounded-full" />
              <span className="text-indigo-400 text-xs font-bold   uppercase tracking-widest">
                ZOIKO SEMA NEWSROOM
              </span>
            </div>

            {/* Typography Title Heading */}
            <h1 className="text-white dark:text-slate-100 text-3xl sm:text-4xl lg:text-5xl font-extrabold  leading-tight sm:leading-[1.15]">
              Verified news and<br />media resources from<br />Zoiko Sema.
            </h1>

            {/* Supporting Context Summary */}
            <p className="text-white/70 dark:text-gray-400 text-base font-normal   leading-relaxed max-w-xl">
              Find approved company updates, product announcements, press releases, media assets, and the right contact for a verified response.
            </p>

            {/* Interactive Call to Actions Triggers */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold text-sm   rounded-full shadow-lg shadow-blue-600/10 hover:bg-blue-500 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                Contact press team
              </button>
              <button className="w-full sm:w-auto px-6 py-3 border border-white/30 text-white font-semibold text-sm   rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                Download media kit
              </button>
            </div>
          </div>

          {/* Right Presentation Image Asset Container */}
          <div className="w-full aspect-[540/347] bg-white dark:bg-gray-900 rounded-[20px] shadow-[0px_30px_80px_0px_rgba(0,0,0,0.45)] border border-white/10 overflow-hidden group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              src="/newsroom/Newsroom Hub interface.png"
              alt="Zoiko Sema workspace preview visual presentation"
            />
          </div>
        </div>

        {/* Footer Audit Protocol Note */}
        <div className="pt-6 border-t border-white/10 max-w-md">
          <p className="text-white/50 dark:text-gray-500 text-xs font-normal   leading-relaxed">
            Newsroom content is published only after source, claim, rights, and approval checks.
          </p>
        </div>

      </div>
    </section>
  );
}