'use client';

import React, { useEffect, useState, useRef } from 'react';

interface StepCard {
  number: string;
  title: string;
  description: React.ReactNode;
}

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
      { threshold, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function OnboardingRhythmSection() {
  const { ref: containerRef, inView: sectionInView } = useElementInView(0.05);

  const steps: StepCard[] = [
    {
      number: '01',
      title: 'Start from a template',
      description: <>Choose a workspace template built for<br className="hidden lg:inline" /> your team, department, or client<br className="hidden lg:inline" /> structure.</>
    },
    {
      number: '02',
      title: 'Invite the right teams',
      description: <>Add members, set roles, and enable<br className="hidden lg:inline" /> guest access where needed.</>
    },
    {
      number: '03',
      title: 'Connect calendars',
      description: <>Sync meetings and enable recap<br className="hidden lg:inline" /> capture for the workspaces that need it.</>
    },
    {
      number: '04',
      title: 'Apply templates',
      description: <>Roll out consistent channel structures<br className="hidden lg:inline" /> and policies across teams.</>
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="w-full bg-slate-100 dark:bg-slate-950 py-20 lg:py-24 font-sans antialiased transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-[1216px] mx-auto px-6 flex flex-col items-center">
        
        {/* Section Headers */}
        <div 
          className={`text-center space-y-4 max-w-2xl transition-all duration-700 ease-out ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wider uppercase block">
            Onboarding
          </span>
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Move teams into a clearer<br />communication rhythm.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed max-w-2xl mx-auto pt-2">
            Start with priority workspaces, invite the right teams, connect calendars, enable meeting recaps, and use templates to help teams adopt Zoiko Sema consistently.
          </p>
        </div>

        {/* Steps Grid Block */}
        <div className="w-full mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={step.number}
              className={`bg-white dark:bg-slate-900 rounded-2xl border border-violet-100 dark:border-slate-800/80 p-6 flex flex-col justify-start min-h-[176px] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-md hover:border-violet-200 dark:hover:border-slate-700 group`}
              style={{ 
                transitionDelay: sectionInView ? `${idx * 100}ms` : '0ms',
                transform: sectionInView ? 'none' : 'translateY(32px)',
                opacity: sectionInView ? 1 : 0
              }}
            >
              <div className="text-violet-200 dark:text-violet-800/60 text-2xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-violet-400 dark:group-hover:text-violet-600">
                {step.number}
              </div>
              <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold tracking-tight mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 dark:text-slate-400 text-sm font-normal leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Action CTA Blocks */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 lg:mt-16 transition-all duration-700 delay-500 ease-out ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm rounded-[52px] shadow-sm transition-all duration-200 transform active:scale-95 whitespace-nowrap">
            Get onboarding guidance
          </button>
          
          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold text-sm tracking-wide transition-colors duration-200 transform active:scale-95 px-4 py-2">
            Start free
          </button>
        </div>

      </div>
    </section>
  );
}