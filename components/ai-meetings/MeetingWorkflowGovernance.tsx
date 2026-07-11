'use client';

import React, { useEffect, useRef } from 'react';

export default function MeetingWorkflowGovernance() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal-on-scroll');
          elements.forEach((el) => {
            el.classList.remove('opacity-0', 'translate-y-6');
            el.classList.add('opacity-100', 'translate-y-0');
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      
      <section 
        ref={section1Ref} 
        className="relative w-full bg-white dark:bg-slate-950 py-16 sm:py-24 font-sans antialiased overflow-hidden"
      >
        <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
          
          {/* Header Content Block */}
          <div className="max-w-[760px] w-full text-center flex flex-col items-center gap-3.5 mb-14 md:mb-20">
            <span className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Meeting-to-Summary Workflow
            </span>
            <h2 className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-10">
              AI drafts. People review. Policy governs.
            </h2>
            <p className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 text-base text-slate-500 dark:text-slate-400 leading-7">
              The summary is never shared automatically — a permitted reviewer approves it, and every step is recorded for audit.
            </p>
          </div>

          {/* Workflow Steps Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-10 gap-x-6 relative">
            
            {/* Step 1 */}
            <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[350ms] flex flex-col items-center text-center group relative">
              <div className="size-11 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-indigo-500 dark:group-hover:border-indigo-400">
                <img className="size-5" src="/ai-meetings/Frame (52).png"/>
              </div>
              {/* Desktop Connector Line */}
              <div className="hidden lg:block absolute top-5.5 left-[60%] w-[calc(100%-20%)] h-[2px] bg-gradient-to-r from-indigo-500 to-slate-200 dark:to-slate-800 z-0" />
              
              <span className="mt-4 font-extrabold text-xs text-indigo-600 dark:text-indigo-400 tracking-wider">01</span>
              <h4 className="mt-1 font-bold text-sm text-slate-900 dark:text-white tracking-tight">Meeting starts</h4>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-5 px-2">Host enables the AI summary if allowed by policy.</p>
              <span className="mt-3 px-2 py-0.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold text-[10px] rounded-full uppercase tracking-wider">Ask host / Locked</span>
            </div>

            {/* Step 2 */}
            <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[400ms] flex flex-col items-center text-center group relative">
              <div className="size-11 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-indigo-500 dark:group-hover:border-indigo-400">
                <img className="size-5" src="/ai-meetings/Frame (53).png"/>
              </div>
              {/* Desktop Connector Line */}
              <div className="hidden lg:block absolute top-5.5 left-[60%] w-[calc(100%-20%)] h-[2px] bg-gradient-to-r from-indigo-500 to-slate-200 dark:to-slate-800 z-0" />
              
              <span className="mt-4 font-extrabold text-xs text-indigo-600 dark:text-indigo-400 tracking-wider">02</span>
              <h4 className="mt-1 font-bold text-sm text-slate-900 dark:text-white tracking-tight">Transcript captured</h4>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-5 px-2">Speakers are attributed, with a correction path if uncertain.</p>
              <span className="mt-3 px-2 py-0.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold text-[10px] rounded-full uppercase tracking-wider">Confidence shown</span>
            </div>

            {/* Step 3 */}
            <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[450ms] flex flex-col items-center text-center group relative">
              <div className="size-11 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-indigo-500 dark:group-hover:border-indigo-400">
                <img className="size-5" src="/ai-meetings/Vector (3).png"/>
              </div>
              {/* Desktop Connector Line */}
              <div className="hidden lg:block absolute top-5.5 left-[60%] w-[calc(100%-20%)] h-[2px] bg-gradient-to-r from-indigo-500 to-slate-200 dark:to-slate-800 z-0" />
              
              <span className="mt-4 font-extrabold text-xs text-indigo-600 dark:text-indigo-400 tracking-wider">03</span>
              <h4 className="mt-1 font-bold text-sm text-slate-900 dark:text-white tracking-tight">AI draft generated</h4>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-5 px-2">Summary, decisions, and action items are drafted.</p>
              <span className="mt-3 px-2 py-0.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold text-[10px] rounded-full uppercase tracking-wider">Draft · Needs review</span>
            </div>

            {/* Step 4 */}
            <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[500ms] flex flex-col items-center text-center group relative">
              <div className="size-11 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-indigo-500 dark:group-hover:border-indigo-400">
                <img className="size-5" src="/ai-meetings/Frame (54).png"/>
              </div>
              {/* Desktop Connector Line */}
              <div className="hidden lg:block absolute top-5.5 left-[60%] w-[calc(100%-20%)] h-[2px] bg-gradient-to-r from-indigo-500 to-slate-200 dark:to-slate-800 z-0" />
              
              <span className="mt-4 font-extrabold text-xs text-indigo-600 dark:text-indigo-400 tracking-wider">04</span>
              <h4 className="mt-1 font-bold text-sm text-slate-900 dark:text-white tracking-tight">Host reviews</h4>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-5 px-2">Edit, confirm, or request regeneration with edit history.</p>
              <span className="mt-3 px-2 py-0.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold text-[10px] rounded-full uppercase tracking-wider">Approved</span>
            </div>

            {/* Step 5 */}
            <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[550ms] flex flex-col items-center text-center group relative">
              <div className="size-11 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-indigo-500 dark:group-hover:border-indigo-400">
                <img className="size-5" src="/ai-meetings/Frame (55).png"/>
              </div>
              {/* Desktop Connector Line */}
              <div className="hidden lg:block absolute top-5.5 left-[60%] w-[calc(100%-20%)] h-[2px] bg-gradient-to-r from-indigo-500 to-slate-200 dark:to-slate-800 z-0" />
              
              <span className="mt-4 font-extrabold text-xs text-indigo-600 dark:text-indigo-400 tracking-wider">05</span>
              <h4 className="mt-1 font-bold text-sm text-slate-900 dark:text-white tracking-tight">Shared & assigned</h4>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-5 px-2">Post to a channel and turn actions into owned tasks.</p>
              <span className="mt-3 px-2 py-0.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold text-[10px] rounded-full uppercase tracking-wider">Role-checked</span>
            </div>

            {/* Step 6 */}
            <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[600ms] flex flex-col items-center text-center group">
              <div className="size-11 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-indigo-500 dark:group-hover:border-indigo-400">
                <img className="size-5" src="/ai-meetings/Frame (57).png"/>
              </div>
              
              <span className="mt-4 font-extrabold text-xs text-indigo-600 dark:text-indigo-400 tracking-wider">06</span>
              <h4 className="mt-1 font-bold text-sm text-slate-900 dark:text-white tracking-tight">Audit recorded</h4>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-5 px-2">Creation, edits, sharing, and export are logged.</p>
              <span className="mt-3 px-2 py-0.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold text-[10px] rounded-full uppercase tracking-wider">Evidence ready</span>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
          SECTION 2: GOVERNANCE & ADMIN CONTROLS
          ======================================================================= */}
      <section 
        ref={section2Ref} 
        className="relative w-full bg-slate-950 dark:bg-slate-900 py-16 sm:py-24 font-sans antialiased overflow-hidden"
      >
        <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
          
          {/* Header Content Block */}
          <div className="max-w-[760px] w-full text-center flex flex-col items-center gap-3.5 mb-14 md:mb-20">
            <span className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75 text-xs font-bold uppercase tracking-widest text-indigo-400">
              Governance & Admin Controls
            </span>
            <h2 className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-10">
              Control where AI summaries run — and where they don't
            </h2>
            <p className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 text-base text-slate-400 leading-7">
              Enablement, host approval, sensitive-space exclusions, guest limits, retention, and audit — set per workspace, without implying surveillance.
            </p>
          </div>

          {/* Core Content Layout Interface */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Controls List Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
              
              {/* Box 1 */}
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[350ms] p-5 bg-white/5 rounded-xl border border-white/10 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="size-9 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                <img className="size-5" src="/ai-meetings/Frame (58).png"/>
                </div>
                <h4 className="font-bold text-sm text-white tracking-tight">Enable by scope</h4>
                <p className="mt-1 text-xs text-slate-400 leading-5">Turn AI summaries on globally, by workspace, by role, or by meeting type.</p>
              </div>

              {/* Box 2 */}
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[400ms] p-5 bg-white/5 rounded-xl border border-white/10 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="size-9 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                <img className="size-5" src="/ai-meetings/Frame (59).png"/>
                </div>
                <h4 className="font-bold text-sm text-white tracking-tight">Host approval</h4>
                <p className="mt-1 text-xs text-slate-400 leading-5">Require host or reviewer approval before any summary is shared.</p>
              </div>

              {/* Box 3 */}
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[450ms] p-5 bg-white/5 rounded-xl border border-white/10 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="size-9 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                <img className="size-5" src="/ai-meetings/Frame (60).png"/>
                </div>
                <h4 className="font-bold text-sm text-white tracking-tight">Sensitive exclusions</h4>
                <p className="mt-1 text-xs text-slate-400 leading-5">Disable summaries for legal, HR, executive, or regulated spaces.</p>
              </div>

              {/* Box 4 */}
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[500ms] p-5 bg-white/5 rounded-xl border border-white/10 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="size-9 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                <img className="size-5" src="/ai-meetings/Frame (61).png"/>
                </div>
                <h4 className="font-bold text-sm text-white tracking-tight">Guest & external</h4>
                <p className="mt-1 text-xs text-slate-400 leading-5">Control whether external participants can receive or view summaries.</p>
              </div>

              {/* Box 5 */}
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[550ms] p-5 bg-white/5 rounded-xl border border-white/10 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="size-9 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                <img className="size-5" src="/ai-meetings/Frame (62).png"/>
                </div>
                <h4 className="font-bold text-sm text-white tracking-tight">Retention</h4>
                <p className="mt-1 text-xs text-slate-400 leading-5">Set retention rules for summaries, transcripts, recordings, and exports.</p>
              </div>

              {/* Box 6 */}
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[600ms] p-5 bg-white/5 rounded-xl border border-white/10 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="size-9 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                <img className="size-5" src="/ai-meetings/Frame (63).png"/>
                </div>
                <h4 className="font-bold text-sm text-white tracking-tight">Audit logs</h4>
                <p className="mt-1 text-xs text-slate-400 leading-5">Record created, edited, approved, shared, exported, and policy changes.</p>
              </div>

            </div>

            {/* Right Display Media Graphic Card */}
            <div className="lg:col-span-6 flex justify-center py-4 order-1 lg:order-2">
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[350ms] w-full max-w-[625px] rounded-[20px] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <img className="w-full h-auto object-cover" src="/ai-meetings/27083164-4408-4aae-a600-88da1415a49f 1.png" alt="Governance dashboard demo layout" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}