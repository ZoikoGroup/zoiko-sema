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

export default function ZoikoSemaConfidentialMode() {
  const [sectionRef, isVisible] = useScrollReveal();
  const securityTags = [
    'E2EE meetings',
    'Protected messaging',
    'Workspace policy controls',
    'AI and recording off in this mode'
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900 py-20 px-4 sm:px-6 lg:px-8 relative text-white overflow-hidden min-h-[712px] flex items-center"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(at_20%_15%,rgba(99,102,241,0.25),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.8),transparent)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: TEXT CONTENT & ACTIONS */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          {/* Animated Header & Info Sentences */}
          <div className={`space-y-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-2">
              <span className="size-1.5 bg-white rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/90 font-sans">
                Confidential Mode
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-sans leading-tight">
              Private conversations <br />
              for work that cannot <br />
              be exposed.
            </h2>
            
            <p className="text-sm sm:text-base text-white/70 max-w-xl font-sans leading-relaxed">
              End-to-end encrypted internal meetings and messaging, with clear trade-offs: AI summaries, recording, transcription, and content search stay off while Confidential Mode is active.
            </p>
          </div>

          {/* Interactive Action Buttons */}
          <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 transition-all duration-1000 delay-150 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <a href="/start-free" className="px-8 py-3.5 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-blue-600/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center">
              Start free
            </a>
            <a href="/contact" className="px-8 py-3.5 cursor-pointer border border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-semibold text-sm rounded-full transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center inline-flex items-center justify-center">
              Contact sales
            </a>
          </div>

          {/* Inline Privacy/Security Framework Tags */}
          <div className={`flex flex-wrap gap-2.5 pt-4 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'}`}>
            {securityTags.map((tag, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-semibold text-white/90 font-sans tracking-wide transition-all duration-300 hover:scale-105"
              >
                {tag}
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: HERO GRAPHIC MEDIA MOCKUP */}
        <div className={`lg:col-span-6 w-full flex justify-center lg:justify-end transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <div className="w-full max-w-[540px] aspect-[540/501] bg-slate-900/40 dark:bg-gray-900/40 rounded-[20px] shadow-[0px_30px_80px_rgba(0,0,0,0.45)] border border-white/10 overflow-hidden transition-all duration-500 hover:scale-[1.02] group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/confidentail/image 70.png"
              alt="Secure user dashboard view reflecting real-time encryption management"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
