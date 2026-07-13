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

export default function SecurityReviewPathway() {
  const [sectionRef, isVisible] = useScrollReveal();

  const steps = [
    {
      num: 1,
      title: 'Discover',
      desc: 'Buyer or admin opens Security Center.',
      color: 'bg-blue-500',
    },
    {
      num: 2,
      title: 'Select',
      desc: 'Choose security, privacy, AI, or compliance.',
      color: 'bg-violet-600',
    },
    {
      num: 3,
      title: 'Review',
      desc: 'Read policy, controls, FAQs, and evidence.',
      color: 'bg-teal-600',
    },
    {
      num: 4,
      title: 'Request',
      desc: 'Ask for DPA, questionnaire, or review.',
      color: 'bg-slate-900 dark:bg-gray-100 dark:text-slate-900',
    },
    {
      num: 5,
      title: 'Resolve',
      desc: 'Route to sales, security, legal, or support.',
      color: 'bg-green-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-start items-center gap-12 md:gap-16">
        
        {/* HEADER SEGMENT */}
        <div className={`w-full max-w-2xl flex flex-col justify-start items-center gap-4 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex items-center gap-2">
            <span className="size-1.5 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-sans">
              SECURITY REVIEW PATHWAY
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans leading-tight text-slate-900 dark:text-white">
            A guided path for procurement and security review.
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-sans leading-relaxed">
            Discover, select, review, request, and route to the right team — without emailing a generic inbox.
          </p>
        </div>

        {/* STEP WORKFLOW LOGIC */}
        <div className={`w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-1.5 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          {steps.map((step, index) => (
            <React.Fragment key={step.num}>
              {/* Individual Step Card */}
              <div className="w-full max-w-xs lg:w-56 h-44 relative bg-slate-50 dark:bg-white/5 hover:bg-slate-100/70 dark:hover:bg-white/[0.08] border border-slate-200/60 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 rounded-2xl transition-all duration-200 cursor-pointer shadow-sm hover:-translate-y-1.5 group p-6">
                <div className={`size-11 ${step.color} rounded-full flex items-center justify-center text-white text-xl font-bold font-sans transition-transform duration-300 group-hover:scale-110`}>
                  {step.num}
                </div>
                <h3 className="mt-5 text-lg font-bold font-sans text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-gray-400 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
              
              {/* Custom Pipeline Connector Line */}
              {index < steps.length - 1 && (
                <div className="w-[2px] h-6 lg:w-4 lg:h-[2px] bg-slate-300 dark:bg-white/10 rounded-full shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* COMPLEMENTARY GALLERY SHOWCASE */}
        <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="h-80 relative bg-slate-100 dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 group shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none z-10" />
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" src="/security-center/image 87.png" alt="Showcase dashboard 1" />
          </div>
          
          <div className="h-80 relative bg-slate-100 dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 group shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none z-10" />
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" src="/security-center/image 88.png" alt="Showcase dashboard 2" />
          </div>
          
          <div className="h-80 md:col-span-2 lg:col-span-1 relative bg-slate-100 dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 group shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none z-10" />
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" src="/security-center/image 89.png" alt="Showcase dashboard 3" />
          </div>
        </div>

      </div>
    </section>
  );
}