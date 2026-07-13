"use client"
import React, { useEffect, useRef, useState } from 'react';

// --- CUSTOM INTERSECTION OBSERVER HOOK ---
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
        rootMargin: '0px 0px -60px 0px' // Triggers slightly before the element fully hits view
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

export default function ApprovedProductVisuals() {
  const [sectionRef, isVisible] = useScrollReveal();

  const visualModules = [
    {
      title: 'Messaging',
      desc: 'Business messaging with context, channels, spaces, and file-supported conversations.',
      gradient: 'from-blue-500/10 to-indigo-500/5 dark:from-blue-500/20 dark:to-transparent',
      image:"/press/phone.jpg"
    },
    {
      title: 'Audio Calls',
      desc: 'Voice calling for workplace communication.',
      gradient: 'from-purple-500/10 to-pink-500/5 dark:from-purple-500/20 dark:to-transparent',
       image:"/press/person.jpg"
    },
    {
      title: 'Video Meetings',
      desc: 'Meetings with captions, recording, reactions, and summary support where enabled.',
      gradient: 'from-cyan-500/10 to-blue-500/5 dark:from-cyan-500/20 dark:to-transparent',
       image:"/press/laptop.jpg"
    },
    {
      title: 'AI Meeting Summaries',
      desc: 'AI-assisted recaps, action items, and decisions with governance controls.',
      gradient: 'from-amber-500/10 to-orange-500/5 dark:from-amber-500/20 dark:to-transparent',
       image:"/press/ai.jpg"
    },
    {
      title: 'Channels & Spaces',
      desc: 'Organized spaces for team, project, and client collaboration.',
      gradient: 'from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/20 dark:to-transparent',
       image:"/press/section3.jpg"
    },
    {
      title: 'Admin Console',
      desc: 'Controls for users, roles, security, AI governance, policies, and workspaces.',
      gradient: 'from-rose-500/10 to-red-500/5 dark:from-rose-500/20 dark:to-transparent',
       image:"/press/graph.png"
    },
    {
      title: 'ZoikoTime connection',
      desc: 'Where approved, ZoikoTime workflows connect with Zoiko Sema communication context.',
      gradient: 'from-violet-500/10 to-fuchsia-500/5 dark:from-violet-500/20 dark:to-transparent',
       image:"/press/graph1.png"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-violet-50/50 dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 py-16 px-4 sm:px-6 lg:px-8">
      
      <section 
        ref={sectionRef}
        className={`max-w-7xl mx-auto transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 block font-sans">
            Product Story & Visual Assets
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight text-slate-900 dark:text-white">
            Approved product visuals
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Product modules with approved media descriptions and screenshots for coverage.
          </p>
        </div>

        {/* --- DYNAMIC RESPONSIVE GRID MATRIX --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 items-stretch">
          
          {/* Loop over structural modules */}
          {visualModules.map((module, idx) => (
            <div 
              key={idx}
              className="group bg-white dark:bg-gray-950 border border-slate-200/60 dark:border-gray-850 rounded-2xl overflow-hidden shadow-[0px_2px_8px_rgba(16,22,60,0.02)] dark:shadow-none flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-slate-300 dark:hover:border-gray-850"
            >
              {/* Dynamic Graphic Placeholder Top Wrapper */}
              <div className={`h-32 w-full relative bg-gradient-to-br ${module.gradient} flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-gray-900`}>
                <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Visual Accent Box */}
                <div className="w-11/12 h-4/5 rounded-t-lg bg-white/60 dark:bg-gray-900/40 border border-white/80 dark:border-gray-850 translate-y-4 shadow-sm group-hover:translate-y-2 transition-transform duration-300 flex items-center justify-center">
                  <img className='' src={module.image} />
                </div>
              </div>

              {/* Module Metadata Text Block */}
              <div className="p-5 flex-grow flex flex-col justify-start gap-2 font-sans">
                <h3 className="text-sm font-bold font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {module.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                  {module.desc}
                </p>
              </div>
            </div>
          ))}

          {/* --- INTERACTIVE ACTION CALLOUT CARD --- */}
          <div className="group bg-white dark:bg-gray-950 border border-dashed border-slate-300 dark:border-gray-800 rounded-2xl p-6 flex flex-col justify-center items-center text-center min-h-[240px] transform transition-all duration-300 hover:-translate-y-2 hover:bg-slate-50/50 dark:hover:bg-gray-900/40 hover:border-solid hover:border-blue-500 dark:hover:border-blue-400">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-full mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <div className="space-y-1 font-sans">
              <h4 className="text-sm font-bold font-['Plus_Jakarta_Sans'] text-slate-900 dark:text-white">
                Need a specific visual?
              </h4>
              <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:underline focus:outline-none">
                <span>Request a custom image</span>
                <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}