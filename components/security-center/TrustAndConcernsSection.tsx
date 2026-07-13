"use client";
import React, { useEffect, useRef, useState } from 'react';

// --- CUSTOM SCROLL-REVEAL REUSABLE HOOK ---
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
        threshold: 0.02,
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

export default function TrustAndConcernsSection() {
  const [reportRef, reportVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  const concerns = [
    {
      title: 'Security concern',
      desc: 'Report suspicious access, a vulnerability, account takeover, or a product security issue.',
      btnText: 'Report security concern',
      borderClass: 'border-t-blue-500',
      bgClass: 'bg-sky-100 dark:bg-blue-500/10 text-blue-500 dark:text-blue-400'
    },
    {
      title: 'Privacy concern',
      desc: 'Ask about data handling, a privacy request, deletion, correction, or exposure.',
      btnText: 'Submit privacy request',
      borderClass: 'border-t-violet-600',
      bgClass: 'bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400'
    },
    {
      title: 'AI concern',
      desc: 'Report incorrect, sensitive, harmful, or unauthorized AI output.',
      btnText: 'Report AI concern',
      borderClass: 'border-t-teal-600',
      bgClass: 'bg-green-100 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400'
    },
    {
      title: 'Abuse concern',
      desc: 'Report misuse, harassment, spam, fraud, or platform abuse.',
      btnText: 'Report abuse',
      borderClass: 'border-t-red-500',
      bgClass: 'bg-pink-100 dark:bg-red-500/10 text-red-500 dark:text-red-400'
    },
    {
      title: 'Accessibility barrier',
      desc: 'Report an accessibility issue or request an accommodation route.',
      btnText: 'Report barrier',
      borderClass: 'border-t-slate-900 dark:border-t-slate-400',
      bgClass: 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-200'
    },
    {
      title: 'Compliance / procurement',
      desc: 'Request evidence or review material for organizational procurement processes.',
      btnText: 'Request security review',
      borderClass: 'border-t-green-500',
      bgClass: 'bg-green-100 dark:bg-green-500/10 text-green-500 dark:text-green-400'
    }
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
      
      {/* SECTION 1: REPORT A CONCERN */}
      <section
        ref={reportRef}
        className="w-full max-w-7xl mx-auto py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Dynamic Header Stack */}
        <div className={`max-w-3xl mx-auto text-center space-y-4 transition-all duration-1000 transform ${reportVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex items-center justify-center gap-2">
            <span className="size-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 font-sans">
              Report a Concern
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
            Route every concern to the right team.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
            Security, privacy, AI, abuse, and accessibility concerns each get a clear, dedicated intake — with triage, not empty response-time promises.
          </p>
        </div>

        {/* Concern Cards Grid Layout */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 transform ${reportVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {concerns.map((concern, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-6 bg-white dark:bg-gray-900 border border-slate-200/60 dark:border-white/10 border-t-4 ${concern.borderClass} rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group`}
            >
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {concern.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 font-sans leading-relaxed">
                  {concern.desc}
                </p>
              </div>

              <div className="pt-8">
                <button className={`w-full sm:w-auto px-4 py-2 rounded-full text-xs font-bold font-sans transition-all duration-200 transform hover:scale-[1.02] ${concern.bgClass}`}>
                  {concern.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: INDIGO TRUST CALL TO ACTION BANNER */}
      <section 
        ref={ctaRef}
        className="w-full py-20 bg-gradient-to-r from-violet-600 to-indigo-800 dark:from-violet-950 dark:to-indigo-950 text-white overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:20px_20px]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          
          <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight font-sans max-w-2xl leading-tight transition-all duration-1000 transform ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            Need security review materials for your organization?
          </h2>

          <p className={`mt-4 text-sm sm:text-base text-purple-100 dark:text-purple-200/80 max-w-3xl font-sans leading-relaxed transition-all duration-1000 delay-200 transform ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'}`}>
            Review Zoiko Sema trust resources, request a security review, view data processing information, or report a concern to the right team.
          </p>

          {/* Fully Responsive CTA Actions Block */}
          <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto transition-all duration-1000 delay-400 transform ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <button className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-indigo-800 font-sans text-sm font-bold rounded-full shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              Request security review
            </button>
            
            <button className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-sans text-sm font-bold rounded-full border border-white/30 hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              View Data Processing Addendum
            </button>
            
            <button className="w-full sm:w-auto px-4 py-2 text-white hover:text-purple-200 font-sans text-sm font-bold border-b border-white/40 hover:border-white transition-all duration-200">
              Report a concern
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}