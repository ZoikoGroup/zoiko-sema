'use client';

import React, { useEffect, useState, useRef } from 'react';

// ── Intersection Observer Hook for independent node triggers ──
function useElementInView(threshold = 0.05) {
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

interface MetricCard {
  value: string;
  label: string;
}

interface GraphBar {
  heightClass: string;
  bgClass: string;
}

export default function CommunicationHealthSection() {
  const { ref: leftRef, inView: leftInView } = useElementInView(0.1);
  const { ref: rightRef, inView: rightInView } = useElementInView(0.05);

  const metrics: MetricCard[] = [
    { value: '94%', label: 'Weekly active workspaces' },
    { value: '87%', label: 'Meeting follow-up completion' },
    { value: '1,204', label: 'AI recaps generated' },
    { value: '99%', label: 'Guest access reviewed on time' },
  ];

  const graphBars: GraphBar[] = [
    { heightClass: 'h-7', bgClass: 'bg-indigo-200 dark:bg-indigo-900/40' },
    { heightClass: 'h-10', bgClass: 'bg-indigo-300 dark:bg-indigo-800/60' },
    { heightClass: 'h-9', bgClass: 'bg-indigo-400/80 dark:bg-indigo-700/60' },
    { heightClass: 'h-14', bgClass: 'bg-indigo-400 dark:bg-indigo-600/70' },
    { heightClass: 'h-12', bgClass: 'bg-indigo-500 dark:bg-indigo-500/80' },
    { heightClass: 'h-16', bgClass: 'bg-blue-600' },
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 lg:py-13 font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Copy Block */}
        <div 
          ref={leftRef}
          className={`lg:col-span-5 space-y-6 text-center lg:text-left transition-all duration-700 ease-out ${
            leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-4">
            <h2 className="text-slate-900 dark:text-white text-3xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              Understand communication<br className="hidden sm:inline" /> health as your organization<br className="hidden sm:inline" /> grows.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Track adoption, workspace activity, meeting follow-through, AI usage, guest access, and policy health so communication stays useful over time.
            </p>
          </div>

          {/* Interactive Actions (Responsive Layout Stack) */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm rounded-full transition-all duration-200 shadow-md shadow-blue-600/10 active:scale-95 transform hover:-translate-y-0.5">
              Get a demo
            </button>
            <button className="w-full sm:w-auto px-5 py-3 text-blue-600 dark:text-blue-400 font-bold text-sm bg-transparent border border-transparent hover:border-slate-200 dark:hover:border-slate-800 rounded-full transition-all duration-200 active:scale-95 transform">
              See reporting
            </button>
          </div>
        </div>

        {/* Right Dashboard Analytics Graphics Card */}
        <div 
          ref={rightRef}
          className={`lg:col-span-7 flex justify-center lg:justify-end transition-all duration-750 ease-out ${
            rightInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-[0.99]'
          }`}
        >
          <div className="w-full max-w-[638px] bg-white dark:bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-violet-100 dark:border-slate-800/80 flex flex-col justify-between shadow-[0px_30px_60px_0px_rgba(20,22,60,0.1)] dark:shadow-[0px_30px_60px_0px_rgba(0,0,0,0.4)] group min-h-[340px]">
            
            {/* Top Metrics Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-50 dark:bg-slate-950/40 p-4 rounded-xl flex flex-col justify-center transition-all duration-300 group-hover:bg-slate-50/50 dark:group-hover:bg-slate-950/60 border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                >
                  <span className="text-blue-600 dark:text-blue-400 text-xl font-bold tracking-tight transition-transform duration-300 group-hover:scale-[1.03] origin-left block">
                    {metric.value}
                  </span>
                  <span className="text-gray-500 dark:text-slate-400 text-xs font-normal mt-1 leading-normal">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Graphic Histogram Container */}
            <div className="w-full h-20 flex items-end justify-between gap-2 sm:gap-4 mt-8 pt-4 border-t border-slate-100/60 dark:border-slate-800/50">
              {graphBars.map((bar, index) => (
                <div
                  key={index}
                  className={`w-full ${bar.bgClass} rounded-t-md transition-all duration-1000 ease-out origin-bottom transform`}
                  style={{
                    // Staggers height loading scale beautifully on initial viewport appearance
                    height: rightInView ? '100%' : '0%',
                    maxHeight: bar.heightClass === 'h-7' ? '28px' : 
                               bar.heightClass === 'h-10' ? '40px' : 
                               bar.heightClass === 'h-9' ? '36px' : 
                               bar.heightClass === 'h-14' ? '56px' : 
                               bar.heightClass === 'h-12' ? '48px' : '64px',
                    transitionDelay: rightInView ? `${index * 0.05}s` : '0s'
                  }}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}