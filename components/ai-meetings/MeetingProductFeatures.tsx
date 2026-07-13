"use client"
import React, { useEffect, useRef, useState } from 'react';

// --- CUSTOM SCROLL REVEAL HOOK FOR FLOATING ANIMATIONS ---
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
        rootMargin: '0px 0px -60px 0px' 
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function ZoikoSemaProductTour() {
  const [howItWorksRef, howItWorksVisible] = useScrollReveal();
  const [outputsRef, outputsVisible] = useScrollReveal();

  const workflowSteps = [
    {
      num: 1,
      color: 'bg-blue-600',
      title: 'Meeting or call',
      desc: 'Capture live discussion context, participants, chat, and metadata where policy allows.',
    },
    {
      num: 2,
      color: 'bg-indigo-600',
      title: 'Transcript',
      desc: 'Speaker-aware transcript with timestamps where recording is enabled.',
    },
    {
      num: 3,
      color: 'bg-teal-600',
      title: 'Summary',
      desc: 'A concise recap focused on outcomes, not filler.',
    },
    {
      num: 4,
      color: 'bg-amber-700',
      title: 'Decisions and owners',
      desc: 'Confirmed decisions, owners, due dates, blockers, and open questions.',
    },
    {
      num: 5,
      color: 'bg-slate-900 dark:bg-slate-800',
      title: 'Follow-up and memory',
      desc: 'Drafted recap connected to Mail, Calendar, Files, and Search.',
    },
  ];

  const graphicCards = [
    {
      title: 'Executive summary',
      desc: 'Short meeting recap, context, outcome, and key points.',
      img: '/ai-meetings/image 51 (1).png',
    },
    {
      title: 'Confirmed decisions',
      desc: 'Decisions, rationale, and status — creating accountability and reducing ambiguity.',
      img: '/ai-meetings/image 52 (1).png',
    },
    {
      title: 'Named owners',
      desc: 'Owners linked to next steps — moving teams from discussion to execution.',
      img: '/ai-meetings/image 53.png',
    },
  ];

  const metricCards = [
    {
      tag: 'Action items',
      tagColor: 'bg-orange-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300',
      title: 'Task, owner, due date',
      desc: 'Source context included — turning the summary into operational follow-through.',
    },
    {
      tag: 'Risks',
      tagColor: 'bg-rose-100 text-red-700 dark:bg-rose-950/60 dark:text-rose-300',
      title: 'Questions and risks',
      desc: 'Unresolved questions, blockers, risks, and dependencies surfaced early.',
    },
    {
      tag: 'Memory',
      tagColor: 'bg-violet-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300',
      title: 'Searchable memory',
      desc: 'Meeting record connected to workspace search for retention and reuse.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300">

      {/* ========================================== */}
      {/* SECTION 1: HOW IT WORKS                    */}
      {/* ========================================== */}
      <section
        ref={howItWorksRef}
        className={`w-full bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out transform ${
          howItWorksVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto space-y-14">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-sans block">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              From meeting to summary to decision to follow-up.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-sans">
              Sema does not stop at transcription. Every meeting becomes a structured, accountable work record.
            </p>
          </div>

          {/* Central Workspace Image Frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 dark:border-gray-800 bg-slate-50 dark:bg-gray-900 aspect-[1136/420] w-full transition-transform duration-700 hover:scale-[1.005] group">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              src="/ai-meetings/image 50 (1).png" 
              alt="Visual workflow lifecycle linking meeting data stream to analytical workspace memory record" 
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-4 text-center">
              <p className="text-xs font-medium text-white/90 tracking-wide max-w-2xl mx-auto font-sans">
                Lifecycle visual: meeting, transcript, summary, decisions, and follow-up connected as one work record.
              </p>
            </div>
          </div>

          {/* Grid Process Steps Map */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-slate-200/80 dark:border-gray-850 p-6 rounded-2xl flex flex-col justify-between shadow-[0px_2px_8px_rgba(18,19,43,0.01)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-blue-500/40 dark:hover:border-blue-400/30 group"
              >
                <div className="space-y-4">
                  <div className={`size-7 ${step.color} rounded-full flex items-center justify-center text-white text-xs font-black shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                    {step.num}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-sans transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: SUMMARY OUTPUTS                 */}
      {/* ========================================== */}
      <section
        ref={outputsRef}
        className={`w-full bg-violet-50/40 dark:bg-gray-900/50 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 dark:border-gray-850 transition-all duration-1000 ease-out transform ${
          outputsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="text-left space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-sans">
                Summary Outputs
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight font-sans">
              Every summary produces usable work <br className="hidden sm:inline" />
              artifacts, not just paragraphs.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 font-sans">
              This is exactly what a user gets after each meeting.
            </p>
          </div>

          {/* Graphic Showcase Grid Tier */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {graphicCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-950 border border-slate-200/80 dark:border-gray-850 rounded-2xl p-6 shadow-[0px_8px_24px_rgba(18,19,43,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-blue-500/30 dark:hover:border-blue-400/30 group"
              >
                <div className="w-full aspect-[320/192] rounded-xl overflow-hidden bg-slate-50 dark:bg-gray-900 mb-5 border border-slate-100 dark:border-gray-800">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white font-sans mb-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Value Action Pills Info Tier */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metricCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-950 border border-slate-200/80 dark:border-gray-850 rounded-2xl p-6 shadow-[0px_4px_16px_rgba(18,19,43,0.01)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-blue-500/30 dark:hover:border-blue-400/30 group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold font-sans tracking-wide ${card.tagColor}`}>
                    {card.tag}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-sans transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}