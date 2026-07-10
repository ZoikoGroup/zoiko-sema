'use client';

import React, { useEffect, useState, useRef } from 'react';

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

export default function ZoikoTimeIntegration() {
  const { ref: leftRef, inView: leftInView } = useElementInView(0.1);
  const { ref: rightRef, inView: rightInView } = useElementInView(0.1);

  return (
    <section className="w-full bg-slate-900 py-20 lg:py-28 font-sans antialiased text-white overflow-hidden">
      {/* FIXED: Using lg:grid-cols-2 to let the text expand comfortably without breaking lines */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Content Column */}
        <div 
          ref={leftRef}
          className={`col-span-1 space-y-6 text-center lg:text-left transition-all duration-700 ease-out ${
            leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Context Badge Pill */}
          <div className="inline-flex items-center justify-center px-3 py-1 bg-white/10 rounded-[20px]">
            <span className="text-slate-300 text-xs font-bold tracking-wide uppercase">
              ZOIKOTIME
            </span>
          </div>

          {/* Core Headings */}
          <div className="space-y-6">
            <h2 className="text-white text-4xl font-bold tracking-normal leading-[44px]">
              Add workforce context when<br className="hidden sm:inline" /> communication needs<br className="hidden sm:inline" /> operational accountability.
            </h2>
            <p className="text-base text-slate-300 font-normal leading-7 max-w-xl mx-auto lg:mx-0">
              Organizations using ZoikoTime can connect communication spaces with privacy-respecting workforce context, policy alignment, and operational governance where appropriate.
            </p>
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm rounded-[43px] transition-all duration-200 shadow-md transform active:scale-95 whitespace-nowrap">
              Explore ZoikoTime integration
            </button>
            <button className="px-1 py-2 text-white font-bold text-sm border-b border-white/40 hover:border-white transition-colors duration-200 whitespace-nowrap transform active:scale-95">
              Talk to enterprise sales
            </button>
          </div>
        </div>

        {/* Right Preview Card Column */}
        <div 
          ref={rightRef}
          className={`col-span-1 flex justify-center lg:justify-end transition-all duration-750 ease-out ${
            rightInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-[0.98]'
          }`}
        >
          <div className="w-full max-w-[502px] bg-white rounded-2xl p-6 sm:p-8 flex flex-col gap-1 transition-all duration-500 shadow-[0px_40px_90px_-30px_rgba(0,0,0,0.50)] hover:-translate-y-1.5 group">
            
            {/* Row 1 */}
            <div className="flex items-center justify-between py-4 border-b border-slate-100">
              <span className="text-sm font-semibold text-slate-900">
                Connection status
              </span>
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-xl shadow-sm">
                Connected
              </span>
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-between py-4 border-b border-slate-100">
              <span className="text-sm font-semibold text-slate-900">
                Workspace mapping
              </span>
              <span className="text-xs text-gray-500 font-normal">
                12 spaces linked
              </span>
            </div>

            {/* Row 3 */}
            <div className="flex items-center justify-between py-4 border-b border-slate-100">
              <span className="text-sm font-semibold text-slate-900">
                Privacy mode
              </span>
              <span className="text-xs text-gray-500 font-normal">
                Aggregated, org-level
              </span>
            </div>

            {/* Row 4 */}
            <div className="flex items-center justify-between py-4">
              <span className="text-sm font-semibold text-slate-900">
                Policy alignment
              </span>
              <span className="text-xs text-emerald-600 font-bold">
                Up to date
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}