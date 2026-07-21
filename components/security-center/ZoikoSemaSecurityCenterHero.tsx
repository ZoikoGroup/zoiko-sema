"use client"
import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
// --- CUSTOM INTERSECTION OBSERVER HOOK FOR FLOATING REVEAL EFFECTS ---
function useScrollReveal() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { 
        threshold: 0.05, 
        rootMargin: '0px 0px -40px 0px' 
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function ZoikoSemaSecurityCenterHero() {
  const [heroRef, heroVisible] = useScrollReveal();

  return (
    <section
      ref={heroRef}
      className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-gray-950 transition-colors duration-300 overflow-hidden relative min-h-[715px] flex items-center"
    >
      {/* Ambient Decorative Background Blur */}
      <div className="absolute inset-0 bg-[radial-gradient(at_80%_20%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Content Column */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          {/* Badge Flag Component Reveal */}
          <div className={`inline-flex items-center px-4 py-1.5 bg-violet-500/10 dark:bg-violet-500/20 rounded-full border border-violet-500/20 transition-all duration-1000 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <span className="text-xs font-bold uppercase tracking-wider text-violet-400 font-sans">
              Trust & Security
            </span>
          </div>

          {/* Core Title Header Sentence Float-Up Reveal */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans leading-[1.15] transition-all duration-1000 delay-100 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Security Center for <br className="hidden sm:inline" />
            protected business <br className="hidden sm:inline" />
            communication.
          </h1>

          {/* Explanatory Body Copy Text Paragraph Reveal */}
          <p className={`text-base sm:text-lg text-slate-300 dark:text-gray-400 max-w-xl font-sans leading-relaxed transition-all duration-1000 delay-200 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            A trust-first hub that helps buyers, admins, security reviewers, and customers find Zoiko Sema security, privacy, responsible AI, compliance, subprocessors, accessibility, and concern-reporting resources in one place.
          </p>

          {/* Active Core Navigation Trigger Actions Container */}
          <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 transition-all duration-1000 delay-300 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <Link href="#overview" className="inline-flex items-center justify-center px-8 h-12 bg-white hover:bg-slate-100 active:scale-98 text-slate-900 font-bold text-sm rounded-full font-sans transition-all shadow-[0px_10px_24px_-10px_rgba(20,22,43,0.60)] transform hover:-translate-y-0.5">
              Review security
            </Link>
            <Link href="#review" className="inline-flex items-center justify-center px-8 h-12 bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-bold text-sm rounded-full font-sans transition-all shadow-[0px_10px_24px_-8px_rgba(108,79,224,0.50)] transform hover:-translate-y-0.5">
              Request security review
            </Link>
          </div>

        </div>

        {/* Right Side Visual Graphic Media Column */}
        <div className={`lg:col-span-6 flex justify-center lg:justify-end w-full transition-all duration-1000 delay-400 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <div className="w-full max-w-[540px] aspect-square bg-slate-800 dark:bg-gray-900 rounded-3xl overflow-hidden shadow-[0px_24px_60px_rgba(0,0,0,0.5),0px_0px_40px_rgba(255,255,255,0.05)] border border-slate-700/50 dark:border-gray-800 group relative">
            
            {/* Soft inner ambient glow layer visible on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
              src="/security-center/image 80.png" 
              alt="Security orchestration center dashboard visualizer mock interface background" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}