"use client"
import React, { useEffect, useRef, useState } from 'react';

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
        rootMargin: '0px 0px -30px 0px' 
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function ZoikoSemaTrustResources() {
  const [sectionRef, sectionVisible] = useScrollReveal();

  const trustTopics = [
    {
      code: 'SC',
      title: 'Security Center',
      desc: 'Understand product security posture, safeguards, and review pathways.',
      action: 'Security overview',
      bgClass: 'bg-sky-100 text-blue-500 dark:bg-sky-500/10 dark:text-sky-400',
      accentText: 'text-blue-500 dark:text-blue-400'
    },
    {
      code: 'AI',
      title: 'Responsible AI',
      desc: 'AI use, governance, human review, meeting summaries, and admin controls.',
      action: 'View Responsible AI',
      bgClass: 'bg-green-100 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400',
      accentText: 'text-teal-600 dark:text-teal-400'
    },
    {
      code: 'PD',
      title: 'Privacy & Data',
      desc: 'Data handling, DPA, retention, requests, and privacy controls.',
      action: 'View Privacy & Data',
      bgClass: 'bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
      accentText: 'text-violet-600 dark:text-violet-400'
    },
    {
      code: 'CO',
      title: 'Compliance',
      desc: 'Review-ready compliance material and procurement routing.',
      action: 'View Compliance',
      bgClass: 'bg-green-100 text-green-500 dark:bg-green-500/10 dark:text-green-400',
      accentText: 'text-green-500 dark:text-green-400'
    },
    {
      code: 'SP',
      title: 'Subprocessors',
      desc: 'Vendor and subprocessor categories, notices, and updates.',
      action: 'View Subprocessors',
      bgClass: 'bg-orange-100 text-amber-500 dark:bg-amber-500/10 dark:text-amber-400',
      accentText: 'text-amber-500 dark:text-amber-400'
    },
    {
      code: 'AX',
      title: 'Accessibility',
      desc: 'Accessibility commitment and a route to report barriers.',
      action: 'View Accessibility',
      bgClass: 'bg-slate-200 text-slate-900 dark:bg-gray-800 dark:text-gray-300',
      accentText: 'text-slate-900 dark:text-gray-300'
    },
    {
      code: 'RC',
      title: 'Report a Concern',
      desc: 'Report security, privacy, AI, abuse, or accessibility concerns.',
      action: 'Report a concern',
      bgClass: 'bg-pink-100 text-red-500 dark:bg-red-500/10 dark:text-red-400',
      accentText: 'text-red-500 dark:text-red-400'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300 border-b border-slate-100 dark:border-gray-900"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Text Stack Reveal */}
        <div className={`text-center space-y-4 max-w-3xl mx-auto transition-all duration-1000 transform ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-sans">
              Trust Resources
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight leading-tight">
            Every trust topic has its own doorway.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-sans leading-relaxed">
            Each card routes you to a specialized Trust & Security page — evidence, policy, controls, and a review path — not a passive marketing tile.
          </p>
        </div>

        {/* Dynamic Responsive Resource Matrix Layout Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-200 transform ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          {trustTopics.map((topic, idx) => (
            <div 
              key={idx}
              className="group bg-white dark:bg-gray-900 border border-slate-200/70 dark:border-gray-800 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-[0px_4px_16px_rgba(18,19,43,0.015)] hover:-translate-y-1.5 hover:shadow-xl hover:border-violet-200 dark:hover:border-gray-700 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header Row: Monogram Icon Badge & Card Headline */}
                <div className="flex items-center gap-4">
                  <div className={`size-10 shrink-0 rounded-xl flex items-center justify-center font-sans font-bold text-sm tracking-wide ${topic.bgClass}`}>
                    {topic.code}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                    {topic.title}
                  </h3>
                </div>
                
                {/* Description Text block */}
                <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed font-sans">
                  {topic.desc}
                </p>
              </div>

              {/* Action Trigger Link Line */}
              <div className={`inline-flex items-center gap-1.5 text-xs font-bold font-sans ${topic.accentText} cursor-pointer group-hover:gap-2.5 transition-all duration-250`}>
                <span>{topic.action}</span>
                <span className="text-sm font-normal transform translate-y-[-0.5px]">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}