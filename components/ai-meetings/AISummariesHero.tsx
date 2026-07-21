"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

// --- CUSTOM INTERSECTION OBSERVER REVEAL HOOK ---
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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function MeetingSummariesHero() {
  const [heroRef, heroVisible] = useScrollReveal();
  const router = useRouter();

  const tags = [
    'Summary',
    'Decisions',
    'Owners',
    'Next steps',
    'Searchable',
    'Policy aware'
  ];

  return (
    <section
      ref={heroRef}
      className={`relative w-full md:py-12 flex items-center bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 dark:from-slate-900 dark:to-gray-950 text-white overflow-hidden py-10 px-6 sm:px-8 lg:px-12 transition-all duration-1000 ease-out transform ${
        heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      {/* Absolute Decorative Ambient Glow Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(79,70,229,0.35),transparent_55%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Context Content Engine */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Accent Header Tagline */}
          <div className="flex items-center gap-2.5 group">
            <span className="size-2 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-indigo-300 uppercase font-sans">
              AI Meeting Summaries
            </span>
          </div>

          {/* Core Descriptive Messaging Block */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] font-sans">
              AI meeting summaries <br className="hidden sm:inline"/>
              that turn meetings into <br className="hidden sm:inline"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-200 to-white">
                decisions.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 dark:text-gray-400 font-sans max-w-xl leading-relaxed">
              Summarize meetings, capture decisions, identify owners, draft follow-ups, and keep every outcome searchable inside your Zoiko Sema workspace.
            </p>
          </div>

          {/* Primary Action Engagement Matrix */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <button onClick={()=>router.push('/start-free')} className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 font-semibold rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-[0px_8px_24px_rgba(37,99,235,0.35)] focus:outline-none focus:ring-2 focus:ring-blue-400">
              Start free
            </button>
            
            <button onClick={()=>router.push('/contact-sales')}
            className="px-7 py-3.5 bg-transparent hover:bg-white/5 font-semibold rounded-full text-sm transition-all duration-300 border border-white/20 dark:border-gray-800 hover:border-white/40 focus:outline-none">
              Contact sales
            </button>

            <button className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-indigo-200 transition-colors py-2 focus:outline-none">
              <span>Watch 60-second demo</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Micro pills feature cluster */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 dark:bg-gray-900/40 dark:hover:bg-gray-800/60 border border-white/10 dark:border-gray-850 text-white/90 dark:text-gray-300 text-xs font-semibold rounded-full backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-default select-none"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* Right Column: Media Frame Showcase */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[540px] aspect-[540/458] rounded-2xl overflow-hidden shadow-[0px_30px_80px_rgba(0,0,0,0.5)] dark:shadow-black/70 border border-white/10 dark:border-gray-800 transition-transform duration-700 hover:scale-[1.02]">
            <img
              className="w-full h-full object-cover"
              src="/ai-meetings/image 49 (1).png"
              alt="Zoiko Sema workspace collaborative interface showcasing structural real-time AI context generated summaries panel dashboard"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
