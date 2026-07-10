'use client';

import React, { useEffect, useState, useRef } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  actionText: string;
  icon: React.ReactNode;
  restBg: string;
  hoverBg: string;
  restLabel: string;
  hoverLabel: string;
  restTitle: string;
  hoverTitle: string;
  restDesc: string;
  hoverDesc: string;
  restCta: string;
  hoverCta: string;
}

const GRADIENT = "linear-gradient(135deg, #4F46E5 0%, #2D2A7A 100%)";

// ── Intersection observer hook for scroll-triggered activation ──
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

export default function CoreFeatures() {
  // Separate observer triggers for the top header vs the lower card deck
  const { ref: headRef, inView: headInView } = useInView(0.2);
  const { ref: gridRef, inView: gridInView } = useInView(0.1);

  const features: FeatureCardProps[] = [
    {
      title: 'Team messaging',
      description: 'Fast messaging with channels, threads, mentions, reactions, and direct messages.',
      actionText: 'Open messaging',
      restBg: "#ffffff",
      hoverBg: GRADIENT,
      restLabel: "#4F46E5",
      hoverLabel: "#c7c9ef",
      restTitle: "#0f172a",
      hoverTitle: "#ffffff",
      restDesc: "#64748b",
      hoverDesc: "#c7caed",
      restCta: "#4F46E5",
      hoverCta: "#ffffff",
      icon: (
         <img className='w-5 h-5 transition-transform duration-300 group-hover:scale-110 brightness-0 dark:brightness-200 group-hover:brightness-200' src="/TeamCollaboration/Frame.png" alt="" />
      )
    },
    {
      title: 'Meetings and huddles',
      description: 'Start or join secure video meetings from the workspace when a conversation needs live discussion.',
      actionText: 'Open meetings',
      restBg: "#ffffff",
      hoverBg: GRADIENT,
      restLabel: "#4F46E5",
      hoverLabel: "#c7c9ef",
      restTitle: "#0f172a",
      hoverTitle: "#ffffff",
      restDesc: "#64748b",
      hoverDesc: "#c7caed",
      restCta: "#4F46E5",
      hoverCta: "#ffffff",
      icon: (
        <svg className="size-5 text-indigo-600 dark:text-indigo-400 transition-all duration-300 group-hover:text-white group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Channels and spaces',
      description: 'Create structured spaces for teams, projects, departments, clients, and topics.',
      actionText: 'Open spaces',
      restBg: "#ffffff",
      hoverBg: GRADIENT,
      restLabel: "#4F46E5",
      hoverLabel: "#c7c9ef",
      restTitle: "#0f172a",
      hoverTitle: "#ffffff",
      restDesc: "#64748b",
      hoverDesc: "#c7caed",
      restCta: "#4F46E5",
      hoverCta: "#ffffff",
      icon: (
        <img className='w-5 h-5 transition-transform duration-300 group-hover:scale-110 brightness-0 dark:brightness-200 group-hover:brightness-200' src="/TeamCollaboration/Frame (5).png" alt="" />
      )
    },
    {
      title: 'Files and decisions',
      description: 'Share files, capture decisions, and keep important context attached to the team conversation.',
      actionText: 'Open files',
      restBg: "#ffffff",
      hoverBg: GRADIENT,
      restLabel: "#4F46E5",
      hoverLabel: "#c7c9ef",
      restTitle: "#0f172a",
      hoverTitle: "#ffffff",
      restDesc: "#64748b",
      hoverDesc: "#c7caed",
      restCta: "#4F46E5",
      hoverCta: "#ffffff",
      icon: (
        <img className='w-5 h-5 transition-transform duration-300 group-hover:scale-110 brightness-0 dark:brightness-200 group-hover:brightness-200' src="/TeamCollaboration/Frame (3).png" alt="" />
      )
    },
    {
      title: 'Tasks and follow-ups',
      description: 'Turn messages and meetings into owned next steps with due dates and status.',
      actionText: 'Open tasks',
      restBg: "#ffffff",
      hoverBg: GRADIENT,
      restLabel: "#4F46E5",
      hoverLabel: "#c7c9ef",
      restTitle: "#0f172a",
      hoverTitle: "#ffffff",
      restDesc: "#64748b",
      hoverDesc: "#c7caed",
      restCta: "#4F46E5",
      hoverCta: "#ffffff",
      icon: (
        <img className='w-5 h-5 transition-transform duration-300 group-hover:scale-110 brightness-0 dark:brightness-200 group-hover:brightness-200' src="/TeamCollaboration/Frame (6).png" alt="" />
      )
    },
    {
      title: 'AI-assisted summaries',
      description: 'Summarize meetings, extract action items, and keep follow-up visible with admin-controlled AI.',
      actionText: 'Open AI detail',
      restBg: "#ffffff",
      hoverBg: GRADIENT,
      restLabel: "#4F46E5",
      hoverLabel: "#c7c9ef",
      restTitle: "#0f172a",
      hoverTitle: "#ffffff",
      restDesc: "#64748b",
      hoverDesc: "#c7caed",
      restCta: "#4F46E5",
      hoverCta: "#ffffff",
      icon: (
        <img className='w-5 h-5 transition-transform duration-300 group-hover:scale-110 brightness-0 dark:brightness-200 group-hover:brightness-200' src="/TeamCollaboration/Frame (4).png" alt="" />
      )
    }
  ];

  return (
    <>
      <style>{`
        /* ── Scroll-based fade & float entrance ── */
        @keyframes cfFadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .cf-hidden  { opacity: 0; transform: translateY(36px); }
        .cf-visible { animation: cfFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        /* ── Card Lift Transformation & Layer Layout ── */
        .cf-card {
          position: relative;
          isolation: isolate;
          transition: transform .32s cubic-bezier(.22,1,.36,1),
                      box-shadow .32s cubic-bezier(.22,1,.36,1);
          will-change: transform;
        }
        .cf-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(15,15,40,0.12);
        }

        .cf-bg-layer {
          position: absolute;
          inset: 0;
          transition: opacity .45s ease;
          border-radius: inherit;
        }
        .cf-bg-rest { opacity: 1; z-index: 0; }
        .cf-bg-hover { opacity: 0; z-index: 1; }
        
        .cf-card:hover .cf-bg-rest { opacity: 0; }
        .cf-card:hover .cf-bg-hover { opacity: 1; }
        .cf-content { position: relative; z-index: 2; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; }

        /* Variable Typography Engines */
        .cf-label, .cf-title, .cf-desc, .cf-cta {
          transition: color .4s ease;
          color: var(--rest) !important;
        }

        .cf-card:hover .cf-label,
        .cf-card:hover .cf-title,
        .cf-card:hover .cf-desc,
        .cf-card:hover .cf-cta {
          color: var(--hover) !important;
        }

        .cf-cta-arrow { transition: transform .22s ease; display: inline-block; }
        .cf-card:hover .cf-cta-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .cf-hidden, .cf-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .cf-card:hover { transform: none !important; }
          .cf-bg-layer { transition: none !important; }
        }
      `}</style>

      <section className="w-full bg-slate-50 dark:bg-slate-950 py-20 antialiased text-slate-900 dark:text-white transition-colors duration-300">
        <div className="max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center gap-12">
          
          {/* Header Block Section — Activates via Scroll view */}
          <div 
            ref={headRef}
            className={`max-w-[720px] w-full text-center flex flex-col items-center space-y-3 cf-hidden ${
              headInView ? "cf-visible" : ""
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block">
              Core Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-10">
              Everything a team needs to move work forward
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-[640px]">
              Capabilities mapped to real team needs — messaging, meetings, spaces, files, tasks, and AI-assisted follow-up.
            </p>
          </div>

          {/* Feature Cards Grid — Floats up cascadingly upon scroll entrance */}
          <div 
            ref={gridRef}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className={`group cf-card rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-[0px_1px_2px_0px_rgba(16,22,60,0.06)] flex flex-col justify-between cf-hidden ${
                  gridInView ? "cf-visible" : ""
                }`}
                style={{
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                {/* Crossfading Background Layers */}
                <div className="cf-bg-layer cf-bg-rest bg-white dark:bg-slate-900" />
                <div className="cf-bg-layer cf-bg-hover" style={{ background: feature.hoverBg }} />

                {/* Content Area */}
                <div className="cf-content p-6">
                  <div className="space-y-4">
                    {/* Icon Shield */}
                    <div className="size-11 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:rotate-3">
                      {feature.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className="cf-title text-lg font-bold leading-6 dark:text-white"
                      style={{ '--rest': feature.restTitle, '--hover': feature.hoverTitle } as React.CSSProperties}
                    >
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className="cf-desc text-sm font-normal leading-6 dark:text-slate-400"
                      style={{ '--rest': feature.restDesc, '--hover': feature.hoverDesc } as React.CSSProperties}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Interactive Action Link */}
                  <div 
                    className="cf-cta pt-6 flex items-center gap-1.5 text-sm font-semibold cursor-pointer"
                    style={{ '--rest': feature.restCta, '--hover': feature.hoverCta } as React.CSSProperties}
                  >
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-current group-hover:after:w-full after:transition-all after:duration-300">
                      {feature.actionText}
                    </span>
                    <svg 
                      className="size-3.5 cf-cta-arrow" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}