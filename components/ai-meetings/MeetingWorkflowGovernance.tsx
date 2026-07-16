"use client"
import { useRouter } from 'next/navigation';
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

export default function ZoikoSemaPlatformTour() {
  const [liveRef, liveVisible] = useScrollReveal();
  const [shareRef, shareVisible] = useScrollReveal();
  const [govRef, govVisible] = useScrollReveal();

  const integrationApps = [
    { name: 'Mail', desc: 'Send a clean follow-up email after the meeting.', linkText: 'Draft follow-up',href:"/follow-up" },
    { name: 'Calendar', desc: 'Attach summary to the meeting event and next meeting.', linkText: 'Attach to event',href:"/attach-to-event" },
    { name: 'Files', desc: 'Save the approved summary as a shared document or PDF.', linkText: 'Save summary',href:"/save-summary" },
    { name: 'Search', desc: 'Find outcomes later by decision, person, date, topic, or client.', linkText: 'Search records',href:"/search-records" },
    { name: 'ZoikoTime', desc: 'Connect approved outcomes to work context where policy allows.', linkText: 'Explore bridge',href:"/explore-bridge" },
  ];

  const policyRows = [
    {
      title: 'Consent and participant notice',
      desc: 'Participants should understand when summaries are active.',
      tag: 'Visible meeting state',
      color: 'bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300'
    },
    {
      title: 'Workspace policy',
      desc: 'Admins control when summaries can be created, shared, exported, or retained.',
      tag: 'Server-side enforced',
      color: 'bg-violet-200 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'
    },
    {
      title: 'Human review',
      desc: 'AI-generated outputs remain reviewable and editable.',
      tag: 'User reviewable',
      color: 'bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300'
    },
    {
      title: 'Confidential Mode boundary',
      desc: 'Confidential Mode meetings do not expose content for AI summary processing.',
      tag: 'Processing disabled',
      color: 'bg-rose-100 text-red-700 dark:bg-rose-950/60 dark:text-rose-300'
    },
    {
      title: 'Audit support',
      desc: 'Generation, sharing, export, deletion, and admin changes are traceable where required.',
      tag: 'Audit logged',
      color: 'bg-orange-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
    }
  ];
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">

      {/* ========================================== */}
      {/* SECTION 1: LIVE EXPERIENCE                 */}
      {/* ========================================== */}
      <section
        ref={liveRef}
        className="w-full bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 py-24 px-4 sm:px-6 lg:px-8 relative text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(at_20%_15%,rgba(99,102,241,0.25),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          {/* Animated Header Sentences */}
          <div className={`text-center space-y-3 transition-all duration-1000 transform ${liveVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-white rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/90 font-sans">Live Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
              The summary panel feels native to the meeting, not bolted on.
            </h2>
            <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto font-sans">
              Meeting grid stays primary. The AI panel stays useful and clear — never intrusive.
            </p>
          </div>

          {/* Side-by-Side Flex Layout Container */}
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-1000 delay-200 transform ${liveVisible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'}`}>
            {/* Embedded Live Video Frame */}
            <div className="lg:col-span-7 bg-slate-900/40 rounded-2xl border border-white/10 shadow-2xl overflow-hidden aspect-[608/384] transition-transform duration-500 hover:scale-[1.01]">
              <img 
                className="w-full h-full object-cover" 
                src="/ai-meetings/image 54.png" 
                alt="Native real-time communication user grid featuring a integrated workspace layout" 
              />
            </div>

            {/* Action panel card */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-col justify-center space-y-5 transition-all duration-300 hover:bg-white/15">
              <h3 className="text-lg font-bold font-sans text-white">
                Summary · Decisions · Actions · Follow-up
              </h3>
              <p className="text-sm text-white/80 leading-relaxed font-sans">
                Tabs stay within one click. Primary actions: share recap, create follow-up, copy decisions, save to notes.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-full shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
                  Share recap
                </button>
                <button className="px-5 py-2.5 border border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-semibold text-xs rounded-full transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0">
                  Create follow-up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================== */}
      {/* SECTION 2: SHARE AND CONTINUE WORK         */}
      {/* ========================================== */}
      <section
        ref={shareRef}
        className="w-full bg-white dark:bg-gray-950 py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100 dark:border-gray-900"
      >
        <div className="max-w-7xl mx-auto space-y-14">
          {/* Animated Header Sentences */}
          <div className={`text-center space-y-3 transition-all duration-1000 transform ${shareVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-sans">Share and Continue Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              Summaries are not dead-end documents.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-sans">
              They continue into the surfaces where work actually happens.
            </p>
          </div>

          {/* Integration Visual Hero Display */}
          <div className={`relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 dark:border-gray-800 bg-slate-50 dark:bg-gray-900 aspect-[1136/384] w-full transition-all duration-1000 delay-150 transform ${shareVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} hover:scale-[1.003] group`}>
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.015]" 
              src="/ai-meetings/image 55.png" 
              alt="Workspace connectivity schematic illustrating downstream export hooks" 
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-4 text-center">
              <p className="text-xs font-medium text-white/95 tracking-wide max-w-3xl mx-auto font-sans">
                Integration visual: summaries connect to mail, calendar, files, and ZoikoTime only through approved workflows.
              </p>
            </div>
          </div>

          {/* Grid of Dynamic App Integration Targets */}
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 transition-all duration-1000 delay-300 transform ${shareVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {integrationApps.map((app, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-slate-200/70 dark:border-gray-850 p-5 rounded-2xl shadow-[0px_2px_8px_rgba(18,19,43,0.01)] flex flex-col justify-between space-y-4 group transition-all duration-300 hover:shadow-md hover:border-blue-500/30 dark:hover:border-blue-400/30"
              >
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {app.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-sans">
                    {app.desc}
                  </p>
                </div>
                <div onClick={()=>router.push(app.href)} className="flex cursor-pointer items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                  <span>{app.linkText}</span>
                  <span className="font-bold">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================== */}
      {/* SECTION 3: GOVERNANCE AND PRIVACY          */}
      {/* ========================================== */}
      <section
        ref={govRef}
        className="w-full bg-violet-50/40 dark:bg-gray-900/30 py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Animated Header Sentences */}
          <div className={`text-center space-y-3 transition-all duration-1000 transform ${govVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-sans">Governance and Privacy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              Review-first, always. Never quietly automated.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-3xl mx-auto font-sans">
              Sema generates summaries and drafts follow-ups; users and workspace policy control sharing, exporting, and downstream action.
            </p>
          </div>

          {/* Graphic Media Block Container */}
          <div className={`rounded-2xl overflow-hidden shadow-md border border-slate-200/50 dark:border-gray-800 max-w-5xl mx-auto aspect-[1135/350] w-full transition-all duration-1000 delay-150 transform ${govVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} hover:scale-[1.002]`}>
            <img 
              className="w-full h-full object-cover" 
              src="/ai-meetings/image 56.png" 
              alt="Dashboard interface showcasing complex data transparency parameters" 
            />
          </div>

          {/* Structured Operational Audit List Group */}
          <div className={`bg-white dark:bg-gray-950 rounded-2xl border border-slate-200/80 dark:border-gray-850 shadow-sm divide-y divide-slate-100 dark:divide-gray-850 max-w-5xl mx-auto transition-all duration-1000 delay-300 transform ${govVisible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'}`}>
            {policyRows.map((row, idx) => (
              <div 
                key={idx} 
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-slate-50/60 dark:hover:bg-gray-900/40 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
              >
                <div className="space-y-1 max-w-2xl">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {row.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-normal font-sans">
                    {row.desc}
                  </p>
                </div>
                <div className="flex-shrink-0 self-start sm:self-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold font-sans tracking-wide transition-transform group-hover:scale-105 ${row.color}`}>
                    {row.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}