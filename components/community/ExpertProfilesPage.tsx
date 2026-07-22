"use client";

import React, { useEffect, useState, useRef } from 'react';

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

export default function ExpertProfilesPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 dark:from-gray-950 dark:to-gray-900 text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
      <section
        ref={ref}
        className={`max-w-7xl mx-auto space-y-12 transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
              MEMBER PROFILES AND VERIFIED EXPERTS
            </span>
          </div>
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-[700px] mx-auto leading-snug sm:leading-10">
            Transparent contribution signals. No hidden influence scores.
          </h1>
        </div>

        <div className="w-full aspect-[1136/461] rounded-[20px] overflow-hidden shadow-[0px_30px_80px_rgba(0,0,0,0.45)] border border-white/10">
          <img 
            className="w-full h-full object-cover" 
            src="/community/image 308.png" 
            alt="Verified Expert member profile system interface dashboard illustration context layout" 
          />
        </div>

        <div className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/10">
          <p className="text-white/80 text-xs sm:text-sm font-normal leading-relaxed">
            Verified expert means confirmed subject-area expertise with disclosure of employee, partner, or customer relationship — never a universal endorsement. <span className="text-indigo-300 font-semibold">Prohibited:</span> hidden influence scores, buyer tiers, contract value, or response-speed pressure.
          </p>
        </div>
      </section>
    </main>
  );
}