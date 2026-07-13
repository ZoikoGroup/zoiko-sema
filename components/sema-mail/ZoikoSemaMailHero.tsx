 "use client";

import React, { useEffect, useRef, useState } from "react";

// Intersection Observer for smooth entry animations
function useInView(threshold = 0.1) {
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

export default function ZoikoSemaMailHero() {
  const { ref: containerRef, inView: isVisible } = useInView(0.05);

  const featureBadges = [
    "Connected inbox",
    "Calendar-ready",
    "AI follow-ups",
    "Workspace policy",
    "Searchable context",
  ];

  return (
    <>
      <style>{`
        @keyframes heroRevealUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-hidden { opacity: 0; transform: translateY(30px); }
        .hero-visible { animation: heroRevealUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <section 
        ref={containerRef}
        className={`w-full min-h-[775px] bg-[#1e1b4b] bg-radial-[at_20%_15%] from-indigo-600/60 via-slate-950 to-slate-950 dark:bg-gray-950 py-16 md:py-24 overflow-hidden relative text-white flex items-center transition-colors duration-300 hero-hidden ${
          isVisible ? "hero-visible" : ""
        }`}
      >
        {/* Atmosphere Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* LEFT COLUMN: MARKETING CONTENT & BADGES */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Pill Header Badge */}
            <div className="inline-flex items-center gap-2 mb-6 self-start select-none">
              <span className="size-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-white dark:text-white font-bold text-xs tracking-widest uppercase font-sans">
                ZOIKO SEMA MAIL
              </span>
            </div>

            {/* Core Section Title */}
            <h1 className="text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.15] tracking-tight mb-5 text-white dark:text-white">
              Business email that<br/>keeps every conversation in context.
            </h1>

            {/* Core Subtext Context Block */}
            <p className="text-white/70 dark:text-gray-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl mb-8 font-sans">
              Zoiko Sema Mail connects your inbox with meetings, messaging,
              calendar, files, AI follow-ups, search, and workspace
              governance — so important email becomes coordinated work
              instead of another disconnected thread.
            </p>

            {/* Action buttons frame with float-up interactions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10 md:mb-12">
              <a
                href="#"
                className="w-full sm:w-52 h-12 bg-blue-600 rounded-full text-white text-sm font-semibold inline-flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 shadow-[0px_10px_25px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0px_15px_30px_-5px_rgba(37,99,235,0.6)]"
              >
                Start free
              </a>
              <a
                href="#"
                className="w-full sm:w-52 h-12 rounded-full border border-white/30 text-white text-sm font-semibold inline-flex items-center justify-center bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              >
                Contact sales
              </a>
            </div>

            {/* Checkmark Interactive Matrix Cloud */}
            <div className="flex flex-wrap items-center gap-2.5 max-w-xl">
              {featureBadges.map((badge, idx) => (
                <div 
                  key={idx}
                  className="px-4 py-2 bg-white/5 dark:bg-gray-900/50 rounded-full border border-white/20 dark:border-gray-800 backdrop-blur-md text-white/90 dark:text-white text-xs font-semibold select-none transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: RESPONSIVE APPLICATION INTERFACE PANEL */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[540px] bg-white dark:bg-gray-900 rounded-[20px] shadow-[0px_30px_80px_rgba(0,0,0,0.55)] dark:shadow-[0px_30px_80px_rgba(0,0,0,0.8)] border border-white/10 text-slate-900 dark:text-white overflow-hidden flex flex-col min-h-[540px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_40px_100px_rgba(0,0,0,0.7)] group">
              
              {/* Top OS Window Header Row */}
              <div className="w-full h-8 bg-violet-50 dark:bg-gray-950 border-b border-slate-200 dark:border-gray-800 px-4 flex items-center gap-1.5 shrink-0 select-none">
                <div className="size-2 bg-slate-300 dark:bg-gray-700 rounded-full" />
                <div className="size-2 bg-slate-300 dark:bg-gray-700 rounded-full" />
                <div className="size-2 bg-slate-300 dark:bg-gray-700 rounded-full" />
              </div>

              {/* Main Workspace Frame */}
              <div className="flex flex-1 overflow-hidden min-h-[500px]">
                
                {/* Simulated Mail Client Sidebar App Stream */}
                <div className="w-1/3 bg-violet-50/50 dark:bg-gray-950/40 border-r border-slate-200 dark:border-gray-800 p-3 sm:p-4 hidden sm:flex flex-col gap-1 select-none">
                  <span className="text-slate-900 dark:text-white text-xs font-bold block mb-3 pl-1">
                    Sema Mail
                  </span>
                  <div className="w-full bg-violet-100 dark:bg-gray-800/80 rounded-lg py-2 px-3 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                    Inbox
                  </div>
                  <div className="w-full py-1.5 px-3 text-slate-600 dark:text-slate-400 text-xs font-medium hover:text-slate-900 dark:hover:text-white transition-colors">
                    Priority
                  </div>
                  <div className="w-full py-1.5 px-3 text-slate-600 dark:text-slate-400 text-xs font-medium hover:text-slate-900 dark:hover:text-white transition-colors">
                    Sent
                  </div>
                  <div className="w-full py-1.5 px-3 text-slate-600 dark:text-slate-400 text-xs font-medium hover:text-slate-900 dark:hover:text-white transition-colors">
                    Drafts
                  </div>
                  <div className="w-full py-1.5 px-3 text-slate-600 dark:text-slate-400 text-xs font-medium hover:text-slate-900 dark:hover:text-white transition-colors">
                    Teams
                  </div>
                </div>

                {/* Right Content Stream Viewport Container */}
                <div className="flex-1 p-4 sm:p-5 flex flex-col gap-4 overflow-y-auto">
                  
                  {/* Global Search Component Block */}
                  <div className="w-full bg-violet-50 dark:bg-gray-950 rounded-lg border border-slate-200 dark:border-gray-800 py-2 px-3 text-slate-400 dark:text-slate-500 text-xs font-normal font-sans select-none truncate">
                    Search mail, meetings, files, decisions…
                  </div>

                  {/* Active Selected Thread Node Component (Acme Renewal) */}
                  <div className="w-full bg-violet-50 dark:bg-gray-950 rounded-xl border border-blue-600 dark:border-blue-500 p-3.5 shadow-sm transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="size-2 bg-green-600 dark:bg-green-500 rounded-full shrink-0" />
                      <span className="text-slate-900 dark:text-white text-xs font-bold truncate">
                        Acme renewal follow-up
                      </span>
                    </div>
                    <p className="text-slate-400 dark:text-slate-500 text-[11px] font-normal truncate">
                      Meeting notes attached · AI suggested reply
                    </p>
                  </div>

                  {/* Dynamic Queue Inbox Feed Row 2 */}
                  <div className="w-full rounded-xl border border-slate-200 dark:border-gray-800 p-3.5 hover:bg-slate-50 dark:hover:bg-gray-950/60 transition-all duration-200">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="size-2 bg-indigo-600 dark:bg-indigo-400 rounded-full shrink-0" />
                      <span className="text-slate-900 dark:text-white text-xs font-bold truncate">
                        Board prep: Q3 agenda
                      </span>
                    </div>
                    <p className="text-slate-400 dark:text-slate-500 text-[11px] font-normal truncate">
                      Calendar invite updated · 3 owners
                    </p>
                  </div>

                  {/* Dynamic Queue Inbox Feed Row 3 */}
                  <div className="w-full rounded-xl border border-slate-200 dark:border-gray-800 p-3.5 hover:bg-slate-50 dark:hover:bg-gray-950/60 transition-all duration-200">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="size-2 bg-yellow-600 dark:bg-amber-500 rounded-full shrink-0" />
                      <span className="text-slate-900 dark:text-white text-xs font-bold truncate">
                        Prism FC contract review
                      </span>
                    </div>
                    <p className="text-slate-400 dark:text-slate-500 text-[11px] font-normal truncate">
                      File attached · policy protected
                    </p>
                  </div>

                  {/* Deep Native AI Engine Integration Console Matrix */}
                  <div className="w-full bg-violet-50/70 dark:bg-gray-950 rounded-2xl border border-violet-100 dark:border-gray-800 p-4 flex flex-col gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xs font-extrabold block font-sans">
                      Sema AI follow-up ready
                    </span>
                    
                    <div className="space-y-1.5 select-none">
                      <div className="text-slate-600 dark:text-slate-400 text-[11px] font-normal flex items-center gap-1.5">
                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span> Summarize client request
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 text-[11px] font-normal flex items-center gap-1.5">
                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span> Draft reply with owners
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 text-[11px] font-normal flex items-center gap-1.5">
                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span> Log decision to workspace
                      </div>
                    </div>

                    {/* Operational Governance Architecture Tags Panel */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60 dark:border-gray-800/80">
                      <span className="px-2.5 py-1 bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 text-[10px] font-bold rounded-full">
                        Policy protected
                      </span>
                      <span className="px-2.5 py-1 bg-violet-200 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold rounded-full">
                        Calendar linked
                      </span>
                      <span className="px-2.5 py-1 bg-orange-100 dark:bg-amber-950/40 text-yellow-700 dark:text-amber-400 text-[10px] font-bold rounded-full">
                        Audit trail
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}