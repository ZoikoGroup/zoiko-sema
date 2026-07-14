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
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

interface TimelineStep {
  stepNumber: number;
  title: string;
  description: string;
}

export default function ReportMovementSection() {
  const [sectionRef, isVisible] = useScrollReveal();

  const workflowSteps: TimelineStep[] = [
    {
      stepNumber: 1,
      title: 'Classify',
      description: 'Your route and severity map to the correct queue.'
    },
    {
      stepNumber: 2,
      title: 'Validate',
      description: 'Required fields, attachments, and consent are checked.'
    },
    {
      stepNumber: 3,
      title: 'Route',
      description: 'Assigned to security, privacy, AI, legal, or support.'
    },
    {
      stepNumber: 4,
      title: 'Confirm',
      description: 'You receive a reference ID and clear next steps.'
    },
    {
      stepNumber: 5,
      title: 'Resolve',
      description: 'The owner triages, updates status, and closes the case.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 lg:py-28 bg-purple-50 dark:bg-gray-900 border-t border-b border-violet-100 dark:border-gray-800 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col gap-16">
        
        {/* --- HEADER TEXT BLOCK --- */}
        <div 
          className={`flex flex-col items-start gap-3 max-w-2xl transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="text-violet-600 dark:text-violet-400 text-xs font-bold tracking-widest uppercase">
            ROUTING & OWNERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-serif">
            How your report moves.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg font-normal leading-relaxed">
            Every concern is classified, validated, routed to an owner, and confirmed. Urgent items follow an escalation path where approved.
          </p>
        </div>

        {/* --- TIMELINE/WORKFLOW BLOCK --- */}
        <div 
          className={`relative w-full transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          {/* Connector Line (Hidden on mobile stack, visible on desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-violet-200 via-violet-300 to-violet-100 dark:from-gray-800 dark:to-gray-700 z-0" />

          {/* Steps Wrapper */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {workflowSteps.map((step) => (
              <div 
                key={step.stepNumber} 
                className="group flex flex-col items-center lg:items-center text-center p-4 rounded-2xl hover:bg-white/40 dark:hover:bg-gray-800/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Number Badge Indicator */}
                <div className="relative flex items-center justify-center size-14 rounded-3xl bg-violet-600 text-white font-bold text-lg border-4 border-purple-50 dark:border-gray-900 shadow-[0px_10px_24px_-10px_rgba(109,59,228,0.60)] group-hover:scale-110 transition-transform duration-300">
                  {step.stepNumber}
                </div>

                {/* Info Metadata */}
                <h3 className="mt-5 text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  {step.title}
                </h3>
                
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SYSTEM OVERVIEW HERO IMAGE CONTAINER --- */}
        <div 
          className={`w-full aspect-[12/4] sm:aspect-[16/5] md:aspect-[21/6] relative  rounded-[20px] overflow-hidden  shadow-xl transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
            <div className='flex flex-col-3 gap-5 bg-slate-500'>
                <img 
            className=" object-cover opacity-90 transition-transform duration-700 hover:scale-[1.02]" 
            src= "/report-concern/1.png" 
            alt="System data path visualization" 
          />
           <img 
            className=" object-cover opacity-90 transition-transform duration-700 hover:scale-[1.02]" 
            src= "/report-concern/2.png" 
            alt="System data path visualization" 
          />
          <img 
            className=" object-cover opacity-90 transition-transform duration-700 hover:scale-[1.02]" 
            src= "/report-concern/3.png" 
            alt="System data path visualization" 
          />
          <img 
            className=" object-cover opacity-90 transition-transform duration-700 hover:scale-[1.02]" 
            src= "/report-concern/5.png" 
            alt="System data path visualization" 
          />
          <img 
            className=" object-cover opacity-90 transition-transform duration-700 hover:scale-[1.02]" 
            src= "/report-concern/6.png" 
            alt="System data path visualization" 
          />
          
            </div>
          
        </div>

      </div>
    </section>
  );
}