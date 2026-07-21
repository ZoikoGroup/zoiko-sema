'use client';

import React, { useEffect, useState, useRef } from 'react';

// ── Intersection Observer Hook for individual dynamic nodes ──
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
          observer.unobserve(el); // Keeps state active after entering viewport
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' } // Triggers slightly before element meets the viewpoint frame
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

interface AICard {
  letter: string;
  title: string;
  description: string;
}

export default function GovernedAISection() {
  const { ref: headerRef, inView: headerInView } = useElementInView(0.1);
  const { ref: gridRef, inView: gridInView } = useElementInView(0.1);
  const { ref: footerRef, inView: footerInView } = useElementInView(0.05);

  const cards: AICard[] = [
    {
      letter: 'S',
      title: 'Meeting summaries',
      description: 'Automatic recap of decisions and discussion points after every meeting.',
    },
    {
      letter: 'A',
      title: 'Action capture',
      description: 'Action items are identified with an owner and due date, ready to assign.',
    },
    {
      letter: 'P',
      title: 'Policy-aware AI',
      description: 'AI features respect workspace policy, sensitive-space exclusions, and retention rules.',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center gap-12 font-sans select-none overflow-hidden">
      
      {/* Header Container */}
      <div 
        ref={headerRef}
        className={`w-full max-w-2xl flex flex-col items-center gap-4 text-center transition-all duration-700 ease-out ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col items-center gap-3 w-full">
          <span className="text-violet-600 text-xs font-bold tracking-widest uppercase">
            GOVERNED AI
          </span>
          <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Use AI to reduce follow-up drift, not<br className="hidden sm:inline" /> add risk.
          </h2>
        </div>
        <p className="text-slate-600 text-base font-normal leading-relaxed max-w-xl">
          Zoiko Sema can help summarize meetings, capture decisions, identify action items, and keep teams aligned while respecting workspace policies and admin controls.
        </p>
      </div>

      {/* Cards Grid with Scroll-In Reveal & Hover Floating Layouts */}
      <div className="w-full flex flex-col items-center gap-10">
        <div 
          ref={gridRef}
          className={`w-full grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-750 ease-out ${
            gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-violet-100 shadow-sm transition-all duration-500 ease-out 
                /* Active Hover State Transformations */
                hover:-translate-y-2 hover:scale-[1.01] hover:shadow-xl hover:border-violet-200"
              style={{
                // Stagger loading times if items load cleanly together
                transitionDelay: gridInView ? `${index * 0.05}s` : '0s'
              }}
            >
              {/* Animated Avatar Icon */}
              <div className="size-10 bg-violet-50 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-violet-100 group-hover:scale-105 transform">
                <span className="text-violet-600 text-base font-bold font-serif">
                  {card.letter}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="text-slate-900 text-lg font-bold mb-3 group-hover:text-violet-600 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm font-normal leading-relaxed transition-colors duration-300 group-hover:text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Actions (Responsive Stack to Row) */}
        <div 
          ref={footerRef}
          className={`flex flex-col sm:flex-row items-center gap-6 mt-2 w-full sm:w-auto justify-center transition-all duration-700 ease-out ${
            footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a href="/ai-meetings">
          <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold rounded-full transition-all duration-200 shadow-sm shadow-blue-200 active:scale-95 transform hover:-translate-y-0.5">
            View AI summaries
          </button></a>
          <a
            href="/contact"
            className="text-blue-600 hover:text-blue-700 text-sm font-bold transition-all duration-200 text-center whitespace-nowrap transform active:scale-95 hover:translate-x-0.5"
          >
            Talk to sales for AI governance
          </a>
        </div>
      </div>

    </section>
  );
}