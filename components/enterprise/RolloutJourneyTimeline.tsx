'use client';

import React, { useEffect, useState, useRef } from 'react';

// Custom lightweight hook for triggering staggered entry animations on scroll
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
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function RolloutJourneyTimeline() {
  const { ref: sectionRef, inView: sectionInView } = useElementInView(0.05);

  const phases = [
    {
      num: 1,
      title: "Discovery",
      state: "Scope approved",
      desc: "Capture stakeholders, goals, constraints, timelines, and success metrics with intake cards and a readiness questionnaire."
    },
    {
      num: 2,
      title: "Identity & domains",
      state: "Identity test passed",
      desc: "Prepare SSO, SCIM, domain verification, group mapping, and admin access with clear connection and test states."
    },
    {
      num: 3,
      title: "Security policy",
      state: "Policies configured",
      desc: "Configure MFA, retention, guest rules, AI policy, audit exports, and device/session settings with confirmation modals."
    },
    {
      num: 4,
      title: "Pilot rollout",
      state: "Feedback reviewed",
      desc: "Launch to a selected department or champion group with a pilot workspace table and feedback intake."
    },
    {
      num: 5,
      title: "Full launch",
      state: "Waves completed",
      desc: "Roll out by department, region, or function with waves, launch dates, owners, blockers, and adoption targets."
    },
    {
      num: 6,
      title: "Adoption review",
      state: "Review completed",
      desc: "Measure usage, retention, support issues, and policy exceptions, then export executive outcome reports."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-20 lg:py-28 font-sans antialiased relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 space-y-16 relative">
        
        {/* Header Block */}
        <div 
          className={`text-center space-y-4 max-w-2xl mx-auto transition-all duration-700 ease-out ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase block">
            ROLLOUT JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            An ordered path from discovery to adoption review.
          </h2>
          <p className="text-slate-400 dark:text-slate-500 text-sm sm:text-base">
            Six phases, each with a clear success state.
          </p>
        </div>

        {/* Timeline Track Stack Container */}
        <div className="relative pl-16 sm:pl-24 space-y-6">
          
          {/* Vertical Track Centered Under the Numbers */}
          <div 
            className={`absolute left-[38px] sm:left-[38px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-violet-600 to-violet-200 dark:to-slate-800 rounded-full transition-all duration-1000 origin-top delay-200 ${
              sectionInView ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
            }`}
          />

          {/* Staggered Cards Loop */}
          {phases.map((p, index) => (
            <div 
              key={p.num} 
              className="relative group transition-all duration-700 ease-out"
              style={{ 
                transform: sectionInView ? 'translate-y-0' : 'translate-y-12',
                opacity: sectionInView ? 1 : 0,
                transitionDelay: `${150 + index * 100}ms`
              }}
            >
              
              {/* Timeline Index Indicator Node - Aligned over line */}
              <div className="absolute -left-[58px] translate-x-[-50%] top-3.5 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-extrabold text-base sm:text-lg z-10 transition-all duration-300 group-hover:scale-110 shadow-md group-hover:shadow-blue-500/30 ring-4 ring-slate-50 dark:ring-slate-950">
                {p.num}
              </div>

              {/* Phase Box Card Component */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-violet-100/70 dark:border-slate-800/80 p-5 sm:p-6 shadow-[0px_20px_46px_-28px_rgba(20,22,60,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-violet-300 dark:hover:border-slate-700 flex flex-col space-y-2.5 relative overflow-hidden before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-blue-600 before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                
                {/* Upper Flex Badge Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-baseline gap-2.5 flex-wrap">
                    <span className="text-slate-400 dark:text-slate-500 text-xxs sm:text-xs font-bold tracking-wider uppercase">
                      PHASE {p.num}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {p.title}
                    </h3>
                  </div>

                  {/* Status Verification Pill */}
                  <div className="self-start sm:self-auto px-3 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full transition-transform duration-300 group-hover:scale-105 select-none">
                    ✓ {p.state}
                  </div>
                </div>

                {/* Subtext Context Wrapper */}
                <p className="text-gray-500 dark:text-slate-400 text-xs sm:text-sm font-normal leading-relaxed max-w-3xl">
                  {p.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}