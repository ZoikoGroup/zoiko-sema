"use client";

import React, { useEffect, useRef, useState } from "react";

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

const checkmarkFeatures = [
  "AI-assisted notes",
  "Searchable memory",
  "Decisions and follow-ups",
  "Mail and calendar context",
  "Governed sharing",
  "Confidential Mode-aware",
];

export default function SemaNotesHeroSection() {
  const { ref: animRef, inView: animated } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes notesHeroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-hidden { opacity: 0; transform: translateY(30px); }
        .hero-visible { animation: notesHeroFadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* Hero Outer Wrapper with Dynamic Radial Atmosphere Deep Blend */}
      <section className="w-full bg-[#1e1b4b] bg-radial-[at_20%_15%] from-indigo-600/70 to-slate-950 pt-16 sm:pt-14 md:pt-14 pb-16 md:pb-16 overflow-hidden text-white relative">
        {/* Subtle Overlay Texture simulation */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div
          ref={animRef}
          className={`mx-auto w-full max-w-5xl px-6 sm:px-8 md:px-10 flex flex-col items-center text-center hero-hidden ${
            animated ? "hero-visible" : ""
          }`}
        >
          {/* Badge Pillar Indicator */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/20 rounded-full px-3.5 py-1.5 backdrop-blur-md mb-6 shadow-inner select-none">
            <span className="size-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-white/90 text-xs font-semibold tracking-wider font-sans">
              SEMA NOTES
            </span>
          </div>

          {/* Heading Core Title */}
          <h1 className="text-[clamp(28px,5vw,48px)] font-extrabold leading-[1.15] tracking-tight max-w-3xl mx-auto mb-5">
            Notes that keep every<br className="hidden sm:inline" /> conversation useful after it ends.
          </h1>

          {/* Subtext Context Payload */}
          <p className="text-white/60 text-sm sm:text-base font-normal leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
            Capture meeting notes, decisions, follow-ups, and conversation memory in one
            secure workspace — connected to messages, calls, mail, calendar, files, and search.
          </p>

          {/* Primary CTA Buttons Actions Frame */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12 sm:mb-16">
            <a
              href="/start-free"
              className="w-full sm:w-64 h-12 bg-blue-600 rounded-full text-white text-base font-semibold inline-flex items-center justify-center transition-all duration-200 hover:bg-blue-700 shadow-[0px_10px_30px_-8px_rgba(52,87,232,0.55)] hover:shadow-[0px_12px_32px_-6px_rgba(52,87,232,0.7)]"
            >
              Start Free
            </a>
            <a
              href="/contact-sales"
              className="w-full sm:w-64 h-12 rounded-full border border-white/60 text-white text-base font-semibold inline-flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              Contact Sales
            </a>
          </div>

          {/* Checkmark Grid Badges Matrix Layout */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3.5 max-w-4xl mx-auto mb-16 sm:mb-20">
            {checkmarkFeatures.map((feat, index) => (
              <div key={index} className="flex items-center gap-2 select-none">
                <span className="text-green-300 font-extrabold text-xs">✓</span>
                <span className="text-white/75 text-xs font-semibold tracking-wide">
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* App Sandbox Simulation Preview Panel Frame */}
          <div className="w-full max-w-4xl bg-white rounded-2xl shadow-[0px_40px_120px_-30px_rgba(80,58,215,0.55)] border border-slate-200/80 text-left overflow-hidden flex flex-col md:flex-row min-h-[384px]">
            
            {/* Left Workspace Panel: Notes Editor Body */}
            <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
              <div>
                {/* Embedded Navbar Action Tags Header */}
                <div className="flex flex-wrap items-center gap-2 pb-5 border-b border-slate-100 mb-5">
                  <span className="text-slate-900 text-sm font-bold pr-2 leading-tight">
                    Q3 Roadmap Review <br />Notes
                  </span>
                  <span className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-full select-none">
                    Notes
                  </span>
                  <span className="px-3 py-1.5 bg-violet-50 text-slate-600 text-xs font-semibold rounded-full select-none">
                    AI suggestions
                  </span>
                  <span className="px-3 py-1.5 bg-violet-50 text-slate-600 text-xs font-semibold rounded-full select-none">
                    Decisions
                  </span>
                  <span className="px-3 py-1.5 bg-violet-50 text-slate-600 text-xs font-semibold rounded-full select-none">
                    Follow-ups
                  </span>
                </div>

                {/* Simulated Content Typography Placeholder Skeleton Bars */}
                <div className="space-y-2.5 mb-6">
                  <div className="w-11/12 h-2.5 bg-slate-200 rounded-full" />
                  <div className="w-9/12 h-2.5 bg-slate-200 rounded-full" />
                  <div className="w-7/12 h-2.5 bg-slate-200 rounded-full" />
                </div>

                {/* Custom Highlight Categorized Tags Pills Row */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-violet-200 text-indigo-700 text-[11px] font-bold rounded-full">
                    Decision · Move launch to Oct 14
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-amber-800 text-[11px] font-bold rounded-full">
                    Follow-up · Daniel, due Fri
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-[11px] font-bold rounded-full">
                    AI suggested · Reviewed
                  </span>
                </div>
              </div>

              {/* Bottom Placeholder Skeleton Context */}
              <div className="space-y-2.5 mt-auto">
                <div className="w-10/12 h-2.5 bg-slate-200 rounded-full" />
                <div className="w-8/12 h-2.5 bg-slate-200 rounded-full" />
              </div>
            </div>

            {/* Right Meta Sidebar Panel: System Linked Data Streams */}
            <div className="w-full md:w-[340px] bg-violet-50/70 p-5 sm:p-6 flex flex-col gap-4">
              <span className="text-gray-400 text-[10px] font-bold tracking-wider uppercase block mb-1 select-none">
                Related context
              </span>

              {/* Calendar Data Event Component Node */}
              <div className="w-full bg-white rounded-xl border border-slate-200/90 p-3 shadow-sm hover:border-indigo-200 transition-colors duration-200">
                <div className="text-slate-900 text-xs font-bold mb-0.5">
                  📅 Q3 Roadmap Review
                </div>
                <div className="text-gray-400 text-[11px] font-normal">
                  Calendar · Today, 2:00 PM
                </div>
              </div>

              {/* Mail Segment Notification Node */}
              <div className="w-full bg-white rounded-xl border border-slate-200/90 p-3 shadow-sm hover:border-indigo-200 transition-colors duration-200">
                <div className="text-slate-900 text-xs font-bold mb-0.5">
                  ✉️ RE: Roadmap priorities
                </div>
                <div className="text-gray-400 text-[11px] font-normal">
                  Mail thread · 3 messages
                </div>
              </div>

              {/* Static Cloud File Asset Link Attachment */}
              <div className="w-full bg-white rounded-xl border border-slate-200/90 p-3 shadow-sm hover:border-indigo-200 transition-colors duration-200">
                <div className="text-slate-900 text-xs font-bold mb-0.5">
                  📁 roadmap-draft-v3.pdf
                </div>
                <div className="text-gray-400 text-[11px] font-normal">
                  Files · Linked
                </div>
              </div>

              {/* Operational Security Shield Badge */}
              <div className="mt-auto pt-4 border-t border-slate-200/50">
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-[11px] font-bold rounded-full select-none">
                  🔒 Shared with Product team only
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}