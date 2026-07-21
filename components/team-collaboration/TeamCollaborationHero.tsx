'use client';

import React, { useEffect, useRef, useState } from 'react';

// ── Intersection-observer hook (same pattern used across the other
// section components — locks visibility on once in view) ──
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

export default function TeamCollaborationHero() {
  // Scroll-triggered reveals for each half of the hero, plus the tag row
  const { ref: leftRef, inView: leftIn } = useInView(0.15);
  const { ref: rightRef, inView: rightIn } = useInView(0.15);
  const { ref: tagsRef, inView: tagsIn } = useInView(0.15);

  const statusTags = [
    { label: 'Active', color: 'bg-emerald-400' },
    { label: 'Pending review', color: 'bg-amber-500' },
    { label: 'Guest', color: 'bg-indigo-400' },
    { label: 'External', color: 'bg-blue-400' },
    { label: 'Synced', color: 'bg-emerald-400' },
    { label: 'AI summary ready', color: 'bg-sky-400' }
  ];

  return (
    <>
      <style>{`
        @keyframes tchFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tchFadeInScale {
          from { opacity: 0; transform: scale(0.98); }
          to   { opacity: 1; transform: scale(1); }
        }

        .tch-left-hidden  { opacity: 0; transform: translateY(24px); }
        .tch-left-visible { animation: tchFadeUp 1s cubic-bezier(.22,1,.36,1) forwards; }

        .tch-right-hidden  { opacity: 0; transform: scale(0.98); }
        .tch-right-visible { animation: tchFadeInScale 1s cubic-bezier(.22,1,.36,1) forwards; }

        .tch-tag { opacity: 0; transform: translateY(16px); }
        .tch-tags.tch-tags-visible .tch-tag {
          animation: tchFadeUp .5s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .tch-left-hidden, .tch-left-visible,
          .tch-right-hidden, .tch-right-visible, .tch-tag {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
        }
      `}</style>

      <section className="relative w-full min-h-[734px] bg-slate-950 text-white overflow-hidden flex items-center py-16 md:py-24 selection:bg-indigo-500/30">

        {/* Figma Radial Gradient Aura Effect Layout */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_-8%,rgba(59,130,246,0.22),transparent_60%)] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* Left Column Content Area */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 flex flex-col space-y-6 max-w-[568px] mx-auto lg:mx-0 tch-left-hidden ${
              leftIn ? 'tch-left-visible' : ''
            }`}
          >

            {/* Over-title Sub-header Label */}
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                Team Collaboration
              </span>
            </div>

            {/* Main Context Typography Heading */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Bring every team into <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                one clear workspace.
              </span>
            </h1>

            {/* Core Body Explainer Messaging */}
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-[540px]">
              Zoiko Sema helps teams align conversations, meetings, shared spaces, files, tasks, and AI-assisted follow-up so work moves forward with context and control.
            </p>

            {/* Embedded Interaction Navigation CTAs */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">

              {/* Primary Action Button */}
              <a
                href="/get-a-demo"
                className="relative px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold text-base shadow-[0px_10px_24px_-10px_rgba(79,70,229,0.75)] hover:shadow-[0px_10px_28px_-6px_rgba(79,70,229,0.9)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group cursor-pointer"
              >
                <span>Get a demo</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </a>

              {/* Secondary Option Action */}
              <a
                href="/start"
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 rounded-xl font-semibold text-base border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Start free
              </a>

              {/* Inline Text Link Integration CTA */}
              <button className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:text-white font-semibold text-base group transition-colors duration-200 cursor-pointer">
                <span className="flex items-center justify-center size-5 bg-white/10 group-hover:bg-indigo-500 text-white rounded-full text-xs transition-colors duration-200">▶</span>
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white group-hover:after:w-full after:transition-all after:duration-300">Watch product tour</span>
              </button>
            </div>

            {/* Active Framework Dynamic Indicators Group */}
            <div
              ref={tagsRef}
              className={`tch-tags ${tagsIn ? 'tch-tags-visible' : ''} flex flex-wrap gap-2 pt-2 max-w-[500px]`}
            >
              {statusTags.map((tag, idx) => (
                <div
                  key={idx}
                  className="tch-tag px-3 py-1.5 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 backdrop-blur-xs transition-all duration-500 hover:bg-white/10 hover:border-white/25"
                  style={{ animationDelay: `${idx * 0.06}s` }}
                >
                  <span className={`size-1.5 rounded-full ${tag.color} ${tag.label === 'Active' ? 'animate-pulse' : ''}`} />
                  <span className="text-slate-300 text-xs font-semibold leading-tight">
                    {tag.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Supplemental Fine-Print Subtext Details */}
            <p className="text-slate-400 text-sm font-normal leading-relaxed max-w-[500px] pt-2">
              Built for growing teams, business workspaces, and secure collaboration across departments.
            </p>
          </div>

          {/* Right Column Visual Graphic Area */}
          <div
            ref={rightRef}
            className={`lg:col-span-6 relative flex justify-center items-center w-full min-h-[400px] tch-right-hidden ${
              rightIn ? 'tch-right-visible' : ''
            }`}
            style={{ animationDelay: '0.15s' }}
          >
            <div className="relative w-full max-w-[533px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/60 backdrop-blur-md group transition-all duration-500 hover:border-white/20 hover:shadow-[0px_30px_60px_-15px_rgba(59,130,246,0.15)]">
              <img
                className="w-full h-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                src="/TeamCollaboration/hero.png"
                alt="Zoiko Sema Workspace Interface"
              />

              {/* Embedded Floating Secondary Graphic Component Overlay */}
              <div className="absolute left-6 bottom-6 w-28 md:w-32 aspect-[1/2] rounded-xl overflow-hidden border border-white/20 shadow-xl hidden sm:block transition-all duration-500 hover:scale-105 hover:border-white/40">
                <img
                  className="w-full h-full object-cover"
                  src="/TeamCollaboration/mobile-hero.png"
                  alt="Zoiko Sema Mobile Interface View"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
