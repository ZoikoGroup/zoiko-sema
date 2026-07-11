'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FeatureCardProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  badgeText: string;
  restBg: string;
  hoverBg: string;
  restLabel: string;
  hoverLabel: string;
  restTitle: string;
  hoverTitle: string;
  restDesc: string;
  hoverDesc: string;
}

const GRADIENT = "linear-gradient(135deg, #4F46E5 0%, #2D2A7A 100%)";

// ── Intersection-observer hook (same pattern used across the other
// section components — locks visibility once in view) ──
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

export default function WhyTeamCollaboration() {
  // Scroll-triggered reveals for the header and the card grid
  const { ref: headRef, inView: headInView } = useInView(0.15);
  const { ref: cardsRef, inView: cardsInView } = useInView(0.1);

  const features: FeatureCardProps[] = [
    {
      id: 1,
      icon: (
        <img className='w-6 h-6 transition-transform duration-300 group-hover:scale-110 brightness-0 dark:brightness-200 group-hover:brightness-200' src="/TeamCollaboration/Frame (2).png" alt="" />
      ),
      title: 'Keep teams aligned',
      description: 'Centralize conversations, decisions, files, and updates so everyone stays on the same page.',
      badgeText: 'Shared context',
      restBg: "#ffffff",
      hoverBg: GRADIENT,
      restLabel: "#4F46E5",
      hoverLabel: "#c7c9ef",
      restTitle: "#0f172a",
      hoverTitle: "#ffffff",
      restDesc: "#64748b",
      hoverDesc: "#c7caed"
    },
    {
      id: 2,
      icon: (
        <img className='w-6 h-6 transition-transform duration-300 group-hover:scale-110 brightness-0 dark:brightness-200 group-hover:brightness-200' src="/TeamCollaboration/Frame.png" alt="" />
      ),
      title: 'Reduce communication friction',
      description: 'Move from messages to meetings, tasks, and follow-ups without losing the thread.',
      badgeText: 'Chat → Meeting → Task',
      restBg: "#ffffff",
      hoverBg: GRADIENT,
      restLabel: "#4F46E5",
      hoverLabel: "#c7c9ef",
      restTitle: "#0f172a",
      hoverTitle: "#ffffff",
      restDesc: "#64748b",
      hoverDesc: "#c7caed"
    },
    {
      id: 3,
      icon: (
        <img className='w-6 h-6 transition-transform duration-300 group-hover:scale-110 brightness-0 dark:brightness-200 group-hover:brightness-200' src="/TeamCollaboration/Frame (1).png" alt="" />
      ),
      title: 'Support secure growth',
      description: 'Use governed spaces, role-based access, guest controls, and audit-ready collaboration.',
      badgeText: 'Security · RBAC',
      restBg: "#ffffff",
      hoverBg: GRADIENT,
      restLabel: "#4F46E5",
      hoverLabel: "#c7c9ef",
      restTitle: "#0f172a",
      hoverTitle: "#ffffff",
      restDesc: "#64748b",
      hoverDesc: "#c7caed"
    }
  ];

  return (
    <>
      <style>{`
        /* ── Scroll-based fade & float entrance ── */
        @keyframes wtcScrollFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .wtc-hidden  { opacity: 0; transform: translateY(40px); }
        .wtc-visible { animation: wtcScrollFadeUp .75s cubic-bezier(.22,1,.36,1) forwards; }

        /* ── Card layered architecture ── */
        .wtc-card {
          position: relative;
          isolation: isolate;
          transition: transform .35s cubic-bezier(.22,1,.36,1),
                      box-shadow .35s cubic-bezier(.22,1,.36,1);
          will-change: transform;
        }
        .wtc-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 24px 48px rgba(15,15,40,0.12);
        }

        .wtc-bg-layer {
          position: absolute;
          inset: 0;
          transition: opacity .45s ease;
          border-radius: inherit;
        }
        .wtc-bg-rest { opacity: 1; z-index: 0; }
        .wtc-bg-hover { opacity: 0; z-index: 1; }
        
        .wtc-card:hover .wtc-bg-rest { opacity: 0; }
        .wtc-card:hover .wtc-bg-hover { opacity: 1; }
        .wtc-content { position: relative; z-index: 2; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; }

        /* Variable-driven crossfade text engine */
        .wtc-title, .wtc-desc {
          transition: color .4s ease;
          color: var(--rest) !important;
        }

        .wtc-card:hover .wtc-title,
        .wtc-card:hover .wtc-desc {
          color: var(--hover) !important;
        }

        /* Badge text states */
        .wtc-badge {
          transition: all .4s ease;
        }
        .wtc-card:hover .wtc-badge {
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
          color: #ffffff !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .wtc-hidden, .wtc-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .wtc-card:hover { transform: none !important; }
          .wtc-bg-layer { transition: none !important; }
        }
      `}</style>

      <section className="w-full bg-white dark:bg-slate-900 py-20 antialiased text-slate-900 dark:text-white transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col items-center gap-12">
          
          {/* Section Typography Header Block - Animates when scrolled to */}
          <div 
            ref={headRef}
            className={`max-w-[720px] w-full text-center flex flex-col items-center space-y-3 wtc-hidden ${
              headInView ? "wtc-visible" : ""
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block">
              Why Team Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-10">
              Built for the way teams actually work
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
              One workspace for conversations, meetings, files, tasks, decisions, and AI-assisted follow-up — so context stays visible and next steps are easy to own.
            </p>
          </div>

          {/* Dynamic Grid Layout Platform Features - Cards float up cascadingly when section is in viewport */}
          <div 
            ref={cardsRef}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            {features.map((feature, idx) => (
              <div 
                key={feature.id} 
                className={`group wtc-card border border-slate-200 dark:border-slate-800 shadow-[0px_1px_2px_0px_rgba(16,22,60,0.06)] flex flex-col justify-between items-start rounded-2xl wtc-hidden ${
                  cardsInView ? "wtc-visible" : ""
                }`}
                style={{
                  animationDelay: `${idx * 0.12}s`,
                }}
              >
                {/* Crossfading Background Layers */}
                <div className="wtc-bg-layer wtc-bg-rest bg-white dark:bg-slate-800/40" />
                <div className="wtc-bg-layer wtc-bg-hover" style={{ background: feature.hoverBg }} />

                {/* Content Container Area */}
                <div className="wtc-content p-6">
                  <div className="space-y-4 w-full flex-1">
                    {/* Visual Icon Container Platform Element */}
                    <div className="size-11 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:rotate-3">
                      {feature.icon}
                    </div>

                    {/* Feature Title */}
                    <h3 
                      className="wtc-title text-lg font-bold leading-6 pt-1 dark:text-white"
                      style={{ '--rest': feature.restTitle, '--hover': feature.hoverTitle } as React.CSSProperties}
                    >
                      {feature.title}
                    </h3>

                    {/* Narrative Detail Descriptions */}
                    <p 
                      className="wtc-desc text-base font-normal leading-relaxed dark:text-slate-400"
                      style={{ '--rest': feature.restDesc, '--hover': feature.hoverDesc } as React.CSSProperties}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Lower Context Label Tag */}
                  <div className="wtc-badge inline-flex items-center px-3 py-1 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full !mt-6">
                    {feature.badgeText}
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