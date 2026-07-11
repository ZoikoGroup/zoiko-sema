'use client';

import React, { useEffect, useRef } from 'react';

export default function MeetingProductFeatures() {
  // Setup intersection observer to trigger classes when sections enter the viewport
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, // Triggers when 15% of the section is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find all reveal-ready children inside this section and animate them
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
      {/* Global CSS Keyframes for slow floating loop */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slow-drift {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-drift {
          animation: slow-drift 5s ease-in-out infinite;
        }
      `}} />

      {/* =======================================================================
          SECTION 1: SUMMARY OUTPUT FEATURE HIGHLIGHT
          ======================================================================= */}
      <section ref={section1Ref} className="relative w-full bg-white dark:bg-slate-950 py-16 sm:py-24 font-sans antialiased overflow-hidden">
        <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
          
          {/* Header Content Block */}
          <div className="max-w-[760px] w-full text-center flex flex-col items-center gap-3.5 mb-14 md:mb-20">
            <span className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Summary Output
            </span>
            <h2 className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-10">
              What every Zoiko Sema summary contains
            </h2>
            <p className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 text-base text-slate-500 dark:text-slate-400 leading-7">
              An overview, key points, confirmed decisions with source links, owned action items, open risks, linked files, and human review controls — one connected meeting record.
            </p>
          </div>

          {/* Interactive Layout Interface */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side Feature Grid Column */}
            <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col gap-4">
              {/* Feature Box 1 */}
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[400ms] p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="size-8 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white tracking-tight">Overview & key points</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-5">Meeting purpose, a short summary, and discussion highlights grouped by topic.</p>
              </div>

              {/* Feature Box 2 */}
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[500ms] p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="size-8 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <img className="size-4" src="/ai-meetings/Frame (47).png" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white tracking-tight">Decisions</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-5">Decision statement, owner, timestamp, and a link back to the source transcript.</p>
              </div>

              {/* Feature Box 3 */}
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[600ms] p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="size-8 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                   <img className="size-4" src="/ai-meetings/Frame (48).png" />                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white tracking-tight">Questions & risks</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-5">Open questions, dependencies, and unresolved topics captured for follow-up.</p>
              </div>
            </div>

            {/* Central Dashboard Display Graphic Image Area */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center py-4">
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[350ms] animate-drift w-full max-w-[565px] rounded-[20px] overflow-hidden shadow-2xl shadow-indigo-900/10 dark:shadow-black/50 transition-transform duration-500 hover:scale-[1.02]">
                <img className="w-full h-auto object-cover" src="/ai-meetings/c35b52b2-af92-40e6-99df-825bbce4d4ae 1.png" alt="Summary interface demo mock" />
              </div>
            </div>

            {/* Right Side Feature Grid Column */}
            <div className="lg:col-span-3 order-3 flex flex-col gap-4">
              {/* Feature Box 4 */}
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[450ms] p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="size-8 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <img className="size-4" src="/ai-meetings/Frame (49).png" />                    </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white tracking-tight">Action items</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-5">Task title, owner, due date, status, and a one-click create-task action.</p>
              </div>

              {/* Feature Box 5 */}
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[550ms] p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="size-8 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <img className="size-4" src="/ai-meetings/Frame (50).png" />  
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white tracking-tight">Files & links</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-5">Shared documents, recording, transcript, and chat references in one place.</p>
              </div>

              {/* Feature Box 6 */}
              <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[650ms] p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="size-8 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <img className="size-4" src="/ai-meetings/Frame (51).png" />  
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white tracking-tight">Review controls</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-5">Edit, approve, request correction, share, export, or lock the summary.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
          SECTION 2: ACTION ITEMS & DECISIONS WORKSPACE TRACKER
          ======================================================================= */}
      <section ref={section2Ref} className="relative w-full bg-violet-50/60 dark:bg-slate-900/40 py-16 sm:py-24 font-sans antialiased overflow-hidden">
        <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
          
          {/* Header Content Block */}
          <div className="max-w-[760px] w-full text-center flex flex-col items-center gap-3.5 mb-14 md:mb-16">
            <span className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Action Items & Decisions
            </span>
            <h2 className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-10">
              Follow-through you can track and trust
            </h2>
            <p className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 text-base text-slate-500 dark:text-slate-400 leading-7">
              Every action gets an owner and a due date; every decision is confirmed, timestamped, and traceable to its source.
            </p>
          </div>

          {/* Dual Interactive Workspace Column Tracker Cards */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Left Action Log Board Card */}
            <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[400ms] w-full p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-8 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                 <img className="size-4" src="/ai-meetings/Frame (49).png" />   
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">Action items</h3>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-5">Owner, due date, status, and source context — with one-click task creation.</p>
              
              {/* Task Rows Stack */}
              <div className="flex flex-col gap-3">
                {/* Row 1 */}
                <div className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between gap-3 transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-950">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="size-4 shrink-0 rounded-md border-2 border-[#8B9FEE] dark:border-[#8B9FEE]" />
                    <div className="min-w-0">
                      <h5 className="text-sm font-semibold text-slate-900 dark:text-white truncate">Finalize release notes</h5>
                      <p className="text-xs text-slate-400 dark:text-slate-500 truncate">From: "let's get the notes out" · # product-launch</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="size-6 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 shadow-sm" />
                    <span className="px-2 py-0.5 bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 font-bold text-[10px] rounded-full uppercase tracking-wider">Pending</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between gap-3 transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-950">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="size-4 shrink-0 rounded-md border-2 border-[#8B9FEE] dark:border-[#8B9FEE]" />
                    <div className="min-w-0">
                      <h5 className="text-sm font-semibold text-slate-900 dark:text-white truncate">QA sign-off before go-live</h5>
                      <p className="text-xs text-slate-400 dark:text-slate-500 truncate">Owner assigned from summary</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="size-6 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 shadow-sm" />
                    <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-bold text-[10px] rounded-full uppercase tracking-wider">Assigned</span>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between gap-3 transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-950">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="size-4 shrink-0 rounded-md bg-[#4169E1] flex items-center justify-center text-white">
                      <svg className="size-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-sm font-semibold text-slate-400 dark:text-slate-500 line-through truncate">Book technical demo</h5>
                      <p className="text-xs text-slate-400 dark:text-slate-500 truncate">Completed · synced to Tasks</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="size-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-sm" />
                    <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] rounded-full uppercase tracking-wider">Done</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Decision Audit Log Card */}
            <div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[500ms] w-full p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-8 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                   < img className="size-4" src="/ai-meetings/Frame (47).png" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">Decision log</h3>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-5">Confirmed decisions with who confirmed, when, and the source transcript link.</p>
              
              {/* Timeline Tree Layout */}
              <div className="relative pl-4 border-l-2 border-slate-100 dark:border-slate-800 flex flex-col gap-6">
                
                {/* Decision Block 1 */}
                <div className="relative group/item">
                  {/* Timeline node badge indicator */}
                  <div className="absolute -left-[23px] top-1 size-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 ring-4 ring-emerald-50 dark:ring-emerald-950/40" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Launch confirmed for Oct 14</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-5 mb-1">Go-live window locked after engineering sign-off.</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>Confirmed by Dev Rao · 10:06</span>
                    <button className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline transition-colors duration-200">View source →</button>
                  </div>
                </div>

                {/* Decision Block 2 */}
                <div className="relative group/item">
                  <div className="absolute -left-[23px] top-1 size-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 ring-4 ring-emerald-50 dark:ring-emerald-950/40" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Priority feature scope locked</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-5 mb-1">Two features deferred to the next cycle.</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>Confirmed by Maya Chen · 10:14</span>
                    <button className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline transition-colors duration-200">View source →</button>
                  </div>
                </div>

                {/* Decision Block 3 */}
                <div className="relative group/item">
                  <div className="absolute -left-[23px] top-1 size-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 ring-4 ring-emerald-50 dark:ring-emerald-950/40" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Weekly launch check-in added</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-5 mb-1">Recurring sync until go-live.</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>Confirmed by team · 10:22</span>
                    <button className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline transition-colors duration-200">View source →</button>
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