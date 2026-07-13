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

export default function ZoikoSemaDisclosureAndCommunication() {
  const [disclosureRef, disclosureVisible] = useScrollReveal();
  const [protectedRef, protectedVisible] = useScrollReveal();

  const disclosureCards = [
    { title: 'Notice before join', desc: 'Confidential Mode notice appears before join.' },
    { title: 'AI notes unavailable', desc: 'Visible before entry, not buried in settings.' },
    { title: 'Recording unavailable', desc: 'Visible before entry as well.' },
    { title: 'Persistent indicator', desc: 'A compact Confidential Mode badge stays visible in-meeting.' }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden selection:bg-blue-500/20">

      {/* ========================================== */}
      {/* SECTION 1: BEFORE-JOIN DISCLOSURE         */}
      {/* ========================================== */}
      <section
        ref={disclosureRef}
        className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
      >
        <div className="max-w-7xl mx-auto space-y-14">
          
          {/* Animated Floating Header Block */}
          <div className={`text-center space-y-3 transition-all duration-1000 transform ${disclosureVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-blue-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-sans">Before-Join Disclosure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              You know before you join. No surprise feature loss.
            </h2>
          </div>

          {/* Interactive Large Application Workspace Showcase */}
          <div className={`w-full max-w-[1136px] mx-auto relative rounded-2xl shadow-sm border border-slate-200/60 dark:border-gray-800 overflow-hidden transition-all duration-1000 delay-150 transform ${disclosureVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} group`}>
            <div className="w-full aspect-[1136/384]">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
                src="/confidentail/image 76.png" 
                alt="Detailed system display showcasing standard workspace configurations before entrance" 
              />
            </div>
            {/* Context overlay notification bar */}
            <div className="w-full bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90 py-4 px-6 text-center">
              <p className="text-xs sm:text-sm font-semibold text-white font-sans tracking-wide">
                Confidential Mode notice appears before join, with AI and recording states visible up front.
              </p>
            </div>
          </div>

          {/* Grid Layout of Informative Context Matrix Elements */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 transform ${disclosureVisible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'}`}>
            {disclosureCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 border border-slate-200/80 dark:border-gray-800 p-6 rounded-2xl shadow-[0px_4px_16px_rgba(18,19,43,0.02)] flex flex-col justify-between space-y-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-blue-500/20 dark:hover:border-blue-400/20 group"
              >
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* SECTION 2: PROTECTED COMMUNICATION         */}
      {/* ========================================== */}
      <section
        ref={protectedRef}
        className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900 relative text-white overflow-hidden min-h-[800px] flex items-center"
      >
        {/* Ambient Gradient Background Blur */}
        <div className="absolute inset-0 bg-[radial-gradient(at_20%_15%,rgba(99,102,241,0.25),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10">
          
          {/* Animated Floating Header Block */}
          <div className={`text-center space-y-4 transition-all duration-1000 transform ${protectedVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-white rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/90 font-sans">
                Protected Communication
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
              Meet and message with stronger privacy boundaries.
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-sans leading-relaxed">
              A protected space for sensitive conversations, with feature limits made clear before communication begins.
            </p>
          </div>

          {/* Dual Split Responsive Module Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-[1136px] mx-auto w-full">
            
            {/* Graphical Image Box Panel */}
            <div className={`lg:col-span-6 w-full rounded-2xl overflow-hidden shadow-[0px_30px_80px_rgba(0,0,0,0.45)] border border-white/10 transition-all duration-1000 delay-200 transform ${protectedVisible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'} hover:scale-[1.01] group`}>
              <div className="w-full aspect-[540/380] h-full">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="/confidentail/image 72.png" 
                  alt="Encrypted channel communication visual representation interface mock" 
                />
              </div>
            </div>

            {/* Frosted Glass Dynamic Settings Data Panel */}
            <div className={`lg:col-span-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-8 flex flex-col justify-center space-y-8 transition-all duration-1000 delay-300 transform ${protectedVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} hover:border-white/30 transition-colors`}>
              <div className="space-y-3 text-left">
                <h3 className="text-lg font-bold font-sans text-white">
                  Protected message thread
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  Confidential Mode label with restricted AI/search indicators, and an optional guest chip for controlled external access.
                </p>
              </div>

              {/* Action Trigger Buttons Container */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center">
                  Start a confidential meeting
                </button>
                <button className="px-6 py-3 border border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-semibold text-xs rounded-full transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center">
                  Explore protected messaging
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}