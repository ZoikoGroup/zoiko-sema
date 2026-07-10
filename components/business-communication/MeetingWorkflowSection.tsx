'use client';

import React, { useEffect, useState, useRef } from 'react';

// ── Intersection Observer Hook for Scroll Reveals ──
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function MeetingWorkflowSection() {
  const { ref: containerRef, inView: sectionInView } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes mtgFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .mtg-hidden  { opacity: 0; transform: translateY(30px); }
        .mtg-visible { animation: mtgFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .mtg-hidden, .mtg-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        ref={containerRef}
        className="w-full bg-slate-100 dark:bg-slate-950 py-16 md:py-24 font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Meeting Live-Recap Card Frame */}
          <div 
            className={`order-2 lg:order-1 lg:col-span-7 w-full mtg-hidden ${
              sectionInView ? "mtg-visible" : ""
            }`}
          >
            <div className="w-full bg-white dark:bg-slate-900 border border-violet-100 dark:border-slate-800 rounded-2xl shadow-[0px_30px_60px_-30px_rgba(20,22,60,0.16)] p-6 md:p-8 flex flex-col space-y-6">
              
              {/* Top Row: Meeting Identification metadata */}
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">
                    Weekly business review
                  </h3>
                  <p className="text-slate-400 text-xs font-normal">
                    Today &middot; 3:00–3:30 PM &middot; 6 participants
                  </p>
                </div>
                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs font-bold rounded-full transition-all duration-150 shadow-sm shadow-blue-600/10 hover:-translate-y-0.5">
                  Join
                </button>
              </div>

              <hr className="border-gray-100 dark:border-slate-800/80" />

              {/* Middle Row: Decoded Decisions block */}
              <div className="space-y-2.5">
                <h4 className="text-slate-400 dark:text-slate-500 text-xs font-bold tracking-wider uppercase">
                  Recap &middot; Decisions
                </h4>
                <div className="w-full bg-violet-100 dark:bg-indigo-950/40 border border-violet-200/20 px-4 py-3 rounded-xl text-indigo-800 dark:text-indigo-300 text-sm font-normal">
                  ✓ Proceed with phased rollout across regions
                </div>
              </div>

              {/* Bottom Row: Post-Meeting Action Items Stream */}
              <div className="space-y-1.5">
                <h4 className="text-slate-400 dark:text-slate-500 text-xs font-bold tracking-wider uppercase pb-1">
                  Action Items
                </h4>
                
                {/* Action Item 1 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800/60 gap-1 sm:gap-4">
                  <span className="text-slate-900 dark:text-slate-200 text-sm font-normal">
                    Revise statement of work
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-semibold whitespace-nowrap">
                    M. Alvarez &middot; Fri
                  </span>
                </div>

                {/* Action Item 2 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-1 sm:gap-4">
                  <span className="text-slate-900 dark:text-slate-200 text-sm font-normal">
                    Notify client of updated timeline
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-semibold whitespace-nowrap">
                    S. Chen &middot; Mon
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Explainer Context text elements */}
          <div 
            className={`order-1 lg:order-2 lg:col-span-5 flex flex-col items-start text-left space-y-6 mtg-hidden ${
              sectionInView ? "mtg-visible" : ""
            }`}
            style={{ animationDelay: '0.15s' }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Turn meetings into decisions, next steps, and shared context.
            </h2>
            
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect agendas, video meetings, meeting notes, AI summaries, action items, and follow-up messages inside the same workspace.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm rounded-full shadow-md shadow-blue-600/10 transition-all duration-150 hover:-translate-y-0.5">
                Get a demo
              </button>
              <button className="group text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-150">
                <span>See meeting workflows</span>
                <svg className="size-4 transform group-hover:translate-x-0.5 transition-transform duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}