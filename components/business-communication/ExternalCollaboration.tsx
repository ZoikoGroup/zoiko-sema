'use client';

import React, { useEffect, useState, useRef } from 'react';

// ── Intersection Observer Hook for independent node triggers ──
function useElementInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function ExternalCollaboration() {
  const { ref: leftRef, inView: leftInView } = useElementInView(0.1);
  const { ref: rightRef, inView: rightInView } = useElementInView(0.1);

  return (
    <section className="w-full bg-slate-900 dark:bg-slate-950 py-12 lg:py-14 font-sans antialiased text-white overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content Block */}
        <div 
          ref={leftRef}
          className={`lg:col-span-5 space-y-6 text-center lg:text-left transition-all duration-700 ease-out ${
            leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Collaborate outside your<br className="hidden sm:inline" /> company without losing control.
            </h2>
            <p className="text-base text-slate-300 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Invite guests into the right spaces, set access limits, manage expiry, and keep external communication visible to approved owners.
            </p>
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-2">
            <a href="/contact">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 active:scale-95 text-white font-bold text-sm rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-600/20">
              Talk to sales
            </button></a>
            <button className="px-2 py-1 text-white font-bold text-sm border-b border-white/20 hover:border-white transition-colors duration-200 transform active:scale-95 whitespace-nowrap">
              See guest controls
            </button>
          </div>
        </div>

        {/* Right Preview Card Dashboard Block */}
        <div 
          ref={rightRef}
          className={`lg:col-span-7 flex justify-center lg:justify-end transition-all duration-750 ease-out ${
            rightInView 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-16 scale-[0.98]'
          }`}
        >
          <div className="w-full max-w-[642px] bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col gap-5 text-slate-900 dark:text-white border border-slate-100/10 transition-all duration-500 ease-out shadow-[0px_40px_90px_-30px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0px_50px_100px_-25px_rgba(0,0,0,0.8)] group">
            
            {/* Card Title Header */}
            <div className="text-slate-400 dark:text-slate-500 text-xs font-bold tracking-wider uppercase">
              GUEST ACCESS
            </div>

            {/* Row 1: Status */}
            <div className="flex items-center justify-between py-3.5 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300 group-hover:border-slate-200 dark:group-hover:border-slate-700">
              <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                j.reyes@acmeclient.com
              </span>
              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105">
                Active
              </span>
            </div>

            {/* Row 2: Domain Restriction */}
            <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300 group-hover:border-slate-200 dark:group-hover:border-slate-700">
              <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                Domain restriction
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                acmeclient.com only
              </span>
            </div>

            {/* Row 3: Access Expiry */}
            <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300 group-hover:border-slate-200 dark:group-hover:border-slate-700">
              <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                Access expiry
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                30 days
              </span>
            </div>

            {/* Alert Banner Indicator */}
            <div className="w-full bg-yellow-50/90 dark:bg-amber-950/20 border border-yellow-100/50 dark:border-amber-900/30 p-3.5 rounded-xl text-yellow-700 dark:text-amber-400 text-xs font-medium leading-relaxed shadow-sm mt-2 transition-all duration-300 group-hover:bg-yellow-50 dark:group-hover:bg-amber-950/30">
              This space includes external guests. Review visibility before sharing.
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}